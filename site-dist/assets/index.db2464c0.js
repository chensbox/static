import{i as m}from"./index.b4e40b9d.js";import{_ as i}from"./iframe-router.23d146a7.js";import{r as v,o as c,a as r,d as s,c as f,f as h,h as n,t as o,i as _,e as $}from"./vue-libs.bd45fd12.js";const g={components:{icon:m},props:{title:String,value:String,icon:String,placeholder:String},data(){return{}},emits:["click"]},k={class:"cell-title cell-item"},x={class:"cell-input-value cell-item"},y={class:"cell-placeholder"},S={class:"cell-value cell-item"};function B(t,l,e,d,p,u){const a=v("icon");return c(),r("div",{class:"cell",onClick:l[0]||(l[0]=w=>t.$emit("click"))},[s("div",k,[e.icon?(c(),f(a,{key:0,class:"left-icon",name:e.icon,size:"17px"},null,8,["name"])):h("v-if",!0),n(" "+o(e.title),1)]),s("div",x,[_(t.$slots,"default",{},()=>[s("span",y,o(e.placeholder),1)],!0)]),s("div",S,[n(o(e.value)+" ",1),$(a,{name:"right"})])])}var G=i(g,[["render",B],["__scopeId","data-v-3226f08e"]]);const N={props:{show:Boolean},emits:["click"]},V={class:"cell-group"};function C(t,l,e,d,p,u){return c(),r("div",V,[_(t.$slots,"default")])}var I=i(N,[["render",C]]);export{I as a,G as c};
