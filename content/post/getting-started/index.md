---
title: Something About git
subtitle: Something About git.
date: 2022-01-14T14:07:10.486Z
summary: Something About git.
draft: false
featured: false
authors:
  - admin
lastmod: 2022-01-14T21:48:00Z
tags:
  - git
  - gitignore
categories:
  - git
projects: []
image:
  caption: ""
  focal_point: ""
  placement: 2
  preview_only: false
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

