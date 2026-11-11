// 1. 滚动超过一屏才显示「回到顶部」；尊重 prefers-reduced-motion
(function () {
  var btn = document.getElementById('toTop');
  if (!btn) return;

  var toggle = function () {
    btn.hidden = window.scrollY < 600;
  };

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  btn.addEventListener('click', function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });
})();

// 2. 首页导航：滚过 Biography 起点后，高亮从 Home 移到 Biography
(function () {
  var home = document.querySelector('.site-nav a[data-spy="home"]');
  var bio = document.querySelector('.site-nav a[data-spy="biography"]');
  var section = document.getElementById('biography');
  if (!home || !bio || !section) return;

  var update = function () {
    var threshold = section.getBoundingClientRect().top + window.scrollY - 120;
    var inBio = window.scrollY >= threshold;
    home.classList.toggle('is-active', !inBio);
    bio.classList.toggle('is-active', inBio);
    home.setAttribute('aria-current', inBio ? 'false' : 'page');
    bio.setAttribute('aria-current', inBio ? 'location' : 'false');
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();