import{o as k,a as H,d,F as T,b as N,t as w,g as V,G as S,B as f,N as A,x as R,D as F,r as j,c as q,f as z,q as G}from"./vue-libs.83d6b4b5.js";import{_ as p}from"./iframe-router.4c50367a.js";const O="colum",U={index:Number,initY:Number,itemHeight:Number,list:Array},x=["columChange"],J=function(e,{emit:o}){const h=f(),m=f(),g=A(()=>({transition:`all ${h.value}s ease-out`,transform:`translateY(${m.value}px)`}));let v,i,l,r,c,a,Y;const y=t=>{Y=t.timeStamp,v=t.touches[0].pageY},$=t=>{h.value=0,i=t.touches[0].pageY,a=Math.round(l+i-v),a<=r&&a>=c&&(m.value=a)},b=(t,n)=>{t<e.itemHeight>>1?a=e.initY-(n-t):t&&(a=e.initY-(n+(e.itemHeight-t)))},_=t=>{const n=t.target.dataset.i;!n||(a=e.initY-(n-1)*e.itemHeight)},s=t=>{h.value=.2;const n=i-v;(!i||Math.abs(n)<10&&t.timeStamp-Y<100)&&_(t),i&&Math.abs(n)>70&&t.timeStamp-Y<300&&(h.value=.5,a=Math.round(l+n*3));const M=a>r-e.itemHeight,D=a<c+e.itemHeight;M?a=r-e.itemHeight:D&&(a=c+e.itemHeight);const B=Math.abs(e.initY-a),E=B%e.itemHeight;E!==0&&b(E,B),i=0,l=a,m.value=a;const L=Math.abs(e.initY-l)/e.itemHeight;o("columChange",e.list,L,e.index)};return R(e,()=>{r=e.initY+e.itemHeight,c=e.initY-e.itemHeight*e.list.length,m.value=e.initY}),F(()=>{l=e.initY,m.value=e.initY,r=e.initY+e.itemHeight,c=e.initY-e.itemHeight*e.list.length,i=0}),{scrollerStyle:g,touchstart:y,touchmove:$,touchend:s}},K={name:O,props:U,emits:x,setup:J},P=["data-i"];function Q(e,o,h,m,g,v){return k(),H("div",{class:"picker-columns-col",onTouchstart:o[0]||(o[0]=S((...i)=>e.touchstart&&e.touchstart(...i),["prevent"])),onTouchmove:o[1]||(o[1]=S((...i)=>e.touchmove&&e.touchmove(...i),["prevent"])),onTouchend:o[2]||(o[2]=S((...i)=>e.touchend&&e.touchend(...i),["prevent"]))},[d("ul",{class:"picker-columns-col-wrap",style:V(e.scrollerStyle)},[(k(!0),H(T,null,N(e.list,(i,l)=>(k(),H("li",{class:"picker-columns-col-wrap-item",key:l+1,"data-i":l+1},w(i.text||i),9,P))),128))],4)],32)}var W=p(K,[["render",Q]]);const X="t-picker",Z={colums:Array,title:String},I=["confirm","cancel","change"],ee={colum:W},te=function(e,{emit:o}){const h=f(),m=f(""),g=f(""),v=f(""),i=f([]),[l]=e.colums;let r,c;const a=s=>{o(s,c.map(t=>t.value),c.map(t=>t.index))},Y=()=>{typeof l!="object"?i.value.push(e.colums):l.values?i.value.push(...e.colums.map(s=>s.values)):l.children&&(r=!0,i.value.push(...$(e.colums))),c=b(i.value)},y=(s,t,n)=>{let u=[];i.value=i.value.slice(0,n+1),n==0?u=e.colums[t]:u=s.value[t];const C=$(u.children);i.value.push(...C)},$=s=>{const t=[],n=u=>{const C=u.map(M=>M.text);C.value=u,t.push(C),u[0].children&&n(u[0].children)};return n(s),t},b=s=>s.map(t=>({value:t[0],index:0})),_=(s,t,n)=>{r&&n!==e.colums.length-1&&(y(s,t,n),n==0?c=b(i.value):c[n+1]={value:s.value[t].children[0].text,index:0}),c[n]={value:s[t],index:t},o("change",c.map(u=>u.value),c.map(u=>u.index))};return F(()=>{const{value:s}=h;G(()=>{m.value=g.value=s.offsetTop-s.clientHeight/2,v.value=s.clientHeight})}),Y(),{hairlineRef:h,curY:m,initY:g,itemHeight:v,columsList:i,columChange:_,onClick:a}},ie={name:X,props:Z,emits:I,components:ee,setup:te},ne={class:"picker"},se={class:"picker-toolbar"},ae={class:"picker-toolbar-title"},oe={class:"picker-columns"},le=d("div",{class:"picker-columns-mask"},null,-1),ce={class:"picker-columns-hairline",ref:"hairlineRef"};function ue(e,o,h,m,g,v){const i=j("colum");return k(),H("div",ne,[d("div",se,[d("button",{class:"picker-toolbar-cancel",onClick:o[0]||(o[0]=l=>e.onClick("cancel"))}," \u53D6\u6D88 "),d("span",ae,w(e.title),1),d("button",{class:"picker-toolbar-confirm",onClick:o[1]||(o[1]=l=>e.onClick("confirm"))}," \u786E\u5B9A ")]),d("div",oe,[e.initY?(k(!0),H(T,{key:0},N(e.columsList,(l,r)=>(k(),q(i,{initY:e.initY,itemHeight:e.itemHeight,list:l,index:r,key:r,onColumChange:e.columChange},null,8,["initY","itemHeight","list","index","onColumChange"]))),128)):z("v-if",!0),le,d("div",ce,null,512)])])}var he=p(ie,[["render",ue]]);export{he as p};
