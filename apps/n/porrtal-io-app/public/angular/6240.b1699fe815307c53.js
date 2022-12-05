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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[6240],{16240:(y,n,s)=>{s.r(n),s.d(n,{default:()=>c});var t=s(17626),p=s(26584),E=s(99959),d=s(50618),e=s(77712),i=(s(85931),s(8314),s(90912),s(76898)),u=s(44917),O=s(6647);let r=class extends((0,O.I)((0,E.R)(u.Z))){constructor(_){super(_),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((_,a)=>{(0,d.Os)(()=>{const o=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let l="Unsupported layer type";o&&(l+=" "+o),a(new p.Z("layer:unsupported-layer-type",l,{layerType:o}))})}))}read(_,a){const o={resourceInfo:_};null!=_.id&&(o.id=_.id),null!=_.title&&(o.title=_.title),super.read(o,a)}write(_){return Object.assign(_||{},this.resourceInfo,{id:this.id})}};(0,t._)([(0,e.Cb)({readOnly:!0})],r.prototype,"resourceInfo",void 0),(0,t._)([(0,e.Cb)({type:["show","hide"]})],r.prototype,"listMode",void 0),(0,t._)([(0,e.Cb)({json:{read:!1},readOnly:!0,value:"unsupported"})],r.prototype,"type",void 0),r=(0,t._)([(0,i.j)("esri.layers.UnsupportedLayer")],r);const c=r}}]);