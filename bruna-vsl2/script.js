/* =============================================
   DRA. BRUNA GHETTI — script.js (VSL Centrado)
   ============================================= */

/* ── Scroll fade-up ── */
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-up').forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.1 + 's';
    obs.observe(el);
  });
}

/* ── FAQ accordion ── */
document.querySelectorAll('.faq-q').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('open');
    btn.setAttribute('aria-expanded', item.classList.contains('open'));
  });
});

/* ── Lazy Video Player ── */
(function () {
  const player = document.getElementById('vsl-player');
  if (!player) return;

  const VIDEO_ID = player.dataset.videoid;

  function loadVideo() {
    if (player.classList.contains('playing')) return;
    player.classList.add('playing');

    const iframe = document.createElement('iframe');
    // ✏️ Para trocar o vídeo, altere VIDEO_ID no atributo data-videoid do #vsl-player no HTML
    iframe.src = 'https://www.youtube.com/embed/' + VIDEO_ID + '?rel=0&modestbranding=1&playsinline=1&autoplay=1';
    iframe.title = 'Plano Safira – Dra. Bruna Ghetti';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    player.appendChild(iframe);
  }

  player.addEventListener('click', loadVideo);
  player.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadVideo(); }
  });
})();
