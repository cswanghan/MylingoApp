export class SRSEngine {
  private static readonly MIN_EF = 1.3;
  private static readonly DEFAULT_EF = 2.5;

  static calculateNextReview(
    quality: number, // 0-5
    previousEF: number = SRSEngine.DEFAULT_EF,
    previousInterval: number = 1
  ): { ef: number; interval: number; nextReviewDate: Date } {
    // SM-2 algorithm implementation
    let newEF = previousEF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    
    // Ensure EF doesn't fall below minimum
    newEF = Math.max(SRSEngine.MIN_EF, newEF);
    
    let newInterval: number;
    
    if (quality < 3) {
      // 错误单词重新设置为每周复习一次
      newInterval = 7;
    } else if (previousInterval === 1) {
      newInterval = 6;
    } else {
      newInterval = Math.round(previousInterval * newEF);
    }
    
    const nextReviewDate = new Date();
    nextReviewDate.setDate(nextReviewDate.getDate() + newInterval);
    
    return {
      ef: newEF,
      interval: newInterval,
      nextReviewDate
    };
  }

  static calculateQuality(spellingCorrect: boolean, exampleRecall: boolean): number {
    // Quality = SpellingCorrect (0/5) + ExampleRecall (0/1)
    const spellingScore = spellingCorrect ? 5 : 0;
    const recallScore = exampleRecall ? 1 : 0;
    return Math.min(5, spellingScore + recallScore);
  }
}