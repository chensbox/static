import{c as f}from"./createBem.9e81425a.js";import{_ as m}from"./iframe-router.f1eda47d.js";import{o as u,a as p,d as l,n as r,F as d,b as g,t as k,B as i,r as _,c as b,w as C,e as P}from"./vue-libs.7edcdcd6.js";const[$,B]=f("pagination");function y(e){const t=i(0),n=i(13),a=i(1),s=Math.floor(5/2),c=()=>a.value>s+1&&n.value-a.value>=s,o=()=>a.value>s&&a.value+s<n.value;return{bem:B,active:a,offset:t,onClick:z=>{},prePage:()=>{a.value!=1&&(c()&&t.value--,a.value--)},nextPage:()=>{a.value!=n.value&&(o()&&t.value++,a.value++)},pagesCount:n}}const M={name:$,setup:y},N=["onClick"];function h(e,t,n,a,s,c){return u(),p("ul",{class:r(e.bem())},[l("li",{class:r(e.bem("pre-button",{disable:e.active==1})),onClick:t[0]||(t[0]=(...o)=>e.prePage&&e.prePage(...o))}," \u4E0A\u4E00\u9875 ",2),(u(),p(d,null,g(5,o=>l("li",{class:r(e.bem("item",{active:e.active==o+e.offset})),key:o,onClick:v=>e.onClick(o)},k(o+e.offset),11,N)),64)),l("li",{class:r(e.bem("next-button",{disable:e.active==e.pagesCount})),onClick:t[1]||(t[1]=(...o)=>e.nextPage&&e.nextPage(...o))}," \u4E0B\u4E00\u9875 ",2)],2)}var w=m(M,[["render",h],["__scopeId","data-v-d0a9ea84"]]);const L={setup(e){return(t,n)=>{const a=_("demo-block");return u(),b(a,{title:"\u57FA\u7840\u7528\u6CD5"},{default:C(()=>[P(w)]),_:1})}}};export{L as default};
