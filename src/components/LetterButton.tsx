import React from 'react';

interface LetterButtonProps {
  letter: string;
  disabled: boolean;
  onClick: () => void;
}

export const LetterButton: React.FC<LetterButtonProps> = ({ letter, disabled, onClick }) => {
  const baseClasses = "w-12 h-12 md:w-14 md:h-14 rounded-lg text-2xl font-bold transition-all active:scale-95";
  const enabledClasses = "bg-white border-2 border-slate-200 text-slate-700 shadow-md hover:bg-slate-100";
  const disabledClasses = "bg-gray-100 border-2 border-gray-200 text-gray-400 opacity-30 cursor-not-allowed";
  
  return (
    <button
      className={`${baseClasses} ${disabled ? disabledClasses : enabledClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {letter.toUpperCase()}
    </button>
  );
};