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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[1843,5994],{15994:(p,r,a)=>{a.d(r,{N:()=>u});const u={convertToGEGeometry:function m(i,t){return null==t?null:i.convertJSONToGeometry(t)},exportPoint:function x(i,t,e){const n=new c(i.getPointX(t),i.getPointY(t),e),s=i.hasZ(t),o=i.hasM(t);return s&&(n.z=i.getPointZ(t)),o&&(n.m=i.getPointM(t)),n},exportPolygon:function M(i,t,e){return new l(i.exportPaths(t),e,i.hasZ(t),i.hasM(t))},exportPolyline:function _(i,t,e){return new v(i.exportPaths(t),e,i.hasZ(t),i.hasM(t))},exportMultipoint:function f(i,t,e){return new d(i.exportPoints(t),e,i.hasZ(t),i.hasM(t))},exportExtent:function Z(i,t,e){const n=i.hasZ(t),s=i.hasM(t),o=new g(i.getXMin(t),i.getYMin(t),i.getXMax(t),i.getYMax(t),e);if(n){const h=i.getZExtent(t);o.zmin=h.vmin,o.zmax=h.vmax}if(s){const h=i.getMExtent(t);o.mmin=h.vmin,o.mmax=h.vmax}return o}};class c{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}class l{constructor(t,e,n,s){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class v{constructor(t,e,n,s){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class d{constructor(t,e,n,s){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class g{constructor(t,e,n,s,o){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=s,this.spatialReference=o,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},77692:(p,r,a)=>{a.r(r),a.d(r,{executeGEOperation:()=>m});var u=a(7006);function m(c){return(0,u.g[c.operation])(...c.parameters)}}}]);