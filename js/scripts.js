document.addEventListener('DOMContentLoaded', () => {
  // 获取所有iframe容器
  const containers = document.querySelectorAll('.iframe-container');
  
  containers.forEach(container => {
    const iframe = container.querySelector('iframe');
    const overlay = container.querySelector('.iframe-overlay');
    
    // 点击放大/缩小
    iframe.addEventListener('click', (e) => {
      e.stopPropagation();
      iframe.classList.toggle('fullscreen');
      overlay.classList.toggle('active');
      
      // 全屏时禁止页面滚动
      document.body.style.overflow = iframe.classList.contains('fullscreen') ? 'hidden' : '';
    });
    
    // 点击遮罩层关闭
    overlay.addEventListener('click', () => {
      iframe.classList.remove('fullscreen');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // ESC键关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.elegant-iframe').forEach(iframe => {
        iframe.classList.remove('fullscreen');
        iframe.parentElement.querySelector('.iframe-overlay').classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  });
});