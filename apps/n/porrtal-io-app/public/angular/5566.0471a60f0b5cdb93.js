"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[5566],{15566:(g,i,t)=>{t.r(i),t.d(i,{FeatureTileTree3DDebugger:()=>s});var a=t(17626),n=(t(29132),t(72392)),l=t(32917),r=t(77712),d=(t(85931),t(8314),t(90912),t(76898)),E=t(17760),c=t(73187),h=t(37118);let s=class extends c.q{constructor(_){super(_),this.watchUpdatingTracking=new E.t,this.handles=new n.Z}initialize(){const{featureTiles:_}=this.view;this.handles.add(_.addClient()),this.watchUpdatingTracking.addOnCollectionChange(()=>_?.tiles,()=>this.update(),l.nn)}destroy(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy()}getTiles(){const _=e=>{const[o,D,T]=e.lij;return h.Z.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(o,D,T))};return this.view.featureTiles.tiles.toArray().sort((e,o)=>e.loadPriority-o.loadPriority).map(e=>({...e,geometry:_(e)}))}};(0,a._)([(0,r.Cb)({readOnly:!0})],s.prototype,"watchUpdatingTracking",void 0),(0,a._)([(0,r.Cb)({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],s.prototype,"updating",void 0),(0,a._)([(0,r.Cb)()],s.prototype,"view",void 0),s=(0,a._)([(0,d.j)("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],s)}}]);