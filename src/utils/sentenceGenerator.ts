// 例句模板库
const sentenceTemplates = {
  // 名词模板
  noun: [
    "The {word} is very important.",
    "I saw a beautiful {word} today.",
    "This {word} belongs to me.",
    "The {word} was on the table.",
    "She bought a new {word}.",
    "The {word} is red and shiny.",
    "We need more {word} for the project.",
    "The {word} fell from the tree.",
    "He gave me his {word}.",
    "The {word} is in the kitchen."
  ],
  
  // 动词模板
  verb: [
    "I {word} every morning.",
    "She likes to {word}.",
    "We should {word} together.",
    "They {word} very well.",
    "He can {word} quickly.",
    "Please {word} carefully.",
    "Don't {word} too fast.",
    "I want to {word} with you.",
    "Let's {word} right now.",
    "You must {word} before leaving."
  ],
  
  // 形容词模板
  adjective: [
    "The weather is very {word}.",
    "She looks {word} today.",
    "This food tastes {word}.",
    "The movie was {word}.",
    "He seems {word} about it.",
    "The room is {word} and clean.",
    "I feel {word} after exercise.",
    "The story is {word}.",
    "Her dress is {word}.",
    "The music sounds {word}."
  ],
  
  // 通用模板
  general: [
    "The {word} is important in our daily life.",
    "I learned about {word} in school.",
    "She talked about {word} yesterday.",
    "We discussed {word} in the meeting.",
    "The teacher explained {word} clearly.",
    "Everyone knows about {word}.",
    "He is interested in {word}.",
    "The book mentions {word}.",
    "They studied {word} together.",
    "I need to understand {word} better."
  ]
};

// 常见单词分类
const wordCategories = {
  // 常见名词
  nouns: [
    'apple', 'book', 'car', 'dog', 'house', 'phone', 'water', 'school', 'friend', 'family',
    'table', 'chair', 'window', 'door', 'computer', 'music', 'food', 'tree', 'flower', 'sun',
    'moon', 'star', 'ocean', 'mountain', 'river', 'city', 'country', 'world', 'time', 'money',
    'job', 'work', 'study', 'game', 'sport', 'movie', 'story', 'picture', 'color', 'number'
  ],
  
  // 常见动词
  verbs: [
    'eat', 'drink', 'sleep', 'walk', 'run', 'jump', 'swim', 'read', 'write', 'speak',
    'listen', 'watch', 'look', 'see', 'hear', 'think', 'know', 'learn', 'teach', 'play',
    'work', 'study', 'help', 'love', 'like', 'want', 'need', 'give', 'take', 'make',
    'do', 'go', 'come', 'stay', 'leave', 'open', 'close', 'start', 'stop', 'finish'
  ],
  
  // 常见形容词
  adjectives: [
    'good', 'bad', 'big', 'small', 'long', 'short', 'tall', 'low', 'high', 'fast',
    'slow', 'hot', 'cold', 'warm', 'cool', 'old', 'new', 'young', 'happy', 'sad',
    'beautiful', 'ugly', 'clean', 'dirty', 'easy', 'hard', 'difficult', 'simple', 'important', 'interesting',
    'boring', 'funny', 'serious', 'quiet', 'loud', 'bright', 'dark', 'light', 'heavy', 'empty'
  ]
};

// 根据单词类型生成例句
export const generateSentence = (word: string): string => {
  const lowerWord = word.toLowerCase();
  
  // 判断单词类型
  let wordType: keyof typeof sentenceTemplates = 'general';
  
  if (wordCategories.nouns.includes(lowerWord)) {
    wordType = 'noun';
  } else if (wordCategories.verbs.includes(lowerWord)) {
    wordType = 'verb';
  } else if (wordCategories.adjectives.includes(lowerWord)) {
    wordType = 'adjective';
  }
  
  // 获取对应类型的模板
  const templates = sentenceTemplates[wordType];
  
  // 随机选择一个模板
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  
  // 替换模板中的占位符
  return randomTemplate.replace('{word}', word);
};

