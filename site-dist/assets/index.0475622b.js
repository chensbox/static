var w=Object.defineProperty,B=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var m=(e,n,t)=>n in e?w(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,i=(e,n)=>{for(var t in n||(n={}))S.call(n,t)&&m(e,t,n[t]);if(f)for(var t of f(n))N.call(n,t)&&m(e,t,n[t]);return e},r=(e,n)=>B(e,k(n));import{s as T,r as y,o as g,c as _,w as j,d as v,f as I,t as L,e as $,g as O,T as V,A as h,B as d,D as A}from"./vue-libs.42034ed0.js";import{s as p}from"./sleep.2dba75b7.js";import{I as D}from"./index.eeb025c1.js";import{o as R}from"./index.8592a9a9.js";import{_ as q}from"./iframe-router.f13c50c0.js";function x(e,n){const t=T(e,n),a=document.createElement("div");return document.body.appendChild(a),t.mount(a),{instance:t,mountNode:a}}const z="toast",E={icon:D,overlay:R},F={success:Boolean,fail:Boolean,destroy:Function,position:String,showLoading:Boolean,icon:[String,Object],duration:{type:Number,default:2e3},message:{type:[String,Object],require:!0},forbidClick:{type:Boolean,default:!1},loadingType:{type:String,default:"circle"}},M=(e,{expose:n})=>{const t=h({}),a=h({message:e.message,icon:e.icon}),c=d(),u=()=>{c.value&&(c.value.style.opacity=0,p(250).then(e.destroy))};return(e.showLoading||e.icon.value)&&(t.padding="25px 15px"),A(()=>{e.duration>0&&p(e.duration).then(u)}),n({close:u}),{state:a,toastRef:c,style:t}},G={name:z,props:F,components:E,setup:M};function H(e,n,t,a,c,u){const b=y("icon"),C=y("overlay");return g(),_(V,{name:"slide-fade",appear:""},{default:j(()=>[v("div",{class:"toast",ref:"toastRef",style:O(e.style)},[e.showLoading||e.state.icon?(g(),_(b,{key:0,name:e.state.icon,class:"toast-icon"},null,8,["name"])):I("v-if",!0),v("p",null,L(e.state.message),1),$(C,{transparent:!0,show:e.forbidClick},null,8,["show"])],4)]),_:1})}var s=q(G,[["render",H],["__scopeId","data-v-05e95ea8"]]);function J(e,n){e.unmount(n),document.body.removeChild(n)}function o(e){e=l(e),e.message=d(e.message),e.icon=d(e.icon),e.destroy=function(){J(n,t)};const{instance:n,mountNode:t}=x(s,e);return n.message=e.message,n.icon=e.icon,n.close=e.destroy,console.log(n),n}o.success=function(e){return e=l(e),o(r(i({},e),{icon:"check"}))};o.fail=function(e){return e=l(e),o(r(i({},e),{icon:"close-circle"}))};o.loading=function(e){return e=l(e),o(r(i({},e),{showLoading:!0,icon:"loading-spinner"}))};function l(e){return typeof e!="object"?{message:e}:e}s.install=function(e){e.component(s.name,s)};o.Component=s;o.install=function(e){e.use(o.Component)};export{o as T};
