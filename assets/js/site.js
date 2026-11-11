// 滚动超过一屏才显示「回到顶部」；尊重 prefers-reduced-motion
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