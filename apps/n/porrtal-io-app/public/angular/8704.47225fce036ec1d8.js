"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[8704],{38704:(c,_,a)=>{a.r(_),a.d(_,{previewWebStyleSymbol:()=>m});var d=a(84792),u=a(23841),r=a(71131);function m(e,i,t){const s=e.thumbnail&&e.thumbnail.url;return s?(0,d.default)(s,{responseType:"image"}).then(h=>{const l=function p(e,i){const t=!/\\.svg$/i.test(e.src)&&i&&i.disableUpsampling,s=Math.max(e.width,e.height);let h=i&&null!=i.maxSize?(0,u.F2)(i.maxSize):r.b_.maxSize;t&&(h=Math.min(s,h));const l="number"==typeof i?.size?i?.size:null,n=Math.min(h,null!=l?(0,u.F2)(l):s);if(n!==s){const o=0!==e.width&&0!==e.height?e.width/e.height:1;o>=1?(e.width=n,e.height=n/o):(e.width=n*o,e.height=n)}return e}(h.data,t);return t&&t.node?(t.node.appendChild(l),t.node):l}):e.fetchSymbol().then(h=>i(h,t))}}}]);