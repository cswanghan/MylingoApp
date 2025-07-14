import React, { useState, useEffect } from 'react';
import { WordUnit } from '../types';
import { audioPlayer } from '../utils/audioPlayer';

interface ResultViewProps {
  wordUnit: WordUnit;
  isCorrect: boolean;
  onNext: () => void;
  onSRSFeedback: (remembered: boolean) => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ 
  wordUnit, 
  isCorrect, 
  onNext, 
  onSRSFeedback 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFlipped(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  const handlePlayAudio = () => {
    audioPlayer.playWord(wordUnit.word);
  };

  const handleFeedback = (remembered: boolean) => {
    onSRSFeedback(remembered);
    onNext();
  };

  return (
    <div>
      <div className="perspective-600 h-80">
        <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}>
          {/* Front face */}
          <div className="absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center bg-white shadow-lg">
            <div className="text-8xl">
              {isCorrect ? '🎉' : '❌'}
            </div>
          </div>
          
          {/* Back face */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-50 rounded-xl p-6 text-center shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              <h2 className="text-4xl font-black text-slate-800 uppercase">{wordUnit.word}</h2>
              <button
                onClick={handlePlayAudio}
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                title="播放发音"
              >
                🔊
              </button>
            </div>
            <p className="text-slate-500 text-lg my-2">{wordUnit.phonetic}</p>
            <p className="text-2xl font-bold text-success my-4">{wordUnit.meaning}</p>
            <p className="text-slate-600 italic">"{wordUnit.example}"</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex gap-4">
        <button 
          onClick={() => handleFeedback(false)}
          className="w-full bg-red-100 text-red-600 font-bold py-3 rounded-xl text-base hover:bg-red-200 transition-colors"
        >
          没记住
        </button>
        <button 
          onClick={() => handleFeedback(true)}
          className="w-full bg-green-100 text-green-600 font-bold py-3 rounded-xl text-base hover:bg-green-200 transition-colors"
        >
          记住了
        </button>
      </div>
      
      <button 
        onClick={onNext}
        className="w-full bg-success text-white font-bold py-4 rounded-xl text-lg mt-4 hover:bg-green-600 transition-colors shadow-lg"
      >
        继续
      </button>
    </div>
  );
};