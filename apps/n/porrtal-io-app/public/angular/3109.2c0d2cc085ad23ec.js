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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[3109],{3109:(R,h,t)=>{t.r(h),t.d(h,{I3STreeDebugger:()=>a});var M=t(17626),D=(t(29132),t(62208)),O=t(77712),u=(t(85931),t(90912),t(76898)),P=t(28347),p=t(43703),l=t(84161),i=t(28093),n=t(55915),C=t(73187),v=t(37118);let a=class extends C.q{constructor(c){super(c)}getTiles(){const c=this.lv.getVisibleNodes(),o=this.view.renderSpatialReference,E=this.nodeSR;return c.map(e=>function j(c,o,E){const e=c.serviceObb;if((0,D.Wi)(e)||(0,D.Wi)(o))return null;(0,P.D)(r,e.quaternion),(0,l.c)(_,e.center),(0,n.CM)(_,E,0,_,o,0,1),r[12]=_[0],r[13]=_[1],r[14]=_[2];const s=[[],[],[]];(0,l.c)(_,e.halfSize),(0,l.m)(_,_,r),(0,n.CM)(_,o,0,_,E,0,1),s[0].push([_[0],_[1]]),(0,l.c)(_,e.halfSize),_[0]=-_[0],(0,l.m)(_,_,r),(0,n.CM)(_,o,0,_,E,0,1),s[0].push([_[0],_[1]]),(0,l.c)(_,e.halfSize),_[0]=-_[0],_[1]=-_[1],(0,l.m)(_,_,r),(0,n.CM)(_,o,0,_,E,0,1),s[0].push([_[0],_[1]]),(0,l.c)(_,e.halfSize),_[1]=-_[1],(0,l.m)(_,_,r),(0,n.CM)(_,o,0,_,E,0,1),s[0].push([_[0],_[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),(0,l.c)(_,e.halfSize),_[0]=-_[0],_[2]=-_[2],(0,l.m)(_,_,r),(0,n.CM)(_,o,0,_,E,0,1),s[1].push([_[0],_[1]]),(0,l.c)(_,e.halfSize),_[2]=-_[2],(0,l.m)(_,_,r),(0,n.CM)(_,o,0,_,E,0,1),s[1].push([_[0],_[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),(0,l.c)(_,e.halfSize),_[1]=-_[1],_[2]=-_[2],(0,l.m)(_,_,r),(0,n.CM)(_,o,0,_,E,0,1),s[2].push([_[0],_[1]]),s[2].push(s[1][3]);const T=new v.Z({rings:s,spatialReference:E});return{lij:[c.level,c.childCount,0],label:c.id,geometry:T}}(e,o,E)).sort((e,s)=>e.lij[0]===s.lij[0]?e.label>s.label?-1:1:e.lij[0]-s.lij[0])}};(0,M._)([(0,O.Cb)({constructOnly:!0})],a.prototype,"lv",void 0),(0,M._)([(0,O.Cb)({constructOnly:!0})],a.prototype,"nodeSR",void 0),a=(0,M._)([(0,u.j)("esri.views.3d.layers.support.I3STreeDebugger")],a);const r=(0,p.c)(),_=(0,i.c)()}}]);