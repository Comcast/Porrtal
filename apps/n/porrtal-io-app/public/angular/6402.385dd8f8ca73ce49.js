"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[6402,7777,4766],{51819:(ne,L,_)=>{_.d(L,{RN:()=>Y,e9:()=>x,hU:()=>G,uu:()=>F});var a=_(91558),m=_(59318),y=_(85453);function v(f,C){const j=f.a*C;return(0,y.EX)(f)>225?new a.Z([0,0,0,j]):new a.Z([255,255,255,j])}function U(f,C){const j=new a.Z(f);return j.a*=C,j}function x(f=1){return U(m.Z.analysisTheme.accentColor,f)}function Y(f=1){return v(x(),f)}function F(f=1){return U(m.Z.analysisTheme.textColor,f)}function G(f=1){return v(F(),f)}},77777:(ne,L,_)=>{_.r(L),_.d(L,{hydratedAdapter:()=>x});var a=_(2004),m=_(72854),y=_(72642),v=_(37118),U=_(55214);const x={convertToGEGeometry:function Y(R,i){if(null==i)return null;let g="cache"in i?i.cache._geVersion:void 0;return null==g&&(g=R.convertJSONToGeometry(i),"cache"in i&&(i.cache._geVersion=g)),g},exportPoint:function F(R,i,g){const p=R.hasZ(i),w=R.hasM(i),W=new y.Z({x:R.getPointX(i),y:R.getPointY(i),spatialReference:g});return p&&(W.z=R.getPointZ(i)),w&&(W.m=R.getPointM(i)),W.cache._geVersion=i,W},exportPolygon:function G(R,i,g){const p=new v.Z({rings:R.exportPaths(i),hasZ:R.hasZ(i),hasM:R.hasM(i),spatialReference:g});return p.cache._geVersion=i,p},exportPolyline:function f(R,i,g){const p=new U.Z({paths:R.exportPaths(i),hasZ:R.hasZ(i),hasM:R.hasM(i),spatialReference:g});return p.cache._geVersion=i,p},exportMultipoint:function C(R,i,g){const p=new m.Z({hasZ:R.hasZ(i),hasM:R.hasM(i),points:R.exportPoints(i),spatialReference:g});return p.cache._geVersion=i,p},exportExtent:function j(R,i,g){const p=R.hasZ(i),w=R.hasM(i),W=new a.Z({xmin:R.getXMin(i),ymin:R.getYMin(i),xmax:R.getXMax(i),ymax:R.getYMax(i),spatialReference:g});if(p){const O=R.getZExtent(i);W.zmin=O.vmin,W.zmax=O.vmax}if(w){const O=R.getMExtent(i);W.mmin=O.vmin,W.mmax=O.vmax}return W.cache._geVersion=i,W}}},44766:(ne,L,_)=>{_.r(L),_.d(L,{buffer:()=>l,changeDefaultSpatialReferenceTolerance:()=>re,clearDefaultSpatialReferenceTolerance:()=>ee,clip:()=>U,contains:()=>Y,convexHull:()=>O,crosses:()=>F,cut:()=>x,densify:()=>H,difference:()=>N,disjoint:()=>i,distance:()=>G,equals:()=>f,extendedSpatialReferenceInfo:()=>v,flipHorizontal:()=>B,flipVertical:()=>S,generalize:()=>V,geodesicArea:()=>te,geodesicBuffer:()=>M,geodesicDensify:()=>K,geodesicLength:()=>k,intersect:()=>d,intersectLinesToPoints:()=>J,intersects:()=>C,isSimple:()=>w,nearestCoordinate:()=>A,nearestVertex:()=>b,nearestVertices:()=>P,offset:()=>T,overlaps:()=>g,planarArea:()=>X,planarLength:()=>$,relate:()=>p,rotate:()=>Z,simplify:()=>W,symmetricDifference:()=>Q,touches:()=>j,union:()=>E,within:()=>R});var a=_(4918),m=_(77777);function y(s){return Array.isArray(s)?s[0].spatialReference:s&&s.spatialReference}function v(s){return a.G.extendedSpatialReferenceInfo(s)}function U(s,u){return a.G.clip(m.hydratedAdapter,y(s),s,u)}function x(s,u){return a.G.cut(m.hydratedAdapter,y(s),s,u)}function Y(s,u){return a.G.contains(m.hydratedAdapter,y(s),s,u)}function F(s,u){return a.G.crosses(m.hydratedAdapter,y(s),s,u)}function G(s,u,D){return a.G.distance(m.hydratedAdapter,y(s),s,u,D)}function f(s,u){return a.G.equals(m.hydratedAdapter,y(s),s,u)}function C(s,u){return a.G.intersects(m.hydratedAdapter,y(s),s,u)}function j(s,u){return a.G.touches(m.hydratedAdapter,y(s),s,u)}function R(s,u){return a.G.within(m.hydratedAdapter,y(s),s,u)}function i(s,u){return a.G.disjoint(m.hydratedAdapter,y(s),s,u)}function g(s,u){return a.G.overlaps(m.hydratedAdapter,y(s),s,u)}function p(s,u,D){return a.G.relate(m.hydratedAdapter,y(s),s,u,D)}function w(s){return a.G.isSimple(m.hydratedAdapter,y(s),s)}function W(s){return a.G.simplify(m.hydratedAdapter,y(s),s)}function O(s,u=!1){return a.G.convexHull(m.hydratedAdapter,y(s),s,u)}function N(s,u){return a.G.difference(m.hydratedAdapter,y(s),s,u)}function Q(s,u){return a.G.symmetricDifference(m.hydratedAdapter,y(s),s,u)}function d(s,u){return a.G.intersect(m.hydratedAdapter,y(s),s,u)}function E(s,u=null){return a.G.union(m.hydratedAdapter,y(s),s,u)}function T(s,u,D,z,ie,q){return a.G.offset(m.hydratedAdapter,y(s),s,u,D,z,ie,q)}function l(s,u,D,z=!1){return a.G.buffer(m.hydratedAdapter,y(s),s,u,D,z)}function M(s,u,D,z,ie,q){return a.G.geodesicBuffer(m.hydratedAdapter,y(s),s,u,D,z,ie,q)}function A(s,u,D=!0){return a.G.nearestCoordinate(m.hydratedAdapter,y(s),s,u,D)}function b(s,u){return a.G.nearestVertex(m.hydratedAdapter,y(s),s,u)}function P(s,u,D,z){return a.G.nearestVertices(m.hydratedAdapter,y(s),s,u,D,z)}function I(s){return"xmin"in s?"center"in s?s.center:null:"x"in s?s:"extent"in s?s.extent?.center??null:null}function Z(s,u,D){if(null==s)throw new ae;const z=s.spatialReference;if(null==(D=D??I(s)))throw new ae;const ie=s.constructor.fromJSON(a.G.rotate(s,u,D));return ie.spatialReference=z,ie}function B(s,u){if(null==s)throw new ae;const D=s.spatialReference;if(null==(u=u??I(s)))throw new ae;const z=s.constructor.fromJSON(a.G.flipHorizontal(s,u));return z.spatialReference=D,z}function S(s,u){if(null==s)throw new ae;const D=s.spatialReference;if(null==(u=u??I(s)))throw new ae;const z=s.constructor.fromJSON(a.G.flipVertical(s,u));return z.spatialReference=D,z}function V(s,u,D,z){return a.G.generalize(m.hydratedAdapter,y(s),s,u,D,z)}function H(s,u,D){return a.G.densify(m.hydratedAdapter,y(s),s,u,D)}function K(s,u,D,z=0){return a.G.geodesicDensify(m.hydratedAdapter,y(s),s,u,D,z)}function X(s,u){return a.G.planarArea(m.hydratedAdapter,y(s),s,u)}function $(s,u){return a.G.planarLength(m.hydratedAdapter,y(s),s,u)}function te(s,u,D){return a.G.geodesicArea(m.hydratedAdapter,y(s),s,u,D)}function k(s,u,D){return a.G.geodesicLength(m.hydratedAdapter,y(s),s,u,D)}function J(s,u){return a.G.intersectLinesToPoints(m.hydratedAdapter,y(s),s,u)}function re(s,u){a.G.changeDefaultSpatialReferenceTolerance(s,u)}function ee(s){a.G.clearDefaultSpatialReferenceTolerance(s)}class ae extends Error{constructor(){super("Illegal Argument Exception")}}},10049:(ne,L,_)=>{_.d(L,{Gb:()=>p,Jf:()=>W,_q:()=>N,cA:()=>d}),_(29132);var m=_(26584),y=_(16730),v=_(37299),U=_(37053),G=(_(55214),_(37118),_(72642),_(65234));function f(l){if(!l)return null;if((0,U.sT)(l)&&l.wkid){const M=v.Dg[l.wkid];if(M)return M}if(l.wkt){const M=function C(l){const M=v.yB.exec(l);if(!M||2!==M.length)return null;const A=M[1].split(",");if(!A||A.length<3)return null;const b=parseFloat(A[1]),P=parseFloat(A[2]);return isNaN(b)||isNaN(P)?null:{a:b,f:0===P?0:1/P}}(l.wkt);if(M)return M}return null}function p(l){return null!==f(l)}function W(l,M="meters"){if(!l)throw new m.Z("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(l.some(b=>!p(b.spatialReference)))throw new m.Z("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const A=[];for(let b=0;b<l.length;b++){const P=l[b],{spatialReference:I}=P,Z="polyline"===P.type?P.paths:P.rings;let B=0;for(let S=0;S<Z.length;S++){const V=Z[S];let H=0;for(let K=1;K<V.length;K++){const X=V[K-1][0],$=V[K][0],te=V[K-1][1],k=V[K][1];if(te!==k||X!==$){const J=new N;d(J,[X,te],[$,k],I),H+=J.distance}}B+=H}B=(0,y.En)(B,"meters",M),A.push(B)}return A}class N{constructor(M=0,A,b){this.distance=M,this.azimuth=A,this.reverseAzimuth=b}}function d(l,M,A,b){const P=M[0]*v.Yr,I=M[1]*v.Yr,Z=A[0]*v.Yr,B=A[1]*v.Yr,{a:S,b:V,f:H,radius:K}=function j(l){const M=f(l??G.Z.WGS84);if(function R(l){return null!=l&&"b"in l&&"eSq"in l&&"radius"in l}(M))return M;const A=M.a*(1-M.f);return Object.assign(M,{b:A,eSq:1-(A/M.a)**2,radius:(2*M.a+A)/3,densificationRatio:1e4/((2*M.a+A)/3)})}(b),X=Z-P,$=Math.atan((1-H)*Math.tan(I)),te=Math.atan((1-H)*Math.tan(B)),k=Math.sin($),J=Math.cos($),re=Math.sin(te),ee=Math.cos(te);let ae,s,u,D,z,ie,q,le,se,he,_e=1e3,oe=X;do{if(q=Math.sin(oe),le=Math.cos(oe),u=Math.sqrt(ee*q*(ee*q)+(J*re-k*ee*le)*(J*re-k*ee*le)),0===u)return l.distance=0,l.azimuth=void 0,l.reverseAzimuth=void 0,l;z=k*re+J*ee*le,ie=Math.atan2(u,z),se=J*ee*q/u,s=1-se*se,D=z-2*k*re/s,isNaN(D)&&(D=0),he=H/16*s*(4+H*(4-3*s)),ae=oe,oe=X+(1-he)*H*se*(ie+he*u*(D+he*z*(2*D*D-1)))}while(Math.abs(oe-ae)>1e-12&&--_e>0);if(0===_e){const me=K,Ee=Math.acos(Math.sin(I)*Math.sin(B)+Math.cos(I)*Math.cos(B)*Math.cos(Z-P))*me,ge=Z-P,Me=Math.sin(ge)*Math.cos(B),ye=Math.cos(I)*Math.sin(B)-Math.sin(I)*Math.cos(B)*Math.cos(ge),ve=Math.atan2(Me,ye);return l.azimuth=ve/v.Yr,l.distance=Ee,l.reverseAzimuth=void 0,l}const ce=s*(S*S-V*V)/(V*V),ue=ce/1024*(256+ce*(ce*(74-47*ce)-128)),fe=V*(1+ce/16384*(4096+ce*(ce*(320-175*ce)-768)))*(ie-ue*u*(D+ue/4*(z*(2*D*D-1)-ue/6*D*(4*u*u-3)*(4*D*D-3)))),de=Math.atan2(ee*Math.sin(oe),J*re-k*ee*Math.cos(oe)),pe=Math.atan2(J*Math.sin(oe),J*re*Math.cos(oe)-k*ee);return l.azimuth=de/v.Yr,l.distance=fe,l.reverseAzimuth=pe/v.Yr,l}},39691:(ne,L,_)=>{_.d(L,{Y:()=>m});var a=_(16730);const m={readOnly:!0,get(){return(0,a.RG)(this.view)}}},60507:(ne,L,_)=>{_.d(L,{BK:()=>Q,Jn:()=>Y,RL:()=>G,VW:()=>x,W_:()=>W,jG:()=>O,tq:()=>p,vQ:()=>R,zx:()=>i});var a=_(62208),m=_(29505);function y(d){return d?O:N}function x(d,E){return function v(d,E){return(0,a.Wi)(E)||!E.mode?y(d).mode:E.mode}(!!(0,a.pC)(d)&&d.hasZ,E)}function Y(d,E){return function U(d,E){return(0,a.pC)(E)?E:y(d)}(!!(0,a.pC)(d)&&d.hasZ,E)}function G(d){const E=function C(d){return d.layer&&"elevationInfo"in d.layer?d.layer.elevationInfo:null}(d),T=x(d.geometry,E);return{mode:T,offset:(0,a.pC)(E)&&"on-the-ground"!==T?(0,a.Pt)(E.offset,0)*(0,m.Z7)((0,a.Pt)(E.unit,"meters")):0}}function R(d,E,T,l=null){return g(d,E.x,E.y,E.hasZ?E.z:0,E.spatialReference,T,l)}function i(d,E,T,l,M=null){return g(d,E[0],E[1],E.length>2?E[2]:0,T,l,M)}function g(d,E,T,l,M,A,b=null){if((0,a.Wi)(A))return;const P=(0,a.pC)(b)?b.mode:"absolute-height";if("on-the-ground"===P)return 0;const{absoluteZ:I}=p(E,T,l,M,d,A);return function w(d,E,T,l,M,A,b,P){const I=(0,a.pC)(b)&&(0,a.pC)(b.offset)?b.offset:0;switch(P){case"absolute-height":return d-I;case"relative-to-ground":return d-((0,a.Pt)(A.elevationProvider.getElevation(E,T,l,M,"ground"),0)+I);case"relative-to-scene":return d-((0,a.Pt)(A.elevationProvider.getElevation(E,T,l,M,"scene"),0)+I)}}(I,E,T,l,M,d,b,P)}function p(d,E,T,l,M,A){const b=(0,a.pC)(A.offset)?A.offset:0;switch(A.mode){case"absolute-height":return{absoluteZ:T+b,elevation:0};case"on-the-ground":{const P=(0,a.Pt)(M.elevationProvider.getElevation(d,E,0,l,"ground"),0);return{absoluteZ:P,elevation:P}}case"relative-to-ground":{const P=(0,a.Pt)(M.elevationProvider.getElevation(d,E,T,l,"ground"),0);return{absoluteZ:T+P+b,elevation:P}}case"relative-to-scene":{const P=(0,a.Pt)(M.elevationProvider.getElevation(d,E,T,l,"scene"),0);return{absoluteZ:T+P+b,elevation:P}}}}function W(d,E){if((0,a.Wi)(E))return!1;const{mode:T}=E;return(0,a.pC)(T)&&("scene"===d&&"relative-to-scene"===T||"ground"===d&&"absolute-height"!==T)}const O={mode:"absolute-height",offset:0},N={mode:"on-the-ground",offset:null};function Q(d,E){return d===E||(0,a.pC)(d)&&(0,a.pC)(E)&&d.mode===E.mode&&d.offset===E.offset}},1437:(ne,L,_)=>{_.d(L,{p:()=>G});var a=_(17626),m=_(54024),y=_(62208),v=_(60330),U=_(77712),F=(_(85931),_(90912),_(76898));const G=f=>{let C=class extends((0,v.v)(f)){constructor(){super(...arguments),this.parent=null,this._userInteractive=!1,this._interactiveViewModelCount=0}get interactive(){return this._interactiveViewModelCount>0||this._userInteractive}set interactive(j){this._userInteractive=j}get updating(){return!1}get visible(){return!(0,y.pC)(this.parent)||this.parent.visible&&!this.parent.suspended}set visible(j){this._overrideIfSome("visible",j)}forceInteractiveForViewModel(){return this._interactiveViewModelCount++,(0,m.kB)(()=>this._interactiveViewModelCount--)}};return(0,a._)([(0,U.Cb)({readOnly:!0})],C.prototype,"type",void 0),(0,a._)([(0,U.Cb)({constructOnly:!0})],C.prototype,"analysis",void 0),(0,a._)([(0,U.Cb)({constructOnly:!0})],C.prototype,"parent",void 0),(0,a._)([(0,U.Cb)({constructOnly:!0})],C.prototype,"view",void 0),(0,a._)([(0,U.Cb)({type:Boolean})],C.prototype,"interactive",null),(0,a._)([(0,U.Cb)()],C.prototype,"_userInteractive",void 0),(0,a._)([(0,U.Cb)({readOnly:!0})],C.prototype,"updating",null),(0,a._)([(0,U.Cb)()],C.prototype,"visible",null),(0,a._)([(0,U.Cb)()],C.prototype,"_interactiveViewModelCount",void 0),C=(0,a._)([(0,F.j)("esri.views.3d.analysis.AnalysisView3D")],C),C}},74554:(ne,L,_)=>{var a,m;_.d(L,{e:()=>a}),(m=a||(a={}))[m.Auto=0]="Auto",m[m.Euclidean=1]="Euclidean",m[m.Geodesic=2]="Geodesic"},68:(ne,L,_)=>{_.d(L,{D:()=>m});var a=_(16730);class m{constructor(v=null){this.spatialReference=v}get spatialReference(){return this._spatialReference}set spatialReference(v){v!==this._spatialReference&&(this._spatialReference=v,this._updateNormalizationFactors())}normalizeDistance(v){return v*this._metersPerDistanceUnit}normalizeElevation(v){return v*this._metersPerElevationUnit}normalizeArea(v){return v*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=(0,a.c9)(this._spatialReference,1),this._metersPerElevationUnit=(0,a.c9)(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}},54865:(ne,L,_)=>{_.d(L,{G:()=>v,e:()=>U});var a=_(62208),m=_(55915),y=_(53929);function v(x,Y,F,G=!1){const f=(0,m.fM)(x,Y);return(0,a.Wi)(f)?null:(f.hasZ&&!G||!(0,a.pC)(F)||(f.z=(0,a.Pt)((0,y.KO)(F,f),0)),f)}function U(x,Y,F){F.warnOnce(`Failed to project analysis geometry (id: '${x.id}'), projection from spatial reference (wkid: '${Y.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}},495:(ne,L,_)=>{_.d(L,{H:()=>v,c:()=>U});var a=_(23841),m=_(67831),y=_(84161);function v(f,C){if((0,y.s)(C,0,0,0),f.length>0){for(let j=0;j<f.length;++j)(0,y.a)(C,C,f[j]);(0,y.g)(C,C,1/f.length)}}function U(f,C,j,R){R.projectToRenderScreen(f,x),R.projectToRenderScreen(C,F),(0,m.a)(j,G,Y),(0,m.f)(j,j)}const x=(0,a.J$)(),Y=x,F=(0,a.J$)(),G=F},87469:(ne,L,_)=>{_.d(L,{r:()=>C});var a=_(62208),m=_(28347),y=_(43703),v=_(84161),U=_(28093),x=_(67709),Y=_(53928),F=_(79020),G=_(40723),f=_(92222);class C extends Y._{constructor(i,g){super(i),this._hasExternalMaterial=!1,this._renderOccluded=G.yD.OccludeAndTransparent,this._width=1,this._color=(0,x.f)(1,0,1,1),this._innerWidth=1,this._innerColor=null,this._stipplePattern=null,this._stippleOffColor=null,this._stipplePreferContinuous=!0,this._writeDepthEnabled=!0,this._falloff=0,this._polygonOffset=!1,this._material=g,this._hasExternalMaterial=(0,a.pC)(g),this.applyProps(i)}setGeometryFromRenderSpacePoint(i,g=1e3){const p=[];p.push([[i[0]-g,i[1]+0,i[2]+0],[i[0]+g,i[1]+0,i[2]+0]]),p.push([[i[0]-0,i[1]-g,i[2]+0],[i[0]+0,i[1]+g,i[2]+0]]),p.push([[i[0]-0,i[1]+0,i[2]-g],[i[0]+0,i[1]+0,i[2]+g]]),this.geometry=p}setGeometryFromExtent(i){const g=this.view.spatialReference,p=(0,U.c)(),w=(0,U.c)(),W=100,O=[];(0,v.s)(p,i[0],i[1],W),this.view.renderCoordsHelper.toRenderCoords(p,g,w),O.push([w[0],w[1],w[2]]),(0,v.s)(p,i[2],i[1],W),this.view.renderCoordsHelper.toRenderCoords(p,g,w),O.push([w[0],w[1],w[2]]),(0,v.s)(p,i[2],i[3],W),this.view.renderCoordsHelper.toRenderCoords(p,g,w),O.push([w[0],w[1],w[2]]),(0,v.s)(p,i[0],i[3],W),this.view.renderCoordsHelper.toRenderCoords(p,g,w),O.push([w[0],w[1],w[2]]),(0,v.s)(p,i[0],i[1],W),this.view.renderCoordsHelper.toRenderCoords(p,g,w),O.push([w[0],w[1],w[2]]),(0,v.s)(p,i[0],i[1],W),this.view.renderCoordsHelper.toRenderCoords(p,g,w),O.push([w[0],w[1],w[2]]),this.geometry=[O]}setGeometryFromFrustum(i){const g=[];i.lines.forEach(p=>{g.push([p.origin[0],p.origin[1],p.origin[2]]),g.push([p.endpoint[0],p.endpoint[1],p.endpoint[2]])}),this.geometry=[g]}setGeometryFromBoundedPlane(i){const g=[],p=i.origin,w=i.basis1,W=i.basis2,O=.5,N=(0,U.c)(),Q=(0,U.c)(),d=(0,U.c)(),E=(0,U.c)();N[0]=p[0]-w[0]*O-W[0]*O,N[1]=p[1]-w[1]*O-W[1]*O,N[2]=p[2]-w[2]*O-W[2]*O,Q[0]=p[0]-w[0]*O+W[0]*O,Q[1]=p[1]-w[1]*O+W[1]*O,Q[2]=p[2]-w[2]*O+W[2]*O,d[0]=p[0]+w[0]*O+W[0]*O,d[1]=p[1]+w[1]*O+W[1]*O,d[2]=p[2]+w[2]*O+W[2]*O,E[0]=p[0]+w[0]*O-W[0]*O,E[1]=p[1]+w[1]*O-W[1]*O,E[2]=p[2]+w[2]*O-W[2]*O,g.push([N[0],N[1],N[2]]),g.push([Q[0],Q[1],Q[2]]),g.push([d[0],d[1],d[2]]),g.push([E[0],E[1],E[2]]),g.push([N[0],N[1],N[2]]),this.geometry=[g]}setGeometryFromSegment(i){const g=i.endRenderSpace;this.transform=(0,m.f)(j,g);const{points:p}=i.createRenderGeometry(g,this.view.renderCoordsHelper);this.geometry=[p]}setGeometryFromSegments(i,g=U.Z){this.transform=(0,m.f)(j,g),this.geometry=i.map(p=>p.createRenderGeometry(g,this.view.renderCoordsHelper).points)}getTransformedGeometry(){return(0,a.Wi)(this._geometry)?null:this._geometry.map(i=>i.map(g=>(0,v.m)((0,U.c)(),g,this.transform)))}get renderOccluded(){return(0,a.pC)(this._material)?this._material.parameters.renderOccluded:this._renderOccluded}set renderOccluded(i){this._renderOccluded=i,(0,a.pC)(this._material)&&this._material.setParameters({renderOccluded:i})}get geometry(){return this._geometry}set geometry(i){this._geometry=i,this.recreateGeometry()}get width(){return(0,a.pC)(this._material)?this._material.parameters.width:this._width}set width(i){this._width=i,(0,a.pC)(this._material)&&this._material.setParameters({width:i})}get color(){return(0,a.pC)(this._material)?this._material.parameters.color:this._color}set color(i){this._color=(0,x.a)(i),(0,a.pC)(this._material)&&this._material.setParameters({color:this._color})}get innerWidth(){return(0,a.pC)(this._material)?this._material.parameters.innerWidth:this._innerWidth}set innerWidth(i){this._innerWidth=i,(0,a.pC)(this._material)&&this._material.setParameters({innerWidth:i})}get innerColor(){return(0,a.pC)(this._material)?this._material.parameters.innerColor:this._innerColor}set innerColor(i){this._innerColor=(0,a.pC)(i)?(0,x.a)(i):i,(0,a.pC)(this._material)&&this._material.setParameters({innerColor:this._innerColor})}get stipplePattern(){return(0,a.pC)(this._material)?this._material.parameters.stipplePattern:this._stipplePattern}set stipplePattern(i){this._stipplePattern=i,(0,a.pC)(this._material)&&this._material.setParameters({stipplePattern:i})}get stippleOffColor(){return(0,a.pC)(this._material)?this._material.parameters.stippleOffColor:this._stippleOffColor}set stippleOffColor(i){this._stippleOffColor=(0,a.pC)(i)?(0,x.a)(i):null,(0,a.pC)(this._material)&&this._material.setParameters({stippleOffColor:this._stippleOffColor})}get stipplePreferContinuous(){return(0,a.pC)(this._material)?this._material.parameters.stipplePreferContinuous:this._stipplePreferContinuous}set stipplePreferContinuous(i){this._stipplePreferContinuous=i,(0,a.pC)(this._material)&&this._material.setParameters({stipplePreferContinuous:i})}get writeDepthEnabled(){return(0,a.pC)(this._material)?this._material.parameters.writeDepth:this._writeDepthEnabled}set writeDepthEnabled(i){this._writeDepthEnabled=i,(0,a.pC)(this._material)&&this._material.setParameters({writeDepth:i})}get falloff(){return(0,a.pC)(this._material)?this._material.parameters.falloff:this._falloff}set falloff(i){this._falloff=i,(0,a.pC)(this._material)&&this._material.setParameters({falloff:i})}get polygonOffset(){return(0,a.pC)(this._material)?this._material.parameters.hasPolygonOffset:this._polygonOffset}set polygonOffset(i){this._polygonOffset=i,(0,a.pC)(this._material)&&this._material.setParameters({hasPolygonOffset:i})}createExternalResources(){this._hasExternalMaterial||(this._material=new f.U({width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,isClosed:!1,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,hasPolygonOffset:this._polygonOffset,renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}))}destroyExternalResources(){this._hasExternalMaterial||(this._material=null)}createGeometries(i){for(const g of(0,F.c0)(this.geometry)){const p=(0,F.YU)(g);i.addGeometry(p,(0,a.Wg)(this._material))}}forEachExternalMaterial(i){this._hasExternalMaterial||i((0,a.Wg)(this._material))}}const j=(0,y.c)()},53928:(ne,L,_)=>{_.d(L,{_:()=>F});var a=_(62208),m=_(28347),y=_(43703),v=_(68604),U=_(42743),x=_(96867),Y=_(34103);class F extends v.l{constructor(f){super(f.view),this._resources=null,this._transform=(0,y.c)()}get object(){return(0,a.pC)(this._resources)?this._resources.object:null}get transform(){return this._transform}set transform(f){(0,m.c)(this._transform,f),(0,a.pC)(this._resources)&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if((0,a.Wi)(this._resources))return;const f=this._resources.object,C=this.view._stage;C.removeMany(f.geometries),f.removeAllGeometries(),this.createGeometries(f),this.visible||f.setVisible(this.visible),C.addMany(f.geometries)}createResources(){this.destroyResources();const f=this.view._stage;if(!f)return;const C=new Y.F({isPickable:!1,updatePolicy:U.jq.SYNC});f.add(C);const j=new x.T({castShadow:!1});j.transformation=this._transform,this.createExternalResources(),this.createGeometries(j),f.addMany(j.geometries),this.forEachExternalMaterial(R=>f.add(R)),f.add(j),C.add(j),this.visible||j.setVisible(!1),this._resources={layer:C,object:j}}destroyResources(){const f=this.view._stage;!(0,a.Wi)(this._resources)&&f&&(f.remove(this._resources.object),f.remove(this._resources.layer),this.forEachExternalMaterial(C=>{f.remove(C),C.dispose()}),f.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(f){(0,a.Wi)(this._resources)||this._resources.object.setVisible(f)}}},68604:(ne,L,_)=>{_.d(L,{l:()=>m});var a=_(32917);class m{constructor(v){this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=v,this._handle=(0,a.YP)(()=>this.view.ready,U=>{this._resourcesCreated&&(U?this._createResources():this._destroyResources())})}applyProps(v){let U=!1;for(const x in v)x in this?"attached"===x?U=v[x]:this[x]=v[x]:console.error("Cannot set unknown property",x);this.attached=U}destroy(){this.attached=!1,this._handle.remove()}get attached(){return this._attached}set attached(v){v!==this._attached&&this.view._stage&&(this._attached=v,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources())}get visible(){return this._visible}set visible(v){v!==this._visible&&(this._visible=v,this.attached&&this.updateVisibility(v))}_createResources(){this.createResources(),this._resourcesCreated=!0,this.visible||this.updateVisibility(!1)}_destroyResources(){this.destroyResources(),this._resourcesCreated=!1}}},85453:(ne,L,_)=>{_.d(L,{EX:()=>F});var a=_(91558);function F(G){const{r:f,g:C,b:j}=function Y(G){let{r:f,g:C,b:j,a:R}=G;return R<1&&(f=Math.round(R*f+255*(1-R)),C=Math.round(R*C+255*(1-R)),j=Math.round(R*j+255*(1-R))),new a.Z({r:f,g:C,b:j})}(G);return.2126*f+.7152*C+.0722*j}}}]);