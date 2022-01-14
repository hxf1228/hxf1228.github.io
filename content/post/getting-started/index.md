---
title: Something About git
subtitle: Something About git.

# Summary for listings and search engines
summary: Something About git.

# Link this post with a project
projects: []

# Date published
date: "2022-01-14T21:48:00Z"

# Date updated
lastmod: "2022-01-14T21:48:00Z"

# Is this an unpublished draft?
draft: false

# Show this page in the Featured widget?
featured: false

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/CpkOjOcXdUY)'
  focal_point: ""
  placement: 2
  preview_only: false

authors:
- admin

tags:
- git
- gitignore

categories:
- git
---

## .gitignore not working

First commit any outstanding code changes, and then, run this command:

```python
git rm -r --cached
```

This removes any changed files from the index(staging area), then just run:

```
git add .
```

Commit it:

```
git commit -m ".gitignore is now working"
```

> https://stackoverflow.com/questions/25436312/gitignore-not-working

