# Xufeng Huang 个人主页

一个 Hugo 静态站点：Markdown 内容 + 主题层渲染，推 master 后由 GitHub Actions 构建并发布到 GitHub Pages。这个上下文存在的意义是把「改内容」和「改外观」两件事分开，避免每次换外观都要重写内容。

## Language

**内容层 (Content layer)**:
`content/` 下的 Markdown、BibTeX 与图片，描述"有什么"，与主题无关；换主题不应改动它。
_Avoid_: 模板内容

**主题层 (Theme layer)**:
决定 HTML 结构与样式的部分，决定"长什么样"；本项目自写，不依赖第三方主题。
_Avoid_: 皮肤、前端

**首页区块 (Home widget)**:
`content/home/` 下的单个 Markdown 文件，按 `weight` 纵向堆叠成首页的一个段落（如 about、publications）。
_Avoid_: 卡片、组件、section

**论文条目 (Publication entry)**:
`content/publication/<slug>/` 目录，含 `index.md`、`cite.bib` 与可选配图，发布为 `/publication/<slug>/`。
_Avoid_: 文章、paper 文件

**换皮 (Reskin)**:
只改主题层（样式 + 少量模版覆盖），内容层与引擎版本都不动。
_Avoid_: 重做、迁移

**骨架 (Skeleton)**:
页面的版面结构，即栏数、栏宽与信息块的垂直顺序；与配色、字号等"皮肤"相对。
_Avoid_: 布局风格