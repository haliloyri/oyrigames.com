import {readdir,readFile,stat} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {routes} from '../src/pages.mjs';
import {site,games} from '../src/config.mjs';
const root=resolve('dist');
async function walk(p){const r=[];for(const e of await readdir(p,{withFileTypes:true})){const f=resolve(p,e.name);if(e.isDirectory())r.push(...await walk(f));else if(e.name.endsWith('.html'))r.push(f);}return r;}
const pages=await walk(root),errors=[];
for(const file of pages){
 const html=await readFile(file,'utf8');
 if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)errors.push(`${file}: expected one H1`);
 if(!/<html lang="(tr|en)"/.test(html))errors.push(`${file}: missing language`);
 if(!/<meta name="description" content="[^"]+"/.test(html))errors.push(`${file}: missing description`);
 for(const [,attribute,value] of html.matchAll(/\b(href|src)="([^"]+)"/g)){
  if(value.startsWith('#')) { if(value.length>1&&!html.includes(`id="${value.slice(1)}"`))errors.push(`${file}: missing local fragment ${value}`);continue;}
  if(/^(mailto:|https?:)/.test(value))continue;
  const [path,fragment]=value.split('#');
  let dest=path.startsWith('/')?resolve(root,'.'+path):resolve(dirname(file),path);
  try {if((await stat(dest)).isDirectory())dest=resolve(dest,'index.html');await stat(dest);if(fragment&&dest.endsWith('.html')){const target=await readFile(dest,'utf8');if(!target.includes(`id="${fragment}"`))errors.push(`${file}: missing fragment ${value}`);}}
  catch{errors.push(`${file}: broken ${attribute} ${value}`);}
 }
 if(/YOUR E.MAIL|undefined|Lorem ipsum|TODO|\[PLACEHOLDER\]/i.test(html))errors.push(`${file}: unfinished content`);
}
for (const route of routes) {
 for (const lang of ['en','tr']) {
  const path = '/' + (lang==='tr'?'tr/':'') + route;
  const html = await readFile(root+path+'index.html','utf8');
  const opposite = '/' + (lang==='en'?'tr/':'') + route;
  if(!html.includes(`<html lang="${lang}">`))errors.push(`${path}: wrong default language`);
  if(!html.includes(`<link rel="canonical" href="${site.origin}${path}">`))errors.push(`${path}: wrong canonical URL`);
  if(!html.includes(`class="locale" href="${opposite}"`))errors.push(`${path}: wrong language counterpart`);
  if(!html.includes(`hreflang="x-default" href="${site.origin}/${route}"`))errors.push(`${path}: wrong English fallback`);
 }
}
for (const game of games) {
 const html=await readFile(`${root}/${game.id}/index.html`,'utf8');
 if((html.match(/class="shot"/g)||[]).length!==6)errors.push(`${game.id}: expected six screenshots`);
 for(const section of ['overview','screenshots','how-to-play'])if(!html.includes(`id="${section}"`))errors.push(`${game.id}: missing game section ${section}`);
 for(const page of ['support','privacy','privacy-choices','delete-data','terms'])if(!html.includes(`href="/${game.id}/${page}/"`))errors.push(`${game.id}: missing ${page} resource`);
}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`Checked ${pages.length} HTML pages: internal links, fragments, images, headings, languages, canonical URLs, language switchers, game galleries and metadata passed.`);
