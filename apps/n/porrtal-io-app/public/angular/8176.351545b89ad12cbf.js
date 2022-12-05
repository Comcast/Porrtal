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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[8176],{78176:(y,o,_)=>{_.r(o),_.d(o,{FeatureCollectionSnappingSource:()=>s});var n=_(15861),t=_(17626),c=_(14517),l=_(62208),r=_(77712),i=(_(85931),_(8314),_(90912),_(76898)),p=_(9218);let s=class extends c.Z{constructor(e){super(e)}get availability(){return 1}refresh(){}fetchCandidates(e,E){var u=this;return(0,n.Z)(function*(){const a=u.layerSource.layer.source;return a.querySnapping?(yield a.querySnapping({distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,query:(0,l.pC)(e.filter)?e.filter.createQuery().toJSON():{where:"1=1"}},{signal:E})).candidates.map(O=>(0,p.X)(O,e.coordinateHelper,e.elevationInfo)):[]})()}};(0,t._)([(0,r.Cb)({constructOnly:!0})],s.prototype,"layerSource",void 0),(0,t._)([(0,r.Cb)({readOnly:!0})],s.prototype,"availability",null),s=(0,t._)([(0,i.j)("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],s)}}]);