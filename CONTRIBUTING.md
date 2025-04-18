# Contributing to VSC4T

First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to VSC4T, a dark and elegant Hexo theme. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Pull Requests](#pull-requests)
- [Development Process](#development-process)
  - [Setup Development Environment](#setup-development-environment)
  - [File Structure](#file-structure)
  - [Style Guidelines](#style-guidelines)
- [Additional Notes](#additional-notes)
  - [Issue Labels](#issue-labels)

## Code of Conduct

This project and everyone participating in it is governed by the VSC4T Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for VSC4T. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check the existing issues to see if the problem has already been reported. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible. 
- **Provide specific examples** to demonstrate the steps.
- **Describe the behavior you observed** after following the steps and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected** to see instead and why.
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.
- **If the problem is related to performance or memory**, include a CPU profile capture and a memory heap snapshot with your report.
- **Include details about your configuration and environment**:
  - Which version of Hexo are you using?
  - What's the name and version of the OS you're using?
  - Which browser are you using?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for VSC4T, including completely new features and minor improvements to existing functionality.

Before creating enhancement suggestions, please check the existing issues to see if the enhancement has already been suggested. When you are creating an enhancement suggestion, please include as many details as possible:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps** or give a clear use case for the suggested enhancement.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Explain why this enhancement would be useful** to most VSC4T users.
- **List some other themes or applications where this enhancement exists** if possible.

### Your First Code Contribution

Unsure where to begin contributing to VSC4T? You can start by looking through the `beginner` and `help-wanted` issues:

- **Beginner issues** - issues which should only require a few lines of code, and a test or two.
- **Help wanted issues** - issues which should be a bit more involved than beginner issues.

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow the style guidelines
- End all files with a newline
- Avoid platform-dependent code

## Development Process

### Setup Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally
```bash
git clone https://github.com/YOUR_USERNAME/VSC4T.git
cd VSC4T
```
3. Add the original repository as a remote to keep it updated:
```bash
git remote add upstream https://github.com/B143KC47/VSC4T.git
```

4. Set up a test Hexo site to test your changes:
```bash
# In a separate directory
hexo init test-site
cd test-site
```

5. Link your theme to the test site:
```bash
# Remove the default theme
rm -rf themes/landscape
# Create a symbolic link to your theme
ln -s /path/to/your/VSC4T themes/VSC4T
```

6. Configure the test site to use your theme by editing `_config.yml`:
```yaml
theme: VSC4T
```

### File Structure

The theme is structured as follows:

- `_config.yml` - Theme configuration file
- `languages/` - Internationalization files
- `layout/` - Theme template files in EJS format
- `scripts/` - Hexo script files
- `source/` - Theme assets (CSS, JavaScript, images, etc.)
  - `css/` - Stylesheets
  - `js/` - JavaScript files
  - `image/` - Image files
  - `doc/` - Documentation files

### Style Guidelines

#### JavaScript

- Use ES6 features where appropriate
- Use semicolons
- 2 spaces for indentation
- Prefer single quotes over double quotes
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

#### CSS/SCSS

- Use SCSS where possible
- 2 spaces for indentation
- Write one property per line
- Use hyphen-case for class names (e.g., `.my-class-name`)
- Follow the [Airbnb CSS/SASS Style Guide](https://github.com/airbnb/css)

#### EJS Templates

- 2 spaces for indentation
- Keep logic in templates to a minimum
- Use consistent naming conventions for partials

## Additional Notes

### Issue Labels

This project uses the following labels to track issues:

- `bug` - Something isn't working
- `documentation` - Improvements or additions to documentation
- `duplicate` - This issue or pull request already exists
- `enhancement` - New feature or request
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `invalid` - This doesn't seem right
- `question` - Further information is requested
- `wontfix` - This will not be worked on

---

Thanks for contributing to VSC4T! 🎉