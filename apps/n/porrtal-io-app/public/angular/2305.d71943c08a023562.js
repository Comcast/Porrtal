"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[2305],{36592:(W,L,h)=>{h.d(L,{Q:()=>I});var p=h(85931),T=h(62208),R=h(77029),P=h(14259);class I{constructor(e=9,t){this.compareMinX=O,this.compareMinY=_,this._toBBox=s=>s,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),m.prune(),d.prune(),B.prune(),b.prune()}all(e){this._all(this.data,e)}search(e,t){let s=this.data;const r=this._toBBox;if(U(e,s))for(m.clear();s;){for(let o=0,a=s.children.length;o<a;o++){const l=s.children[o],y=s.leaf?r(l):l;U(e,y)&&(s.leaf?t(l):C(e,y)?this._all(l,t):m.push(l))}s=m.pop()}}collides(e){let t=this.data;const s=this._toBBox;if(!U(e,t))return!1;for(m.clear();t;){for(let r=0,o=t.children.length;r<o;r++){const a=t.children[r],l=t.leaf?s(a):a;if(U(e,l)){if(t.leaf||C(e,l))return!0;m.push(a)}}t=m.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let s=0,r=e.length;s<r;s++)this.insert(e[s]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const s=this.data;this.data=t,t=s}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new x([]),this}remove(e){if(!e)return this;let t,s=this.data,r=null,o=0,a=!1;const l=this._toBBox(e);for(B.clear(),b.clear();s||B.length>0;){if(s||(s=(0,T.j0)(B.pop()),r=B.data[B.length-1],o=b.pop()??0,a=!0),s.leaf&&(t=(0,p.cq)(s.children,e,s.children.length,s.indexHint),-1!==t))return s.children.splice(t,1),B.push(s),this._condense(B),this;a||s.leaf||!C(s,l)?r?(o++,s=r.children[o],a=!1):s=null:(B.push(s),b.push(o),o=0,r=s,s=s.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let s=e;for(d.clear();s;){if(!0===s.leaf)for(const r of s.children)t(r);else d.pushArray(s.children);s=d.pop()??null}}_build(e,t,s,r){const o=s-t+1;let a=this._maxEntries;if(o<=a){const E=new x(e.slice(t,s+1));return f(E,this._toBBox),E}r||(r=Math.ceil(Math.log(o)/Math.log(a)),a=Math.ceil(o/a**(r-1)));const l=new Y([]);l.height=r;const y=Math.ceil(o/a),v=y*Math.ceil(Math.sqrt(a));u(e,t,s,v,this.compareMinX);for(let E=t;E<=s;E+=v){const j=Math.min(E+v-1,s);u(e,E,j,y,this.compareMinY);for(let X=E;X<=j;X+=y){const Z=Math.min(X+y-1,j);l.children.push(this._build(e,X,Z,r-1))}}return f(l,this._toBBox),l}_chooseSubtree(e,t,s,r){for(;r.push(t),!0!==t.leaf&&r.length-1!==s;){let o,a=1/0,l=1/0;for(let y=0,v=t.children.length;y<v;y++){const E=t.children[y],j=g(E),X=c(e,E)-j;X<l?(l=X,a=j<a?j:a,o=E):X===l&&j<a&&(a=j,o=E)}t=o||t.children[0]}return t}_insert(e,t,s){const o=s?e:(0,this._toBBox)(e);B.clear();const a=this._chooseSubtree(o,this.data,t,B);for(a.children.push(e),A(a,o);t>=0&&B.data[t].children.length>this._maxEntries;)this._split(B,t),t--;this._adjustParentBBoxes(o,B,t)}_split(e,t){const s=e.data[t],r=s.children.length,o=this._minEntries;this._chooseSplitAxis(s,o,r);const a=this._chooseSplitIndex(s,o,r);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const l=s.children.splice(a,s.children.length-a),y=s.leaf?new x(l):new Y(l);y.height=s.height,f(s,this._toBBox),f(y,this._toBBox),t?e.data[t-1].children.push(y):this._splitRoot(s,y)}_splitRoot(e,t){this.data=new Y([e,t]),this.data.height=e.height+1,f(this.data,this._toBBox)}_chooseSplitIndex(e,t,s){let r,o,a;r=o=1/0;for(let l=t;l<=s-t;l++){const y=M(e,0,l,this._toBBox),v=M(e,l,s,this._toBBox),E=D(y,v),j=g(y)+g(v);E<r?(r=E,a=l,o=j<o?j:o):E===r&&j<o&&(o=j,a=l)}return a}_chooseSplitAxis(e,t,s){const r=e.leaf?this.compareMinX:O,o=e.leaf?this.compareMinY:_;this._allDistMargin(e,t,s,r)<this._allDistMargin(e,t,s,o)&&e.children.sort(r)}_allDistMargin(e,t,s,r){e.children.sort(r);const o=this._toBBox,a=M(e,0,t,o),l=M(e,s-t,s,o);let y=i(a)+i(l);for(let v=t;v<s-t;v++){const E=e.children[v];A(a,e.leaf?o(E):E),y+=i(a)}for(let v=s-t-1;v>=t;v--){const E=e.children[v];A(l,e.leaf?o(E):E),y+=i(l)}return y}_adjustParentBBoxes(e,t,s){for(let r=s;r>=0;r--)A(t.data[r],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const s=e.data[t];if(0===s.children.length)if(t>0){const r=e.data[t-1],o=r.children;o.splice((0,p.cq)(o,s,o.length,r.indexHint),1)}else this.clear();else f(s,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function f(n,e){M(n,0,n.children.length,e,n)}function M(n,e,t,s,r){r||(r=new x([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let o,a=e;a<t;a++)o=n.children[a],A(r,n.leaf?s(o):o);return r}function A(n,e){n.minX=Math.min(n.minX,e.minX),n.minY=Math.min(n.minY,e.minY),n.maxX=Math.max(n.maxX,e.maxX),n.maxY=Math.max(n.maxY,e.maxY)}function O(n,e){return n.minX-e.minX}function _(n,e){return n.minY-e.minY}function g(n){return(n.maxX-n.minX)*(n.maxY-n.minY)}function i(n){return n.maxX-n.minX+(n.maxY-n.minY)}function c(n,e){return(Math.max(e.maxX,n.maxX)-Math.min(e.minX,n.minX))*(Math.max(e.maxY,n.maxY)-Math.min(e.minY,n.minY))}function D(n,e){const t=Math.max(n.minX,e.minX),s=Math.max(n.minY,e.minY),r=Math.min(n.maxX,e.maxX),o=Math.min(n.maxY,e.maxY);return Math.max(0,r-t)*Math.max(0,o-s)}function C(n,e){return n.minX<=e.minX&&n.minY<=e.minY&&e.maxX<=n.maxX&&e.maxY<=n.maxY}function U(n,e){return e.minX<=n.maxX&&e.minY<=n.maxY&&e.maxX>=n.minX&&e.maxY>=n.minY}function u(n,e,t,s,r){const o=[e,t];for(;o.length;){const a=(0,T.j0)(o.pop()),l=(0,T.j0)(o.pop());if(a-l<=s)continue;const y=l+Math.ceil((a-l)/s/2)*s;(0,P.q)(n,y,l,a,r),o.push(l,y,y,a)}}const m=new R.Z,d=new R.Z,B=new R.Z,b=new R.Z({deallocator:void 0});class F extends class S{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new p.SO}}class x extends F{constructor(e){super(),this.children=e,this.leaf=!0}}class Y extends F{constructor(e){super(),this.children=e,this.leaf=!1}}},61256:(W,L,h)=>{h.d(L,{H:()=>A});var p=h(8314),T=h(36592),R=h(65401);const I={minX:0,minY:0,maxX:0,maxY:0};class A{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new T.Q(9,(0,p.Z)("esri-csp-restrictions")?_=>({minX:_[0],minY:_[1],maxX:_[2],maxY:_[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const _=new Array(this._idByBounds.size);let g=0;this._idByBounds.forEach((i,c)=>{_[g++]=c}),this._indexInvalid=!1,this._index.clear(),this._index.load(_)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(_=>this._idByBounds.has(_))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const _=(0,R.cS)();for(const g of this._boundsById.values())g&&(_[0]=Math.min(g[0],_[0]),_[1]=Math.min(g[1],_[1]),_[2]=Math.max(g[2],_[2]),_[3]=Math.max(g[3],_[3]));return _}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(_){const g=this._boundsById.get(_);this._boundsById.delete(_),g&&(this._idByBounds.delete(g),this._indexInvalid||this._index.remove(g))}forEachInBounds(_,g){this._loadIndex(),function M(O,_,g){(function f(O){I.minX=O[0],I.minY=O[1],I.maxX=O[2],I.maxY=O[3]})(_),O.search(I,g)}(this._index,_,i=>g(this._idByBounds.get(i)))}get(_){return this._boundsById.get(_)}has(_){return this._boundsById.has(_)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(_,g){if(!this._indexInvalid){const i=this._boundsById.get(_);i&&(this._index.remove(i),this._idByBounds.delete(i))}this._boundsById.set(_,g),g&&(this._idByBounds.set(g,_),this._indexInvalid||(this._boundsToLoad.push(g),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},3579:(W,L,h)=>{h.d(L,{Z:()=>_});var p=h(26584),T=h(61885),R=h(63290),P=h(62208),I=h(5548),f=h(65401),M=h(82054),A=h(61256),O=h(92794);class _{constructor(i){this.geometryInfo=i,this._boundsStore=new A.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new T.Z,this.featureAdapter=O.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let i=0;return this._featuresById.forEach(c=>{(0,P.pC)(c.geometry)&&c.geometry.coords&&(i+=c.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:i/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(i){this._add(i),this._emitChanged()}addMany(i){for(const c of i)this._add(c);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(i){const c=this._featuresById.get(i);return c?(this._remove(c),this._emitChanged(),c):null}removeManyById(i){this._boundsStore.invalidateIndex();for(const c of i){const D=this._featuresById.get(c);D&&this._remove(D)}this._emitChanged()}forEachBounds(i,c,D){for(const C of i){const U=this._boundsStore.get(C.objectId);U&&c((0,I.JR)(D,U))}}getFeature(i){return this._featuresById.get(i)}has(i){return this._featuresById.has(i)}toArray(){return Array.from(this._featuresById.values())}forEach(i){this._featuresById.forEach(c=>i(c))}forEachInBounds(i,c){this._boundsStore.forEachInBounds(i,D=>{c(this._featuresById.get(D))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let i=!1;this._featuresById.forEach((c,D)=>{this._markedIds.has(D)||(i=!0,this._remove(c))}),this._markedIds.clear(),i&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(i){if(!i)return;const c=i.objectId;if(null==c)return void R.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new p.Z("featurestore:invalid-feature","feature id is missing",{feature:i}));const D=this._featuresById.get(c);let C;if(this._markedIds.add(c),D?(i.displayId=D.displayId,C=this._boundsStore.get(c),this._boundsStore.delete(c)):(0,P.pC)(this.onFeatureAdd)&&this.onFeatureAdd(i),(0,P.Wi)(i.geometry)||!i.geometry.coords||!i.geometry.coords.length)return this._boundsStore.set(c,null),void this._featuresById.set(c,i);C=(0,M.$)((0,P.pC)(C)?C:(0,f.Ue)(),i.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,P.pC)(C)&&this._boundsStore.set(c,C),this._featuresById.set(c,i)}_remove(i){return(0,P.pC)(this.onFeatureRemove)&&this.onFeatureRemove(i),this._markedIds.delete(i.objectId),this._boundsStore.delete(i.objectId),this._featuresById.delete(i.objectId),i}}},92794:(W,L,h)=>{h.d(L,{n:()=>I});var p=h(62208),T=h(77044),R=h(66385),P=h(88071);const I={getObjectId:f=>f.objectId,getAttributes:f=>f.attributes,getAttribute:(f,M)=>f.attributes[M],cloneWithGeometry:(f,M)=>new R.u_(M,f.attributes,null,f.objectId),getGeometry:f=>f.geometry,getCentroid:(f,M)=>((0,p.Wi)(f.centroid)&&(f.centroid=(0,T.Y)(new P.Z,f.geometry,M.hasZ,M.hasM)),f.centroid)}},62305:(W,L,h)=>{h.r(L),h.d(L,{default:()=>C});var p=h(15861),T=h(26584),R=h(63290),P=h(62208),I=h(10699),f=h(37053),M=h(82054),A=h(3579),O=h(82959),_=h(58175),g=h(58775),i=h(35775),c=h(83774),D=h(60466);class C{constructor(){var u=this;this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=function(){var m=(0,p.Z)(function*(d){const{objectIdField:B}=u._queryEngine,b=yield(0,c.Bm)(u._getFeatureUrl,u._featureType.typeName,u._getFeatureOutputFormat,{customParameters:u._customParameters,dateFields:u._queryEngine.fieldsIndex.dateFields.map(x=>x.name),signal:d});yield(0,g.O3)(b),(0,I.k_)(d);const S=(0,g.lG)(b,{geometryType:u._queryEngine.geometryType,hasZ:!1,objectIdField:B});if(!(0,f.fS)(u._queryEngine.spatialReference,f.Zn))for(const x of S)(0,P.pC)(x.geometry)&&(x.geometry=(0,M.GH)((0,O.iV)((0,M.di)(x.geometry,u._queryEngine.geometryType,!1,!1),f.Zn,u._queryEngine.spatialReference)));let F=1;for(const x of S){const Y={};(0,i.O0)(u._fieldsIndex,Y,x.attributes,!0),x.attributes=Y,null==x.attributes[B]&&(x.objectId=x.attributes[B]=F++)}return S});return function(d){return m.apply(this,arguments)}}()}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}load(u,m){var d=this;return(0,p.Z)(function*(){const{getFeatureUrl:B,getFeatureOutputFormat:b,spatialReference:S,fields:F,geometryType:x,featureType:Y,objectIdField:n,customParameters:e}=u;d._featureType=Y,d._customParameters=e,d._getFeatureUrl=B,d._getFeatureOutputFormat=b,d._fieldsIndex=new D.Z(F),yield d._checkProjection(S),(0,I.k_)(m),d._queryEngine=new _.q({fields:F,geometryType:x,hasM:!1,hasZ:!1,objectIdField:n,spatialReference:S,timeInfo:null,featureStore:new A.Z({geometryType:x,hasM:!1,hasZ:!1})});const t=yield d._snapshotFeatures((0,P.Wg)(m.signal));return d._queryEngine.featureStore.addMany(t),{extent:d._queryEngine.fullExtent}})()}applyEdits(){return(0,p.Z)(function*(){throw new T.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")})()}queryFeatures(u={},m={}){var d=this;return(0,p.Z)(function*(){return yield d._waitSnapshotComplete(),d._queryEngine.executeQuery(u,m.signal)})()}queryFeatureCount(u={},m={}){var d=this;return(0,p.Z)(function*(){return yield d._waitSnapshotComplete(),d._queryEngine.executeQueryForCount(u,m.signal)})()}queryObjectIds(u={},m={}){var d=this;return(0,p.Z)(function*(){return yield d._waitSnapshotComplete(),d._queryEngine.executeQueryForIds(u,m.signal)})()}queryExtent(u={},m={}){var d=this;return(0,p.Z)(function*(){return yield d._waitSnapshotComplete(),d._queryEngine.executeQueryForExtent(u,m.signal)})()}querySnapping(u,m={}){var d=this;return(0,p.Z)(function*(){return yield d._waitSnapshotComplete(),d._queryEngine.executeQueryForSnapping(u,m.signal)})()}refresh(u){var m=this;return(0,p.Z)(function*(){return m._customParameters=u,m._snapshotTask?.abort(),m._snapshotTask=(0,I.vr)(m._snapshotFeatures),m._snapshotTask.promise.then(d=>{m._queryEngine.featureStore.clear(),d&&m._queryEngine.featureStore.addMany(d)},d=>{m._queryEngine.featureStore.clear(),(0,I.D_)(d)||R.Z.getLogger("esri.layers.WFSLayer").error(new T.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:d}))}),yield m._waitSnapshotComplete(),{extent:m._queryEngine.fullExtent}})()}_waitSnapshotComplete(){var u=this;return(0,p.Z)(function*(){if(u._snapshotTask&&!u._snapshotTask.finished){try{yield u._snapshotTask.promise}catch{}return u._waitSnapshotComplete()}})()}_checkProjection(u){return(0,p.Z)(function*(){try{yield(0,O._W)(f.Zn,u)}catch{throw new T.Z("unsupported-projection","Projection not supported",{spatialReference:u})}})()}}}}]);