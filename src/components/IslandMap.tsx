import React from 'react';
import { Island, Level } from '../types';
import { LevelNode } from './LevelNode';

interface IslandMapProps {
  island: Island;
  onLevelSelect: (level: Level) => void;
}

export const IslandMap: React.FC<IslandMapProps> = ({ island, onLevelSelect }) => {
  // 为每个关卡定义位置（相对百分比）
  const getLevelPositions = () => {
    const positions = [
      { x: 10, y: 80 },  // 第1关：左下
      { x: 25, y: 65 },  // 第2关
      { x: 40, y: 75 },  // 第3关
      { x: 55, y: 60 },  // 第4关
      { x: 70, y: 70 },  // 第5关
      { x: 85, y: 55 },  // 第6关：右中
      { x: 75, y: 40 },  // 第7关
      { x: 60, y: 35 },  // 第8关
      { x: 40, y: 25 },  // 第9关
      { x: 20, y: 15 },  // 第10关：Boss关（左上）
    ];
    
    return positions.slice(0, island.levels.length);
  };

  const positions = getLevelPositions();

  // 生成连接路径
  const generatePath = () => {
    if (positions.length < 2) return '';
    
    let path = `M ${positions[0].x} ${positions[0].y}`;
    for (let i = 1; i < positions.length; i++) {
      const prev = positions[i-1];
      const curr = positions[i];
      
      // 创建更自然的S形曲线
      const controlX1 = prev.x + (curr.x - prev.x) * 0.5;
      const controlY1 = prev.y;
      const controlX2 = prev.x + (curr.x - prev.x) * 0.5;
      const controlY2 = curr.y;
      
      path += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${curr.x} ${curr.y}`;
    }
    return path;
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-sky-200 to-green-200 rounded-2xl overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        {/* 云朵 */}
        <div className="absolute top-2 left-4 text-2xl opacity-60">☁️</div>
        <div className="absolute top-4 right-8 text-xl opacity-60">☁️</div>
        <div className="absolute top-6 left-1/3 text-lg opacity-60">☁️</div>
        
        {/* 岛屿装饰 */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-green-400 to-transparent opacity-80"></div>
        <div className="absolute bottom-2 left-2 text-lg">🌴</div>
        <div className="absolute bottom-3 right-4 text-base">🌺</div>
        <div className="absolute bottom-4 left-1/2 text-sm">🌿</div>
        <div className="absolute bottom-2 left-1/4 text-sm">🌾</div>
        <div className="absolute bottom-3 right-1/4 text-sm">🌸</div>
      </div>


      {/* 路径 */}
      <svg className="absolute inset-0 w-full h-full z-20">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d={generatePath()}
          fill="none"
          stroke="#4F46E5"
          strokeWidth="4"
          strokeDasharray="8,4"
          filter="url(#glow)"
          className="opacity-70"
        />
      </svg>

      {/* 关卡节点 */}
      <div className="relative w-full h-full z-30">
        {island.levels.map((level, index) => (
          <LevelNode
            key={level.id}
            level={level}
            onSelect={onLevelSelect}
            position={positions[index]}
          />
        ))}
      </div>

      {/* 解锁状态指示器 */}
      {island.isUnlocked && (
        <div className="absolute top-4 right-4 z-40">
          <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-sm">✅</span>
              <span className="text-xs font-medium">已解锁</span>
            </div>
          </div>
        </div>
      )}

      {/* 解锁提示 */}
      {!island.isUnlocked && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-2xl z-40">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 text-center shadow-2xl border border-gray-200 max-w-xs mx-4">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-3xl">🔒</span>
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">岛屿未解锁</h4>
            <p className="text-sm text-gray-600 mt-1">
              需要获得 {island.requiredStars} 颗星星
            </p>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 border border-yellow-200 mt-3">
              <p className="text-xs text-yellow-800 font-medium">
                继续完成前面的关卡获得更多星星！
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};