import{I as r}from"./index.eeb025c1.js";/* empty css                                                           */import{_ as d}from"./iframe-router.f13c50c0.js";import{r as m,o as s,a as _,d as t,c as p,f as u,h as i,t as c,i as v,e as f}from"./vue-libs.42034ed0.js";const h={components:{icon:r},props:{title:String,value:String,icon:String,placeholder:String},data(){return{}},emits:["click"]},k={class:"cell-title cell-item"},g={class:"cell-input-value cell-item"},S={class:"cell-placeholder"},B={class:"cell-value cell-item"};function N(l,o,e,V,x,C){const a=m("icon");return s(),_("div",{class:"cell",onClick:o[0]||(o[0]=n=>l.$emit("click",n))},[t("div",k,[e.icon?(s(),p(a,{key:0,class:"left-icon",name:e.icon,size:"17px"},null,8,["name"])):u("v-if",!0),i(" "+c(e.title),1)]),t("div",g,[v(l.$slots,"default",{},()=>[t("span",S,c(e.placeholder),1)],!0)]),t("div",B,[i(c(e.value)+" ",1),f(a,{name:"right"})])])}var E=d(h,[["render",N],["__scopeId","data-v-3e176288"]]);export{E as c};
