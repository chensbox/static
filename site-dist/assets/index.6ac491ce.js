import{o as n,a as i,F as v,n as d,g as p,f as k,d as s,b as S,i as F,V as _,B as g,r as B,e as a,w as o,h as z}from"./vue-libs.170ad214.js";import{c as $}from"./createBem.9e81425a.js";import{n as w,t as y,b as A,a as f}from"./props.f4e9878f.js";import{_ as N}from"./iframe-router.72810acd.js";import{B as C}from"./index.085f50c3.js";import"./index.65c2544e.js";/* empty css                                                           *//* empty css                                              */const[V,P]=$("skeleton"),q={title:Boolean,avatar:Boolean,round:Boolean,fullscreen:Boolean,row:w,rowWidth:[...w,Array],loading:y,animate:y,titleWidth:A("40%"),avatarSize:f("32px"),avatarShape:f("round"),rowShape:f("round")};function I(e){const l=_(()=>{const{row:c,rowWidth:t}=e;return Array.isArray(t)&&t.length===+c?t:new Array(+c).fill(t!=null?t:"100%")}),m=_(()=>({width:e.avatarSize,height:e.avatarSize}));return{bem:P,rows:l,avatarStyle:m}}const W={name:V,props:q,setup:I};function T(e,l,m,c,t,r){return n(),i("div",{class:d(e.bem({animate:e.animate&&e.loading,fullscreen:e.fullscreen}))},[e.loading?(n(),i(v,{key:0},[e.avatar?(n(),i("div",{key:0,class:d(e.bem("avatar",[e.avatarShape])),style:p(e.avatarStyle)},null,6)):k("v-if",!0),s("div",{class:d(e.bem("content"))},[s("div",{class:d(e.bem("title",[e.rowShape])),style:p({width:e.titleWidth})},null,6),(n(!0),i(v,null,S(e.rows,(h,b)=>(n(),i("div",{class:d(e.bem("row",[e.rowShape])),style:p({width:h}),key:b},null,6))),128))],2)],64)):F(e.$slots,"default",{key:1})],2)}var u=N(W,[["render",T]]);const j=z("\u5207\u6362\u72B6\u6001"),E=s("div",null,[s("img",{class:"avatar",src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-4o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F77c6a7efce1b9d1639c61277fedeb48f8c5464a7.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664013467&t=5dc1a4aa5bc82a183c68969711f38f9b"})],-1),G=s("div",null,[s("p",{style:{margin:"20px 0 8px 0","font-weight":"bold"}},"\u8FD9\u662F\u6807\u9898\u8FD9\u662F\u6807\u9898"),s("p",{style:{"line-height":"30px"}}," \u5728\u4EE3\u7801\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u4EBA\u4EEC\u8BF4\u810F\u8BDD\u7684\u9891\u7387\u662F\u8861\u91CF\u4EE3\u7801\u8D28\u91CF\u7684\u552F\u4E00\u6807\u51C6\uFF0C\u5728\u4EE3\u7801\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u4EBA\u4EEC\u8BF4\u810F\u8BDD\u7684 ")],-1),R={setup(e){const l=g(!0),m=g(!1);return(c,t)=>{const r=B("demo-block");return n(),i(v,null,[a(r,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[a(u,{row:"3"})]),_:1}),a(r,{title:"\u663E\u793A\u5934\u50CF"},{default:o(()=>[a(u,{avatar:"",row:"3"})]),_:1}),a(r,{title:"\u5360\u4F4D\u56FE\u98CE\u683C"},{default:o(()=>[a(u,{avatar:"",row:"3","avatar-shape":"square","row-shape":"square"})]),_:1}),a(r,{title:"\u81EA\u5B9A\u4E49\u6BB5\u843D\u5BBD\u5EA6"},{default:o(()=>[a(u,{avatar:"",row:"4","row-width":["100%","70%","90%","50%"]})]),_:1}),a(r,{title:"\u52A0\u8F7D\u72B6\u6001"},{default:o(()=>[a(C,{onClick:t[0]||(t[0]=h=>l.value=!l.value),style:{"margin-left":"16px"},size:"small"},{default:o(()=>[j]),_:1}),a(u,{avatar:"",row:"3",loading:l.value,fullscreen:m.value},{default:o(()=>[E,G]),_:1},8,["loading","fullscreen"])]),_:1})],64)}}};export{R as default};
