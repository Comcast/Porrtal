"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[484],{3484:(v,l,n)=>{n.r(l),n.d(l,{OrphanAuthZCardComponent:()=>A});var r=n(6814),g=n(605),_=n(1274),c=n(617),p=n(2296),h=n(5940),m=n(5195),u=n(7398),d=n(2096),O=n(5619),C=n(2596),M=n(7871),t=n(5879);function E(i,e){if(1&i){const a=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(a);const s=t.oxw();return t.KtG(s.toggleMax())}),t.TgZ(1,"mat-icon",9),t._uU(2,"north_east"),t.qZA()()}}function x(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"span",12),t._uU(2),t.qZA(),t.BQk()),2&i){const a=e.$implicit;t.xp6(2),t.Oqu(a.viewId)}}function P(i,e){if(1&i&&(t.TgZ(0,"div",10),t.YNc(1,x,3,1,"ng-container",11),t.qZA()),2&i){const a=e.ngIf;t.xp6(1),t.Q6J("ngForOf",a)}}let A=(()=>{class i{set data(a){this.launchQ$=this.shellStateService.select("authZs").pipe((0,u.U)(o=>o[a].launchQ)),this.key$=(0,d.of)(a)}constructor(a,o,s){this.el=a,this.shellStateService=o,this.authZService=s,this.isMaximized$=new O.X(!1),this.childIndex=-1}toggleMax(){this.shellStateService.dispatch({type:"maximize",htmlEl:this.el.nativeElement,maximizeText:"auth n",restore:()=>{this.isMaximized$.next(!1),console.log("auth-n-card restore",this)}}),this.isMaximized$.next(!0)}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(t.SBq),t.Y36(g.vv),t.Y36(M.Q))},i.\u0275cmp=t.Xpm({type:i,selectors:[["porrtal-orphan-auth-z-card"]],inputs:{data:"data"},standalone:!0,features:[t.jDz],decls:15,vars:14,consts:[[1,"container-container"],[1,"container"],["color","accent",1,"toolbar"],[1,"status-icon"],[1,"card-type"],["mat-button","","class","maximize-button",3,"click",4,"ngIf"],[1,"card-content-container"],["class","properties-container",4,"ngIf","ngIfAs"],["mat-button","",1,"maximize-button",3,"click"],[1,"maximize-icon"],[1,"properties-container"],[4,"ngFor","ngForOf"],[1,"property-title"]],template:function(a,o){1&a&&(t.TgZ(0,"mat-card",0),t.ALo(1,"async"),t.TgZ(2,"div",1)(3,"mat-toolbar",2)(4,"span",3)(5,"mat-icon"),t._uU(6,"view_list"),t.qZA()(),t.TgZ(7,"span",4),t._uU(8),t.ALo(9,"async"),t.qZA(),t.YNc(10,E,3,0,"button",5),t.ALo(11,"async"),t.qZA(),t.TgZ(12,"div",6),t.YNc(13,P,2,1,"div",7),t.ALo(14,"async"),t.qZA()()()),2&a&&(t.ekj("maximize",t.lcZ(1,6,o.isMaximized$)),t.xp6(8),t.hij("orphan(",t.lcZ(9,8,o.key$),")"),t.xp6(2),t.Q6J("ngIf",!t.lcZ(11,10,o.isMaximized$)),t.xp6(3),t.Q6J("ngIf",t.lcZ(14,12,o.launchQ$))("ngIfAs",o.launchQ))},dependencies:[r.ez,r.sg,r.O5,r.Ov,_.g0,_.Ye,c.Ps,c.Hw,p.ot,p.lW,h.Cq,m.QW,m.a8,C.AV],styles:[".container-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.container[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 1fr;position:absolute;inset:0}.maximize[_ngcontent-%COMP%]{z-index:999}.maximize-button[_ngcontent-%COMP%]{position:relative;left:15px;width:32px!important;height:32px!important;min-width:unset!important}.maximize-icon[_ngcontent-%COMP%]{margin-right:0!important}.toolbar[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr auto;align-items:center;max-height:30px;min-height:30px}.spinner[_ngcontent-%COMP%]{margin-right:15px}.status-icon[_ngcontent-%COMP%]{display:grid;margin-right:5px}.card-type[_ngcontent-%COMP%]{margin-right:15px}.card-content-container[_ngcontent-%COMP%]{position:relative;overflow:auto;margin:10px}.properties-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto auto 1fr;align-items:center;row-gap:5px}.property-title[_ngcontent-%COMP%]{margin-right:15px;font-weight:700}.property-value[_ngcontent-%COMP%]{margin:0}"],changeDetection:0}),i})()}}]);