import{u as Ne,T as cn}from"./ToggleTheme-b6c5ace4.js";import{L as un,M as fn,E as le,C as se,l as fe,O as yt,P as wt,Q as We,v as ie,R as hn,S as Ft,T as vn,U as bo,W as yo,X as wo,Y as pn,Z as Ge,$ as Ue,a0 as mn,a1 as gn,a2 as xt,a3 as bn,a4 as pe,a5 as xo,a6 as Ct,a7 as yn,a8 as Ie,a9 as Co,aa as ct,ab as Kt,ac as wn,ad as Ht,ae as Dt,af as Le,ag as xn,ah as jt,ai as Cn,aj as Sn,ak as zn,al as Pn,am as In,an as _n,ao as $n,b as B,a as P,o as ae,d as $,n as L,ap as An,p as me,q as ne,aq as kn,ar as Wt,z as Ce,as as Gt,at as Ut,au as On,A as tt,av as So,aw as Vt,ax as ke,D as te,ay as Nn,az as Tn,aA as zo,aB as de,aC as Mn,aD as En,x as ge,aE as Bn,h as Rn,aF as Ln,aG as Yt,aH as Po,B as Io,f as _o,aI as Fn,aJ as St,aK as Kn,aL as Hn,aM as Dn,V as jn}from"./index-42eaa2a0.js";import{b as G,w as ve,l as Ve,k as _e,c as A,r as Wn,o as Gn,g as Un,i as X,d as U,p as oe,j as Vn,E as Ye,n as $o,t as Z,h as f,m as Yn,x as Ke,G as qn,y as Ao,A as qe,F as zt,D as Xn,_ as Zn,K as Xe,P as Pt,Q as Te,Z as Jn,H as Qn,I as er,J as $e,L as be}from"./pinia-90a77cd0.js";import"./@bassist/utils-fbbd7380.js";import"./vue-router-3de7b52f.js";import"./@bassist/progress-82d28c41.js";import"./pinia-plugin-persistedstate-02097300.js";let He=[];const ko=new WeakMap;function tr(){He.forEach(e=>e(...ko.get(e))),He=[]}function or(e,...t){ko.set(e,t),!He.includes(e)&&He.push(e)===1&&requestAnimationFrame(tr)}function qt(e,t){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[t]!==void 0)return!0;o=o.parentElement}return!1}function nr(e){return t=>{t?e.value=t.$el:e.value=null}}const rr=/^(\d|\.)+$/,Xt=/(\d|\.)+/;function xe(e,{c:t=1,offset:o=0,attachPx:n=!0}={}){if(typeof e=="number"){const r=(e+o)*t;return r===0?"0":`${r}px`}else if(typeof e=="string")if(rr.test(e)){const r=(Number(e)+o)*t;return n?r===0?"0":`${r}px`:`${r}`}else{const r=Xt.exec(e);return r?e.replace(Xt,String((Number(r[0])+o)*t)):e}return e}let ot;function ir(){return ot===void 0&&(ot=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),ot}function lr(e,t,o){if(!t)return e;const n=G(e.value);let r=null;return ve(e,i=>{r!==null&&window.clearTimeout(r),i===!0?o&&!o.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},t):n.value=!1}),n}let ze,Oe;const ar=()=>{var e,t;ze=un?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,Oe=!1,ze!==void 0?ze.then(()=>{Oe=!0}):Oe=!0};ar();function sr(e){if(Oe)return;let t=!1;Ve(()=>{Oe||ze==null||ze.then(()=>{t||e()})}),_e(()=>{t=!0})}function Oo(e,t){return A(()=>{for(const o of t)if(e[o]!==void 0)return e[o];return e[t[t.length-1]]})}function dr(e={},t){const o=Wn({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,i=a=>{switch(a.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}n!==void 0&&Object.keys(n).forEach(c=>{if(c!==a.key)return;const u=n[c];if(typeof u=="function")u(a);else{const{stop:h=!1,prevent:d=!1}=u;h&&a.stopPropagation(),d&&a.preventDefault(),u.handler(a)}})},l=a=>{switch(a.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==a.key)return;const u=r[c];if(typeof u=="function")u(a);else{const{stop:h=!1,prevent:d=!1}=u;h&&a.stopPropagation(),d&&a.preventDefault(),u.handler(a)}})},s=()=>{(t===void 0||t.value)&&(se("keydown",document,i),se("keyup",document,l)),t!==void 0&&ve(t,a=>{a?(se("keydown",document,i),se("keyup",document,l)):(le("keydown",document,i),le("keyup",document,l))})};return fn()?(Gn(s),_e(()=>{(t===void 0||t.value)&&(le("keydown",document,i),le("keyup",document,l))})):s(),Un(o)}const cr=fe("n-internal-select-menu-body"),No="__disabled__";function Pe(e){const t=X(yt,null),o=X(wt,null),n=X(We,null),r=X(cr,null),i=G();if(typeof document<"u"){i.value=document.fullscreenElement;const l=()=>{i.value=document.fullscreenElement};Ve(()=>{se("fullscreenchange",document,l)}),_e(()=>{le("fullscreenchange",document,l)})}return ie(()=>{var l;const{to:s}=e;return s!==void 0?s===!1?No:s===!0?i.value||"body":s:t!=null&&t.value?(l=t.value.$el)!==null&&l!==void 0?l:t.value:o!=null&&o.value?o.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:s??(i.value||"body")})}Pe.tdkey=No;Pe.propTo={type:[String,Object,Boolean],default:void 0};let he=null;function To(){if(he===null&&(he=document.getElementById("v-binder-view-measurer"),he===null)){he=document.createElement("div"),he.id="v-binder-view-measurer";const{style:e}=he;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(he)}return he.getBoundingClientRect()}function ur(e,t){const o=To();return{top:t,left:e,height:0,width:0,right:o.width-e,bottom:o.height-t}}function nt(e){const t=e.getBoundingClientRect(),o=To();return{left:t.left-o.left,top:t.top-o.top,bottom:o.height+o.top-t.bottom,right:o.width+o.left-t.right,width:t.width,height:t.height}}function fr(e){return e.nodeType===9?null:e.parentNode}function Mo(e){if(e===null)return null;const t=fr(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:o,overflowX:n,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(o+r+n))return t}return Mo(t)}const hr=U({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;oe("VBinder",(t=Vn())===null||t===void 0?void 0:t.proxy);const o=X("VBinder",null),n=G(null),r=m=>{n.value=m,o&&e.syncTargetWithParent&&o.setTargetRef(m)};let i=[];const l=()=>{let m=n.value;for(;m=Mo(m),m!==null;)i.push(m);for(const N of i)se("scroll",N,h,!0)},s=()=>{for(const m of i)le("scroll",m,h,!0);i=[]},a=new Set,c=m=>{a.size===0&&l(),a.has(m)||a.add(m)},u=m=>{a.has(m)&&a.delete(m),a.size===0&&s()},h=()=>{or(d)},d=()=>{a.forEach(m=>m())},y=new Set,g=m=>{y.size===0&&se("resize",window,S),y.has(m)||y.add(m)},v=m=>{y.has(m)&&y.delete(m),y.size===0&&le("resize",window,S)},S=()=>{y.forEach(m=>m())};return _e(()=>{le("resize",window,S),s()}),{targetRef:n,setTargetRef:r,addScrollListener:c,removeScrollListener:u,addResizeListener:g,removeResizeListener:v}},render(){return hn("binder",this.$slots)}}),Eo=hr,Bo=U({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=X("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?Ye(Ft("follower",this.$slots),[[t]]):Ft("follower",this.$slots)}}),Se="@@mmoContext",vr={mounted(e,{value:t}){e[Se]={handler:void 0},typeof t=="function"&&(e[Se].handler=t,se("mousemoveoutside",e,t))},updated(e,{value:t}){const o=e[Se];typeof t=="function"?o.handler?o.handler!==t&&(le("mousemoveoutside",e,o.handler),o.handler=t,se("mousemoveoutside",e,t)):(e[Se].handler=t,se("mousemoveoutside",e,t)):o.handler&&(le("mousemoveoutside",e,o.handler),o.handler=void 0)},unmounted(e){const{handler:t}=e[Se];t&&le("mousemoveoutside",e,t),e[Se].handler=void 0}},pr=vr,{c:Ae}=vn(),Ro="vueuc-style",Ee={top:"bottom",bottom:"top",left:"right",right:"left"},Zt={start:"end",center:"center",end:"start"},rt={top:"height",bottom:"height",left:"width",right:"width"},mr={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},gr={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},br={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Jt={top:!0,bottom:!1,left:!0,right:!1},Qt={top:"end",bottom:"start",left:"end",right:"start"};function yr(e,t,o,n,r,i){if(!r||i)return{placement:e,top:0,left:0};const[l,s]=e.split("-");let a=s??"center",c={top:0,left:0};const u=(y,g,v)=>{let S=0,m=0;const N=o[y]-t[g]-t[y];return N>0&&n&&(v?m=Jt[g]?N:-N:S=Jt[g]?N:-N),{left:S,top:m}},h=l==="left"||l==="right";if(a!=="center"){const y=br[e],g=Ee[y],v=rt[y];if(o[v]>t[v]){if(t[y]+t[v]<o[v]){const S=(o[v]-t[v])/2;t[y]<S||t[g]<S?t[y]<t[g]?(a=Zt[s],c=u(v,g,h)):c=u(v,y,h):a="center"}}else o[v]<t[v]&&t[g]<0&&t[y]>t[g]&&(a=Zt[s])}else{const y=l==="bottom"||l==="top"?"left":"top",g=Ee[y],v=rt[y],S=(o[v]-t[v])/2;(t[y]<S||t[g]<S)&&(t[y]>t[g]?(a=Qt[y],c=u(v,y,h)):(a=Qt[g],c=u(v,g,h)))}let d=l;return t[l]<o[rt[l]]&&t[l]<t[Ee[l]]&&(d=Ee[l]),{placement:a!=="center"?`${d}-${a}`:d,left:c.left,top:c.top}}function wr(e,t){return t?gr[e]:mr[e]}function xr(e,t,o,n,r,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(o.top-t.top+o.height)}px`,left:`${Math.round(o.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(o.top-t.top+o.height)}px`,left:`${Math.round(o.left-t.left+o.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(o.top-t.top)}px`,left:`${Math.round(o.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(o.top-t.top)}px`,left:`${Math.round(o.left-t.left+o.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(o.top-t.top)}px`,left:`${Math.round(o.left-t.left+o.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(o.top-t.top+o.height)}px`,left:`${Math.round(o.left-t.left+o.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(o.top-t.top)}px`,left:`${Math.round(o.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(o.top-t.top+o.height)}px`,left:`${Math.round(o.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(o.top-t.top)}px`,left:`${Math.round(o.left-t.left+o.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(o.top-t.top+o.height/2)}px`,left:`${Math.round(o.left-t.left+o.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(o.top-t.top+o.height/2)}px`,left:`${Math.round(o.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(o.top-t.top+o.height)}px`,left:`${Math.round(o.left-t.left+o.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(o.top-t.top+o.height+n)}px`,left:`${Math.round(o.left-t.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(o.top-t.top+o.height+n)}px`,left:`${Math.round(o.left-t.left+o.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(o.top-t.top+n)}px`,left:`${Math.round(o.left-t.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(o.top-t.top+n)}px`,left:`${Math.round(o.left-t.left+o.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(o.top-t.top+n)}px`,left:`${Math.round(o.left-t.left+o.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(o.top-t.top+o.height+n)}px`,left:`${Math.round(o.left-t.left+o.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(o.top-t.top+n)}px`,left:`${Math.round(o.left-t.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(o.top-t.top+o.height+n)}px`,left:`${Math.round(o.left-t.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(o.top-t.top+n)}px`,left:`${Math.round(o.left-t.left+o.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(o.top-t.top+o.height/2+n)}px`,left:`${Math.round(o.left-t.left+o.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(o.top-t.top+o.height/2+n)}px`,left:`${Math.round(o.left-t.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(o.top-t.top+o.height+n)}px`,left:`${Math.round(o.left-t.left+o.width/2+r)}px`,transform:"translateX(-50%)"}}}const Cr=Ae([Ae(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),Ae(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[Ae("> *",{pointerEvents:"all"})])]),Lo=U({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=X("VBinder"),o=ie(()=>e.enabled!==void 0?e.enabled:e.show),n=G(null),r=G(null),i=()=>{const{syncTrigger:d}=e;d.includes("scroll")&&t.addScrollListener(a),d.includes("resize")&&t.addResizeListener(a)},l=()=>{t.removeScrollListener(a),t.removeResizeListener(a)};Ve(()=>{o.value&&(a(),i())});const s=bo();Cr.mount({id:"vueuc/binder",head:!0,anchorMetaName:Ro,ssr:s}),_e(()=>{l()}),sr(()=>{o.value&&a()});const a=()=>{if(!o.value)return;const d=n.value;if(d===null)return;const y=t.targetRef,{x:g,y:v,overlap:S}=e,m=g!==void 0&&v!==void 0?ur(g,v):nt(y);d.style.setProperty("--v-target-width",`${Math.round(m.width)}px`),d.style.setProperty("--v-target-height",`${Math.round(m.height)}px`);const{width:N,minWidth:R,placement:w,internalShift:x,flip:_}=e;d.setAttribute("v-placement",w),S?d.setAttribute("v-overlap",""):d.removeAttribute("v-overlap");const{style:b}=d;N==="target"?b.width=`${m.width}px`:N!==void 0?b.width=N:b.width="",R==="target"?b.minWidth=`${m.width}px`:R!==void 0?b.minWidth=R:b.minWidth="";const M=nt(d),E=nt(r.value),{left:I,top:j,placement:T}=yr(w,m,M,x,_,S),W=wr(T,S),{left:F,top:C,transform:D}=xr(T,E,m,j,I,S);d.setAttribute("v-placement",T),d.style.setProperty("--v-offset-left",`${Math.round(I)}px`),d.style.setProperty("--v-offset-top",`${Math.round(j)}px`),d.style.transform=`translateX(${F}) translateY(${C}) ${D}`,d.style.setProperty("--v-transform-origin",W),d.style.transformOrigin=W};ve(o,d=>{d?(i(),c()):l()});const c=()=>{$o().then(a).catch(d=>console.error(d))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(d=>{ve(Z(e,d),a)}),["teleportDisabled"].forEach(d=>{ve(Z(e,d),c)}),ve(Z(e,"syncTrigger"),d=>{d.includes("resize")?t.addResizeListener(a):t.removeResizeListener(a),d.includes("scroll")?t.addScrollListener(a):t.removeScrollListener(a)});const u=yo(),h=ie(()=>{const{to:d}=e;if(d!==void 0)return d;u.value});return{VBinder:t,mergedEnabled:o,offsetContainerRef:r,followerRef:n,mergedTo:h,syncPosition:a}},render(){return f(pn,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const o=f("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[f("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?Ye(o,[[wo,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):o}})}}),ce="v-hidden",Sr=Ae("[v-hidden]",{display:"none!important"}),zr=U({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const o=G(null),n=G(null);function r(l){const{value:s}=o,{getCounter:a,getTail:c}=e;let u;if(a!==void 0?u=a():u=n.value,!s||!u)return;u.hasAttribute(ce)&&u.removeAttribute(ce);const{children:h}=s;if(l.showAllItemsBeforeCalculate)for(const R of h)R.hasAttribute(ce)&&R.removeAttribute(ce);const d=s.offsetWidth,y=[],g=t.tail?c==null?void 0:c():null;let v=g?g.offsetWidth:0,S=!1;const m=s.children.length-(t.tail?1:0);for(let R=0;R<m-1;++R){if(R<0)continue;const w=h[R];if(S){w.hasAttribute(ce)||w.setAttribute(ce,"");continue}else w.hasAttribute(ce)&&w.removeAttribute(ce);const x=w.offsetWidth;if(v+=x,y[R]=x,v>d){const{updateCounter:_}=e;for(let b=R;b>=0;--b){const M=m-1-b;_!==void 0?_(M):u.textContent=`${M}`;const E=u.offsetWidth;if(v-=y[b],v+E<=d||b===0){S=!0,R=b-1,g&&(R===-1?(g.style.maxWidth=`${d-E}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");const{onUpdateCount:I}=e;I&&I(M);break}}}}const{onUpdateOverflow:N}=e;S?N!==void 0&&N(!0):(N!==void 0&&N(!1),u.setAttribute(ce,""))}const i=bo();return Sr.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Ro,ssr:i}),Ve(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:o,counterRef:n,sync:r}},render(){const{$slots:e}=this;return $o(()=>this.sync({showAllItemsBeforeCalculate:!1})),f("div",{class:"v-overflow",ref:"selfRef"},[Yn(e,"default"),e.counter?e.counter():f("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});var Pr=Ge(Ue,"WeakMap");const ut=Pr;var Ir=mn(Object.keys,Object);const _r=Ir;var $r=Object.prototype,Ar=$r.hasOwnProperty;function kr(e){if(!gn(e))return _r(e);var t=[];for(var o in Object(e))Ar.call(e,o)&&o!="constructor"&&t.push(o);return t}function It(e){return xt(e)?bn(e):kr(e)}var Or=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nr=/^\w*$/;function _t(e,t){if(pe(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||xo(e)?!0:Nr.test(e)||!Or.test(e)||t!=null&&e in Object(t)}var Tr="Expected a function";function $t(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Tr);var o=function(){var n=arguments,r=t?t.apply(this,n):n[0],i=o.cache;if(i.has(r))return i.get(r);var l=e.apply(this,n);return o.cache=i.set(r,l)||i,l};return o.cache=new($t.Cache||Ct),o}$t.Cache=Ct;var Mr=500;function Er(e){var t=$t(e,function(n){return o.size===Mr&&o.clear(),n}),o=t.cache;return t}var Br=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rr=/\\(\\)?/g,Lr=Er(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Br,function(o,n,r,i){t.push(r?i.replace(Rr,"$1"):n||o)}),t});const Fr=Lr;function Fo(e,t){return pe(e)?e:_t(e,t)?[e]:Fr(yn(e))}var Kr=1/0;function Ze(e){if(typeof e=="string"||xo(e))return e;var t=e+"";return t=="0"&&1/e==-Kr?"-0":t}function Ko(e,t){t=Fo(t,e);for(var o=0,n=t.length;e!=null&&o<n;)e=e[Ze(t[o++])];return o&&o==n?e:void 0}function Hr(e,t,o){var n=e==null?void 0:Ko(e,t);return n===void 0?o:n}function Dr(e,t){for(var o=-1,n=t.length,r=e.length;++o<n;)e[r+o]=t[o];return e}function jr(e,t){for(var o=-1,n=e==null?0:e.length,r=0,i=[];++o<n;){var l=e[o];t(l,o,e)&&(i[r++]=l)}return i}function Wr(){return[]}var Gr=Object.prototype,Ur=Gr.propertyIsEnumerable,eo=Object.getOwnPropertySymbols,Vr=eo?function(e){return e==null?[]:(e=Object(e),jr(eo(e),function(t){return Ur.call(e,t)}))}:Wr;const Yr=Vr;function qr(e,t,o){var n=t(e);return pe(e)?n:Dr(n,o(e))}function to(e){return qr(e,It,Yr)}var Xr=Ge(Ue,"DataView");const ft=Xr;var Zr=Ge(Ue,"Promise");const ht=Zr;var Jr=Ge(Ue,"Set");const vt=Jr;var oo="[object Map]",Qr="[object Object]",no="[object Promise]",ro="[object Set]",io="[object WeakMap]",lo="[object DataView]",ei=Ie(ft),ti=Ie(ct),oi=Ie(ht),ni=Ie(vt),ri=Ie(ut),we=Co;(ft&&we(new ft(new ArrayBuffer(1)))!=lo||ct&&we(new ct)!=oo||ht&&we(ht.resolve())!=no||vt&&we(new vt)!=ro||ut&&we(new ut)!=io)&&(we=function(e){var t=Co(e),o=t==Qr?e.constructor:void 0,n=o?Ie(o):"";if(n)switch(n){case ei:return lo;case ti:return oo;case oi:return no;case ni:return ro;case ri:return io}return t});const ao=we;var ii="__lodash_hash_undefined__";function li(e){return this.__data__.set(e,ii),this}function ai(e){return this.__data__.has(e)}function De(e){var t=-1,o=e==null?0:e.length;for(this.__data__=new Ct;++t<o;)this.add(e[t])}De.prototype.add=De.prototype.push=li;De.prototype.has=ai;function si(e,t){for(var o=-1,n=e==null?0:e.length;++o<n;)if(t(e[o],o,e))return!0;return!1}function di(e,t){return e.has(t)}var ci=1,ui=2;function Ho(e,t,o,n,r,i){var l=o&ci,s=e.length,a=t.length;if(s!=a&&!(l&&a>s))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var h=-1,d=!0,y=o&ui?new De:void 0;for(i.set(e,t),i.set(t,e);++h<s;){var g=e[h],v=t[h];if(n)var S=l?n(v,g,h,t,e,i):n(g,v,h,e,t,i);if(S!==void 0){if(S)continue;d=!1;break}if(y){if(!si(t,function(m,N){if(!di(y,N)&&(g===m||r(g,m,o,n,i)))return y.push(N)})){d=!1;break}}else if(!(g===v||r(g,v,o,n,i))){d=!1;break}}return i.delete(e),i.delete(t),d}function fi(e){var t=-1,o=Array(e.size);return e.forEach(function(n,r){o[++t]=[r,n]}),o}function hi(e){var t=-1,o=Array(e.size);return e.forEach(function(n){o[++t]=n}),o}var vi=1,pi=2,mi="[object Boolean]",gi="[object Date]",bi="[object Error]",yi="[object Map]",wi="[object Number]",xi="[object RegExp]",Ci="[object Set]",Si="[object String]",zi="[object Symbol]",Pi="[object ArrayBuffer]",Ii="[object DataView]",so=Kt?Kt.prototype:void 0,it=so?so.valueOf:void 0;function _i(e,t,o,n,r,i,l){switch(o){case Ii:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Pi:return!(e.byteLength!=t.byteLength||!i(new Ht(e),new Ht(t)));case mi:case gi:case wi:return wn(+e,+t);case bi:return e.name==t.name&&e.message==t.message;case xi:case Si:return e==t+"";case yi:var s=fi;case Ci:var a=n&vi;if(s||(s=hi),e.size!=t.size&&!a)return!1;var c=l.get(e);if(c)return c==t;n|=pi,l.set(e,t);var u=Ho(s(e),s(t),n,r,i,l);return l.delete(e),u;case zi:if(it)return it.call(e)==it.call(t)}return!1}var $i=1,Ai=Object.prototype,ki=Ai.hasOwnProperty;function Oi(e,t,o,n,r,i){var l=o&$i,s=to(e),a=s.length,c=to(t),u=c.length;if(a!=u&&!l)return!1;for(var h=a;h--;){var d=s[h];if(!(l?d in t:ki.call(t,d)))return!1}var y=i.get(e),g=i.get(t);if(y&&g)return y==t&&g==e;var v=!0;i.set(e,t),i.set(t,e);for(var S=l;++h<a;){d=s[h];var m=e[d],N=t[d];if(n)var R=l?n(N,m,d,t,e,i):n(m,N,d,e,t,i);if(!(R===void 0?m===N||r(m,N,o,n,i):R)){v=!1;break}S||(S=d=="constructor")}if(v&&!S){var w=e.constructor,x=t.constructor;w!=x&&"constructor"in e&&"constructor"in t&&!(typeof w=="function"&&w instanceof w&&typeof x=="function"&&x instanceof x)&&(v=!1)}return i.delete(e),i.delete(t),v}var Ni=1,co="[object Arguments]",uo="[object Array]",Be="[object Object]",Ti=Object.prototype,fo=Ti.hasOwnProperty;function Mi(e,t,o,n,r,i){var l=pe(e),s=pe(t),a=l?uo:ao(e),c=s?uo:ao(t);a=a==co?Be:a,c=c==co?Be:c;var u=a==Be,h=c==Be,d=a==c;if(d&&Dt(e)){if(!Dt(t))return!1;l=!0,u=!1}if(d&&!u)return i||(i=new Le),l||xn(e)?Ho(e,t,o,n,r,i):_i(e,t,a,o,n,r,i);if(!(o&Ni)){var y=u&&fo.call(e,"__wrapped__"),g=h&&fo.call(t,"__wrapped__");if(y||g){var v=y?e.value():e,S=g?t.value():t;return i||(i=new Le),r(v,S,o,n,i)}}return d?(i||(i=new Le),Oi(e,t,o,n,r,i)):!1}function At(e,t,o,n,r){return e===t?!0:e==null||t==null||!jt(e)&&!jt(t)?e!==e&&t!==t:Mi(e,t,o,n,At,r)}var Ei=1,Bi=2;function Ri(e,t,o,n){var r=o.length,i=r,l=!n;if(e==null)return!i;for(e=Object(e);r--;){var s=o[r];if(l&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++r<i;){s=o[r];var a=s[0],c=e[a],u=s[1];if(l&&s[2]){if(c===void 0&&!(a in e))return!1}else{var h=new Le;if(n)var d=n(c,u,a,e,t,h);if(!(d===void 0?At(u,c,Ei|Bi,n,h):d))return!1}}return!0}function Do(e){return e===e&&!Cn(e)}function Li(e){for(var t=It(e),o=t.length;o--;){var n=t[o],r=e[n];t[o]=[n,r,Do(r)]}return t}function jo(e,t){return function(o){return o==null?!1:o[e]===t&&(t!==void 0||e in Object(o))}}function Fi(e){var t=Li(e);return t.length==1&&t[0][2]?jo(t[0][0],t[0][1]):function(o){return o===e||Ri(o,e,t)}}function Ki(e,t){return e!=null&&t in Object(e)}function Hi(e,t,o){t=Fo(t,e);for(var n=-1,r=t.length,i=!1;++n<r;){var l=Ze(t[n]);if(!(i=e!=null&&o(e,l)))break;e=e[l]}return i||++n!=r?i:(r=e==null?0:e.length,!!r&&Sn(r)&&zn(l,r)&&(pe(e)||Pn(e)))}function Di(e,t){return e!=null&&Hi(e,t,Ki)}var ji=1,Wi=2;function Gi(e,t){return _t(e)&&Do(t)?jo(Ze(e),t):function(o){var n=Hr(o,e);return n===void 0&&n===t?Di(o,e):At(t,n,ji|Wi)}}function Ui(e){return function(t){return t==null?void 0:t[e]}}function Vi(e){return function(t){return Ko(t,e)}}function Yi(e){return _t(e)?Ui(Ze(e)):Vi(e)}function qi(e){return typeof e=="function"?e:e==null?In:typeof e=="object"?pe(e)?Gi(e[0],e[1]):Fi(e):Yi(e)}function Xi(e,t){return e&&_n(e,t,It)}function Zi(e,t){return function(o,n){if(o==null)return o;if(!xt(o))return e(o,n);for(var r=o.length,i=t?r:-1,l=Object(o);(t?i--:++i<r)&&n(l[i],i,l)!==!1;);return o}}var Ji=Zi(Xi);const Qi=Ji;function el(e,t){var o=-1,n=xt(e)?Array(e.length):[];return Qi(e,function(r,i,l){n[++o]=t(r,i,l)}),n}function tl(e,t){var o=pe(e)?$n:el;return o(e,qi(t))}const Wo=U({name:"ChevronRight",render(){return f("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ol=U({name:"ChevronDownFilled",render(){return f("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function ho(e){return Array.isArray(e)?e:[e]}const pt={STOP:"STOP"};function Go(e,t){const o=t(e);e.children!==void 0&&o!==pt.STOP&&e.children.forEach(n=>Go(n,t))}function nl(e,t={}){const{preserveGroup:o=!1}=t,n=[],r=o?l=>{l.isLeaf||(n.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||n.push(l.key),i(l.children))};function i(l){l.forEach(r)}return i(e),n}function rl(e,t){const{isLeaf:o}=e;return o!==void 0?o:!t(e)}function il(e){return e.children}function ll(e){return e.key}function al(){return!1}function sl(e,t){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(t(e)))}function dl(e){return e.disabled===!0}function cl(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function lt(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function at(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function ul(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)||o.add(n)}),Array.from(o)}function fl(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)&&o.delete(n)}),Array.from(o)}function hl(e){return(e==null?void 0:e.type)==="group"}class vl extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function pl(e,t,o,n){return je(t.concat(e),o,n,!1)}function ml(e,t){const o=new Set;return e.forEach(n=>{const r=t.treeNodeMap.get(n);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||o.has(i.key));)o.add(i.key),i=i.parent}}),o}function gl(e,t,o,n){const r=je(t,o,n,!1),i=je(e,o,n,!0),l=ml(e,o),s=[];return r.forEach(a=>{(i.has(a)||l.has(a))&&s.push(a)}),s.forEach(a=>r.delete(a)),r}function st(e,t){const{checkedKeys:o,keysToCheck:n,keysToUncheck:r,indeterminateKeys:i,cascade:l,leafOnly:s,checkStrategy:a,allowNotLoaded:c}=e;if(!l)return n!==void 0?{checkedKeys:ul(o,n),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:fl(o,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:u}=t;let h;r!==void 0?h=gl(r,o,t,c):n!==void 0?h=pl(n,o,t,c):h=je(o,t,c,!1);const d=a==="parent",y=a==="child"||s,g=h,v=new Set,S=Math.max.apply(null,Array.from(u.keys()));for(let m=S;m>=0;m-=1){const N=m===0,R=u.get(m);for(const w of R){if(w.isLeaf)continue;const{key:x,shallowLoaded:_}=w;if(y&&_&&w.children.forEach(I=>{!I.disabled&&!I.isLeaf&&I.shallowLoaded&&g.has(I.key)&&g.delete(I.key)}),w.disabled||!_)continue;let b=!0,M=!1,E=!0;for(const I of w.children){const j=I.key;if(!I.disabled){if(E&&(E=!1),g.has(j))M=!0;else if(v.has(j)){M=!0,b=!1;break}else if(b=!1,M)break}}b&&!E?(d&&w.children.forEach(I=>{!I.disabled&&g.has(I.key)&&g.delete(I.key)}),g.add(x)):M&&v.add(x),N&&y&&g.has(x)&&g.delete(x)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(v)}}function je(e,t,o,n){const{treeNodeMap:r,getChildren:i}=t,l=new Set,s=new Set(e);return e.forEach(a=>{const c=r.get(a);c!==void 0&&Go(c,u=>{if(u.disabled)return pt.STOP;const{key:h}=u;if(!l.has(h)&&(l.add(h),s.add(h),cl(u.rawNode,i))){if(n)return pt.STOP;if(!o)throw new vl}})}),s}function bl(e,{includeGroup:t=!1,includeSelf:o=!0},n){var r;const i=n.treeNodeMap;let l=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return s.treeNode=null,s;for(;l;)!l.ignored&&(t||!l.isGroup)&&s.treeNodePath.push(l),l=l.parent;return s.treeNodePath.reverse(),o||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(a=>a.key),s}function yl(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function wl(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r+1)%n]:r===o.length-1?null:o[r+1]}function vo(e,t,{loop:o=!1,includeDisabled:n=!1}={}){const r=t==="prev"?xl:wl,i={reverse:t==="prev"};let l=!1,s=null;function a(c){if(c!==null){if(c===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!c.disabled||n)&&!c.ignored&&!c.isGroup){s=c;return}if(c.isGroup){const u=kt(c,i);u!==null?s=u:a(r(c,o))}else{const u=r(c,!1);if(u!==null)a(u);else{const h=Cl(c);h!=null&&h.isGroup?a(r(h,o)):o&&a(r(c,!0))}}}}return a(e),s}function xl(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r-1+n)%n]:r===0?null:o[r-1]}function Cl(e){return e.parent}function kt(e,t={}){const{reverse:o=!1}=t,{children:n}=e;if(n){const{length:r}=n,i=o?r-1:0,l=o?-1:r,s=o?-1:1;for(let a=i;a!==l;a+=s){const c=n[a];if(!c.disabled&&!c.ignored)if(c.isGroup){const u=kt(c,t);if(u!==null)return u}else return c}}return null}const Sl={getChild(){return this.ignored?null:kt(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return vo(this,"next",e)},getPrev(e={}){return vo(this,"prev",e)}};function zl(e,t){const o=t?new Set(t):void 0,n=[];function r(i){i.forEach(l=>{n.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||o===void 0||o.has(l.key))&&r(l.children)})}return r(e),n}function Pl(e,t){const o=e.key;for(;t;){if(t.key===o)return!0;t=t.parent}return!1}function Uo(e,t,o,n,r,i=null,l=0){const s=[];return e.forEach((a,c)=>{var u;const h=Object.create(n);if(h.rawNode=a,h.siblings=s,h.level=l,h.index=c,h.isFirstChild=c===0,h.isLastChild=c+1===e.length,h.parent=i,!h.ignored){const d=r(a);Array.isArray(d)&&(h.children=Uo(d,t,o,n,r,h,l+1))}s.push(h),t.set(h.key,h),o.has(l)||o.set(l,[]),(u=o.get(l))===null||u===void 0||u.push(h)}),s}function Fe(e,t={}){var o;const n=new Map,r=new Map,{getDisabled:i=dl,getIgnored:l=al,getIsGroup:s=hl,getKey:a=ll}=t,c=(o=t.getChildren)!==null&&o!==void 0?o:il,u=t.ignoreEmptyChildren?w=>{const x=c(w);return Array.isArray(x)?x.length?x:null:x}:c,h=Object.assign({get key(){return a(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return rl(this.rawNode,u)},get shallowLoaded(){return sl(this.rawNode,u)},get ignored(){return l(this.rawNode)},contains(w){return Pl(this,w)}},Sl),d=Uo(e,n,r,h,u);function y(w){if(w==null)return null;const x=n.get(w);return x&&!x.isGroup&&!x.ignored?x:null}function g(w){if(w==null)return null;const x=n.get(w);return x&&!x.ignored?x:null}function v(w,x){const _=g(w);return _?_.getPrev(x):null}function S(w,x){const _=g(w);return _?_.getNext(x):null}function m(w){const x=g(w);return x?x.getParent():null}function N(w){const x=g(w);return x?x.getChild():null}const R={treeNodes:d,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(w){return zl(d,w)},getNode:y,getPrev:v,getNext:S,getParent:m,getChild:N,getFirstAvailableNode(){return yl(d)},getPath(w,x={}){return bl(w,x,R)},getCheckedKeys(w,x={}){const{cascade:_=!0,leafOnly:b=!1,checkStrategy:M="all",allowNotLoaded:E=!1}=x;return st({checkedKeys:lt(w),indeterminateKeys:at(w),cascade:_,leafOnly:b,checkStrategy:M,allowNotLoaded:E},R)},check(w,x,_={}){const{cascade:b=!0,leafOnly:M=!1,checkStrategy:E="all",allowNotLoaded:I=!1}=_;return st({checkedKeys:lt(x),indeterminateKeys:at(x),keysToCheck:w==null?[]:ho(w),cascade:b,leafOnly:M,checkStrategy:E,allowNotLoaded:I},R)},uncheck(w,x,_={}){const{cascade:b=!0,leafOnly:M=!1,checkStrategy:E="all",allowNotLoaded:I=!1}=_;return st({checkedKeys:lt(x),indeterminateKeys:at(x),keysToUncheck:w==null?[]:ho(w),cascade:b,leafOnly:M,checkStrategy:E,allowNotLoaded:I},R)},getNonLeafKeys(w={}){return nl(d,w)}};return R}const dt={top:"bottom",bottom:"top",left:"right",right:"left"},Q="var(--n-arrow-height) * 1.414",Il=B([P("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[B(">",[P("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ae("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[ae("scrollable",[ae("show-header-or-footer","padding: var(--n-padding);")])]),$("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),$("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),L("scrollable, show-header-or-footer",[$("content",`
 padding: var(--n-padding);
 `)])]),P("popover-shared",`
 transform-origin: inherit;
 `,[P("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[P("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Q});
 height: calc(${Q});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),B("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),B("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),B("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),B("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),re("top-start",`
 top: calc(${Q} / -2);
 left: calc(${ue("top-start")} - var(--v-offset-left));
 `),re("top",`
 top: calc(${Q} / -2);
 transform: translateX(calc(${Q} / -2)) rotate(45deg);
 left: 50%;
 `),re("top-end",`
 top: calc(${Q} / -2);
 right: calc(${ue("top-end")} + var(--v-offset-left));
 `),re("bottom-start",`
 bottom: calc(${Q} / -2);
 left: calc(${ue("bottom-start")} - var(--v-offset-left));
 `),re("bottom",`
 bottom: calc(${Q} / -2);
 transform: translateX(calc(${Q} / -2)) rotate(45deg);
 left: 50%;
 `),re("bottom-end",`
 bottom: calc(${Q} / -2);
 right: calc(${ue("bottom-end")} + var(--v-offset-left));
 `),re("left-start",`
 left: calc(${Q} / -2);
 top: calc(${ue("left-start")} - var(--v-offset-top));
 `),re("left",`
 left: calc(${Q} / -2);
 transform: translateY(calc(${Q} / -2)) rotate(45deg);
 top: 50%;
 `),re("left-end",`
 left: calc(${Q} / -2);
 bottom: calc(${ue("left-end")} + var(--v-offset-top));
 `),re("right-start",`
 right: calc(${Q} / -2);
 top: calc(${ue("right-start")} - var(--v-offset-top));
 `),re("right",`
 right: calc(${Q} / -2);
 transform: translateY(calc(${Q} / -2)) rotate(45deg);
 top: 50%;
 `),re("right-end",`
 right: calc(${Q} / -2);
 bottom: calc(${ue("right-end")} + var(--v-offset-top));
 `),...tl({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const o=["right","left"].includes(t),n=o?"width":"height";return e.map(r=>{const i=r.split("-")[1]==="end",s=`calc((${`var(--v-target-${n}, 0px)`} - ${Q}) / 2)`,a=ue(r);return B(`[v-placement="${r}"] >`,[P("popover-shared",[L("center-arrow",[P("popover-arrow",`${t}: calc(max(${s}, ${a}) ${i?"+":"-"} var(--v-offset-${o?"left":"top"}));`)])])])})})]);function ue(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function re(e,t){const o=e.split("-")[0],n=["top","bottom"].includes(o)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return B(`[v-placement="${e}"] >`,[P("popover-shared",`
 margin-${dt[o]}: var(--n-space);
 `,[L("show-arrow",`
 margin-${dt[o]}: var(--n-space-arrow);
 `),L("overlap",`
 margin: 0;
 `),An("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${o}: 100%;
 ${dt[o]}: auto;
 ${n}
 `,[P("popover-arrow",t)])])])}const Vo=Object.assign(Object.assign({},ne.props),{to:Pe.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),Yo=({arrowClass:e,arrowStyle:t,arrowWrapperClass:o,arrowWrapperStyle:n,clsPrefix:r})=>f("div",{key:"__popover-arrow__",style:n,class:[`${r}-popover-arrow-wrapper`,o]},f("div",{class:[`${r}-popover-arrow`,e],style:t})),_l=U({name:"PopoverBody",inheritAttrs:!1,props:Vo,setup(e,{slots:t,attrs:o}){const{namespaceRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:i}=me(e),l=ne("Popover","-popover",Il,kn,e,r),s=G(null),a=X("NPopover"),c=G(null),u=G(e.show),h=G(!1);Ke(()=>{const{show:b}=e;b&&!ir()&&!e.internalDeactivateImmediately&&(h.value=!0)});const d=A(()=>{const{trigger:b,onClickoutside:M}=e,E=[],{positionManuallyRef:{value:I}}=a;return I||(b==="click"&&!M&&E.push([Wt,w,void 0,{capture:!0}]),b==="hover"&&E.push([pr,R])),M&&E.push([Wt,w,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&h.value)&&E.push([qn,e.show]),E}),y=A(()=>{const b=e.width==="trigger"?void 0:xe(e.width),M=[];b&&M.push({width:b});const{maxWidth:E,minWidth:I}=e;return E&&M.push({maxWidth:xe(E)}),I&&M.push({maxWidth:xe(I)}),i||M.push(g.value),M}),g=A(()=>{const{common:{cubicBezierEaseInOut:b,cubicBezierEaseIn:M,cubicBezierEaseOut:E},self:{space:I,spaceArrow:j,padding:T,fontSize:W,textColor:F,dividerColor:C,color:D,boxShadow:O,borderRadius:V,arrowHeight:ee,arrowOffset:J,arrowOffsetVertical:k}}=l.value;return{"--n-box-shadow":O,"--n-bezier":b,"--n-bezier-ease-in":M,"--n-bezier-ease-out":E,"--n-font-size":W,"--n-text-color":F,"--n-color":D,"--n-divider-color":C,"--n-border-radius":V,"--n-arrow-height":ee,"--n-arrow-offset":J,"--n-arrow-offset-vertical":k,"--n-padding":T,"--n-space":I,"--n-space-arrow":j}}),v=i?Ce("popover",void 0,g,e):void 0;a.setBodyInstance({syncPosition:S}),_e(()=>{a.setBodyInstance(null)}),ve(Z(e,"show"),b=>{e.animated||(b?u.value=!0:u.value=!1)});function S(){var b;(b=s.value)===null||b===void 0||b.syncPosition()}function m(b){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&a.handleMouseEnter(b)}function N(b){e.trigger==="hover"&&e.keepAliveOnHover&&a.handleMouseLeave(b)}function R(b){e.trigger==="hover"&&!x().contains(Gt(b))&&a.handleMouseMoveOutside(b)}function w(b){(e.trigger==="click"&&!x().contains(Gt(b))||e.onClickoutside)&&a.handleClickOutside(b)}function x(){return a.getTriggerElement()}oe(We,c),oe(wt,null),oe(yt,null);function _(){if(v==null||v.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&h.value))return null;let M;const E=a.internalRenderBodyRef.value,{value:I}=r;if(E)M=E([`${I}-popover-shared`,v==null?void 0:v.themeClass.value,e.overlap&&`${I}-popover-shared--overlap`,e.showArrow&&`${I}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${I}-popover-shared--center-arrow`],c,y.value,m,N);else{const{value:j}=a.extraClassRef,{internalTrapFocus:T}=e,W=!Ut(t.header)||!Ut(t.footer),F=()=>{var C,D;const O=W?f(zt,null,tt(t.header,J=>J?f("div",{class:[`${I}-popover__header`,e.headerClass],style:e.headerStyle},J):null),tt(t.default,J=>J?f("div",{class:[`${I}-popover__content`,e.contentClass],style:e.contentStyle},t):null),tt(t.footer,J=>J?f("div",{class:[`${I}-popover__footer`,e.footerClass],style:e.footerStyle},J):null)):e.scrollable?(C=t.default)===null||C===void 0?void 0:C.call(t):f("div",{class:[`${I}-popover__content`,e.contentClass],style:e.contentStyle},t),V=e.scrollable?f(So,{contentClass:W?void 0:`${I}-popover__content ${(D=e.contentClass)!==null&&D!==void 0?D:""}`,contentStyle:W?void 0:e.contentStyle},{default:()=>O}):O,ee=e.showArrow?Yo({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:I}):null;return[V,ee]};M=f("div",qe({class:[`${I}-popover`,`${I}-popover-shared`,v==null?void 0:v.themeClass.value,j.map(C=>`${I}-${C}`),{[`${I}-popover--scrollable`]:e.scrollable,[`${I}-popover--show-header-or-footer`]:W,[`${I}-popover--raw`]:e.raw,[`${I}-popover-shared--overlap`]:e.overlap,[`${I}-popover-shared--show-arrow`]:e.showArrow,[`${I}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:y.value,onKeydown:a.handleKeydown,onMouseenter:m,onMouseleave:N},o),T?f(On,{active:e.show,autoFocus:!0},{default:F}):F())}return Ye(M,d.value)}return{displayed:h,namespace:n,isMounted:a.isMountedRef,zIndex:a.zIndexRef,followerRef:s,adjustedTo:Pe(e),followerEnabled:u,renderContentNode:_}},render(){return f(Lo,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Pe.tdkey},{default:()=>this.animated?f(Ao,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),$l=Object.keys(Vo),Al={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function kl(e,t,o){Al[t].forEach(n=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[n],i=o[n];r?e.props[n]=(...l)=>{r(...l),i(...l)}:e.props[n]=i})}const Je={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Pe.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Ol=Object.assign(Object.assign(Object.assign({},ne.props),Je),{internalOnAfterLeave:Function,internalRenderBody:Function}),qo=U({name:"Popover",inheritAttrs:!1,props:Ol,__popover__:!0,setup(e){const t=yo(),o=G(null),n=A(()=>e.show),r=G(e.defaultShow),i=Ne(n,r),l=ie(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:C}=e;return!!(C!=null&&C())},a=()=>s()?!1:i.value,c=Oo(e,["arrow","showArrow"]),u=A(()=>e.overlap?!1:c.value);let h=null;const d=G(null),y=G(null),g=ie(()=>e.x!==void 0&&e.y!==void 0);function v(C){const{"onUpdate:show":D,onUpdateShow:O,onShow:V,onHide:ee}=e;r.value=C,D&&te(D,C),O&&te(O,C),C&&V&&te(V,!0),C&&ee&&te(ee,!1)}function S(){h&&h.syncPosition()}function m(){const{value:C}=d;C&&(window.clearTimeout(C),d.value=null)}function N(){const{value:C}=y;C&&(window.clearTimeout(C),y.value=null)}function R(){const C=s();if(e.trigger==="focus"&&!C){if(a())return;v(!0)}}function w(){const C=s();if(e.trigger==="focus"&&!C){if(!a())return;v(!1)}}function x(){const C=s();if(e.trigger==="hover"&&!C){if(N(),d.value!==null||a())return;const D=()=>{v(!0),d.value=null},{delay:O}=e;O===0?D():d.value=window.setTimeout(D,O)}}function _(){const C=s();if(e.trigger==="hover"&&!C){if(m(),y.value!==null||!a())return;const D=()=>{v(!1),y.value=null},{duration:O}=e;O===0?D():y.value=window.setTimeout(D,O)}}function b(){_()}function M(C){var D;a()&&(e.trigger==="click"&&(m(),N(),v(!1)),(D=e.onClickoutside)===null||D===void 0||D.call(e,C))}function E(){if(e.trigger==="click"&&!s()){m(),N();const C=!a();v(C)}}function I(C){e.internalTrapFocus&&C.key==="Escape"&&(m(),N(),v(!1))}function j(C){r.value=C}function T(){var C;return(C=o.value)===null||C===void 0?void 0:C.targetRef}function W(C){h=C}return oe("NPopover",{getTriggerElement:T,handleKeydown:I,handleMouseEnter:x,handleMouseLeave:_,handleClickOutside:M,handleMouseMoveOutside:b,setBodyInstance:W,positionManuallyRef:g,isMountedRef:t,zIndexRef:Z(e,"zIndex"),extraClassRef:Z(e,"internalExtraClass"),internalRenderBodyRef:Z(e,"internalRenderBody")}),Ke(()=>{i.value&&s()&&v(!1)}),{binderInstRef:o,positionManually:g,mergedShowConsideringDisabledProp:l,uncontrolledShow:r,mergedShowArrow:u,getMergedShow:a,setShow:j,handleClick:E,handleMouseEnter:x,handleMouseLeave:_,handleFocus:R,handleBlur:w,syncPosition:S}},render(){var e;const{positionManually:t,$slots:o}=this;let n,r=!1;if(!t&&(o.activator?n=Vt(o,"activator"):n=Vt(o,"trigger"),n)){n=Xn(n),n=n.type===Zn?f("span",[n]):n;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=n.type)===null||e===void 0)&&e.__popover__)r=!0,n.props||(n.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),n.props.internalSyncTargetWithParent=!0,n.props.internalInheritedEventHandlers?n.props.internalInheritedEventHandlers=[i,...n.props.internalInheritedEventHandlers]:n.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:l}=this,s=[i,...l],a={onBlur:c=>{s.forEach(u=>{u.onBlur(c)})},onFocus:c=>{s.forEach(u=>{u.onFocus(c)})},onClick:c=>{s.forEach(u=>{u.onClick(c)})},onMouseenter:c=>{s.forEach(u=>{u.onMouseenter(c)})},onMouseleave:c=>{s.forEach(u=>{u.onMouseleave(c)})}};kl(n,l?"nested":t?"manual":this.trigger,a)}}return f(Eo,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?Ye(f("div",{style:{position:"fixed",inset:0}}),[[wo,{enabled:i,zIndex:this.zIndex}]]):null,t?null:f(Bo,null,{default:()=>n}),f(_l,ke(this.$props,$l,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var l,s;return(s=(l=this.$slots).default)===null||s===void 0?void 0:s.call(l)},header:()=>{var l,s;return(s=(l=this.$slots).header)===null||s===void 0?void 0:s.call(l)},footer:()=>{var l,s;return(s=(l=this.$slots).footer)===null||s===void 0?void 0:s.call(l)}})]}})}}),Nl=Object.assign(Object.assign({},Je),ne.props),Tl=U({name:"Tooltip",props:Nl,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=me(e),o=ne("Tooltip","-tooltip",void 0,Nn,e,t),n=G(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(i){n.value.setShow(i)}}),{popoverRef:n,mergedTheme:o,popoverThemeOverrides:A(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return f(qo,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Xo=U({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return f("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Ml=P("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[L("color-transition",{transition:"color .3s var(--n-bezier)"}),L("depth",{color:"var(--n-color)"},[B("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),B("svg",{height:"1em",width:"1em"})]),El=Object.assign(Object.assign({},ne.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),Zo=U({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:El,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=me(e),n=ne("Icon","-icon",Ml,Tn,e,t),r=A(()=>{const{depth:l}=e,{common:{cubicBezierEaseInOut:s},self:a}=n.value;if(l!==void 0){const{color:c,[`opacity${l}Depth`]:u}=a;return{"--n-bezier":s,"--n-color":c,"--n-opacity":u}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=o?Ce("icon",A(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:t,mergedStyle:A(()=>{const{size:l,color:s}=e;return{fontSize:xe(l),color:s}}),cssVars:o?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:n,component:r,onRender:i,themeClass:l}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&zo("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),f("i",qe(this.$attrs,{role:"img",class:[`${n}-icon`,l,{[`${n}-icon--depth`]:o,[`${n}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?f(r):this.$slots)}}),Ot=fe("n-dropdown-menu"),Qe=fe("n-dropdown"),po=fe("n-dropdown-option");function mt(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function Bl(e){return e.type==="group"}function Jo(e){return e.type==="divider"}function Rl(e){return e.type==="render"}const Qo=U({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=X(Qe),{hoverKeyRef:o,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:s,mergedShowRef:a,renderLabelRef:c,renderIconRef:u,labelFieldRef:h,childrenFieldRef:d,renderOptionRef:y,nodePropsRef:g,menuPropsRef:v}=t,S=X(po,null),m=X(Ot),N=X(We),R=A(()=>e.tmNode.rawNode),w=A(()=>{const{value:O}=d;return mt(e.tmNode.rawNode,O)}),x=A(()=>{const{disabled:O}=e.tmNode;return O}),_=A(()=>{if(!w.value)return!1;const{key:O,disabled:V}=e.tmNode;if(V)return!1;const{value:ee}=o,{value:J}=n,{value:k}=r,{value:K}=i;return ee!==null?K.includes(O):J!==null?K.includes(O)&&K[K.length-1]!==O:k!==null?K.includes(O):!1}),b=A(()=>n.value===null&&!s.value),M=lr(_,300,b),E=A(()=>!!(S!=null&&S.enteringSubmenuRef.value)),I=G(!1);oe(po,{enteringSubmenuRef:I});function j(){I.value=!0}function T(){I.value=!1}function W(){const{parentKey:O,tmNode:V}=e;V.disabled||a.value&&(r.value=O,n.value=null,o.value=V.key)}function F(){const{tmNode:O}=e;O.disabled||a.value&&o.value!==O.key&&W()}function C(O){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:V}=O;V&&!qt({target:V},"dropdownOption")&&!qt({target:V},"scrollbarRail")&&(o.value=null)}function D(){const{value:O}=w,{tmNode:V}=e;a.value&&!O&&!V.disabled&&(t.doSelect(V.key,V.rawNode),t.doUpdateShow(!1))}return{labelField:h,renderLabel:c,renderIcon:u,siblingHasIcon:m.showIconRef,siblingHasSubmenu:m.hasSubmenuRef,menuProps:v,popoverBody:N,animated:s,mergedShowSubmenu:A(()=>M.value&&!E.value),rawNode:R,hasSubmenu:w,pending:ie(()=>{const{value:O}=i,{key:V}=e.tmNode;return O.includes(V)}),childActive:ie(()=>{const{value:O}=l,{key:V}=e.tmNode,ee=O.findIndex(J=>V===J);return ee===-1?!1:ee<O.length-1}),active:ie(()=>{const{value:O}=l,{key:V}=e.tmNode,ee=O.findIndex(J=>V===J);return ee===-1?!1:ee===O.length-1}),mergedDisabled:x,renderOption:y,nodeProps:g,handleClick:D,handleMouseMove:F,handleMouseEnter:W,handleMouseLeave:C,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:T}},render(){var e,t;const{animated:o,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:s,renderLabel:a,renderIcon:c,renderOption:u,nodeProps:h,props:d,scrollable:y}=this;let g=null;if(r){const N=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);g=f(en,Object.assign({},N,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const v={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},S=h==null?void 0:h(n),m=f("div",Object.assign({class:[`${i}-dropdown-option`,S==null?void 0:S.class],"data-dropdown-option":!0},S),f("div",qe(v,d),[f("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(n):de(n.icon)]),f("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},a?a(n):de((t=n[this.labelField])!==null&&t!==void 0?t:n.title)),f("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?f(Zo,null,{default:()=>f(Wo,null)}):null)]),this.hasSubmenu?f(Eo,null,{default:()=>[f(Bo,null,{default:()=>f("div",{class:`${i}-dropdown-offset-container`},f(Lo,{show:this.mergedShowSubmenu,placement:this.placement,to:y&&this.popoverBody||void 0,teleportDisabled:!y},{default:()=>f("div",{class:`${i}-dropdown-menu-wrapper`},o?f(Ao,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>g}):g)}))})]}):null);return u?u({node:m,option:n}):m}}),Ll=U({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=X(Ot),{renderLabelRef:o,labelFieldRef:n,nodePropsRef:r,renderOptionRef:i}=X(Qe);return{labelField:n,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:n,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:s}=this.tmNode,a=f("div",Object.assign({class:`${t}-dropdown-option`},r==null?void 0:r(s)),f("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},f("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,n&&`${t}-dropdown-option-body__prefix--show-icon`]},de(s.icon)),f("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):de((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),f("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:a,option:s}):a}}),Fl=U({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:n}=e;return f(zt,null,f(Ll,{clsPrefix:o,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Jo(i)?f(Xo,{clsPrefix:o,key:r.key}):r.isGroup?(zo("dropdown","`group` node is not allowed to be put in `group` node."),null):f(Qo,{clsPrefix:o,tmNode:r,parentKey:t,key:r.key})}))}}),Kl=U({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return f("div",t,[e==null?void 0:e()])}}),en=U({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=X(Qe);oe(Ot,{showIconRef:A(()=>{const r=t.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>r?r(a):a.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:A(()=>{const{value:r}=o;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>mt(a,r));const{rawNode:s}=i;return mt(s,r)})})});const n=G(null);return oe(yt,null),oe(wt,null),oe(We,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,n=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Rl(i)?f(Kl,{tmNode:r,key:r.key}):Jo(i)?f(Xo,{clsPrefix:t,key:r.key}):Bl(i)?f(Fl,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):f(Qo,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:o})});return f("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?f(So,{contentClass:`${t}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?Yo({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Hl=P("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Mn(),P("dropdown-option",`
 position: relative;
 `,[B("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[B("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),P("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[B("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ae("disabled",[L("pending",`
 color: var(--n-option-text-color-hover);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),B("&::before","background-color: var(--n-option-color-hover);")]),L("active",`
 color: var(--n-option-text-color-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),B("&::before","background-color: var(--n-option-color-active);")]),L("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),L("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),L("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[$("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[L("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),$("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[L("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),P("icon",`
 font-size: var(--n-option-icon-size);
 `)]),$("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),$("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[L("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),P("icon",`
 font-size: var(--n-option-icon-size);
 `)]),P("dropdown-menu","pointer-events: all;")]),P("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),P("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),P("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),B(">",[P("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ae("scrollable",`
 padding: var(--n-padding);
 `),L("scrollable",[$("content",`
 padding: var(--n-padding);
 `)])]),Dl={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},jl=Object.keys(Je),Wl=Object.assign(Object.assign(Object.assign({},Je),Dl),ne.props),Gl=U({name:"Dropdown",inheritAttrs:!1,props:Wl,setup(e){const t=G(!1),o=Ne(Z(e,"show"),t),n=A(()=>{const{keyField:T,childrenField:W}=e;return Fe(e.options,{getKey(F){return F[T]},getDisabled(F){return F.disabled===!0},getIgnored(F){return F.type==="divider"||F.type==="render"},getChildren(F){return F[W]}})}),r=A(()=>n.value.treeNodes),i=G(null),l=G(null),s=G(null),a=A(()=>{var T,W,F;return(F=(W=(T=i.value)!==null&&T!==void 0?T:l.value)!==null&&W!==void 0?W:s.value)!==null&&F!==void 0?F:null}),c=A(()=>n.value.getPath(a.value).keyPath),u=A(()=>n.value.getPath(e.value).keyPath),h=ie(()=>e.keyboard&&o.value);dr({keydown:{ArrowUp:{prevent:!0,handler:x},ArrowRight:{prevent:!0,handler:w},ArrowDown:{prevent:!0,handler:_},ArrowLeft:{prevent:!0,handler:R},Enter:{prevent:!0,handler:b},Escape:N}},h);const{mergedClsPrefixRef:d,inlineThemeDisabled:y}=me(e),g=ne("Dropdown","-dropdown",Hl,En,e,d);oe(Qe,{labelFieldRef:Z(e,"labelField"),childrenFieldRef:Z(e,"childrenField"),renderLabelRef:Z(e,"renderLabel"),renderIconRef:Z(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:c,activeKeyPathRef:u,animatedRef:Z(e,"animated"),mergedShowRef:o,nodePropsRef:Z(e,"nodeProps"),renderOptionRef:Z(e,"renderOption"),menuPropsRef:Z(e,"menuProps"),doSelect:v,doUpdateShow:S}),ve(o,T=>{!e.animated&&!T&&m()});function v(T,W){const{onSelect:F}=e;F&&te(F,T,W)}function S(T){const{"onUpdate:show":W,onUpdateShow:F}=e;W&&te(W,T),F&&te(F,T),t.value=T}function m(){i.value=null,l.value=null,s.value=null}function N(){S(!1)}function R(){E("left")}function w(){E("right")}function x(){E("up")}function _(){E("down")}function b(){const T=M();T!=null&&T.isLeaf&&o.value&&(v(T.key,T.rawNode),S(!1))}function M(){var T;const{value:W}=n,{value:F}=a;return!W||F===null?null:(T=W.getNode(F))!==null&&T!==void 0?T:null}function E(T){const{value:W}=a,{value:{getFirstAvailableNode:F}}=n;let C=null;if(W===null){const D=F();D!==null&&(C=D.key)}else{const D=M();if(D){let O;switch(T){case"down":O=D.getNext();break;case"up":O=D.getPrev();break;case"right":O=D.getChild();break;case"left":O=D.getParent();break}O&&(C=O.key)}}C!==null&&(i.value=null,l.value=C)}const I=A(()=>{const{size:T,inverted:W}=e,{common:{cubicBezierEaseInOut:F},self:C}=g.value,{padding:D,dividerColor:O,borderRadius:V,optionOpacityDisabled:ee,[ge("optionIconSuffixWidth",T)]:J,[ge("optionSuffixWidth",T)]:k,[ge("optionIconPrefixWidth",T)]:K,[ge("optionPrefixWidth",T)]:p,[ge("fontSize",T)]:H,[ge("optionHeight",T)]:Y,[ge("optionIconSize",T)]:et}=C,q={"--n-bezier":F,"--n-font-size":H,"--n-padding":D,"--n-border-radius":V,"--n-option-height":Y,"--n-option-prefix-width":p,"--n-option-icon-prefix-width":K,"--n-option-suffix-width":k,"--n-option-icon-suffix-width":J,"--n-option-icon-size":et,"--n-divider-color":O,"--n-option-opacity-disabled":ee};return W?(q["--n-color"]=C.colorInverted,q["--n-option-color-hover"]=C.optionColorHoverInverted,q["--n-option-color-active"]=C.optionColorActiveInverted,q["--n-option-text-color"]=C.optionTextColorInverted,q["--n-option-text-color-hover"]=C.optionTextColorHoverInverted,q["--n-option-text-color-active"]=C.optionTextColorActiveInverted,q["--n-option-text-color-child-active"]=C.optionTextColorChildActiveInverted,q["--n-prefix-color"]=C.prefixColorInverted,q["--n-suffix-color"]=C.suffixColorInverted,q["--n-group-header-text-color"]=C.groupHeaderTextColorInverted):(q["--n-color"]=C.color,q["--n-option-color-hover"]=C.optionColorHover,q["--n-option-color-active"]=C.optionColorActive,q["--n-option-text-color"]=C.optionTextColor,q["--n-option-text-color-hover"]=C.optionTextColorHover,q["--n-option-text-color-active"]=C.optionTextColorActive,q["--n-option-text-color-child-active"]=C.optionTextColorChildActive,q["--n-prefix-color"]=C.prefixColor,q["--n-suffix-color"]=C.suffixColor,q["--n-group-header-text-color"]=C.groupHeaderTextColor),q}),j=y?Ce("dropdown",A(()=>`${e.size[0]}${e.inverted?"i":""}`),I,e):void 0;return{mergedClsPrefix:d,mergedTheme:g,tmNodes:r,mergedShow:o,handleAfterLeave:()=>{e.animated&&m()},doUpdateShow:S,cssVars:y?void 0:I,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const e=(n,r,i,l,s)=>{var a;const{mergedClsPrefix:c,menuProps:u}=this;(a=this.onRender)===null||a===void 0||a.call(this);const h=(u==null?void 0:u(void 0,this.tmNodes.map(y=>y.rawNode)))||{},d={ref:nr(r),class:[n,`${c}-dropdown`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:s};return f(en,qe(this.$attrs,d,h))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return f(qo,Object.assign({},ke(this.$props,jl),o),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),Ul=e=>{const{baseColor:t,textColor2:o,bodyColor:n,cardColor:r,dividerColor:i,actionColor:l,scrollbarColor:s,scrollbarColorHover:a,invertedColor:c}=e;return{textColor:o,textColorInverted:"#FFF",color:n,colorEmbedded:l,headerColor:r,headerColorInverted:c,footerColor:l,footerColorInverted:c,headerBorderColor:i,headerBorderColorInverted:c,footerBorderColor:i,footerBorderColorInverted:c,siderBorderColor:i,siderBorderColorInverted:c,siderColor:r,siderColorInverted:c,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Yt(n,s),siderToggleBarColorHover:Yt(n,a),__invertScrollbar:"true"}},Vl=Bn({name:"Layout",common:Rn,peers:{Scrollbar:Ln},self:Ul}),Nt=Vl,tn=fe("n-layout-sider"),Tt={type:String,default:"static"},Yl=P("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[P("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),L("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ql={embedded:Boolean,position:Tt,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},on=fe("n-layout");function nn(e){return U({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},ne.props),ql),setup(t){const o=G(null),n=G(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=me(t),l=ne("Layout","-layout",Yl,Nt,t,r);function s(v,S){if(t.nativeScrollbar){const{value:m}=o;m&&(S===void 0?m.scrollTo(v):m.scrollTo(v,S))}else{const{value:m}=n;m&&m.scrollTo(v,S)}}oe(on,t);let a=0,c=0;const u=v=>{var S;const m=v.target;a=m.scrollLeft,c=m.scrollTop,(S=t.onScroll)===null||S===void 0||S.call(t,v)};Po(()=>{if(t.nativeScrollbar){const v=o.value;v&&(v.scrollTop=c,v.scrollLeft=a)}});const h={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},d={scrollTo:s},y=A(()=>{const{common:{cubicBezierEaseInOut:v},self:S}=l.value;return{"--n-bezier":v,"--n-color":t.embedded?S.colorEmbedded:S.color,"--n-text-color":S.textColor}}),g=i?Ce("layout",A(()=>t.embedded?"e":""),y,t):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:o,scrollbarInstRef:n,hasSiderStyle:h,mergedTheme:l,handleNativeElScroll:u,cssVars:i?void 0:y,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},d)},render(){var t;const{mergedClsPrefix:o,hasSider:n}=this;(t=this.onRender)===null||t===void 0||t.call(this);const r=n?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return f("div",{class:i,style:this.cssVars},this.nativeScrollbar?f("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,r],onScroll:this.handleNativeElScroll},this.$slots):f(Io,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,r]}),this.$slots))}})}const Xl=nn(!1),Zl=nn(!0),Jl=P("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[L("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),L("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Ql={position:Tt,inverted:Boolean,bordered:{type:Boolean,default:!1}},ea=U({name:"LayoutHeader",props:Object.assign(Object.assign({},ne.props),Ql),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=me(e),n=ne("Layout","-layout-header",Jl,Nt,e,t),r=A(()=>{const{common:{cubicBezierEaseInOut:l},self:s}=n.value,a={"--n-bezier":l};return e.inverted?(a["--n-color"]=s.headerColorInverted,a["--n-text-color"]=s.textColorInverted,a["--n-border-color"]=s.headerBorderColorInverted):(a["--n-color"]=s.headerColor,a["--n-text-color"]=s.textColor,a["--n-border-color"]=s.headerBorderColor),a}),i=o?Ce("layout-header",A(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),f("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),ta=P("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[L("bordered",[$("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),$("left-placement",[L("bordered",[$("border",`
 right: 0;
 `)])]),L("right-placement",`
 justify-content: flex-start;
 `,[L("bordered",[$("border",`
 left: 0;
 `)]),L("collapsed",[P("layout-toggle-button",[P("base-icon",`
 transform: rotate(180deg);
 `)]),P("layout-toggle-bar",[B("&:hover",[$("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),$("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),P("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[P("base-icon",`
 transform: rotate(0);
 `)]),P("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[B("&:hover",[$("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),$("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),L("collapsed",[P("layout-toggle-bar",[B("&:hover",[$("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),$("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),P("layout-toggle-button",[P("base-icon",`
 transform: rotate(0);
 `)])]),P("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[P("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),P("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[$("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),$("bottom",`
 position: absolute;
 top: 34px;
 `),B("&:hover",[$("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),$("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),$("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),B("&:hover",[$("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),$("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),P("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),L("show-content",[P("layout-sider-scroll-container",{opacity:1})]),L("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),oa=U({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return f("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},f(_o,{clsPrefix:e},{default:()=>f(Wo,null)}))}}),na=U({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return f("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},f("div",{class:`${e}-layout-toggle-bar__top`}),f("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ra={position:Tt,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},ia=U({name:"LayoutSider",props:Object.assign(Object.assign({},ne.props),ra),setup(e){const t=X(on),o=G(null),n=G(null),r=A(()=>xe(a.value?e.collapsedWidth:e.width)),i=A(()=>e.collapseMode!=="transform"?{}:{minWidth:xe(e.width)}),l=A(()=>t?t.siderPlacement:"left"),s=G(e.defaultCollapsed),a=Ne(Z(e,"collapsed"),s);function c(x,_){if(e.nativeScrollbar){const{value:b}=o;b&&(_===void 0?b.scrollTo(x):b.scrollTo(x,_))}else{const{value:b}=n;b&&b.scrollTo(x,_)}}function u(){const{"onUpdate:collapsed":x,onUpdateCollapsed:_,onExpand:b,onCollapse:M}=e,{value:E}=a;_&&te(_,!E),x&&te(x,!E),s.value=!E,E?b&&te(b):M&&te(M)}let h=0,d=0;const y=x=>{var _;const b=x.target;h=b.scrollLeft,d=b.scrollTop,(_=e.onScroll)===null||_===void 0||_.call(e,x)};Po(()=>{if(e.nativeScrollbar){const x=o.value;x&&(x.scrollTop=d,x.scrollLeft=h)}}),oe(tn,{collapsedRef:a,collapseModeRef:Z(e,"collapseMode")});const{mergedClsPrefixRef:g,inlineThemeDisabled:v}=me(e),S=ne("Layout","-layout-sider",ta,Nt,e,g);function m(x){var _,b;x.propertyName==="max-width"&&(a.value?(_=e.onAfterLeave)===null||_===void 0||_.call(e):(b=e.onAfterEnter)===null||b===void 0||b.call(e))}const N={scrollTo:c},R=A(()=>{const{common:{cubicBezierEaseInOut:x},self:_}=S.value,{siderToggleButtonColor:b,siderToggleButtonBorder:M,siderToggleBarColor:E,siderToggleBarColorHover:I}=_,j={"--n-bezier":x,"--n-toggle-button-color":b,"--n-toggle-button-border":M,"--n-toggle-bar-color":E,"--n-toggle-bar-color-hover":I};return e.inverted?(j["--n-color"]=_.siderColorInverted,j["--n-text-color"]=_.textColorInverted,j["--n-border-color"]=_.siderBorderColorInverted,j["--n-toggle-button-icon-color"]=_.siderToggleButtonIconColorInverted,j.__invertScrollbar=_.__invertScrollbar):(j["--n-color"]=_.siderColor,j["--n-text-color"]=_.textColor,j["--n-border-color"]=_.siderBorderColor,j["--n-toggle-button-icon-color"]=_.siderToggleButtonIconColor),j}),w=v?Ce("layout-sider",A(()=>e.inverted?"a":"b"),R,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:n,mergedClsPrefix:g,mergedTheme:S,styleMaxWidth:r,mergedCollapsed:a,scrollContainerStyle:i,siderPlacement:l,handleNativeElScroll:y,handleTransitionend:m,handleTriggerClick:u,inlineThemeDisabled:v,cssVars:R,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender},N)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),f("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:xe(this.width)}]},this.nativeScrollbar?f("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):f(Io,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?f(na,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):f(oa,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?f("div",{class:`${t}-layout-sider__border`}):null)}}),Me=fe("n-menu"),Mt=fe("n-submenu"),Et=fe("n-menu-item-group"),Re=8;function Bt(e){const t=X(Me),{props:o,mergedCollapsedRef:n}=t,r=X(Mt,null),i=X(Et,null),l=A(()=>o.mode==="horizontal"),s=A(()=>l.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=A(()=>{var d;return Math.max((d=o.collapsedIconSize)!==null&&d!==void 0?d:o.iconSize,o.iconSize)}),c=A(()=>{var d;return!l.value&&e.root&&n.value&&(d=o.collapsedIconSize)!==null&&d!==void 0?d:o.iconSize}),u=A(()=>{if(l.value)return;const{collapsedWidth:d,indent:y,rootIndent:g}=o,{root:v,isGroup:S}=e,m=g===void 0?y:g;return v?n.value?d/2-a.value/2:m:i&&typeof i.paddingLeftRef.value=="number"?y/2+i.paddingLeftRef.value:r&&typeof r.paddingLeftRef.value=="number"?(S?y/2:y)+r.paddingLeftRef.value:0}),h=A(()=>{const{collapsedWidth:d,indent:y,rootIndent:g}=o,{value:v}=a,{root:S}=e;return l.value||!S||!n.value?Re:(g===void 0?y:g)+v+Re-(d+v)/2});return{dropdownPlacement:s,activeIconSize:c,maxIconSize:a,paddingLeft:u,iconMarginRight:h,NMenu:t,NSubmenu:r}}const Rt={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},rn=Object.assign(Object.assign({},Rt),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),la=U({name:"MenuOptionGroup",props:rn,setup(e){oe(Mt,null);const t=Bt(e);oe(Et,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=X(Me);return function(){const{value:r}=o,i=t.paddingLeft.value,{nodeProps:l}=n,s=l==null?void 0:l(e.tmNode.rawNode);return f("div",{class:`${r}-menu-item-group`,role:"group"},f("div",Object.assign({},s,{class:[`${r}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),de(e.title),e.extra?f(zt,null," ",de(e.extra)):null),f("div",null,e.tmNodes.map(a=>Lt(a,n))))}}}),ln=U({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=X(Me);return{menuProps:t,style:A(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:A(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:r,expandIcon:i}}=this,l=o?o(t.rawNode):de(this.icon);return f("div",{onClick:s=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&f("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),f("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:n?n(t.rawNode):de(this.title),this.extra||r?f("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):de(this.extra)):null),this.showArrow?f(_o,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):f(ol,null)}):null)}}),an=Object.assign(Object.assign({},Rt),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),gt=U({name:"Submenu",props:an,setup(e){const t=Bt(e),{NMenu:o,NSubmenu:n}=t,{props:r,mergedCollapsedRef:i,mergedThemeRef:l}=o,s=A(()=>{const{disabled:d}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:d}),a=G(!1);oe(Mt,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),oe(Et,null);function c(){const{onClick:d}=e;d&&d()}function u(){s.value||(i.value||o.toggleExpand(e.internalKey),c())}function h(d){a.value=d}return{menuProps:r,mergedTheme:l,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:ie(()=>{var d;return(d=e.virtualChildActive)!==null&&d!==void 0?d:o.activePathRef.value.includes(e.internalKey)}),collapsed:A(()=>r.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:A(()=>!s.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:h,handleClick:u}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,r=()=>{const{isHorizontal:l,paddingLeft:s,collapsed:a,mergedDisabled:c,maxIconSize:u,activeIconSize:h,title:d,childActive:y,icon:g,handleClick:v,menuProps:{nodeProps:S},dropdownShow:m,iconMarginRight:N,tmNode:R,mergedClsPrefix:w,isEllipsisPlaceholder:x,extra:_}=this,b=S==null?void 0:S(R.rawNode);return f("div",Object.assign({},b,{class:[`${w}-menu-item`,b==null?void 0:b.class],role:"menuitem"}),f(ln,{tmNode:R,paddingLeft:s,collapsed:a,disabled:c,iconMarginRight:N,maxIconSize:u,activeIconSize:h,title:d,extra:_,showArrow:!l,childActive:y,clsPrefix:w,icon:g,hover:m,onClick:v,isEllipsisPlaceholder:x}))},i=()=>f(Fn,null,{default:()=>{const{tmNodes:l,collapsed:s}=this;return s?null:f("div",{class:`${t}-submenu-children`,role:"menu"},l.map(a=>Lt(a,this.menuProps)))}});return this.root?f(Gl,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>f("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):f("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),sn=Object.assign(Object.assign({},Rt),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),aa=U({name:"MenuOption",props:sn,setup(e){const t=Bt(e),{NSubmenu:o,NMenu:n}=t,{props:r,mergedClsPrefixRef:i,mergedCollapsedRef:l}=n,s=o?o.mergedDisabledRef:{value:!1},a=A(()=>s.value||e.disabled);function c(h){const{onClick:d}=e;d&&d(h)}function u(h){a.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),c(h))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:ie(()=>e.root&&l.value&&r.mode!=="horizontal"&&!a.value),selected:ie(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:u}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:r}}=this,i=r==null?void 0:r(o.rawNode);return f("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),f(Tl,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):de(this.title),trigger:()=>f(ln,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),sa=U({name:"MenuDivider",setup(){const e=X(Me),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:f("div",{class:`${t.value}-menu-divider`})}}),da=St(rn),ca=St(sn),ua=St(an);function bt(e){return e.type==="divider"||e.type==="render"}function fa(e){return e.type==="divider"}function Lt(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(bt(o))return fa(o)?f(sa,Object.assign({key:e.key},o.props)):null;const{labelField:r}=t,{key:i,level:l,isGroup:s}=e,a=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:s});return e.children?e.isGroup?f(la,ke(a,da,{tmNode:e,tmNodes:e.children,key:i})):f(gt,ke(a,ua,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):f(aa,ke(a,ca,{key:i,tmNode:e}))}const mo=[B("&::before","background-color: var(--n-item-color-hover);"),$("arrow",`
 color: var(--n-arrow-color-hover);
 `),$("icon",`
 color: var(--n-item-icon-color-hover);
 `),P("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[B("a",`
 color: var(--n-item-text-color-hover);
 `),$("extra",`
 color: var(--n-item-text-color-hover);
 `)])],go=[$("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),P("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[B("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),$("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],ha=B([P("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[L("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[P("submenu","margin: 0;"),P("menu-item","margin: 0;"),P("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[B("&::before","display: none;"),L("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),P("menu-item-content",[L("selected",[$("icon","color: var(--n-item-icon-color-active-horizontal);"),P("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[B("a","color: var(--n-item-text-color-active-horizontal);"),$("extra","color: var(--n-item-text-color-active-horizontal);")])]),L("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[P("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[B("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),$("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),$("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ae("disabled",[ae("selected, child-active",[B("&:focus-within",go)]),L("selected",[ye(null,[$("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),P("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[B("a","color: var(--n-item-text-color-active-hover-horizontal);"),$("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),L("child-active",[ye(null,[$("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),P("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[B("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),$("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),ye("border-bottom: 2px solid var(--n-border-color-horizontal);",go)]),P("menu-item-content-header",[B("a","color: var(--n-item-text-color-horizontal);")])])]),ae("responsive",[P("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),L("collapsed",[P("menu-item-content",[L("selected",[B("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),P("menu-item-content-header","opacity: 0;"),$("arrow","opacity: 0;"),$("icon","color: var(--n-item-icon-color-collapsed);")])]),P("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),P("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[B("> *","z-index: 1;"),B("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),L("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),L("collapsed",[$("arrow","transform: rotate(0);")]),L("selected",[B("&::before","background-color: var(--n-item-color-active);"),$("arrow","color: var(--n-arrow-color-active);"),$("icon","color: var(--n-item-icon-color-active);"),P("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[B("a","color: var(--n-item-text-color-active);"),$("extra","color: var(--n-item-text-color-active);")])]),L("child-active",[P("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[B("a",`
 color: var(--n-item-text-color-child-active);
 `),$("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),$("arrow",`
 color: var(--n-arrow-color-child-active);
 `),$("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ae("disabled",[ae("selected, child-active",[B("&:focus-within",mo)]),L("selected",[ye(null,[$("arrow","color: var(--n-arrow-color-active-hover);"),$("icon","color: var(--n-item-icon-color-active-hover);"),P("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[B("a","color: var(--n-item-text-color-active-hover);"),$("extra","color: var(--n-item-text-color-active-hover);")])])]),L("child-active",[ye(null,[$("arrow","color: var(--n-arrow-color-child-active-hover);"),$("icon","color: var(--n-item-icon-color-child-active-hover);"),P("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[B("a","color: var(--n-item-text-color-child-active-hover);"),$("extra","color: var(--n-item-text-color-child-active-hover);")])])]),L("selected",[ye(null,[B("&::before","background-color: var(--n-item-color-active-hover);")])]),ye(null,mo)]),$("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),$("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),P("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[B("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[B("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),$("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),P("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[P("menu-item-content",`
 height: var(--n-item-height);
 `),P("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Kn({duration:".2s"})])]),P("menu-item-group",[P("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),P("menu-tooltip",[B("a",`
 color: inherit;
 text-decoration: none;
 `)]),P("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function ye(e,t){return[L("hover",e,t),B("&:hover",e,t)]}const va=Object.assign(Object.assign({},ne.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),pa=U({name:"Menu",props:va,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=me(e),n=ne("Menu","-menu",ha,Hn,e,t),r=X(tn,null),i=A(()=>{var k;const{collapsed:K}=e;if(K!==void 0)return K;if(r){const{collapseModeRef:p,collapsedRef:H}=r;if(p.value==="width")return(k=H.value)!==null&&k!==void 0?k:!1}return!1}),l=A(()=>{const{keyField:k,childrenField:K,disabledField:p}=e;return Fe(e.items||e.options,{getIgnored(H){return bt(H)},getChildren(H){return H[K]},getDisabled(H){return H[p]},getKey(H){var Y;return(Y=H[k])!==null&&Y!==void 0?Y:H.name}})}),s=A(()=>new Set(l.value.treeNodes.map(k=>k.key))),{watchProps:a}=e,c=G(null);a!=null&&a.includes("defaultValue")?Ke(()=>{c.value=e.defaultValue}):c.value=e.defaultValue;const u=Z(e,"value"),h=Ne(u,c),d=G([]),y=()=>{d.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(h.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?Ke(y):y();const g=Oo(e,["expandedNames","expandedKeys"]),v=Ne(g,d),S=A(()=>l.value.treeNodes),m=A(()=>l.value.getPath(h.value).keyPath);oe(Me,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:h,mergedExpandedKeysRef:v,activePathRef:m,mergedClsPrefixRef:t,isHorizontalRef:A(()=>e.mode==="horizontal"),invertedRef:Z(e,"inverted"),doSelect:N,toggleExpand:w});function N(k,K){const{"onUpdate:value":p,onUpdateValue:H,onSelect:Y}=e;H&&te(H,k,K),p&&te(p,k,K),Y&&te(Y,k,K),c.value=k}function R(k){const{"onUpdate:expandedKeys":K,onUpdateExpandedKeys:p,onExpandedNamesChange:H,onOpenNamesChange:Y}=e;K&&te(K,k),p&&te(p,k),H&&te(H,k),Y&&te(Y,k),d.value=k}function w(k){const K=Array.from(v.value),p=K.findIndex(H=>H===k);if(~p)K.splice(p,1);else{if(e.accordion&&s.value.has(k)){const H=K.findIndex(Y=>s.value.has(Y));H>-1&&K.splice(H,1)}K.push(k)}R(K)}const x=k=>{const K=l.value.getPath(k??h.value,{includeSelf:!1}).keyPath;if(!K.length)return;const p=Array.from(v.value),H=new Set([...p,...K]);e.accordion&&s.value.forEach(Y=>{H.has(Y)&&!K.includes(Y)&&H.delete(Y)}),R(Array.from(H))},_=A(()=>{const{inverted:k}=e,{common:{cubicBezierEaseInOut:K},self:p}=n.value,{borderRadius:H,borderColorHorizontal:Y,fontSize:et,itemHeight:q,dividerColor:dn}=p,z={"--n-divider-color":dn,"--n-bezier":K,"--n-font-size":et,"--n-border-color-horizontal":Y,"--n-border-radius":H,"--n-item-height":q};return k?(z["--n-group-text-color"]=p.groupTextColorInverted,z["--n-color"]=p.colorInverted,z["--n-item-text-color"]=p.itemTextColorInverted,z["--n-item-text-color-hover"]=p.itemTextColorHoverInverted,z["--n-item-text-color-active"]=p.itemTextColorActiveInverted,z["--n-item-text-color-child-active"]=p.itemTextColorChildActiveInverted,z["--n-item-text-color-child-active-hover"]=p.itemTextColorChildActiveInverted,z["--n-item-text-color-active-hover"]=p.itemTextColorActiveHoverInverted,z["--n-item-icon-color"]=p.itemIconColorInverted,z["--n-item-icon-color-hover"]=p.itemIconColorHoverInverted,z["--n-item-icon-color-active"]=p.itemIconColorActiveInverted,z["--n-item-icon-color-active-hover"]=p.itemIconColorActiveHoverInverted,z["--n-item-icon-color-child-active"]=p.itemIconColorChildActiveInverted,z["--n-item-icon-color-child-active-hover"]=p.itemIconColorChildActiveHoverInverted,z["--n-item-icon-color-collapsed"]=p.itemIconColorCollapsedInverted,z["--n-item-text-color-horizontal"]=p.itemTextColorHorizontalInverted,z["--n-item-text-color-hover-horizontal"]=p.itemTextColorHoverHorizontalInverted,z["--n-item-text-color-active-horizontal"]=p.itemTextColorActiveHorizontalInverted,z["--n-item-text-color-child-active-horizontal"]=p.itemTextColorChildActiveHorizontalInverted,z["--n-item-text-color-child-active-hover-horizontal"]=p.itemTextColorChildActiveHoverHorizontalInverted,z["--n-item-text-color-active-hover-horizontal"]=p.itemTextColorActiveHoverHorizontalInverted,z["--n-item-icon-color-horizontal"]=p.itemIconColorHorizontalInverted,z["--n-item-icon-color-hover-horizontal"]=p.itemIconColorHoverHorizontalInverted,z["--n-item-icon-color-active-horizontal"]=p.itemIconColorActiveHorizontalInverted,z["--n-item-icon-color-active-hover-horizontal"]=p.itemIconColorActiveHoverHorizontalInverted,z["--n-item-icon-color-child-active-horizontal"]=p.itemIconColorChildActiveHorizontalInverted,z["--n-item-icon-color-child-active-hover-horizontal"]=p.itemIconColorChildActiveHoverHorizontalInverted,z["--n-arrow-color"]=p.arrowColorInverted,z["--n-arrow-color-hover"]=p.arrowColorHoverInverted,z["--n-arrow-color-active"]=p.arrowColorActiveInverted,z["--n-arrow-color-active-hover"]=p.arrowColorActiveHoverInverted,z["--n-arrow-color-child-active"]=p.arrowColorChildActiveInverted,z["--n-arrow-color-child-active-hover"]=p.arrowColorChildActiveHoverInverted,z["--n-item-color-hover"]=p.itemColorHoverInverted,z["--n-item-color-active"]=p.itemColorActiveInverted,z["--n-item-color-active-hover"]=p.itemColorActiveHoverInverted,z["--n-item-color-active-collapsed"]=p.itemColorActiveCollapsedInverted):(z["--n-group-text-color"]=p.groupTextColor,z["--n-color"]=p.color,z["--n-item-text-color"]=p.itemTextColor,z["--n-item-text-color-hover"]=p.itemTextColorHover,z["--n-item-text-color-active"]=p.itemTextColorActive,z["--n-item-text-color-child-active"]=p.itemTextColorChildActive,z["--n-item-text-color-child-active-hover"]=p.itemTextColorChildActiveHover,z["--n-item-text-color-active-hover"]=p.itemTextColorActiveHover,z["--n-item-icon-color"]=p.itemIconColor,z["--n-item-icon-color-hover"]=p.itemIconColorHover,z["--n-item-icon-color-active"]=p.itemIconColorActive,z["--n-item-icon-color-active-hover"]=p.itemIconColorActiveHover,z["--n-item-icon-color-child-active"]=p.itemIconColorChildActive,z["--n-item-icon-color-child-active-hover"]=p.itemIconColorChildActiveHover,z["--n-item-icon-color-collapsed"]=p.itemIconColorCollapsed,z["--n-item-text-color-horizontal"]=p.itemTextColorHorizontal,z["--n-item-text-color-hover-horizontal"]=p.itemTextColorHoverHorizontal,z["--n-item-text-color-active-horizontal"]=p.itemTextColorActiveHorizontal,z["--n-item-text-color-child-active-horizontal"]=p.itemTextColorChildActiveHorizontal,z["--n-item-text-color-child-active-hover-horizontal"]=p.itemTextColorChildActiveHoverHorizontal,z["--n-item-text-color-active-hover-horizontal"]=p.itemTextColorActiveHoverHorizontal,z["--n-item-icon-color-horizontal"]=p.itemIconColorHorizontal,z["--n-item-icon-color-hover-horizontal"]=p.itemIconColorHoverHorizontal,z["--n-item-icon-color-active-horizontal"]=p.itemIconColorActiveHorizontal,z["--n-item-icon-color-active-hover-horizontal"]=p.itemIconColorActiveHoverHorizontal,z["--n-item-icon-color-child-active-horizontal"]=p.itemIconColorChildActiveHorizontal,z["--n-item-icon-color-child-active-hover-horizontal"]=p.itemIconColorChildActiveHoverHorizontal,z["--n-arrow-color"]=p.arrowColor,z["--n-arrow-color-hover"]=p.arrowColorHover,z["--n-arrow-color-active"]=p.arrowColorActive,z["--n-arrow-color-active-hover"]=p.arrowColorActiveHover,z["--n-arrow-color-child-active"]=p.arrowColorChildActive,z["--n-arrow-color-child-active-hover"]=p.arrowColorChildActiveHover,z["--n-item-color-hover"]=p.itemColorHover,z["--n-item-color-active"]=p.itemColorActive,z["--n-item-color-active-hover"]=p.itemColorActiveHover,z["--n-item-color-active-collapsed"]=p.itemColorActiveCollapsed),z}),b=o?Ce("menu",A(()=>e.inverted?"a":"b"),_,e):void 0,M=Dn(),E=G(null),I=G(null);let j=!0;const T=()=>{var k;j?j=!1:(k=E.value)===null||k===void 0||k.sync({showAllItemsBeforeCalculate:!0})};function W(){return document.getElementById(M)}const F=G(-1);function C(k){F.value=e.options.length-k}function D(k){k||(F.value=-1)}const O=A(()=>{const k=F.value;return{children:k===-1?[]:e.options.slice(k)}}),V=A(()=>{const{childrenField:k,disabledField:K,keyField:p}=e;return Fe([O.value],{getIgnored(H){return bt(H)},getChildren(H){return H[k]},getDisabled(H){return H[K]},getKey(H){var Y;return(Y=H[p])!==null&&Y!==void 0?Y:H.name}})}),ee=A(()=>Fe([{}]).treeNodes[0]);function J(){var k;if(F.value===-1)return f(gt,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:ee.value,domId:M,isEllipsisPlaceholder:!0});const K=V.value.treeNodes[0],p=m.value,H=!!(!((k=K.children)===null||k===void 0)&&k.some(Y=>p.includes(Y.key)));return f(gt,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:H,tmNode:K,domId:M,rawNodes:K.rawNode.children||[],tmNodes:K.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:g,uncontrolledExpanededKeys:d,mergedExpandedKeys:v,uncontrolledValue:c,mergedValue:h,activePath:m,tmNodes:S,mergedTheme:n,mergedCollapsed:i,cssVars:o?void 0:_,themeClass:b==null?void 0:b.themeClass,overflowRef:E,counterRef:I,updateCounter:()=>{},onResize:T,onUpdateOverflow:D,onUpdateCount:C,renderCounter:J,getCounter:W,onRender:b==null?void 0:b.onRender,showOption:x,deriveResponsiveState:T}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;n==null||n();const r=()=>this.tmNodes.map(a=>Lt(a,this.$props)),l=t==="horizontal"&&this.responsive,s=()=>f("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},l?f(zr,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:r,counter:this.renderCounter}):r());return l?f(jn,{onResize:this.onResize},{default:s}):s()}}),ma={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ga=Te("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16z"},null,-1),ba=Te("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 176v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"},null,-1),ya=[ga,ba],wa=U({name:"BagOutline",render:function(t,o){return Xe(),Pt("svg",ma,ya)}}),xa={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ca=Te("path",{fill:"none",stroke:"currentColor","stroke-width":"32","stroke-linejoin":"round",d:"M240 152c-50.71 12.21-94.15 52.31-120.3 73.43a261.14 261.14 0 0 0-23.81-19.58C59.53 179.29 16 176 16 176s11.37 51.53 41.36 79.83C27.37 284.14 16 335.67 16 335.67s43.53-3.29 79.89-29.85a259.18 259.18 0 0 0 23.61-19.41c26.1 21.14 69.74 61.34 120.5 73.59l-16 56c39.43-6.67 78.86-35.51 94.72-48.25C448 362 496 279 496 256c0-22-48-106-176.89-111.73C303.52 131.78 263.76 102.72 224 96z"},null,-1),Sa=Te("circle",{cx:"416",cy:"239.99",r:"16",fill:"currentColor"},null,-1),za=Te("path",{fill:"none",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-miterlimit":"20",d:"M378.37 356a199.22 199.22 0 0 1 0-200"},null,-1),Pa=[Ca,Sa,za],Ia=U({name:"FishOutline",render:function(t,o){return Xe(),Pt("svg",xa,Pa)}}),_a={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$a=Jn('<path d="M457.74 170.1a30.26 30.26 0 0 0-11.16-2.1h-.4c-20.17.3-42.79 19.19-54.66 47.76c-14.23 34.18-7.68 69.15 14.74 78.14a30.21 30.21 0 0 0 11.15 2.1c20.27 0 43.2-19 55.17-47.76c14.13-34.18 7.48-69.15-14.84-78.14z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M327.6 303.48C299.8 257.35 287.8 240 256 240s-43.9 17.46-71.7 63.48c-23.8 39.36-71.9 42.64-83.9 76.07a50.91 50.91 0 0 0-3.6 19.25c0 27.19 20.8 49.2 46.4 49.2c31.8 0 75.1-25.39 112.9-25.39S337 448 368.8 448c25.6 0 46.3-22 46.3-49.2a51 51 0 0 0-3.7-19.25c-12-33.55-60-36.71-83.8-76.07z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M192.51 196a26.53 26.53 0 0 0 4-.3c23.21-3.37 37.7-35.53 32.44-71.85C224 89.61 203.22 64 181.49 64a26.53 26.53 0 0 0-4 .3c-23.21 3.37-37.7 35.53-32.44 71.85C150 170.29 170.78 196 192.51 196z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M366.92 136.15c5.26-36.32-9.23-68.48-32.44-71.85a26.53 26.53 0 0 0-4-.3c-21.73 0-42.47 25.61-47.43 59.85c-5.26 36.32 9.23 68.48 32.44 71.85a26.53 26.53 0 0 0 4 .3c21.73 0 42.51-25.71 47.43-59.85z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M105.77 293.9c22.39-9 28.93-44 14.72-78.14C108.53 187 85.62 168 65.38 168a30.21 30.21 0 0 0-11.15 2.1c-22.39 9-28.93 44-14.72 78.14C51.47 277 74.38 296 94.62 296a30.21 30.21 0 0 0 11.15-2.1z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path>',5),Aa=[$a],ka=U({name:"PawOutline",render:function(t,o){return Xe(),Pt("svg",_a,Aa)}}),La=U({__name:"index",setup(e){const t=[{label:"鱼",key:"fish",icon:o(Ia),children:[{label:"红烧",key:"braise",children:[{label:"加辣",key:"spicy"}]},{label:"清蒸",key:"steamed",children:[{label:"不要葱",key:"no-green-onion"}]}]},{label:"熊掌",key:"bear-paw",icon:o(ka),children:[{label:"保护野生动物",key:"protect-wild-animals"}]},{label:"两个都要",key:"both",icon:o(wa),children:[{label:"鱼和熊掌不可兼得",key:"can-not"}]}];function o(n){return()=>f(Zo,null,{default:()=>f(n)})}return(n,r)=>{const i=ea,l=pa,s=ia,a=Qn("router-view"),c=Zl,u=Xl;return Xe(),er(u,{position:"static"},{default:$e(()=>[be(i,{class:"h-16 flex items-center px-16 gap-4",bordered:""},{default:$e(()=>[be(cn)]),_:1}),be(u,{class:"h-screen","has-sider":""},{default:$e(()=>[be(s,{"collapse-mode":"width","collapsed-width":120,width:240,"show-trigger":"arrow-circle","content-style":"padding: 24px;",bordered:""},{default:$e(()=>[be(l,{options:t,accordion:""})]),_:1}),be(c,{"content-style":"padding: 24px;"},{default:$e(()=>[be(a)]),_:1})]),_:1})]),_:1})}}});export{La as default};
