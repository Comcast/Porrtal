/*
Copyright 2022 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[8704],{38704:(c,_,a)=>{a.r(_),a.d(_,{previewWebStyleSymbol:()=>m});var d=a(84792),u=a(23841),r=a(71131);function m(e,i,t){const s=e.thumbnail&&e.thumbnail.url;return s?(0,d.default)(s,{responseType:"image"}).then(h=>{const l=function p(e,i){const t=!/\\.svg$/i.test(e.src)&&i&&i.disableUpsampling,s=Math.max(e.width,e.height);let h=i&&null!=i.maxSize?(0,u.F2)(i.maxSize):r.b_.maxSize;t&&(h=Math.min(s,h));const l="number"==typeof i?.size?i?.size:null,n=Math.min(h,null!=l?(0,u.F2)(l):s);if(n!==s){const o=0!==e.width&&0!==e.height?e.width/e.height:1;o>=1?(e.width=n,e.height=n/o):(e.width=n*o,e.height=n)}return e}(h.data,t);return t&&t.node?(t.node.appendChild(l),t.node):l}):e.fetchSymbol().then(h=>i(h,t))}}}]);