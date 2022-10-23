"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[9185],{29185:(ct,L,e)=>{e.r(L),e.d(L,{loadGLTFMesh:()=>k});var I=e(15861),W=e(91558),$=e(84792),U=e(88159),y=e(21286),o=e(62208),j=e(30217),K=e(550),Z=e(28093),G=e(4794),N=e(61751),X=e(27530),b=e(1607),V=e(92529),M=e(60479),g=e(79800),A=e(63657),v=e(60490),z=e(60853),Q=e(9160),Y=e(93831),R=e(96170),H=e(36848),J=e(79331),D=e(67969),S=e(9554),T=e(63470),F=e(35995);function k(t,n,r){return x.apply(this,arguments)}function x(){return(x=(0,I.Z)(function*(t,n,r){const a=new Q.C(q(r)),s=(yield(0,Y.z)(a,n,r,!0)).model,f=s.lods.shift(),u=new Map,c=new Map;s.textures.forEach((p,B)=>u.set(B,et(p))),s.materials.forEach((p,B)=>c.set(B,ot(p,u)));const i=nt(f);for(const p of i.parts)st(i,p,c);const{position:m,normal:E,tangent:_,color:l,texCoord0:C}=i.vertexAttributes,d={position:m.typedBuffer,normal:(0,o.pC)(E)?E.typedBuffer:null,tangent:(0,o.pC)(_)?_.typedBuffer:null,uv:(0,o.pC)(C)?C.typedBuffer:null,color:(0,o.pC)(l)?l.typedBuffer:null},h=(0,z.w1)(d,t,r);return{transform:h.transform,components:i.components,spatialReference:t.spatialReference,vertexAttributes:new V.Q({position:h.vertexAttributes.position,normal:h.vertexAttributes.normal,tangent:h.vertexAttributes.tangent,color:d.color,uv:d.uv})}})).apply(this,arguments)}function q(t){return t?.resolveFile?{busy:!1,request:(n=(0,I.Z)(function*(r,a,s){const f=t.resolveFile(r),u="image"===a?"image":"binary"===a?"array-buffer":"json";return(yield(0,$.default)(f,{responseType:u,signal:(0,o.pC)(s)?s.signal:null})).data}),function(a,s,f){return n.apply(this,arguments)})}:null;var n}function P(t,n){if((0,o.Wi)(t))return"-";const r=t.typedBuffer;return`${(0,U.s1)(n,r.buffer,()=>n.size)}/${r.byteOffset}/${r.byteLength}`}function tt(t){return(0,o.pC)(t)?t.toString():"-"}function nt(t){let n=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},a=new Map,s=new Map,f=[];for(const u of t.parts){const{attributes:{position:c,normal:i,color:m,tangent:E,texCoord0:_}}=u,l=`\n      ${P(c,a)}/\n      ${P(i,a)}/\n      ${P(m,a)}/\n      ${P(E,a)}/\n      ${P(_,a)}/\n      ${tt(u.transform)}\n    `;let C=!1;const d=(0,U.s1)(s,l,()=>(C=!0,{start:n,length:c.count}));C&&(n+=c.count),i&&(r.normal=!0),m&&(r.color=!0),E&&(r.tangent=!0),_&&(r.texCoord0=!0),f.push({gltf:u,writeVertices:C,region:d})}return{vertexAttributes:{position:(0,v.gS)(M.fP,n),normal:r.normal?(0,v.gS)(M.ct,n):null,tangent:r.tangent?(0,v.gS)(M.ek,n):null,color:r.color?(0,v.gS)(M.mc,n):null,texCoord0:r.texCoord0?(0,v.gS)(M.Eu,n):null},parts:f,components:[]}}function et(t){return new b.Z({data:t.data,wrap:lt(t.parameters.wrap)})}function ot(t,n){const r=new W.Z(function it(t,n){return(0,G.f)(O(t[0]),O(t[1]),O(t[2]),n)}(t.color,t.opacity)),a=t.emissiveFactor?new W.Z(function ut(t){return(0,Z.f)(O(t[0]),O(t[1]),O(t[2]))}(t.emissiveFactor)):null;return new X.Z({color:r,colorTexture:(0,o.Wg)((0,o.yw)(t.textureColor,s=>n.get(s))),normalTexture:(0,o.Wg)((0,o.yw)(t.textureNormal,s=>n.get(s))),emissiveColor:a,emissiveTexture:(0,o.Wg)((0,o.yw)(t.textureEmissive,s=>n.get(s))),occlusionTexture:(0,o.Wg)((0,o.yw)(t.textureOcclusion,s=>n.get(s))),alphaMode:at(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:(0,o.Wg)((0,o.yw)(t.textureMetallicRoughness,s=>n.get(s)))})}function st(t,n,r){n.writeVertices&&function rt(t,n){const{position:r,normal:a,tangent:s,color:f,texCoord0:u}=t.vertexAttributes,c=n.region.start,{attributes:i,transform:m}=n.gltf,E=i.position.count;if((0,g.t)(r.slice(c,E),i.position,m),(0,o.pC)(i.normal)&&(0,o.pC)(a)){const _=(0,j.a)((0,K.c)(),m),l=a.slice(c,E);(0,g.a)(l,i.normal,_),(0,y.oc)(_)&&(0,g.n)(l,l)}else(0,o.pC)(a)&&(0,S.f)(a,0,0,1,{dstIndex:c,count:E});if((0,o.pC)(i.tangent)&&(0,o.pC)(s)){const _=(0,j.a)((0,K.c)(),m),l=s.slice(c,E);(0,A.t)(l,i.tangent,_),(0,y.oc)(_)&&(0,A.n)(l,l)}else(0,o.pC)(s)&&(0,T.f)(s,0,0,1,1,{dstIndex:c,count:E});if((0,o.pC)(i.texCoord0)&&(0,o.pC)(u)?(0,F.n)(u.slice(c,E),i.texCoord0):(0,o.pC)(u)&&(0,F.f)(u,0,0,{dstIndex:c,count:E}),(0,o.pC)(i.color)&&(0,o.pC)(f)){const _=i.color,l=f.slice(c,E);if(4===_.elementCount)_ instanceof M.ek?(0,A.s)(l,_,255):_ instanceof M.mc?(0,T.c)(l,_):_ instanceof M.v6&&(0,A.a)(l,_,8);else{(0,T.f)(l,255,255,255,255);const C=M.ne.fromTypedArray(l.typedBuffer,l.typedBufferStride);_ instanceof M.ct?(0,g.s)(C,_,255):_ instanceof M.ne?(0,S.c)(C,_):_ instanceof M.mw&&(0,g.b)(C,_,8)}}else(0,o.pC)(f)&&(0,T.f)(f.slice(c,E),255,255,255,255)}(t,n);const a=n.gltf,s=function _t(t,n){switch(n){case D.MX.TRIANGLES:return(0,R.nh)(t,H.DX);case D.MX.TRIANGLE_STRIP:return(0,R.DA)(t);case D.MX.TRIANGLE_FAN:return(0,R.jX)(t)}}(a.indices||a.attributes.position.count,a.primitiveType),f=n.region.start;if(f)for(let u=0;u<s.length;u++)s[u]+=f;t.components.push(new N.Z({faces:s,material:r.get(a.material),trustSourceNormals:!0}))}function at(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function lt(t){return{horizontal:w(t.s),vertical:w(t.t)}}function w(t){switch(t){case D.e8.CLAMP_TO_EDGE:return"clamp";case D.e8.MIRRORED_REPEAT:return"mirror";case D.e8.REPEAT:return"repeat"}}function O(t){return t**(1/J.K)*255}}}]);