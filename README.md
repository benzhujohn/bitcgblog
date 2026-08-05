# 8bitACG · 二次元游戏导航门户

一个基于 GitHub Pages 的静态导航门户单页：中央聚合主流搜索引擎，四周聚合热门二次元游戏官方站、平台社区与 ACG 资源，并预留新闻/资讯板块。

## 目录结构
```
index.html              首页（导航门户单页）
assets/style.css        样式
assets/main.js          搜索框逻辑（切换引擎 + 带词跳转）
articles/index.html     资讯列表页
articles/sample-article.html  示例文章（模板）
CNAME                   自定义域名 8bitacg.com
```

## 发布步骤（一次性）
1. 在仓库 **Settings → Pages**：Source 选 `Deploy from a branch`，分支选 `main` / 根目录 `/`，保存。
2. 自定义域名：Settings → Pages → Custom domain 填 `8bitacg.com`（仓库已含 CNAME 文件，会自动同步）。
3. DNS（在 Cloudflare / 域名商处）：把 `8bitacg.com` 指向 GitHub Pages。
   - 用 Cloudflare：将根域名 A 记录或 CNAME(扁平化) 指向 `benzhujohn.github.io`，可保持橙色云代理(Proxy)。
   - 或在域名商加 A 记录到 GitHub Pages IP：`185.199.108.153` / `185.199.109.153` / `185.199.110.153` / `185.199.111.153`。
4. 等待 GitHub 签发 SSL 证书（几分钟内），访问 https://8bitacg.com 即可。

> 注意：8bitacg.com 原为 WordPress 博客，绑定 GitHub Pages 后将由本静态站替代，旧博客需另行备份/迁移。

## 定期更新资讯（交给 AI 的工作流）
1. 新建文章：复制 `articles/sample-article.html` → 改名为 `YYYY-MM-DD-主题.html`，填入内容。
2. 在 `articles/index.html` 的 `.news-grid` 中复制一段 `.news-card`，改链接/标题/摘要/日期。
3. （可选）在 `index.html` 的 `#news` 区块加一张首页预览卡。
4. 提交推送，GitHub Pages 自动更新。

## 接入 Google AdSense
你的 AdSense 为自适应广告，无需预留固定版位。账号审核通过后，按 Google 指引在页面 `<head>` 或 `<body>` 中放置自适应广告代码即可，广告会根据页面布局自动展示。
