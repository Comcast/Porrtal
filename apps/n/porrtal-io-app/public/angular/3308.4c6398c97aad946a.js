"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[3308,5994],{15994:(ee,Y,h)=>{h.d(Y,{N:()=>V});const V={convertToGEGeometry:function B(x,f){return null==f?null:x.convertJSONToGeometry(f)},exportPoint:function K(x,f,P){const y=new w(x.getPointX(f),x.getPointY(f),P),_=x.hasZ(f),F=x.hasM(f);return _&&(y.z=x.getPointZ(f)),F&&(y.m=x.getPointM(f)),y},exportPolygon:function Z(x,f,P){return new G(x.exportPaths(f),P,x.hasZ(f),x.hasM(f))},exportPolyline:function z(x,f,P){return new N(x.exportPaths(f),P,x.hasZ(f),x.hasM(f))},exportMultipoint:function b(x,f,P){return new j(x.exportPoints(f),P,x.hasZ(f),x.hasM(f))},exportExtent:function C(x,f,P){const y=x.hasZ(f),_=x.hasM(f),F=new W(x.getXMin(f),x.getYMin(f),x.getXMax(f),x.getYMax(f),P);if(y){const p=x.getZExtent(f);F.zmin=p.vmin,F.zmax=p.vmax}if(_){const p=x.getMExtent(f);F.mmin=p.vmin,F.mmax=p.vmax}return F}};class w{constructor(f,P,y){this.x=f,this.y=P,this.spatialReference=y,this.z=void 0,this.m=void 0}}class G{constructor(f,P,y,_){this.rings=f,this.spatialReference=P,this.hasZ=void 0,this.hasM=void 0,y&&(this.hasZ=y),_&&(this.hasM=_)}}class N{constructor(f,P,y,_){this.paths=f,this.spatialReference=P,this.hasZ=void 0,this.hasM=void 0,y&&(this.hasZ=y),_&&(this.hasM=_)}}class j{constructor(f,P,y,_){this.points=f,this.spatialReference=P,this.hasZ=void 0,this.hasM=void 0,y&&(this.hasZ=y),_&&(this.hasM=_)}}class W{constructor(f,P,y,_,F){this.xmin=f,this.ymin=P,this.xmax=y,this.ymax=_,this.spatialReference=F,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},83308:(ee,Y,h)=>{h.d(Y,{y:()=>P,r:()=>F});var V=h(15861),B=h(62208),w=h(27105),K=h(15176),G=h(7848),Z=h(37053),N=h(50736),z=h(26072);class j{constructor(e,t,i){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues??!1,this.fieldsIndex=i,this.featureAdapter=t;const a=e.outFields;if(a&&!a.includes("*")){this.outFields=a;let n=0;for(const r of a){const u=(0,N.hr)(r),l=this.fieldsIndex.get(u),m=l?null:(0,N.Jc)(u,i),g=l?l.name:(0,N.nu)(r)||"FIELD_EXP_"+n++;this._fieldDataCache.set(r,{alias:g,clause:m})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach(t=>this.getAttributes(t)),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,i){const a=i?i.name:t;let n=null;return this._fieldDataCache.has(a)?n=this._fieldDataCache.get(a).clause:i||(n=(0,N.Jc)(t,this.fieldsIndex),this._fieldDataCache.set(a,{alias:a,clause:n})),i?this.featureAdapter.getAttribute(e,a):n.calculateValue(e,this.featureAdapter)}getDataValue(e,t){const i=t.normalizationType,a=t.normalizationTotal;let n=this.getFieldValue(e,t.field,this.fieldsIndex.get(t.field));if(t.field2&&(n=`${(0,z.wk)(n)}${t.fieldDelimiter}${(0,z.wk)(this.getFieldValue(e,t.field2,this.fieldsIndex.get(t.field2)))}`,t.field3&&(n=`${n}${t.fieldDelimiter}${(0,z.wk)(this.getFieldValue(e,t.field3,this.fieldsIndex.get(t.field3)))}`)),i&&Number.isFinite(n)){const r="field"===i&&t.normalizationField?this.getFieldValue(e,t.normalizationField,this.fieldsIndex.get(t.normalizationField)):null;n=(0,z.fk)(n,i,r,a)}return n}getExpressionValue(e,t,i,a){const n={attributes:this.featureAdapter.getAttributes(e),layer:{fields:this.fieldsIndex.fields}},r=a.createExecContext(n,i);return a.executeFunction(t,r)}getExpressionValues(e,t,i,a){const n={fields:this.fieldsIndex.fields};return e.map(r=>{const u={attributes:this.featureAdapter.getAttributes(r),layer:n},l=a.createExecContext(u,i);return a.executeFunction(t,l)})}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,N.Jc)(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,N.Jc)(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const i={};for(const a of t){const{alias:n,clause:r}=this._fieldDataCache.get(a);i[n]=r?r.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,n)}return i}_processAttributesForDistinctValues(e){if((0,B.Wi)(e)||!this.returnDistinctValues)return e;const t=this.outFields,i=[];if(t)for(const r of t){const{alias:u}=this._fieldDataCache.get(r);i.push(e[u])}else for(const r in e)i.push(e[r]);const a=`${(t||["*"]).join(",")}=${i.join(",")}`;let n=this._returnDistinctMap.get(a)||0;return this._returnDistinctMap.set(a,++n),n>1?null:e}}var F,o,b=h(82959),W=h(82141),C=h(6185),x=h(36630),f=h(46679);class P{constructor(e,t,i){this.items=e,this.query=t,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.fieldsIndex=i.fieldsIndex,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.featureAdapter=i.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new j(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:i,outStatistics:a}=this.query;if(!t?.length)return 1;const r=new Map,u=new Map,l=new Set;for(const m of a){const{statisticType:g}=m,I="exceedslimit"!==g?m.onStatisticField:void 0;if(!u.has(I)){const A=[];for(const s of t){const c=this._getAttributeValues(e,s,r);A.push(c)}u.set(I,this._calculateUniqueValues(A,e.returnDistinctValues))}const T=u.get(I);for(const A in T){const{data:s,items:c}=T[A],v=s.join(",");i&&!e.validateItems(c,i)||l.add(v)}}return l.size}createQueryResponse(){var e=this;return(0,V.Z)(function*(){let t;return t=e.query.outStatistics?e.query.outStatistics.some(i=>"exceedslimit"===i.statisticType)?e._createExceedsLimitQueryResponse(e.query):yield e._createStatisticsQueryResponse(e.query):e._createFeatureQueryResponse(e.query),e.query.returnQueryGeometry&&(t.queryGeometry=(0,Z.JY)(e.query.outSR)&&!(0,Z.fS)(e.query.geometry.spatialReference,e.query.outSR)?(0,C.S2)({spatialReference:e.query.outSR,...(0,b.iV)(e.query.geometry,e.query.geometry.spatialReference,e.query.outSR)}):(0,C.S2)({spatialReference:e.query.outSR,...e.query.geometry})),t})()}createSnappingResponse(e,t){const i=this.featureAdapter,a=_(this.hasZ,this.hasM),{point:n}=e,r="number"==typeof e.distance?e.distance:e.distance.x,u="number"==typeof e.distance?e.distance:e.distance.y,l={candidates:[]},m="esriGeometryPolygon"===this.geometryType,T=this._getPointCreator(n,null!=n.z,null!=n.m,this.spatialReference,t),A=new p(null,0),s=new p(null,0),c={x:0,y:0,z:0};for(const v of this.items){const E=i.getGeometry(v);if((0,B.Wi)(E))continue;const{coords:M,lengths:R}=E;if(A.coords=M,s.coords=M,e.types&F.EDGE){let S=0;for(let d=0;d<R.length;d++){const D=R[d];for(let O=0;O<D;O++,S+=a){const L=A;if(L.coordsIndex=S,O!==D-1){const U=s;U.coordsIndex=S+a;const q=c;y(c,n,L,U);const Q=(n.x-q.x)/r,J=(n.y-q.y)/u,$=Q*Q+J*J;$<=1&&l.candidates.push((0,W.p)(i.getObjectId(v),T(q),Math.sqrt($),T(L),T(U)))}}}}if(e.types&F.VERTEX){const S=m?M.length-a:M.length;for(let d=0;d<S;d+=a){const D=A;D.coordsIndex=d;const O=(n.x-D.x)/r,L=(n.y-D.y)/u,U=O*O+L*L;U<=1&&l.candidates.push((0,W.u)(i.getObjectId(v),T(D),Math.sqrt(U)))}}}return l.candidates.sort((v,E)=>v.distance-E.distance),l}_getPointCreator(e,t,i,a,n){const r=(0,B.pC)(n)&&!(0,Z.fS)(a,n)?g=>(0,b.iV)(g,a,n):g=>g,{hasZ:u}=this,m=e.m;return t&&i?u?({x:g,y:I,z:T})=>r({x:g,y:I,z:T,m}):({x:g,y:I})=>r({x:g,y:I,z:0,m}):t?u?({x:g,y:I,z:T})=>r({x:g,y:I,z:T}):({x:g,y:I})=>r({x:g,y:I,z:0}):i?({x:g,y:I})=>r({x:g,y:I,m}):({x:g,y:I})=>r({x:g,y:I})}createSummaryStatisticsResponse(e){var t=this;return(0,V.Z)(function*(){const{field:i,valueExpression:a,normalizationField:n,normalizationType:r,normalizationTotal:u,minValue:l,maxValue:m,scale:g}=e,I=t.fieldsIndex.isDateField(i),T=yield t._getDataValues({field:i,valueExpression:a,normalizationField:n,normalizationType:r,normalizationTotal:u,scale:g}),A=(0,z.S5)({normalizationType:r,normalizationField:n,minValue:l,maxValue:m}),s=t.fieldsIndex.get(i),c={value:.5,fieldType:s?.type},v=(0,x.qN)(s)?(0,z.H0)({values:T,supportsNullCount:A,percentileParams:c}):(0,z.i5)({values:T,minValue:l,maxValue:m,useSampleStdDev:!r,supportsNullCount:A,percentileParams:c});return(0,z.F_)(v,I)})()}createUniqueValuesResponse(e){var t=this;return(0,V.Z)(function*(){const{field:i,valueExpression:a,domains:n,returnAllCodedValues:r,scale:u}=e,l=yield t._getDataValues({field:i,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:a,scale:u}),m=(0,z.eT)(l);return(0,z.Qm)(m,n,r,e.fieldDelimiter)})()}createClassBreaksResponse(e){var t=this;return(0,V.Z)(function*(){const{field:i,valueExpression:a,normalizationField:n,normalizationType:r,normalizationTotal:u,classificationMethod:l,standardDeviationInterval:m,minValue:g,maxValue:I,numClasses:T,scale:A}=e,s=yield t._getDataValues({field:i,valueExpression:a,normalizationField:n,normalizationType:r,normalizationTotal:u,scale:A}),c=(0,z.G2)(s,{field:i,normalizationField:n,normalizationType:r,normalizationTotal:u,classificationMethod:l,standardDeviationInterval:m,minValue:g,maxValue:I,numClasses:T});return(0,z.DL)(c,l)})()}createHistogramResponse(e){var t=this;return(0,V.Z)(function*(){const{field:i,valueExpression:a,normalizationField:n,normalizationType:r,normalizationTotal:u,classificationMethod:l,standardDeviationInterval:m,minValue:g,maxValue:I,numBins:T,scale:A}=e,s=yield t._getDataValues({field:i,valueExpression:a,normalizationField:n,normalizationType:r,normalizationTotal:u,scale:A});return(0,z.oF)(s,{field:i,normalizationField:n,normalizationType:r,normalizationTotal:u,classificationMethod:l,standardDeviationInterval:m,minValue:g,maxValue:I,numBins:T})})()}_sortFeatures(e,t,i){if(e.length>1&&t&&t.length)for(const a of t.reverse()){const n=a.split(" "),r=n[0],u=this.fieldsIndex.get(r),l=n[1]&&"desc"===n[1].toLowerCase(),m=(0,z.Lq)(u?.type,l);e.sort((g,I)=>{const T=i(g,r,u),A=i(I,r,u);return m(T,A)})}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:i,hasM:a,hasZ:n,objectIdField:r,spatialReference:u}=this,{outFields:l,outSR:m,quantizationParameters:g,resultRecordCount:I,resultOffset:T,returnZ:A,returnM:s}=e,c=null!=I&&t.length>(T||0)+I,v=l&&(l.includes("*")?[...this.fieldsIndex.fields]:l.map(E=>this.fieldsIndex.get(E)));return{exceededTransferLimit:c,features:this._createFeatures(e,t),fields:v,geometryType:i,hasM:a&&s,hasZ:n&&A,objectIdFieldName:r,spatialReference:(0,C.S2)(m||u),transform:g&&(0,G.vY)(g)||null}}_createFeatures(e,t){const i=new j(e,this.featureAdapter,this.fieldsIndex),{hasM:a,hasZ:n}=this,{orderByFields:r,quantizationParameters:u,returnGeometry:l,returnCentroid:m,maxAllowableOffset:g,resultOffset:I,resultRecordCount:T,returnZ:A=!1,returnM:s=!1}=e,c=n&&A,v=a&&s;let E=[],M=0;const R=[...t];if(this._sortFeatures(R,r,(d,D,O)=>i.getFieldValue(d,D,O)),l||m){const d=(0,G.vY)(u);if(l&&!m)for(const D of R)E[M++]={attributes:i.getAttributes(D),geometry:(0,C.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(D),g,d,c,v)};else if(!l&&m)for(const D of R)E[M++]={attributes:i.getAttributes(D),centroid:(0,C.EG)(this,this.featureAdapter.getCentroid(D,this),d)};else for(const D of R)E[M++]={attributes:i.getAttributes(D),centroid:(0,C.EG)(this,this.featureAdapter.getCentroid(D,this),d),geometry:(0,C.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(D),g,d,c,v)}}else for(const d of R){const D=i.getAttributes(d);D&&(E[M++]={attributes:D})}const S=I||0;return null!=T&&(E=E.slice(S,Math.min(E.length,S+T))),E}_createExceedsLimitQueryResponse(e){let t=!1,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY;for(const r of e.outStatistics)if("exceedslimit"===r.statisticType){i=null!=r.maxPointCount?r.maxPointCount:Number.POSITIVE_INFINITY,a=null!=r.maxRecordCount?r.maxRecordCount:Number.POSITIVE_INFINITY,n=null!=r.maxVertexCount?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)t=this.items.length>i;else if(this.items.length>a)t=!0;else{const r=_(this.hasZ,this.hasM),u=this.featureAdapter;t=this.items.reduce((l,m)=>{const g=u.getGeometry(m);return l+((0,B.pC)(g)&&g.coords.length||0)},0)/r>n}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}_createStatisticsQueryResponse(e){var t=this;return(0,V.Z)(function*(){const i={attributes:{}},a=[],n=new Map,r=new Map,u=new Map,l=new Map,m=new j(e,t.featureAdapter,t.fieldsIndex),g=e.outStatistics,{groupByFieldsForStatistics:I,having:T,orderByFields:A}=e,s=I&&I.length,c=!!s,v=c&&I[0],E=c&&!t.fieldsIndex.get(v);for(const R of g){const{outStatisticFieldName:S,statisticType:d}=R,D=R,O="exceedslimit"!==d?R.onStatisticField:void 0,L="percentile_disc"===d||"percentile_cont"===d,U="EnvelopeAggregate"===d||"CentroidAggregate"===d||"ConvexHullAggregate"===d,q=c&&1===s&&(O===v||E)&&"count"===d;if(c){if(!u.has(O)){const J=[];for(const $ of I){const te=t._getAttributeValues(m,$,n);J.push(te)}u.set(O,t._calculateUniqueValues(J,!U&&m.returnDistinctValues))}const Q=u.get(O);for(const J in Q){const{count:$,data:te,items:ie,itemPositions:ae}=Q[J],se=te.join(",");if(!T||m.validateItems(ie,T)){const H=l.get(se)||{attributes:{}};if(U){H.aggregateGeometries||(H.aggregateGeometries={});const{aggregateGeometries:X,outStatisticFieldName:k}=yield t._getAggregateGeometry(D,ie);H.aggregateGeometries[k]=X}else{let X=null;if(q)X=$;else{const k=t._getAttributeValues(m,O,n),ne=ae.map(oe=>k[oe]);X=L&&"statisticParameters"in D?t._getPercentileValue(D,ne):t._getStatisticValue(D,ne,null,m.returnDistinctValues)}H.attributes[S]=X}let re=0;I.forEach((X,k)=>H.attributes[t.fieldsIndex.get(X)?X:"EXPR_"+ ++re]=te[k]),l.set(se,H)}}}else if(U){i.aggregateGeometries||(i.aggregateGeometries={});const{aggregateGeometries:Q,outStatisticFieldName:J}=yield t._getAggregateGeometry(D,t.items);i.aggregateGeometries[J]=Q}else{const Q=t._getAttributeValues(m,O,n);i.attributes[S]=L&&"statisticParameters"in D?t._getPercentileValue(D,Q):t._getStatisticValue(D,Q,r,m.returnDistinctValues)}a.push({name:S,alias:S,type:"esriFieldTypeDouble"})}const M=c?Array.from(l.values()):[i];return t._sortFeatures(M,A,(R,S)=>R.attributes[S]),{fields:a,features:M}})()}_getAggregateGeometry(e,t){var i=this;return(0,V.Z)(function*(){const a=yield Promise.all([h.e(4918),h.e(8592)]).then(h.bind(h,32825)),{statisticType:n,outStatisticFieldName:r}=e,{featureAdapter:u,spatialReference:l,geometryType:m,hasZ:g,hasM:I}=i,T=t.map(c=>(0,C.Op)(m,g,I,u.getGeometry(c))),A=a.convexHull(l,T,!0)[0],s={aggregateGeometries:null,outStatisticFieldName:null};if("EnvelopeAggregate"===n){const c=A?(0,K._w)(A):(0,K.aO)(a.union(l,T));s.aggregateGeometries={...c,spatialReference:l},s.outStatisticFieldName=r||"extent"}else if("CentroidAggregate"===n){const c=A?(0,w.tO)(A):(0,w.$G)((0,K.aO)(a.union(l,T)));s.aggregateGeometries={x:c[0],y:c[1],spatialReference:l},s.outStatisticFieldName=r||"centroid"}else"ConvexHullAggregate"===n&&(s.aggregateGeometries=A,s.outStatisticFieldName=r||"convexHull");return s})()}_getStatisticValue(e,t,i,a){const{onStatisticField:n,statisticType:r}=e;let u=null;return u=i?.has(n)?i.get(n):(0,x.qN)(this.fieldsIndex.get(n))?(0,z.H0)({values:t,returnDistinct:a}):(0,z.i5)({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(n,u),u["var"===r?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:i,statisticParameters:a,statisticType:n}=e,{value:r,orderBy:u}=a,l=this.fieldsIndex.get(i);return(0,z.XL)(t,{value:r,orderBy:u,fieldType:l?.type,isDiscrete:"percentile_disc"===n})}_getAttributeValues(e,t,i){if(i.has(t))return i.get(t);const a=this.fieldsIndex.get(t),n=this.items.map(r=>e.getFieldValue(r,t,a));return i.set(t,n),n}_getAttributeDataValues(e,t){return this.items.map(i=>e.getDataValue(i,{field:t.field,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,normalizationField:t.normalizationField,normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal}))}_getAttributeExpressionValues(e,t,i){var a=this;return(0,V.Z)(function*(){const{arcadeUtils:n}=yield(0,f.LC)(),r=n.createFunction(t),u=i&&n.getViewInfo(i);return e.getExpressionValues(a.items,r,u,n)})()}_calculateUniqueValues(e,t){const i={},a=this.items,n=a.length;for(let r=0;r<n;r++){const u=a[r],l=[];for(const g of e)l.push(g[r]);const m=l.join(",");t?null==i[m]&&(i[m]={count:1,data:l,items:[u],itemPositions:[r]}):null==i[m]?i[m]={count:1,data:l,items:[u],itemPositions:[r]}:(i[m].count++,i[m].items.push(u),i[m].itemPositions.push(r))}return i}_getDataValues(e){var t=this;return(0,V.Z)(function*(){const i=new j(t.query,t.featureAdapter,t.fieldsIndex),{valueExpression:a,field:n,normalizationField:r,normalizationType:u,normalizationTotal:l,scale:m}=e;return a?t._getAttributeExpressionValues(i,a,a?{viewingMode:"map",scale:m,spatialReference:t.query.outSR||t.spatialReference}:null):t._getAttributeDataValues(i,{field:n,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,normalizationField:r,normalizationType:u,normalizationTotal:l})})()}}function y(o,e,t,i){const a=i.x-t.x,n=i.y-t.y,l=Math.min(1,Math.max(0,((e.x-t.x)*a+(e.y-t.y)*n)/(a*a+n*n)));o.x=t.x+a*l,o.y=t.y+n*l}function _(o,e){return o?e?4:3:e?3:2}(o=F||(F={}))[o.NONE=0]="NONE",o[o.EDGE=1]="EDGE",o[o.VERTEX=2]="VERTEX";class p{constructor(e,t){this.coords=e,this.coordsIndex=t}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}},50736:(ee,Y,h)=>{h.d(Y,{nu:()=>f,hr:()=>x,Jc:()=>W,G3:()=>P,Of:()=>C,z4:()=>b,hO:()=>j});var V=h(26584),B=h(78498),w=h(10410);const G=new class K{constructor(_,F){this._cache=new B.Z(_),this._invalidCache=new B.Z(F)}get(_,F){const p=`${F.uid}:${_}`,o=this._cache.get(p);if(o)return o;if(void 0!==this._invalidCache.get(p))return null;try{const e=w.WhereClause.create(_,F);return this._cache.put(p,e),e}catch{return this._invalidCache.put(p,null),null}}}(50,500),Z="feature-store:unsupported-query",N=" as ",z=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function j(y,_){if(!_)return!0;const F=G.get(_,y);if(!F)throw new V.Z(Z,"invalid SQL expression",{where:_});if(!F.isStandardized)throw new V.Z(Z,"where clause is not standard",{where:_});return C(y,F.fieldNames,"where clause contains missing fields"),!0}function b(y,_,F){if(!_)return!0;const p=G.get(_,y);if(!p)throw new V.Z(Z,"invalid SQL expression",{having:_});if(!p.isAggregate)throw new V.Z(Z,"having does not contain a valid aggregate function",{having:_});if(C(y,p.fieldNames,"having contains missing fields"),!p.getExpressions().every(e=>{const{aggregateType:t,field:i}=e,a=y.has(i)&&y.get(i).name;return F.some(n=>{const{onStatisticField:r,statisticType:u}=n;return(y.has(r)&&y.get(r).name)===a&&u.toLowerCase().trim()===t})}))throw new V.Z(Z,"expressions in having should also exist in outStatistics",{having:_});return!0}function W(y,_){return y?G.get(y,_):null}function C(y,_,F,p=!0){const o=[];for(const e of _)if("*"!==e&&!y.has(e))if(p){const t=x(e);try{const i=W(t,y);if(!i)throw new V.Z(Z,"invalid SQL expression",{where:t});if(!i.isStandardized)throw new V.Z(Z,"expression is not standard",{clause:i});C(y,i.fieldNames,"expression contains missing fields")}catch(i){const a=i&&i.details;if(a&&(a.clause||a.where))throw i;a&&a.missingFields?o.push(...a.missingFields):o.push(e)}}else o.push(e);if(o.length)throw new V.Z(Z,F,{missingFields:o})}function x(y){return y.split(N)[0]}function f(y){return y.split(N)[1]}function P(y,_){const F=_.get(y);return!!F&&!z.has(F.type)}},82959:(ee,Y,h)=>{h.d(Y,{_W:()=>W,iV:()=>P,oj:()=>F});var V=h(15861),B=h(62208),w=h(55915),K=h(15994),G=h(37053),Z=h(46367);const N=[0,0];function z(p,o){if(!o)return null;if("x"in o){const e={x:0,y:0};return[e.x,e.y]=p(o.x,o.y,N),null!=o.z&&(e.z=o.z),null!=o.m&&(e.m=o.m),e}if("xmin"in o){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=p(o.xmin,o.ymin,N),[e.xmax,e.ymax]=p(o.xmax,o.ymax,N),o.hasZ&&(e.zmin=o.zmin,e.zmax=o.zmax,e.hasZ=!0),o.hasM&&(e.mmin=o.mmin,e.mmax=o.mmax,e.hasM=!0),e}return"rings"in o?{rings:j(o.rings,p),hasM:o.hasM,hasZ:o.hasZ}:"paths"in o?{paths:j(o.paths,p),hasM:o.hasM,hasZ:o.hasZ}:"points"in o?{points:b(o.points,p),hasM:o.hasM,hasZ:o.hasZ}:null}function j(p,o){const e=[];for(const t of p)e.push(b(t,o));return e}function b(p,o){const e=[];for(const t of p){const i=o(t[0],t[1],[0,0]);e.push(i),t.length>2&&i.push(t[2]),t.length>3&&i.push(t[3])}return e}function W(p,o){return C.apply(this,arguments)}function C(){return(C=(0,V.Z)(function*(p,o){if(!p||!o)return;const e=Array.isArray(p)?p.map(t=>(0,B.pC)(t.geometry)?t.geometry.spatialReference:null).filter(B.pC):[p];yield(0,w.iQ)(e.map(t=>({source:t,dest:o})))})).apply(this,arguments)}const x=z.bind(null,Z.hG),f=z.bind(null,Z.R6);function P(p,o,e,t){if(!p||(e||(e=o,o=p.spatialReference),!(0,G.JY)(o)||!(0,G.JY)(e)||(0,G.fS)(o,e)))return p;if((0,Z.Q8)(o,e)){const i=(0,G.sS)(e)?x(p):f(p);return i.spatialReference=e,i}return(0,w.oj)(K.N,[p],o,e,null,t)[0]}const _=new class y{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}push(o,e,t){var i=this;return(0,V.Z)(function*(){if(!o||!o.length||!e||!t||(0,G.fS)(e,t))return o;const a={geometries:o,inSpatialReference:e,outSpatialReference:t,resolve:null};return i._jobs.push(a),new Promise(n=>{a.resolve=n,null===i._timer&&(i._timer=setTimeout(i._process,10))})})()}_process(){this._timer=null;const o=this._jobs.shift();if(!o)return;const{geometries:e,inSpatialReference:t,outSpatialReference:i,resolve:a}=o;(0,Z.Q8)(t,i)?(0,G.sS)(i)?a(e.map(x)):a(e.map(f)):a((0,w.oj)(K.N,e,t,i,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function F(p,o,e){return _.push(p,o,e)}},6185:(ee,Y,h)=>{h.d(Y,{EG:()=>p,Op:()=>o,S2:()=>I,Up:()=>e,j6:()=>i,vF:()=>f});var V=h(15861),B=h(2076),w=h(62208),K=h(16730),G=h(55915),Z=h(15176),N=h(91179),z=h(93555),j=h(37053),b=h(82054),W=h(88071),C=h(82959);const x=new B.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),f=Object.freeze({}),P=new W.Z,y=new W.Z,_=new W.Z,F={esriGeometryPoint:b.fQ,esriGeometryPolyline:b.J6,esriGeometryPolygon:b.eG,esriGeometryMultipoint:b.Iv};function p(s,c,v,E=s.hasZ,M=s.hasM){if((0,w.Wi)(c))return null;const R=s.hasZ&&E,S=s.hasM&&M;if(v){const d=(0,b.Nh)(_,c,s.hasZ,s.hasM,"esriGeometryPoint",v,E,M);return(0,b.fQ)(d,R,S)}return(0,b.fQ)(c,R,S)}function o(s,c,v,E,M,R,S=c,d=v){const D=c&&S,O=v&&d,L=(0,w.pC)(E)?"coords"in E?E:E.geometry:null;if((0,w.Wi)(L))return null;if(M){let U=(0,b.zj)(y,L,c,v,s,M,S,d);return R&&(U=(0,b.Nh)(_,U,D,O,s,R)),F[s]?.(U,D,O)??null}if(R){const U=(0,b.Nh)(_,L,c,v,s,R,S,d);return F[s]?.(U,D,O)??null}return(0,b.hY)(P,L,c,v,S,d),F[s]?.(P,D,O)??null}function e(s,c,v){return t.apply(this,arguments)}function t(){return(t=(0,V.Z)(function*(s,c,v){const{outFields:E,orderByFields:M,groupByFieldsForStatistics:R,outStatistics:S}=s;if(E)for(let d=0;d<E.length;d++)E[d]=E[d].trim();if(M)for(let d=0;d<M.length;d++)M[d]=M[d].trim();if(R)for(let d=0;d<R.length;d++)R[d]=R[d].trim();if(S)for(let d=0;d<S.length;d++)S[d].onStatisticField&&(S[d].onStatisticField=S[d].onStatisticField.trim());return s.geometry&&!s.outSR&&(s.outSR=s.geometry.spatialReference),i(s,c,v)})).apply(this,arguments)}function i(s,c,v){return a.apply(this,arguments)}function a(){return(a=(0,V.Z)(function*(s,c,v){if(!s)return null;let{where:E}=s;if(s.where=E=E&&E.trim(),(!E||/^1 *= *1$/.test(E)||c&&c===E)&&(s.where=null),!s.geometry)return s;let M=yield u(s);if(s.distance=0,s.units=null,"esriSpatialRelEnvelopeIntersects"===s.spatialRel){const{spatialReference:R}=s.geometry;M=(0,Z.aO)(M),M.spatialReference=R}if(M){yield(0,C._W)(M.spatialReference,v),M=r(M,v);const R=(yield(0,z.aX)((0,N.im)(M)))[0];if((0,w.Wi)(R))throw f;const S="quantizationParameters"in s&&s.quantizationParameters?.tolerance||"maxAllowableOffset"in s&&s.maxAllowableOffset||0,d=S&&n(M,v)?{densificationStep:8*S}:void 0,D=R.toJSON(),O=yield(0,C.iV)(D,D.spatialReference,v,d);if(!O)throw f;O.spatialReference=v,s.geometry=O}return s})).apply(this,arguments)}function n(s,c){if(!s)return!1;const v=s.spatialReference;return((0,N.YX)(s)||(0,N.oU)(s)||(0,N.l9)(s))&&!(0,j.fS)(v,c)&&!(0,G.Up)(v,c)}function r(s,c){const v=s.spatialReference;return n(s,c)&&(0,N.YX)(s)?{spatialReference:v,rings:[[[s.xmin,s.ymin],[s.xmin,s.ymax],[s.xmax,s.ymax],[s.xmax,s.ymin],[s.xmin,s.ymin]]]}:s}function u(s){return l.apply(this,arguments)}function l(){return(l=(0,V.Z)(function*(s){const{distance:c,units:v}=s,E=s.geometry;if(null==c||"vertexAttributes"in E)return E;const M=E.spatialReference,R=v?x.fromJSON(v):(0,K.qE)(M),S=M&&((0,j.sT)(M)||(0,j.sS)(M))?E:yield(0,C._W)(M,j.Zn).then(()=>(0,C.iV)(E,j.Zn));return(yield m())(S.spatialReference,S,c,R)})).apply(this,arguments)}function m(){return g.apply(this,arguments)}function g(){return(g=(0,V.Z)(function*(){return(yield Promise.all([h.e(4918),h.e(8592)]).then(h.bind(h,32825))).geodesicBuffer})).apply(this,arguments)}function I(s){return s&&T in s?JSON.parse(JSON.stringify(s,A)):s}const T="_geVersion",A=(s,c)=>s!==T?c:void 0}}]);