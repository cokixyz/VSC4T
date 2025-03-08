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
- 🔍 VS Code style search functionality

## Installation

1. Navigate to your Hexo site's themes directory:
```bash
cd themes
```

2. Clone this repository:
```bash
git clone https://github.com/B143KC47/VSC4T.git
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
Then edit `source/categories/index.md` and add 
```
---
title: categories
layout: categories
---
```
2. Create Tags page:
```bash
hexo new page tags
```
Then edit `source/tags/index.md` and add `type: "tags"`
```
---
title: tags
layout: tags
---
```
3. Create About page:
```bash
hexo new page about
```
And add your personal information to `source/about/index.md`
```
---
title: about
date: 2025-02-22 22:14:44
---

A very good simple theme

```
4. Create Search page:
```bash
hexo new page search
```
Then edit `source/search/index.md` and add:
```
---
title: search
layout: search
---
```

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

### Creating a New Post

1. Create a new post using Hexo command:
```bash
hexo new post "Your Post Title"
```

2. This will create a new markdown file in `source/_posts/your-post-title.md`


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

## Search Configuration

The theme includes a powerful search functionality inspired by VS Code's search interface. The search feature allows users to:

- Search through all blog posts and pages
- Filter by title, content, tags, and categories
- Use keyboard navigation (↑↓ arrows and Enter)
- See highlighted search matches
- Get context-aware search previews

### Enabling Search

Search is enabled by default. The search index is automatically generated when you build your site. You can customize the search behavior in your site's `_config.yml`:

```yaml
search:
  path: search.json        # Path to generate the search index file
  field: post             # Search field, available: post, page, all
  content: true           # Whether to include post/page content
  format: html            # Content format to parse, available: html, raw
```

### Search Keyboard Shortcuts

- `↑` / `↓`: Navigate through search results
- `Enter`: Open selected result
- `Esc`: Clear search input

### Search Filters

The search interface includes filters for:
- Titles
- Content
- Tags
- Categories

Users can toggle these filters to narrow down their search results.

## License

This theme is released under the MIT License.

## Support

If you have any questions or need help, please open an issue in the GitHub repository.
