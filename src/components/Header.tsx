import React from 'react';

interface HeaderProps {
  lives: number;
  xp: number;
}

export const Header: React.FC<HeaderProps> = ({ lives, xp }) => {
  return (
    <header className="p-4 flex justify-between items-center border-b bg-slate-50">
      <div className="flex items-center gap-2">
        <span className="text-2xl">❤️</span>
        <span className="text-red-500 font-bold text-xl">{lives}</span>
      </div>
      <div className="text-slate-600 font-bold">KET 核心词汇</div>
      <div className="flex items-center gap-2">
        <span className="text-yellow-400 text-2xl">⭐</span>
        <span className="text-yellow-500 font-bold text-xl">{xp}</span>
      </div>
    </header>
  );
};