"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[5849],{22498:(k,F,e)=>{e.d(F,{z:()=>v});var a=e(17626),S=(e(29132),e(14517)),P=e(85931),x=e(63290),Z=e(21286),s=e(62208),A=e(32917),h=e(16730),_=e(77712),p=(e(8314),e(90912),e(76898)),n=e(84161),f=e(10410),c=e(55915),T=e(5548),l=e(65401),R=e(94425),M=e(46367),W=e(98624),K=e(42964),N=e(65234);const U=x.Z.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter");let v=class extends S.Z{constructor(t){super(t),this._projectionEngineLoaded=!1}initialize(){(0,A.N1)(()=>(0,s.Wg)(this.viewFilter)?.geometry||(0,s.pC)(this.layerFilter)).then(()=>this.loadAsyncModule(Promise.all([e.e(4918),e.e(4766)]).then(e.bind(e,44766)).then(t=>{this.destroyed||(this._geometryEngine=t,this.applyFilters())})))}get sortedObjectIds(){if((0,s.Wi)(this.viewFilter)||(0,s.Wi)(this.viewFilter.objectIds))return null;const t=new Float64Array(this.viewFilter.objectIds);return t.sort(),t}get parsedWhereClause(){const t=(0,s.pC)(this.viewFilter)?this.viewFilter.where:null;if((0,s.Wi)(t)||!t)return null;try{return f.WhereClause.create(t,this.layerFieldsIndex)}catch(r){U.error(`Failed to parse filter where clause: ${r}`)}return null}addFilters(t,r,d,u){const E=this.sortedObjectIds;(0,s.pC)(E)&&t.push(y=>(0,K.Yb)(E,!0,y)),this.addSqlFilter(t,this.parsedWhereClause);const O=this._layerMaskGeometries,o=this._geometryEngine;if((0,s.pC)(O)&&(0,s.pC)(this.layerFilter)&&(0,s.pC)(o)){const y=this.layerFilter.spatialRelationship;t.push((m,j)=>oe(o,m,j,u,r,d,O,y))}const i=this._viewMaskGeometries;if((0,s.pC)(i)&&(0,s.pC)(this.viewFilter)&&(0,s.pC)(o)){const y=this.viewFilter.spatialRelationship;t.push((m,j)=>oe(o,m,j,u,r,d,i,y))}}isMBSGeometryVisible(t,r,d){const u=this._layerMaskGeometries,E=this._geometryEngine;if((0,s.pC)(u)&&(0,s.pC)(this.layerFilter)&&(0,s.pC)(E)){const o=this.layerFilter.spatialRelationship,i=u[0].spatialReference||r;return(0,c.st)(t,d,Y,i)?ie(E,Y,u,i,o):(U.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const O=this._viewMaskGeometries;if((0,s.pC)(O)&&(0,s.pC)(this.viewFilter)&&(0,s.pC)(E)){const o=this.viewFilter.spatialRelationship,i=O[0].spatialReference||r;return(0,c.st)(t,d,Y,i)?ie(E,Y,O,i,o):(U.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const t=this._viewMaskGeometries,r=this._layerMaskGeometries;return(0,s.Wi)(t)||(0,s.Wi)(r)?t||r:r.concat(t)}get _layerMaskGeometries(){const t=this.layerFilter;return(0,s.Wi)(t)||(0,s.Wi)(this._geometryEngine)?null:q(this._geometryEngine,t.geometry,t.spatialRelationship)}get _viewMaskGeometries(){if((0,s.Wi)(this.viewFilter)||(0,s.Wi)(this._geometryEngine))return null;const{geometry:t}=this.viewFilter;if((0,s.Wi)(t))return null;const{distance:r,units:d}=this.viewFilter,u=this.viewFilter.spatialRelationship,E="mesh"===t.type?t.extent:t;if((0,s.Wi)(r)||0===r)return q(this._geometryEngine,E,u);const O=d||(0,h.qE)(E.spatialReference);if(E.spatialReference.isWGS84){const y=this._geometryEngine.geodesicBuffer(E,r,O);return q(this._geometryEngine,y,u)}const o=(0,M.iV)(E,N.Z.WGS84);if((0,s.pC)(o)){const y=(0,M.iV)(this._geometryEngine.geodesicBuffer(o,r,O),E.spatialReference);return q(this._geometryEngine,y,u)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule((0,c.zD)().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let i=null;try{i=(0,c.iV)(E,N.Z.WGS84)}catch{}if(i)try{i=(0,c.iV)(this._geometryEngine.geodesicBuffer(i,r,O),E.spatialReference)}catch{i=null}return i||U.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${E.spatialReference.wkid}) to WGS84.`),q(this._geometryEngine,i,u)}static checkSupport(t){return!((0,s.Wi)(t)||(t.timeExtent?(U.warn("Filters with a timeExtent are not supported for mesh scene layers"),1):!function ce(t){return null!=t&&ne.includes(t)}(t.spatialRelationship)&&(U.warn(`Filters with spatialRelationship other than ${ne.join(", ")} are not supported for mesh scene layers`),1)))}};(0,a._)([(0,_.Cb)()],v.prototype,"layerFilter",void 0),(0,a._)([(0,_.Cb)({type:W.Z})],v.prototype,"viewFilter",void 0),(0,a._)([(0,_.Cb)()],v.prototype,"layerFieldsIndex",void 0),(0,a._)([(0,_.Cb)()],v.prototype,"loadAsyncModule",void 0),(0,a._)([(0,_.Cb)()],v.prototype,"applyFilters",void 0),(0,a._)([(0,_.Cb)()],v.prototype,"addSqlFilter",void 0),(0,a._)([(0,_.Cb)({readOnly:!0})],v.prototype,"sortedObjectIds",null),(0,a._)([(0,_.Cb)({readOnly:!0})],v.prototype,"parsedWhereClause",null),(0,a._)([(0,_.Cb)({readOnly:!0})],v.prototype,"parsedGeometry",null),(0,a._)([(0,_.Cb)({readOnly:!0})],v.prototype,"_layerMaskGeometries",null),(0,a._)([(0,_.Cb)({readOnly:!0})],v.prototype,"_viewMaskGeometries",null),(0,a._)([(0,_.Cb)()],v.prototype,"_projectionEngineLoaded",void 0),(0,a._)([(0,_.Cb)()],v.prototype,"_geometryEngine",void 0),v=(0,a._)([(0,p.j)("esri.views.3d.layers.i3s.I3SMeshViewFilter")],v);const ne=["contains","intersects","disjoint"];var C,t;function q(t,r,d){if((0,s.Wi)(r))return null;if("disjoint"===d&&"polygon"===r.type){const u=new Array(r.rings.length);for(let o=0;o<r.rings.length;++o){const i=(0,l.al)(1/0,1/0,-1/0,-1/0);(0,l.Wi)(i,r.rings[o]),u[o]={type:"polygon",rings:[r.rings[o]],spatialReference:r.spatialReference,aabr:i}}u.sort((o,i)=>o.aabr[0]-i.aabr[0]);const E=new Set,O=new P.SO;for(let o=0;o<u.length;++o){const i=u[o];for(let y=o+1;y<u.length;++y){const m=u[y];if(m.aabr[0]>=i.aabr[2])break;E.add(m)}E.forEach(y=>{if(i!==y)if(y.aabr[2]<=i.aabr[0])E.delete(y);else if(t.intersects(i,y)){i.rings=i.rings.concat(y.rings),(0,l.jn)(i.aabr,y.aabr,i.aabr),delete i._geVersion,E.delete(y);const m=(0,P.cq)(u,y,u.length,O);u.splice(m,1)}}),E.add(i)}for(const o of u)delete o.aabr;return u}return[r]}function ie(t,r,d,u,E){const O=ae(t,r,u);return d.every(o=>_e(t,o,O,E)!==C.DISCARD)}function oe(t,r,d,u,E,O,o,i){const y=o[0].spatialReference||E.spatialReference;if(!(0,c.st)(d.node.mbs,O,Y,y))return void U.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const m=ae(t,Y,y),j=function ue(t,r,d,u,E){const O=r.renderSpatialReference,o=new Map,i={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:d};i.rings[0][3]=i.rings[0][0];let m,j;switch(t){case"intersects":m=(B,w,$)=>B.intersects(w,$)?C.KEEP:C.TEST,j=ee;break;case"contains":m=(B,w,$)=>B.contains(w,$)?C.TEST:C.DISCARD,j=ee;break;default:m=(B,w,$)=>B.disjoint(w,$)?C.TEST:C.DISCARD,j=le}return{collection:u,object:E,type:t,maskSR:d,renderSR:O,aabbCache:o,triangle:i,positions:{indices:null,data:null,stride:0,startIndex:0,endIndex:0},triangleTest:m,geometryTest:j}}(i,E,y,u,d.objectHandle);for(const B of o){if(0===r.length)return;switch(_e(t,B,m,i)){case C.DISCARD:return void(r.length=0);case C.KEEP:continue}(0,K.hv)(r,d.featureIds,w=>de(t,B,w,j))}}(t=C||(C={}))[t.KEEP=0]="KEEP",t[t.DISCARD=1]="DISCARD",t[t.TEST=2]="TEST";const Y=[0,0,0,0];function ae(t,r,d){const u={x:r[0],y:r[1],hasZ:!1,hasM:!1,type:"point",spatialReference:d},E=!d.isWGS84&&!d.isWebMercator,O=Number.isNaN(r[3])?0:(0,Z.uZ)(r[3],0,2*R.sv.radius),o=E?t.buffer(u,O,1):t.geodesicBuffer(u,O,1);return o.type="polygon",o}function _e(t,r,d,u){switch(u){case"intersects":case"contains":return ee(t,r,d);case"disjoint":return le(t,r,d)}}function ee(t,r,d){return t.intersects(r,d)?t.contains(r,d)?C.KEEP:C.TEST:C.DISCARD}function le(t,r,d){return t.intersects(r,d)?t.contains(r,d)?C.DISCARD:C.TEST:C.KEEP}function de(t,r,d,u){const{collection:E,object:O,renderSR:o,maskSR:i,geometryTest:y,aabbCache:m}=u;let j=m.get(d);if(!j){const z=E.getObjectTransform(O);E.getComponentAabb(O,d,G);const Q=[[G[0],G[1],0],[G[0],G[4],0],[G[3],G[4],0],[G[3],G[1],0]];for(let L=0;L<4;++L)(0,n.t)(Q[L],Q[L],z.rotationScale),(0,n.a)(Q[L],Q[L],z.position),(0,c.SH)(Q[L],o,Q[L],i);j={rings:[Q],hasZ:!1,hasM:!1,type:"polygon",spatialReference:i},j.rings[0][4]=j.rings[0][0],m.set(d,j)}switch(y(t,r,j)){case C.DISCARD:return!1;case C.KEEP:return!0}const{triangle:B,triangleTest:w,positions:$}=u,b=B.rings[0][0],V=B.rings[0][1],J=B.rings[0][2],X=E.getObjectTransform(O);E.getComponentPositions(O,d,$);const{indices:te,data:H,stride:se,startIndex:pe,endIndex:ye}=$;for(let z=pe;z<ye;z+=3){const Q=se*te[z+0],L=se*te[z+1],re=se*te[z+2];if((0,n.s)(b,H[Q+0],H[Q+1],H[Q+2]),(0,n.s)(V,H[L+0],H[L+1],H[L+2]),(0,n.s)(J,H[re+0],H[re+1],H[re+2]),(0,n.t)(b,b,X.rotationScale),(0,n.t)(V,V,X.rotationScale),(0,n.t)(J,J,X.rotationScale),(0,n.a)(b,b,X.position),(0,n.a)(V,V,X.position),(0,n.a)(J,J,X.position),(0,c.SH)(b,o,b,i),(0,c.SH)(V,o,V,i),(0,c.SH)(J,o,J,i),!(Math.abs((V[0]-b[0])*(J[1]-b[1])-(V[1]-b[1])*(J[0]-b[0]))<2.3283064365386963e-10))switch(delete B._geVersion,w(t,r,B)){case C.DISCARD:return!1;case C.KEEP:return!0}}return"intersects"!==u.type}const G=(0,T.Ue)()},94443:(k,F,e)=>{e.d(F,{u:()=>T});var a=e(15861),I=e(17626),S=e(14517),P=e(26584),x=e(72392),Z=e(62208),s=e(77712),D=(e(85931),e(8314),e(90912),e(76898)),g=e(2004),p=e(58175),n=e(17253),f=e(84952);const c=p.q;let T=class extends S.Z{constructor(l){super(l),this._dataQueryEngineInstance=null,this._handles=new x.Z}get defaultQueryJSON(){return new f.Z({outSpatialReference:this.spatialReference}).toJSON()}get dataQueryEngine(){return this._ensureDataQueryEngine()}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null),this._handles&&(this._handles.destroy(),this._handles=null),this._set("layerView",null)}executeQueryForCount(l,R){var M=this;return(0,a.Z)(function*(){return M.dataQueryEngine.executeQueryForCount(M._ensureQueryJSON(l),R)})()}executeQueryForExtent(l,R){var M=this;return(0,a.Z)(function*(){const{count:W,extent:K}=yield M.dataQueryEngine.executeQueryForExtent(M._ensureQueryJSON(l),R);return{count:W,extent:g.Z.fromJSON(K)}})()}executeQueryForIds(l,R){var M=this;return(0,a.Z)(function*(){return M.dataQueryEngine.executeQueryForIds(M._ensureQueryJSON(l),R)})()}executeQuery(l,R){var M=this;return(0,a.Z)(function*(){const W=M._ensureQueryJSON(l);if(W.returnGeometry)throw new P.Z("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(W.returnCentroid)throw new P.Z("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const K=yield M.dataQueryEngine.executeQuery(W,R),N=n.default.fromJSON(K);return N.features.forEach(U=>{U.geometry=null}),N})()}_ensureQueryJSON(l){return(0,Z.Wi)(l)?this.defaultQueryJSON:l.toJSON()}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const l=this.layer.objectIdField||"OBJECTID",M=this.layer.fields.map(v=>v.toJSON()),W=this.layerView.view.resourceController.scheduler,K=this.spatialReference.toJSON();return this._dataQueryEngineInstance=new c({hasZ:!0,hasM:!1,geometryType:"esriGeometryPolygon",fields:M,timeInfo:null,spatialReference:K,objectIdField:l,featureStore:this.spatialIndex,scheduler:W,priority:this.priority}),this._dataQueryEngineInstance}};(0,I._)([(0,s.Cb)({constructOnly:!0})],T.prototype,"layerView",void 0),(0,I._)([(0,s.Cb)({constructOnly:!0})],T.prototype,"priority",void 0),(0,I._)([(0,s.Cb)({constructOnly:!0})],T.prototype,"spatialIndex",void 0),(0,I._)([(0,s.Cb)({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],T.prototype,"spatialReference",void 0),(0,I._)([(0,s.Cb)({readOnly:!0,aliasOf:"layerView.i3slayer"})],T.prototype,"layer",void 0),(0,I._)([(0,s.Cb)({readOnly:!0})],T.prototype,"defaultQueryJSON",null),T=(0,I._)([(0,D.j)("esri.views.3d.layers.i3s.I3SQueryEngine")],T)},72537:(k,F,e)=>{e.d(F,{u:()=>Z});var a=e(62208),I=e(5548),S=e(77044),P=e(88071),x=e(42964);class Z{constructor(h){this.objectIdField=h.objectIdField,this.getFeatureExtent=h.getFeatureExtent}getObjectId(h){return h.id}getAttributes(h){const{meta:_,index:D}=h,g={};this.objectIdField&&(g[this.objectIdField]=h.id);const p=(0,a.pC)(_.attributeInfo)&&_.attributeInfo.attributeData;if((0,a.pC)(p))for(const n of Object.keys(p))g[n]=(0,x.Jx)(p[n],D);return g}getAttribute(h,_){if(_===this.objectIdField)return h.id;const{meta:D,index:g}=h,p=(0,a.pC)(D.attributeInfo)&&D.attributeInfo.attributeData;return(0,a.pC)(p)?(0,x.Jx)(p[_],g):null}getGeometry(h){if(h.geometry)return h.geometry;const[_,D,g,p,n]=this.getFeatureExtent(h,s);return new P.Z([5],[_,D,g,p,D,g,p,n,g,_,n,g,_,D,g])}getCentroid(h,_){if(h.geometry)return(0,S.Y)(new P.Z,h.geometry,_.hasZ,_.hasM);const[D,g,p,n,f,c]=this.getFeatureExtent(h,s);return new P.Z([0],[(D+n)/2,(g+f)/2,(p+c)/2])}cloneWithGeometry(h,_){const{id:D,index:g,meta:p}=h;return{id:D,index:g,meta:p,geometry:_}}}const s=(0,I.Ue)()},41941:(k,F,e)=>{e.d(F,{I:()=>n});var a=e(17626),I=e(14517),S=e(61885),P=e(77712),A=(e(85931),e(8314),e(90912),e(76898)),h=e(4794),_=e(55915),D=e(5548),g=e(65401),p=e(52836);let n=class extends I.Z{constructor(l){super(l),this.events=new S.Z}forEach(l){this.forAllFeatures(R=>(l(R),p.K.CONTINUE))}forEachBounds(l,R,M){const W=this.getFeatureExtent;for(const K of l)R(W(K,M))}forEachInBounds(l,R){this.forAllFeatures(M=>{const W=this.getFeatureExtent(M,c);return(0,g.kK)(l,(0,D.y8)(W,T))&&R(M),p.K.CONTINUE},M=>{if((0,_.st)(M.node.mbs,this.sourceSpatialReference,f,this.viewSpatialReference),f[0]>=l[0]&&f[2]<=l[2]&&f[1]>=l[1]&&f[3]<=l[3])return p.K.CONTINUE;const W=Math.max(l[0],Math.min(f[0],l[2])),K=Math.max(l[1],Math.min(f[1],l[3])),N=f[0]-W,U=f[1]-K;return N*N+U*U<=f[3]*f[3]?p.K.CONTINUE:p.K.SKIP})}};(0,a._)([(0,P.Cb)({constructOnly:!0})],n.prototype,"featureAdapter",void 0),(0,a._)([(0,P.Cb)({constructOnly:!0})],n.prototype,"toArray",void 0),(0,a._)([(0,P.Cb)({constructOnly:!0})],n.prototype,"forAllFeatures",void 0),(0,a._)([(0,P.Cb)({constructOnly:!0})],n.prototype,"getFeatureExtent",void 0),(0,a._)([(0,P.Cb)({constructOnly:!0})],n.prototype,"sourceSpatialReference",void 0),(0,a._)([(0,P.Cb)({constructOnly:!0})],n.prototype,"viewSpatialReference",void 0),n=(0,a._)([(0,A.j)("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],n);const f=(0,h.c)(),c=(0,D.Ue)(),T=(0,g.Ue)()},89476:(k,F,e)=>{e.d(F,{l:()=>D});var a=e(17626),I=e(63290),S=e(77712),s=(e(85931),e(8314),e(90912),e(76898)),A=e(10410),h=e(42964);const _=I.Z.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView"),D=g=>{let p=class extends g{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=n=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&_.error("Error while evaluating definitionExpression: "+n),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&_.error("Further errors are ignored")}}get parsedDefinitionExpression(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{const n=A.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!n.isStandardized)return _.error("definitionExpression is using non standard function"),null;const f=[];return(0,h.e8)(n.fieldNames,this.i3slayer.fields,{missingFields:f}),f.length>0?(_.error(`definitionExpression references unknown fields: ${f.join(", ")}`),null):(this._definitionExpressionErrors=0,n)}catch(n){return _.error("Failed to parse definitionExpression: "+n),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null}_evaluateClause(n,f){try{return n.testFeature(f)}catch(c){return this.logError(c),!1}}_addDefinitionExpressionToQuery(n){if(!this.parsedDefinitionExpression)return n;const f=this.i3slayer.definitionExpression,c=n.clone();return c.where=c.where?`(${f}) AND (${c.where})`:f,c}};return(0,a._)([(0,S.Cb)()],p.prototype,"i3slayer",void 0),(0,a._)([(0,S.Cb)({readOnly:!0})],p.prototype,"parsedDefinitionExpression",null),(0,a._)([(0,S.Cb)({readOnly:!0})],p.prototype,"definitionExpressionFields",null),p=(0,a._)([(0,s.j)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],p),p}},10023:(k,F,e)=>{e.d(F,{V:()=>Z,e:()=>P});var a=e(15861),I=e(62208),S=e(36630);function P(s){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(function*(s,A=s.popupTemplate){if((0,I.Wi)(A))return[];const h=yield A.getRequiredFields(s.fieldsIndex),{lastEditInfoEnabled:_}=A,{objectIdField:D,typeIdField:g,globalIdField:p,relationships:n}=s;if(h.includes("*"))return["*"];const f=_?yield(0,S.CH)(s):[],c=(0,S.Q0)(s.fieldsIndex,[...h,...f]);return g&&c.push(g),c&&D&&s.fieldsIndex.has(D)&&!c.includes(D)&&c.push(D),c&&p&&s.fieldsIndex.has(p)&&!c.includes(p)&&c.push(p),n&&n.forEach(T=>{const{keyField:l}=T;c&&l&&s.fieldsIndex.has(l)&&!c.includes(l)&&c.push(l)}),c})).apply(this,arguments)}function Z(s,A){return s.popupTemplate?s.popupTemplate:(0,I.pC)(A)&&A.defaultPopupTemplateEnabled&&(0,I.pC)(s.defaultPopupTemplate)?s.defaultPopupTemplate:null}}}]);