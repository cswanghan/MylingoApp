import React, { useState } from 'react';
import { WordUnit } from '../types';
import { WordEditor } from './WordEditor';

interface WordLibraryProps {
  words: WordUnit[];
  onWordsChange: (words: WordUnit[]) => void;
  onClose: () => void;
}

export const WordLibrary: React.FC<WordLibraryProps> = ({ words, onWordsChange, onClose }) => {
  const [editingWord, setEditingWord] = useState<WordUnit | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWords = words.filter(word => 
    word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.meaning.includes(searchTerm)
  );

  const handleSaveWord = (word: WordUnit) => {
    const existingIndex = words.findIndex(w => w.id === word.id);
    
    if (existingIndex >= 0) {
      const updatedWords = [...words];
      updatedWords[existingIndex] = word;
      onWordsChange(updatedWords);
    } else {
      onWordsChange([...words, word]);
    }
    
    setShowEditor(false);
    setEditingWord(null);
  };

  const handleDeleteWord = (id: number) => {
    if (confirm('确定要删除这个单词吗？')) {
      onWordsChange(words.filter(w => w.id !== id));
    }
  };

  const handleEditWord = (word: WordUnit) => {
    setEditingWord(word);
    setShowEditor(true);
  };

  const handleAddWord = () => {
    setEditingWord(null);
    setShowEditor(true);
  };

  const handleExportWords = () => {
    const dataStr = JSON.stringify(words, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'words.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImportWords = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedWords = JSON.parse(e.target?.result as string) as WordUnit[];
        if (Array.isArray(importedWords)) {
          onWordsChange([...words, ...importedWords]);
          alert(`成功导入 ${importedWords.length} 个单词`);
        } else {
          alert('文件格式错误');
        }
      } catch (error) {
        alert('导入失败，请检查文件格式');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b bg-slate-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">词库管理</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          <div className="flex gap-4 items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜索单词或释义..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-success"
            />
            <button
              onClick={handleAddWord}
              className="px-4 py-3 bg-success text-white rounded-lg hover:bg-green-600"
            >
              + 添加单词
            </button>
          </div>
          
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleExportWords}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              导出词库
            </button>
            <label className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 cursor-pointer">
              导入词库
              <input
                type="file"
                accept=".json"
                onChange={handleImportWords}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Word List */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="space-y-4">
            {filteredWords.map(word => (
              <div key={word.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{word.word}</h3>
                      <span className="text-gray-500">{word.phonetic}</span>
                    </div>
                    <p className="text-success font-medium mb-2">{word.meaning}</p>
                    <p className="text-gray-600 italic mb-2">"{word.example}"</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>缺失位置: {word.missingIndexes.join(', ')}</span>
                      <span>干扰字母: {word.distractors.join(', ')}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditWord(word)}
                      className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded"
                    >
                      编辑
                    </button>
                    <button
                      onClick={() => handleDeleteWord(word.id)}
                      className="px-3 py-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      删除
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredWords.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              {searchTerm ? '没有找到匹配的单词' : '暂无单词，点击添加单词开始'}
            </div>
          )}
        </div>
      </div>

      {/* Word Editor Modal */}
      {showEditor && (
        <WordEditor
          word={editingWord || undefined}
          onSave={handleSaveWord}
          onCancel={() => {
            setShowEditor(false);
            setEditingWord(null);
          }}
        />
      )}
    </div>
  );
};