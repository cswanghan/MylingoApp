import React from 'react';

interface GameOverViewProps {
  onRestart: () => void;
}

export const GameOverView: React.FC<GameOverViewProps> = ({ onRestart }) => {
  return (
    <div className="text-center">
      <img 
        src="https://placehold.co/150x150/FF4B4B/FFFFFF?text=:(" 
        alt="游戏结束图标" 
        className="mx-auto rounded-full mb-6"
      />
      <h2 className="text-2xl font-bold text-slate-800 mb-2">生命值耗尽！</h2>
      <p className="text-slate-500 mb-8">休息一下吧，30分钟后恢复。或者... (广告位 TBD)</p>
      <button 
        onClick={onRestart}
        className="w-full bg-success text-white font-bold py-4 rounded-xl text-lg hover:bg-green-600 transition-colors shadow-lg"
      >
        重新开始
      </button>
    </div>
  );
};