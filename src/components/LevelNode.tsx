import React from 'react';
import { Level } from '../types';

interface LevelNodeProps {
  level: Level;
  onSelect: (level: Level) => void;
  position: { x: number; y: number };
}

export const LevelNode: React.FC<LevelNodeProps> = ({ level, onSelect, position }) => {
  const getNodeColor = () => {
    if (!level.isUnlocked) return 'bg-gray-300 border-gray-400';
    if (level.isCompleted) return 'bg-success border-green-600';
    if (level.isBoss) return 'bg-purple-500 border-purple-600';
    return 'bg-blue-500 border-blue-600';
  };

  const getNodeIcon = () => {
    if (level.isBoss) return '👑';
    if (level.isCompleted) return '✅';
    if (!level.isUnlocked) return '🔒';
    return '⭐';
  };

  const getStars = () => {
    const stars = [];
    for (let i = 0; i < 3; i++) {
      stars.push(
        <span key={i} className={i < level.stars ? 'text-yellow-400' : 'text-gray-300'}>
          ⭐
        </span>
      );
    }
    return stars;
  };

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
    >
      <button
        onClick={() => level.isUnlocked && onSelect(level)}
        disabled={!level.isUnlocked}
        className={`
          relative w-16 h-16 rounded-full border-4 shadow-lg transition-all duration-200
          ${getNodeColor()}
          ${level.isUnlocked ? 'hover:scale-110 cursor-pointer' : 'cursor-not-allowed'}
          ${level.isBoss ? 'w-20 h-20' : ''}
        `}
      >
        <span className="text-2xl">{getNodeIcon()}</span>
        
        {/* 关卡编号 */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center min-w-max">
          <div className="text-xs font-bold text-gray-700 bg-white bg-opacity-80 px-2 py-1 rounded">{level.name}</div>
          {level.isCompleted && (
            <div className="flex justify-center mt-1">
              {getStars()}
            </div>
          )}
        </div>
        
        {/* 进度条 */}
        {level.isUnlocked && !level.isCompleted && level.progress > 0 && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-yellow-400 transition-all duration-300"
              style={{ width: `${level.progress}%` }}
            />
          </div>
        )}
      </button>
    </div>
  );
};