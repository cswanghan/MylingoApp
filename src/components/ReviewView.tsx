import React, { useState, useEffect } from 'react';
import { reviewManager } from '../utils/reviewManager';
import { wordData } from '../data/words';
import { WordUnit } from '../types';

interface ReviewViewProps {
  onClose: () => void;
  onStartReview: (words: WordUnit[]) => void;
}

export const ReviewView: React.FC<ReviewViewProps> = ({ onClose, onStartReview }) => {
  const [reviewStats, setReviewStats] = useState(reviewManager.getReviewStats());
  const [todayWords, setTodayWords] = useState<WordUnit[]>([]);
  
  useEffect(() => {
    const allReviewIds = reviewManager.getAllReviewWords();
    const reviewWords = wordData.filter(word => allReviewIds.includes(word.id));
    setTodayWords(reviewWords);
    setReviewStats(reviewManager.getReviewStats());
  }, []);
  
  const handleStartReview = () => {
    if (todayWords.length > 0) {
      onStartReview(todayWords);
    }
  };
  
  const handleClearData = () => {
    if (confirm('确定要清除所有复习数据吗？此操作不可撤销。')) {
      reviewManager.clearAllReviewData();
      setReviewStats(reviewManager.getReviewStats());
      setTodayWords([]);
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">复习中心</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        {/* 复习统计 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-blue-600">{reviewStats.todayReview}</div>
            <div className="text-sm text-blue-500">可复习</div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-green-600">{reviewStats.masteredWords}</div>
            <div className="text-sm text-green-500">已掌握</div>
          </div>
          <div className="bg-red-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-red-600">{reviewStats.wrongWords}</div>
            <div className="text-sm text-red-500">错误单词</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-purple-600">{reviewStats.totalWords}</div>
            <div className="text-sm text-purple-500">总学习数</div>
          </div>
        </div>
        
        {/* 复习单词列表 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">可复习单词</h3>
          {todayWords.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl mb-2">🎉</div>
              <p>暂时没有需要复习的单词</p>
              <p className="text-sm">继续学习新单词吧！</p>
            </div>
          ) : (
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {todayWords.map((word) => {
                const status = reviewManager.getWordReviewStatus(word.id);
                const isWrongWord = status?.boxLevel === 1 && status?.ef === 2.5;
                const nextReviewDate = status?.nextReviewAt ? new Date(status.nextReviewAt) : null;
                const isOverdue = nextReviewDate && nextReviewDate < new Date();
                
                return (
                  <div
                    key={word.id}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      isWrongWord ? 'bg-red-50 border border-red-200' : 'bg-gray-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-medium">{word.word}</div>
                        {isWrongWord && (
                          <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                            错误单词
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">{word.meaning}</div>
                      {nextReviewDate && (
                        <div className="text-xs text-gray-400 mt-1">
                          {isOverdue ? '已过期' : `下次复习: ${nextReviewDate.toLocaleDateString()}`}
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400">
                      Level {status?.boxLevel || 1}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        
        {/* 操作按钮 */}
        <div className="flex gap-3">
          <button
            onClick={handleStartReview}
            disabled={todayWords.length === 0}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
              todayWords.length > 0
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            开始复习 ({todayWords.length})
          </button>
          <button
            onClick={handleClearData}
            className="px-4 py-3 border border-red-500 text-red-500 rounded-xl hover:bg-red-50 transition-colors"
          >
            清除数据
          </button>
        </div>
      </div>
    </div>
  );
};