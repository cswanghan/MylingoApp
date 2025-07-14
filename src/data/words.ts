import { WordUnit } from '../types';

export const wordData: WordUnit[] = [
  // 水果类
  {
    id: 123,
    word: "banana",
    missingIndexes: [1, 5],
    distractors: ["e", "o", "u", "i"],
    phonetic: "/bəˈnænə/",
    meaning: "香蕉",
    example: "The monkey likes eating a banana."
  },
  {
    id: 124,
    word: "apple",
    missingIndexes: [1, 3],
    distractors: ["o", "i", "u", "e"],
    phonetic: "/ˈæpəl/",
    meaning: "苹果",
    example: "An apple a day keeps the doctor away."
  },
  {
    id: 125,
    word: "orange",
    missingIndexes: [0, 2, 4],
    distractors: ["i", "u", "e", "s"],
    phonetic: "/ˈɔrɪndʒ/",
    meaning: "橘子",
    example: "I like to drink orange juice."
  },
  {
    id: 126,
    word: "grape",
    missingIndexes: [2, 4],
    distractors: ["o", "i", "u", "s"],
    phonetic: "/ɡreɪp/",
    meaning: "葡萄",
    example: "Grapes grow on vines in the vineyard."
  },
  {
    id: 127,
    word: "lemon",
    missingIndexes: [1, 3],
    distractors: ["i", "a", "u", "s"],
    phonetic: "/ˈlemən/",
    meaning: "柠檬",
    example: "This lemon is very sour."
  },
  
  // 颜色类
  {
    id: 128,
    word: "purple",
    missingIndexes: [1, 3],
    distractors: ["o", "a", "i", "e"],
    phonetic: "/ˈpɜrpəl/",
    meaning: "紫色",
    example: "Grapes can be green or purple."
  },
  {
    id: 129,
    word: "yellow",
    missingIndexes: [1, 4],
    distractors: ["a", "i", "u", "s"],
    phonetic: "/ˈjeloʊ/",
    meaning: "黄色",
    example: "The sun is bright yellow."
  },
  {
    id: 130,
    word: "green",
    missingIndexes: [2, 4],
    distractors: ["a", "i", "u", "o"],
    phonetic: "/ɡriːn/",
    meaning: "绿色",
    example: "The grass is green in spring."
  },
  {
    id: 131,
    word: "black",
    missingIndexes: [2, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/blæk/",
    meaning: "黑色",
    example: "The cat is black and white."
  },
  {
    id: 132,
    word: "white",
    missingIndexes: [1, 3],
    distractors: ["a", "o", "u", "e"],
    phonetic: "/waɪt/",
    meaning: "白色",
    example: "Snow is white and cold."
  },
  
  // 学习生活类
  {
    id: 133,
    word: "school",
    missingIndexes: [2, 3],
    distractors: ["a", "u", "i", "e"],
    phonetic: "/skul/",
    meaning: "学校",
    example: "Children go to school to learn."
  },
  {
    id: 134,
    word: "book",
    missingIndexes: [1, 2],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/bʊk/",
    meaning: "书",
    example: "I love reading this book."
  },
  {
    id: 135,
    word: "pencil",
    missingIndexes: [1, 4],
    distractors: ["a", "o", "u", "s"],
    phonetic: "/ˈpensəl/",
    meaning: "铅笔",
    example: "Please write with a pencil."
  },
  {
    id: 136,
    word: "paper",
    missingIndexes: [1, 3],
    distractors: ["o", "i", "u", "s"],
    phonetic: "/ˈpeɪpər/",
    meaning: "纸",
    example: "Write your name on the paper."
  },
  {
    id: 137,
    word: "teacher",
    missingIndexes: [1, 4, 6],
    distractors: ["o", "i", "u", "s"],
    phonetic: "/ˈtiːtʃər/",
    meaning: "老师",
    example: "My teacher is very kind."
  },
  
  // 动物类
  {
    id: 138,
    word: "cat",
    missingIndexes: [1],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/kæt/",
    meaning: "猫",
    example: "The cat is sleeping on the sofa."
  },
  {
    id: 139,
    word: "dog",
    missingIndexes: [1],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/dɔɡ/",
    meaning: "狗",
    example: "The dog is barking loudly."
  },
  {
    id: 140,
    word: "bird",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/bɜrd/",
    meaning: "鸟",
    example: "The bird is singing in the tree."
  },
  {
    id: 141,
    word: "fish",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/fɪʃ/",
    meaning: "鱼",
    example: "Fish live in the water."
  },
  {
    id: 142,
    word: "horse",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/hɔrs/",
    meaning: "马",
    example: "The horse runs very fast."
  },
  
  // 家庭类
  {
    id: 143,
    word: "family",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈfæməli/",
    meaning: "家庭",
    example: "I love my family very much."
  },
  {
    id: 144,
    word: "mother",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈmʌðər/",
    meaning: "母亲",
    example: "My mother cooks delicious food."
  },
  {
    id: 145,
    word: "father",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈfɑðər/",
    meaning: "父亲",
    example: "My father goes to work every day."
  },
  {
    id: 146,
    word: "sister",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈsɪstər/",
    meaning: "姐妹",
    example: "My sister is studying at university."
  },
  {
    id: 147,
    word: "brother",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈbrʌðər/",
    meaning: "兄弟",
    example: "My brother plays football well."
  },
  
  // 食物类
  {
    id: 148,
    word: "bread",
    missingIndexes: [2, 3],
    distractors: ["i", "o", "u", "s"],
    phonetic: "/bred/",
    meaning: "面包",
    example: "I eat bread for breakfast."
  },
  {
    id: 149,
    word: "water",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈwɔtər/",
    meaning: "水",
    example: "Water is essential for life."
  },
  {
    id: 150,
    word: "milk",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/mɪlk/",
    meaning: "牛奶",
    example: "Children should drink milk every day."
  },
  {
    id: 151,
    word: "cheese",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/tʃiːz/",
    meaning: "奶酪",
    example: "This cheese tastes very good."
  },
  {
    id: 152,
    word: "chicken",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈtʃɪkən/",
    meaning: "鸡肉",
    example: "We had chicken for dinner."
  }
];