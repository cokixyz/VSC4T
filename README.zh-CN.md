# 🐱 VSCat Hexo 主题

> 一个优雅简约的 Hexo 主题，采用深色配色方案和代码风格设计美学。

[![English Documentation](https://img.shields.io/badge/docs-English-blue)](README.md)

<div align="center">
  <img src="cat.jpg" alt="黑猫坐在电脑前" width="600">
  <p><em>图片来源：<a href="https://pixabay.com/photos/cat-black-cat-work-computer-963931/">Pixabay 的工作中的黑猫</a></em></p>
</div>

<div align="center">
  <img src="VSC4T.png" alt="演示截图" width="800">
</div>

<div align="center">
  <img src="VSC4T2.png" alt="Demo Screenshot" width="800">
</div>


## ✨ 特点

- 🌙 **深色模式优化** - 为舒适阅读精心设计
- 📱 **完全响应式布局** - 完美适配各种设备
- 🚀 **快速加载性能** - 优化的性能表现
- 🎨 **简洁极简设计** - 优雅的界面设计

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
  auto_detect: false
  line_number: true
  line_threshold: 0
  tab_replace: ""
  exclude_languages:
    - example
  wrap: true
  hljs: false
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

# 多语言设置
language: 
  - zh-CN
  - en
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
toc: true
description: VSC4T 是一个受代码编辑器启发的 Hexo 暗色主题。
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

## 📄 许可证

本主题基于 [MIT 许可证](LICENSE) 发布。

## 💬 支持

如有任何问题或需要帮助，请在 [GitHub 仓库](https://github.com/B143KC47/VSC4T/issues) 提交 issue。
