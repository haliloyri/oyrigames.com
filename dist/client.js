const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-menu');
function closeMenu(returnFocus = false) {
  if (!menuButton || !menu) return;
  const wasOpen = !menu.hidden;
  menu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', menuButton.dataset.openLabel);
  if (returnFocus && wasOpen) menuButton.focus();
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? menuButton.dataset.closeLabel : menuButton.dataset.openLabel);
  menu.hidden = !open;
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('click', event => {
  if (!menu?.hidden && !menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu(true);
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-platform]')];
function filterGames(platform, updateURL = true, announce = true) {
  if (!filters.length) return;
  if (!['all', 'mobile', 'pc'].includes(platform)) platform = 'all';
  filters.forEach(button => {
    const active = button.dataset.filter === platform;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => { card.hidden = platform !== 'all' && card.dataset.platform !== platform; });
  const visibleCount = cards.filter(card => !card.hidden).length;
  const empty = document.querySelector('.empty-state');
  if (empty) empty.hidden = visibleCount !== 0;
  const status = document.querySelector('.filter-announcement');
  if (status && announce) status.textContent = `${visibleCount} ${visibleCount === 1 ? status.dataset.singular : status.dataset.plural}`;
  if (updateURL) {
    const url = new URL(location.href);
    if (platform === 'all') url.searchParams.delete('platform');
    else url.searchParams.set('platform', platform);
    history.pushState(null, '', url);
  }
}
filters.forEach(button => button.addEventListener('click', () => filterGames(button.dataset.filter)));
document.querySelector('[data-reset-filter]')?.addEventListener('click', () => {
  filterGames('all'); filters[0]?.focus();
});
filterGames(new URL(location.href).searchParams.get('platform') || 'all', false, false);

const dialog = document.querySelector('.lightbox');
const screenshots = [...document.querySelectorAll('[data-lightbox]')];
let selectedImage = 0;
let lastImageTrigger;
let closingFromHistory = false;
function showImage(index, mode = 'push') {
  if (!dialog || !screenshots.length) return;
  selectedImage = (index + screenshots.length) % screenshots.length;
  const button = screenshots[selectedImage];
  lastImageTrigger = button;
  const image = dialog.querySelector('img');
  image.src = button.dataset.lightbox;
  image.alt = button.dataset.caption;
  dialog.querySelector('p').textContent = button.dataset.caption;
  dialog.querySelector('.lightbox-count').textContent = `${selectedImage + 1} / ${screenshots.length}`;
  document.documentElement.classList.add('modal-open');
  if (!dialog.open) dialog.showModal();
  if (mode !== 'none') {
    const url = new URL(location.href);
    url.searchParams.set('image', String(selectedImage + 1));
    history[mode === 'push' ? 'pushState' : 'replaceState'](null, '', url);
  }
}
screenshots.forEach((button, index) => button.addEventListener('click', () => showImage(index)));
dialog?.querySelector('.lightbox-prev')?.addEventListener('click', () => showImage(selectedImage - 1, 'replace'));
dialog?.querySelector('.lightbox-next')?.addEventListener('click', () => showImage(selectedImage + 1, 'replace'));
dialog?.querySelector('.close-lightbox')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') { event.preventDefault(); showImage(selectedImage + 1, 'replace'); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(selectedImage - 1, 'replace'); }
});
dialog?.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog?.addEventListener('close', () => {
  document.documentElement.classList.remove('modal-open');
  if (!closingFromHistory) {
    const url = new URL(location.href);
    url.searchParams.delete('image');
    history.replaceState(null, '', url);
  }
  closingFromHistory = false;
  lastImageTrigger?.focus({ preventScroll: true });
});
function restoreURLState() {
  const params = new URL(location.href).searchParams;
  filterGames(params.get('platform') || 'all', false, false);
  const image = Number(params.get('image'));
  if (Number.isInteger(image) && image >= 1 && image <= screenshots.length) showImage(image - 1, 'none');
  else if (dialog?.open) { closingFromHistory = true; dialog.close(); }
}
window.addEventListener('popstate', restoreURLState);
restoreURLState();
