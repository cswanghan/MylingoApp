import React, { useState, useEffect } from 'react';

interface ResetProgressViewProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const ResetProgressView: React.FC<ResetProgressViewProps> = ({
  onConfirm,
  onCancel
}) => {
  const [showContent, setShowContent] = useState(false);
  const [confirmText, setConfirmText] = useState('');
  const [canConfirm, setCanConfirm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCanConfirm(confirmText === '重置');
  }, [confirmText]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-red-200">
        {/* 顶部警告 */}
        <div className="bg-gradient-to-r from-red-400 to-red-600 p-8 text-center relative">
          <div className="absolute inset-0 bg-white opacity-10"></div>
          <div className={`text-8xl mb-4 transform transition-all duration-1000 ${
            showContent ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            ⚠️
          </div>
          <h1 className={`text-2xl font-bold text-white transition-all duration-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            重置进度
          </h1>
          <p className={`text-white opacity-90 mt-2 transition-all duration-700 delay-300 ${
            showContent ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            此操作不可撤销
          </p>
        </div>

        {/* 警告内容 */}
        <div className="p-6">
          <div className={`transition-all duration-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="bg-red-50 rounded-xl p-4 mb-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                以下数据将被清除：
              </h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">•</span>
                  所有关卡进度和星级
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">•</span>
                  地图解锁状态
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">•</span>
                  单词复习记录
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">•</span>
                  所有学习数据
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4 mb-6 border border-yellow-200">
              <div className="flex items-center gap-2 text-yellow-700">
                <span className="text-2xl">💡</span>
                <div>
                  <div className="font-semibold">确认操作</div>
                  <div className="text-sm opacity-80">
                    请在下方输入框中输入 "重置" 来确认此操作
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="confirmInput" className="block text-sm font-medium text-gray-700 mb-2">
                确认文本
              </label>
              <input
                id="confirmInput"
                type="text"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder="请输入 '重置' 来确认"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={onCancel}
                className="flex-1 py-3 px-4 bg-gray-500 text-white rounded-xl font-medium hover:bg-gray-600 transition-colors"
              >
                取消
              </button>
              <button
                onClick={onConfirm}
                disabled={!canConfirm}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
                  canConfirm
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                确认重置
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};