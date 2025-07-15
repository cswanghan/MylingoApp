import { WordUnit } from '../types';

export const wordData: WordUnit[] = [
  // 原始30个单词 (水果、颜色、学习、动物、家庭、食物)
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
  },

  // 从ID 153开始继续添加
  // 数字类 (10个词)
  {
    id: 153,
    word: "one",
    missingIndexes: [1],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/wʌn/",
    meaning: "一",
    example: "I have one apple."
  },
  {
    id: 154,
    word: "two",
    missingIndexes: [1],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/tu/",
    meaning: "二",
    example: "Two cats are playing."
  },
  {
    id: 155,
    word: "three",
    missingIndexes: [2, 4],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/θri/",
    meaning: "三",
    example: "I have three books."
  },
  {
    id: 156,
    word: "four",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/fɔr/",
    meaning: "四",
    example: "There are four seasons."
  },
  {
    id: 157,
    word: "five",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/faɪv/",
    meaning: "五",
    example: "I have five fingers."
  },
  {
    id: 158,
    word: "six",
    missingIndexes: [1],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/sɪks/",
    meaning: "六",
    example: "Six birds are singing."
  },
  {
    id: 159,
    word: "seven",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈsevən/",
    meaning: "七",
    example: "Seven days make a week."
  },
  {
    id: 160,
    word: "eight",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/eɪt/",
    meaning: "八",
    example: "I wake up at eight o'clock."
  },
  {
    id: 161,
    word: "nine",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/naɪn/",
    meaning: "九",
    example: "Nine plus one equals ten."
  },
  {
    id: 162,
    word: "ten",
    missingIndexes: [1],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ten/",
    meaning: "十",
    example: "I have ten fingers."
  },

  // 身体部位类 (15个词)
  {
    id: 163,
    word: "head",
    missingIndexes: [1, 3],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/hed/",
    meaning: "头",
    example: "I have a headache in my head."
  },
  {
    id: 164,
    word: "face",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/feɪs/",
    meaning: "脸",
    example: "She has a beautiful face."
  },
  {
    id: 165,
    word: "eye",
    missingIndexes: [1],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/aɪ/",
    meaning: "眼睛",
    example: "I can see with my eyes."
  },
  {
    id: 166,
    word: "nose",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/noʊz/",
    meaning: "鼻子",
    example: "I smell flowers with my nose."
  },
  {
    id: 167,
    word: "mouth",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/maʊθ/",
    meaning: "嘴巴",
    example: "I eat food with my mouth."
  },
  {
    id: 168,
    word: "ear",
    missingIndexes: [1, 2],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ɪr/",
    meaning: "耳朵",
    example: "I hear music with my ears."
  },
  {
    id: 169,
    word: "hand",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/hænd/",
    meaning: "手",
    example: "I write with my hand."
  },
  {
    id: 170,
    word: "foot",
    missingIndexes: [1, 2],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/fʊt/",
    meaning: "脚",
    example: "I walk with my feet."
  },
  {
    id: 171,
    word: "arm",
    missingIndexes: [1],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ɑrm/",
    meaning: "胳膊",
    example: "I carry books with my arms."
  },
  {
    id: 172,
    word: "leg",
    missingIndexes: [1],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/leɡ/",
    meaning: "腿",
    example: "I run with my legs."
  },
  {
    id: 173,
    word: "hair",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/her/",
    meaning: "头发",
    example: "My hair is black."
  },
  {
    id: 174,
    word: "tooth",
    missingIndexes: [1, 2, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/tuθ/",
    meaning: "牙齿",
    example: "I brush my teeth every day."
  },
  {
    id: 175,
    word: "finger",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈfɪŋɡər/",
    meaning: "手指",
    example: "I have five fingers on each hand."
  },
  {
    id: 176,
    word: "back",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/bæk/",
    meaning: "背部",
    example: "My back is sore from sitting."
  },
  {
    id: 177,
    word: "neck",
    missingIndexes: [1, 3],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/nek/",
    meaning: "脖子",
    example: "I wear a scarf around my neck."
  },

  // 服装类 (15个词)
  {
    id: 178,
    word: "shirt",
    missingIndexes: [2, 4],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ʃɜrt/",
    meaning: "衬衫",
    example: "I wear a white shirt."
  },
  {
    id: 179,
    word: "pants",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/pænts/",
    meaning: "裤子",
    example: "These pants are too long."
  },
  {
    id: 180,
    word: "dress",
    missingIndexes: [2, 4],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/dres/",
    meaning: "连衣裙",
    example: "She wears a beautiful dress."
  },
  {
    id: 181,
    word: "shoes",
    missingIndexes: [2, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ʃuz/",
    meaning: "鞋子",
    example: "My shoes are comfortable."
  },
  {
    id: 182,
    word: "hat",
    missingIndexes: [1],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/hæt/",
    meaning: "帽子",
    example: "I wear a hat in the sun."
  },
  {
    id: 183,
    word: "coat",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "u", "a"],
    phonetic: "/koʊt/",
    meaning: "外套",
    example: "I need a coat in winter."
  },
  {
    id: 184,
    word: "jacket",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈdʒækɪt/",
    meaning: "夹克",
    example: "This jacket is warm."
  },
  {
    id: 185,
    word: "skirt",
    missingIndexes: [2, 4],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/skɜrt/",
    meaning: "裙子",
    example: "She likes wearing skirts."
  },
  {
    id: 186,
    word: "socks",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/sɑks/",
    meaning: "袜子",
    example: "My socks are clean."
  },
  {
    id: 187,
    word: "belt",
    missingIndexes: [1],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/belt/",
    meaning: "腰带",
    example: "I need a belt for my pants."
  },
  {
    id: 188,
    word: "tie",
    missingIndexes: [1],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/taɪ/",
    meaning: "领带",
    example: "He wears a tie to work."
  },
  {
    id: 189,
    word: "gloves",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ɡlʌvz/",
    meaning: "手套",
    example: "I wear gloves in winter."
  },
  {
    id: 190,
    word: "scarf",
    missingIndexes: [2, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/skɑrf/",
    meaning: "围巾",
    example: "The scarf is very warm."
  },
  {
    id: 191,
    word: "sweater",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈswetər/",
    meaning: "毛衣",
    example: "I like this warm sweater."
  },
  {
    id: 192,
    word: "uniform",
    missingIndexes: [1, 3, 5, 7],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/ˈjunəfɔrm/",
    meaning: "制服",
    example: "Students wear school uniforms."
  },

  // 天气与自然类 (15个词)
  {
    id: 193,
    word: "sunny",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/ˈsʌni/",
    meaning: "晴朗的",
    example: "Today is a sunny day."
  },
  {
    id: 194,
    word: "cloudy",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈklaʊdi/",
    meaning: "多云的",
    example: "The sky is cloudy today."
  },
  {
    id: 195,
    word: "rainy",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈreɪni/",
    meaning: "下雨的",
    example: "It's a rainy day."
  },
  {
    id: 196,
    word: "snowy",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈsnoʊi/",
    meaning: "下雪的",
    example: "It's cold and snowy."
  },
  {
    id: 197,
    word: "windy",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈwɪndi/",
    meaning: "有风的",
    example: "It's very windy outside."
  },
  {
    id: 198,
    word: "hot",
    missingIndexes: [1],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/hɑt/",
    meaning: "热的",
    example: "Summer days are hot."
  },
  {
    id: 199,
    word: "cold",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/koʊld/",
    meaning: "冷的",
    example: "Winter is cold."
  },
  {
    id: 200,
    word: "warm",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/wɔrm/",
    meaning: "温暖的",
    example: "Spring is warm and nice."
  },
  {
    id: 201,
    word: "cool",
    missingIndexes: [1, 2],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/kul/",
    meaning: "凉爽的",
    example: "Autumn is cool and comfortable."
  },
  {
    id: 202,
    word: "tree",
    missingIndexes: [2, 3],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/tri/",
    meaning: "树",
    example: "The tree is very tall."
  },
  {
    id: 203,
    word: "flower",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈflaʊər/",
    meaning: "花",
    example: "The flower smells sweet."
  },
  {
    id: 204,
    word: "grass",
    missingIndexes: [2, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ɡræs/",
    meaning: "草",
    example: "The grass is green."
  },
  {
    id: 205,
    word: "sky",
    missingIndexes: [1],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/skaɪ/",
    meaning: "天空",
    example: "The sky is blue today."
  },
  {
    id: 206,
    word: "cloud",
    missingIndexes: [2, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/klaʊd/",
    meaning: "云",
    example: "White clouds float in the sky."
  },
  {
    id: 207,
    word: "rain",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/reɪn/",
    meaning: "雨",
    example: "The rain makes the flowers grow."
  },

  // 时间类 (15个词)
  {
    id: 208,
    word: "today",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/təˈdeɪ/",
    meaning: "今天",
    example: "Today is a beautiful day."
  },
  {
    id: 209,
    word: "tomorrow",
    missingIndexes: [1, 3, 5, 7],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/təˈmɔroʊ/",
    meaning: "明天",
    example: "I will see you tomorrow."
  },
  {
    id: 210,
    word: "yesterday",
    missingIndexes: [1, 3, 5, 7, 8],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈjestərdeɪ/",
    meaning: "昨天",
    example: "Yesterday was Monday."
  },
  {
    id: 211,
    word: "morning",
    missingIndexes: [1, 3, 5, 6],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈmɔrnɪŋ/",
    meaning: "早晨",
    example: "I wake up in the morning."
  },
  {
    id: 212,
    word: "afternoon",
    missingIndexes: [1, 3, 5, 7, 9],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˌæftərˈnun/",
    meaning: "下午",
    example: "I have lunch in the afternoon."
  },
  {
    id: 213,
    word: "evening",
    missingIndexes: [1, 3, 5, 6],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈivnɪŋ/",
    meaning: "晚上",
    example: "We watch TV in the evening."
  },
  {
    id: 214,
    word: "night",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/naɪt/",
    meaning: "夜晚",
    example: "The stars shine at night."
  },
  {
    id: 215,
    word: "week",
    missingIndexes: [1, 2],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/wik/",
    meaning: "星期",
    example: "There are seven days in a week."
  },
  {
    id: 216,
    word: "month",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/mʌnθ/",
    meaning: "月份",
    example: "January is the first month."
  },
  {
    id: 217,
    word: "year",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/jɪr/",
    meaning: "年",
    example: "This year I will learn English."
  },
  {
    id: 218,
    word: "hour",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/aʊər/",
    meaning: "小时",
    example: "One hour has sixty minutes."
  },
  {
    id: 219,
    word: "minute",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈmɪnɪt/",
    meaning: "分钟",
    example: "Wait a minute, please."
  },
  {
    id: 220,
    word: "second",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈsekənd/",
    meaning: "秒",
    example: "A minute has sixty seconds."
  },
  {
    id: 221,
    word: "clock",
    missingIndexes: [2, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/klɑk/",
    meaning: "时钟",
    example: "The clock shows it's three o'clock."
  },
  {
    id: 222,
    word: "watch",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/wɑtʃ/",
    meaning: "手表",
    example: "I wear a watch on my wrist."
  },

  // 动作类 (15个词)
  {
    id: 223,
    word: "eat",
    missingIndexes: [1, 2],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/it/",
    meaning: "吃",
    example: "I eat breakfast every morning."
  },
  {
    id: 224,
    word: "drink",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/drɪŋk/",
    meaning: "喝",
    example: "I drink water when I'm thirsty."
  },
  {
    id: 225,
    word: "sleep",
    missingIndexes: [2, 4],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/slip/",
    meaning: "睡觉",
    example: "I sleep eight hours every night."
  },
  {
    id: 226,
    word: "wake",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/weɪk/",
    meaning: "醒来",
    example: "I wake up early in the morning."
  },
  {
    id: 227,
    word: "read",
    missingIndexes: [1, 3],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/rid/",
    meaning: "读",
    example: "I read books every day."
  },
  {
    id: 228,
    word: "write",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/raɪt/",
    meaning: "写",
    example: "I write letters to my friends."
  },
  {
    id: 229,
    word: "listen",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈlɪsən/",
    meaning: "听",
    example: "I listen to music."
  },
  {
    id: 230,
    word: "speak",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/spik/",
    meaning: "说话",
    example: "I speak English every day."
  },
  {
    id: 231,
    word: "walk",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/wɔk/",
    meaning: "走路",
    example: "Let's walk to the store."
  },
  {
    id: 232,
    word: "run",
    missingIndexes: [1, 2],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/rʌn/",
    meaning: "跑步",
    example: "I run every morning."
  },
  {
    id: 233,
    word: "jump",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/dʒʌmp/",
    meaning: "跳跃",
    example: "The rabbit can jump very high."
  },
  {
    id: 234,
    word: "swim",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/swɪm/",
    meaning: "游泳",
    example: "Fish swim in the water."
  },
  {
    id: 235,
    word: "dance",
    missingIndexes: [1, 3, 4],
    distractors: ["i", "o", "u", "s"],
    phonetic: "/dæns/",
    meaning: "跳舞",
    example: "She loves to dance."
  },
  {
    id: 236,
    word: "sing",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/sɪŋ/",
    meaning: "唱歌",
    example: "Birds sing in the morning."
  },
  {
    id: 237,
    word: "play",
    missingIndexes: [2, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/pleɪ/",
    meaning: "玩、运动",
    example: "Children like to play in the park."
  },

  // 地点类 (15个词)
  {
    id: 238,
    word: "house",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/haʊs/",
    meaning: "房子",
    example: "We live in a big house."
  },
  {
    id: 239,
    word: "room",
    missingIndexes: [1, 2],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/rum/",
    meaning: "房间",
    example: "My room is very clean."
  },
  {
    id: 240,
    word: "kitchen",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈkɪtʃən/",
    meaning: "厨房",
    example: "Mom cooks in the kitchen."
  },
  {
    id: 241,
    word: "bathroom",
    missingIndexes: [1, 3, 5, 7],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈbæθrum/",
    meaning: "浴室",
    example: "I brush my teeth in the bathroom."
  },
  {
    id: 242,
    word: "bedroom",
    missingIndexes: [1, 3, 5, 6],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈbedrum/",
    meaning: "卧室",
    example: "I sleep in my bedroom."
  },
  {
    id: 243,
    word: "garden",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈɡɑrdən/",
    meaning: "花园",
    example: "Flowers grow in the garden."
  },
  {
    id: 244,
    word: "park",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/pɑrk/",
    meaning: "公园",
    example: "Children play in the park."
  },
  {
    id: 245,
    word: "store",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/stɔr/",
    meaning: "商店",
    example: "I buy food at the store."
  },
  {
    id: 246,
    word: "hospital",
    missingIndexes: [1, 3, 5, 7],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈhɑspɪtəl/",
    meaning: "医院",
    example: "Doctors work in the hospital."
  },
  {
    id: 247,
    word: "library",
    missingIndexes: [1, 3, 5, 6],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈlaɪbreri/",
    meaning: "图书馆",
    example: "I read books in the library."
  },
  {
    id: 248,
    word: "restaurant",
    missingIndexes: [1, 3, 5, 7, 9],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/ˈrestərɑnt/",
    meaning: "餐厅",
    example: "We eat dinner at the restaurant."
  },
  {
    id: 249,
    word: "bank",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/bæŋk/",
    meaning: "银行",
    example: "I save money in the bank."
  },
  {
    id: 250,
    word: "museum",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/mjuˈziəm/",
    meaning: "博物馆",
    example: "We visit the museum on weekends."
  },
  {
    id: 251,
    word: "beach",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/bitʃ/",
    meaning: "海滩",
    example: "We swim at the beach."
  },
  {
    id: 252,
    word: "mountain",
    missingIndexes: [1, 3, 5, 7],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈmaʊntən/",
    meaning: "山",
    example: "The mountain is very high."
  },

  // 交通工具类 (15个词)
  {
    id: 253,
    word: "car",
    missingIndexes: [1, 2],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/kɑr/",
    meaning: "汽车",
    example: "I drive a car to work."
  },
  {
    id: 254,
    word: "bus",
    missingIndexes: [1, 2],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/bʌs/",
    meaning: "公交车",
    example: "I take the bus to school."
  },
  {
    id: 255,
    word: "train",
    missingIndexes: [2, 4],
    distractors: ["e", "o", "u", "i"],
    phonetic: "/treɪn/",
    meaning: "火车",
    example: "The train is very fast."
  },
  {
    id: 256,
    word: "plane",
    missingIndexes: [2, 4],
    distractors: ["i", "o", "u", "e"],
    phonetic: "/pleɪn/",
    meaning: "飞机",
    example: "I travel by plane."
  },
  {
    id: 257,
    word: "bike",
    missingIndexes: [1, 3],
    distractors: ["a", "o", "u", "e"],
    phonetic: "/baɪk/",
    meaning: "自行车",
    example: "I ride my bike to the park."
  },
  {
    id: 258,
    word: "boat",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "u", "a"],
    phonetic: "/boʊt/",
    meaning: "船",
    example: "The boat is on the lake."
  },
  {
    id: 259,
    word: "ship",
    missingIndexes: [2, 3],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ʃɪp/",
    meaning: "轮船",
    example: "The ship sails across the ocean."
  },
  {
    id: 260,
    word: "taxi",
    missingIndexes: [1, 3],
    distractors: ["e", "o", "u", "i"],
    phonetic: "/ˈtæksi/",
    meaning: "出租车",
    example: "I take a taxi when I'm late."
  },
  {
    id: 261,
    word: "subway",
    missingIndexes: [2, 4, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈsʌbweɪ/",
    meaning: "地铁",
    example: "The subway is underground."
  },
  {
    id: 262,
    word: "truck",
    missingIndexes: [2, 4],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/trʌk/",
    meaning: "卡车",
    example: "The truck carries heavy things."
  },
  {
    id: 263,
    word: "motorcycle",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈmoʊtərsaɪkəl/",
    meaning: "摩托车",
    example: "He rides a motorcycle."
  },
  {
    id: 264,
    word: "helicopter",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈhelɪkɑptər/",
    meaning: "直升机",
    example: "The helicopter flies above the city."
  },
  {
    id: 265,
    word: "scooter",
    missingIndexes: [2, 5, 6],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈskutər/",
    meaning: "滑板车",
    example: "Kids ride scooters in the park."
  },
  {
    id: 266,
    word: "walk",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/wɔk/",
    meaning: "步行",
    example: "I walk to school every day."
  },
  {
    id: 267,
    word: "drive",
    missingIndexes: [2, 4],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/draɪv/",
    meaning: "驾驶",
    example: "I can drive a car."
  },

  // 职业类 (15个词)
  {
    id: 268,
    word: "teacher",
    missingIndexes: [1, 3, 5],
    distractors: ["i", "o", "u", "a"],
    phonetic: "/ˈtitʃər/",
    meaning: "老师",
    example: "My teacher is very kind."
  },
  {
    id: 269,
    word: "doctor",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈdɑktər/",
    meaning: "医生",
    example: "The doctor helps sick people."
  },
  {
    id: 270,
    word: "nurse",
    missingIndexes: [2, 4],
    distractors: ["a", "i", "o", "e"],
    phonetic: "/nɜrs/",
    meaning: "护士",
    example: "The nurse takes care of patients."
  },
  {
    id: 271,
    word: "pilot",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "u", "o"],
    phonetic: "/ˈpaɪlət/",
    meaning: "飞行员",
    example: "The pilot flies the plane."
  },
  {
    id: 272,
    word: "chef",
    missingIndexes: [2, 3],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ʃef/",
    meaning: "厨师",
    example: "The chef cooks delicious food."
  },
  {
    id: 273,
    word: "police",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "e", "u", "i"],
    phonetic: "/pəˈlis/",
    meaning: "警察",
    example: "The police keep us safe."
  },
  {
    id: 274,
    word: "farmer",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈfɑrmər/",
    meaning: "农民",
    example: "The farmer grows vegetables."
  },
  {
    id: 275,
    word: "artist",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "o", "u", "i"],
    phonetic: "/ˈɑrtɪst/",
    meaning: "艺术家",
    example: "The artist paints beautiful pictures."
  },
  {
    id: 276,
    word: "singer",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "o", "u", "e"],
    phonetic: "/ˈsɪŋər/",
    meaning: "歌手",
    example: "The singer has a beautiful voice."
  },
  {
    id: 277,
    word: "dancer",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈdænsər/",
    meaning: "舞者",
    example: "The dancer moves gracefully."
  },
  {
    id: 278,
    word: "writer",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈraɪtər/",
    meaning: "作家",
    example: "The writer writes books."
  },
  {
    id: 279,
    word: "driver",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈdraɪvər/",
    meaning: "司机",
    example: "The bus driver is careful."
  },
  {
    id: 280,
    word: "worker",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈwɜrkər/",
    meaning: "工人",
    example: "The worker builds houses."
  },
  {
    id: 281,
    word: "soldier",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "u", "i", "e"],
    phonetic: "/ˈsoʊldʒər/",
    meaning: "士兵",
    example: "The soldier protects the country."
  },
  {
    id: 282,
    word: "student",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "i", "o", "e"],
    phonetic: "/ˈstudnt/",
    meaning: "学生",
    example: "I am a good student."
  },

  // 情感类 (15个词)
  {
    id: 283,
    word: "happy",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈhæpi/",
    meaning: "快乐的",
    example: "I feel happy today."
  },
  {
    id: 284,
    word: "sad",
    missingIndexes: [1, 2],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/sæd/",
    meaning: "悲伤的",
    example: "She looks sad."
  },
  {
    id: 285,
    word: "angry",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈæŋgri/",
    meaning: "生气的",
    example: "Don't be angry with me."
  },
  {
    id: 286,
    word: "afraid",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/əˈfreɪd/",
    meaning: "害怕的",
    example: "I'm afraid of the dark."
  },
  {
    id: 287,
    word: "excited",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ɪkˈsaɪtɪd/",
    meaning: "兴奋的",
    example: "The children are excited."
  },
  {
    id: 288,
    word: "tired",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "o", "u", "e"],
    phonetic: "/taɪərd/",
    meaning: "疲倦的",
    example: "I'm tired after work."
  },
  {
    id: 289,
    word: "bored",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/bɔrd/",
    meaning: "无聊的",
    example: "I feel bored at home."
  },
  {
    id: 290,
    word: "proud",
    missingIndexes: [2, 3, 4],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/praʊd/",
    meaning: "骄傲的",
    example: "I'm proud of you."
  },
  {
    id: 291,
    word: "shy",
    missingIndexes: [1, 2],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/ʃaɪ/",
    meaning: "害羞的",
    example: "She is very shy."
  },
  {
    id: 292,
    word: "brave",
    missingIndexes: [2, 4],
    distractors: ["i", "o", "u", "e"],
    phonetic: "/breɪv/",
    meaning: "勇敢的",
    example: "You are very brave."
  },
  {
    id: 293,
    word: "calm",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/kɑm/",
    meaning: "平静的",
    example: "Stay calm and breathe."
  },
  {
    id: 294,
    word: "nervous",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "i", "u", "o"],
    phonetic: "/ˈnɜrvəs/",
    meaning: "紧张的",
    example: "I feel nervous before the test."
  },
  {
    id: 295,
    word: "surprised",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "e", "o", "i"],
    phonetic: "/sərˈpraɪzd/",
    meaning: "惊讶的",
    example: "I was surprised by the gift."
  },
  {
    id: 296,
    word: "worried",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "u", "i"],
    phonetic: "/ˈwɜrid/",
    meaning: "担心的",
    example: "Don't be worried about it."
  },
  {
    id: 297,
    word: "lonely",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈloʊnli/",
    meaning: "孤独的",
    example: "He feels lonely without friends."
  },

  // 学习用品类 (15个词)
  {
    id: 298,
    word: "book",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/bʊk/",
    meaning: "书",
    example: "I read a book every night."
  },
  {
    id: 299,
    word: "pen",
    missingIndexes: [1, 2],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/pen/",
    meaning: "钢笔",
    example: "I write with a pen."
  },
  {
    id: 300,
    word: "pencil",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈpensəl/",
    meaning: "铅笔",
    example: "I draw with a pencil."
  },
  {
    id: 301,
    word: "eraser",
    missingIndexes: [1, 3, 5],
    distractors: ["i", "o", "u", "a"],
    phonetic: "/ɪˈreɪsər/",
    meaning: "橡皮",
    example: "I use an eraser to fix mistakes."
  },
  {
    id: 302,
    word: "ruler",
    missingIndexes: [2, 4],
    distractors: ["a", "i", "o", "e"],
    phonetic: "/ˈrulər/",
    meaning: "尺子",
    example: "The ruler is 30 cm long."
  },
  {
    id: 303,
    word: "notebook",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈnoʊtbʊk/",
    meaning: "笔记本",
    example: "I write notes in my notebook."
  },
  {
    id: 304,
    word: "backpack",
    missingIndexes: [2, 5, 7],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈbækpæk/",
    meaning: "背包",
    example: "My backpack is heavy."
  },
  {
    id: 305,
    word: "desk",
    missingIndexes: [1, 3],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/desk/",
    meaning: "书桌",
    example: "I study at my desk."
  },
  {
    id: 306,
    word: "chair",
    missingIndexes: [2, 3, 4],
    distractors: ["e", "o", "u", "i"],
    phonetic: "/tʃer/",
    meaning: "椅子",
    example: "Please sit on the chair."
  },
  {
    id: 307,
    word: "paper",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈpeɪpər/",
    meaning: "纸",
    example: "Write on the paper."
  },
  {
    id: 308,
    word: "scissors",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "u", "o"],
    phonetic: "/ˈsɪzərz/",
    meaning: "剪刀",
    example: "Cut the paper with scissors."
  },
  {
    id: 309,
    word: "glue",
    missingIndexes: [2, 3],
    distractors: ["a", "i", "o", "e"],
    phonetic: "/glu/",
    meaning: "胶水",
    example: "Use glue to stick papers."
  },
  {
    id: 310,
    word: "crayon",
    missingIndexes: [2, 4, 5],
    distractors: ["e", "i", "u", "o"],
    phonetic: "/ˈkreɪən/",
    meaning: "蜡笔",
    example: "Children color with crayons."
  },
  {
    id: 311,
    word: "marker",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈmɑrkər/",
    meaning: "马克笔",
    example: "I use a marker on the board."
  },
  {
    id: 312,
    word: "calculator",
    missingIndexes: [2, 5, 8],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈkælkjəleɪtər/",
    meaning: "计算器",
    example: "I use a calculator for math."
  },

  // 更多食物饮料类 (30个词)
  {
    id: 313,
    word: "rice",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/raɪs/",
    meaning: "米饭",
    example: "I eat rice for lunch."
  },
  {
    id: 314,
    word: "noodles",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈnudəlz/",
    meaning: "面条",
    example: "I love eating noodles."
  },
  {
    id: 315,
    word: "soup",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/sup/",
    meaning: "汤",
    example: "The soup is hot."
  },
  {
    id: 316,
    word: "salad",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈsæləd/",
    meaning: "沙拉",
    example: "I eat salad for health."
  },
  {
    id: 317,
    word: "pizza",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "o", "u", "a"],
    phonetic: "/ˈpitsə/",
    meaning: "披萨",
    example: "Pizza is my favorite food."
  },
  {
    id: 318,
    word: "burger",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "i", "o", "e"],
    phonetic: "/ˈbɜrgər/",
    meaning: "汉堡",
    example: "I order a burger and fries."
  },
  {
    id: 319,
    word: "sandwich",
    missingIndexes: [2, 5, 7],
    distractors: ["e", "o", "u", "i"],
    phonetic: "/ˈsænwɪtʃ/",
    meaning: "三明治",
    example: "I make a sandwich for breakfast."
  },
  {
    id: 320,
    word: "cheese",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/tʃiz/",
    meaning: "奶酪",
    example: "I like cheese on my sandwich."
  },
  {
    id: 321,
    word: "butter",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "i", "o", "e"],
    phonetic: "/ˈbʌtər/",
    meaning: "黄油",
    example: "Spread butter on the bread."
  },
  {
    id: 322,
    word: "honey",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈhʌni/",
    meaning: "蜂蜜",
    example: "Honey is sweet."
  },
  {
    id: 323,
    word: "sugar",
    missingIndexes: [2, 3, 4],
    distractors: ["e", "i", "o", "a"],
    phonetic: "/ˈʃʊgər/",
    meaning: "糖",
    example: "Add sugar to the tea."
  },
  {
    id: 324,
    word: "salt",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/sɔlt/",
    meaning: "盐",
    example: "Don't add too much salt."
  },
  {
    id: 325,
    word: "pepper",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈpepər/",
    meaning: "胡椒",
    example: "Add salt and pepper to taste."
  },
  {
    id: 326,
    word: "sauce",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/sɔs/",
    meaning: "酱汁",
    example: "The sauce is spicy."
  },
  {
    id: 327,
    word: "oil",
    missingIndexes: [1, 2],
    distractors: ["a", "e", "u", "i"],
    phonetic: "/ɔɪl/",
    meaning: "油",
    example: "Cook with olive oil."
  },
  {
    id: 328,
    word: "vinegar",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈvɪnɪgər/",
    meaning: "醋",
    example: "Add vinegar to the salad."
  },
  {
    id: 329,
    word: "jam",
    missingIndexes: [1, 2],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/dʒæm/",
    meaning: "果酱",
    example: "Spread jam on toast."
  },
  {
    id: 330,
    word: "yogurt",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈjoʊgərt/",
    meaning: "酸奶",
    example: "I eat yogurt with fruit."
  },
  {
    id: 331,
    word: "cream",
    missingIndexes: [2, 4],
    distractors: ["i", "o", "u", "a"],
    phonetic: "/krim/",
    meaning: "奶油",
    example: "Add cream to the coffee."
  },
  {
    id: 332,
    word: "chocolate",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈtʃɑklət/",
    meaning: "巧克力",
    example: "Chocolate is sweet."
  },
  {
    id: 333,
    word: "candy",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈkændi/",
    meaning: "糖果",
    example: "Children like candy."
  },
  {
    id: 334,
    word: "cookie",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "e", "u", "i"],
    phonetic: "/ˈkʊki/",
    meaning: "饼干",
    example: "Have a cookie with milk."
  },
  {
    id: 335,
    word: "popcorn",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈpɑpkɔrn/",
    meaning: "爆米花",
    example: "We eat popcorn at the movies."
  },
  {
    id: 336,
    word: "chips",
    missingIndexes: [2, 3, 4],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/tʃɪps/",
    meaning: "薯片",
    example: "I like potato chips."
  },
  {
    id: 337,
    word: "nuts",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/nʌts/",
    meaning: "坚果",
    example: "Nuts are healthy snacks."
  },
  {
    id: 338,
    word: "beans",
    missingIndexes: [1, 3, 4],
    distractors: ["i", "o", "u", "a"],
    phonetic: "/binz/",
    meaning: "豆子",
    example: "Green beans are vegetables."
  },
  {
    id: 339,
    word: "corn",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/kɔrn/",
    meaning: "玉米",
    example: "Corn is yellow."
  },
  {
    id: 340,
    word: "potato",
    missingIndexes: [2, 4, 5],
    distractors: ["e", "i", "u", "a"],
    phonetic: "/pəˈteɪtoʊ/",
    meaning: "土豆",
    example: "I like fried potatoes."
  },
  {
    id: 341,
    word: "tomato",
    missingIndexes: [2, 4, 5],
    distractors: ["e", "i", "u", "a"],
    phonetic: "/təˈmeɪtoʊ/",
    meaning: "番茄",
    example: "Tomatoes are red."
  },
  {
    id: 342,
    word: "carrot",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "u", "o"],
    phonetic: "/ˈkærət/",
    meaning: "胡萝卜",
    example: "Rabbits eat carrots."
  },

  // 运动类 (15个词)
  {
    id: 343,
    word: "football",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈfʊtbɔl/",
    meaning: "足球",
    example: "I play football with friends."
  },
  {
    id: 344,
    word: "basketball",
    missingIndexes: [2, 5, 8],
    distractors: ["i", "o", "u", "e"],
    phonetic: "/ˈbæskɪtbɔl/",
    meaning: "篮球",
    example: "Basketball is a team sport."
  },
  {
    id: 345,
    word: "tennis",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈtenɪs/",
    meaning: "网球",
    example: "She plays tennis well."
  },
  {
    id: 346,
    word: "baseball",
    missingIndexes: [2, 4, 7],
    distractors: ["i", "o", "u", "e"],
    phonetic: "/ˈbeɪsbɔl/",
    meaning: "棒球",
    example: "Baseball is popular in America."
  },
  {
    id: 347,
    word: "volleyball",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈvɑlibɔl/",
    meaning: "排球",
    example: "We play volleyball on the beach."
  },
  {
    id: 348,
    word: "golf",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/gɑlf/",
    meaning: "高尔夫",
    example: "Golf is a quiet sport."
  },
  {
    id: 349,
    word: "hockey",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈhɑki/",
    meaning: "曲棍球",
    example: "Ice hockey is exciting."
  },
  {
    id: 350,
    word: "cricket",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "o", "u", "e"],
    phonetic: "/ˈkrɪkɪt/",
    meaning: "板球",
    example: "Cricket is popular in India."
  },
  {
    id: 351,
    word: "rugby",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/ˈrʌgbi/",
    meaning: "橄榄球",
    example: "Rugby is a tough sport."
  },
  {
    id: 352,
    word: "boxing",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "u", "i"],
    phonetic: "/ˈbɑksɪŋ/",
    meaning: "拳击",
    example: "Boxing requires strength."
  },
  {
    id: 353,
    word: "skating",
    missingIndexes: [2, 4, 6],
    distractors: ["e", "o", "u", "i"],
    phonetic: "/ˈskeɪtɪŋ/",
    meaning: "滑冰",
    example: "Ice skating is fun."
  },
  {
    id: 354,
    word: "skiing",
    missingIndexes: [2, 3, 5],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈskiɪŋ/",
    meaning: "滑雪",
    example: "Skiing is a winter sport."
  },
  {
    id: 355,
    word: "surfing",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "o", "i"],
    phonetic: "/ˈsɜrfɪŋ/",
    meaning: "冲浪",
    example: "Surfing needs good balance."
  },
  {
    id: 356,
    word: "cycling",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈsaɪklɪŋ/",
    meaning: "骑自行车",
    example: "Cycling is good exercise."
  },
  {
    id: 357,
    word: "jogging",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈdʒɑgɪŋ/",
    meaning: "慢跑",
    example: "I go jogging every morning."
  },

  // 乐器类 (15个词)
  {
    id: 358,
    word: "piano",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "u", "o", "a"],
    phonetic: "/piˈænoʊ/",
    meaning: "钢琴",
    example: "She plays the piano beautifully."
  },
  {
    id: 359,
    word: "guitar",
    missingIndexes: [2, 4, 5],
    distractors: ["e", "o", "a", "i"],
    phonetic: "/gɪˈtɑr/",
    meaning: "吉他",
    example: "He plays the guitar in a band."
  },
  {
    id: 360,
    word: "violin",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "e", "u", "o"],
    phonetic: "/ˌvaɪəˈlɪn/",
    meaning: "小提琴",
    example: "The violin makes beautiful music."
  },
  {
    id: 361,
    word: "drum",
    missingIndexes: [2, 3],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/drʌm/",
    meaning: "鼓",
    example: "Beat the drum loudly."
  },
  {
    id: 362,
    word: "flute",
    missingIndexes: [2, 3, 4],
    distractors: ["a", "i", "o", "e"],
    phonetic: "/flut/",
    meaning: "笛子",
    example: "The flute sounds soft."
  },
  {
    id: 363,
    word: "trumpet",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "i", "o", "e"],
    phonetic: "/ˈtrʌmpɪt/",
    meaning: "小号",
    example: "The trumpet is loud."
  },
  {
    id: 364,
    word: "saxophone",
    missingIndexes: [2, 5, 7],
    distractors: ["e", "i", "u", "o"],
    phonetic: "/ˈsæksəfoʊn/",
    meaning: "萨克斯",
    example: "Jazz uses the saxophone."
  },
  {
    id: 365,
    word: "cello",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "i", "u", "o"],
    phonetic: "/ˈtʃeloʊ/",
    meaning: "大提琴",
    example: "The cello has deep tones."
  },
  {
    id: 366,
    word: "harp",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/hɑrp/",
    meaning: "竖琴",
    example: "Angels play the harp."
  },
  {
    id: 367,
    word: "harmonica",
    missingIndexes: [2, 5, 7],
    distractors: ["e", "i", "u", "o"],
    phonetic: "/hɑrˈmɑnɪkə/",
    meaning: "口琴",
    example: "The harmonica is small."
  },
  {
    id: 368,
    word: "organ",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈɔrgən/",
    meaning: "管风琴",
    example: "Churches have organs."
  },
  {
    id: 369,
    word: "accordion",
    missingIndexes: [2, 5, 7],
    distractors: ["e", "i", "u", "o"],
    phonetic: "/əˈkɔrdiən/",
    meaning: "手风琴",
    example: "The accordion is complex."
  },
  {
    id: 370,
    word: "banjo",
    missingIndexes: [2, 4],
    distractors: ["e", "i", "u", "o"],
    phonetic: "/ˈbændʒoʊ/",
    meaning: "班卓琴",
    example: "Country music uses banjo."
  },
  {
    id: 371,
    word: "tambourine",
    missingIndexes: [2, 5, 8],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˌtæmbəˈrin/",
    meaning: "铃鼓",
    example: "Shake the tambourine."
  },
  {
    id: 372,
    word: "xylophone",
    missingIndexes: [1, 3, 6],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈzaɪləfoʊn/",
    meaning: "木琴",
    example: "Children play the xylophone."
  },

  // 更多动物类 (15个词)
  {
    id: 373,
    word: "elephant",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈelɪfənt/",
    meaning: "大象",
    example: "The elephant is huge."
  },
  {
    id: 374,
    word: "giraffe",
    missingIndexes: [2, 4, 6],
    distractors: ["e", "o", "u", "a"],
    phonetic: "/dʒəˈræf/",
    meaning: "长颈鹿",
    example: "The giraffe has a long neck."
  },
  {
    id: 375,
    word: "zebra",
    missingIndexes: [1, 3, 4],
    distractors: ["i", "o", "u", "a"],
    phonetic: "/ˈzibrə/",
    meaning: "斑马",
    example: "The zebra has stripes."
  },
  {
    id: 376,
    word: "monkey",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈmʌŋki/",
    meaning: "猴子",
    example: "The monkey climbs trees."
  },
  {
    id: 377,
    word: "panda",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈpændə/",
    meaning: "熊猫",
    example: "The panda eats bamboo."
  },
  {
    id: 378,
    word: "koala",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "u", "a"],
    phonetic: "/koʊˈɑlə/",
    meaning: "考拉",
    example: "The koala sleeps a lot."
  },
  {
    id: 379,
    word: "kangaroo",
    missingIndexes: [2, 5, 7],
    distractors: ["e", "i", "u", "o"],
    phonetic: "/ˌkæŋgəˈru/",
    meaning: "袋鼠",
    example: "The kangaroo hops."
  },
  {
    id: 380,
    word: "penguin",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "o", "e", "i"],
    phonetic: "/ˈpeŋgwɪn/",
    meaning: "企鹅",
    example: "Penguins can't fly."
  },
  {
    id: 381,
    word: "dolphin",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "u", "i"],
    phonetic: "/ˈdɑlfɪn/",
    meaning: "海豚",
    example: "Dolphins are smart."
  },
  {
    id: 382,
    word: "whale",
    missingIndexes: [1, 3, 4],
    distractors: ["i", "o", "u", "e"],
    phonetic: "/weɪl/",
    meaning: "鲸鱼",
    example: "The whale is the biggest animal."
  },
  {
    id: 383,
    word: "shark",
    missingIndexes: [2, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ʃɑrk/",
    meaning: "鲨鱼",
    example: "The shark has sharp teeth."
  },
  {
    id: 384,
    word: "octopus",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈɑktəpəs/",
    meaning: "章鱼",
    example: "The octopus has eight arms."
  },
  {
    id: 385,
    word: "turtle",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "i", "o", "e"],
    phonetic: "/ˈtɜrtl/",
    meaning: "乌龟",
    example: "The turtle moves slowly."
  },
  {
    id: 386,
    word: "crocodile",
    missingIndexes: [2, 4, 7],
    distractors: ["a", "e", "u", "i"],
    phonetic: "/ˈkrɑkədaɪl/",
    meaning: "鳄鱼",
    example: "The crocodile is dangerous."
  },
  {
    id: 387,
    word: "snake",
    missingIndexes: [2, 3, 4],
    distractors: ["i", "o", "u", "e"],
    phonetic: "/sneɪk/",
    meaning: "蛇",
    example: "The snake is long."
  },

  // 节日庆典类 (15个词)
  {
    id: 388,
    word: "birthday",
    missingIndexes: [2, 5, 7],
    distractors: ["e", "o", "u", "a"],
    phonetic: "/ˈbɜrθdeɪ/",
    meaning: "生日",
    example: "Happy birthday to you!"
  },
  {
    id: 389,
    word: "Christmas",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈkrɪsməs/",
    meaning: "圣诞节",
    example: "Christmas is in December."
  },
  {
    id: 390,
    word: "Halloween",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˌhæloʊˈin/",
    meaning: "万圣节",
    example: "Halloween is fun for kids."
  },
  {
    id: 391,
    word: "Easter",
    missingIndexes: [1, 3, 5],
    distractors: ["i", "o", "u", "a"],
    phonetic: "/ˈistər/",
    meaning: "复活节",
    example: "Easter eggs are colorful."
  },
  {
    id: 392,
    word: "Thanksgiving",
    missingIndexes: [2, 6, 10],
    distractors: ["e", "o", "u", "i"],
    phonetic: "/ˌθæŋksˈgɪvɪŋ/",
    meaning: "感恩节",
    example: "Thanksgiving is for family."
  },
  {
    id: 393,
    word: "party",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈpɑrti/",
    meaning: "派对",
    example: "Let's have a party!"
  },
  {
    id: 394,
    word: "wedding",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈwedɪŋ/",
    meaning: "婚礼",
    example: "The wedding is beautiful."
  },
  {
    id: 395,
    word: "festival",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈfestɪvəl/",
    meaning: "节日",
    example: "The music festival is exciting."
  },
  {
    id: 396,
    word: "celebration",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˌselɪˈbreɪʃən/",
    meaning: "庆祝",
    example: "It's a big celebration."
  },
  {
    id: 397,
    word: "gift",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/gɪft/",
    meaning: "礼物",
    example: "Thank you for the gift."
  },
  {
    id: 398,
    word: "present",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈprezənt/",
    meaning: "礼物",
    example: "I got a present."
  },
  {
    id: 399,
    word: "candle",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈkændl/",
    meaning: "蜡烛",
    example: "Blow out the candles."
  },
  {
    id: 400,
    word: "balloon",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/bəˈlun/",
    meaning: "气球",
    example: "The balloon is red."
  },
  {
    id: 401,
    word: "fireworks",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "o", "u", "e"],
    phonetic: "/ˈfaɪərwɜrks/",
    meaning: "烟花",
    example: "Fireworks light up the sky."
  },
  {
    id: 402,
    word: "decoration",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˌdekəˈreɪʃən/",
    meaning: "装饰",
    example: "The decoration is beautiful."
  },

  // 家居用品类 (20个词)
  {
    id: 403,
    word: "table",
    missingIndexes: [1, 3, 4],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈteɪbl/",
    meaning: "桌子",
    example: "Put it on the table."
  },
  {
    id: 404,
    word: "bed",
    missingIndexes: [1, 2],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/bed/",
    meaning: "床",
    example: "I sleep in my bed."
  },
  {
    id: 405,
    word: "sofa",
    missingIndexes: [1, 3],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈsoʊfə/",
    meaning: "沙发",
    example: "Sit on the sofa."
  },
  {
    id: 406,
    word: "cupboard",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/ˈkʌbərd/",
    meaning: "橱柜",
    example: "The cupboard is full."
  },
  {
    id: 407,
    word: "mirror",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈmɪrər/",
    meaning: "镜子",
    example: "Look in the mirror."
  },
  {
    id: 408,
    word: "lamp",
    missingIndexes: [1, 3],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/læmp/",
    meaning: "灯",
    example: "Turn on the lamp."
  },
  {
    id: 409,
    word: "curtain",
    missingIndexes: [2, 4, 6],
    distractors: ["e", "o", "i", "a"],
    phonetic: "/ˈkɜrtn/",
    meaning: "窗帘",
    example: "Close the curtains."
  },
  {
    id: 410,
    word: "carpet",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈkɑrpɪt/",
    meaning: "地毯",
    example: "The carpet is soft."
  },
  {
    id: 411,
    word: "pillow",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "u", "o"],
    phonetic: "/ˈpɪloʊ/",
    meaning: "枕头",
    example: "My pillow is comfortable."
  },
  {
    id: 412,
    word: "blanket",
    missingIndexes: [2, 4, 6],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈblæŋkɪt/",
    meaning: "毯子",
    example: "The blanket keeps me warm."
  },
  {
    id: 413,
    word: "towel",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈtaʊəl/",
    meaning: "毛巾",
    example: "Dry with a towel."
  },
  {
    id: 414,
    word: "television",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈtelɪvɪʒən/",
    meaning: "电视",
    example: "Watch television at night."
  },
  {
    id: 415,
    word: "fridge",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "o", "u", "e"],
    phonetic: "/frɪdʒ/",
    meaning: "冰箱",
    example: "Put milk in the fridge."
  },
  {
    id: 416,
    word: "oven",
    missingIndexes: [1, 3],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈʌvən/",
    meaning: "烤箱",
    example: "Bake in the oven."
  },
  {
    id: 417,
    word: "microwave",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈmaɪkrəweɪv/",
    meaning: "微波炉",
    example: "Heat food in the microwave."
  },
  {
    id: 418,
    word: "dishwasher",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/ˈdɪʃwɔʃər/",
    meaning: "洗碗机",
    example: "The dishwasher cleans dishes."
  },
  {
    id: 419,
    word: "vacuum",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "a"],
    phonetic: "/ˈvækjum/",
    meaning: "吸尘器",
    example: "Vacuum the floor."
  },
  {
    id: 420,
    word: "washing",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈwɔʃɪŋ/",
    meaning: "洗衣机",
    example: "The washing machine is running."
  },
  {
    id: 421,
    word: "dryer",
    missingIndexes: [2, 3, 4],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈdraɪər/",
    meaning: "烘干机",
    example: "Put clothes in the dryer."
  },
  {
    id: 422,
    word: "toilet",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "u", "i", "e"],
    phonetic: "/ˈtɔɪlət/",
    meaning: "厕所",
    example: "The toilet is clean."
  },

  // 自然环境类 (20个词)
  {
    id: 423,
    word: "forest",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈfɔrɪst/",
    meaning: "森林",
    example: "The forest is green."
  },
  {
    id: 424,
    word: "desert",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈdezərt/",
    meaning: "沙漠",
    example: "The desert is hot and dry."
  },
  {
    id: 425,
    word: "ocean",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈoʊʃən/",
    meaning: "海洋",
    example: "The ocean is deep."
  },
  {
    id: 426,
    word: "island",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "o", "u", "a"],
    phonetic: "/ˈaɪlənd/",
    meaning: "岛屿",
    example: "The island is beautiful."
  },
  {
    id: 427,
    word: "valley",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈvæli/",
    meaning: "山谷",
    example: "The valley is peaceful."
  },
  {
    id: 428,
    word: "waterfall",
    missingIndexes: [2, 5, 8],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈwɔtərfɔl/",
    meaning: "瀑布",
    example: "The waterfall is loud."
  },
  {
    id: 429,
    word: "cave",
    missingIndexes: [1, 3],
    distractors: ["i", "o", "u", "e"],
    phonetic: "/keɪv/",
    meaning: "洞穴",
    example: "The cave is dark."
  },
  {
    id: 430,
    word: "volcano",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/vɑlˈkeɪnoʊ/",
    meaning: "火山",
    example: "The volcano erupted."
  },
  {
    id: 431,
    word: "earthquake",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈɜrθkweɪk/",
    meaning: "地震",
    example: "The earthquake was strong."
  },
  {
    id: 432,
    word: "rainbow",
    missingIndexes: [2, 4, 6],
    distractors: ["e", "i", "u", "o"],
    phonetic: "/ˈreɪnboʊ/",
    meaning: "彩虹",
    example: "The rainbow has seven colors."
  },
  {
    id: 433,
    word: "lightning",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈlaɪtnɪŋ/",
    meaning: "闪电",
    example: "Lightning is bright."
  },
  {
    id: 434,
    word: "thunder",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "i", "o", "e"],
    phonetic: "/ˈθʌndər/",
    meaning: "雷声",
    example: "Thunder follows lightning."
  },
  {
    id: 435,
    word: "storm",
    missingIndexes: [2, 3, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/stɔrm/",
    meaning: "暴风雨",
    example: "The storm is coming."
  },
  {
    id: 436,
    word: "flood",
    missingIndexes: [2, 3, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/flʌd/",
    meaning: "洪水",
    example: "The flood damaged houses."
  },
  {
    id: 437,
    word: "drought",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/draʊt/",
    meaning: "干旱",
    example: "The drought lasted months."
  },
  {
    id: 438,
    word: "season",
    missingIndexes: [1, 3, 5],
    distractors: ["i", "o", "u", "a"],
    phonetic: "/ˈsizən/",
    meaning: "季节",
    example: "Spring is my favorite season."
  },
  {
    id: 439,
    word: "spring",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/sprɪŋ/",
    meaning: "春天",
    example: "Flowers bloom in spring."
  },
  {
    id: 440,
    word: "autumn",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈɔtəm/",
    meaning: "秋天",
    example: "Leaves fall in autumn."
  },
  {
    id: 441,
    word: "climate",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "o", "u", "e"],
    phonetic: "/ˈklaɪmət/",
    meaning: "气候",
    example: "The climate is changing."
  },
  {
    id: 442,
    word: "environment",
    missingIndexes: [2, 5, 9],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ɪnˈvaɪrənmənt/",
    meaning: "环境",
    example: "Protect the environment."
  },

  // 科技类 (20个词)
  {
    id: 443,
    word: "computer",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "i", "e", "o"],
    phonetic: "/kəmˈpjutər/",
    meaning: "电脑",
    example: "I work on a computer."
  },
  {
    id: 444,
    word: "internet",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "o", "u", "e"],
    phonetic: "/ˈɪntərnet/",
    meaning: "互联网",
    example: "The internet is fast."
  },
  {
    id: 445,
    word: "website",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈwebsaɪt/",
    meaning: "网站",
    example: "Visit our website."
  },
  {
    id: 446,
    word: "email",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈimeɪl/",
    meaning: "电子邮件",
    example: "Send me an email."
  },
  {
    id: 447,
    word: "password",
    missingIndexes: [2, 5, 7],
    distractors: ["e", "i", "u", "o"],
    phonetic: "/ˈpæswɜrd/",
    meaning: "密码",
    example: "Remember your password."
  },
  {
    id: 448,
    word: "download",
    missingIndexes: [2, 5, 7],
    distractors: ["e", "i", "u", "a"],
    phonetic: "/ˈdaʊnloʊd/",
    meaning: "下载",
    example: "Download the app."
  },
  {
    id: 449,
    word: "upload",
    missingIndexes: [2, 4, 5],
    distractors: ["e", "i", "o", "a"],
    phonetic: "/ˈʌploʊd/",
    meaning: "上传",
    example: "Upload your photo."
  },
  {
    id: 450,
    word: "software",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈsɔftwer/",
    meaning: "软件",
    example: "Install the software."
  },
  {
    id: 451,
    word: "hardware",
    missingIndexes: [2, 5, 7],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈhɑrdwer/",
    meaning: "硬件",
    example: "Computer hardware is expensive."
  },
  {
    id: 452,
    word: "keyboard",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "i", "u", "o"],
    phonetic: "/ˈkibɔrd/",
    meaning: "键盘",
    example: "Type on the keyboard."
  },
  {
    id: 453,
    word: "mouse",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "i", "e", "u"],
    phonetic: "/maʊs/",
    meaning: "鼠标",
    example: "Click the mouse."
  },
  {
    id: 454,
    word: "screen",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/skrin/",
    meaning: "屏幕",
    example: "The screen is bright."
  },
  {
    id: 455,
    word: "printer",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "o", "u", "e"],
    phonetic: "/ˈprɪntər/",
    meaning: "打印机",
    example: "The printer needs paper."
  },
  {
    id: 456,
    word: "scanner",
    missingIndexes: [2, 4, 6],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈskænər/",
    meaning: "扫描仪",
    example: "Use the scanner."
  },
  {
    id: 457,
    word: "camera",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈkæmərə/",
    meaning: "相机",
    example: "Take a photo with the camera."
  },
  {
    id: 458,
    word: "battery",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈbætəri/",
    meaning: "电池",
    example: "Charge the battery."
  },
  {
    id: 459,
    word: "charger",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈtʃɑrdʒər/",
    meaning: "充电器",
    example: "Where's my charger?"
  },
  {
    id: 460,
    word: "robot",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈroʊbɑt/",
    meaning: "机器人",
    example: "The robot can walk."
  },
  {
    id: 461,
    word: "technology",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/tekˈnɑlədʒi/",
    meaning: "科技",
    example: "Technology changes fast."
  },
  {
    id: 462,
    word: "digital",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈdɪdʒɪtəl/",
    meaning: "数字的",
    example: "Digital photos are clear."
  },

  // 健康医疗类 (20个词)
  {
    id: 463,
    word: "hospital",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "e", "u", "i"],
    phonetic: "/ˈhɑspɪtl/",
    meaning: "医院",
    example: "Go to the hospital."
  },
  {
    id: 464,
    word: "medicine",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈmedɪsɪn/",
    meaning: "药",
    example: "Take your medicine."
  },
  {
    id: 465,
    word: "health",
    missingIndexes: [1, 3, 5],
    distractors: ["i", "o", "u", "a"],
    phonetic: "/helθ/",
    meaning: "健康",
    example: "Health is important."
  },
  {
    id: 466,
    word: "illness",
    missingIndexes: [1, 3, 5],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈɪlnəs/",
    meaning: "疾病",
    example: "The illness is serious."
  },
  {
    id: 467,
    word: "fever",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ˈfivər/",
    meaning: "发烧",
    example: "I have a fever."
  },
  {
    id: 468,
    word: "cough",
    missingIndexes: [1, 3, 4],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/kɔf/",
    meaning: "咳嗽",
    example: "Cover your cough."
  },
  {
    id: 469,
    word: "headache",
    missingIndexes: [2, 5, 7],
    distractors: ["i", "o", "u", "e"],
    phonetic: "/ˈhedeɪk/",
    meaning: "头痛",
    example: "I have a headache."
  },
  {
    id: 470,
    word: "stomach",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈstʌmək/",
    meaning: "胃",
    example: "My stomach hurts."
  },
  {
    id: 471,
    word: "toothache",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈtuθeɪk/",
    meaning: "牙痛",
    example: "I have a toothache."
  },
  {
    id: 472,
    word: "vitamin",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "e", "o", "u"],
    phonetic: "/ˈvaɪtəmɪn/",
    meaning: "维生素",
    example: "Take vitamins daily."
  },
  {
    id: 473,
    word: "exercise",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈeksərsaɪz/",
    meaning: "锻炼",
    example: "Exercise is healthy."
  },
  {
    id: 474,
    word: "bandage",
    missingIndexes: [2, 4, 6],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈbændɪdʒ/",
    meaning: "绷带",
    example: "Put a bandage on it."
  },
  {
    id: 475,
    word: "injection",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "e", "u", "o"],
    phonetic: "/ɪnˈdʒekʃən/",
    meaning: "注射",
    example: "The injection doesn't hurt."
  },
  {
    id: 476,
    word: "surgery",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "i", "o", "e"],
    phonetic: "/ˈsɜrdʒəri/",
    meaning: "手术",
    example: "The surgery was successful."
  },
  {
    id: 477,
    word: "emergency",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ɪˈmɜrdʒənsi/",
    meaning: "紧急情况",
    example: "Call emergency services."
  },
  {
    id: 478,
    word: "ambulance",
    missingIndexes: [2, 5, 8],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈæmbjələns/",
    meaning: "救护车",
    example: "The ambulance arrived quickly."
  },
  {
    id: 479,
    word: "prescription",
    missingIndexes: [3, 6, 9],
    distractors: ["a", "e", "u", "o"],
    phonetic: "/prɪˈskrɪpʃən/",
    meaning: "处方",
    example: "Get a prescription from the doctor."
  },
  {
    id: 480,
    word: "pharmacy",
    missingIndexes: [2, 5, 7],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈfɑrməsi/",
    meaning: "药房",
    example: "Buy medicine at the pharmacy."
  },
  {
    id: 481,
    word: "dentist",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈdentɪst/",
    meaning: "牙医",
    example: "Visit the dentist twice a year."
  },
  {
    id: 482,
    word: "appointment",
    missingIndexes: [2, 5, 9],
    distractors: ["a", "e", "u", "i"],
    phonetic: "/əˈpɔɪntmənt/",
    meaning: "预约",
    example: "Make an appointment."
  },

  // 购物类 (20个词)
  {
    id: 483,
    word: "shopping",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "e", "i", "u"],
    phonetic: "/ˈʃɑpɪŋ/",
    meaning: "购物",
    example: "I love shopping."
  },
  {
    id: 484,
    word: "market",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈmɑrkɪt/",
    meaning: "市场",
    example: "Buy fruit at the market."
  },
  {
    id: 485,
    word: "supermarket",
    missingIndexes: [2, 6, 9],
    distractors: ["a", "i", "o", "e"],
    phonetic: "/ˈsupərˌmɑrkɪt/",
    meaning: "超市",
    example: "The supermarket is big."
  },
  {
    id: 486,
    word: "customer",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "i", "e", "o"],
    phonetic: "/ˈkʌstəmər/",
    meaning: "顾客",
    example: "The customer is happy."
  },
  {
    id: 487,
    word: "cashier",
    missingIndexes: [2, 4, 6],
    distractors: ["e", "o", "u", "i"],
    phonetic: "/kæˈʃɪr/",
    meaning: "收银员",
    example: "Pay the cashier."
  },
  {
    id: 488,
    word: "receipt",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/rɪˈsit/",
    meaning: "收据",
    example: "Keep the receipt."
  },
  {
    id: 489,
    word: "discount",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/ˈdɪskaʊnt/",
    meaning: "折扣",
    example: "Get a discount."
  },
  {
    id: 490,
    word: "bargain",
    missingIndexes: [2, 4, 6],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈbɑrgɪn/",
    meaning: "便宜货",
    example: "It's a good bargain."
  },
  {
    id: 491,
    word: "expensive",
    missingIndexes: [2, 5, 8],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ɪkˈspensɪv/",
    meaning: "昂贵的",
    example: "It's too expensive."
  },
  {
    id: 492,
    word: "cheap",
    missingIndexes: [2, 3, 4],
    distractors: ["i", "o", "u", "e"],
    phonetic: "/tʃip/",
    meaning: "便宜的",
    example: "This is cheap."
  },
  {
    id: 493,
    word: "wallet",
    missingIndexes: [1, 3, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈwɑlɪt/",
    meaning: "钱包",
    example: "My wallet is empty."
  },
  {
    id: 494,
    word: "credit",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "o", "u", "i"],
    phonetic: "/ˈkredɪt/",
    meaning: "信用卡",
    example: "Pay by credit card."
  },
  {
    id: 495,
    word: "change",
    missingIndexes: [2, 4, 5],
    distractors: ["i", "o", "u", "e"],
    phonetic: "/tʃeɪndʒ/",
    meaning: "零钱",
    example: "Here's your change."
  },
  {
    id: 496,
    word: "queue",
    missingIndexes: [2, 3, 4],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/kju/",
    meaning: "队列",
    example: "Stand in the queue."
  },
  {
    id: 497,
    word: "basket",
    missingIndexes: [2, 4, 5],
    distractors: ["e", "i", "o", "u"],
    phonetic: "/ˈbæskɪt/",
    meaning: "篮子",
    example: "Take a basket."
  },
  {
    id: 498,
    word: "trolley",
    missingIndexes: [2, 4, 6],
    distractors: ["a", "i", "u", "e"],
    phonetic: "/ˈtrɑli/",
    meaning: "购物车",
    example: "Push the trolley."
  },
  {
    id: 499,
    word: "refund",
    missingIndexes: [2, 4, 5],
    distractors: ["a", "e", "i", "o"],
    phonetic: "/ˈrifʌnd/",
    meaning: "退款",
    example: "Ask for a refund."
  },
  {
    id: 500,
    word: "exchange",
    missingIndexes: [2, 5, 7],
    distractors: ["a", "i", "o", "u"],
    phonetic: "/ɪksˈtʃeɪndʒ/",
    meaning: "交换",
    example: "Exchange it for another size."
  }
];