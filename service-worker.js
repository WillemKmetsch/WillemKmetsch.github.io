if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const a=e=>s(e,c),f={module:{uri:c},exports:n,require:a};i[c]=Promise.all(d.map((e=>f[e]||a(e)))).then((e=>(r(...e),n)))}}define(["./workbox-181670da"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/22/word/index.html",revision:"ed5620a93d39cda2bd91079b8dbd4ab8"},{url:"404.html",revision:"3a2d91add1b685e0c5d46ad5664fc7a7"},{url:"archives/2022/03/index.html",revision:"0b8da9a7d570e9aaf573daab760283fd"},{url:"archives/2022/index.html",revision:"4bce2cf14c65e5835df0255febabcece"},{url:"archives/index.html",revision:"6bfbf2ef329c0fc95d68c049c84aee86"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"33399d0bd057ab0c7f55571fb3c9a522"},{url:"categories/闲聊/index.html",revision:"9cea4646f594435f300eb5308d801314"},{url:"css/index.css",revision:"6828776946634de20ccf18a1ce773b38"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"899d0c4d1867b866ca420090c4f6d085"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"d32d9fab736115bf8277d3ee23288a8b"},{url:"tags/index.html",revision:"660169c634108b87dca6f83fda6bcd47"},{url:"tags/闲聊/index.html",revision:"6cd74afd2f37d8b6ef1c4fb38a41d166"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
