# VSCat Hexo 主题

一个优雅简约的 Hexo 主题，采用深色配色方案和代码风格设计美学。

[English Documentation](README.md)

![黑猫坐在电脑前](cat.jpg)

*图片来源：[Pixabay 的工作中的黑猫](https://pixabay.com/photos/cat-black-cat-work-computer-963931/)*

演示：

![演示截图](VSC4T.png)

## 特点

- 🌙 深色模式优化
- 📱 完全响应式布局
- 🚀 快速加载性能
- 🎨 简洁极简设计

## 安装

1. 进入 Hexo 站点的主题目录：
```bash
cd themes
```

2. 克隆此仓库：
```bash
git clone https://github.com/B143KC47/VSC4T-A-Hexo-Theme.git VSC4T
```

3. 在站点配置中设置主题：
```yaml
theme: VSC4T
```

## 必要配置

### 启用相对链接

为正确部署主题，请在 Hexo 站点的 `_config.yml` 中设置：

```yaml
relative_link: true
```

如不启用相对链接，主题可能无法正常工作。

### 创建必需页面

本主题需要以下页面，请确保创建：

1. 创建分类页面：
```bash
hexo new page categories
```
然后编辑 `source/categories/index.md` 并添加 `type: "categories"`

2. 创建标签页面：
```bash
hexo new page tags
```
然后编辑 `source/tags/index.md` 并添加 `type: "tags"`

3. 创建关于页面：
```bash
hexo new page about
```
并在 `source/about/index.md` 中添加个人信息

## 主题配置

修改主题目录下的 `_config.yml`：

```yaml
# 基本信息
name: BlackCat
description: A simple dark Hexo theme inspired by code.
author: YourName

# 菜单配置
menu:
  首页: /
  归档: /archives
  分类: /categories
  标签: /tags
  关于: /about

# 社交链接
social:
  github: your_github_username
  twitter: your_twitter_username
  email: your_email@example.com
```

## 语言配置

VSC4T 主题支持多语言。要更改语言，请修改站点的 `_config.yml`：

```yaml
language: zh-CN  # 默认语言
```

### 支持的语言

- 英语 (en)
- 简体中文 (zh-CN)
- 日语 (ja)
- 韩语 (ko)
- 法语 (fr)
- 德语 (de)
- 西班牙语 (es)
- 意大利语 (it)
- 俄语 (ru)
- 葡萄牙语 (pt)
- 阿拉伯语 (ar)
- 越南语 (vi)

### 文章设置

### 创建新文章

1. 使用 Hexo 命令创建新文章：
```bash
hexo new post "文章标题"
```

2. 这将在 `source/_posts/文章标题.md` 创建一个新的 markdown 文件


示例文章：

```md
---
title: VSC4T - 一个优雅的暗色系 Hexo 主题
date: 2023-06-15 10:30:00
tags: [hexo, 主题, 暗色模式, 响应式]
categories: [网页设计, 主题]
toc: true
description: VSC4T 是一个受代码编辑器启发的 Hexo 暗色主题。
---

这里是文章内容...
```

## 自定义样式

主题支持自定义 CSS 和 JS。在主题配置中：

```yaml
custom_css:
  - /css/mobile.css
custom_js:
  - /js/code-copy.js
  - /js/mobile-menu.js
```

## 移动端优化

主题已针对移动设备优化。你可以在主题配置中调整移动端设置：

```yaml
mobile:
  enabled: true
  breakpoint: 768
  nav_style: 'drawer'
```

## 代码高亮

本主题默认使用内置代码高亮。你可以通过以下设置调整：

```yaml
highlight:
  enable: true
  line_number: true
  auto_detect: true
```

## 许可证

本主题基于 MIT 许可证发布。

## 支持

如有任何问题或需要帮助，请在 GitHub 仓库提交 issue。
