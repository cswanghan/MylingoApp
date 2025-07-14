import { WordUnit } from '../types';

const STORAGE_KEY = 'word-game-words';

export const saveWords = (words: WordUnit[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
  } catch (error) {
    console.error('Failed to save words:', error);
  }
};

export const loadWords = (): WordUnit[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Failed to load words:', error);
    return [];
  }
};

export const exportToCSV = (words: WordUnit[]): string => {
  const headers = ['ID', 'Word', 'Phonetic', 'Meaning', 'Example', 'Missing Indexes', 'Distractors'];
  const rows = words.map(word => [
    word.id.toString(),
    word.word,
    word.phonetic,
    word.meaning,
    word.example,
    word.missingIndexes.join(';'),
    word.distractors.join(';')
  ]);
  
  return [headers, ...rows].map(row => 
    row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(',')
  ).join('\n');
};

export const importFromCSV = (csvContent: string): WordUnit[] => {
  const lines = csvContent.split('\n').filter(line => line.trim());
  if (lines.length < 2) return [];
  
  const words: WordUnit[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.replace(/"/g, '').trim());
    if (values.length >= 7) {
      words.push({
        id: parseInt(values[0]) || Date.now() + i,
        word: values[1],
        phonetic: values[2],
        meaning: values[3],
        example: values[4],
        missingIndexes: values[5].split(';').map(n => parseInt(n)).filter(n => !isNaN(n)),
        distractors: values[6].split(';').filter(d => d.trim())
      });
    }
  }
  
  return words;
};