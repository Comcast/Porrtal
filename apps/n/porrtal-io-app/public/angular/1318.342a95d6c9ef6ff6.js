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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[1318],{21318:(n,r,_)=>{_.r(r),_.d(r,{TerrainTileTree3DDebugger:()=>e});var a=_(17626),t=(_(29132),_(32917)),E=(_(63290),_(90912),_(85931),_(8314),_(82255),_(76898)),o=_(65401),D=_(73187),P=_(37118);let e=class extends D.q{constructor(s){super(s),this.enablePolygons=!1}initialize(){(0,t.YP)(()=>this.enabled,s=>this.view.basemapTerrain.renderPatchBorders=s,t.nn)}getTiles(){return this.view.basemapTerrain.test.getRenderedTiles().map(s=>({...s,geometry:P.Z.fromExtent((0,o.HH)(s.extent,this.view.basemapTerrain.spatialReference))}))}};e=(0,a._)([(0,E.j)("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],e)}}]);