"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[3130],{19027:(ee,B,s)=>{s.d(B,{O:()=>K});var P=s(15861),i=s(17626),V=s(84792),x=s(10699),N=s(21726),W=s(10349),v=s(77712),Z=(s(85931),s(8314),s(90912),s(68653)),J=s(76898),h=s(2004),A=s(65234),U=s(13812);const K=F=>{let b=class extends F{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0}readCapabilities(S,d){const p=d.capabilities&&d.capabilities.split(",").map(l=>l.toLowerCase().trim());if(!p)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const c=this.type,y=p.includes("data"),u=p.includes("query"),_=p.includes("map"),O=!!d.exportTilesAllowed,g=p.includes("tilemap"),a="tile"!==c&&!!d.supportsDynamicLayers,C="tile"!==c&&(!d.tileInfo||a),w="tile"!==c&&(!d.tileInfo||a),D="tile"!==c,j=d.cimVersion&&W.G.parse(d.cimVersion),T=j?.since(1,4)??!1,m=j?.since(2,0)??!1;return{operations:{supportsExportMap:_,supportsExportTiles:O,supportsIdentify:u,supportsQuery:y,supportsTileMap:g},exportMap:_?{supportsArcadeExpressionForLabeling:T,supportsSublayersChanges:D,supportsDynamicLayers:a,supportsSublayerVisibility:C,supportsSublayerDefinitionExpression:w,supportsCIMSymbols:m}:null,exportTiles:O?{maxExportTilesCount:+d.maxExportTilesCount}:null}}readVersion(S,d){let p=d.currentVersion;return p||(p=d.hasOwnProperty("capabilities")||d.hasOwnProperty("tables")?10:d.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),p}fetchSublayerInfo(S,d){var p=this;return(0,P.Z)(function*(){return yield p.fetchAllLayersAndTables(d),p._allLayersAndTablesMap.get(S)})()}fetchAllLayersAndTables(S){var d=this;return(0,P.Z)(function*(){yield d.load(S),d._allLayersAndTablesPromise||(d._allLayersAndTablesPromise=(0,V.default)((0,N.mN)(d.url).path+"/layers",{responseType:"json",query:{f:"json",...d.customParameters,token:d.apiKey}}).then(c=>{d._allLayersAndTablesMap=new Map;for(const y of c.data.layers)d._allLayersAndTablesMap.set(y.id,y);return{result:c.data}},c=>({error:c})));const p=yield d._allLayersAndTablesPromise;if((0,x.k_)(S),"result"in p)return p.result;throw p.error})()}};return(0,i._)([(0,v.Cb)({readOnly:!0})],b.prototype,"capabilities",void 0),(0,i._)([(0,Z.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],b.prototype,"readCapabilities",null),(0,i._)([(0,v.Cb)({json:{read:{source:"copyrightText"}}})],b.prototype,"copyright",void 0),(0,i._)([(0,v.Cb)({type:h.Z})],b.prototype,"fullExtent",void 0),(0,i._)([(0,v.Cb)(U.id)],b.prototype,"id",void 0),(0,i._)([(0,v.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],b.prototype,"legendEnabled",void 0),(0,i._)([(0,v.Cb)(U.C_)],b.prototype,"popupEnabled",void 0),(0,i._)([(0,v.Cb)({type:A.Z})],b.prototype,"spatialReference",void 0),(0,i._)([(0,v.Cb)({readOnly:!0})],b.prototype,"version",void 0),(0,i._)([(0,Z.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],b.prototype,"readVersion",null),b=(0,i._)([(0,J.j)("esri.layers.mixins.ArcGISMapService")],b),b}},66120:(ee,B,s)=>{s.d(B,{x:()=>d});var P=s(17626),i=s(46160),V=s(46882),x=s(26584),N=s(63290),W=s(32917),v=s(77712),H=(s(85931),s(8314),s(52323)),J=(s(90912),s(76898)),h=s(31283),A=s(39058),U=s(13410);const K=N.Z.getLogger("esri.layers.TileLayer"),b=i.Z.ofType(A.Z);function S(p,c){p&&p.forEach(y=>{c(y),y.sublayers&&y.sublayers.length&&S(y.sublayers,c)})}const d=p=>{let c=class extends p{constructor(...y){super(...y),this.allSublayers=new V.Z({getCollections:()=>[this.sublayers],getChildrenFunction:u=>u.sublayers}),this.sublayersSourceJSON={[h.s3.SERVICE]:{},[h.s3.PORTAL_ITEM]:{},[h.s3.WEB_SCENE]:{},[h.s3.WEB_MAP]:{}},this.own((0,W.YP)(()=>this.sublayers,(u,_)=>this._handleSublayersChange(u,_),W.Z_))}readSublayers(y,u){if(!u||!y)return;const{sublayersSourceJSON:_}=this,O=(0,h.M9)(u.origin);if(O<h.s3.SERVICE||(_[O]={context:u,visibleLayers:y.visibleLayers||_[O].visibleLayers,layers:y.layers||_[O].layers},O>h.s3.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:g,origin:a}=this.createSublayersForOrigin("web-document"),C=(0,H.vw)(this);C.setDefaultOrigin(a),this._set("sublayers",new b(g)),C.setDefaultOrigin("user")}findSublayerById(y){return this.allSublayers.find(u=>u.id===y)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(y){const u=(0,h.M9)("web-document"===y?"web-map":y);let _=h.s3.SERVICE,O=this.sublayersSourceJSON[h.s3.SERVICE].layers,g=this.sublayersSourceJSON[h.s3.SERVICE].context,a=null;const C=[h.s3.PORTAL_ITEM,h.s3.WEB_SCENE,h.s3.WEB_MAP].filter(l=>l<=u);for(const l of C){const L=this.sublayersSourceJSON[l];(0,U.ac)(L.layers)&&(_=l,O=L.layers,g=L.context,L.visibleLayers&&(a={visibleLayers:L.visibleLayers,context:L.context}))}const w=[h.s3.PORTAL_ITEM,h.s3.WEB_SCENE,h.s3.WEB_MAP].filter(l=>l>_&&l<=u);let D=null;for(const l of w){const{layers:L,visibleLayers:$,context:G}=this.sublayersSourceJSON[l];L&&(D={layers:L,context:G}),$&&(a={visibleLayers:$,context:G})}const j=function F(p,c){const y=[],u={};return p&&p.forEach(_=>{const O=new A.Z;if(O.read(_,c),u[O.id]=O,null!=_.parentLayerId&&-1!==_.parentLayerId){const g=u[_.parentLayerId];g.sublayers||(g.sublayers=[]),g.sublayers.unshift(O)}else y.unshift(O)}),y}(O,g),T=new Map,m=new Set;if(D)for(const l of D.layers)T.set(l.id,l);if(a)for(const l of a.visibleLayers)m.add(l);return S(j,l=>{D&&l.read(T.get(l.id),D.context),a&&l.read({defaultVisibility:m.has(l.id)},a.context)}),{origin:(0,h.x3)(_),sublayers:new b({items:j})}}read(y,u){super.read(y,u),this.readSublayers(y,u)}_handleSublayersChange(y,u){u&&(u.forEach(_=>{_.parent=null,_.layer=null}),this.handles.remove("sublayers-owner")),y&&(y.forEach(_=>{_.parent=this,_.layer=this}),this.handles.add([y.on("after-add",({item:_})=>{_.parent=this,_.layer=this}),y.on("after-remove",({item:_})=>{_.parent=null,_.layer=null})],"sublayers-owner"),"tile"===this.type&&this.handles.add(y.on("before-changes",_=>{K.error(new x.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),_.preventDefault()}),"sublayers-owner"))}};return(0,P._)([(0,v.Cb)({readOnly:!0})],c.prototype,"allSublayers",void 0),(0,P._)([(0,v.Cb)({readOnly:!0,type:i.Z.ofType(A.Z)})],c.prototype,"serviceSublayers",void 0),(0,P._)([(0,v.Cb)({value:null,type:b,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],c.prototype,"sublayers",void 0),(0,P._)([(0,v.Cb)({readOnly:!0})],c.prototype,"sublayersSourceJSON",void 0),c=(0,P._)([(0,J.j)("esri.layers.mixins.SublayersOwner")],c),c}},39058:(ee,B,s)=>{s.d(B,{Z:()=>pe});var Q,P=s(15861),i=s(17626),x=(s(29132),s(73281)),A=(s(4832),s(49067),s(96794),s(69747),s(40425),s(69357),s(40342),s(14726),s(33474),s(32088)),U=s(84792),K=s(20383),F=s(46160),b=s(26584),S=s(80542),d=s(61996),p=s(58817),c=s(47996),y=s(63290),u=s(62208),_=s(99959),O=s(95737),g=s(21726),a=s(77712),C=s(52323),w=s(66656),D=s(68653),j=s(76898),T=s(99433),m=s(90912),l=s(31283),L=s(38305),$=s(41638),G=s(36255),ae=s(60466),le=s(170),ne=s(2430),se=s(15283),X=s(48370),ie=s(84952),ye=s(49430),_e=s(2004);function Y(e){return e&&"esriSMS"===e.type}function k(e,r,t){const n=this.originIdOf(r)>=(0,l.M9)(t.origin);return{ignoreOrigin:!0,allowNull:n,enabled:!!t&&"map-image"===t.layer?.type&&(t.writeSublayerStructure||n)}}function oe(e,r,t){return{enabled:!!t&&"tile"===t.layer?.type&&this._isOverridden(r)}}function M(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function z(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=(0,l.M9)(t.origin))}}const q=y.Z.getLogger("esri.layers.support.Sublayer");let de=0;const R=new Set;R.add("layer"),R.add("parent"),R.add("loaded"),R.add("loadStatus"),R.add("loadError"),R.add("loadWarnings");let o=Q=class extends((0,S.p)((0,_.R)((0,d.IG)(c.Z)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}load(e){var r=this;return(0,P.Z)(function*(){return r.addResolvingPromise((0,P.Z)(function*(){if(!r.layer&&!r.url)throw new b.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:r});let t=null;if(!r.layer||r.originIdOf("url")>l.s3.SERVICE||"data-layer"===r.source?.type)t=(yield(0,U.default)(r.url,{responseType:"json",query:{f:"json"},...e})).data;else{let n=r.id;"map-layer"===r.source?.type&&(n=r.source.mapLayerId),t=yield r.layer.fetchSublayerInfo(n,e)}t&&(r.sourceJSON=t,r.read({layerDefinition:t},{origin:"service"}))})()),r})()}readCapabilities(e,r){const t=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map(f=>f.trim()):[],n=this.url?(0,L.Qc)(this.url):null,E=t.includes((0,u.pC)(n)&&"MapServer"===n.serverType?"data":"query");return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:E}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new ae.Z(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const t of r.fields)if("esriFieldTypeGlobalID"===t.type)return t.name}get id(){return this._get("id")??de++}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,t,n){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map(E=>E.write({},n))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(r=>r.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const t of r.fields)if("esriFieldTypeOID"===t.type)return t.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){const t=r.layerDefinition;return 1-.01*(null!=t.transparency?t.transparency:t.drawingInfo.transparency)}writeOpacity(e,r,t,n){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){r.parentLayerId=this.parent&&this.parent!==this.layer?(0,m.vU)(this.parent.id):-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const r of e.getSymbols())if((0,K.dU)(r)){q.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new X.R({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,m.se)(F.Z.ofType(Q),e)}writeSublayers(e,r,t){this.get("sublayers.length")&&(r[t]=this.sublayers.map(n=>n.id).toArray().reverse())}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const n=r.fields.find(E=>E.name.toLowerCase()===t);n&&(t=n.name)}return null}get url(){const e=this.layer?.parsedUrl??this._lastParsedUrl,r=this.source;if(!e)return null;if(this._lastParsedUrl=e,"map-layer"===r?.type)return`${e.path}/${r.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${(0,g.B7)(t)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,t,n){r[t]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,C.vw)(this),r=new Q;return(0,C.vw)(r).store=e.clone(R),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return(0,ye.eZ)(this,e)}createQuery(){return new ie.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}createFeatureLayer(){var e=this;return(0,P.Z)(function*(){if(e.hasOwnProperty("sublayers"))return null;const r=e.layer?.parsedUrl,t=new((yield Promise.resolve().then(s.bind(s,32258))).default)({url:r.path});return r&&e.source&&("map-layer"===e.source.type?t.layerId=e.source.mapLayerId:t.dynamicDataSource=e.source),null!=e.layer.refreshInterval&&(t.refreshInterval=e.layer.refreshInterval),e.definitionExpression&&(t.definitionExpression=e.definitionExpression),e.floorInfo&&(t.floorInfo=(0,p.d9)(e.floorInfo)),e.originIdOf("labelingInfo")>l.s3.SERVICE&&(t.labelingInfo=(0,p.d9)(e.labelingInfo)),e.originIdOf("labelsVisible")>l.s3.DEFAULTS&&(t.labelsVisible=e.labelsVisible),e.originIdOf("legendEnabled")>l.s3.DEFAULTS&&(t.legendEnabled=e.legendEnabled),e.originIdOf("visible")>l.s3.DEFAULTS&&(t.visible=e.visible),e.originIdOf("minScale")>l.s3.DEFAULTS&&(t.minScale=e.minScale),e.originIdOf("maxScale")>l.s3.DEFAULTS&&(t.maxScale=e.maxScale),e.originIdOf("opacity")>l.s3.DEFAULTS&&(t.opacity=e.opacity),e.originIdOf("popupTemplate")>l.s3.DEFAULTS&&(t.popupTemplate=(0,p.d9)(e.popupTemplate)),e.originIdOf("renderer")>l.s3.SERVICE&&(t.renderer=(0,p.d9)(e.renderer)),"data-layer"===e.source?.type&&(t.dynamicDataSource=e.source.clone()),e.originIdOf("title")>l.s3.DEFAULTS&&(t.title=e.title),"map-image"===e.layer.type&&e.layer.originIdOf("customParameters")>l.s3.DEFAULTS&&(t.customParameters=e.layer.customParameters),"tile"===e.layer.type&&e.layer.originIdOf("customParameters")>l.s3.DEFAULTS&&(t.customParameters=e.layer.customParameters),t})()}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:t}=this;if(!r||!e)return null;const n=e.attributes?e.attributes[r]:void 0;if(null==n)return null;let E=null;return t.some(f=>{const{id:I}=f;return null!=I&&(I.toString()===n.toString()&&(E=f),!!E)}),E}getFieldDomain(e,r){const n=this.getFeatureType(r&&r.feature);if(n){const E=n.domains&&n.domains[e];if(E&&"inherited"!==E.type)return E}return this._getLayerDomain(e)}queryFeatures(e=this.createQuery(),r){var t=this;return(0,P.Z)(function*(){if(yield t.load(),!t.capabilities?.operations?.supportsQuery)throw new b.Z("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:n},{default:E}]=yield Promise.all([Promise.resolve().then(s.bind(s,20477)),Promise.resolve().then(s.bind(s,17253))]),f=yield n(t.url,ie.Z.from(e),t.layer?.spatialReference??null,{...r,query:{...t.layer?.customParameters,token:t.layer?.apiKey}}),I=E.fromJSON(f.data);if(I?.features)for(const ue of I.features)ue.sourceLayer=t;return I})()}toExportImageJSON(e){const r={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,type:"mapLayer"}},t=(0,O._)(e,this.definitionExpression);(0,u.pC)(t)&&(r.definitionExpression=t);const n=["renderer","labelingInfo","opacity","labelsVisible"].reduce((f,I)=>(f[I]=this.originIdOf(I),f),{});if(Object.keys(n).some(f=>n[f]>l.s3.SERVICE)){const f=r.drawingInfo={};n.renderer>l.s3.SERVICE&&(f.renderer=this.renderer?this.renderer.toJSON():null),n.labelsVisible>l.s3.SERVICE&&(f.showLabels=this.labelsVisible),this.labelsVisible&&n.labelingInfo>l.s3.SERVICE&&(f.labelingInfo=this.labelingInfo?this.labelingInfo.map(I=>I.write({},{origin:"service",layer:this.layer})):null,f.showLabels=!0),n.opacity>l.s3.SERVICE&&(f.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(f.renderer)}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,r=>{r.color||"esriSMSX"!==r.style&&"esriSMSCross"!==r.style||(r.color=r.outline&&r.outline.color?r.outline.color:[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,r){if(e){const t="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const n of t)Y(n.symbol)&&r(n.symbol);"symbol"in e&&Y(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&Y(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const t=this.layer,n=this._get(e);let E,f;switch(e){case"definitionExpression":case"floorInfo":E="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":E="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":E="supportsDynamicLayers",f="supportsModification"}const I=(0,C.vw)(this).getDefaultOrigin();if("service"!==I){if(E&&!1===this.get(`layer.capabilities.exportMap.${E}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${E}'`);if(f&&!1===this.get(`capabilities.exportMap.${f}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${f}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==I&&n!==r&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach(t=>{t.parent=null,t.layer=null}),this.handles.removeAll()),e&&(e.forEach(t=>{t.parent=this,t.layer=this.layer}),this.handles.add([e.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),e.on("after-remove",({item:t})=>{t.parent=null,t.layer=null}),e.on("before-changes",t=>{const n=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==n||n||(q.error(new b.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),t.preventDefault())})]))}_logLockedError(e,r){q.error(new b.Z("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:r,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};o.test={isMapImageLayerOverridePolicy:e=>e===M||e===k,isTileImageLayerOverridePolicy:e=>e===oe},(0,i._)([(0,a.Cb)({readOnly:!0})],o.prototype,"capabilities",void 0),(0,i._)([(0,D.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],o.prototype,"readCapabilities",null),(0,i._)([(0,a.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:k}}})],o.prototype,"definitionExpression",null),(0,i._)([(0,a.Cb)({type:[G.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],o.prototype,"fields",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],o.prototype,"fieldsIndex",null),(0,i._)([(0,a.Cb)({type:ne.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:k},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"floorInfo",null),(0,i._)([(0,a.Cb)({type:_e.Z,json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),(0,i._)([(0,a.Cb)({type:String})],o.prototype,"globalIdField",void 0),(0,i._)([(0,D.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdFieldFromService",null),(0,i._)([(0,a.Cb)({type:m.z8,json:{write:{ignoreOrigin:!0}}})],o.prototype,"id",null),(0,i._)([(0,a.Cb)({value:null,type:[le.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:M}}})],o.prototype,"labelingInfo",null),(0,i._)([(0,T.c)("labelingInfo")],o.prototype,"writeLabelingInfo",null),(0,i._)([(0,a.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:M}}})],o.prototype,"labelsVisible",null),(0,i._)([(0,a.Cb)({value:null})],o.prototype,"layer",null),(0,i._)([(0,a.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:z}}})],o.prototype,"legendEnabled",void 0),(0,i._)([(0,a.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"listMode",null),(0,i._)([(0,a.Cb)({type:Number,value:0,json:{write:{overridePolicy:M}}})],o.prototype,"minScale",null),(0,i._)([(0,D.r)("minScale",["minScale","layerDefinition.minScale"])],o.prototype,"readMinScale",null),(0,i._)([(0,a.Cb)({type:Number,value:0,json:{write:{overridePolicy:M}}})],o.prototype,"maxScale",null),(0,i._)([(0,D.r)("maxScale",["maxScale","layerDefinition.maxScale"])],o.prototype,"readMaxScale",null),(0,i._)([(0,a.Cb)({readOnly:!0})],o.prototype,"effectiveScaleRange",null),(0,i._)([(0,a.Cb)({type:String})],o.prototype,"objectIdField",void 0),(0,i._)([(0,D.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdFieldFromService",null),(0,i._)([(0,a.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:M}}})],o.prototype,"opacity",null),(0,i._)([(0,D.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],o.prototype,"readOpacity",null),(0,i._)([(0,T.c)("opacity")],o.prototype,"writeOpacity",null),(0,i._)([(0,a.Cb)({json:{type:m.z8,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:M}}})],o.prototype,"parent",void 0),(0,i._)([(0,T.c)("parent")],o.prototype,"writeParent",null),(0,i._)([(0,a.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:z,writer(e,r,t){r[t]=!e}}}})],o.prototype,"popupEnabled",void 0),(0,i._)([(0,a.Cb)({type:x.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:z}}})],o.prototype,"popupTemplate",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),(0,i._)([(0,a.Cb)({types:A.A,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:M},origins:{"web-scene":{types:A.o,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:M}}}}})],o.prototype,"renderer",null),(0,i._)([(0,a.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":se.n,"map-layer":X.R}},cast(e){if(e){if("mapLayerId"in e)return(0,m.TJ)(X.R,e);if("dataSource"in e)return(0,m.TJ)(se.n,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:M}}})],o.prototype,"source",null),(0,i._)([(0,a.Cb)()],o.prototype,"sourceJSON",void 0),(0,i._)([(0,a.Cb)({value:null,json:{type:[m.z8],write:{target:"subLayerIds",allowNull:!0,overridePolicy:M}}})],o.prototype,"sublayers",null),(0,i._)([(0,w.p)("sublayers")],o.prototype,"castSublayers",null),(0,i._)([(0,T.c)("sublayers")],o.prototype,"writeSublayers",null),(0,i._)([(0,a.Cb)({type:String,json:{name:"name",write:{overridePolicy:z}}})],o.prototype,"title",void 0),(0,i._)([(0,a.Cb)({type:String})],o.prototype,"typeIdField",void 0),(0,i._)([(0,D.r)("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),(0,i._)([(0,a.Cb)({type:[$.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],o.prototype,"types",void 0),(0,i._)([(0,a.Cb)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:oe}}})],o.prototype,"url",null),(0,i._)([(0,a.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:M}}})],o.prototype,"visible",null),(0,i._)([(0,T.c)("visible")],o.prototype,"writeVisible",null),o=Q=(0,i._)([(0,j.j)("esri.layers.support.Sublayer")],o);const pe=o}}]);