import{a as s,c as t}from"./index.54b0ee30.js";import{T as o}from"./index.b6b87b78.js";import{r as k,o as _,a as g,e,w as l,F as C}from"./vue-libs.83d6b4b5.js";import"./index.f9e694e0.js";/* empty css                                                          */import"./iframe-router.da9cdf5c.js";/* empty css                                                           */import"./index.a30a0eb1.js";const F={setup(b){function a(){o("\u63D0\u793A\u5185\u5BB9")}function u(){o.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0})}function r(){o.success("\u6210\u529F\u63D0\u793A")}function f(){o.fail("\u5931\u8D25\u63D0\u793A")}function m(){o({message:"\u81EA\u5B9A\u4E49\u56FE\u6807",icon:"info-circle"})}function d(){o({message:"\u81EA\u5B9A\u4E49\u56FE\u6807",icon:"github-fill"})}function p(){let n=3;const i=o.loading({message:"\u5012\u8BA1\u65F6 3 \u79D2",duration:0,forbidClick:!0}),c=setInterval(()=>{--n?i.message.value=`\u5012\u8BA1\u65F6 ${n} \u79D2`:(i.message.value="success",i.icon.value="check-circle",clearInterval(c),setTimeout(i.close,1e3))},1e3)}return(n,i)=>{const c=k("demo-block");return _(),g(C,null,[e(c,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[e(s,null,{default:l(()=>[e(t,{title:"\u6587\u5B57\u63D0\u793A",onClick:a}),e(t,{title:"\u52A0\u8F7D\u63D0\u793A",onClick:u}),e(t,{title:"\u6210\u529F\u63D0\u793A",onClick:r}),e(t,{title:"\u5931\u8D25\u63D0\u793A",onClick:f})]),_:1})]),_:1}),e(c,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:l(()=>[e(s,null,{default:l(()=>[e(t,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",onClick:m}),e(t,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",onClick:d})]),_:1})]),_:1}),e(c,{title:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A"},{default:l(()=>[e(s,null,{default:l(()=>[e(t,{title:"\u52A8\u6001\u66F4\u65B0",onClick:p})]),_:1})]),_:1})],64)}}};export{F as default};
