import React, { useState } from 'react';
import { MapProgress, Level } from '../types';
import { IslandMap } from './IslandMap';
import { getIslandStats, getNextToUnlock } from '../utils/mapProgress';

interface MapViewProps {
  mapProgress: MapProgress;
  onLevelSelect: (level: Level) => void;
  onBack: () => void;
}

export const MapView: React.FC<MapViewProps> = ({ mapProgress, onLevelSelect, onBack }) => {
  const [currentIslandIndex, setCurrentIslandIndex] = useState(mapProgress.currentIsland - 1);
  
  const handlePrevIsland = () => {
    setCurrentIslandIndex(Math.max(0, currentIslandIndex - 1));
  };
  
  const handleNextIsland = () => {
    setCurrentIslandIndex(Math.min(mapProgress.islands.length - 1, currentIslandIndex + 1));
  };
  
  const currentIsland = mapProgress.islands[currentIslandIndex];
  const currentIslandStats = getIslandStats(currentIsland);
  const nextToUnlock = getNextToUnlock(mapProgress);
  
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-4 overflow-auto">
      {/* 顶部导航 */}
      <div className="flex items-center justify-between mb-4 max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all"
        >
          ← 返回
        </button>
        
        <div className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg text-center">
          <div className="text-sm opacity-80">总经验</div>
          <div className="text-lg font-bold">{mapProgress.totalXP} XP</div>
        </div>
        
        <div className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg text-center">
          <div className="text-sm opacity-80">总星星</div>
          <div className="text-lg font-bold">⭐ {mapProgress.totalStars}</div>
        </div>
      </div>

      {/* 岛屿导航 */}
      <div className="flex items-center justify-center gap-4 mb-6 max-w-4xl mx-auto">
        <button
          onClick={handlePrevIsland}
          disabled={currentIslandIndex === 0}
          className="w-12 h-12 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ←
        </button>
        
        <div className="flex gap-2">
          {mapProgress.islands.map((island, index) => (
            <button
              key={island.id}
              onClick={() => setCurrentIslandIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIslandIndex
                  ? 'bg-white'
                  : island.isUnlocked
                  ? 'bg-white bg-opacity-60 hover:bg-opacity-80'
                  : 'bg-white bg-opacity-30'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={handleNextIsland}
          disabled={currentIslandIndex === mapProgress.islands.length - 1}
          className="w-12 h-12 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>

      {/* 当前岛屿信息 */}
      <div className="max-w-4xl mx-auto mb-4">
        <div className="bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 shadow-xl">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏝️</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{currentIsland.name}</h2>
              <p className="text-sm opacity-90">{currentIsland.description}</p>
            </div>
            {currentIsland.isUnlocked && (
              <div className="ml-auto bg-green-500/20 text-green-100 px-3 py-1 rounded-full text-sm font-medium">
                ✅ 已解锁
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-3 border border-blue-400/20">
              <div className="text-xl font-bold">{currentIslandStats.completedLevels}/{currentIslandStats.totalLevels}</div>
              <div className="text-xs opacity-80">完成关卡</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-xl p-3 border border-yellow-400/20">
              <div className="text-xl font-bold">⭐ {currentIslandStats.totalStars}</div>
              <div className="text-xs opacity-80">获得星星</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-3 border border-green-400/20">
              <div className="text-xl font-bold">{Math.round(currentIslandStats.completionRate)}%</div>
              <div className="text-xs opacity-80">完成率</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-3 border border-purple-400/20">
              <div className="text-xl font-bold">{currentIslandStats.unlockedLevels}/{currentIslandStats.totalLevels}</div>
              <div className="text-xs opacity-80">已解锁</div>
            </div>
          </div>
        </div>
      </div>

      {/* 当前岛屿 */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto" style={{ maxWidth: '800px', aspectRatio: '4/3' }}>
          <IslandMap
            island={currentIsland}
            onLevelSelect={onLevelSelect}
            currentLevelId={mapProgress.currentLevel}
          />
        </div>
      </div>

      {/* 下一个解锁目标 */}
      {nextToUnlock.type !== 'completed' && (
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-yellow-400/20 backdrop-blur-sm text-white rounded-2xl p-4 border border-yellow-400/30 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-sm">🎯</span>
              </div>
              <h3 className="font-bold text-lg">下一个目标</h3>
            </div>
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
              <p className="text-sm font-medium">
                {nextToUnlock.type === 'level' ? 
                  `🔓 解锁关卡: ${nextToUnlock.content?.name}` : 
                  `🏝️ 解锁岛屿: ${nextToUnlock.content?.name}`
                }
              </p>
              <p className="text-xs opacity-80 mt-1">
                {nextToUnlock.requirement}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 岛屿列表 */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
              <span className="text-sm">🗺️</span>
            </div>
            <h3 className="text-white text-lg font-bold">所有岛屿</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {mapProgress.islands.map((island, index) => (
              <button
                key={island.id}
                onClick={() => setCurrentIslandIndex(index)}
                disabled={!island.isUnlocked}
                className={`p-4 rounded-xl transition-all duration-200 ${
                  index === currentIslandIndex
                    ? 'bg-white text-gray-800 shadow-lg transform scale-105'
                    : island.isUnlocked
                    ? 'bg-white/20 text-white hover:bg-white/30 hover:scale-105 backdrop-blur-sm'
                    : 'bg-white/10 text-white opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="text-sm font-medium mb-1">{island.name}</div>
                <div className="text-xs">
                  {island.isUnlocked ? (
                    <div className="flex items-center justify-center gap-1">
                      <span>{Math.round(island.completionRate)}%</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  ) : (
                    <span className="text-gray-300">🔒</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};