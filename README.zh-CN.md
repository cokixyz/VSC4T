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

## 自定义样式

本主题支持自定义 CSS 和 JS，在主题配置中:

```yaml
custom_css:
  - /css/mobile.css
custom_js:
  - /js/code-copy.js
  - /js/mobile-menu.js
```

## 移动端优化

主题已针对移动设备进行优化，可以在主题配置中调整移动端设置:

```yaml
mobile:
  enabled: true
  breakpoint: 768
  nav_style: 'drawer'
```

## 代码高亮

本主题默认使用内置代码高亮，可通过以下设置调整:

```yaml
highlight:
  enable: true
  line_number: true
  auto_detect: true
```

## 许可证

本主题基于 MIT 许可证发布。

## 支持

如有任何问题或需要帮助，请在 GitHub 仓库中提出 issue。
