import{r,o as d,c as f,w as y,j as _,v as k,d as g,g as p,f as u,i as b,e as w,T as x,B as m,A as v,E as V}from"./vue-libs.ecaed212.js";import{o as B}from"./index.ec730427.js";import{I as C}from"./index.e25eee73.js";import{_ as I}from"./iframe-router.1a75ae54.js";const P={overlay:B,icon:C},S={modelValue:Boolean,position:String,round:Boolean,closeable:Boolean,closeIconPosition:{type:String,default:"top-right"}},$=(o,{emit:s})=>{const t=m("slide-fade-bottom"),e=v({}),i=v({}),n=m();if(o.position||(t.value="fade-in",e.left="50%",e.top="50%",e.transform="translate(-50%, -50%)"),o.position=="bottom"&&(e.left="0px",e.bottom="0px",e.width="100%",t.value="slide-fade-bottom"),o.position=="top"&&(e.left="0px",e.top="0px",e.width="100%",t.value="slide-fade-top"),o.position=="left"&&(e.left="0px",e.top="0px",e.height="100%",t.value="slide-fade-left"),o.position=="right"&&(e.right="0px",e.top="0px",e.height="100%",t.value="slide-fade-right"),o.round&&(e["border-radius"]="16px 16px 0 0 "),o.closeable&&(i.color="#c8c9cc",i["font-weight"]="bold",o.closeIconPosition)){const[c,h]=o.closeIconPosition.split("-");i[c]="10px",i[h]="15px"}const a=V(()=>{o.modelValue&&(n.value=o.modelValue,a())});return{style:e,animation:t,iconPositon:i,lazyLoad:n,onclick:c=>{s("update:modelValue",!1)}}},z={components:P,props:S,setup:$};function N(o,s,t,e,i,n){const a=r("icon"),l=r("overlay");return d(),f(x,{name:o.animation},{default:y(()=>[_(g("div",{class:"popup",style:p(o.style)},[o.closeable?(d(),f(a,{key:0,name:"close",class:"close-icon",style:p(o.iconPositon),size:"20px",onClick:o.onclick},null,8,["style","onClick"])):u("v-if",!0),o.lazyLoad?b(o.$slots,"default",{key:1},void 0,!0):u("v-if",!0),w(l,{show:o.modelValue,onClick:o.onclick},null,8,["show","onClick"])],4),[[k,o.modelValue]])]),_:3},8,["name"])}var A=I(z,[["render",N],["__scopeId","data-v-49a50f68"]]);export{A as p};
