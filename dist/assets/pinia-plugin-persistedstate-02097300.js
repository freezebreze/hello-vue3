/**
 * name: hello-vue3
 * version: v0.0.0
 * description: 
 * author: 
 */
/**
 * name: hello-vue3
 * version: v0.0.0
 * description: 
 * author: 
 */
/**
 * name: hello-vue3
 * version: v0.0.0
 * description: 
 * author: 
 */
function y(r){return typeof r=="object"&&r!==null}function g(r,t){return r=y(r)?r:Object.create(null),new Proxy(r,{get(i,n,e){return n==="key"?Reflect.get(i,n,e):Reflect.get(i,n,e)||Reflect.get(t,n,e)}})}function S(r,t){return t.reduce((i,n)=>i==null?void 0:i[n],r)}function R(r,t,i){return t.slice(0,-1).reduce((n,e)=>/^(__proto__)$/.test(e)?{}:n[e]=n[e]||{},r)[t[t.length-1]]=i,r}function p(r,t){return t.reduce((i,n)=>{const e=n.split(".");return R(i,e,S(r,e))},{})}function _(r,{storage:t,serializer:i,key:n,debug:e}){try{const o=t==null?void 0:t.getItem(n);o&&r.$patch(i==null?void 0:i.deserialize(o))}catch(o){e&&console.error(o)}}function $(r,{storage:t,serializer:i,key:n,paths:e,debug:o}){try{const u=Array.isArray(e)?p(r,e):r;t.setItem(n,i.serialize(u))}catch(u){o&&console.error(u)}}function b(r={}){return t=>{const{auto:i=!1}=r,{options:{persist:n=i},store:e,pinia:o}=t;if(!n)return;if(!(e.$id in o.state.value)){const l=o._s.get(e.$id.replace("__hot:",""));l&&Promise.resolve().then(()=>l.$persist());return}const u=(Array.isArray(n)?n.map(l=>g(l,r)):[g(n,r)]).map(({storage:l=localStorage,beforeRestore:s=null,afterRestore:a=null,serializer:c={serialize:JSON.stringify,deserialize:JSON.parse},key:f=e.$id,paths:h=null,debug:m=!1})=>{var d;return{storage:l,beforeRestore:s,afterRestore:a,serializer:c,key:((d=r.key)!=null?d:v=>v)(typeof f=="string"?f:f(e.$id)),paths:h,debug:m}});e.$persist=()=>{u.forEach(l=>{$(e.$state,l)})},e.$hydrate=({runHooks:l=!0}={})=>{u.forEach(s=>{const{beforeRestore:a,afterRestore:c}=s;l&&(a==null||a(t)),_(e,s),l&&(c==null||c(t))})},u.forEach(l=>{const{beforeRestore:s,afterRestore:a}=l;s==null||s(t),_(e,l),a==null||a(t),e.$subscribe((c,f)=>{$(f,l)},{detached:!0})})}}var A=b();export{A as s};
