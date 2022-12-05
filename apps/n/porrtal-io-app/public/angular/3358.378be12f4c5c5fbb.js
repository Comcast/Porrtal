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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[3358],{23358:(E,c,a)=>{a.r(c),a.d(c,{execute:()=>g});var b=a(15861),f=a(26584),h=a(62208);let u;function g(o,t){let e=t.responseType;e?"array-buffer"!==e&&"blob"!==e&&"json"!==e&&"native"!==e&&"native-request-init"!==e&&"text"!==e&&(e="text"):e="json",t.responseType=e;const d=(0,h.Wg)(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:o,options:t},{signal:d}).then(function(){var v=(0,b.Z)(function*(r){let i,n,p,_,s;if(r.data)if(r.data instanceof ArrayBuffer){if(!("json"!==e&&"text"!==e&&"blob"!==e||(i=new Blob([r.data]),"json"!==e&&"text"!==e||(u||(u=new FileReaderSync),_=u.readAsText(i),"json"!==e)))){try{n=JSON.parse(_||null)}catch(l){const y={...l,url:o,requestOptions:t};throw new f.Z("request:server",l.message,y)}if(n.error){const l={...n.error,url:o,requestOptions:t};throw new f.Z("request:server",n.error.message,l)}}}else"native"===e&&(r.data.signal=d,p=yield fetch(r.data.url,r.data));switch(e){case"blob":s=i;break;case"json":s=n;break;case"native":s=p;break;case"text":s=_;break;default:s=r.data}return{data:s,requestOptions:t,ssl:r.ssl,url:o}});return function(r){return v.apply(this,arguments)}}())}}}]);