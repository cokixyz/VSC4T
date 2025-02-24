document.addEventListener('DOMContentLoaded', function() {
  const toc = document.getElementById('floating-toc');
  const tocTrigger = document.getElementById('toc-trigger');
  const tocClose = document.getElementById('toc-close');
  
  if (!toc || !tocTrigger || !tocClose) {
    console.warn('目录组件未找到必要元素');
    return;
  }

  // 创建遮罩层
  const overlay = document.createElement('div');
  overlay.className = 'toc-overlay';
  document.body.appendChild(overlay);

  // 显示目录
  function showToc() {
    console.log('显示目录'); // 调试日志
    toc.classList.add('visible');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  // 隐藏目录
  function hideToc() {
    console.log('隐藏目录'); // 调试日志
    toc.classList.remove('visible');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  // 绑定事件
  tocTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    showToc();
  });

  tocClose.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    hideToc();
  });

  overlay.addEventListener('click', hideToc);

  // 监听滚动，更新活动目录项
  const updateActiveLink = () => {
    const headings = Array.from(document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]'));
    const scrollPos = window.scrollY;

    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      if (heading.offsetTop <= scrollPos + 100) {
        const links = toc.querySelectorAll('.toc-link');
        links.forEach(link => link.classList.remove('active'));
        const activeLink = toc.querySelector(`a[href="#${heading.id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
          // 滚动到可视区域
          activeLink.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
        break;
      }
    }
  };

  // 点击目录项
  toc.querySelectorAll('.toc-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        hideToc(); // 点击后自动隐藏目录
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();

  // 监听 ESC 键关闭目录
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toc.classList.contains('visible')) {
      hideToc();
    }
  });

  // 确保移动端适配
  function handleResize() {
    if (window.innerWidth <= 768) {
      hideToc();
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize(); // 初始化时执行一次

  // 初始化检查
  console.log('目录组件初始化完成', {
    toc: toc,
    trigger: tocTrigger,
    close: tocClose,
    overlay: overlay
  });

  // 桌面端目录逻辑
  const desktopWrapper = document.getElementById('desktop-toc-wrapper');
  const desktopToc = document.getElementById('desktop-toc');
  const desktopTrigger = document.getElementById('desktop-toc-trigger');
  
  if (!desktopWrapper || !desktopToc || !desktopTrigger) return;

  let isDesktopTocVisible = false;

  // 切换目录显示状态
  function toggleDesktopToc() {
    isDesktopTocVisible = !isDesktopTocVisible;
    desktopToc.classList.toggle('visible');
    
    // 更新图标
    const icon = desktopTrigger.querySelector('i');
    if (isDesktopTocVisible) {
      icon.classList.remove('fa-list-ul');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-list-ul');
    }
  }

  // 绑定点击事件
  desktopTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDesktopToc();
  });

  // 点击外部关闭
  document.addEventListener('click', (e) => {
    if (isDesktopTocVisible && 
        !desktopWrapper.contains(e.target)) {
      toggleDesktopToc();
    }
  });

  // ESC键关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isDesktopTocVisible) {
      toggleDesktopToc();
    }
  });

  // 响应式处理
  function handleResize() {
    if (window.innerWidth <= 768 && isDesktopTocVisible) {
      toggleDesktopToc();
    }
  }

  window.addEventListener('resize', handleResize);
});
