import{d as _,c as y,e as g,f as v,u as E,o as w,g as P,j as b}from"./pinia-2069eb33.js";import{q as L,x as O}from"./@bassist/utils-322ed53d.js";import{u as S,c as $,a as R}from"./vue-router-dd4a3b40.js";import{a as u}from"./@bassist/progress-82d28c41.js";import{s as k}from"./pinia-plugin-persistedstate-02097300.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const A=_({__name:"App",setup(s){const r=S(),n=y(()=>`${String(r.name||r.path)}-${new Date}`);return L(()=>{document.body.className=`platform-${O()?"mobile":"desktop"}`}),(i,t)=>{const e=g("router-view");return w(),v(e,{key:E(n)})}}}),B="modulepreload",C=function(s){return"/"+s},m={},N=function(r,n,i){if(!n||n.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=C(e),e in m)return;m[e]=!0;const o=e.endsWith(".css"),h=o?'[rel="stylesheet"]':"";if(!!i)for(let a=t.length-1;a>=0;a--){const l=t[a];if(l.href===e&&(!o||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${h}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":B,o||(c.as="script",c.crossOrigin=""),c.href=e,document.head.appendChild(c),o)return new Promise((a,l)=>{c.addEventListener("load",a),c.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},q=[{path:"/",name:"todo",component:()=>N(()=>import("./index-f0427056.js"),["assets/index-f0427056.js","assets/pinia-2069eb33.js","assets/index-68227bf3.css"]),meta:{title:"todo"}}],d="Vue3 Starter";u.configure({showSpinner:!1});u.setColor("var(--c-brand)");const f=$({history:R("/"),routes:q,scrollBehavior:(s,r,n)=>n||{top:0,left:0}});f.beforeEach(()=>{u.start()});f.afterEach(s=>{const{title:r}=s.meta;document.title=r?`${r} - ${d}`:d,u.done()});const p=P();p.use(k);b(A).use(p).use(f).mount("#app");