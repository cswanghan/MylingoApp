import React, { useState, useEffect } from 'react';
import { WordUnit } from '../types';

interface RetryWrongWordsViewProps {
  wrongWords: WordUnit[];
  onContinue: () => void;
}

export const RetryWrongWordsView: React.FC<RetryWrongWordsViewProps> = ({
  wrongWords,
  onContinue
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-200">
        {/* 顶部提示 */}
        <div className="bg-gradient-to-r from-orange-400 to-red-500 p-8 text-center relative">
          <div className="absolute inset-0 bg-white opacity-10"></div>
          <div className={`text-8xl mb-4 transform transition-all duration-1000 ${
            showContent ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            🔄
          </div>
          <h1 className={`text-2xl font-bold text-white transition-all duration-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            错题重做
          </h1>
          <p className={`text-white opacity-90 mt-2 transition-all duration-700 delay-300 ${
            showContent ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            完成所有单词才能进入下一关
          </p>
        </div>

        {/* 错题列表 */}
        <div className="p-6">
          <div className={`transition-all duration-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              需要重做的单词 ({wrongWords.length} 个)
            </h3>
            
            <div className="space-y-3 mb-6 max-h-40 overflow-y-auto">
              {wrongWords.map((word, index) => (
                <div
                  key={word.id}
                  className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1">
                    <div className="font-medium text-red-800">{word.word}</div>
                    <div className="text-sm text-red-600">{word.meaning}</div>
                  </div>
                  <div className="text-2xl">❌</div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-200 mb-6">
              <div className="flex items-center gap-2 text-yellow-700">
                <span className="text-2xl">💪</span>
                <div>
                  <div className="font-semibold">坚持就是胜利！</div>
                  <div className="text-sm opacity-80">
                    重新练习这些单词，直到全部正确
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onContinue}
              className="w-full py-4 px-6 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              开始重做错题
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};