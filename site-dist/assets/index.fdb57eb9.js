import{c as e}from"./index.7995231f.js";import{c as s}from"./index.cc5c28a8.js";import{T as o}from"./index.f4d1e611.js";import{r as _,o as k,a as g,e as t,w as l,F as C}from"./vue-libs.170ad214.js";import"./index.65c2544e.js";/* empty css                                                           */import"./iframe-router.72810acd.js";import"./createBem.9e81425a.js";/* empty css                                                          */import"./props.f4e9878f.js";import"./index.29976e75.js";const M={setup(b){function a(){console.log(o("\u63D0\u793A\u5185\u5BB9"))}function r(){o.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0})}function u(){o.success("\u6210\u529F\u63D0\u793A")}function m(){o.fail("\u5931\u8D25\u63D0\u793A")}function f(){o({message:"\u81EA\u5B9A\u4E49\u56FE\u6807",icon:"info-circle"})}function p(){o({message:"\u81EA\u5B9A\u4E49\u56FE\u6807",icon:"github-fill"})}function d(){let c=3;const n=o({message:"\u5012\u8BA1\u65F6 3 \u79D2",duration:0,forbidClick:!0}),i=setInterval(()=>{--c?n.message=`\u5012\u8BA1\u65F6 ${c} \u79D2`:(n.message="\u7ED3\u675F",clearInterval(i),setTimeout(n.close,1e3))},1e3)}return(c,n)=>{const i=_("demo-block");return k(),g(C,null,[t(i,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[t(s,null,{default:l(()=>[t(e,{title:"\u6587\u5B57\u63D0\u793A",onClick:a}),t(e,{title:"\u52A0\u8F7D\u63D0\u793A",onClick:r}),t(e,{title:"\u6210\u529F\u63D0\u793A",onClick:u}),t(e,{title:"\u5931\u8D25\u63D0\u793A",onClick:m})]),_:1})]),_:1}),t(i,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:l(()=>[t(s,null,{default:l(()=>[t(e,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",onClick:f}),t(e,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",onClick:p})]),_:1})]),_:1}),t(i,{title:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A"},{default:l(()=>[t(s,null,{default:l(()=>[t(e,{title:"\u52A8\u6001\u66F4\u65B0",onClick:d})]),_:1})]),_:1})],64)}}};export{M as default};
