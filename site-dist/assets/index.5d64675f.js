import{i as u}from"./index.ddf6e2d6.js";/* empty css                                              */import{_ as g}from"./iframe-router.b6fffff1.js";import{r as m,o as t,a as i,c as y,f as l,n as c,i as b,t as k,g as p}from"./vue-libs.83d6b4b5.js";const B={type:{type:String,default:"primary"},size:{type:String,default:"normal"},plain:{type:Boolean,default:!1},color:String,icon:String,loading:Boolean,loadingType:String,loadingText:String,disabled:Boolean,square:Boolean,round:Boolean},S="t-button",C=["click"],T={Icon:u},$={info:"#1989fa",warning:"#ff976a",danger:"#ee0a24",primary:"#07c160"};function v(o,{slots:a,emit:s}){const r=["t-button",o.type,o.size,o.disabled?"disabled":"",o.square?"square":"",o.round?"round":""],n={background:o.color};if(o.plain){const e=o.color?o.color:$[o.type];n.color=e,n.border=`1px solid ${e}`,n.background="#ffffff",n["line-height"]=0}return{style:n,classList:r,slots:a,onClick:e=>{o.loading||s("click",e)}}}const z={name:S,props:B,emits:C,components:T,setup:v},h=["disabled"],q={key:2,class:"btn-text"};function L(o,a,s,r,n,d){const e=m("icon");return t(),i("button",{class:c(o.classList),style:p(o.style),onClick:a[0]||(a[0]=(...f)=>o.onClick&&o.onClick(...f)),disabled:o.disabled},[o.icon||o.loading?(t(),y(e,{key:0,name:o.icon||o.loadingType,class:"btn-icon"},null,8,["name"])):l("v-if",!0),!o.loading&&o.slots.default?(t(),i("span",{key:1,class:c({"btn-text":o.icon})},[b(o.$slots,"default")],2)):l("v-if",!0),o.loading&&o.loadingText?(t(),i("span",q,k(o.loadingText),1)):l("v-if",!0)],14,h)}var M=g(z,[["render",L]]);export{M as T};