// 生成多个例句选项
export const generateSentenceOptions = (word: string, count: number = 3): string[] => {
  const sentences: string[] = [];
  const usedTemplates = new Set<string>();
  
  // 尝试从不同类型的模板中生成例句
  const allTemplates = [
    ...sentenceTemplates.noun,
    ...sentenceTemplates.verb,
    ...sentenceTemplates.adjective,
    ...sentenceTemplates.general
  ];
  
  while (sentences.length < count && sentences.length < allTemplates.length) {
    const template = allTemplates[Math.floor(Math.random() * allTemplates.length)];
    
    if (!usedTemplates.has(template)) {
      usedTemplates.add(template);
      sentences.push(template.replace('{word}', word));
    }
  }
  
  return sentences;
};

// 根据释义生成更贴切的例句
export const generateSentenceByMeaning = (word: string, meaning: string): string => {
  const lowerMeaning = meaning.toLowerCase();
  
  // 根据中文释义判断词性和语境
  if (lowerMeaning.includes('动物') || lowerMeaning.includes('植物') || lowerMeaning.includes('食物') || 
      lowerMeaning.includes('物品') || lowerMeaning.includes('地方') || lowerMeaning.includes('人')) {
    const templates = sentenceTemplates.noun;
    return templates[Math.floor(Math.random() * templates.length)].replace('{word}', word);
  }
  
  if (lowerMeaning.includes('的') && (lowerMeaning.includes('很') || lowerMeaning.includes('非常'))) {
    const templates = sentenceTemplates.adjective;
    return templates[Math.floor(Math.random() * templates.length)].replace('{word}', word);
  }
  
  // 默认使用通用模板
  return generateSentence(word);
};

