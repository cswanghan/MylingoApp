import React, { useRef, useEffect } from 'react';
import { Island, Level } from '../types';
import { LevelNode } from './LevelNode';

interface IslandMapProps {
  island: Island;
  onLevelSelect: (level: Level) => void;
  currentLevelId?: number;
}

export const IslandMap: React.FC<IslandMapProps> = ({ island, onLevelSelect, currentLevelId }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // 为每个关卡定义横向位置
  const getLevelPositions = () => {
    const positions: { x: number; y: number }[] = [];
    const levelSpacing = 200; // 关卡之间的距离
    const baseY = 75; // 基础Y坐标（更靠下一些）
    
    for (let i = 0; i < island.levels.length; i++) {
      // 创建波浪形的Y坐标变化
      const waveOffset = Math.sin(i * 0.8) * 8; // 减小波浪幅度
      positions.push({
        x: i * levelSpacing + 200, // 留出左边距
        y: baseY + waveOffset
      });
    }
    
    return positions;
  };

  const positions = getLevelPositions();

  // 生成连接路径
  const generatePath = () => {
    if (positions.length < 2) return '';
    
    // 将百分比Y坐标转换为实际像素坐标
    const mapHeight = 150; // 地图容器的实际高度
    
    let path = `M ${positions[0].x} ${(positions[0].y / 100) * mapHeight}`;
    for (let i = 1; i < positions.length; i++) {
      const prev = positions[i-1];
      const curr = positions[i];
      
      // 转换Y坐标为实际像素值
      const prevY = (prev.y / 100) * mapHeight;
      const currY = (curr.y / 100) * mapHeight;
      
      // 创建平滑的曲线
      const controlX1 = prev.x + (curr.x - prev.x) * 0.5;
      const controlY1 = prevY;
      const controlX2 = prev.x + (curr.x - prev.x) * 0.5;
      const controlY2 = currY;
      
      path += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${curr.x} ${currY}`;
    }
    return path;
  };

  // 滚动到当前关卡
  useEffect(() => {
    if (scrollContainerRef.current && currentLevelId) {
      const currentLevelIndex = island.levels.findIndex(level => level.id === currentLevelId);
      if (currentLevelIndex !== -1) {
        const targetPosition = positions[currentLevelIndex];
        const containerWidth = scrollContainerRef.current.clientWidth;
        const scrollLeft = targetPosition.x - containerWidth / 2;
        
        scrollContainerRef.current.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: 'smooth'
        });
      }
    }
  }, [currentLevelId, positions, island.levels]);

  // 监听滚动事件
  const handleScroll = () => {
    // 可以在这里添加滚动相关的逻辑
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-sky-200 to-green-200 rounded-2xl overflow-hidden">
      {/* 横向滚动容器 */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="w-full h-full overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* 滚动内容区域 */}
        <div 
          className="relative h-full"
          style={{ 
            width: `${Math.max(positions[positions.length - 1]?.x + 300, 800)}px`,
            minHeight: '100%'
          }}
        >
          {/* 背景装饰层 */}
          <div className="absolute inset-0">
            {/* 重复的云朵装饰 */}
            {Array.from({ length: Math.ceil(positions.length / 3) }, (_, i) => (
              <div key={i} className="absolute">
                <div 
                  className="absolute top-4 text-2xl opacity-40"
                  style={{ left: `${i * 600 + 100}px` }}
                >
                  ☁️
                </div>
                <div 
                  className="absolute top-8 text-xl opacity-40"
                  style={{ left: `${i * 600 + 400}px` }}
                >
                  ☁️
                </div>
                <div 
                  className="absolute top-6 text-lg opacity-40"
                  style={{ left: `${i * 600 + 250}px` }}
                >
                  ☁️
                </div>
              </div>
            ))}
            
            {/* 地面装饰 */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-green-400 to-transparent opacity-80"></div>
            
            {/* 重复的植物装饰 */}
            {Array.from({ length: Math.ceil(positions.length / 2) }, (_, i) => (
              <div key={i} className="absolute bottom-2">
                <div 
                  className="absolute text-lg"
                  style={{ left: `${i * 400 + 50}px` }}
                >
                  🌴
                </div>
                <div 
                  className="absolute text-base"
                  style={{ left: `${i * 400 + 200}px` }}
                >
                  🌺
                </div>
                <div 
                  className="absolute text-sm"
                  style={{ left: `${i * 400 + 300}px` }}
                >
                  🌿
                </div>
              </div>
            ))}
          </div>

          {/* 路径SVG */}
          <svg 
            className="absolute inset-0 w-full h-full z-20"
            style={{ 
              width: `${Math.max(positions[positions.length - 1]?.x + 300, 800)}px`,
              height: '150px'
            }}
            viewBox={`0 0 ${Math.max(positions[positions.length - 1]?.x + 300, 800)} 150`}
            preserveAspectRatio="xMidYMid slice"
          >
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
              strokeWidth="6"
              strokeDasharray="12,6"
              filter="url(#glow)"
              className="opacity-80"
            />
          </svg>

          {/* 关卡节点 */}
          <div className="relative w-full h-full z-30">
            {island.levels.map((level, index) => (
              <div
                key={level.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `${positions[index].x}px`, 
                  top: `${(positions[index].y / 100) * 150}px` 
                }}
              >
                <LevelNode
                  level={level}
                  onSelect={onLevelSelect}
                  position={{ x: 50, y: 50 }} // 相对位置，因为已经通过style定位
                />
              </div>
            ))}
          </div>

          {/* 当前关卡指示器 */}
          {currentLevelId && (
            <div 
              className="absolute z-35 pointer-events-none"
              style={{
                left: `${positions[island.levels.findIndex(l => l.id === currentLevelId)]?.x || 0}px`,
                top: `${(positions[island.levels.findIndex(l => l.id === currentLevelId)]?.y || 50) / 100 * 150}px`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="absolute -inset-4 bg-yellow-400 rounded-full animate-pulse opacity-30"></div>
              <div className="absolute -inset-2 bg-yellow-400 rounded-full animate-ping opacity-50"></div>
            </div>
          )}
        </div>
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

      {/* 滚动提示 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
          ← 滑动查看更多关卡 →
        </div>
      </div>
    </div>
  );
};