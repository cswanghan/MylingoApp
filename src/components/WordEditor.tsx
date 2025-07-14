import React, { useState, useEffect } from 'react';
import { WordUnit } from '../types';
import { generateSentence, generateSentenceOptions, generateSentenceByMeaning, getPresetSentence } from '../utils/sentenceGenerator';

interface WordEditorProps {
  word?: WordUnit;
  onSave: (word: WordUnit) => void;
  onCancel: () => void;
}

export const WordEditor: React.FC<WordEditorProps> = ({ word, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Partial<WordUnit>>({
    id: 0,
    word: '',
    missingIndexes: [],
    distractors: [],
    phonetic: '',
    meaning: '',
    example: ''
  });
  const [sentenceOptions, setSentenceOptions] = useState<string[]>([]);
  const [showSentenceOptions, setShowSentenceOptions] = useState(false);

  useEffect(() => {
    if (word) {
      setFormData(word);
    }
  }, [word]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.word || !formData.meaning || !formData.example) {
      alert('请填写必填字段');
      return;
    }

    const newWord: WordUnit = {
      id: formData.id || Date.now(),
      word: formData.word,
      missingIndexes: formData.missingIndexes || [],
      distractors: formData.distractors || [],
      phonetic: formData.phonetic || '',
      meaning: formData.meaning,
      example: formData.example
    };

    onSave(newWord);
  };

  const handleMissingIndexesChange = (value: string) => {
    const indexes = value.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
    setFormData(prev => ({ ...prev, missingIndexes: indexes }));
  };

  const handleDistractorsChange = (value: string) => {
    const distractors = value.split(',').map(s => s.trim()).filter(s => s);
    setFormData(prev => ({ ...prev, distractors }));
  };

  const generateMissingIndexes = () => {
    if (!formData.word) return;
    
    const wordLength = formData.word.length;
    const numMissing = Math.min(3, Math.max(1, Math.floor(wordLength / 2)));
    const indexes: number[] = [];
    
    while (indexes.length < numMissing) {
      const randomIndex = Math.floor(Math.random() * wordLength);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    
    indexes.sort((a, b) => a - b);
    setFormData(prev => ({ ...prev, missingIndexes: indexes }));
  };

  const generateDistractors = () => {
    if (!formData.word || !formData.missingIndexes) return;
    
    const correctLetters = formData.missingIndexes.map(i => formData.word![i]);
    const commonLetters = ['a', 'e', 'i', 'o', 'u', 'r', 's', 't', 'n', 'l'];
    const distractors: string[] = [];
    
    for (const letter of commonLetters) {
      if (!correctLetters.includes(letter) && distractors.length < 4) {
        distractors.push(letter);
      }
    }
    
    setFormData(prev => ({ ...prev, distractors }));
  };

  const generateSentenceForWord = () => {
    if (!formData.word) return;
    
    // 首先尝试获取预设例句
    const presetSentence = getPresetSentence(formData.word);
    if (presetSentence) {
      setFormData(prev => ({ ...prev, example: presetSentence }));
      return;
    }
    
    // 如果有释义，基于释义生成
    let sentence: string;
    if (formData.meaning) {
      sentence = generateSentenceByMeaning(formData.word, formData.meaning);
    } else {
      sentence = generateSentence(formData.word);
    }
    
    setFormData(prev => ({ ...prev, example: sentence }));
  };

  const showSentenceChoices = () => {
    if (!formData.word) return;
    
    const options = generateSentenceOptions(formData.word, 5);
    setSentenceOptions(options);
    setShowSentenceOptions(true);
  };

  const selectSentence = (sentence: string) => {
    setFormData(prev => ({ ...prev, example: sentence }));
    setShowSentenceOptions(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">
          {word ? '编辑单词' : '添加新单词'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              单词 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.word}
              onChange={(e) => setFormData(prev => ({ ...prev, word: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-success"
              placeholder="输入英文单词"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              音标
            </label>
            <input
              type="text"
              value={formData.phonetic}
              onChange={(e) => setFormData(prev => ({ ...prev, phonetic: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-success"
              placeholder="例: /ˈæpəl/"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              中文释义 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.meaning}
              onChange={(e) => setFormData(prev => ({ ...prev, meaning: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-success"
              placeholder="输入中文释义"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              例句 <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <div className="flex gap-2">
                <textarea
                  value={formData.example}
                  onChange={(e) => setFormData(prev => ({ ...prev, example: e.target.value }))}
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-success"
                  placeholder="例句将自动生成"
                  rows={3}
                  required
                />
                <div className="flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={generateSentenceForWord}
                    className="px-3 py-2 bg-success text-white rounded-lg hover:bg-green-600 text-sm whitespace-nowrap"
                    title="自动生成例句"
                  >
                    🤖 生成
                  </button>
                  <button
                    type="button"
                    onClick={showSentenceChoices}
                    className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm whitespace-nowrap"
                    title="查看多个选项"
                  >
                    📝 选择
                  </button>
                </div>
              </div>
              
              {showSentenceOptions && (
                <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">选择一个例句：</span>
                    <button
                      type="button"
                      onClick={() => setShowSentenceOptions(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="space-y-2">
                    {sentenceOptions.map((sentence, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => selectSentence(sentence)}
                        className="w-full text-left p-2 text-sm border border-gray-200 rounded hover:bg-blue-50 hover:border-blue-300 transition-colors"
                      >
                        {sentence}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              缺失字母位置
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.missingIndexes?.join(', ')}
                onChange={(e) => handleMissingIndexesChange(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-success"
                placeholder="例: 0, 2, 4 (从0开始)"
              />
              <button
                type="button"
                onClick={generateMissingIndexes}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 whitespace-nowrap"
              >
                自动生成
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              干扰字母
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.distractors?.join(', ')}
                onChange={(e) => handleDistractorsChange(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-success"
                placeholder="例: e, o, u, i"
              />
              <button
                type="button"
                onClick={generateDistractors}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 whitespace-nowrap"
              >
                自动生成
              </button>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              取消
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-success text-white rounded-lg hover:bg-green-600"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};