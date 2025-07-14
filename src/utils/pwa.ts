// PWA服务工作者注册和管理
export class PWAManager {
  private static instance: PWAManager;
  
  static getInstance(): PWAManager {
    if (!PWAManager.instance) {
      PWAManager.instance = new PWAManager();
    }
    return PWAManager.instance;
  }
  
  // 注册Service Worker
  async registerServiceWorker(): Promise<boolean> {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered successfully:', registration);
        
        // 监听更新
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // 新版本可用，提示用户刷新
                this.showUpdatePrompt();
              }
            });
          }
        });
        
        return true;
      } catch (error) {
        console.error('Service Worker registration failed:', error);
        return false;
      }
    }
    return false;
  }
  
  // 检查是否可以安装PWA
  isInstallable(): boolean {
    return 'beforeinstallprompt' in window;
  }
  
  // 显示安装提示
  showInstallPrompt(): void {
    // 这里可以显示自定义的安装提示UI
    console.log('PWA can be installed');
  }
  
  // 显示更新提示
  private showUpdatePrompt(): void {
    if (confirm('应用有新版本可用，是否现在更新？')) {
      window.location.reload();
    }
  }
  
  // 获取缓存使用情况
  async getCacheUsage(): Promise<{used: number, quota: number}> {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      try {
        const estimate = await navigator.storage.estimate();
        return {
          used: estimate.usage || 0,
          quota: estimate.quota || 0
        };
      } catch (error) {
        console.error('Failed to get cache usage:', error);
      }
    }
    return {used: 0, quota: 0};
  }
  
  // 清理缓存
  async clearCache(): Promise<boolean> {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
        console.log('All caches cleared');
        return true;
      } catch (error) {
        console.error('Failed to clear cache:', error);
        return false;
      }
    }
    return false;
  }
  
  // 检查网络状态
  isOnline(): boolean {
    return navigator.onLine;
  }
  
  // 监听网络状态变化
  onNetworkChange(callback: (isOnline: boolean) => void): () => void {
    const handleOnline = () => callback(true);
    const handleOffline = () => callback(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // 返回清理函数
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }
}

export const pwaManager = PWAManager.getInstance();