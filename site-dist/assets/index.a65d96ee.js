import{I as i}from"./index.e25eee73.js";/* empty css                                                           */import{_ as r}from"./iframe-router.1a75ae54.js";import{r as d,o as s,a as m,d as t,c as _,f as p,h as n,t as c,i as u,e as v}from"./vue-libs.ecaed212.js";const f={components:{icon:i},props:{title:String,value:String,icon:String,placeholder:String},data(){return{}},emits:["click"]},h={class:"cell-title cell-item"},k={class:"cell-input-value cell-item"},g={class:"cell-placeholder"},S={class:"cell-value cell-item"};function B(l,o,e,N,V,x){const a=d("icon");return s(),m("div",{class:"cell",onClick:o[0]||(o[0]=C=>l.$emit("click"))},[t("div",h,[e.icon?(s(),_(a,{key:0,class:"left-icon",name:e.icon,size:"17px"},null,8,["name"])):p("v-if",!0),n(" "+c(e.title),1)]),t("div",k,[u(l.$slots,"default",{},()=>[t("span",g,c(e.placeholder),1)],!0)]),t("div",S,[n(c(e.value)+" ",1),v(a,{name:"right"})])])}var D=r(f,[["render",B],["__scopeId","data-v-394cf79c"]]);export{D as c};
