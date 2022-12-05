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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[5994],{15994:(g,a,r)=>{r.d(a,{N:()=>c});const c={convertToGEGeometry:function p(i,t){return null==t?null:i.convertJSONToGeometry(t)},exportPoint:function m(i,t,s){const e=new u(i.getPointX(t),i.getPointY(t),s),n=i.hasZ(t),o=i.hasM(t);return n&&(e.z=i.getPointZ(t)),o&&(e.m=i.getPointM(t)),e},exportPolygon:function l(i,t,s){return new x(i.exportPaths(t),s,i.hasZ(t),i.hasM(t))},exportPolyline:function M(i,t,s){return new v(i.exportPaths(t),s,i.hasZ(t),i.hasM(t))},exportMultipoint:function f(i,t,s){return new d(i.exportPoints(t),s,i.hasZ(t),i.hasM(t))},exportExtent:function Z(i,t,s){const e=i.hasZ(t),n=i.hasM(t),o=new _(i.getXMin(t),i.getYMin(t),i.getXMax(t),i.getYMax(t),s);if(e){const h=i.getZExtent(t);o.zmin=h.vmin,o.zmax=h.vmax}if(n){const h=i.getMExtent(t);o.mmin=h.vmin,o.mmax=h.vmax}return o}};class u{constructor(t,s,e){this.x=t,this.y=s,this.spatialReference=e,this.z=void 0,this.m=void 0}}class x{constructor(t,s,e,n){this.rings=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),n&&(this.hasM=n)}}class v{constructor(t,s,e,n){this.paths=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),n&&(this.hasM=n)}}class d{constructor(t,s,e,n){this.points=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),n&&(this.hasM=n)}}class _{constructor(t,s,e,n,o){this.xmin=t,this.ymin=s,this.xmax=e,this.ymax=n,this.spatialReference=o,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}}}]);