import{I as k}from"./index.e6169b20.js";import{r as N,o as D,a as S,d as i,j as Y,v as b,i as c,t as f,f as m,e as B,h as w,g as C,n as z,G as H,B as p,O as v}from"./vue-libs.361a333e.js";import{s as I}from"./sleep.2dba75b7.js";import{_ as M}from"./iframe-router.446ee3db.js";const P="pull-refresh",j=["refresh","update:modelValue"],E={modelValue:Boolean,pullingText:{type:String,default:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0..."},loosingText:{type:String,default:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},loadingText:{type:String,default:"\u52A0\u8F7D\u4E2D..."},successDuration:{type:[String,Number],default:.5},animationDuration:{type:[String,Number],default:.2},headHeight:{type:[String,Number],default:50},pullDistance:[String,Number],successText:{type:String}},G={Icon:k};function O(e,{emit:a}){var T;const s=p(0),l=p(),u=p(!1),t=(T=e.pullDistance)!=null?T:e.headHeight,d=v(()=>({transform:`translateY(${s.value}px)`,transition:`all ${l.value}s`})),n=v(()=>s.value<t?e.pullingText:e.loosingText),V=v(()=>s.value>t?t:s.value);let h,g;const $=r=>h=r.touches[0].pageY,y=async()=>{a("update:modelValue",!1),e.successText&&s.value>=t&&(u.value=!0,await I(e.successDuration*1e3)),s.value=0,u.value=!1};return{touchstart:$,touchmove:r=>{r.prent,g=r.touches[0].pageY;let o=g-h;o<0&&s.value<=0||(o>t&&(o<t*2?o=t+(o-t)/2:o=t*1.5+(o-t*2)/4),l.value=0,s.value=Math.round(o))},touchend:()=>{if(l.value=e.animationDuration,s.value<t)return y();s.value=t,a("update:modelValue",!0),a("refresh",y)},isDone:u,trackStyle:d,offsetY:s,statusText:n,slotDistance:V}}const R={name:P,components:G,props:E,emits:j,setup:O},q={class:"pull-refresh-track-header"},A={key:0};function F(e,a,s,l,u,t){const d=N("icon");return D(),S("div",{class:z(["pull-refresh",e.modelValue?"disable-touch":""]),onTouchstart:a[0]||(a[0]=(...n)=>e.touchstart&&e.touchstart(...n)),onTouchmove:a[1]||(a[1]=H((...n)=>e.touchmove&&e.touchmove(...n),["prevent"])),onTouchend:a[2]||(a[2]=(...n)=>e.touchend&&e.touchend(...n))},[i("div",{class:"pull-refresh-track",style:C(e.trackStyle)},[Y(i("div",q,[!e.modelValue&&!e.isDone?c(e.$slots,"pulling",{key:0,distance:e.slotDistance},()=>[i("span",null,f(e.statusText),1)]):m("v-if",!0),c(e.$slots,"success",{},()=>[e.successText&&e.isDone?(D(),S("span",A,f(e.successText),1)):m("v-if",!0)]),e.modelValue?c(e.$slots,"loading",{key:1},()=>[i("span",null,[B(d,{name:"loading"}),w(" "+f(e.loadingText),1)])]):m("v-if",!0)],512),[[b,e.slotDistance]]),c(e.$slots,"default")],4)],34)}var X=M(R,[["render",F]]);export{X as P};
