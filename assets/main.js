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
})();
