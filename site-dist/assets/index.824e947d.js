import{o as _,a as v,d as G,i as L,n as S,g as U,G as C,F as P,b as q,f as A,B as y,L as H,D as J,S as K,r as X,e as s,w as l,h as d}from"./vue-libs.42034ed0.js";import{c as O}from"./createBem.9e81425a.js";import{b as z,t as F}from"./props.4d0560a6.js";import{_ as N}from"./iframe-router.f13c50c0.js";import{T as Q}from"./index.0475622b.js";import"./sleep.2dba75b7.js";import"./index.eeb025c1.js";/* empty css                                                          */import"./index.8592a9a9.js";const[Y,Z]=O("swipe"),ee=["change"],te={autoplay:z(2e3),duration:z(.5),loop:F,showIndicators:F};function oe(e,{emit:n}){const m=y(),a=y(0),f=y(e.duration),h=y(0),t=y(),$=H(()=>({transform:`translateX(${a.value}px)`,transition:`all ${f.value}s ease-out`}));let o,g,p,I,r,w,k,B,b,T=!1,u=0,i=0;const R=()=>{T||Date.now()-b<e.autoplay||(g=o+1,p=o,V(),setTimeout(D))},W=()=>{i==0?k.style.transform=`translateX(${o*-r}px)`:i==r-1?w.style.transform=`translateX(${o*r}px)`:k.style.transform=w.style.transform=""},V=c=>{T=!0,c&&(B=c.timeStamp,g=c.touches[0].pageX),j(),W()},j=()=>{(u==o||u==o*-r)&&(f.value=0,k.style.transform=w.style.transform=""),u==o&&(u=a.value=(r-1)*-o,i=r-1),u==o*-r&&(u=a.value=0,i=0)},x=c=>{f.value=0,p=c.touches[0].pageX,a.value=u+(p-g)},D=c=>{const E=p-g,M=Math.abs(a.value%o);T=!1,f.value=e.duration,b=c&&c.timeStamp,M<o/4&&b-B>100?a.value-=M*(a.value>0?1:-1):p&&(i+=E>0?-1:1,a.value=-i*o),h.value=i==-1?r-1:i,u=a.value,p=0,b=Date.now(),n("change",h.value%4+1)};return J(()=>{t.value=r=m.value.children.length,w=m.value.children[0],k=m.value.children[r-1],o=document.body.clientWidth,e.loop&&(I=setInterval(R,e.autoplay))}),K(()=>{clearInterval(I)}),{bem:Z,active:h,touchend:D,trackRef:m,dotCount:t,touchmove:x,touchstart:V,trackStyle:$}}const ne={name:Y,props:te,emits:ee,setup:oe};function ae(e,n,m,a,f,h){return _(),v("div",{class:S(e.bem())},[G("div",{class:S(e.bem("track")),ref:"trackRef",style:U(e.trackStyle),onTouchstart:n[0]||(n[0]=C((...t)=>e.touchstart&&e.touchstart(...t),["prevent"])),onTouchmove:n[1]||(n[1]=C((...t)=>e.touchmove&&e.touchmove(...t),["prevent"])),onTouchend:n[2]||(n[2]=C((...t)=>e.touchend&&e.touchend(...t),["prevent"]))},[L(e.$slots,"default")],38),e.showIndicators?(_(),v("div",{key:0,class:S(e.bem("dot"))},[(_(!0),v(P,null,q(e.dotCount,t=>(_(),v("div",{class:S(e.bem("dot-item",{active:e.active%4+1==t})),key:t},null,2))),128))],2)):A("v-if",!0)],2)}var se=N(ne,[["render",ae]]);const le={},re={class:"swipe-item"};function ue(e,n){return _(),v("div",re,[L(e.$slots,"default")])}var ie=N(le,[["render",ue]]);const ce={components:{swipe:se,swipeItem:ie},setup(){return{change:n=>{Q(`\u5F53\u524D\u7D22\u5F15\u662F ${n} `)}}}},de=d(" 1 "),me=d("2"),fe=d("3"),pe=d("4"),_e=d(" 1 "),ve=d("2"),he=d("3"),ye=d("4");function $e(e,n,m,a,f,h){const t=X("swipe-item"),$=X("swipe"),o=X("demo-block");return _(),v(P,null,[s(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[s($,null,{default:l(()=>[s(t,null,{default:l(()=>[de]),_:1}),s(t,null,{default:l(()=>[me]),_:1}),s(t,null,{default:l(()=>[fe]),_:1}),s(t,null,{default:l(()=>[pe]),_:1})]),_:1})]),_:1}),s(o,{title:"\u76D1\u542C\u5207\u6362\u4E8B\u4EF6"},{default:l(()=>[s($,{onChange:a.change,loop:!1},{default:l(()=>[s(t,null,{default:l(()=>[_e]),_:1}),s(t,null,{default:l(()=>[ve]),_:1}),s(t,null,{default:l(()=>[he]),_:1}),s(t,null,{default:l(()=>[ye]),_:1})]),_:1},8,["onChange"])]),_:1})],64)}var Ie=N(ce,[["render",$e]]);export{Ie as default};
