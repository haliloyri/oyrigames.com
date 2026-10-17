import { mkdir, cp, writeFile, rm } from 'node:fs/promises';
import { render, routes } from '../src/pages.mjs';
import { site } from '../src/config.mjs';
await rm('dist', { recursive:true, force:true });
await mkdir('dist', { recursive:true });
await cp('assets', 'dist/assets', {recursive:true});
await cp('src/style.css','dist/style.css');
await cp('src/client.js','dist/client.js');
for (const lang of ['en','tr']) for (const route of routes) {
 const path = (lang==='tr'?'tr/':'') + route;
 await mkdir('dist/'+path,{recursive:true});
 await writeFile('dist/'+path+'index.html',render(route,lang));
}
// Retain old English URLs without creating duplicate canonical pages.
for (const route of routes) {
 const target = '/' + route;
 await mkdir('dist/en/' + route, {recursive:true});
 await writeFile('dist/en/' + route + 'index.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="description" content="This page has moved to the default English address."><meta http-equiv="refresh" content="0;url=${target}"><link rel="canonical" href="${site.origin}${target}"><title>Page moved — Oyri Games</title></head><body><h1>Page moved</h1><a href="${target}">Continue to Oyri Games</a></body></html>`);
}
await writeFile('dist/404.html',render('404/','en'));
await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${site.origin}/sitemap.xml\n`);
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['en','tr'].flatMap(l=>routes.map(r=>`<url><loc>${site.origin}/${l==='tr'?'tr/':''}${r}</loc><lastmod>${site.updated}</lastmod></url>`)).join('')}</urlset>`);
console.log(`Built ${routes.length*2} pages, 404 page and sitemap.`);
