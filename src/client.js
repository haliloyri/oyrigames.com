const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-menu');
function closeMenu() { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); }
menuButton?.addEventListener('click', () => {
 const open = menuButton.getAttribute('aria-expanded') !== 'true';
 menuButton.setAttribute('aria-expanded', String(open)); menu.hidden = !open;
});
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 781px)').addEventListener('change', e => { if(e.matches) closeMenu(); });
const filters = [...document.querySelectorAll('[data-filter]')];
function filterGames(platform) {
 filters.forEach(button => { const active = button.dataset.filter === platform; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
 const cards = [...document.querySelectorAll('[data-platform]')];
 cards.forEach(card => { card.hidden = platform !== 'all' && card.dataset.platform !== platform; });
 const empty = document.querySelector('.empty-state');
 if(empty) empty.hidden = cards.some(card => !card.hidden);
}
filters.forEach(button => button.addEventListener('click', () => filterGames(button.dataset.filter)));
document.querySelector('[data-reset-filter]')?.addEventListener('click', () => { filterGames('all'); filters[0]?.focus(); });
const dialog = document.querySelector('.lightbox');
let lastImageTrigger;
document.querySelectorAll('[data-lightbox]').forEach(button => button.addEventListener('click', () => {
 lastImageTrigger = button;
 dialog.querySelector('img').src = button.dataset.lightbox;
 dialog.querySelector('img').alt = button.dataset.caption;
 dialog.querySelector('p').textContent = button.dataset.caption;
 dialog.showModal();
}));
document.querySelector('.close-lightbox')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', e => { if(e.target === dialog) {const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();} });
dialog?.addEventListener('close', () => lastImageTrigger?.focus());
