import{o as C,a as _,d as f,F as T,b as F,t as L,g as R,G as M,B as g,N as A,x as G,D as V,r as w,c as U,f as W,e as x,w as S}from"./vue-libs.bd45fd12.js";import{_ as B}from"./iframe-router.23d146a7.js";import"./index.bfbdac71.js";import"./index.b4e40b9d.js";import"./index.f8f182f1.js";const z="colum",O={index:Number,initY:Number,itemHeight:Number,list:Array},P=["columChange"],q=function(e,{emit:i}){const m=g(),h=g(),v=A(()=>({transition:`all ${m.value}s ease-out`,transform:`translateY(${h.value}px)`}));let a,t,l,d,u,s,k;const y=n=>{k=n.timeStamp,a=n.touches[0].pageY},H=n=>{m.value=0,t=n.touches[0].pageY,s=Math.round(l+t-a),s<=d&&s>=u&&(h.value=s)},b=(n,o)=>{n<e.itemHeight>>1?s=e.initY-(o-n):n&&(s=e.initY-(o+(e.itemHeight-n)))},p=n=>{const o=n.target.dataset.i;!o||(s=e.initY-(o-1)*e.itemHeight)},c=n=>{m.value=.2;const o=t-a;(!t||Math.abs(o)<10&&n.timeStamp-k<100)&&p(n),t&&Math.abs(o)>70&&n.timeStamp-k<300&&(m.value=.5,s=Math.round(l+o*3));const $=s>d-e.itemHeight,j=s<u+e.itemHeight;$?s=d-e.itemHeight:j&&(s=u+e.itemHeight);const E=Math.abs(e.initY-s),N=E%e.itemHeight;N!==0&&b(N,E),t=0,l=s,h.value=s;const D=Math.abs(e.initY-l)/e.itemHeight;i("columChange",e.list,D,e.index)};return G(e,()=>{d=e.initY+e.itemHeight,u=e.initY-e.itemHeight*e.list.length,h.value=e.initY}),V(()=>{l=e.initY,h.value=e.initY,d=e.initY+e.itemHeight,u=e.initY-e.itemHeight*e.list.length,t=0}),{scrollerStyle:v,touchstart:y,touchmove:H,touchend:c}},J={name:z,props:O,emits:P,setup:q},K=["data-i"];function Q(e,i,m,h,v,a){return C(),_("div",{class:"picker-columns-col",onTouchstart:i[0]||(i[0]=M((...t)=>e.touchstart&&e.touchstart(...t),["prevent"])),onTouchmove:i[1]||(i[1]=M((...t)=>e.touchmove&&e.touchmove(...t),["prevent"])),onTouchend:i[2]||(i[2]=M((...t)=>e.touchend&&e.touchend(...t),["prevent"]))},[f("ul",{class:"picker-columns-col-wrap",style:R(e.scrollerStyle)},[(C(!0),_(T,null,F(e.list,(t,l)=>(C(),_("li",{class:"picker-columns-col-wrap-item",key:l+1,"data-i":l+1},L(t.text||t),9,K))),128))],4)],32)}var X=B(J,[["render",Q]]);const Z="t-picker",I={colums:Array,title:String},ee=["confirm","cancel","change"],te={colum:X},ne=function(e,{emit:i}){const m=g(),h=g(""),v=g(""),a=g(""),t=g([]),[l]=e.colums;let d,u;const s=c=>{i(c,u.map(n=>n.value),u.map(n=>n.index))},k=()=>{typeof l!="object"?t.value.push(e.colums):l.values?t.value.push(...e.colums.map(c=>c.values)):l.children&&(d=!0,t.value.push(...H(e.colums))),u=b(t.value)},y=(c,n,o)=>{let r=[];t.value=t.value.slice(0,o+1),o==0?r=e.colums[n]:r=c.value[n];const Y=H(r.children);t.value.push(...Y)},H=c=>{const n=[],o=r=>{const Y=r.map($=>$.text);Y.value=r,n.push(Y),r[0].children&&o(r[0].children)};return o(c),n},b=c=>c.map(n=>({value:n[0],index:0})),p=(c,n,o)=>{d&&o!==e.colums.length-1&&(y(c,n,o),o==0?u=b(t.value):u[o+1]={value:c.value[n].children[0].text,index:0}),u[o]={value:c[n],index:n},i("change",u.map(r=>r.value),u.map(r=>r.index))};return V(()=>{const{value:c}=m;h.value=v.value=c.offsetTop-c.clientHeight/2,a.value=c.clientHeight}),k(),{hairlineRef:m,curY:h,initY:v,itemHeight:a,columsList:t,columChange:p,onClick:s}},ie={name:Z,props:I,emits:ee,components:te,setup:ne},oe={class:"picker"},le={class:"picker-toolbar"},ce={class:"picker-toolbar-title"},ae={class:"picker-columns"},se=f("div",{class:"picker-columns-mask"},null,-1),ue={class:"picker-columns-hairline",ref:"hairlineRef"};function re(e,i,m,h,v,a){const t=w("colum");return C(),_("div",oe,[f("div",le,[f("button",{class:"picker-toolbar-cancel",onClick:i[0]||(i[0]=l=>e.onClick("confirm"))}," \u53D6\u6D88 "),f("span",ce,L(e.title),1),f("button",{class:"picker-toolbar-confirm",onClick:i[1]||(i[1]=l=>e.onClick("cancel"))}," \u786E\u5B9A ")]),f("div",ae,[e.initY?(C(!0),_(T,{key:0},F(e.columsList,(l,d)=>(C(),U(t,{initY:e.initY,itemHeight:e.itemHeight,list:l,index:d,key:d,onColumChange:e.columChange},null,8,["initY","itemHeight","list","index","onColumChange"]))),128)):W("v-if",!0),se,f("div",ue,null,512)])])}var me=B(ie,[["render",re]]);const he={components:{picker:me},data(){return{colums:["javaScript","HTML","CSS","TypeScript","Vue","React","WebPack","Uniapp","React navite","canvas","WebGl"],columns2:[{values:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94"],defaultIndex:2},{values:["\u4E0A\u5348","\u4E0B\u5348","\u665A\u4E0A"],defaultIndex:1}],colums3:[{text:"\u5E7F\u4E1C",children:[{text:"\u5E7F\u5DDE",children:[{text:"\u5929\u6CB3\u533A"},{text:"\u8D8A\u79C0\u533A"},{text:"\u6D77\u73E0\u533A"},{text:"\u767D\u4E91\u533A"}]},{text:"\u6DF1\u5733",children:[{text:"\u5357\u5C71\u533A"},{text:"\u5B9D\u5B89\u533A"},{text:"\u798F\u7530\u533A"},{text:"\u9F99\u534E\u533A"}]},{text:"\u73E0\u6D77",children:[{text:"\u9999\u6D32\u533A"},{text:"\u91D1\u6E7E\u533A"},{text:"\u6597\u95E8\u533A"},{text:"\u6A2A\u7434\u533A"}]},{text:"\u8087\u5E86",children:[{text:"\u7AEF\u5DDE\u533A"},{text:"\u9AD8\u8981\u533A"},{text:"\u56DB\u4F1A\u5E02"},{text:"\u6000\u96C6\u53BF"}]}]},{text:"\u6D59\u6C5F",children:[{text:"\u676D\u5DDE",children:[{text:"\u897F\u6E56\u533A"},{text:"\u4F59\u676D\u533A"}]},{text:"\u6E29\u5DDE",children:[{text:"\u9E7F\u57CE\u533A"},{text:"\u74EF\u6D77\u533A"}]}]},{text:"\u798F\u5EFA",children:[{text:"\u798F\u5DDE",children:[{text:"\u9F13\u697C\u533A"},{text:"\u53F0\u6C5F\u533A"}]},{text:"\u53A6\u95E8",children:[{text:"\u601D\u660E\u533A"},{text:"\u6D77\u6CA7\u533A"}]}]}]}},methods:{onclick(){},onChange(e,i){const m="\u5F53\u524D\u503C\uFF1A"+e.join()+"      \u7D22\u5F15:"+i.join();console.warn(m)},onConfirm(e,i){this.onChange(e,i)},onCancel(e,i){this.onChange(e,i)}}};function de(e,i,m,h,v,a){const t=w("picker"),l=w("demo-block");return C(),_(T,null,[x(l,{title:"\u5355\u5217"},{default:S(()=>[x(t,{colums:v.colums,title:"\u6807\u9898",onChange:a.onChange,onConfirm:a.onConfirm,onCancel:a.onCancel},null,8,["colums","onChange","onConfirm","onCancel"])]),_:1}),x(l,{title:"\u591A\u5217"},{default:S(()=>[x(t,{colums:v.columns2,title:"\u6807\u9898",onChange:a.onChange,onConfirm:a.onConfirm,onCancel:a.onCancel},null,8,["colums","onChange","onConfirm","onCancel"])]),_:1}),x(l,{title:"\u7EA7\u8054\u9009\u62E9\u5668"},{default:S(()=>[x(t,{colums:v.colums3,title:"\u6807\u9898",onChange:a.onChange,onConfirm:a.onConfirm,onCancel:a.onCancel},null,8,["colums","onChange","onConfirm","onCancel"])]),_:1})],64)}var _e=B(he,[["render",de],["__scopeId","data-v-46967a8c"]]);export{_e as default};
