import React, { useState, useEffect } from 'react';
import { reviewManager } from '../utils/reviewManager';

interface ReviewReminderProps {
  onStartReview: () => void;
}

export const ReviewReminder: React.FC<ReviewReminderProps> = ({ onStartReview }) => {
  const [reviewCount, setReviewCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const updateReviewCount = () => {
      const todayWords = reviewManager.getTodayReviewWords();
      setReviewCount(todayWords.length);
      
      // 如果有待复习单词且未被用户主动关闭，显示提醒
      if (todayWords.length > 0 && !dismissed) {
        setIsVisible(true);
      }
    };

    // 立即检查一次
    updateReviewCount();
    
    // 每5分钟检查一次
    const interval = setInterval(updateReviewCount, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [dismissed]);

  const handleStartReview = () => {
    setIsVisible(false);
    onStartReview();
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
    
    // 1小时后重新允许显示提醒
    setTimeout(() => {
      setDismissed(false);
    }, 60 * 60 * 1000);
  };

  if (!isVisible || reviewCount === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-purple-500 text-white rounded-2xl p-4 shadow-2xl max-w-sm z-50 animate-pulse">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="text-2xl">🔔</div>
          <div className="font-bold">复习提醒</div>
        </div>
        <button
          onClick={handleDismiss}
          className="text-white hover:text-gray-200 text-lg"
        >
          ×
        </button>
      </div>
      
      <p className="text-sm mb-3">
        你有 <span className="font-bold">{reviewCount}</span> 个单词需要复习
      </p>
      
      <div className="flex gap-2">
        <button
          onClick={handleStartReview}
          className="flex-1 bg-white text-purple-500 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          开始复习
        </button>
        <button
          onClick={handleDismiss}
          className="px-3 py-2 text-white border border-white border-opacity-50 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors"
        >
          稍后
        </button>
      </div>
    </div>
  );
};