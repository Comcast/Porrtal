"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[1563],{81563:(P,d,r)=>{r.r(d),r.d(d,{default:()=>g});var c=r(15861),l=r(2975),p=r(7184),f=r(25558),a=r(17827);class g{extract(e){return(0,c.Z)(function*(){const t=u(e),s=(0,a.Kl)(t),i=[t.data.buffer];return{result:h(s,i),transferList:i}})()}extractComponentsEdgeLocations(e){return(0,c.Z)(function*(){const t=u(e),s=(0,a.kY)(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=(0,f.n)(s,I,_),o=[];return{result:(0,l.HL)(i.regular.instancesData,o),transferList:o}})()}extractEdgeLocations(e){return(0,c.Z)(function*(){const t=u(e),s=(0,a.kY)(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=(0,f.n)(s,E,_),o=[];return{result:(0,l.HL)(i.regular.instancesData,o),transferList:o}})()}}function u(n){return{data:p.tf.createView(n.dataBuffer),indices:"Uint32Array"===n.indicesType?new Uint32Array(n.indices):"Uint16Array"===n.indicesType?new Uint16Array(n.indices):n.indices,indicesLength:n.indicesLength,writerSettings:n.writerSettings,skipDeduplicate:n.skipDeduplicate}}function h(n,e){return e.push(n.regular.lodInfo.lengths.buffer),e.push(n.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:(0,l.HL)(n.regular.instancesData,e),lodInfo:{lengths:n.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:(0,l.HL)(n.silhouette.instancesData,e),lodInfo:{lengths:n.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:n.averageEdgeLength}}const E=new class L{allocate(e){return a.Yr.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,s){e.position0.setVec(t,s.position0),e.position1.setVec(t,s.position1)}},I=new class D{allocate(e){return a.n_.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,s){e.position0.setVec(t,s.position0),e.position1.setVec(t,s.position1),e.componentIndex.set(t,s.componentIndex)}},_={allocate:()=>null,write:()=>{},trim:()=>null}}}]);