// 预设的高质量例句库
export const getPresetSentence = (word: string): string | null => {
  const presetSentences: Record<string, string> = {
    // 水果类
    'apple': 'An apple a day keeps the doctor away.',
    'banana': 'The monkey likes eating a banana.',
    'orange': 'I like to drink orange juice.',
    'grape': 'Grapes can be green or purple.',
    
    // 颜色类
    'red': 'The rose is red and beautiful.',
    'blue': 'The sky is blue and clear.',
    'green': 'The grass is green in spring.',
    'yellow': 'The sun is yellow and bright.',
    'purple': 'She wore a purple dress.',
    'black': 'The cat is black and white.',
    'white': 'Snow is white and cold.',
    
    // 动物类
    'cat': 'The cat is sleeping on the sofa.',
    'dog': 'My dog likes to play in the park.',
    'bird': 'The bird is singing in the tree.',
    'fish': 'Fish swim in the water.',
    'elephant': 'The elephant is very big.',
    'tiger': 'The tiger is a dangerous animal.',
    
    // 学习用品
    'book': 'I read a book every night.',
    'pen': 'Please write with a pen.',
    'pencil': 'The pencil is on the desk.',
    'school': 'Children go to school to learn.',
    'teacher': 'The teacher is very kind.',
    'student': 'I am a student at university.',
    
    // 家庭成员
    'mother': 'My mother cooks delicious food.',
    'father': 'My father works very hard.',
    'sister': 'My sister is younger than me.',
    'brother': 'My brother plays basketball.',
    'family': 'I love my family very much.',
    
    // 天气
    'sunny': 'It is sunny today.',
    'rainy': 'It is rainy outside.',
    'cloudy': 'The weather is cloudy.',
    'windy': 'It is windy in autumn.',
    'hot': 'Summer is very hot.',
    'cold': 'Winter is very cold.',
    
    // 食物
    'bread': 'I eat bread for breakfast.',
    'milk': 'Milk is good for health.',
    'water': 'We need water to live.',
    'rice': 'Rice is a staple food.',
    'meat': 'I enjoy eating meat.',
    'vegetable': 'Vegetables are healthy food.',
    
    // 交通工具
    'car': 'My father drives a car to work.',
    'bus': 'I take the bus to school.',
    'train': 'The train is fast and comfortable.',
    'bike': 'I ride a bike to exercise.',
    'plane': 'The plane flies in the sky.',
    
    // 时间
    'morning': 'I get up early in the morning.',
    'afternoon': 'We have lunch in the afternoon.',
    'evening': 'I watch TV in the evening.',
    'night': 'I go to bed at night.',
    'today': 'Today is a beautiful day.',
    'tomorrow': 'Tomorrow is Monday.',
    'yesterday': 'Yesterday was Sunday.',
    
    // 常用动词
    'go': 'I go to work every day.',
    'come': 'Please come to my party.',
    'see': 'I can see the mountain.',
    'hear': 'I hear beautiful music.',
    'speak': 'She can speak English well.',
    'read': 'I enjoy reading books.',
    'write': 'Please write your name here.',
    'play': 'Children love to play games.',
    'work': 'He works in a big company.',
    'study': 'I study English every day.',
    'eat': 'We eat dinner at 7 PM.',
    'drink': 'I drink water when thirsty.',
    'sleep': 'I sleep 8 hours every night.',
    'walk': 'I walk to school every morning.',
    'run': 'I run in the park for exercise.',
    'jump': 'The cat can jump very high.',
    'swim': 'I swim in the pool in summer.',
    'sing': 'She sings beautifully.',
    'dance': 'We dance at the party.',
    'cook': 'My mother cooks dinner.',
    'clean': 'Keep your room clean.',
    'help': 'I help my friends with homework.',
    'love': 'I love my family.',
    'want': 'I want to travel around the world.',
    'need': 'We need food and water.',
    'give': 'Please give me some water.',
    'take': 'Take this book with you.',
    'make': 'I make a cake for my birthday.',
    'buy': 'I buy vegetables at the market.',
    'sell': 'They sell fresh fruit.',
    'open': 'Please open the window.',
    'close': 'Don\'t forget to close the door.',
    'start': 'Let\'s start our lesson.',
    'stop': 'The car stops at the red light.',
    'finish': 'I finish my homework at 9 PM.',
    'learn': 'I learn something new every day.',
    'teach': 'The teacher teaches us math.',
    'know': 'I know the answer.',
    'understand': 'I understand the lesson.',
    'remember': 'I remember your birthday.',
    'forget': 'Don\'t forget to call me.',
    'think': 'I think it will rain tomorrow.',
    'believe': 'I believe in you.',
    'feel': 'I feel happy today.',
    'look': 'Look at the beautiful sunset.',
    'watch': 'We watch movies on weekends.',
    'listen': 'Please listen to me carefully.',
    'talk': 'We talk about the weather.',
    'tell': 'Tell me a story.',
    'ask': 'May I ask you a question?',
    'answer': 'Please answer my question.',
    'call': 'I call my mother every week.',
    'visit': 'We visit our grandparents.',
    'meet': 'Nice to meet you.',
    'welcome': 'Welcome to our school.',
    'thank': 'Thank you for your help.',
    'sorry': 'I am sorry for being late.',
    'excuse': 'Excuse me, where is the library?',
    'please': 'Please help me with this.',
    'yes': 'Yes, I agree with you.',
    'no': 'No, I don\'t think so.',
    'maybe': 'Maybe we can go tomorrow.',
    'sure': 'Sure, I will help you.',
    'ok': 'OK, let\'s start now.',
    'good': 'This is a good book.',
    'bad': 'The weather is bad today.',
    'great': 'You did a great job.',
    'nice': 'What a nice day!',
    'beautiful': 'The flower is beautiful.',
    'pretty': 'She is a pretty girl.',
    'handsome': 'He is a handsome boy.',
    'ugly': 'The monster is ugly.',
    'big': 'The elephant is big.',
    'small': 'The mouse is small.',
    'large': 'We live in a large house.',
    'little': 'I have a little sister.',
    'long': 'The river is very long.',
    'short': 'My hair is short.',
    'tall': 'My brother is tall.',
    'high': 'The mountain is high.',
    'low': 'The table is low.',
    'wide': 'The road is wide.',
    'narrow': 'The path is narrow.',
    'thick': 'The book is thick.',
    'thin': 'The paper is thin.',
    'fat': 'The pig is fat.',
    'heavy': 'The box is heavy.',
    'light': 'The bag is light.',
    'fast': 'The car is fast.',
    'slow': 'The turtle is slow.',
    'quick': 'Be quick, we are late.',
    'early': 'I get up early.',
    'late': 'Don\'t be late for school.',
    'new': 'I have a new phone.',
    'old': 'This is an old house.',
    'young': 'She is very young.',
    'easy': 'This question is easy.',
    'hard': 'The math problem is hard.',
    'difficult': 'Learning Chinese is difficult.',
    'simple': 'The answer is simple.',
    'important': 'Health is important.',
    'interesting': 'The movie is interesting.',
    'boring': 'The lecture is boring.',
    'funny': 'The joke is funny.',
    'serious': 'This is a serious problem.',
    'happy': 'I am happy to see you.',
    'sad': 'She feels sad today.',
    'angry': 'He is angry with me.',
    'excited': 'I am excited about the trip.',
    'tired': 'I am tired after work.',
    'hungry': 'I am hungry now.',
    'thirsty': 'I am thirsty, need some water.',
    'full': 'I am full after dinner.',
    'empty': 'The bottle is empty.',
    'busy': 'I am busy with work.',
    'free': 'I am free this weekend.',
    'rich': 'He is a rich man.',
    'poor': 'They help poor people.',
    'dirty': 'The clothes are dirty.',
    'bright': 'The sun is bright.',
    'dark': 'It is dark outside.',
    'quiet': 'The library is quiet.',
    'loud': 'The music is too loud.',
    'soft': 'The pillow is soft.',
    'comfortable': 'This chair is comfortable.',
    'dangerous': 'Don\'t go to dangerous places.',
    'safe': 'This place is safe.',
    'healthy': 'Eat healthy food.',
    'sick': 'I am sick today.',
    'strong': 'He is strong and healthy.',
    'weak': 'I feel weak today.',
    'right': 'You are right.',
    'wrong': 'The answer is wrong.',
    'true': 'The story is true.',
    'false': 'The news is false.',
    'real': 'This is a real diamond.',
    'fake': 'This is a fake watch.',
    'same': 'We have the same hobby.',
    'different': 'We have different opinions.',
    'special': 'Today is a special day.',
    'normal': 'This is normal behavior.',
    'strange': 'What a strange story!',
    'wonderful': 'We had a wonderful time.',
    'terrible': 'The weather is terrible.',
    'perfect': 'Your English is perfect.',
    'excellent': 'You did an excellent job.',
    'amazing': 'The view is amazing.',
    'fantastic': 'The party was fantastic.',
    'awful': 'The food tastes awful.',
    'delicious': 'The cake is delicious.',
    'sweet': 'The candy is sweet.',
    'sour': 'The lemon is sour.',
    'bitter': 'The medicine is bitter.',
    'salty': 'The soup is too salty.',
    'spicy': 'I enjoy spicy food.',
    'fresh': 'The air is fresh.',
    'warm': 'The weather is warm.',
    'cool': 'The evening is cool.',
    'wet': 'My clothes are wet.',
    'dry': 'The desert is dry.',
    'smooth': 'The surface is smooth.',
    'rough': 'The road is rough.',
    'sharp': 'The knife is sharp.',
    'round': 'The ball is round.',
    'square': 'The table is square.',
    'straight': 'Draw a straight line.',
    'curved': 'The road is curved.',
    'flat': 'The ground is flat.',
    'steep': 'The hill is steep.',
    'deep': 'The river is deep.',
    'shallow': 'The water is shallow.'
  };
  
  return presetSentences[word.toLowerCase()] || null;
};