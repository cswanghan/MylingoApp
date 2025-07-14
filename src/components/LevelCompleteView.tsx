import React, { useState, useEffect } from 'react';
import { Level } from '../types';

interface LevelCompleteViewProps {
  completedLevel: Level;
  stars: number;
  correctAnswers: number;
  totalAnswers: number;
  livesUsed: number;
  nextLevelName?: string;
  onContinue: () => void;
}

export const LevelCompleteView: React.FC<LevelCompleteViewProps> = ({
  completedLevel,
  stars,
  correctAnswers,
  totalAnswers,
  livesUsed,
  nextLevelName,
  onContinue
}) => {
  const [showContent, setShowContent] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // 延迟显示内容，创建动画效果
    const timer1 = setTimeout(() => setShowContent(true), 500);
    const timer2 = setTimeout(() => setAnimationStep(1), 1000);
    const timer3 = setTimeout(() => setAnimationStep(2), 1500);
    const timer4 = setTimeout(() => setAnimationStep(3), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const accuracy = Math.round((correctAnswers / totalAnswers) * 100);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-green-200">
        {/* 顶部成功图标 */}
        <div className="bg-gradient-to-r from-green-400 to-green-500 p-8 text-center relative">
          <div className="absolute inset-0 bg-white opacity-10"></div>
          <div className={`text-8xl mb-4 transform transition-all duration-1000 ${
            showContent ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            🎉
          </div>
          <h1 className={`text-2xl font-bold text-white transition-all duration-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            关卡完成！
          </h1>
          <p className={`text-white opacity-90 mt-2 transition-all duration-700 delay-300 ${
            showContent ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {completedLevel.name}
          </p>
        </div>

        {/* 统计信息 */}
        <div className="p-6 space-y-4">
          {/* 星级评价 */}
          <div className={`text-center transition-all duration-500 ${
            animationStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex justify-center items-center gap-2 mb-2">
              {[1, 2, 3].map((star) => (
                <div
                  key={star}
                  className={`text-4xl transition-all duration-300 ${
                    star <= stars ? 'text-yellow-400 scale-110' : 'text-gray-300'
                  }`}
                  style={{
                    animationDelay: `${star * 200}ms`,
                    animation: star <= stars ? 'bounce 0.6s ease-in-out' : 'none'
                  }}
                >
                  ⭐
                </div>
              ))}
            </div>
            <p className="text-lg font-semibold text-gray-700">
              获得 {stars} 颗星星！
            </p>
          </div>

          {/* 详细统计 */}
          <div className={`grid grid-cols-3 gap-4 transition-all duration-500 delay-300 ${
            animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-center bg-blue-50 rounded-xl p-3">
              <div className="text-2xl font-bold text-blue-600">{accuracy}%</div>
              <div className="text-sm text-blue-500">正确率</div>
            </div>
            <div className="text-center bg-green-50 rounded-xl p-3">
              <div className="text-2xl font-bold text-green-600">{correctAnswers}/{totalAnswers}</div>
              <div className="text-sm text-green-500">正确答案</div>
            </div>
            <div className="text-center bg-purple-50 rounded-xl p-3">
              <div className="text-2xl font-bold text-purple-600">{livesUsed}</div>
              <div className="text-sm text-purple-500">使用生命</div>
            </div>
          </div>

          {/* 下一关提示 */}
          {nextLevelName && (
            <div className={`bg-yellow-50 rounded-xl p-4 border-2 border-yellow-200 transition-all duration-500 delay-500 ${
              animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-2 text-yellow-700">
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="font-semibold">下一关已解锁！</div>
                  <div className="text-sm opacity-80">{nextLevelName}</div>
                </div>
              </div>
            </div>
          )}

          {/* 继续按钮 */}
          <button
            onClick={onContinue}
            disabled={animationStep < 3}
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
              animationStep >= 3
                ? 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {nextLevelName ? '继续下一关' : '返回地图'}
          </button>
        </div>
      </div>
    </div>
  );
};

// 添加CSS动画到全局样式
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translate3d(0, 0, 0);
    }
    40%, 43% {
      transform: translate3d(0, -8px, 0);
    }
    70% {
      transform: translate3d(0, -4px, 0);
    }
    90% {
      transform: translate3d(0, -2px, 0);
    }
  }
`;
document.head.appendChild(style);