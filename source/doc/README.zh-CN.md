# 🐱 VSCat Hexo 主题

> 一个优雅简约的 Hexo 主题，采用深色配色方案和代码风格设计美学。

## ⭐ 支持主题


如果您觉得这个主题有用，请考虑在 GitHub 上给它一颗星！您的支持有助于提高项目的可见度，并鼓励开发。

<div align="center">
  <a href="https://github.com/B143KC47/VSC4T">
    <img src="https://img.shields.io/github/stars/B143KC47/VSC4T?style=social" alt="GitHub stars">
  </a>
  
  <p>每一颗星都很重要，非常感激！🙏</p>
</div>


<div align="center">

[![English Documentation](https://img.shields.io/badge/docs-English-blue)](../../README.md)
[![GitHub license](https://img.shields.io/github/license/B143KC47/VSC4T)](../../LICENSE)
[![Hexo](https://img.shields.io/badge/hexo-%3E%3D%205.0.0-blue)](https://hexo.io)
[![Node.js 版本](https://img.shields.io/badge/node-%3E%3D%2012.0-green.svg)](https://nodejs.org)
[![CodeFactor](https://img.shields.io/badge/codefactor-A-orange)](https://www.codefactor.io/)

</div>

<div align="center">
  <img src="../image/cat.jpg" alt="黑猫坐在电脑前" width="600">
  <p><em>图片来源：<a href="https://pixabay.com/photos/cat-black-cat-work-computer-963931/">Pixabay 的工作中的黑猫</a></em></p>
</div>

<div align="center">
  <img src="../image/VSC4T.png" alt="演示截图" width="800">
</div>

<div align="center">
  <img src="../image/VSC4T2.png" alt="演示截图" width="800">
</div>

## 📋 目录

- [✨ 特点](#-特点)
- [📊 Star History](#-star-history)
- [🚀 安装](#-安装)
- [📝 必要配置](#-必要配置)
- [⚙️ 主题配置](#️-主题配置)
- [🌍 语言配置](#-语言配置)
- [📝 文章设置](#-文章设置)
- [🎨 自定义样式](#-自定义样式)
- [📱 移动端优化](#-移动端优化)
- [🔍 搜索功能](#-搜索功能)
- [📄 许可证](#-许可证)
- [💬 支持](#-支持)

## ✨ 特点

- 🌙 **深色模式优化** - 为舒适阅读精心设计
- 📱 **完全响应式布局** - 完美适配各种设备
- 🚀 **快速加载性能** - 优化的性能表现
- 🎨 **简洁极简设计** - 优雅的界面设计
- 🔍 **VS Code 风格搜索** - 熟悉且强大的搜索功能
- 📊 **代码高亮** - VS Code 风格的美观语法高亮
- 🔧 **简易配置** - 简单直观的设置
- 📂 **资源管理器式侧边栏** - 直观的分类和标签导航
- 🌐 **多语言支持** - 内置12种语言支持

## 📊 Star History

<a href="https://star-history.com/#B143KC47/VSC4T">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=B143KC47/VSC4T&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=B143KC47/VSC4T&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=B143KC47/VSC4T&type=Date" />
  </picture>
</a>

## 🚀 安装

1. 进入 Hexo 站点的主题目录：
   ```bash
   cd themes
   ```

2. 克隆此仓库：
   ```bash
   git clone https://github.com/B143KC47/VSC4T.git
   ```

3. 在站点配置中设置主题：
   ```yaml
   theme: VSC4T
   ```

## 📝 必要配置

### 启用相对链接

为正确部署主题，请在 Hexo 站点的 `_config.yml` 中设置：

```yaml
relative_link: true
```

如不启用相对链接，主题可能无法正常工作。

### 创建必需页面

<details>
<summary>点击展开必需页面配置详情</summary>

1. 创建分类页面：
   ```bash
   hexo new page categories
   ```
   然后编辑 `source/categories/index.md` 并添加
   ```
   ---
   title: categories
   layout: categories
   ---
   ```

2. 创建标签页面：
   ```bash
   hexo new page tags
   ```
   然后编辑 `source/tags/index.md` 并添加
   ```
   ---
   title: tags
   layout: tags
   ---
   ```

3. 创建关于页面：
   ```bash
   hexo new page about
   ```
   并在 `source/about/index.md` 中添加个人信息
   ```
   ---
   title: about
   date: 2025-02-22 22:14:44
   ---

   一个非常优秀的简约主题
   ```

4. 创建搜索页面：
   ```bash
   hexo new page search
   ```
   然后编辑 `source/search/index.md` 并添加：
   ```
   ---
   title: search
   layout: search
   ---
   ```
</details>

## ⚙️ 主题配置

修改主题目录下的 `_config.yml`：

```yaml
# 基本信息
name: BlackCat
description: A simple dark Hexo theme inspired by code.
author: YourName

# 界面设置
url: https://B143KC47.github.io/xxxxx # 修改为你实际的网站 URL
root: /xxxxxx/  # 如果你的网站部署在子目录中，需要设置 root 属性  若没有则为/

# 代码高亮配置
syntax_highlighter: highlight.js
highlight:
  auto_detect: true
  line_number: true
  line_threshold: 0
  tab_replace: ""
  exclude_languages:
    - example
  wrap: true
  hljs: true
```

## 🌍 语言配置

<details>
<summary>点击展开支持的语言</summary>

- 🇨🇳 简体中文 (zh-CN)
- 🇺🇸 英语 (en)
- 🇯🇵 日语 (ja)
- 🇰🇷 韩语 (ko)
- 🇫🇷 法语 (fr)
- 🇩🇪 德语 (de)
- 🇪🇸 西班牙语 (es)
- 🇮🇹 意大利语 (it)
- 🇷🇺 俄语 (ru)
- 🇵🇹 葡萄牙语 (pt)
- 🇦🇪 阿拉伯语 (ar)
- 🇻🇳 越南语 (vi)

</details>

### 语言设置示例

在站点的 `_config.yml` 中设置 `language` 参数：

```yaml
# 单语言设置
language: zh-CN

```

## 📝 文章设置

### 创建新文章

```bash
hexo new post "文章标题"
```

<details>
<summary>点击查看示例文章格式</summary>

```markdown
---
title: VSC4T - 一个优雅的暗色系 Hexo 主题
date: 2023-06-15 10:30:00
tags: [hexo, 主题, 暗色模式, 响应式]
categories: [网页设计, 主题]
---

这里是文章内容...
```
</details>

## 🎨 自定义样式

主题支持自定义 CSS 和 JS：

```yaml
custom_css:
  - /css/mobile.css
custom_js:
  - /js/code-copy.js
  - /js/mobile-menu.js
```

## 📱 移动端优化

主题已针对移动设备优化：

- 响应式设计
- 触摸友好的导航
- 优化的阅读体验

## 🔍 搜索功能

主题包含强大的搜索功能：

- 全文搜索支持
- 标题、内容、标签、分类过滤
- 键盘导航（↑↓方向键和回车）
- 搜索结果高亮
- 上下文预览

## 👨‍💻 贡献者

感谢所有帮助改进这个主题的贡献者！

<div align="center">
  <a href="https://github.com/B143KC47/VSC4T/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=B143KC47/VSC4T" alt="贡献者">
  </a>
    <p>注意：如果贡献者没有正确显示，他们可能需要将其贡献正确链接到他们的GitHub账户。请确保提交与GitHub电子邮件关联。</p>
</div>

### 如何贡献

我们欢迎所有对VSC4T主题的改进贡献！以下是您可以提供帮助的方式：

1. Fork 这个仓库
2. 创建您的特性分支：`git checkout -b feature/amazing-feature`
3. 提交您的更改：`git commit -m '添加一些很棒的特性'`
4. 推送到分支：`git push origin feature/amazing-feature`
5. 打开一个 Pull Request

更多详情，请阅读我们的[贡献指南](CONTRIBUTING.zh-CN.md)。

## 📄 许可证

本主题基于 [MIT 许可证](../../LICENSE) 发布。

## 💬 支持

如有任何问题或需要帮助，请在 [GitHub 仓库](https://github.com/B143KC47/VSC4T/issues) 提交 issue。
