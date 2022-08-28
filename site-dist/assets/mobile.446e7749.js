import{_ as y,f as B,b as F,l as H,g as j,h as M}from"./iframe-router.f1eda47d.js";import{a as m,t as T,f as C,i as P,o as _,n as N,d as f,r as E,F as V,b as K,c as D,w as O,h as X,e as w,l as Y,m as q,x as W,q as U,j as G,v as J,y as Q,K as Z,s as tt}from"./vue-libs.7edcdcd6.js";const et={name:"DemoBlock",props:{card:Boolean,title:String}},ot={class:"van-doc-demo-block"},nt={key:0,class:"van-doc-demo-block__title"},st={key:1,class:"van-doc-demo-block__card"};function it(t,a,s,o,r,n){return _(),m("div",ot,[s.title?(_(),m("h2",nt,T(s.title),1)):C("v-if",!0),s.card?(_(),m("div",st,[P(t.$slots,"default")])):P(t.$slots,"default",{key:2})])}var I=y(et,[["render",it]]);const rt={name:"DemoSection",computed:{demoName(){const{meta:t}=this.$route||{};return t&&t.name?`demo-${B(t.name)}`:""}}};function ct(t,a,s,o,r,n){return _(),m("section",{class:N(["van-doc-demo-section",n.demoName])},[P(t.$slots,"default")],2)}var S=y(rt,[["render",ct]]);const at="modulepreload",b={},lt="/static/site-dist/",i=function(a,s){return!s||s.length===0?a():Promise.all(s.map(o=>{if(o=`${lt}${o}`,o in b)return;b[o]=!0;const r=o.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":at,r||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),r)return new Promise((h,d)=>{l.addEventListener("load",h),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>a())};const _t=()=>i(()=>import("./index.0101c2fc.js"),["assets/index.0101c2fc.js","assets/index.aa461c01.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.44e42cce.css","assets/index.ff4b90cf.js","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js","assets/index.6bb10f18.js","assets/index.ce3dd6ac.css","assets/index.79d60c36.js","assets/index.7d014458.css","assets/createBem.9e81425a.js","assets/props.f4e9878f.js","assets/index.5d458c49.js","assets/index.a0a18087.css","assets/index.434fe5a4.js"]),ut=()=>i(()=>import("./index.6a6d5217.js"),["assets/index.6a6d5217.js","assets/index.4d6b0a03.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_lang.5f24d82a.css","assets/index.407dc08a.js","assets/createBem.9e81425a.js","assets/props.f4e9878f.js","assets/index.ff4b90cf.js","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js"]),mt=()=>i(()=>import("./index.84865399.js"),["assets/index.84865399.js","assets/index.18e40229.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.44e42cce.css","assets/index.ff4b90cf.js","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js","assets/createBem.9e81425a.js","assets/props.f4e9878f.js","assets/index.434fe5a4.js","assets/index.5d458c49.js","assets/index.a0a18087.css","assets/index.6bb10f18.js","assets/index.ce3dd6ac.css","assets/index.79d60c36.js","assets/index.7d014458.css"]),dt=()=>i(()=>import("./index.1b799b82.js"),["assets/index.1b799b82.js","assets/index.4c865cc5.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.44e42cce.css","assets/index.5d458c49.js","assets/index.a0a18087.css","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js","assets/index.434fe5a4.js","assets/index.ff4b90cf.js"]),ht=()=>i(()=>import("./index.850acfe4.js"),["assets/index.850acfe4.js","assets/index.27a19d42.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_lang.5f24d82a.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.44e42cce.css","assets/index.407dc08a.js","assets/createBem.9e81425a.js","assets/props.f4e9878f.js","assets/index.ff4b90cf.js","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js","assets/index.434fe5a4.js"]),pt=()=>i(()=>import("./index.622b91f3.js"),["assets/index.622b91f3.js","assets/index.58bc0e1d.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_lang.5f24d82a.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.44e42cce.css","assets/vue-libs.7edcdcd6.js","assets/index.79d60c36.js","assets/index.7d014458.css","assets/iframe-router.f1eda47d.js","assets/index.407dc08a.js","assets/createBem.9e81425a.js","assets/props.f4e9878f.js","assets/index.ff4b90cf.js","assets/sleep.2dba75b7.js","assets/index.ea096dcb.js","assets/index.b7dc76fe.css","assets/index.434fe5a4.js","assets/index.5d458c49.js","assets/index.a0a18087.css"]),ft=()=>i(()=>import("./index.ec869f57.js"),["assets/index.ec869f57.js","assets/index.55de8c0c.css","assets/index.vue_vue_type_style_index_0_lang.5f24d82a.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/vue-libs.7edcdcd6.js","assets/index.ff4b90cf.js","assets/iframe-router.f1eda47d.js"]),vt=()=>i(()=>import("./index.833bf659.js"),["assets/index.833bf659.js","assets/index.9c814c22.css","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js"]),gt=()=>i(()=>import("./index.78ae7be1.js"),["assets/index.78ae7be1.js","assets/index.78ac6538.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/vue-libs.7edcdcd6.js","assets/createBem.9e81425a.js","assets/props.f4e9878f.js","assets/index.ff4b90cf.js","assets/iframe-router.f1eda47d.js","assets/index.e96776a8.js","assets/index.a49c99b2.css","assets/index.6f540748.js","assets/index.fc155994.css","assets/sleep.2dba75b7.js"]),yt=()=>i(()=>import("./index.385fd4f3.js"),["assets/index.385fd4f3.js","assets/index.edc5bdc6.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.44e42cce.css","assets/index.434fe5a4.js","assets/index.ff4b90cf.js","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js","assets/index.5d458c49.js","assets/index.a0a18087.css","assets/createBem.9e81425a.js","assets/props.f4e9878f.js"]),Et=()=>i(()=>import("./index.360ee743.js"),["assets/index.360ee743.js","assets/index.a35558de.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_lang.5f24d82a.css","assets/index.407dc08a.js","assets/createBem.9e81425a.js","assets/props.f4e9878f.js","assets/index.ff4b90cf.js","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js","assets/index.79d60c36.js","assets/index.7d014458.css"]),Tt=()=>i(()=>import("./index.6cd129d7.js"),["assets/index.6cd129d7.js","assets/index.4010ea3a.css","assets/createBem.9e81425a.js","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js"]),$t=()=>i(()=>import("./index.cc073fcc.js"),["assets/index.cc073fcc.js","assets/index.5236a9d3.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.cbce9700.js","assets/index.bc14c2dc.css","assets/vue-libs.7edcdcd6.js","assets/iframe-router.f1eda47d.js","assets/index.ea096dcb.js","assets/index.b7dc76fe.css","assets/sleep.2dba75b7.js","assets/index.ff4b90cf.js","assets/index.79d60c36.js","assets/index.7d014458.css"]),Lt=()=>i(()=>import("./index.a01616a0.js"),["assets/index.a01616a0.js","assets/index.ab140e32.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.44e42cce.css","assets/index.vue_vue_type_style_index_0_lang.5f24d82a.css","assets/index.434fe5a4.js","assets/index.ff4b90cf.js","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js","assets/index.5d458c49.js","assets/index.a0a18087.css","assets/index.407dc08a.js","assets/createBem.9e81425a.js","assets/props.f4e9878f.js","assets/index.6bb10f18.js","assets/index.ce3dd6ac.css","assets/index.79d60c36.js","assets/index.7d014458.css"]),wt=()=>i(()=>import("./index.3ca1c91c.js"),["assets/index.3ca1c91c.js","assets/index.0d075ac1.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.e96776a8.js","assets/index.a49c99b2.css","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js","assets/index.ff4b90cf.js","assets/createBem.9e81425a.js","assets/props.f4e9878f.js","assets/index.6f540748.js","assets/index.fc155994.css","assets/sleep.2dba75b7.js","assets/index.ea096dcb.js","assets/index.b7dc76fe.css","assets/index.79d60c36.js","assets/index.7d014458.css"]),Dt=()=>i(()=>import("./index.20da9020.js"),["assets/index.20da9020.js","assets/vue-libs.7edcdcd6.js","assets/iframe-router.f1eda47d.js"]),kt=()=>i(()=>import("./index.6fec9b05.js"),["assets/index.6fec9b05.js","assets/index.14cd1d7e.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.44e42cce.css","assets/index.vue_vue_type_style_index_0_lang.5f24d82a.css","assets/vue-libs.7edcdcd6.js","assets/index.5d458c49.js","assets/index.a0a18087.css","assets/iframe-router.f1eda47d.js","assets/index.434fe5a4.js","assets/index.ff4b90cf.js","assets/index.6bb10f18.js","assets/index.ce3dd6ac.css","assets/index.79d60c36.js","assets/index.7d014458.css","assets/index.407dc08a.js","assets/createBem.9e81425a.js","assets/props.f4e9878f.js","assets/index.cbce9700.js","assets/index.bc14c2dc.css","assets/index.ea096dcb.js","assets/index.b7dc76fe.css","assets/sleep.2dba75b7.js"]),Pt=()=>i(()=>import("./index.41a04915.js"),["assets/index.41a04915.js","assets/index.f0ca71ad.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_lang.5f24d82a.css","assets/vue-libs.7edcdcd6.js","assets/createBem.9e81425a.js","assets/props.f4e9878f.js","assets/iframe-router.f1eda47d.js","assets/index.407dc08a.js","assets/index.ff4b90cf.js"]),Ot=()=>i(()=>import("./index.bfd57b26.js"),["assets/index.bfd57b26.js","assets/index.a046cf22.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/vue-libs.7edcdcd6.js","assets/createBem.9e81425a.js","assets/props.f4e9878f.js","assets/iframe-router.f1eda47d.js","assets/index.ea096dcb.js","assets/index.b7dc76fe.css","assets/sleep.2dba75b7.js","assets/index.ff4b90cf.js","assets/index.79d60c36.js","assets/index.7d014458.css"]),Rt=()=>i(()=>import("./index.add349a2.js"),["assets/index.add349a2.js","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.e96776a8.js","assets/index.a49c99b2.css","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js","assets/index.ff4b90cf.js","assets/createBem.9e81425a.js","assets/props.f4e9878f.js"]),At=()=>i(()=>import("./index.ae2fb820.js"),["assets/index.ae2fb820.js","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.44e42cce.css","assets/index.434fe5a4.js","assets/index.ff4b90cf.js","assets/iframe-router.f1eda47d.js","assets/vue-libs.7edcdcd6.js","assets/index.5d458c49.js","assets/index.a0a18087.css","assets/index.ea096dcb.js","assets/index.b7dc76fe.css","assets/sleep.2dba75b7.js","assets/index.79d60c36.js","assets/index.7d014458.css"]),Vt=()=>i(()=>import("./index.cdc7adff.js"),["assets/index.cdc7adff.js","assets/index.ffe2fb55.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.e9284c69.css","assets/index.vue_vue_type_style_index_0_scoped_true_lang.44e42cce.css","assets/vue-libs.7edcdcd6.js","assets/iframe-router.f1eda47d.js"]),k={ActionSheet:_t,Button:ut,Cascader:mt,Cell:dt,Collapse:ht,Dialog:pt,Icon:ft,InfiniteList:vt,List:gt,Notify:yt,Overlay:Et,Pagination:Tt,Picker:$t,Popup:Lt,PullRefresh:wt,Rend:Dt,Signature:kt,Skeleton:Pt,Swipe:Ot,Tabs:Rt,Toast:At,VirtualList:Vt},R={name:"TDesign",build:{css:{preprocessor:"less"},site:{publicPath:"/static/site-dist"}},site:{title:"TDesign",logo:"https://img.yzcdn.cn/vant/logo.png",nav:[{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"button",title:"Button \u6309\u94AE"},{path:"cell",title:"Cell \u5355\u5143\u683C"},{path:"tabs",title:"Tabs \u6807\u7B7E\u9875"},{path:"toast",title:"Toast \u5F39\u7A97"},{path:"dialog",title:"Dialog \u5BF9\u8BDD\u6846"},{path:"popup",title:"Popup \u5F39\u51FA\u5C42"},{path:"overlay",title:"Overlay \u906E\u7F69\u5C42"},{path:"action-sheet",title:"ActionSheet \u52A8\u4F5C\u9762\u677F"},{path:"picker",title:"Picker \u9009\u62E9\u5668"},{path:"cascader",title:"Cascader \u7EA7\u8054\u9009\u62E9"},{path:"swipe",title:"Swipe \u8F6E\u64AD"},{path:"pull-refresh",title:"PullRefresh \u4E0B\u62C9\u5237\u65B0"},{path:"list",title:"List \u5217\u8868"},{path:"skeleton",title:"Skeleton \u9AA8\u67B6\u5C4F"},{path:"notify",title:"Notify \u6D88\u606F\u901A\u77E5"},{path:"collapse",title:"Collapse \u6298\u53E0\u9762\u677F"},{path:"pagination",title:"Pagination  \u5206\u9875"}]},{title:"\u529F\u80FD\u6307\u4EE4",items:[{path:"infinite-list",title:"InfiniteScroll \u65E0\u9650\u6EDA\u52A8"}]},{title:"Beta",items:[{path:"signature",title:"Signature \u7535\u5B50\u7B7E\u540D"},{path:"virtual-list",title:"VirtualList \u865A\u62DF\u5217\u8868"},{path:"icon",title:"Icon \u56FE\u6807"}]}]}},It={},St={viewBox:"0 0 1024 1024"},bt=f("path",{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"},null,-1),xt=f("path",{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"},null,-1),Bt=[bt,xt];function Ct(t,a){return _(),m("svg",St,Bt)}var Nt=y(It,[["render",Ct]]);const Kt={components:{ArrowRight:Nt},props:{lang:String,group:Object},data(){return{active:[]}},computed:{base(){return this.lang?`/${this.lang}`:""}}},zt={class:"demo-home-nav"},Ft={class:"demo-home-nav__title"},Ht={class:"demo-home-nav__group"};function jt(t,a,s,o,r,n){const l=E("arrow-right"),h=E("router-link");return _(),m("div",zt,[f("div",Ft,T(s.group.title),1),f("div",Ht,[(_(!0),m(V,null,K(s.group.items,d=>(_(),D(h,{class:"demo-home-nav__block",key:d.path,to:`${n.base}/${d.path}`},{default:O(()=>[X(T(d.title)+" ",1),w(l,{class:"demo-home-nav__icon"})]),_:2},1032,["to"]))),128))])])}var Mt=y(Kt,[["render",jt]]);const Xt={components:{DemoHomeNav:Mt},computed:{lang(){const{lang:t}=this.$route.meta;return t},config(){const{locales:t}=R.site;return t?t[this.lang]:R.site},smallTitle(){return this.config.title.length>=8}}},Yt={class:"demo-home"},qt=["src"],Wt={key:0,class:"demo-home__desc"};function Ut(t,a,s,o,r,n){const l=E("demo-home-nav");return _(),m("div",Yt,[f("h1",{class:N(["demo-home__title",{"demo-home__title--small":n.smallTitle}])},[f("img",{src:n.config.logo},null,8,qt),f("span",null,T(n.config.title),1)],2),n.config.description?(_(),m("h2",Wt,T(n.config.description),1)):C("v-if",!0),(_(!0),m(V,null,K(n.config.nav,(h,d)=>(_(),D(l,{key:d,lang:n.lang,group:h},null,8,["lang","group"]))),128))])}var x=y(Xt,[["render",Ut]]);const{locales:A,defaultLang:Gt}=R.site;F(Gt);function Jt(t){const a=t.path.split("/")[1];return Object.keys(A).indexOf(a)!==-1?a:j()}function Qt(){const t=[],a=Object.keys(k),s=A?Object.keys(A):[];return s.length?(t.push({name:"NotFound",path:"/:path(.*)+",redirect:o=>({name:Jt(o)})}),s.forEach(o=>{t.push({name:o,path:`/${o}`,component:x,meta:{lang:o}})})):(t.push({name:"NotFound",path:"/:path(.*)+",redirect:{name:"home"}}),t.push({name:"home",path:"/",component:x})),a.forEach(o=>{const r=B(o);s.length?s.forEach(n=>{t.push({name:`${n}/${r}`,path:`/${n}/${r}`,component:k[o],meta:{name:o,lang:n}})}):t.push({name:r,path:`/${r}`,component:k[o],meta:{name:o}})}),t}const $=Y({history:q(),routes:Qt(),scrollBehavior:(t,a,s)=>s||{x:0,y:0}});W($.currentRoute,()=>{$.currentRoute.value.redirectedFrom||U(M)});H($);window.vueRouter=$;const Zt={data(){return{path:"M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"}},computed:{title(){const{name:t}=this.$route.meta||{};return t?t.replace(/-/g,""):""}},methods:{onBack(){history.length>1?history.back():this.$router.replace("/")}}},te={class:"demo-nav"},ee={class:"demo-nav__title"},oe=["d"];function ne(t,a,s,o,r,n){return G((_(),m("div",te,[f("div",ee,T(n.title),1),(_(),m("svg",{class:"demo-nav__back",viewBox:"0 0 1000 1000",onClick:a[0]||(a[0]=(...l)=>n.onBack&&n.onBack(...l))},[f("path",{fill:"#969799","fill-rule":"evenodd",d:r.path},null,8,oe)]))],512)),[[J,n.title]])}var se=y(Zt,[["render",ne]]);const ie={components:{DemoNav:se}};function re(t,a,s,o,r,n){const l=E("demo-nav"),h=E("demo-section"),d=E("router-view");return _(),m(V,null,[w(l),w(d,null,{default:O(({Component:L})=>[(_(),D(Z,null,[w(h,null,{default:O(()=>[(_(),D(Q(L)))]),_:2},1024)],1024))]),_:1})],64)}var ce=y(ie,[["render",re]]);(function(){if(typeof window=="undefined")return;var t,a="ontouchstart"in window;document.createTouch||(document.createTouch=function(c,e,u,p,v,g,z){return new s(e,u,{pageX:p,pageY:v,screenX:g,screenY:z,clientX:p-window.pageXOffset,clientY:v-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var c=o(),e=0;e<arguments.length;e++)c[e]=arguments[e];return c.length=arguments.length,c}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(c){var e=this;do{if(e.matches(c))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var s=function(e,u,p,v,g){v=v||0,g=g||0,this.identifier=u,this.target=e,this.clientX=p.clientX+v,this.clientY=p.clientY+g,this.screenX=p.screenX+v,this.screenY=p.screenY+g,this.pageX=p.pageX+v,this.pageY=p.pageY+g};function o(){var c=[];return c.item=function(e){return this[e]||null},c.identifiedTouch=function(e){return this[e+1]||null},c}var r=!1;function n(c){return function(e){e.type==="mousedown"&&(r=!0),e.type==="mouseup"&&(r=!1),!(e.type==="mousemove"&&!r)&&((e.type==="mousedown"||!t||t&&!t.dispatchEvent)&&(t=e.target),t.closest("[data-no-touch-simulate]")==null&&l(c,e),e.type==="mouseup"&&(t=null))}}function l(c,e){var u=document.createEvent("Event");u.initEvent(c,!0,!0),u.altKey=e.altKey,u.ctrlKey=e.ctrlKey,u.metaKey=e.metaKey,u.shiftKey=e.shiftKey,u.touches=d(e),u.targetTouches=d(e),u.changedTouches=h(e),t.dispatchEvent(u)}function h(c){var e=o();return e.push(new s(t,1,c,0,0)),e}function d(c){return c.type==="mouseup"?o():h(c)}function L(){window.addEventListener("mousedown",n("touchstart"),!0),window.addEventListener("mousemove",n("touchmove"),!0),window.addEventListener("mouseup",n("touchend"),!0)}L.multiTouchOffset=75,a||new L})();window.app=tt(ce).use($).component(I.name,I).component(S.name,S);setTimeout(()=>{window.app.mount("#app")},0);
