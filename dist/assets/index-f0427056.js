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
import{k as C,d as D,l as S,b as _,c as T,m as i,q as c,t as w,v as I,u as n,x as v,F as b,y as B,z as f,A as h,B as M,o as r,C as V,D as E,E as N,G as y}from"./pinia-2069eb33.js";const R=C("todo",{state:()=>({todoData:[],id:1}),getters:{getTodo(e){return e.todoData??[]}},actions:{async updateTodo(e){return new Promise(t=>{setTimeout(()=>{this.todoData.push(e),this.id++,t("Async done.")},1e3)})},updateMessageSync(e){return this.todoData.push(e),this.id++,"Sync done."},removeTodo(e){this.todoData=this.todoData.filter(t=>t!==e)}},persist:!0}),$=e=>(E("data-v-178c6483"),e=e(),N(),e),z={class:"todo"},A=["onSubmit"],F={key:0,class:"todos"},L=["onClick","onContextmenu"],q={key:1,class:"empty"},G=$(()=>c("small",null,[y("Left click to toggle completed. "),c("br"),y(" Right click to delete todo")],-1)),O=D({__name:"index",setup(e){const t=R(),{todoData:a,id:p}=S(t);let o=_(!1);const d=_("");let m=T(()=>o.value?a.value.filter(l=>!l.done):a.value);function x(){if(!d.value){alert("请输入要代办的事项");return}let l={id:p.value,context:d.value,done:!1};d.value="",t.updateMessageSync(l)}function g(l){t.removeTodo(l)}return(l,u)=>(r(),i("div",z,[c("form",{onSubmit:f(x,["prevent"]),id:"todoform"},[w(c("input",{placeholder:"Enter your todo","onUpdate:modelValue":u[0]||(u[0]=s=>v(d)?d.value=s:null)},null,512),[[I,n(d)]]),n(m).length?(r(),i("ul",F,[(r(!0),i(b,null,B(n(m),s=>(r(),i("li",{onClick:k=>s.done=!s.done,onContextmenu:f(k=>g(s),["prevent"]),class:V({completed:s.done}),key:s.id},[c("span",null,h(s.context),1)],42,L))),128))])):(r(),i("ul",q," empty todolist "))],40,A),n(a).length?(r(),i("button",{key:0,onClick:u[1]||(u[1]=s=>v(o)?o.value=!n(o):o=!n(o))},h(n(o)?"show all":"hideCompleted"),1)):M("",!0),G]))}});const P=(e,t)=>{const a=e.__vccOpts||e;for(const[p,o]of t)a[p]=o;return a},j=P(O,[["__scopeId","data-v-178c6483"]]);export{j as default};
