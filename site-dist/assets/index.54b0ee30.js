import{i as u}from"./index.f9e694e0.js";/* empty css                                                           */import{_ as i}from"./iframe-router.da9cdf5c.js";import{r as v,o as l,a as r,d as o,c as f,f as h,h as n,t as c,i as d,e as $}from"./vue-libs.83d6b4b5.js";const g={components:{icon:u},props:{title:String,value:String,icon:String,placeholder:String},data(){return{}},emits:["click"]},k={class:"cell-title cell-item"},S={class:"cell-input-value cell-item"},x={class:"cell-placeholder"},B={class:"cell-value cell-item"};function y(t,s,e,_,m,p){const a=v("icon");return l(),r("div",{class:"cell",onClick:s[0]||(s[0]=w=>t.$emit("click"))},[o("div",k,[e.icon?(l(),f(a,{key:0,class:"left-icon",name:e.icon,size:"17px"},null,8,["name"])):h("v-if",!0),n(" "+c(e.title),1)]),o("div",S,[d(t.$slots,"default",{},()=>[o("span",x,c(e.placeholder),1)],!0)]),o("div",B,[n(c(e.value)+" ",1),$(a,{name:"right"})])])}var I=i(g,[["render",y],["__scopeId","data-v-3226f08e"]]);const N={props:{show:Boolean},emits:["click"]},V={class:"cell-group"};function C(t,s,e,_,m,p){return l(),r("div",V,[d(t.$slots,"default")])}var T=i(N,[["render",C]]);export{T as a,I as c};
