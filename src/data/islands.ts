import { Island, Level } from '../types';
import { wordData } from './words';

// 将单词分组到不同关卡
const createLevelsFromWords = (): Level[] => {
  const levels: Level[] = [];
  const wordsPerLevel = 10; // 每关10个单词
  
  for (let i = 0; i < wordData.length; i += wordsPerLevel) {
    const levelWords = wordData.slice(i, i + wordsPerLevel);
    const levelId = Math.floor(i / wordsPerLevel) + 1;
    const isBoss = levelId % 5 === 0; // 每5关有一个Boss关
    
    levels.push({
      id: levelId,
      name: isBoss ? `Boss 关卡 ${Math.floor(levelId / 5)}` : `关卡 ${levelId}`,
      description: isBoss 
        ? `挑战Boss关卡！完成所有单词以解锁下一岛屿` 
        : `学习新单词: ${levelWords.map(w => w.word).join(', ')}`,
      words: levelWords,
      isUnlocked: levelId === 1, // 只有第一关解锁
      isCompleted: false,
      progress: 0,
      stars: 0,
      isBoss
    });
  }
  
  return levels;
};

// 创建岛屿数据
export const createIslands = (): Island[] => {
  const allLevels = createLevelsFromWords();
  const levelsPerIsland = 5; // 每个岛屿5关
  const islands: Island[] = [];
  
  // 计算需要的岛屿数量
  const totalIslands = Math.ceil(allLevels.length / levelsPerIsland);
  
  for (let i = 0; i < totalIslands; i++) {
    const startIndex = i * levelsPerIsland;
    const endIndex = Math.min(startIndex + levelsPerIsland, allLevels.length);
    const islandLevels = allLevels.slice(startIndex, endIndex);
    
    if (islandLevels.length === 0) break;
    
    const islandNames = [
      '新手村',
      '果园岛',
      '彩虹岛',
      '学习岛',
      '动物王国',
      '家庭岛',
      '美食岛',
      '运动岛',
      '职业岛',
      '冒险岛'
    ];
    
    const islandDescriptions = [
      '开始你的英语学习之旅',
      '学习水果相关词汇',
      '掌握颜色和形容词',
      '学校和学习用品',
      '探索动物世界的奥秘',
      '了解家庭成员',
      '学习食物和饮料',
      '掌握运动和活动词汇',
      '学习各种职业和工作',
      '挑战最高级词汇'
    ];
    
    islands.push({
      id: i + 1,
      name: islandNames[i] || `岛屿 ${i + 1}`,
      description: islandDescriptions[i] || `第 ${i + 1} 个岛屿的挑战`,
      levels: islandLevels,
      isUnlocked: i === 0, // 只有第一个岛屿解锁
      completionRate: 0,
      requiredStars: Math.max(1, Math.floor(islandLevels.length * 0.75)), // 需要75%的星星来解锁下一岛
      currentStars: 0
    });
  }
  
  return islands;
};

// 默认地图进度
export const getInitialMapProgress = () => ({
  currentIsland: 1,
  currentLevel: 1,
  totalXP: 0,
  totalStars: 0,
  islands: createIslands()
});