# Xufeng Huang 的个人主页

个人学术主页的源码：Hugo 静态站点 + 本仓库自写的主题，推到 `master` 后由 GitHub Actions 构建并发布到 GitHub Pages。

- 站点：<https://hxf1228.github.io/>
- 构建：Hugo **0.169.0**（没有主题、没有 Hugo Modules、没有 Node、没有 Go）
- 部署：`.github/workflows/deploy.yml` → GitHub Pages

## 目录

| 路径 | 作用 |
| --- | --- |
| `content/_index.md` | 首页：称呼 / 职位 / 单位 / 头像 / 社交链接 + 正文（简介、教育、经历、获奖、审稿） |
| `content/publication/<slug>/` | 一篇论文 = `index.md` + `cite.bib` |
| `layouts/index.html` | 首页模板（首屏 + 正文 + 论文列表） |
| `layouts/_default/single.html` | 论文详情（DOI、Cite 面板、摘要） |
| `layouts/_default/list.html` | `/publication/` 列表 |
| `layouts/partials/` | 页头、页脚、论文条目、分类分组等片段 |
| `layouts/shortcodes/callout.html` | `{{%/* callout */%}}` 提示框 |
| `assets/css/main.css` | 全部样式（单栏 760px、黑白灰、无卡片） |
| `config/_default/hugo.yaml` | 站点配置 |
| `docs/adr/` | 架构决策记录 |

## 改内容

- 改首页文字（简介、教育、获奖…）：编辑 `content/_index.md`
- 加一篇论文：新建 `content/publication/<slug>/index.md`，同目录放 `cite.bib`。front matter 里 `publication_types: ["2"]` 是期刊、`["1"]` 是会议，分组和列表都靠它
- 改外观：`assets/css/main.css`；改结构：`layouts/`

改完提交推到 `master`，Actions 自动构建，一分钟内上线。

## 本地预览

```powershell
./preview.ps1
```

需要 `hugo.exe`（0.169.0）在 `%LOCALAPPDATA%\hugo-tools\`，脚本会提示下载地址。或者直接把 hugo 加进 PATH，用 `hugo server`。浏览器打开 <http://localhost:1313>，改文件即时刷新。

## 升级 Hugo

版本写死在 `.github/workflows/deploy.yml`（`hugo-version: '0.169.0'`）。升级时改这一处，本地换成同版本跑一遍 `hugo --gc --minify`，没问题再提交——Hugo 的大版本会改配置键和模板函数，盲升必炸。

## 设计

版式参考 [minimal-light](https://github.com/yaoyao-liu/minimal-light) 的单栏极简排版（它的许可是 CC0，无署名义务），模板与样式是本仓库自写。为什么不用现成主题，见 [ADR 0001](docs/adr/0001-own-theme-instead-of-hugoblox.md)。