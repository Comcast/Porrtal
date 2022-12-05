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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[3835],{3835:(h,l,e)=>{e.r(l),e.d(l,{default:()=>y});var a=e(17626),o=e(26584),r=e(77712),i=(e(85931),e(8314),e(90912),e(76898)),n=e(50126);const p=d=>{let s=class extends d{get availableFields(){return this.layer.fieldsIndex.fields.map(v=>v.name)}};return(0,a._)([(0,r.Cb)()],s.prototype,"layer",void 0),(0,a._)([(0,r.Cb)({readOnly:!0})],s.prototype,"availableFields",null),s=(0,a._)([(0,i.j)("esri.views.layers.OGCFeatureLayerView")],s),s};let t=class extends(p(n.Z)){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new o.Z("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};(0,a._)([(0,r.Cb)()],t.prototype,"layer",void 0),t=(0,a._)([(0,i.j)("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const y=t}}]);