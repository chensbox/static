import{c as f,a as V}from"./index.3da85d9b.js";import{T as b}from"./index.9a500299.js";import{p as a}from"./index.73441571.js";import{_ as k}from"./iframe-router.4802b0f6.js";import{r,o as v,a as g,e as o,w as n,F as _,h as C}from"./vue-libs.83d6b4b5.js";import"./index.8b370457.js";/* empty css                                              */import"./index.be16668c.js";const x={components:{popup:a,TButton:b,cell:f,cellGropu:V},data(){return{show:!1,left:!1,right:!1,top:!1,bottom:!1,round:!1,closeable:!1,closeablePositon:!1}},methods:{onclick(d){this[d]=!0}}},U=C("\u5185\u5BB9");function w(d,l,y,P,t,i){const u=r("cell"),m=r("cell-gropu"),s=r("popup"),p=r("demo-block");return v(),g(_,null,[o(p,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[o(m,null,{default:n(()=>[o(u,{title:"\u5C55\u793A\u5F39\u51FA\u5C42",onClick:l[0]||(l[0]=e=>t.show=!0)})]),_:1}),o(s,{modelValue:t.show,"onUpdate:modelValue":l[1]||(l[1]=e=>t.show=e)},{default:n(()=>[U]),_:1},8,["modelValue"])]),_:1}),o(p,{title:"\u5F39\u51FA\u4F4D\u7F6E"},{default:n(()=>[o(m,null,{default:n(()=>[o(u,{title:"\u5E95\u90E8\u5F39\u51FA",onClick:l[2]||(l[2]=e=>i.onclick("bottom"))}),o(u,{title:"\u9876\u90E8\u5F39\u51FA",onClick:l[3]||(l[3]=e=>i.onclick("top"))}),o(u,{title:"\u5DE6\u4FA7\u5F39\u51FA",onClick:l[4]||(l[4]=e=>i.onclick("left"))}),o(u,{title:"\u53F3\u4FA7\u5F39\u51FA",onClick:l[5]||(l[5]=e=>i.onclick("right"))})]),_:1}),o(s,{modelValue:t.bottom,"onUpdate:modelValue":l[6]||(l[6]=e=>t.bottom=e),position:"bottom"},null,8,["modelValue"]),o(s,{modelValue:t.top,"onUpdate:modelValue":l[7]||(l[7]=e=>t.top=e),position:"top"},null,8,["modelValue"]),o(s,{modelValue:t.left,"onUpdate:modelValue":l[8]||(l[8]=e=>t.left=e),position:"left"},null,8,["modelValue"]),o(s,{modelValue:t.right,"onUpdate:modelValue":l[9]||(l[9]=e=>t.right=e),position:"right"},null,8,["modelValue"])]),_:1}),o(p,{title:"\u5706\u89D2\u5F39\u7A97"},{default:n(()=>[o(m,null,{default:n(()=>[o(u,{title:"\u5706\u89D2\u5F39\u7A97",onClick:l[10]||(l[10]=e=>t.round=!0)})]),_:1}),o(s,{modelValue:t.round,"onUpdate:modelValue":l[11]||(l[11]=e=>t.round=e),round:"",position:"bottom",style:{height:"30%"}},null,8,["modelValue"])]),_:1}),o(p,{title:"\u5173\u95ED\u56FE\u6807"},{default:n(()=>[o(m,null,{default:n(()=>[o(u,{title:"\u5173\u95ED\u56FE\u6807",onClick:l[12]||(l[12]=e=>t.closeable=!0)}),o(u,{title:"\u56FE\u6807\u4F4D\u7F6E",onClick:l[13]||(l[13]=e=>t.closeablePositon=!0)})]),_:1}),o(s,{modelValue:t.closeable,"onUpdate:modelValue":l[14]||(l[14]=e=>t.closeable=e),position:"bottom",style:{height:"30%"},closeable:""},null,8,["modelValue"]),o(s,{modelValue:t.closeablePositon,"onUpdate:modelValue":l[15]||(l[15]=e=>t.closeablePositon=e),position:"bottom",style:{height:"30%"},closeable:"","close-icon-position":"top-left"},null,8,["modelValue"])]),_:1})],64)}var j=k(x,[["render",w],["__scopeId","data-v-6cdf3baf"]]);export{j as default};
