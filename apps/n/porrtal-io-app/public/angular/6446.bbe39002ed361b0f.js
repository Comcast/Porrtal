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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[6446],{16446:(n,a,e)=>{e.r(a),e.d(a,{default:()=>y});var t=e(17626),s=e(26584),i=e(77712),_=(e(85931),e(8314),e(90912),e(76898)),o=e(55915),l=e(35560),p=e(50126);let r=class extends p.Z{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=(0,l.h)()}initialize(){"capabilities"in this.layer&&this.layer.capabilities.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new s.Z("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:this.layer}))),this.layer.infoFor3D&&!this.direct3DObjectFeatureLayerDisplayEnabled&&this.addResolvingPromise(Promise.reject(new s.Z("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${this.layer.geometryType}`))),"mesh"!==this.layer.geometryType||(0,o.Up)(this.layer.spatialReference,this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s.Z("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){return this.view.featureTiles?.tilingScheme?.spatialReference}};(0,t._)([(0,i.Cb)({constructOnly:!0})],r.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),(0,t._)([(0,i.Cb)()],r.prototype,"layer",void 0),r=(0,t._)([(0,_.j)("esri.views.3d.layers.FeatureLayerView3D")],r);const y=r}}]);