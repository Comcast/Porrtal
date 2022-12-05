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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[6240],{16240:(y,n,s)=>{s.r(n),s.d(n,{default:()=>O});var e=s(17626),p=s(26584),i=s(99959),E=s(50618),t=s(77712),d=(s(85931),s(90912),s(76898)),u=s(44917),c=s(6647);let _=class extends((0,c.I)((0,i.R)(u.Z))){constructor(o){super(o),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((o,a)=>{(0,E.Os)(()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let l="Unsupported layer type";r&&(l+=" "+r),a(new p.Z("layer:unsupported-layer-type",l,{layerType:r}))})}))}read(o,a){const r={resourceInfo:o};null!=o.id&&(r.id=o.id),null!=o.title&&(r.title=o.title),super.read(r,a)}write(o){return Object.assign(o||{},this.resourceInfo,{id:this.id})}};(0,e._)([(0,t.Cb)({readOnly:!0})],_.prototype,"resourceInfo",void 0),(0,e._)([(0,t.Cb)({type:["show","hide"]})],_.prototype,"listMode",void 0),(0,e._)([(0,t.Cb)({json:{read:!1},readOnly:!0,value:"unsupported"})],_.prototype,"type",void 0),_=(0,e._)([(0,d.j)("esri.layers.UnsupportedLayer")],_);const O=_}}]);