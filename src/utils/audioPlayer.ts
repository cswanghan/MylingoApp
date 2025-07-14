import { Howl } from 'howler';

class AudioPlayer {
  private audioCache: Map<string, Howl> = new Map();
  
  // 根据单词创建音频URL（使用Web Speech API作为fallback）
  private getAudioUrl(word: string): string {
    // 这里可以使用真实的音频文件URL
    // 暂时使用Web Speech API的方式
    return `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(word)}`;
  }
  
  // 播放单词发音
  async playWord(word: string): Promise<void> {
    return new Promise((resolve) => {
      try {
        // 检查缓存
        if (this.audioCache.has(word)) {
          const sound = this.audioCache.get(word)!;
          sound.play();
          sound.once('end', () => resolve());
          return;
        }
        
        // 创建新的音频实例
        const sound = new Howl({
          src: [this.getAudioUrl(word)],
          format: ['mp3'],
          volume: 0.7,
          onload: () => {
            this.audioCache.set(word, sound);
            sound.play();
          },
          onend: () => resolve(),
          onloaderror: (_id, error) => {
            console.warn('Audio load error:', error);
            // 使用Web Speech API作为fallback
            this.playWithSpeechAPI(word);
            resolve();
          },
          onplayerror: (_id, error) => {
            console.warn('Audio play error:', error);
            // 使用Web Speech API作为fallback
            this.playWithSpeechAPI(word);
            resolve();
          }
        });
      } catch (error) {
        console.warn('Audio playback failed:', error);
        // 使用Web Speech API作为fallback
        this.playWithSpeechAPI(word);
        resolve();
      }
    });
  }
  
  // 使用Web Speech API作为fallback
  private playWithSpeechAPI(word: string): void {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.volume = 0.7;
      
      // 尝试使用英语语音
      const voices = speechSynthesis.getVoices();
      const englishVoice = voices.find(voice => 
        voice.lang.startsWith('en') && voice.default
      ) || voices.find(voice => voice.lang.startsWith('en'));
      
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      
      speechSynthesis.speak(utterance);
    }
  }
  
  // 预加载音频
  preloadWord(word: string): void {
    if (!this.audioCache.has(word)) {
      try {
        const sound = new Howl({
          src: [this.getAudioUrl(word)],
          format: ['mp3'],
          volume: 0.7,
          preload: true,
          onload: () => {
            this.audioCache.set(word, sound);
          },
          onloaderror: () => {
            // 预加载失败时不做处理，播放时会使用fallback
          }
        });
      } catch (error) {
        // 预加载失败时不做处理
      }
    }
  }
  
  // 清理缓存
  clearCache(): void {
    this.audioCache.forEach(sound => {
      sound.unload();
    });
    this.audioCache.clear();
  }
}

export const audioPlayer = new AudioPlayer();