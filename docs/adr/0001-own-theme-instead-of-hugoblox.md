# 自写主题，而不升级到 Hugo Blox

**Status**: accepted

站点原来跑在 Wowchemy v5 + Hugo 0.84（2021 年的组合，主题已停更）。在"继续覆盖旧框架 / 迁 HugoBlox Kit v2 / 迁 minimal-light（Jekyll）/ 现代 Hugo + 自写模板"四条路里，选了最后一条：Hugo 0.169 + 本仓库自己的 `layouts/` 与一份 `assets/css/main.css`，内容层不动。

这么选的原因：内容层（15 篇论文的 front matter、`cite.bib`、首页 Markdown）本来就不依赖 Wowchemy，全站短代码只有 `callout` 一个真正在用，所以"换主题"的成本几乎全在模板层；而迁 HugoBlox 要引入 Node/npm + Tailwind，并把 widget 体系改成 blocks，等于把站点重做一遍，还绑回一个新上游。自写之后，构建只需一个 Hugo 二进制：没有 Hugo Modules、没有 `go.mod`、没有 npm，仓库里也不再有第三方的模板或样式，`git blame` 出来的每一行都是自己的。

**代价**：搜索、暗色模式、CMS、图片处理这些现成功能没了，需要时得自己写；Hugo 版本要手动跟着升（`.github/workflows/deploy.yml` 里写死）。版式参考了 [minimal-light](https://github.com/yaoyao-liu/minimal-light)（CC0，无署名义务）的排版语言，但没有复制它的代码。