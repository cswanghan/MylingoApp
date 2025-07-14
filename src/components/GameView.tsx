import React, { useState, useEffect, useMemo } from 'react';
import { WordUnit } from '../types';
import { WordCell } from './WordCell';
import { LetterButton } from './LetterButton';
import { audioPlayer } from '../utils/audioPlayer';

interface GameViewProps {
  wordUnit: WordUnit;
  onCheck: (answer: string) => void;
}

export const GameView: React.FC<GameViewProps> = ({ wordUnit, onCheck }) => {
  const [currentGuess, setCurrentGuess] = useState<(string | null)[]>([]);
  const [usedChoiceIndexes, setUsedChoiceIndexes] = useState<Set<number>>(new Set());
  
  // 使用 useMemo 确保候选字母顺序在组件生命周期内保持不变
  const allChoices = useMemo(() => {
    // 获取所有需要填入的正确字母（不去重，因为可能有重复字母）
    const correctLetters = wordUnit.missingIndexes.map(i => wordUnit.word[i]);
    
    // 合并正确字母和干扰字母
    const choices = [...correctLetters, ...wordUnit.distractors];
    
    // 随机排序
    return choices.sort(() => 0.5 - Math.random());
  }, [wordUnit]);
  
  useEffect(() => {
    setCurrentGuess(new Array(wordUnit.word.length).fill(null));
    setUsedChoiceIndexes(new Set());
    
    // 预加载音频
    audioPlayer.preloadWord(wordUnit.word);
  }, [wordUnit]);

  const handleLetterClick = (letter: string, choiceIndex: number) => {
    const nextEmptyIndex = wordUnit.missingIndexes.find(
      index => !currentGuess[index]
    );
    
    if (nextEmptyIndex !== undefined) {
      const newGuess = [...currentGuess];
      newGuess[nextEmptyIndex] = letter;
      setCurrentGuess(newGuess);
      setUsedChoiceIndexes(new Set([...usedChoiceIndexes, choiceIndex]));
      
      // 检查是否所有空格都已填入
      const isNowComplete = wordUnit.missingIndexes.every(index => 
        index === nextEmptyIndex ? true : newGuess[index] !== null
      );
      
      // 如果完成，自动检查答案
      if (isNowComplete) {
        setTimeout(() => {
          const answer = wordUnit.word.split('').map((char, index) => 
            wordUnit.missingIndexes.includes(index) ? newGuess[index] : char
          ).join('');
          onCheck(answer);
        }, 300); // 短暂延迟，让用户看到最后一个字母的填入
      }
    }
  };

  const handleCellClick = (index: number) => {
    const letter = currentGuess[index];
    if (letter) {
      const newGuess = [...currentGuess];
      newGuess[index] = null;
      setCurrentGuess(newGuess);
      
      // 找到第一个使用的且字母相同的选择索引并释放它
      const usedChoiceIndex = Array.from(usedChoiceIndexes).find(
        choiceIndex => allChoices[choiceIndex] === letter
      );
      
      if (usedChoiceIndex !== undefined) {
        const newUsedChoiceIndexes = new Set(usedChoiceIndexes);
        newUsedChoiceIndexes.delete(usedChoiceIndex);
        setUsedChoiceIndexes(newUsedChoiceIndexes);
      }
    }
  };

  const isComplete = wordUnit.missingIndexes.every(index => currentGuess[index]);
  
  const handlePlayAudio = () => {
    audioPlayer.playWord(wordUnit.word);
  };


  return (
    <div>
      {/* 单词释义提示 */}
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border-2 border-blue-200 shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-3xl">💡</span>
            <h3 className="text-xl font-bold text-blue-800">这个单词的意思是</h3>
          </div>
          <p className="text-2xl font-bold text-blue-900 mb-3 bg-white rounded-lg py-2 px-4 shadow-sm">
            {wordUnit.meaning}
          </p>
          <div className="bg-white bg-opacity-60 rounded-lg p-3 mb-3">
            <p className="text-sm text-blue-700 font-medium">
              例句：<span className="italic">"{wordUnit.example}"</span>
            </p>
          </div>
          <div className="bg-white bg-opacity-80 rounded-lg p-2">
            <p className="text-sm text-blue-600 font-mono">
              发音：<span className="font-bold">{wordUnit.phonetic}</span>
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-center text-slate-600 text-lg font-medium">根据释义，将字母填入正确位置</p>
          <button
            onClick={handlePlayAudio}
            className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
            title="播放发音"
          >
            🔊 <span className="text-sm hidden sm:inline">播放发音</span>
          </button>
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-1 md:gap-2 mb-8">
        {wordUnit.word.split('').map((char, index) => {
          const isMissing = wordUnit.missingIndexes.includes(index);
          const displayChar = isMissing ? currentGuess[index] || '' : char;
          
          return (
            <WordCell
              key={index}
              char={displayChar}
              isMissing={isMissing}
              onClick={() => isMissing && currentGuess[index] ? handleCellClick(index) : undefined}
            />
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
        {allChoices.map((letter, index) => (
          <LetterButton
            key={`${letter}-${index}`}
            letter={letter}
            disabled={usedChoiceIndexes.has(index)}
            onClick={() => handleLetterClick(letter, index)}
          />
        ))}
      </div>

      {/* 提示信息 */}
      <div className="text-center text-gray-500 py-4">
        {isComplete ? (
          <div className="animate-pulse">
            <span className="text-lg">✨ 检查中...</span>
          </div>
        ) : (
          <span className="text-sm">
            选择字母填入空格 ({wordUnit.missingIndexes.length - wordUnit.missingIndexes.filter(i => currentGuess[i]).length} 个空格待填)
          </span>
        )}
      </div>
    </div>
  );
};