if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const f=e=>s(e,o),c={module:{uri:o},exports:t,require:f};i[o]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-D61fSYRI.js",revision:null},{url:"assets/index-DSrYaQ5F.css",revision:null},{url:"index.html",revision:"0c9cb4623f5ff25a78a5fb144b743f8a"},{url:"registerSW.js",revision:"dd23c7691bf48b02e71e90893a938ac0"},{url:"favicon.ico",revision:"a6286460b578eaa0f4e4bf6fe4d6e98b"},{url:"apple-touch-icon.png",revision:"473686237d3508f845ad65043cd3bead"},{url:"pwa-192x192.png",revision:"567ec767d8ee2c3acbf611240e723ee7"},{url:"pwa-512x512.png",revision:"79f3444699af6ec19ee0d9be6affa0b2"},{url:"manifest.webmanifest",revision:"2ddc687ea788ea788982240537ae464a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));