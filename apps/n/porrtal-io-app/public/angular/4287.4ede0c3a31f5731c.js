"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[4287],{84287:(x,u,n)=>{n.r(u),n.d(u,{default:()=>A});var y=n(94573),m=n(62208),g=n(86236),_=n(65234),C=n(33696),d=n(38114),c=n(82054),P=n(36255);function v(o,t){return t}function l(o,t,e,r){switch(e){case 0:return a(o,t+r,0);case 1:return"lowerLeft"===o.originPosition?a(o,t+r,1):function M({translate:o,scale:t},e,r){return o[r]-e*t[r]}(o,t+r,1)}}function p(o,t,e,r){return 2===e?a(o,t,2):l(o,t,e,r)}function G(o,t,e,r){return 2===e?a(o,t,3):l(o,t,e,r)}function b(o,t,e,r){return 3===e?a(o,t,3):p(o,t,e,r)}function a({translate:o,scale:t},e,r){return o[r]+e*t[r]}class R{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=v,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return new d.Pj}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,C.k)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(!(0,m.Wi)(e))for(const r of t.features)e(r.geometry)}createSpatialReference(){return new _.Z}addField(t,e){t.fields.push(P.Z.fromJSON(e));const r=t.fields.map(s=>s.name);this._attributesConstructor=function(){for(const s of r)this[s]=null}}addFeature(t,e){const r=this._options.maxStringAttributeLength?this._options.maxStringAttributeLength:0;if(r>0)for(const s in e.attributes){const i=e.attributes[s];"string"==typeof i&&i.length>r&&(e.attributes[s]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,i=(0,c.$g)(r.clone(),r,!1,!1,this._transform),f=(0,c.di)(i,s,!1,!1);let h=null;switch(s){case"esriGeometryPoint":h="point";break;case"esriGeometryPolygon":h="polygon";break;case"esriGeometryPolyline":h="polyline";break;case"esriGeometryMultipoint":h="multipoint"}f.type=h,t.queryGeometryType=s,t.queryGeometry=f}prepareFeatures(t){switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(e,r,s)=>this.addCoordinatePoint(e,r,s),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,r,s)=>this._addCoordinatePolygon(e,r,s),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,r,s)=>this._addCoordinatePolyline(e,r,s),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,r,s)=>this._addCoordinateMultipoint(e,r,s),this.createGeometry=e=>this._createMultipointGeometry(e);break;case"mesh":case"extent":break;default:(0,y.Bg)(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new d.Wh((0,g.D)(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce((e,r)=>e+r,0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e,r){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){switch(e=this._applyTransform(this._transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._applyTransform(this._transform,t,e,r)}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const s=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(s)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(e,r);0===r&&t[t.length-1].push(new Float64Array(this._coordinateBuffer.buffer,this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this._vertexDimension)),this._coordinateBuffer[this._coordinateBufferPtr++]=s}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?b:e?p:r?G:l}}var T=n(85262);class Z{_parseFeatureQuery(t){const e=(0,T.C)(t.buffer,new R(t.options)),r={...e,spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map(s=>s.toJSON()):void 0};return Promise.resolve(r)}}function A(){return new Z}}}]);