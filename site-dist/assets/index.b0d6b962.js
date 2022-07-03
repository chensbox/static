import{r as A,o as v,a as b,d as B,F as y,b as w,n as S,c as D,f as q,h as f,t as k,i as I,L as F,P as H,B as _,D as j,C as z,x as P,e as t,w as l}from"./vue-libs.83d6b4b5.js";import{i as W}from"./index.4a338637.js";import{_ as T}from"./iframe-router.ff21a982.js";/* empty css                                                          */function G(a,o){const u=a.value.clientWidth/2,c=u>o;let s=0;c&&a.value.scrollLeft?s=Math.abs(u-o)*-1:c||(s=Math.abs(u-o));const m=setInterval(()=>{Math.round(s)?(a.value.scrollLeft+=s/10,s-=s/10):clearInterval(m)},10)}function J(a,o,u,c,s){const[m]=o[a].childNodes,{left:h,width:r}=m.getBoundingClientRect(),d=a*-100,i=h+r/2;return u.value.style.width=r+"px",u.value.style.left=`${h+s.value.scrollLeft}px`,c.value.style.transform=`translateX(${d}%)`,i}function K(a,o,u){let c,s,m;return{touchstart:i=>c=i.touches[0].pageX,touchmove:i=>s=i.touches[0].pageX,touchend:()=>{if(m=s-c,Math.abs(m)<70)return;const i=m>0?a.modelValue-1:a.modelValue+1;i>=0&&i<o.length&&u(i)}}}const O="tabs",Q={lineAnimation:{type:Boolean,default:!1},tabAnimation:{type:Boolean,default:!1},swipeable:{type:Boolean,default:!1},color:{type:String,default:"#0052d9"},cover:Boolean,swipeThreshold:{type:[Number,String],default:5}},Y={icon:W},Z=["update:modelValue"];function x(a,{attrs:o,slots:u,emit:c}){let s;const{color:m,swipeThreshold:h}=H(a),r=_(),d=[],i=_(),C=_(),n=u.default();u=n[0].children instanceof Array?n[0].children:n;const V=g=>d.push(g),e=g=>{if(g===s||(s=g,d[g].classList.value.includes("not-allow")))return;const L=J(g,d,r,i,C);u.length>h.value&&G(C,L),c("update:modelValue",g)},{touchstart:U,touchmove:N,touchend:E}=K(o,d,e);return j(()=>{const L=d[o.modelValue].classList.value.includes("not-allow");e(L?o.modelValue+1:o.modelValue),a.swipeable&&(i.value.addEventListener("touchstart",U),i.value.addEventListener("touchmove",N),i.value.addEventListener("touchend",E))}),z(()=>d.length=0),P(()=>o.modelValue,()=>e(o.modelValue)),{slots:u,attrs:o,tabsSwitch:e,setTabsItemRef:V,touchstart:U,touchmove:N,touchend:E,tabsHeadRef:C,lineRef:r,trackRef:i}}const R={name:O,props:Q,emits:Z,components:Y,setup:x},M=()=>{F(a=>({"3d798b36":a.color}))},X=R.setup;R.setup=X?(a,o)=>(M(),X(a,o)):M;const ee=R,te={class:"tabs-head",ref:"tabsHeadRef"},le=["onClick"];function ae(a,o,u,c,s,m){const h=A("icon");return v(),b("div",{class:S(["tabs",a.cover?"cover":""])},[B("div",te,[(v(!0),b(y,null,w(a.slots,(r,d)=>(v(),b("div",{class:S(["tabs-head-item",{"not-allow":r.props.disable==""||r.props.disable}]),key:d,ref_for:!0,ref:a.setTabsItemRef,onClick:i=>a.tabsSwitch(d)},[B("span",{class:S({blod:a.attrs.modelValue===d})},[r.props.icon?(v(),D(h,{key:0,name:r.props.icon},null,8,["name"])):q("v-if",!0),f(" "+k(r.props.title),1)],2)],10,le))),128)),B("div",{class:S(["tabs-head-line",a.lineAnimation?"line_animation":""]),ref:"lineRef"},null,2)],512),B("div",{class:S(["tabs-track",a.tabAnimation?"tabs_animation":""]),ref:"trackRef"},[I(a.$slots,"default")],2)],2)}var $=T(ee,[["render",ae]]);const oe="tab",ne={title:String,disable:Boolean},se={name:oe,props:ne},ie={class:"tabs-body"},ue={class:"empty"};function de(a,o,u,c,s,m){return v(),b("div",ie,[I(a.$slots,"default",{},()=>[B("div",ue,k(a.title)+"\u5185\u5BB9\u533A",1)])])}var p=T(se,[["render",de]]);const re=f("\u6807\u7B7E1\u5185\u5BB9\u533A"),ce=f("\u6807\u7B7E2\u5185\u5BB9\u533A"),fe=f("\u6807\u7B7E3\u5185\u5BB9\u533A"),me=f("\u6807\u7B7E1\u5185\u5BB9\u533A"),pe=f("\u6807\u7B7E2\u5185\u5BB9\u533A"),ve=f("\u6807\u7B7E3\u5185\u5BB9\u533A"),$e={setup(a){const o=_(0),u=_(0),c=_(0),s=_(0),m=_(0),h=_(0),r=_(0),d=_(0),i=_(0);return(C,n)=>{const V=A("demo-block");return v(),b(y,null,[t(V,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[t($,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=e=>o.value=e)},{default:l(()=>[(v(),b(y,null,w(4,e=>t(p,{title:"\u6807\u7B7E"+e,key:e},{default:l(()=>[f(k(`\u6807\u7B7E${e}\u5185\u5BB9\u533A`),1)]),_:2},1032,["title"])),64))]),_:1},8,["modelValue"])]),_:1}),t(V,{title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:l(()=>[t($,{modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=e=>u.value=e),color:"red"},{default:l(()=>[(v(),b(y,null,w(4,e=>t(p,{title:"\u6807\u7B7E"+e,key:e},{default:l(()=>[f(k(`\u6807\u7B7E${e}\u5185\u5BB9\u533A`),1)]),_:2},1032,["title"])),64))]),_:1},8,["modelValue"])]),_:1}),t(V,{title:"\u5207\u6362\u52A8\u753B"},{default:l(()=>[t($,{modelValue:c.value,"onUpdate:modelValue":n[2]||(n[2]=e=>c.value=e),"line-animation":""},{default:l(()=>[(v(),b(y,null,w(4,e=>t(p,{title:"\u6807\u7B7E"+e,key:e},{default:l(()=>[f(k(`\u6807\u7B7E${e}\u5185\u5BB9\u533A`),1)]),_:2},1032,["title"])),64))]),_:1},8,["modelValue"])]),_:1}),t(V,{title:"\u89C6\u56FE\u8054\u52A8"},{default:l(()=>[t($,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=e=>i.value=e),"line-animation":"","tab-animation":""},{default:l(()=>[(v(),b(y,null,w(4,e=>t(p,{title:"\u6807\u7B7E"+e,key:e},{default:l(()=>[f(k(`\u6807\u7B7E${e}\u5185\u5BB9\u533A`),1)]),_:2},1032,["title"])),64))]),_:1},8,["modelValue"])]),_:1}),t(V,{title:"\u6837\u5F0F\u98CE\u683C"},{default:l(()=>[t($,{modelValue:d.value,"onUpdate:modelValue":n[4]||(n[4]=e=>d.value=e),"line-animation":"","tab-animation":"",cover:""},{default:l(()=>[(v(),b(y,null,w(4,e=>t(p,{title:"\u6807\u7B7E"+e,key:e},{default:l(()=>[f(k(`\u6807\u7B7E${e}\u5185\u5BB9\u533A`),1)]),_:2},1032,["title"])),64))]),_:1},8,["modelValue"])]),_:1}),t(V,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:l(()=>[t($,{modelValue:h.value,"onUpdate:modelValue":n[5]||(n[5]=e=>h.value=e),"line-animation":"","tab-animation":""},{default:l(()=>[t(p,{title:"\u6807\u7B7E1",icon:"setting"},{default:l(()=>[re]),_:1}),t(p,{title:"\u6807\u7B7E2",icon:"info-circle"},{default:l(()=>[ce]),_:1}),t(p,{title:"\u6807\u7B7E3",icon:"question-circle"},{default:l(()=>[fe]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(V,{title:"\u7981\u7528\u6807\u7B7E"},{default:l(()=>[t($,{modelValue:r.value,"onUpdate:modelValue":n[6]||(n[6]=e=>r.value=e),"line-animation":"","tab-animation":""},{default:l(()=>[t(p,{title:"\u6807\u7B7E1",icon:"setting"},{default:l(()=>[me]),_:1}),t(p,{title:"\u6807\u7B7E2",icon:"info-circle",disable:""},{default:l(()=>[pe]),_:1}),t(p,{title:"\u6807\u7B7E3",icon:"question-circle"},{default:l(()=>[ve]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(V,{title:"\u6807\u7B7E\u680F\u81EA\u6EDA\u52A8\u5C45\u4E2D"},{default:l(()=>[t($,{modelValue:s.value,"onUpdate:modelValue":n[7]||(n[7]=e=>s.value=e),"line-animation":"","tab-animation":""},{default:l(()=>[(v(),b(y,null,w(8,e=>t(p,{title:"\u6807\u7B7E"+e,key:e},{default:l(()=>[f(k(`\u6807\u7B7E${e}\u5185\u5BB9\u533A`),1)]),_:2},1032,["title"])),64))]),_:1},8,["modelValue"])]),_:1}),t(V,{title:"\u624B\u52BF\u6ED1\u52A8\u5207\u6362"},{default:l(()=>[t($,{modelValue:m.value,"onUpdate:modelValue":n[8]||(n[8]=e=>m.value=e),"line-animation":"","tab-animation":"",swipeable:""},{default:l(()=>[(v(),b(y,null,w(8,e=>t(p,{title:"\u6807\u7B7E"+e,key:e},{default:l(()=>[f(k(`\u6807\u7B7E${e}\u5185\u5BB9\u533A`),1)]),_:2},1032,["title"])),64))]),_:1},8,["modelValue"])]),_:1})],64)}}};export{$e as default};
