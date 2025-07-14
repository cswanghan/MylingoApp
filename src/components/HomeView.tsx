import React from 'react';

interface HomeViewProps {
  onStart: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onStart }) => {
  return (
    <div className="text-center">
      <img 
        src="https://placehold.co/150x150/58CC02/FFFFFF?text=Go!" 
        alt="开始学习图标" 
        className="mx-auto rounded-full mb-6"
      />
      <h1 className="text-2xl font-bold text-slate-800 mb-2">准备好开始了吗？</h1>
      <p className="text-slate-500 mb-8">完成每日挑战，解锁新关卡！</p>
      <button 
        onClick={onStart}
        className="w-full bg-success text-white font-bold py-4 rounded-xl text-lg hover:bg-green-600 transition-colors shadow-lg"
      >
        开始闯关
      </button>
    </div>
  );
};