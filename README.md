
## 目录结构
```
index.html              首页（导航门户单页）
assets/style.css        样式
assets/main.js          搜索框逻辑（切换引擎 + 带词跳转）
articles/index.html     资讯列表页
articles/sample-article.html  示例文章（模板）
sitemap.xml             SEO 站点地图（提交给 Google 抓取）
robots.txt              爬虫规则 + 指向 sitemap
CNAME                   自定义域名 8bitacg.com
```

## SEO / Google 索引
- `sitemap.xml` 列出所有公开页面（首页 / 资讯列表 / 各文章）。每发布一篇新文章，需在 `<urlset>` 中新增一条 `<url>`（loc 用 `https://8bitacg.com/articles/文件名`，填 `lastmod` 当天日期）。
- `robots.txt` 已声明 `Sitemap: https://8bitacg.com/sitemap.xml`，Google 会自动发现。
- 各页面已加 `<link rel="canonical">` 指向 `https://8bitacg.com/...` 规范域名，避免重复内容。
- 上线后到 Google Search Console 提交 `https://8bitacg.com/sitemap.xml` 即可加速收录。
- 注意：sitemap / canonical 均使用最终域名 `8bitacg.com`；若域名尚未绑定生效，抓取会 404，绑好后再提交。

