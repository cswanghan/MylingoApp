import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { GameView } from './components/GameView';
import { ResultView } from './components/ResultView';
import { GameOverView } from './components/GameOverView';
import { Confetti } from './components/Confetti';
import { WordLibrary } from './components/WordLibrary';
import { MapView } from './components/MapView';
import { ReviewView } from './components/ReviewView';
import { ReviewReminder } from './components/ReviewReminder';
import { LevelCompleteView } from './components/LevelCompleteView';
import { RetryWrongWordsView } from './components/RetryWrongWordsView';
import { ResetProgressView } from './components/ResetProgressView';
import { wordData } from './data/words';
import { getInitialMapProgress } from './data/islands';
import { GameState, ViewType, WordUnit, MapProgress, Level } from './types';
import { SRSEngine } from './utils/srs';
import { saveWords, loadWords } from './utils/storage';
import { saveMapProgress, loadMapProgress, updateLevelProgress, getCurrentLevel, calculateStarsForLevel } from './utils/mapProgress';
import { pwaManager } from './utils/pwa';
import { reviewManager } from './utils/reviewManager';

function App() {
  const [view, setView] = useState<ViewType>('home');
  const [gameState, setGameState] = useState<GameState>({
    lives: 5,
    xp: 0,
    currentWordIndex: 0,
    currentGuess: [],
    wordList: []
  });
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [shakeWord, setShakeWord] = useState(false);
  const [showWordLibrary, setShowWordLibrary] = useState(false);
  const [showReviewView, setShowReviewView] = useState(false);
  const [customWords, setCustomWords] = useState<WordUnit[]>([]);
  const [mapProgress, setMapProgress] = useState<MapProgress>(getInitialMapProgress());
  const [currentLevel, setCurrentLevel] = useState<Level | null>(null);
  const [levelStartLives, setLevelStartLives] = useState(5);
  const [correctAnswersInLevel, setCorrectAnswersInLevel] = useState(0);
  const [totalAnswersInLevel, setTotalAnswersInLevel] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [levelWordStatus, setLevelWordStatus] = useState<Map<number, 'pending' | 'correct' | 'wrong'>>(new Map());
  const [originalLevelWords, setOriginalLevelWords] = useState<WordUnit[]>([]);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [levelCompleteData, setLevelCompleteData] = useState<{
    level: Level;
    stars: number;
    correctAnswers: number;
    totalAnswers: number;
    livesUsed: number;
    nextLevelName?: string;
  } | null>(null);

  useEffect(() => {
    const savedWords = loadWords();
    setCustomWords(savedWords);
    
    const savedMapProgress = loadMapProgress();
    if (savedMapProgress) {
      setMapProgress(savedMapProgress);
    }
    
    // 初始化PWA
    pwaManager.registerServiceWorker();
    
    // 更新复习计数
    setReviewCount(reviewManager.getAllReviewWords().length);
    
    initGame();
  }, []);
  
  // 监听地图进度变化，更新复习计数
  useEffect(() => {
    setReviewCount(reviewManager.getAllReviewWords().length);
  }, [mapProgress]);

  const initGame = () => {
    const allWords = customWords.length > 0 ? [...customWords, ...wordData] : [...wordData];
    const shuffledWords = allWords.sort(() => 0.5 - Math.random());
    setGameState({
      lives: 5,
      xp: 0,
      currentWordIndex: 0,
      currentGuess: [],
      wordList: shuffledWords
    });
    setIsReviewMode(false);
    setView('home');
  };

  const handleWordsChange = (words: WordUnit[]) => {
    setCustomWords(words);
    saveWords(words);
    initGame();
  };

  const handleStart = () => {
    const nextLevel = getCurrentLevel(mapProgress);
    console.log('开始游戏，获取到的关卡:', nextLevel);
    if (nextLevel) {
      startLevel(nextLevel);
    } else {
      console.log('没有可开始的关卡，跳转到地图');
      setView('map');
    }
  };

  const startLevel = (level: Level) => {
    setCurrentLevel(level);
    setLevelStartLives(gameState.lives);
    setCorrectAnswersInLevel(0);
    setTotalAnswersInLevel(0);
    setIsReviewMode(false);
    
    const levelWords = level.words;
    setOriginalLevelWords(levelWords);
    
    // 初始化单词状态
    const wordStatus = new Map();
    levelWords.forEach(word => {
      wordStatus.set(word.id, 'pending');
    });
    setLevelWordStatus(wordStatus);
    
    setGameState(prev => ({
      ...prev,
      wordList: levelWords,
      currentWordIndex: 0
    }));
    
    setView('game');
  };


  const completeLevel = () => {
    if (!currentLevel) return;
    
    const livesUsed = levelStartLives - gameState.lives;
    const stars = calculateStarsForLevel(correctAnswersInLevel, totalAnswersInLevel, livesUsed);
    const progress = 100; // 关卡完成
    
    const updatedProgress = updateLevelProgress(mapProgress, currentLevel.id, progress, stars);
    setMapProgress(updatedProgress);
    saveMapProgress(updatedProgress);
    
    // 检查下一关是否解锁
    const nextLevel = getCurrentLevel(updatedProgress);
    console.log('关卡完成后，下一关:', nextLevel);
    
    // 设置关卡完成数据
    setLevelCompleteData({
      level: currentLevel,
      stars,
      correctAnswers: correctAnswersInLevel,
      totalAnswers: totalAnswersInLevel,
      livesUsed,
      nextLevelName: nextLevel?.name
    });
    
    // 清空当前关卡状态
    setCurrentLevel(null);
    
    // 显示关卡完成页面
    setView('levelComplete');
  };

  const handleCheck = (answer: string) => {
    const currentWord = gameState.wordList[gameState.currentWordIndex];
    const correct = answer.toLowerCase() === currentWord.word;
    
    setIsCorrect(correct);
    setTotalAnswersInLevel(prev => prev + 1);
    
    if (correct) {
      setGameState(prev => ({ ...prev, xp: prev.xp + 10 }));
      setCorrectAnswersInLevel(prev => prev + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      
      // 更新单词状态为正确
      setLevelWordStatus(prev => {
        const newStatus = new Map(prev);
        newStatus.set(currentWord.id, 'correct');
        return newStatus;
      });
      
      // 如果这个单词之前做错过，仍然要记录为错题
      if (levelWordStatus.get(currentWord.id) === 'wrong') {
        reviewManager.addWrongWordToReview(currentWord.id);
        setReviewCount(reviewManager.getAllReviewWords().length);
      }
    } else {
      setGameState(prev => ({ ...prev, lives: prev.lives - 1 }));
      setShakeWord(true);
      setTimeout(() => setShakeWord(false), 500);
      
      // 更新单词状态为错误
      setLevelWordStatus(prev => {
        const newStatus = new Map(prev);
        newStatus.set(currentWord.id, 'wrong');
        return newStatus;
      });
      
      // 将错误单词添加到复习中心
      reviewManager.addWrongWordToReview(currentWord.id);
      
      // 立即更新复习计数
      setReviewCount(reviewManager.getAllReviewWords().length);
    }
    
    setView('result');
    
    if (gameState.lives <= 1 && !correct) {
      setTimeout(() => setView('gameOver'), 2000);
    }
  };

  const handleNext = () => {
    console.log('handleNext called, currentWordIndex:', gameState.currentWordIndex);
    console.log('wordList length:', gameState.wordList.length);
    console.log('isReviewMode:', isReviewMode);
    
    const newIndex = gameState.currentWordIndex + 1;
    console.log('New index will be:', newIndex);
    
    // 检查是否完成了当前轮次的所有单词
    if (newIndex >= gameState.wordList.length) {
      console.log('当前轮次完成');
      
      // 如果是复习模式，直接返回主页
      if (isReviewMode) {
        console.log('复习模式完成，返回主页');
        setIsReviewMode(false);
        setView('home');
        return;
      }
      
      // 关卡模式：检查是否所有原始单词都已正确完成
      console.log('关卡模式：检查是否有错题需要重做');
      const allWordsCorrect = originalLevelWords.every(word => 
        levelWordStatus.get(word.id) === 'correct'
      );
      
      if (allWordsCorrect) {
        console.log('所有单词都正确，关卡完成！');
        completeLevel();
        return;
      } else {
        console.log('还有错题需要重做，显示重做页面');
        
        // 找出所有错误的单词
        const wrongWordsList = originalLevelWords.filter(word => 
          levelWordStatus.get(word.id) === 'wrong'
        );
        
        console.log('错题列表:', wrongWordsList);
        
        // 准备重做单词列表
        setGameState(prev => ({
          ...prev,
          wordList: wrongWordsList,
          currentWordIndex: 0
        }));
        
        // 显示错题重做页面
        setView('retryWrongWords');
        return;
      }
    }
    
    setGameState(prev => ({
      ...prev,
      currentWordIndex: newIndex
    }));
    
    console.log('加载下一个单词，切换到游戏视图');
    setView('game');
  };

  const handleSRSFeedback = (remembered: boolean) => {
    const currentWord = gameState.wordList[gameState.currentWordIndex];
    const quality = SRSEngine.calculateQuality(isCorrect, remembered);
    console.log(`SRS Feedback: Word ID ${currentWord.id}, Quality: ${quality}`);
    
    // 更新SRS系统
    reviewManager.updateWordProgress(currentWord.id, quality);
  };
  
  const handleStartReview = (reviewWords: WordUnit[]) => {
    setGameState(prev => ({
      ...prev,
      wordList: reviewWords,
      currentWordIndex: 0
    }));
    setIsReviewMode(true);
    setShowReviewView(false);
    setView('game');
  };
  
  const handleResetProgress = () => {
    setView('resetProgress');
  };
  
  const handleResetConfirm = () => {
    localStorage.removeItem('word-game-map-progress');
    localStorage.removeItem('reviewData');
    setMapProgress(getInitialMapProgress());
    setCurrentLevel(null);
    setView('home');
  };
  
  const handleResetCancel = () => {
    setView('home');
  };
  
  const handleLevelCompleteContinue = () => {
    setLevelCompleteData(null);
    setView('home');
  };
  
  const handleRetryWrongWords = () => {
    // 将错误的单词重新设置为pending状态
    setLevelWordStatus(prev => {
      const newStatus = new Map(prev);
      gameState.wordList.forEach(word => {
        newStatus.set(word.id, 'pending');
      });
      return newStatus;
    });
    
    setView('game');
  };

  const currentWord = gameState.wordList[gameState.currentWordIndex];

  return (
    <div className="bg-slate-100 flex items-center justify-center min-h-screen p-4">
      {view === 'map' ? (
        <MapView
          mapProgress={mapProgress}
          onLevelSelect={startLevel}
          onBack={() => setView('home')}
        />
      ) : (
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <Header lives={gameState.lives} xp={gameState.xp} />
          
          <main className={`p-4 md:p-6 ${shakeWord ? 'animate-shake' : ''}`}>
            {view === 'home' && (
              <div>
                <HomeView onStart={handleStart} />
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setView('map')}
                    className="flex-1 py-3 px-4 border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    🗺️ 任务地图
                  </button>
                  <button
                    onClick={() => setShowWordLibrary(true)}
                    className="flex-1 py-3 px-4 border border-success text-success rounded-xl hover:bg-success hover:text-white transition-colors"
                  >
                    📚 词库管理
                  </button>
                </div>
                <button
                  onClick={() => setShowReviewView(true)}
                  className="w-full py-3 px-4 mt-2 border border-purple-500 text-purple-500 rounded-xl hover:bg-purple-500 hover:text-white transition-colors"
                >
                  🔄 复习中心 ({reviewCount})
                </button>
                <button
                  onClick={handleResetProgress}
                  className="w-full py-3 px-4 mt-2 border border-red-500 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-colors text-sm"
                >
                  🔄 重置进度
                </button>
              </div>
            )}
            {view === 'game' && currentWord && (
              <GameView wordUnit={currentWord} onCheck={handleCheck} />
            )}
            {view === 'result' && currentWord && (
              <ResultView 
                wordUnit={currentWord} 
                isCorrect={isCorrect}
                onNext={handleNext}
                onSRSFeedback={handleSRSFeedback}
              />
            )}
            {view === 'gameOver' && <GameOverView onRestart={initGame} />}
            {view === 'levelComplete' && levelCompleteData && (
              <LevelCompleteView
                completedLevel={levelCompleteData.level}
                stars={levelCompleteData.stars}
                correctAnswers={levelCompleteData.correctAnswers}
                totalAnswers={levelCompleteData.totalAnswers}
                livesUsed={levelCompleteData.livesUsed}
                nextLevelName={levelCompleteData.nextLevelName}
                onContinue={handleLevelCompleteContinue}
              />
            )}
            {view === 'retryWrongWords' && (
              <RetryWrongWordsView
                wrongWords={gameState.wordList}
                onContinue={handleRetryWrongWords}
              />
            )}
            {view === 'resetProgress' && (
              <ResetProgressView
                onConfirm={handleResetConfirm}
                onCancel={handleResetCancel}
              />
            )}
          </main>
        </div>
      )}
      
      {showConfetti && <Confetti />}
      
      {showWordLibrary && (
        <WordLibrary
          words={[...customWords, ...wordData]}
          onWordsChange={handleWordsChange}
          onClose={() => setShowWordLibrary(false)}
        />
      )}
      
      {showReviewView && (
        <ReviewView
          onClose={() => setShowReviewView(false)}
          onStartReview={handleStartReview}
        />
      )}
      
      {/* 复习提醒 - 只在主页显示 */}
      {view === 'home' && (
        <ReviewReminder
          onStartReview={() => setShowReviewView(true)}
        />
      )}
    </div>
  );
}

export default App;