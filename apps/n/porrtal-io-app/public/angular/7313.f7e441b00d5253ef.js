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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[7313],{27313:(F,v,t)=>{t.r(v),t.d(v,{previewCIMSymbol:()=>L});var R=t(15861),s=t(23841),u=t(35909),y=t(52351),U=t(80991),c=t(71131),W=t(34057);const m=new y.CIMSymbolRasterizer(null,!0),r=(0,s.Wz)(c.b_.size),O=(0,s.Wz)(c.b_.maxSize),j=(0,s.Wz)(c.b_.lineWidth);function B(l){const e=l?.size;return"number"==typeof e?{width:e,height:e}:{width:null!=e&&"object"==typeof e&&"width"in e?e.width:null,height:null!=e&&"object"==typeof e&&"height"in e?e.height:null}}function L(l){return d.apply(this,arguments)}function d(){return(d=(0,R.Z)(function*(l,e={}){const{node:w,opacity:D,symbolConfig:f}=e,T="object"==typeof f&&"isSquareFill"in f&&f.isSquareFill,I=e.cimOptions||e,n=I.geometryType||(0,U.JW)(l?.data?.symbol),i=B(e),{feature:b,fieldMap:S}=I;if(null==i.width||null==i.height){const o=yield u.E0.resolveSymbolOverrides(l.data,b,null,S,n);if(!o)return null;(l=l.clone()).data={type:"CIMSymbolReference",symbol:o},l.data.primitiveOverrides=null;const E=[];u.B$.fetchResources(o,m.resourceManager,E),E.length>0&&(yield Promise.all(E));const{width:P,height:C}=u.B$.getEnvelope(o,null,m.resourceManager);i.width="esriGeometryPolygon"===n?r:"esriGeometryPolyline"===n?j:null!=P&&isFinite(P)?Math.min(P,O):r,i.height="esriGeometryPolygon"===n?r:null!=C&&isFinite(C)?Math.max(Math.min(C,O),1):r}const g=yield m.rasterizeCIMSymbolAsync(l,b,i,T||"esriGeometryPolygon"!==n?y.GeometryStyle.Preview:y.GeometryStyle.Legend,S,n);if(!g)return null;const{width:A,height:G}=g,a=document.createElement("canvas");a.width=A,a.height=G,a.getContext("2d").putImageData(g,0,0);const p=(0,s.F2)(i.width),M=(0,s.F2)(i.height),_=new Image(p,M);_.src=a.toDataURL(),null!=D&&(_.style.opacity=`${D}`);let h=_;return null!=e.effectView&&(h=(0,W.w)([[{shape:{type:"image",x:0,y:0,width:p,height:M,src:_.src},fill:null,stroke:null,offset:[0,0]}]],[p,M],{effectView:e.effectView})),w&&h&&w.appendChild(h),h})).apply(this,arguments)}}}]);