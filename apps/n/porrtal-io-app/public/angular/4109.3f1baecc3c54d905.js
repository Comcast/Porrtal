"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[4109],{54109:(U,C,o)=>{o.r(C),o.d(C,{SceneLayerSnappingSourceWorker:()=>l,default:()=>T});var g=o(15861),O=o(17626),p=o(62208),v=o(10699),f=(o(63290),o(90912),o(85931),o(8314),o(82255),o(76898)),u=o(84161),c=o(28093),m=o(13777),h=o(97126),D=o(83308),M=o(82274),L=o(51445);let l=class{constructor(){this._idToComponent=new Map,this._components=new M.Z(t=>t.bounds),this._edges=new M.Z(t=>t.bounds),this._tmpLineSegment=(0,m.Ue)(),this._tmpP1=(0,c.c)(),this._tmpP2=(0,c.c)(),this._tmpP3=(0,c.c)(),this.remoteClient=null}fetchCandidates(t,s){var n=this;return(0,g.Z)(function*(){yield Promise.resolve(),(0,v.k_)(s),yield n._ensureEdgeLocations(t,s);const e=[];return n._edges.forEachNeighbor(_=>n._addCandidates(t,_,e),t.bounds),{result:{candidates:e}}})()}_ensureEdgeLocations(t,s){var n=this;return(0,g.Z)(function*(){const e=[];if(n._components.forEachNeighbor(i=>{if((0,p.Wi)(i.info)){const{id:r,uid:d}=i;e.push({id:r,uid:d})}},t.bounds),!e.length)return;const _={components:e},a=yield n.remoteClient.invoke("fetchAllEdgeLocations",_,(0,p.Pt)(s,{}));for(const i of a.components)n._setFetchEdgeLocations(i)})()}add(t){var s=this;return(0,g.Z)(function*(){const n=new j(t.id,t.bounds);return s._idToComponent.set(n.id,n),s._components.add([n]),{result:{}}})()}remove(t){var s=this;return(0,g.Z)(function*(){const n=s._idToComponent.get(t.id);if(n){const e=[];s._edges.forEachNeighbor(_=>{_.component===n&&e.push(_)},n.bounds),s._edges.remove(e),s._components.remove([n]),s._idToComponent.delete(n.id)}return{result:{}}})()}_setFetchEdgeLocations(t){const s=this._idToComponent.get(t.id);if((0,p.Wi)(s)||t.uid!==s.uid)return;const n=L.extractComponentsEdgeLocationsLayout.createView(t.locations),e=new Array(n.count),_=(0,c.c)(),a=(0,c.c)();for(let d=0;d<n.count;d++){const P=(0,h.c)(),E=(0,h.g)(P);n.position0.getVec(d,_),n.position1.getVec(d,a),(0,u.C)(E,E,_,.5),(0,u.C)(E,E,a,.5),(0,u.a)(E,E,t.origin),P[3]=(0,u.i)(E,_);const W=new I(s,d,P);e[d]=W}this._edges.add(e);const{objectIds:i,origin:r}=t;s.info={locations:n,objectIds:i,origin:r}}_addCandidates(t,s,n){const{locations:e,origin:_,objectIds:a}=s.component.info,i=e.position0.getVec(s.index,this._tmpP1),r=e.position1.getVec(s.index,this._tmpP2);(0,u.a)(i,i,_),(0,u.a)(r,r,_);const d=a[e.componentIndex.get(s.index)];this._addEdgeCandidate(t,d,i,r,n),this._addVertexCandidate(t,d,i,n),this._addVertexCandidate(t,d,r,n)}_addEdgeCandidate(t,s,n,e,_){if(!(t.types&D.r.EDGE))return;const a=(0,h.g)(t.bounds),i=(0,m.zk)(n,e,this._tmpLineSegment),r=(0,m.nF)(i,a,this._tmpP3);if(!(0,h.m)(t.bounds,r))return null;_.push({type:"edge",objectId:s,target:(0,c.a)(r),distance:(0,u.i)(a,r),start:(0,c.a)(n),end:(0,c.a)(e)})}_addVertexCandidate(t,s,n,e){if(!(t.types&D.r.VERTEX))return;const _=(0,h.g)(t.bounds);if(!(0,h.m)(t.bounds,n))return null;e.push({type:"vertex",objectId:s,target:(0,c.a)(n),distance:(0,u.i)(_,n)})}};function T(){return new l}l=(0,O._)([(0,f.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],l);let j=(()=>{class t{constructor(n,e){this.id=n,this.bounds=e,this.info=null,this.uid=++t.uid}}return t.uid=0,t})();class I{constructor(s,n,e){this.component=s,this.index=n,this.bounds=e}}}}]);