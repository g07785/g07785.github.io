const C='isi-teamspiel-1791400811';
const FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','datenschutz.html','isi-katalog.js','sound/music.mp3','sound/sfx-badge.mp3','sound/sfx-buy.mp3','sound/sfx-click.mp3','sound/sfx-coin.mp3','sound/sfx-end.mp3','sound/sfx-fault.mp3','sound/sfx-fix.mp3','sound/sfx-go.mp3','sound/sfx-horst.mp3','sound/sfx-level.mp3','sound/sfx-right.mp3','sound/sfx-ring.mp3','sound/sfx-start.mp3','sound/sfx-wrong.mp3'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url); if(e.request.method!=='GET'||u.origin!==location.origin) return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(n=>{const c=n.clone(); caches.open(C).then(x=>x.put(e.request,c)); return n;}).catch(()=>caches.match('index.html'))));});
