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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[8704],{38704:(c,_,s)=>{s.r(_),s.d(_,{previewWebStyleSymbol:()=>m});var d=s(84792),u=s(23841),r=s(71131);function m(e,i,h){const l=e.thumbnail&&e.thumbnail.url;return l?(0,d.default)(l,{responseType:"image"}).then(t=>{const a=function p(e,i){const h=!/\\.svg$/i.test(e.src)&&i&&i.disableUpsampling,l=Math.max(e.width,e.height);let t=i&&null!=i.maxSize?(0,u.F2)(i.maxSize):r.b_.maxSize;h&&(t=Math.min(l,t));const a="number"==typeof i?.size?i?.size:null,n=Math.min(t,null!=a?(0,u.F2)(a):l);if(n!==l){const o=0!==e.width&&0!==e.height?e.width/e.height:1;o>=1?(e.width=n,e.height=n/o):(e.width=n*o,e.height=n)}return e}(t.data,h);return h&&h.node?(h.node.appendChild(a),h.node):a}):e.fetchSymbol().then(t=>t?i(t,h):null)}}}]);