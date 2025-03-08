const fs = require('fs');
const path = require('path');
// Removed the dependency on hexo's internal module
const stripIndent = require('strip-indent');

// Generate search data json file
hexo.extend.generator.register('searchJson', locals => {
  const config = hexo.config;
  let searchConfig = config.search || {};
  let root = config.root || '/';
  
  // Default search path
  let searchPath = searchConfig.path || 'search.json';
  if (searchPath[0] !== '/') searchPath = root + searchPath;

  const posts = locals.posts.sort('-date');
  const pages = locals.pages;
  
  // Combine posts and pages
  let data = posts.data.concat(pages.data);
  let res = [];

  // Format each post/page for search data
  data.forEach(post => {
    if (post.indexing === false) return;

    let temp = {};
    
    // Basic info
    temp.title = post.title || '';
    temp.url = root + post.path;
    temp.content = removeCodeBlocks(post.content || '');
    temp.content = stripHTML(temp.content); // Strip HTML tags with our custom function
    temp.content = temp.content.trim().replace(/\n/g, ' '); // Remove newlines
    temp.content = temp.content.replace(/\s+/g, ' '); // Normalize spaces
    temp.date = post.date ? post.date.format('YYYY-MM-DD') : '';
    
    // Categories
    if (post.categories && post.categories.length) {
      temp.categories = post.categories.map(category => category.name);
    }
    
    // Tags
    if (post.tags && post.tags.length) {
      temp.tags = post.tags.map(tag => tag.name);
    }

    // Add to result array
    res.push(temp);
  });

  // Return data
  return {
    path: searchPath,
    data: JSON.stringify(res)
  };
});

// Remove code blocks to reduce search data size and improve search quality
function removeCodeBlocks(str) {
  if (!str) return '';
  return str.replace(/```[\s\S]*?```/g, '')
            .replace(/`{1,2}[^`].*?`{1,2}/g, '');
}

// Simple HTML tag stripping function to replace the hexo dependency
function stripHTML(str) {
  if (!str) return '';
  return str
    .replace(/<pre.*?<\/pre>/gs, '') // Remove pre tags and their content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
    .replace(/&lt;/g, '<') // Replace &lt; with <
    .replace(/&gt;/g, '>') // Replace &gt; with >
    .replace(/&amp;/g, '&') // Replace &amp; with &
    .replace(/&quot;/g, '"') // Replace &quot; with "
    .replace(/&#39;/g, "'") // Replace &#39; with '
    .replace(/&ldquo;/g, '"') // Replace &ldquo; with "
    .replace(/&rdquo;/g, '"') // Replace &rdquo; with "
    .replace(/&hellip;/g, '...'); // Replace &hellip; with ...
}