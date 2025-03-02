# VSCat Hexo 主题

一款优雅简约的 Hexo 主题，采用深色配色方案和代码风格设计美学。

[English Documentation](README.md)

![Black cat sitting at computer](cat.jpg)

*图片来源: [Black cat at work by Pixabay](https://pixabay.com/photos/cat-black-cat-work-computer-963931/)*

演示效果:

![Demo Screenshot](VSC4T.png)

## 特点

- 🌙 专为深色模式优化
- 📱 完全响应式布局
- 🚀 快速加载性能
- 🎨 简洁极简设计

## 安装

1. 进入你的 Hexo 站点的主题目录:
```bash
cd themes
```

2. 克隆此仓库:
```bash
git clone https://github.com/B143KC47/VSC4T-A-Hexo-Theme.git VSC4T
```

3. 在站点的配置文件中设置主题:
```yaml
theme: VSC4T
```

## 必要配置

### 开启相对链接

为了确保主题正确部署，请在 Hexo 站点的 `_config.yml` 文件中设置:

```yaml
relative_link: true
```

如果不开启相对链接，主题可能无法正常部署和运行。

### 创建必要的页面

本主题需要以下页面，请确保创建它们:

1. 创建 Categories 页面:
```bash
hexo new page categories
```
然后编辑 `source/categories/index.md` 添加 `type: "categories"`

2. 创建 Tags 页面:
```bash
hexo new page tags
```
然后编辑 `source/tags/index.md` 添加 `type: "tags"`

3. 创建 About 页面:
```bash
hexo new page about
```
并在 `source/about/index.md` 中添加您的个人信息

## 主题配置

修改主题目录下的 `_config.yml`:

```yaml
# 基本信息
name: BlackCat
description: A simple dark Hexo theme inspired by code.
author: YourName

# 菜单配置
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
  About: /about

# 社交链接
social:
  github: your_github_username
  twitter: your_twitter_username
  email: your_email@example.com
```

## 文章设置

为了让文章在主题中获得最佳展示效果，请按以下格式配置文章头部信息：

```yaml
---
title: 文章标题
date: YYYY-MM-DD HH:MM:SS
updated: YYYY-MM-DD HH:MM:SS    # 可选，更新日期
tags: 
  - 标签1
  - 标签2
categories: 
  - 分类1
  - 分类2/子分类    # 支持多级分类
thumbnail: /images/thumbnail.jpg    # 可选，文章缩略图
toc: true    # 显示文章目录
comments: true    # 开启文章评论
description: 文章描述    # 用于SEO和文章预览
sticky: 100    # 可选，文章置顶权重
---
```

示例文章:

```yaml
---
title: VSC4T - 一个优雅的暗色系 Hexo 主题
date: 2023-06-15 10:30:00
updated: 2023-06-16 15:20:00
tags: 
  - hexo
  - 主题
  - 暗色模式
  - 响应式
categories: 
  - 前端开发/主题制作
thumbnail: /images/theme-preview.jpg
toc: true
comments: true
description: VSC4T 是一款深受代码编辑器启发的 Hexo 暗色主题，提供极致的阅读体验。
sticky: 1
---

这里是文章内容...
```

## 主题样式定制

本主题提供了丰富的样式定制选项，可以在主题配置文件中修改：

```yaml
# 样式配置
style:
  theme_color: '#1e1e1e'      # 主题色
  link_color: '#569cd6'       # 链接色
  accent_color: '#608b4e'     # 强调色
  font_family: 'JetBrains Mono, Consolas, Monaco, monospace'
  background_color: '#252526' # 背景色
  text_color: '#d4d4d4'      # 文本色
```

## 响应式设计

主题针对不同设备进行了优化，可通过以下配置调整：

```yaml
# 移动端配置
mobile:
  enabled: true               # 启用移动端优化
  breakpoint: 768            # 响应式断点
  scale_fix: true            # 缩放修复
  nav_style: 'drawer'        # 导航栏样式
  font_size_adjust: 0.9      # 字体大小调整
  content_width: 100%        # 内容宽度
```

## 性能优化

为确保最佳性能，建议进行以下配置：

1. 开启图片延迟加载
2. 合理设置代码高亮
3. 使用 CDN 加速静态资源

```yaml
# 性能优化配置
lazyload: true              # 图片延迟加载
cdn: true                   # 启用 CDN
highlight:
  enable: true
  line_number: true
  auto_detect: true
  tab_replace: '  '
```

## 高级功能

### 数学公式支持

支持 MathJax 或 KaTeX 数学公式：

```yaml
# MathJax 配置
mathjax: true

# 或使用 KaTeX
katex: true
```

### 搜索功能

集成本地搜索功能：

```yaml
# 搜索配置
search:
  enable: true
  path: search.xml
  field: post
  format: html
```

## 常见问题

1. **图片显示问题**
   - 确保开启了相对链接
   - 检查图片路径是否正确

2. **部署问题**
   - 确认 `_config.yml` 配置正确
   - 检查必要页面是否创建

3. **性能问题**
   - 优化图片大小
   - 使用 CDN
   - 减少不必要的插件

## 许可证

本主题基于 MIT 许可证发布。

## 支持与反馈

如有任何问题或需要帮助，欢迎：

1. 在 GitHub 仓库提交 Issue
2. 通过 Pull Request 贡献代码
3. 查看我们的 [常见问题文档](docs/FAQ.md)

## 更新日志

请查看 [CHANGELOG.md](CHANGELOG.md) 了解详细的更新历史。
