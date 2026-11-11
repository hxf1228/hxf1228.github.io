# Xufeng Huang 个人主页

一个 Hugo 静态站点：Markdown 内容 + 主题层渲染，推 master 后由 GitHub Actions 构建并发布到 GitHub Pages。这个上下文存在的意义是把「改内容」和「改外观」两件事分开，避免每次换外观都要重写内容。

## Language

**内容层 (Content layer)**:
`content/` 下的 Markdown、BibTeX 与图片，描述"有什么"，与主题无关；换主题不应改动它。
_Avoid_: 模板内容

**主题层 (Theme layer)**:
决定 HTML 结构与样式的部分，决定"长什么样"；本项目自写，不依赖第三方主题。
_Avoid_: 皮肤、前端

**首页 (Home)**:
`content/_index.md`，渲染成「首屏 + About me + 论文列表」三段，只讲你是谁和做过什么。
_Avoid_: 主页、landing page

**简历页 (Biography)**:
`content/biography.md`，独立页面 `/biography/`，装教育、经历、获奖、审稿这类履历细节。
_Avoid_: CV 页

**论文条目 (Publication entry)**:
`content/publication/<slug>/` 目录，含 `index.md`、`cite.bib` 与可选配图，发布为 `/publication/<slug>/`。
_Avoid_: 文章、paper 文件

**换皮 (Reskin)**:
只改主题层（样式 + 少量模版覆盖），内容层与引擎版本都不动。
_Avoid_: 重做、迁移

**骨架 (Skeleton)**:
页面的版面结构，即栏数、栏宽与信息块的垂直顺序；与配色、字号等"皮肤"相对。
_Avoid_: 布局风格