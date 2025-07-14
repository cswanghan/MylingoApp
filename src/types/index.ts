export interface WordUnit {
  id: number;
  word: string;
  missingIndexes: number[];
  distractors: string[];
  phonetic: string;
  meaning: string;
  example: string;
}

export interface GameState {
  lives: number;
  xp: number;
  currentWordIndex: number;
  currentGuess: (string | null)[];
  wordList: WordUnit[];
}

export interface UserProgress {
  userId: string;
  wordId: number;
  boxLevel: number;
  ef: number;
  nextReviewAt: Date;
}

export type ViewType = 'home' | 'game' | 'result' | 'gameOver' | 'map' | 'levelComplete' | 'retryWrongWords' | 'resetProgress';

export interface SRSFeedback {
  wordId: number;
  quality: number; // 0-5
  timestamp: Date;
}

export interface Level {
  id: number;
  name: string;
  description: string;
  words: WordUnit[];
  isUnlocked: boolean;
  isCompleted: boolean;
  progress: number; // 0-100
  stars: number; // 0-3
  isBoss: boolean;
}

export interface Island {
  id: number;
  name: string;
  description: string;
  levels: Level[];
  isUnlocked: boolean;
  completionRate: number; // 0-100
  requiredStars: number;
  currentStars: number;
}

export interface MapProgress {
  currentIsland: number;
  currentLevel: number;
  totalXP: number;
  totalStars: number;
  islands: Island[];
}