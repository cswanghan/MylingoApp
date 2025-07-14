import { UserProgress } from '../types';
import { SRSEngine } from './srs';

export interface ReviewItem {
  wordId: number;
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
  nextReviewAt: Date;
  boxLevel: number;
  ef: number;
}

export class ReviewManager {
  private static instance: ReviewManager;
  private reviewData: Map<number, UserProgress> = new Map();
  
  static getInstance(): ReviewManager {
    if (!ReviewManager.instance) {
      ReviewManager.instance = new ReviewManager();
    }
    return ReviewManager.instance;
  }
  
  constructor() {
    this.loadReviewData();
  }
  
  // 加载复习数据
  private loadReviewData(): void {
    const saved = localStorage.getItem('reviewData');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        this.reviewData = new Map(
          data.map((item: any) => [
            item.wordId,
            {
              ...item,
              nextReviewAt: new Date(item.nextReviewAt)
            }
          ])
        );
      } catch (error) {
        console.error('Failed to load review data:', error);
      }
    }
  }
  
  // 保存复习数据
  private saveReviewData(): void {
    const data = Array.from(this.reviewData.entries()).map(([wordId, progress]) => ({
      ...progress,
      wordId,
      nextReviewAt: progress.nextReviewAt.toISOString()
    }));
    localStorage.setItem('reviewData', JSON.stringify(data));
  }
  
  // 更新单词学习进度
  updateWordProgress(wordId: number, quality: number): void {
    const existing = this.reviewData.get(wordId);
    const previousEF = existing?.ef || 2.5;
    const previousInterval = existing ? this.calculateDaysDiff(existing.nextReviewAt, new Date()) : 1;
    
    const srsResult = SRSEngine.calculateNextReview(quality, previousEF, previousInterval);
    
    const progress: UserProgress = {
      userId: 'default', // 简化处理，实际应用中需要真实用户ID
      wordId,
      boxLevel: quality >= 3 ? (existing?.boxLevel || 0) + 1 : 1,
      ef: srsResult.ef,
      nextReviewAt: srsResult.nextReviewDate
    };
    
    this.reviewData.set(wordId, progress);
    this.saveReviewData();
  }

  // 将错误单词添加到复习中心（立即可复习）
  addWrongWordToReview(wordId: number): void {
    // 检查单词是否已经在复习中心
    const existing = this.reviewData.get(wordId);
    if (existing) {
      console.log(`单词 ${wordId} 已经在复习中心，更新为错误单词标识`);
    } else {
      console.log(`单词 ${wordId} 首次添加到复习中心`);
    }
    
    // 错误单词立即可复习，使用特殊标识
    const nextReviewDate = new Date();
    
    const progress: UserProgress = {
      userId: 'default',
      wordId,
      boxLevel: 1, // 错误单词从第一级开始
      ef: 2.5, // 使用默认EF值，作为错误单词的标识
      nextReviewAt: nextReviewDate
    };
    
    this.reviewData.set(wordId, progress);
    this.saveReviewData();
    
    console.log(`错误单词 ${wordId} 已添加到复习中心，立即可复习`);
  }
  
  // 获取今日待复习单词
  getTodayReviewWords(): number[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return Array.from(this.reviewData.entries())
      .filter(([_, progress]) => {
        const reviewDate = new Date(progress.nextReviewAt);
        reviewDate.setHours(0, 0, 0, 0);
        return reviewDate <= today;
      })
      .map(([wordId]) => wordId);
  }
  
  // 获取所有错误单词（立即可复习）
  getAllWrongWords(): number[] {
    return Array.from(this.reviewData.entries())
      .filter(([_, progress]) => progress.boxLevel === 1 && progress.ef === 2.5)
      .map(([wordId]) => wordId);
  }
  
  // 获取所有可复习单词（今日复习 + 错误单词）
  getAllReviewWords(): number[] {
    const todayWords = this.getTodayReviewWords();
    const wrongWords = this.getAllWrongWords();
    
    // 去重并合并
    const allWords = [...new Set([...todayWords, ...wrongWords])];
    return allWords;
  }
  
  // 获取复习统计
  getReviewStats(): {
    totalWords: number;
    todayReview: number;
    masteredWords: number;
    wrongWords: number;
    averageEF: number;
  } {
    const allProgress = Array.from(this.reviewData.values());
    const todayReview = this.getAllReviewWords().length;
    const masteredWords = allProgress.filter(p => p.boxLevel >= 5).length;
    const wrongWords = allProgress.filter(p => p.boxLevel === 1 && p.ef === 2.5).length;
    const averageEF = allProgress.length > 0 
      ? allProgress.reduce((sum, p) => sum + p.ef, 0) / allProgress.length 
      : 2.5;
    
    return {
      totalWords: allProgress.length,
      todayReview,
      masteredWords,
      wrongWords,
      averageEF: Math.round(averageEF * 100) / 100
    };
  }
  
  // 计算天数差异
  private calculateDaysDiff(date1: Date, date2: Date): number {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }
  
  // 获取单词的复习状态
  getWordReviewStatus(wordId: number): UserProgress | null {
    return this.reviewData.get(wordId) || null;
  }
  
  // 重置单词进度
  resetWordProgress(wordId: number): void {
    this.reviewData.delete(wordId);
    this.saveReviewData();
  }
  
  // 清除所有复习数据
  clearAllReviewData(): void {
    this.reviewData.clear();
    localStorage.removeItem('reviewData');
  }
  
  // 导出复习数据
  exportReviewData(): string {
    const data = Array.from(this.reviewData.entries()).map(([wordId, progress]) => ({
      ...progress,
      wordId,
      nextReviewAt: progress.nextReviewAt.toISOString()
    }));
    return JSON.stringify(data, null, 2);
  }
  
  // 导入复习数据
  importReviewData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      this.reviewData = new Map(
        data.map((item: any) => [
          item.wordId,
          {
            ...item,
            nextReviewAt: new Date(item.nextReviewAt)
          }
        ])
      );
      this.saveReviewData();
      return true;
    } catch (error) {
      console.error('Failed to import review data:', error);
      return false;
    }
  }
}

export const reviewManager = ReviewManager.getInstance();