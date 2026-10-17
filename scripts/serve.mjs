import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root=resolve('dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.webp':'image/webp','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain'};
http.createServer(async(req,res)=>{
 try {
  const url=new URL(req.url,'http://localhost');
  let path=resolve(root,'.'+decodeURIComponent(url.pathname));
  if(path!==root&&!path.startsWith(root+sep)){res.writeHead(403);res.end();return;}
  let info;try{info=await stat(path);}catch{}
  if(info?.isDirectory()) {
   if(!url.pathname.endsWith('/')){res.writeHead(308,{Location:url.pathname+'/'+url.search});res.end();return;}
   path=resolve(path,'index.html');
  }
  let data;try{data=await readFile(path);}catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(root+'/404.html'));return;}
  res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(data);
 }catch{res.writeHead(400);res.end('Bad request');}
}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
