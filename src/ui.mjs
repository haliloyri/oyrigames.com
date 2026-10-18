export const escapeHTML=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const paths={
 arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',
 external:'<path d="M7 17 17 7M7 7h10v10"/>',
 down:'<path d="M12 4v16m-6-6 6 6 6-6"/>',
 close:'<path d="m6 6 12 12M6 18 18 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/>',
 game:'<path d="M7 7h10c2 0 3 2 3 4l1 5c.5 3-2 4-4 2l-2-2H9l-2 2c-2 2-4.5 1-4-2l1-5c0-2 1-4 3-4Z"/><path d="M6 11h4m-2-2v4m7-2h.01m3 2h.01"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4m0 3h.01"/>',
 shield:'<path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6Z"/><path d="m8 12 3 3 5-6"/>',
 expand:'<path d="M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5"/>',
 compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5Z"/>',
 star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z"/>',
 monitor:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',
 phone:'<rect x="7" y="2" width="10" height="20" rx="3"/><path d="M11 18h2"/>',
};
export const icon=name=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.arrow}</svg>`;
export const brand=()=>`<span class="brand-symbol" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M9 9C3 15 4 29 13 32c10 4 15-8 10-14-4-5-12-1-9 5 3 5 12 3 16-3 3-5 1-11-3-14" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><circle cx="31" cy="30" r="4" fill="currentColor"/></svg></span><span class="brand-type" translate="no">oyri<span>games</span></span>`;
export function createUI(lang){
 const en=lang==='en',pick=(tr,eng)=>en?eng:tr,t=a=>a[en?1:0],href=route=>`/${en?'':'tr/'}${route}`;
 const link=(route,label,cls='')=>`<a class="${cls}" href="${href(route)}">${label}</a>`;
 const button=(route,label,cls='')=>link(route,`${label}${icon('arrow')}`,'button '+cls);
 return {en,pick,t,href,link,button};
}
