import { MapProgress, Level, Island } from '../types';

const MAP_PROGRESS_KEY = 'word-game-map-progress';

export const saveMapProgress = (progress: MapProgress): void => {
  try {
    localStorage.setItem(MAP_PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save map progress:', error);
  }
};

export const loadMapProgress = (): MapProgress | null => {
  try {
    const saved = localStorage.getItem(MAP_PROGRESS_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to load map progress:', error);
    return null;
  }
};

export const updateLevelProgress = (
  mapProgress: MapProgress,
  levelId: number,
  progress: number,
  stars: number = 0
): MapProgress => {
  const updatedIslands = mapProgress.islands.map(island => {
    const updatedLevels = island.levels.map(level => {
      if (level.id === levelId) {
        const isCompleted = progress >= 100;
        return {
          ...level,
          progress: Math.max(level.progress, progress),
          stars: Math.max(level.stars, stars),
          isCompleted: isCompleted || level.isCompleted
        };
      }
      return level;
    });

    // 更新岛屿完成率和星星数
    const completedLevels = updatedLevels.filter(l => l.isCompleted).length;
    const totalStars = updatedLevels.reduce((sum, l) => sum + l.stars, 0);
    const completionRate = (completedLevels / updatedLevels.length) * 100;

    return {
      ...island,
      levels: updatedLevels,
      completionRate,
      currentStars: totalStars
    };
  });

  // 解锁逻辑：检查下一关卡和下一岛屿
  const finalIslands = unlockNextContent(updatedIslands);

  // 计算总星星数和XP
  const totalStars = finalIslands.reduce((sum, island) => sum + island.currentStars, 0);

  return {
    ...mapProgress,
    islands: finalIslands,
    totalStars
  };
};

const unlockNextContent = (islands: Island[]): Island[] => {
  return islands.map((island, islandIndex) => {
    // 首先创建一个带有当前完成状态的关卡副本
    const currentLevels = [...island.levels];
    
    // 解锁下一关：当前关完成后解锁下一关
    const updatedLevels = currentLevels.map((level, levelIndex) => {
      if (levelIndex > 0) {
        const prevLevel = currentLevels[levelIndex - 1];
        if (prevLevel.isCompleted && !level.isUnlocked) {
          console.log(`解锁关卡 ${level.name}，前一关卡 ${prevLevel.name} 已完成`);
          return { ...level, isUnlocked: true };
        }
      }
      return level;
    });

    // 解锁下一岛屿：当前岛屿的Boss关完成后解锁下一岛屿
    let isUnlocked = island.isUnlocked;
    if (islandIndex > 0 && !isUnlocked) {
      const prevIsland = islands[islandIndex - 1];
      // 检查前一岛屿的Boss关是否完成
      const prevBossLevel = prevIsland.levels.find(l => l.isBoss);
      if (prevBossLevel && prevBossLevel.isCompleted) {
        console.log(`解锁岛屿 ${island.name}，前一岛屿Boss关已完成`);
        isUnlocked = true;
      }
    }

    return {
      ...island,
      levels: updatedLevels,
      isUnlocked
    };
  });
};

export const getCurrentLevel = (mapProgress: MapProgress): Level | null => {
  for (const island of mapProgress.islands) {
    for (const level of island.levels) {
      if (level.isUnlocked && !level.isCompleted) {
        return level;
      }
    }
  }
  return null;
};

export const getLevelById = (mapProgress: MapProgress, levelId: number): Level | null => {
  for (const island of mapProgress.islands) {
    const level = island.levels.find(l => l.id === levelId);
    if (level) return level;
  }
  return null;
};

export const calculateStarsForLevel = (correctAnswers: number, totalAnswers: number, livesUsed: number): number => {
  if (correctAnswers === 0) return 0;
  
  const accuracy = correctAnswers / totalAnswers;
  
  // 3星：100%正确且只用了1条生命
  if (accuracy === 1 && livesUsed <= 1) return 3;
  
  // 2星：90%以上正确或只用了2条生命
  if (accuracy >= 0.9 || livesUsed <= 2) return 2;
  
  // 1星：完成关卡
  if (accuracy > 0) return 1;
  
  return 0;
};

// 获取岛屿进度统计
export const getIslandStats = (island: Island): {
  totalLevels: number;
  completedLevels: number;
  unlockedLevels: number;
  totalStars: number;
  maxStars: number;
  completionRate: number;
} => {
  const totalLevels = island.levels.length;
  const completedLevels = island.levels.filter(l => l.isCompleted).length;
  const unlockedLevels = island.levels.filter(l => l.isUnlocked).length;
  const totalStars = island.levels.reduce((sum, l) => sum + l.stars, 0);
  const maxStars = totalLevels * 3;
  const completionRate = (completedLevels / totalLevels) * 100;
  
  return {
    totalLevels,
    completedLevels,
    unlockedLevels,
    totalStars,
    maxStars,
    completionRate
  };
};

// 检查岛屿是否可以解锁
export const canUnlockIsland = (islands: Island[], targetIslandIndex: number): boolean => {
  if (targetIslandIndex === 0) return true; // 第一个岛屿总是解锁的
  
  const prevIsland = islands[targetIslandIndex - 1];
  if (!prevIsland) return false;
  
  // 检查前一岛屿的Boss关是否完成
  const bossLevel = prevIsland.levels.find(l => l.isBoss);
  return bossLevel ? bossLevel.isCompleted : false;
};

// 获取下一个需要解锁的内容
export const getNextToUnlock = (mapProgress: MapProgress): {
  type: 'level' | 'island' | 'completed';
  content?: Level | Island;
  requirement?: string;
} => {
  // 查找下一个未解锁的关卡
  for (const island of mapProgress.islands) {
    if (!island.isUnlocked) {
      return {
        type: 'island',
        content: island,
        requirement: '完成前一岛屿的Boss关'
      };
    }
    
    for (const level of island.levels) {
      if (!level.isUnlocked) {
        return {
          type: 'level',
          content: level,
          requirement: '完成前一关卡'
        };
      }
    }
  }
  
  return { type: 'completed' };
};