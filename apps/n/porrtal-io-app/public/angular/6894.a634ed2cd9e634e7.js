"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[6894],{46894:(pt,k,p)=>{p.r(k),p.d(k,{default:()=>st});var T,_=p(15861),a=p(17626),ee=p(59318),Ue=p(88879),Oe=p(73281),te=p(84792),D=p(46160),Re=p(46882),Le=p(80542),Fe=p(2076),Ae=p(58817),M=p(62208),re=p(99959),Pe=p(10699),ne=p(32917),G=p(21726),o=p(77712),se=p(90912),N=p(68653),ie=p(76898),$=p(99433),Me=p(36054),O=p(2004),I=p(65234),ae=p(83137),Te=p(37053),je=p(44917),Ze=p(552),Ve=p(49286),We=p(6647),Be=p(30346),De=p(99555),Ge=p(97941),H=p(22825),$e=p(38305),le=p(13812),oe=p(51920),He=p(72392),Xe=p(61996),Je=(p(85931),p(8314),p(66656));let Qe=0,h=T=class extends((0,Xe.IG)(re.w)){constructor(e){super(e),this._sublayersHandles=new He.Z,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?O.Z.fromJSON(e):null}get id(){return this._get("id")??Qe++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach(r=>{r.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(r=>{r.parent=this,r.layer=this.layer}),this._sublayersHandles.add([e.on("after-add",({item:r})=>{r.parent=this,r.layer=this.layer}),e.on("after-remove",({item:r})=>{r.parent=null,r.layer=null})])),this._set("sublayers",e)}castSublayers(e){return(0,se.se)(D.Z.ofType(T),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new T;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map(t=>t.clone())),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(t=>t.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map(t=>t)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,a._)([(0,o.Cb)()],h.prototype,"description",null),(0,a._)([(0,o.Cb)({readOnly:!0})],h.prototype,"dimensions",void 0),(0,a._)([(0,o.Cb)({value:null})],h.prototype,"fullExtent",null),(0,a._)([(0,N.r)("fullExtent",["extent"])],h.prototype,"readExtent",null),(0,a._)([(0,o.Cb)()],h.prototype,"fullExtents",void 0),(0,a._)([(0,o.Cb)()],h.prototype,"featureInfoFormat",void 0),(0,a._)([(0,o.Cb)()],h.prototype,"featureInfoUrl",void 0),(0,a._)([(0,o.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),(0,a._)([(0,o.Cb)({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),(0,a._)([(0,N.r)(["web-document"],"legendUrl")],h.prototype,"readLegendUrl",null),(0,a._)([(0,o.Cb)({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),(0,a._)([(0,o.Cb)({value:null})],h.prototype,"layer",null),(0,a._)([(0,o.Cb)()],h.prototype,"maxScale",void 0),(0,a._)([(0,o.Cb)()],h.prototype,"minScale",void 0),(0,a._)([(0,o.Cb)({readOnly:!0})],h.prototype,"effectiveScaleRange",null),(0,a._)([(0,o.Cb)({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],h.prototype,"name",null),(0,a._)([(0,o.Cb)()],h.prototype,"parent",void 0),(0,a._)([(0,o.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),(0,a._)([(0,o.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),(0,a._)([(0,o.Cb)()],h.prototype,"sublayers",null),(0,a._)([(0,Je.p)("sublayers")],h.prototype,"castSublayers",null),(0,a._)([(0,o.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),(0,a._)([(0,o.Cb)({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",null),(0,a._)([(0,o.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=T=(0,a._)([(0,ie.j)("esri.layers.support.WMSSublayer")],h);const X=h;var Ye=p(26584);const j={84:4326,83:4269,27:4267};function ze(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const g=Array.prototype.slice.call(r.childNodes).map(w=>w.textContent).join("\r\n");throw new Ye.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",g)}const n=v("Capability",r),s=v("Service",r),u=v("Request",n);if(!n||!s||!u)return null;const i=v("Layer",n);if(!i)return null;const y="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",l=S("Title",s,"")||S("Name",s,""),d=S("AccessConstraints",s,""),f=/^none$/i.test(d)?"":d,c=S("Abstract",s,""),E=parseInt(S("MaxWidth",s,"5000"),10),x=parseInt(S("MaxHeight",s,"5000"),10),C=me(u,"GetMap"),A=de(u,"GetMap"),b=F(i,y,t);let we,U,W,z=0;if(Array.prototype.slice.call(n.childNodes).forEach(g=>{"Layer"===g.nodeName&&(0===z?we=g:(1===z&&b.name&&(b.name="",b.sublayers.push(F(we,y,t))),b.sublayers.push(F(g,y,t))),z++)}),!b)return null;const it=b.fullExtents;if(U=b.sublayers,U||(U=[]),0===U.length&&U.push(b),W=b.extent,!W){const g=new O.Z(U[0].extent);b.extent=g.toJSON(),W=b.extent}const at=b.spatialReferences.length>0?b.spatialReferences:ue(b),Ee=de(u,"GetFeatureInfo");let B;if(Ee){const g=me(u,"GetFeatureInfo");g.includes("text/html")?B="text/html":g.includes("text/plain")&&(B="text/plain")}if(!B){const g=w=>{w&&(w.queryable=!1,w.sublayers&&w.sublayers.forEach(K=>{g(K)}))};g(b)}const Se=pe(U),lt=b.minScale||0,ot=b.maxScale||0,Ce=b.dimensions,ut=Se.reduce((g,w)=>g.concat(w.dimensions),[]),Ne=Ce.concat(ut).filter(J);let Ie=null;if(Ne.length>0){let g=Number.POSITIVE_INFINITY,w=Number.NEGATIVE_INFINITY;Ne.forEach(K=>{const{extent:q}=K;!function ke(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(q)?q.forEach(P=>{g=Math.min(g,P.min.getTime()),w=Math.max(w,P.max.getTime())}):q.forEach(P=>{g=Math.min(g,P.getTime()),w=Math.max(w,P.getTime())})}),Ie={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[g,w]}}return{copyright:f,description:c,dimensions:Ce,extent:W,fullExtents:it,featureInfoFormat:B,featureInfoUrl:Ee,mapUrl:A,maxWidth:E,maxHeight:x,maxScale:ot,minScale:lt,layers:Se,spatialReferences:at,supportedImageFormatTypes:C,timeInfo:Ie,title:l,version:y}}function ue(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=ue(t);if(r.length>0)return r}return[]}function pe(e){let t=[];return e.forEach(r=>{t.push(r),r.sublayers&&r.sublayers.length&&(t=t.concat(pe(r.sublayers)),delete r.sublayers)}),t}function Z(e,t,r){return t.getAttribute(e)??r}function v(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(ye(n)&&n.nodeName===e)return n}return null}function V(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];ye(s)&&s.nodeName===e&&r.push(s)}return r}function S(e,t,r){const n=v(e,t);return n?n.textContent:r}function L(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),u=parseFloat(e.getAttribute("maxx")),i=parseFloat(e.getAttribute("maxy"));let y,l,d,f;r?(y=isNaN(s)?-Number.MAX_VALUE:s,l=isNaN(n)?-Number.MAX_VALUE:n,d=isNaN(i)?Number.MAX_VALUE:i,f=isNaN(u)?Number.MAX_VALUE:u):(y=isNaN(n)?-Number.MAX_VALUE:n,l=isNaN(s)?-Number.MAX_VALUE:s,d=isNaN(u)?Number.MAX_VALUE:u,f=isNaN(i)?Number.MAX_VALUE:i);const c=new I.Z({wkid:t});return new O.Z({xmin:y,ymin:l,xmax:d,ymax:f,spatialReference:c})}function de(e,t){const r=v(t,e);if(r){const n=v("DCPType",r);if(n){const s=v("HTTP",n);if(s){const u=v("Get",s);if(u){let i=function qe(e,t,r,n){const s=v(e,r);return s?Z(t,s,n):n}("OnlineResource","xlink:href",u,null);if(i)return i.indexOf("&")===i.length-1&&(i=i.substring(0,i.length-1)),function _e(e,t){const r=[],n=(0,G.mN)(e);for(const s in n.query)n.query.hasOwnProperty(s)&&(t.includes(s.toLowerCase())||r.push(s+"="+n.query[s]));return n.path+(r.length?"?"+r.join("&"):"")}(i,["service","request"])}}}}return null}function me(e,t){const r=V("Operation",e);if(0===r.length)return V("Format",v(t,e)).map(s=>s.textContent);const n=[];return r.forEach(s=>{s.getAttribute("name")===t&&V("Format",s).forEach(u=>{n.push(u.textContent)})}),n}function ce(e,t,r){const n=v(t,e);if(!n)return r;const{textContent:s}=n;if(null==s||""===s)return r;const u=Number(s);return isNaN(u)?r:u}function F(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},s=v("LatLonBoundingBox",e),u=v("EX_GeographicBoundingBox",e);let i=null;s&&(i=L(s,4326)),u&&(i=new O.Z(0,0,0,0,new I.Z({wkid:4326})),i.xmin=parseFloat(S("westBoundLongitude",u,"0")),i.ymin=parseFloat(S("southBoundLatitude",u,"0")),i.xmax=parseFloat(S("eastBoundLongitude",u,"0")),i.ymax=parseFloat(S("northBoundLatitude",u,"0"))),s||u||(i=new O.Z(-180,-90,180,90,new I.Z({wkid:4326}))),n.minScale=ce(e,"MaxScaleDenominator",0),n.maxScale=ce(e,"MinScaleDenominator",0);const y=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(l=>{if("Name"===l.nodeName)n.name=l.textContent||"";else if("Title"===l.nodeName)n.title=l.textContent||"";else if("Abstract"===l.nodeName)n.description=l.textContent||"";else if("BoundingBox"===l.nodeName){const d=l.getAttribute(y);if(d&&0===d.indexOf("EPSG:")){const c=parseInt(d.substring(5),10);0===c||isNaN(c)||i||(i="1.3.0"===t?L(l,c,(0,H.A)(c)):L(l,c))}const f=d&&d.indexOf(":");if(f&&f>-1){let c=parseInt(d.substring(f+1,d.length),10);0===c||isNaN(c)||(c=j[c]?j[c]:c);const E="1.3.0"===t?L(l,c,(0,H.A)(c)):L(l,c);n.fullExtents.push(E)}}else if(l.nodeName===y)l.textContent.split(" ").forEach(d=>{const f=d.includes(":")?parseInt(d.split(":")[1],10):parseInt(d,10);if(0!==f&&!isNaN(f)){const c=j[f]?j[f]:f;n.spatialReferences.includes(c)||n.spatialReferences.push(c)}});else if("Style"!==l.nodeName||n.legendURL){if("Layer"===l.nodeName){const d=F(l,t,r);d&&(d.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(d))}}else{const d=v("LegendURL",l);if(d){const f=v("OnlineResource",d);f&&(n.legendURL=f.getAttribute("xlink:href"))}}}),n.extent=i?.toJSON(),n.dimensions=V("Dimension",e).filter(l=>l.getAttribute("name")&&l.getAttribute("units")&&l.textContent).map(l=>{const d=l.getAttribute("name"),f=l.getAttribute("units"),c=l.textContent,E=l.getAttribute("unitSymbol"),x=l.getAttribute("default"),C="0"!==Z("default",l,"0"),A="0"!==Z("nearestValue",l,"0"),b="0"!==Z("current",l,"0");return J({name:d,units:f})?{name:"time",units:"ISO8601",extent:be(c),default:be(x),multipleValues:C,nearestValue:A,current:b}:function fe(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}({name:d,units:f})?{name:"elevation",units:f,extent:he(c),unitSymbol:E,default:he(x),multipleValues:C,nearestValue:A}:{name:d,units:f,extent:ge(c),unitSymbol:E,default:ge(x),multipleValues:C,nearestValue:A}}),n}function ye(e){return e.nodeType===Node.ELEMENT_NODE}function J(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function he(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&"0"!==s[2]?parseFloat(s[2]):void 0}}).filter(n=>n):r.map(n=>parseFloat(n))}function ge(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&"0"!==s[2]?s[2]:void 0}}).filter(n=>n):r}function be(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:new Date(s[0]),max:new Date(s[1]),resolution:s.length>=3&&"0"!==s[2]?et(s[2]):void 0}}).filter(n=>n):r.map(n=>new Date(n))}function et(e){const r=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return r?{years:R(r[1]),months:R(r[2]),days:R(r[3]),hours:R(r[4]),minutes:R(r[5]),seconds:R(r[6])}:null}function R(e){if(!e)return 0;const r=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function Q(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const ve=new Set([102100,3857,102113,900913]),tt=new Set([3395,54004]),Y=new Fe.X({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let m=class extends((0,Le.p)((0,Ze.h)((0,Ge.n)((0,Be.Q)((0,De.M)((0,Ve.q)((0,We.I)((0,re.R)(je.Z))))))))){constructor(...e){super(...e),this.allSublayers=new Re.Z({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null;const t="wms-sublayer";this.own((0,ne.YP)(()=>this.sublayers,(r,n)=>{if(n){for(const s of n)s.layer=null;this.handles.remove(t)}if(r){for(const s of r)s.parent=this,s.layer=this;this.handles.add([r.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),r.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],t)}},ne.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,M.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Pe.r9).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new O.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new I.Z(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter(n=>n!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return xe(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return xe(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,u=e.flatten(({sublayers:i})=>i&&i.toArray()).toArray();u.forEach(i=>{"number"==typeof i.parent.id&&(s.has(i.parent.id)?s.get(i.parent.id).push(i.id):s.set(i.parent.id,[i.id]))}),u.forEach(i=>{const y={sublayer:i,...n},l=i.write({parentLayerId:"number"==typeof i.parent.id?i.parent.id:-1},y);if(s.has(i.id)&&(l.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const d=i.write({},y);delete d.id,t.layers.push(d)}}),t.visibleLayers=u.filter(i=>i.visible&&!i.sublayers).map(i=>i.name)}createExportImageParameters(e,t,r,n){const s=n&&n.pixelRatio||1,u=(0,ae.yZ)({extent:e,width:t})*s,i=new oe.j({layer:this,scale:u}),{xmin:y,ymin:l,xmax:d,ymax:f,spatialReference:c}=e,E=function rt(e,t){let r=e.wkid;return(0,M.Wi)(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),ve.has(r)?t.find(n=>ve.has(n))||t.find(n=>tt.has(n))||102100:r)}(c,this.spatialReferences),x="1.3.0"===this.version&&(0,H.A)(E)?`${l},${y},${f},${d}`:`${y},${l},${d},${f}`,C=i.toJSON();return{bbox:x,["1.3.0"===this.version?"crs":"srs"]:isNaN(E)?void 0:"EPSG:"+E,...C}}fetchImage(e,t,r,n){var s=this;return(0,_.Z)(function*(){const u=s.mapUrl,i=s.createExportImageParameters(e,t,r,n);if(!i.layers){const c=document.createElement("canvas");return c.width=t,c.height=r,c}const y=n?.timeExtent?.start,l=n?.timeExtent?.end,d=(0,M.pC)(y)&&(0,M.pC)(l)?y.getTime()===l.getTime()?Q(y):`${Q(y)}/${Q(l)}`:void 0,f={responseType:"image",query:s._mixCustomParameters({width:t,height:r,...i,time:d,...s.refreshParameters}),signal:n?.signal};return(0,te.default)(u,f).then(c=>c.data)})()}fetchFeatureInfo(e,t,r,n,s){const u=(0,ae.yZ)({extent:e,width:t}),y=function Ke(e){return e.length?e.filter(t=>t.popupEnabled&&t.name&&t.queryable).map(t=>t.name).join(","):""}(new oe.j({layer:this,scale:u}).visibleSublayers);if(!this.featureInfoUrl||!y)return null;const d={query_layers:y,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,..."1.3.0"===this.version?{I:n,J:s}:{x:n,y:s}},f={...this.createExportImageParameters(e,t,r),...d},c=this._mixCustomParameters(f),E=(0,G.fl)(this.featureInfoUrl,c),x=document.createElement("iframe");x.src=E,x.style.border="none",x.style.margin="0",x.style.width="100%",x.setAttribute("sandbox","");const C=new Oe.Z({title:this.title,content:x});return new Ue.Z({sourceLayer:this,popupTemplate:C})}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return(0,$e.G)(this.url)||this.spatialReferences.some(t=>{const r=900913===t?I.Z.WebMercator:new I.Z({wkid:t});return(0,Te.fS)(r,e)})}_fetchService(e){var t=this;return(0,_.Z)(function*(){if(!t.resourceInfo){t.parsedUrl.query&&t.parsedUrl.query.service&&(t.parsedUrl.query.SERVICE=t.parsedUrl.query.service,delete t.parsedUrl.query.service),t.parsedUrl.query&&t.parsedUrl.query.request&&(t.parsedUrl.query.REQUEST=t.parsedUrl.query.request,delete t.parsedUrl.query.request);const r=yield(0,te.default)(t.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...t.parsedUrl.query,...t.customParameters},responseType:"xml",signal:e});t.resourceInfo=ze(r.data)}if(t.parsedUrl){const r=new G.R9(t.parsedUrl.path);"https"!==r.scheme||r.port&&"443"!==r.port||ee.Z.request.httpsDomains.includes(r.host)||ee.Z.request.httpsDomains.push(r.host)}t.read(t.resourceInfo,{origin:"service"})})()}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function xe(e,t,r){const n=new Map;e.every(u=>null==u.id)&&(e=(0,Ae.d9)(e)).forEach((u,i)=>u.id=i);for(const u of e){const i=new X;i.read(u,t),-1===r?.indexOf(i.name)&&(i.visible=!1),n.set(i.id,i)}const s=[];for(const u of e){const i=n.get(u.id);if(null!=u.parentLayerId&&u.parentLayerId>=0){const y=n.get(u.parentLayerId);y.sublayers||(y.sublayers=new D.Z),y.sublayers.unshift(i)}else s.unshift(i)}return s}(0,a._)([(0,o.Cb)({readOnly:!0})],m.prototype,"allSublayers",void 0),(0,a._)([(0,o.Cb)({json:{type:Object,write:!0}})],m.prototype,"customParameters",void 0),(0,a._)([(0,o.Cb)({json:{type:Object,write:!0}})],m.prototype,"customLayerParameters",void 0),(0,a._)([(0,o.Cb)({type:String,json:{write:!0}})],m.prototype,"copyright",void 0),(0,a._)([(0,o.Cb)()],m.prototype,"description",void 0),(0,a._)([(0,o.Cb)({readOnly:!0})],m.prototype,"dimensions",void 0),(0,a._)([(0,o.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],m.prototype,"fullExtent",void 0),(0,a._)([(0,N.r)(["web-document","portal-item"],"fullExtent",["extent"])],m.prototype,"readFullExtentFromItemOrMap",null),(0,a._)([(0,$.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],m.prototype,"writeFullExtent",null),(0,a._)([(0,o.Cb)()],m.prototype,"fullExtents",void 0),(0,a._)([(0,o.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoFormat",void 0),(0,a._)([(0,o.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoUrl",void 0),(0,a._)([(0,o.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:Y.jsonValues,read:{reader:Y.read,source:"format"},write:{writer:Y.write,target:"format"}}}}})],m.prototype,"imageFormat",void 0),(0,a._)([(0,N.r)("imageFormat",["supportedImageFormatTypes"])],m.prototype,"readImageFormat",null),(0,a._)([(0,o.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],m.prototype,"imageMaxHeight",void 0),(0,a._)([(0,o.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],m.prototype,"imageMaxWidth",void 0),(0,a._)([(0,o.Cb)()],m.prototype,"imageTransparency",void 0),(0,a._)([(0,o.Cb)(le.rn)],m.prototype,"legendEnabled",void 0),(0,a._)([(0,o.Cb)({type:["show","hide","hide-children"]})],m.prototype,"listMode",void 0),(0,a._)([(0,o.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"mapUrl",void 0),(0,a._)([(0,o.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],m.prototype,"isReference",void 0),(0,a._)([(0,o.Cb)({type:["WMS"]})],m.prototype,"operationalLayerType",void 0),(0,a._)([(0,o.Cb)()],m.prototype,"resourceInfo",void 0),(0,a._)([(0,o.Cb)({type:I.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],m.prototype,"spatialReference",void 0),(0,a._)([(0,N.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],m.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,a._)([(0,o.Cb)({type:[se.z8],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],m.prototype,"spatialReferences",void 0),(0,a._)([(0,$.c)(["web-document","portal-item"],"spatialReferences")],m.prototype,"writeSpatialReferences",null),(0,a._)([(0,o.Cb)({type:D.Z.ofType(X),json:{write:{target:"layers",overridePolicy(e,t,r){if(function nt(e,t){return e.some(r=>{for(const n in r)if((0,Me.d)(r,n,null,t))return!0;return!1})}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],m.prototype,"sublayers",void 0),(0,a._)([(0,N.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],m.prototype,"readSublayersFromItemOrMap",null),(0,a._)([(0,N.r)("service","sublayers",["layers"])],m.prototype,"readSublayers",null),(0,a._)([(0,$.c)("sublayers",{layers:{type:[X]},visibleLayers:{type:[String]}})],m.prototype,"writeSublayers",null),(0,a._)([(0,o.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],m.prototype,"type",void 0),(0,a._)([(0,o.Cb)(le.HQ)],m.prototype,"url",void 0),(0,a._)([(0,o.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"version",void 0),m=(0,a._)([(0,ie.j)("esri.layers.WMSLayer")],m);const st=m}}]);