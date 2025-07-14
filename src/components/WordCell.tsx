import React from 'react';

interface WordCellProps {
  char: string;
  isMissing: boolean;
  onClick?: () => void;
}

export const WordCell: React.FC<WordCellProps> = ({ char, isMissing, onClick }) => {
  const baseClasses = "w-12 h-14 md:w-14 md:h-16 flex items-center justify-center rounded-lg shadow-inner font-bold text-2xl uppercase";
  
  const getClasses = () => {
    if (isMissing && char) {
      return `${baseClasses} bg-yellow-100 border-yellow-400 border-2 cursor-pointer hover:bg-yellow-200`;
    }
    if (isMissing) {
      return `${baseClasses} bg-slate-200`;
    }
    return `${baseClasses} bg-white border border-slate-200`;
  };

  return (
    <div 
      className={getClasses()}
      onClick={isMissing && char ? onClick : undefined}
    >
      {char}
    </div>
  );
};