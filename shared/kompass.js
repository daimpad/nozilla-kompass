/* ═══════════════════════════════════════════════
   Nozilla Kompass — Shared Overlay Logic
   Requires CARDS and LITS to be defined globally
   before this script is loaded.
   ═══════════════════════════════════════════════ */
(function () {
  const overlay   = document.getElementById('overlay');
  const ovInner   = document.getElementById('overlay-inner');
  const ovFig     = document.getElementById('ov-fig');
  const ovTitle   = document.getElementById('ov-title');
  const ovSvgWrap = document.getElementById('ov-svg-wrap');
  const ovBubble  = document.getElementById('ov-bubble');
  const ovScrawl  = document.getElementById('ov-scrawl');
  const ovLong    = document.getElementById('ov-longtext');
  const closeBtn  = document.getElementById('overlay-close');

  function openCard(num) {
    const d = CARDS[num];
    if (!d) return;

    ovFig.textContent   = d.fig;
    ovTitle.textContent = d.title;
    ovBubble.innerHTML  = d.bubble;

    const scrawlTemp = document.createElement('div');
    scrawlTemp.innerHTML = d.scrawl;
    const hiSpans = scrawlTemp.querySelectorAll('.hi');
    ovScrawl.innerHTML = hiSpans.length > 0
      ? Array.from(hiSpans).map(s => s.outerHTML).join(' ')
      : d.scrawl;

    ovLong.innerHTML = d.long;
    document.getElementById('ov-lit').innerHTML = LITS[num] || '';

    if (d.color) {
      ovInner.style.setProperty('--accent-color', d.color);
      ovFig.style.color = d.color;
      const divider = ovInner.querySelector('.ov-divider');
      if (divider) divider.style.borderColor = d.color + '44';
    }

    ovSvgWrap.innerHTML = `<img src="${num}.svg" alt="Figur ${num}" width="100" height="120" style="max-width:200px;width:100%;height:auto;display:block;margin:0 auto;">`;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    ovInner.scrollTop = 0;
  }

  function closeOverlay() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.card[data-card]').forEach(card => {
    card.addEventListener('click', () => openCard(+card.dataset.card));
  });

  closeBtn.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOverlay(); });
})();
