document.addEventListener('DOMContentLoaded', () => {
  // 选择所有代码块
  document.querySelectorAll('pre code').forEach(codeBlock => {
    const pre = codeBlock.parentElement;
    
    // 创建复制按钮
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    
    // 添加点击事件
    copyButton.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      try {
        // 保留格式化的代码
        const formattedCode = codeBlock.innerText
          .replace(/\u00A0/g, ' ') // 替换特殊空格
          .replace(/\t/g, '    ')  // 替换tab为4个空格
          .replace(/\n$/, '');     // 移除最后的空行
        
        await navigator.clipboard.writeText(formattedCode);
        
        // 复制成功反馈
        copyButton.innerHTML = '<i class="fas fa-check"></i>';
        copyButton.classList.add('copied');
        
        setTimeout(() => {
          copyButton.innerHTML = '<i class="fas fa-copy"></i>';
          copyButton.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('复制失败:', err);
        copyButton.innerHTML = '<i class="fas fa-times"></i>';
        setTimeout(() => {
          copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        }, 2000);
      }
    });
    
    // 确保按钮被添加到正确位置
    if (!pre.querySelector('.copy-button')) {
      pre.appendChild(copyButton);
    }
  });
});
