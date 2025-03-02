# VSCat Theme for Hexo

An elegant and minimalist theme for Hexo, designed with a dark color scheme and code-inspired aesthetics.

[中文文档](README.zh-CN.md)

![Black cat sitting at computer](cat.jpg)

*Image credit: [Black cat at work by Pixabay](https://pixabay.com/photos/cat-black-cat-work-computer-963931/)*

Demo:

![Demo Screenshot](VSC4T.png)

## Features

- 🌙 Dark mode optimized
- 📱 Fully responsive layout
- 🚀 Fast loading performance
- 🎨 Clean and minimalist design

## Installation

1. Navigate to your Hexo site's themes directory:
```bash
cd themes
```

2. Clone this repository:
```bash
git clone https://github.com/B143KC47/VSC4T-A-Hexo-Theme.git VSC4T
```

3. Set the theme in your site's configuration:
```yaml
theme: VSC4T
```

## Required Configuration

### Enable Relative Links

For proper theme deployment, set the following in your Hexo site's `_config.yml`:

```yaml
relative_link: true
```

Without enabling relative links, the theme may not deploy and function correctly.

### Create Required Pages

This theme requires the following pages. Make sure to create them:

1. Create Categories page:
```bash
hexo new page categories
```
Then edit `source/categories/index.md` and add `type: "categories"`

2. Create Tags page:
```bash
hexo new page tags
```
Then edit `source/tags/index.md` and add `type: "tags"`

3. Create About page:
```bash
hexo new page about
```
And add your personal information to `source/about/index.md`

## Theme Configuration

Modify the `_config.yml` in the theme directory:

```yaml
# Basic Information
name: BlackCat
description: A simple dark Hexo theme inspired by code.
author: YourName

# Menu Configuration
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
  About: /about

# Social Links
social:
  github: your_github_username
  twitter: your_twitter_username
  email: your_email@example.com
```

## Language Configuration

VSC4T theme supports multiple languages. To change the language, modify your site's `_config.yml`:

```yaml
language: en  # default language
```

### Supported Languages

- English (en)
- Simplified Chinese (zh-CN)
- Japanese (ja)
- Korean (ko)
- French (fr)
- German (de)
- Spanish (es)
- Italian (it)
- Russian (ru)
- Portuguese (pt)
- Arabic (ar)
- Vietnamese (vi)

### Language Configuration Example

To use a different language, set the `language` parameter in your site's `_config.yml`:

```yaml
# For Japanese
language: ja

# For Korean
language: ko

# For French
language: fr
```

You can also configure multiple languages:

```yaml
language: 
  - en
  - zh-CN
```

When multiple languages are configured, the first one will be used as the default language.

## Blog Post Settings


Example post:

```
---
title: VSC4T - A Dark and Elegant Hexo Theme
date: 2023-06-15 10:30:00
tags: [hexo, theme, dark-mode, responsive]
categories: [web-design, themes]
toc: true
description: Introducing VSC4T, a code editor inspired dark theme for Hexo blogs.
---

Your post content goes here...
```

## Custom Styling

This theme supports custom CSS and JS. In the theme configuration:

```yaml
custom_css:
  - /css/mobile.css
custom_js:
  - /js/code-copy.js
  - /js/mobile-menu.js
```

## Mobile Optimization

The theme is optimized for mobile devices. You can adjust mobile settings in the theme configuration:

```yaml
mobile:
  enabled: true
  breakpoint: 768
  nav_style: 'drawer'
```

## Code Highlighting

This theme uses built-in code highlighting by default. You can adjust it through the following settings:

```yaml
highlight:
  enable: true
  line_number: true
  auto_detect: true
```

## License

This theme is released under the MIT License.

## Support

If you have any questions or need help, please open an issue in the GitHub repository.
