// 8bitACG 交互逻辑
(function () {
  // 搜索引擎映射
  const engines = {
    google:     "https://www.google.com/search?q=",
    bing:       "https://www.bing.com/search?q=",
    baidu:      "https://www.baidu.com/s?wd=",
    duckduckgo: "https://duckduckgo.com/?q=",
    yahoo:      "https://search.yahoo.com/search?p=",
    yandex:     "https://yandex.com/search/?text=",
    sogou:      "https://www.sogou.com/web?query=",
    so360:      "https://www.so.com/s?q="
  };

  let current = "google";

  const tabs = document.getElementById("engineTabs");
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");

  if (tabs) {
    tabs.addEventListener("click", function (e) {
      const btn = e.target.closest(".engine");
      if (!btn) return;
      tabs.querySelectorAll(".engine").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      current = btn.dataset.engine;
      input.focus();
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) { input.focus(); return; }
      const url = (engines[current] || engines.google) + encodeURIComponent(q);
      window.open(url, "_blank", "noopener");
      input.value = "";
    });
  }

  // 页头：初始隐藏，向下滚动后显现
  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = function () {
      if (window.scrollY > 80) header.classList.add("show");
      else header.classList.remove("show");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // 资讯列表翻页：仅 articles/index.html（含 #pagination）生效，每页 9 篇
  const pag = document.getElementById("pagination");
  if (pag) {
    const grid = document.querySelector(".news-grid");
    if (grid) {
      const cards = Array.prototype.slice.call(grid.querySelectorAll(".news-card"));
      const PER_PAGE = 9;
      const total = Math.max(1, Math.ceil(cards.length / PER_PAGE));
      let current = 1;

      const scrollTop = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };

      const render = function () {
        const start = (current - 1) * PER_PAGE;
        cards.forEach(function (c, i) {
          c.style.display = (i >= start && i < start + PER_PAGE) ? "" : "none";
        });
        pag.innerHTML = "";

        const prev = document.createElement("button");
        prev.className = "page-btn";
        prev.textContent = "‹ 上一页";
        prev.disabled = current === 1;
        prev.addEventListener("click", function () { if (current > 1) { current--; render(); scrollTop(); } });
        pag.appendChild(prev);

        for (let p = 1; p <= total; p++) {
          (function (p) {
            const b = document.createElement("button");
            b.className = "page-btn" + (p === current ? " active" : "");
            b.textContent = p;
            b.addEventListener("click", function () { current = p; render(); scrollTop(); });
            pag.appendChild(b);
          })(p);
        }

        const next = document.createElement("button");
        next.className = "page-btn";
        next.textContent = "下一页 ›";
        next.disabled = current === total;
        next.addEventListener("click", function () { if (current < total) { current++; render(); scrollTop(); } });
        pag.appendChild(next);
      };
      render();
    }
  }
})();
