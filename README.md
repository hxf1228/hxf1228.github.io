# Xufeng Huang 的个人主页

个人学术主页的源码，Hugo + Wowchemy（Hugo Academic）主题。

- 主站：<https://hxf1228.github.io/>
- 镜像：<https://huangxf.netlify.app/>（Netlify 仍从本仓库构建，构建时用 `-b $URL` 覆盖域名）

## 技术栈

- **Hugo** 0.84.4 extended（版本不要随意改动，见文末）
- **主题** Wowchemy v5.3.0，通过 Hugo Modules 引入
- **Go** 1.19，仅用于拉取主题模块
- **部署** GitHub Actions 构建 → GitHub Pages 发布（`.github/workflows/deploy.yml`）

## 目录

| 路径 | 内容 |
| --- | --- |
| `content/home/` | 首页各区块（about、publications 等） |
| `content/authors/` | 个人资料与头像 |
| `content/publication/` | 论文 |
| `content/post/` | 博客 |
| `content/event/` | 报告与活动（按 permalink 发布为 `/talk/`） |
| `content/slides/` | 幻灯片 |
| `content/admin/` | Netlify CMS 入口，仅在 Netlify 上可用 |
| `config/_default/` | `config.yaml`（baseurl、模块、输出格式）、`params.yaml`（外观与站点参数）、`menus.yaml`、`languages.yaml` |
| `static/uploads/` | CMS 上传的图片与附件 |
| `.github/workflows/deploy.yml` | 构建并发布到 GitHub Pages |

## 改名 / 发文章的流程

1. 修改或新增 `content/` 下的 Markdown，front matter 用 YAML。
2. `git add . && git commit -m "..." && git push`。
3. 推到 `master` 后 Actions 自动构建，约一分钟上线。手动触发：Actions → **Deploy Hugo site to GitHub Pages** → Run workflow。

## 本地预览

本机目前没装 Hugo 和 Go。要本地预览需另装：

- Hugo **0.84.4 extended**（必须同版本，新版不兼容 Wowchemy v5）
- Go 1.19+

然后 `hugo server -D`，浏览器打开 <http://localhost:1313>。

## 注意

- 主题已停止维护（Wowchemy 后来改名为 Hugo Blox v6/v7）。**不要随手升级 Hugo**：升到 0.9x 以上会大面积报错，需要把配置、模板、widget 一起迁移。
- `baseurl` 只对 GitHub Pages 生效；Netlify 构建时由 `-b $URL` 覆盖，两边域名互不影响。