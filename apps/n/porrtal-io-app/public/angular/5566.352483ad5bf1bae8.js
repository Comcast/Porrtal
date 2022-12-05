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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[5566],{15566:(T,i,t)=>{t.r(i),t.d(i,{FeatureTileTree3DDebugger:()=>_});var r=t(17626),n=(t(29132),t(72392)),l=t(32917),a=t(77712),d=(t(85931),t(90912),t(76898)),E=t(17760),c=t(73187),g=t(37118);let _=class extends c.q{constructor(s){super(s),this._watchUpdatingTracking=new E.t,this._handles=new n.Z}get updating(){return this._watchUpdatingTracking?.updating??!1}initialize(){const{featureTiles:s}=this.view;this._handles.add(s.addClient()),this._watchUpdatingTracking.addOnCollectionChange(()=>s?.tiles,()=>this.update(),l.nn)}destroy(){this._handles&&(this._handles.destroy(),this._handles=null),this._watchUpdatingTracking.destroy()}getTiles(){const s=e=>{const[o,h,p]=e.lij;return g.Z.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(o,h,p))};return this.view.featureTiles.tiles.toArray().sort((e,o)=>e.loadPriority-o.loadPriority).map(e=>({...e,geometry:s(e)}))}};(0,r._)([(0,a.Cb)()],_.prototype,"_watchUpdatingTracking",void 0),(0,r._)([(0,a.Cb)()],_.prototype,"updating",null),(0,r._)([(0,a.Cb)()],_.prototype,"view",void 0),_=(0,r._)([(0,d.j)("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],_)}}]);