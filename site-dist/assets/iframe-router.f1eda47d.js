import{o as p,a as c,d as e,u as o}from"./vue-libs.7edcdcd6.js";const b=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const h of n)if(h.type==="childList")for(const r of h.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const h={};return n.integrity&&(h.integrity=n.integrity),n.referrerpolicy&&(h.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?h.credentials="include":n.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(n){if(n.ep)return;n.ep=!0;const h=t(n);fetch(n.href,h)}};b();var ja=(a,s)=>{const t=a.__vccOpts||a;for(const[l,n]of s)t[l]=n;return t};const _={class:"van-doc-markdown-body"},q=e("h1",null,"\u4ECB\u7ECD",-1),f=e("div",{class:"van-doc-card"},[e("h3",{id:"guan-yu",tabindex:"-1"},"\u5173\u4E8E"),e("p",null,"\u8FD9\u662F\u4E00\u6BB5\u7EC4\u4EF6\u5E93\u7684\u4ECB\u7ECD")],-1),y=e("div",{class:"van-doc-card"},[e("h3",{id:"te-xing",tabindex:"-1"},"\u7279\u6027"),e("ul",null,[e("li",null,"\u7279\u6027\u4E00"),e("li",null,"\u7279\u6027\u4E8C"),e("li",null,"\u7279\u6027\u4E09")])],-1),w=[q,f,y],k={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",_,w))}},x={class:"van-doc-markdown-body"},$=o(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><div class="van-doc-card"><h3 id="an-zhuang" tabindex="-1">\u5B89\u88C5</h3><pre><code class="language-bash"><span class="hljs-comment"># \u901A\u8FC7 npm</span>
npm i TDesign

<span class="hljs-comment"># \u901A\u8FC7 yarn</span>
yarn add TDesign

<span class="hljs-comment"># \u901A\u8FC7 pnpm</span>
pnpm add TDesign
</code></pre></div>`,2),T=[$],P={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",x,T))}},A={class:"van-doc-markdown-body"},C=e("h1",null,"ActionSheet \u52A8\u4F5C\u9762\u677F",-1),I=[C],S={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",A,I))}},z={class:"van-doc-markdown-body"},D=o(`<h1>Button \u6309\u94AE</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>Button \u4E00\u822C\u7528\u6765\u89E6\u53D1\u4E00\u4E9B\u64CD\u4F5C</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TButton</span>)
</code></pre></div><h2 id="dai-ma-yan-shi-s" tabindex="-1">\u4EE3\u7801\u6F14\u793A s</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u4E3B\u8981\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5371\u9669\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>\u4FE1\u606F\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u8B66\u544A\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span> \u9ED8\u8BA4\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#353535&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>\u5355\u8272\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>&gt;</span>\u5355\u8272\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #ff6034, #ee0a24)&quot;</span>&gt;</span>
  \u6E10\u53D8\u8272\u6309\u94AE
<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="cha-ru-tu-biao" tabindex="-1">\u63D2\u5165\u56FE\u6807</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;add&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;camera&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;ashbin&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jia-zai-zhuang-tai" tabindex="-1">\u52A0\u8F7D\u72B6\u6001</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;loading&quot;</span> <span class="hljs-attr">loading</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;loading-spinner&quot;</span> <span class="hljs-attr">loading</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span>
  <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">loading-text</span>=<span class="hljs-string">&quot;\u52A0\u8F7D\u4E2D...&quot;</span>
  <span class="hljs-attr">loading</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onclick&quot;</span>
  &gt;</span>\u70B9\u6211\u8BD5\u8BD5&lt;/t-button
&gt;
</code></pre></div><div class="van-doc-card"><h3 id="po-su-an-niu" tabindex="-1">\u6734\u7D20\u6309\u94AE</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">plain</span>&gt;</span> \u6734\u7D20\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">plain</span>&gt;</span> \u6734\u7D20\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">plain</span>&gt;</span> \u6734\u7D20\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="an-niu-xing-zhuang" tabindex="-1">\u6309\u94AE\u5F62\u72B6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">square</span>&gt;</span>\u65B9\u5F62\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">round</span>&gt;</span>\u5706\u5F62\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72B6\u6001</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u7981\u7528\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u7981\u7528\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u7981\u7528\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="bu-tong-chi-cun" tabindex="-1">\u4E0D\u540C\u5C3A\u5BF8</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span> \u5927\u53F7\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span> \u666E\u901A\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span> \u5C0F\u578B\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">t-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span> \u8FF7\u4F60\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">t-button</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u6309\u94AE\u7C7B\u578B</td><td><em>string</em></td><td><code>primary</code></td></tr><tr><td>color <code>1.0.0</code></td><td>\u6309\u94AE\u989C\u8272</td><td><em>string</em></td><td>-</td></tr><tr><td>size</td><td>\u6309\u94AE\u5C3A\u5BF8</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td>icon</td><td>\u6309\u94AE\u56FE\u6807</td><td><em>string</em></td><td>-</td></tr><tr><td>loading</td><td>\u662F\u5426\u5207\u6362 loading \u72B6\u6001</td><td><em>Boolean</em></td><td><code>false</code></td></tr><tr><td>loadingType</td><td>loading \u7C7B\u578B(\u53EF\u9009 loading-spinner)</td><td><em>string</em></td><td><code>loading</code></td></tr><tr><td>loadingText</td><td>\u52A0\u8F7D\u6587\u6848</td><td><em>string</em></td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6309\u94AE</td><td><em>Boolean</em></td><td><code>false</code></td></tr><tr><td>square</td><td>\u65B9\u5F62\u6309\u94AE</td><td><em>Boolean</em></td><td>-</td></tr><tr><td>round</td><td>\u5706\u5F62\u6309\u94AE</td><td><em>Boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u663E\u793A\u6309\u94AE\u6587\u5B57\u5185\u5BB9</td></tr></tbody></table></div>`,16),B=[D],L={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",z,B))}},V={class:"van-doc-markdown-body"},E=o(`<h1>Cascader \u7EA7\u8054\u9009\u62E9\u5668</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>cascader \u7EA7\u8054\u9009\u62E9\u5668\uFF0C\u7528\u4E8E\u591A\u5C42\u7EA7\u6570\u636E\u7684\u9009\u62E9\uFF0C\u5178\u578B\u573A\u666F\u4E3A\u7701\u5E02\u533A\u9009\u62E9\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { cascader, cell, cellGroup, popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(cascader)
<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(cell)
<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(cellGroup)
<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(popup)
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5730\u533A&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u5730\u533A&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>
    {{ value }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-group</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cascader</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>()
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> options = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5E7F\u4E1C\u7701&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5E7F\u5DDE\u5E02&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5929\u6CB3\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u8D8A\u79C0\u533A&#39;</span> }]
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6DF1\u5733\u5E02&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5357\u5C71\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5B9D\u5B89\u533A&#39;</span> }]
          }
        ]
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D59\u6C5F\u7701&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE\u5E02&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u897F\u6E56\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u4F59\u676D\u533A&#39;</span> }]
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6E29\u5DDE\u5E02&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9E7F\u57CE\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u74EF\u6D77\u533A&#39;</span> }]
          }
        ]
      }
    ]

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = event =&gt; {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">show</span> = <span class="hljs-literal">false</span>
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">value</span> = e.<span class="hljs-title function_">map</span>(<span class="hljs-function"><span class="hljs-params">i</span> =&gt;</span> i.<span class="hljs-property">text</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;/&#39;</span>)
    }

    <span class="hljs-keyword">return</span> {
      value,
      options,
      show,
      onFinish
    }
  }
}
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u9876\u90E8\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td>value</td><td>\u9009\u4E2D\u9879\u7684\u503C</td><td><em>string | number</em></td><td>-</td></tr><tr><td>options</td><td>\u53EF\u9009\u9879\u6570\u636E\u6E90</td><td><em>CascaderOption[]</em></td><td><code>[]</code></td></tr><tr><td>placeholder</td><td>\u672A\u9009\u4E2D\u65F6\u7684\u63D0\u793A\u6587\u6848</td><td><em>string</em></td><td><code>\u8BF7\u9009\u62E9</code></td></tr><tr><td>active-color</td><td>\u9009\u4E2D\u72B6\u6001\u7684\u9AD8\u4EAE\u989C\u8272</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>closeable</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-header</td><td>\u662F\u5426\u5C55\u793A\u6807\u9898\u680F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>field-names</td><td>\u81EA\u5B9A\u4E49 <code>options</code> \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5</td><td><em>object</em></td><td><code>{ text: &#39;text&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="option-shu-ju-jie-gou" tabindex="-1">Option \u6570\u636E\u7ED3\u6784</h3><p><code>options</code> \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u4E2A\u53EF\u9009\u9879\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A</p><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>text</td><td>\u9009\u9879\u6587\u5B57\uFF08\u5FC5\u586B\uFF09</td><td><em>string</em></td></tr><tr><td>value</td><td>\u9009\u9879\u5BF9\u5E94\u7684\u503C\uFF08\u5FC5\u586B\uFF09</td><td><em>string | number</em></td></tr><tr><td>children</td><td>\u5B50\u9009\u9879\u5217\u8868</td><td><em>Option[]</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="props-1" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u6309\u94AE\u7C7B\u578B</td><td><em>string</em></td><td><code>primary</code></td></tr><tr><td>color <code>1.0.0</code></td><td>\u6309\u94AE\u989C\u8272</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u9879\u53D8\u5316\u65F6\u89E6\u53D1</td><td><em>{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }</em></td></tr><tr><td>finish</td><td>\u5168\u90E8\u9009\u9879\u9009\u62E9\u5B8C\u6210\u540E\u89E6\u53D1</td><td><em>{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table></div>`,11),O=[E],M={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",V,O))}},R={class:"van-doc-markdown-body"},G=o(`<h1>cell \u5355\u5143\u683C</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5355\u5143\u683C\u4E3A\u5217\u8868\u4E2D\u7684\u5355\u4E2A\u5C55\u793A\u9879,\u9700\u914D\u5408\u5355\u5143\u683C\u7EC4(cellGroup)\u7EC4\u4EF6\u4F7F\u7528</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { cell, cellGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(cellGroup)
<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(cell)
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-gropu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-gropu</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="cha-ru-tu-biao" tabindex="-1">\u63D2\u5165\u56FE\u6807</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-gropu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;location&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;question-circle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;ashbin&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-gropu</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="cha-ru-zhi" tabindex="-1">\u63D2\u5165\u503C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-gropu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5730\u533A&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u5730\u533A&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5730\u533A&quot;</span>&gt;</span>\u5E7F\u4E1C/\u5E7F\u5DDE/\u5929\u6CB3\u533A<span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-gropu</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ji-chu-yong-fa-1" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-gropu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-gropu</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u5355\u5143\u683C\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td>value</td><td>\u5355\u5143\u683C\u53F3\u4FA7\u6587\u6848</td><td><em>string</em></td><td>-</td></tr><tr><td>icon</td><td>\u5DE6\u4FA7\u56FE\u6807\u540D\u79F0</td><td><em>string</em></td><td>-</td></tr><tr><td>placeholder</td><td>\u5360\u4F4D\u6587\u5B57</td><td><em>string</em></td><td>-</td></tr></tbody></table></div>`,10),N=[G],W={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",R,N))}},H={class:"van-doc-markdown-body"},U=e("h1",null,"collapse \u6298\u53E0\u9762\u677F",-1),F=[U],Z={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",H,F))}},K={class:"van-doc-markdown-body"},Q=o(`<h1>Dialog \u5BF9\u8BDD\u6846</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u6A21\u6001\u6846\uFF0C\u5E38\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3001\u6D88\u606F\u786E\u8BA4\uFF0C\u6216\u5728\u5F53\u524D\u9875\u9762\u5185\u5B8C\u6210\u7279\u5B9A\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002</p><p>\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Dialog</span>)
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u63D0\u793A\u5F39\u7A97&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;alert&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u63D0\u793A\u5F39\u7A97(\u65E0\u6807\u9898)&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;notTitle&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u786E\u8BA4\u5F39\u7A97&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;confirm&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: { cellGroup, cell },
  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-title function_">confirm</span>(<span class="hljs-params"></span>) {
      <span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">confirm</span>({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u9898&#39;</span>,
        <span class="hljs-attr">message</span>:
          <span class="hljs-string">&#39;\u5982\u679C\u89E3\u51B3\u65B9\u6CD5\u662F\u4E11\u964B\u7684\uFF0C\u90A3\u5C31\u80AF\u5B9A\u8FD8\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u53EA\u662F\u8FD8\u6CA1\u6709\u53D1\u73B0\u800C\u5DF2\u3002&#39;</span>
      })
        .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u786E\u5B9A&#39;</span>)
        })
        .<span class="hljs-title function_">catch</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u53D6\u6D88&#39;</span>)
        })
    },
    <span class="hljs-title function_">alert</span>(<span class="hljs-params"></span>) {
      <span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">alert</span>({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u9898&#39;</span>,
        <span class="hljs-attr">message</span>:
          <span class="hljs-string">&#39;\u5982\u679C\u89E3\u51B3\u65B9\u6CD5\u662F\u4E11\u964B\u7684\uFF0C\u90A3\u5C31\u80AF\u5B9A\u8FD8\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u53EA\u662F\u8FD8\u6CA1\u6709\u53D1\u73B0\u800C\u5DF2\u3002&#39;</span>
      }).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u786E\u5B9A&#39;</span>)
      })
    },
    <span class="hljs-title function_">notTitle</span>(<span class="hljs-params"></span>) {
      <span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">alert</span>({
        <span class="hljs-attr">message</span>:
          <span class="hljs-string">&#39;\u5982\u679C\u89E3\u51B3\u65B9\u6CD5\u662F\u4E11\u964B\u7684\uFF0C\u90A3\u5C31\u80AF\u5B9A\u8FD8\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u53EA\u662F\u8FD8\u6CA1\u6709\u53D1\u73B0\u800C\u5DF2\u3002&#39;</span>
      }).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u786E\u5B9A&#39;</span>)
      })
    }
  }
}
</code></pre></div><div class="van-doc-card"><h3 id="yi-bu-guan-bi" tabindex="-1">\u5F02\u6B65\u5173\u95ED</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5F02\u6B65\u5173\u95ED&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;asyncClose&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: { cellGroup, cell },
  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-title function_">beforClose</span>(<span class="hljs-params">action, done</span>) {
      <span class="hljs-keyword">if</span> (action == <span class="hljs-string">&#39;confirm&#39;</span>) {
        <span class="hljs-title function_">sleep</span>(<span class="hljs-number">2000</span>).<span class="hljs-title function_">then</span>(done)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-title function_">done</span>()
      }
    },
    <span class="hljs-title function_">asyncClose</span>(<span class="hljs-params"></span>) {
      <span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">confirm</span>({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u9898&#39;</span>,
        <span class="hljs-attr">message</span>:
          <span class="hljs-string">&#39;\u5982\u679C\u89E3\u51B3\u65B9\u6CD5\u662F\u4E11\u964B\u7684\uFF0C\u90A3\u5C31\u80AF\u5B9A\u8FD8\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u53EA\u662F\u8FD8\u6CA1\u6709\u53D1\u73B0\u800C\u5DF2\u3002&#39;</span>,
        <span class="hljs-attr">beforClose</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">beforClose</span>
      })
        .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u786E\u5B9A&#39;</span>)
        })
        .<span class="hljs-title function_">catch</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u53D6\u6D88&#39;</span>)
        })
    }
  }
}
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-diao-yong" tabindex="-1">\u7EC4\u4EF6\u8C03\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">t-dialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u7EC4\u4EF6\u7528\u6CD5\u53EF\u4EE5\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u5D4C\u5165\u4EFB\u610F\u5185\u5BB9<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>(\u6587\u5B57\u3001html\u8282\u70B9\u6216\u8005\u7EC4\u4EF6)<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">t-dialog</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td>message</td><td>\u5F39\u7A97\u5185\u5BB9</td><td><em>string</em></td><td>-</td></tr><tr><td>beforClose</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03</td><td><em>function</em></td><td>-</td></tr><tr><td>type</td><td>\u5F39\u7A97\u7C7B\u578B(alert \u63D0\u793A\u6846\uFF0Cconfirm \u786E\u8BA4\u6846)</td><td><em>string</em></td><td><code>alert</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u8BA4\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD(\u7EC4\u4EF6\u7528\u6CD5\u63D2\u5165\u5C55\u793A\u5185\u5BB9)</td></tr></tbody></table></div>`,11),Y=[Q],J={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",K,Y))}},X={class:"van-doc-markdown-body"},ss=o(`<h1>Icon \u5B57\u4F53\u56FE\u6807</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>Icon \u5B57\u4F53\u56FE\u6807 \u662F\u4E00\u4E2A\u5B57\u4F53\u56FE\u6807\u7EC4\u4EF6</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(icon)
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;loading&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;50px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">icon</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;close&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;50px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">icon</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;attachment&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;50px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">icon</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;camera&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;50px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">icon</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;arrow-right&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;50px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">icon</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;50px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">icon</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u56FE\u6807\u540D\u79F0</td><td><em>string</em></td><td>-</td></tr><tr><td>size <code>1.0.0</code></td><td>\u56FE\u6807\u5C3A\u5BF8</td><td><em>string</em></td><td><code>\u7EE7\u627F\u7236\u5143\u7D20</code></td></tr></tbody></table></div>`,7),as=[ss],ns={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",X,as))}},ts={class:"van-doc-markdown-body"},ls=o(`<h1>InfiniteScroll \u65E0\u9650\u6EDA\u52A8</h1><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list&quot;</span> <span class="hljs-attr">v-infinite-list</span>=<span class="hljs-string">&quot;load&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in count&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>&gt;</span>{{ i }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">20</span>)
<span class="hljs-keyword">function</span> <span class="hljs-title function_">load</span>(<span class="hljs-params"></span>) {
  <span class="hljs-comment">//\u4E0B\u62C9\u89E6\u5E95\u65F6\uFF0Cload\u51FD\u6570\u5C06\u4F1A\u88AB\u8C03\u7528</span>
  count.<span class="hljs-property">value</span>++
}
</code></pre></div>`,3),ps=[ls],cs={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",ts,ps))}},es={class:"van-doc-markdown-body"},os=e("h1",null,"List \u5217\u8868",-1),hs=[os],ds={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",es,hs))}},rs={class:"van-doc-markdown-body"},is=e("h1",null,"Notify \u6D88\u606F\u901A\u77E5",-1),js=[is],gs={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",rs,js))}},us={class:"van-doc-markdown-body"},ms=o(`<h1>Overlay \u906E\u7F69\u5C42</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u521B\u5EFA\u4E00\u4E2A\u906E\u7F69\u5C42\uFF0C\u7528\u4E8E\u5F3A\u8C03\u7279\u5B9A\u7684\u9875\u9762\u5143\u7D20\uFF0C\u5E76\u963B\u6B62\u7528\u6237\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Overlay</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>()
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Overlay</span>)
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">TButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onclick&quot;</span>&gt;</span>\u663E\u793A\u906E\u7F69\u5C42<span class="hljs-tag">&lt;/<span class="hljs-name">TButton</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">overlay</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = false&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="qian-ru-nei-rong" tabindex="-1">\u5D4C\u5165\u5185\u5BB9</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block-item&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TButton</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;slot = true&quot;</span>&gt;</span>\u5D4C\u5165\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">TButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">overlay</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;slot&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;slot = false&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">overlay</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>show</td><td>\u662F\u5426\u5C55\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>z-index</td><td>z-index \u5C42\u7EA7</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>duration</td><td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>lock-scroll</td><td>\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u7528\u4E8E\u5728\u906E\u7F69\u5C42\u4E0A\u65B9\u5D4C\u5165\u5185\u5BB9</td></tr></tbody></table></div>`,10),vs=[ms],bs={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",us,vs))}},_s={class:"van-doc-markdown-body"},qs=e("h1",null,"Pagination \u5206\u9875",-1),fs=[qs],ys={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",_s,fs))}},ws={class:"van-doc-markdown-body"},ks=o(`<h1>Picker \u9009\u62E9\u5668</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u652F\u6301\u5355\u5217\u9009\u62E9\u548C\u591A\u5217\u7EA7\u8054\uFF0C\u901A\u5E38\u4E0E\u5F39\u51FA\u5C42\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Picker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>
<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>()
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Picker</span>)
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">picker</span>
  <span class="hljs-attr">:colums</span>=<span class="hljs-string">&quot;colums&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> colums = [
      <span class="hljs-string">&#39;javaScript&#39;</span>,
      <span class="hljs-string">&#39;HTML&#39;</span>,
      <span class="hljs-string">&#39;CSS&#39;</span>,
      <span class="hljs-string">&#39;TypeScript&#39;</span>,
      <span class="hljs-string">&#39;Vue&#39;</span>,
      <span class="hljs-string">&#39;React&#39;</span>,
      <span class="hljs-string">&#39;WebPack&#39;</span>,
      <span class="hljs-string">&#39;Uniapp&#39;</span>,
      <span class="hljs-string">&#39;React navite&#39;</span>,
      <span class="hljs-string">&#39;canvas&#39;</span>,
      <span class="hljs-string">&#39;WebGl&#39;</span>
    ]

    <span class="hljs-keyword">return</span> {
      colums
    }
  }
}
</code></pre></div><div class="van-doc-card"><h3 id="duo-lie-shu-ju" tabindex="-1">\u591A\u5217\u6570\u636E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">picker</span>
  <span class="hljs-attr">:colums</span>=<span class="hljs-string">&quot;columns2&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
   <span class="hljs-keyword">const</span> columns = [
        <span class="hljs-comment">// \u7B2C\u4E00\u5217</span>
        {
          <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;\u5468\u4E00&#39;</span>, <span class="hljs-string">&#39;\u5468\u4E8C&#39;</span>, <span class="hljs-string">&#39;\u5468\u4E09&#39;</span>, <span class="hljs-string">&#39;\u5468\u56DB&#39;</span>, <span class="hljs-string">&#39;\u5468\u4E94&#39;</span>],
          <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">2</span>
        },
        <span class="hljs-comment">// \u7B2C\u4E8C\u5217</span>
        {
          <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;\u4E0A\u5348&#39;</span>, <span class="hljs-string">&#39;\u4E0B\u5348&#39;</span>, <span class="hljs-string">&#39;\u665A\u4E0A&#39;</span>],
          <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">1</span>
        }
      ],

    <span class="hljs-keyword">return</span> {
      colums
    }
  }
}
</code></pre></div><div class="van-doc-card"><h3 id="duo-lie-shu-ju-1" tabindex="-1">\u591A\u5217\u6570\u636E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">picker</span>
  <span class="hljs-attr">:colums</span>=<span class="hljs-string">&quot;columns2&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5E7F\u4E1C&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5E7F\u5DDE&#39;</span>,
            <span class="hljs-attr">children</span>: [
              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5929\u6CB3\u533A&#39;</span> },
              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u8D8A\u79C0\u533A&#39;</span> },
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6DF1\u5733&#39;</span>,
            <span class="hljs-attr">children</span>: [
              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5357\u5C71\u533A&#39;</span> },
              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5B9D\u5B89\u533A&#39;</span> },
            ]
          },
        ]
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u897F\u6E56\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u4F59\u676D\u533A&#39;</span> }]
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9E7F\u57CE\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u74EF\u6D77\u533A&#39;</span> }]
          }
        ]
      },
    ]

    <span class="hljs-keyword">return</span> {
      colums
    }
  }
}
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>columns</td><td>\u5BF9\u8C61\u6570\u7EC4\uFF0C\u914D\u7F6E\u6BCF\u4E00\u5217\u663E\u793A\u7684\u6570\u636E</td><td><em>Column[]</em></td><td><code>[]</code></td></tr><tr><td>columns-field-names</td><td>\u81EA\u5B9A\u4E49 <code>columns</code> \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5</td><td><em>object</em></td><td><code>{ text: &#39;text&#39;, values: &#39;values&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>title</td><td>\u9876\u90E8\u680F\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td>confirm-button-text</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td>show-toolbar</td><td>\u662F\u5426\u663E\u793A\u9876\u90E8\u680F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>default-index</td><td>\u5355\u5217\u9009\u62E9\u65F6\uFF0C\u9ED8\u8BA4\u9009\u4E2D\u9879\u7684\u7D22\u5F15</td><td><em>number | string</em></td><td><code>0</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="column-shu-ju-jie-gou" tabindex="-1">Column \u6570\u636E\u7ED3\u6784</h3><p>\u5F53\u4F20\u5165\u591A\u5217\u6570\u636E\u65F6\uFF0C<code>columns</code> \u4E3A\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u914D\u7F6E\u6BCF\u4E00\u5217\uFF0C\u6BCF\u4E00\u5217\u6709\u4EE5\u4E0B <code>key</code>:</p><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>values</td><td>\u5217\u4E2D\u5BF9\u5E94\u7684\u5907\u9009\u503C</td><td><em>Array&lt;string | number&gt;</em></td></tr><tr><td>defaultIndex</td><td>\u521D\u59CB\u9009\u4E2D\u9879\u7684\u7D22\u5F15\uFF0C\u9ED8\u8BA4\u4E3A 0</td><td><em>number</em></td></tr><tr><td>children</td><td>\u7EA7\u8054\u9009\u9879</td><td><em>Column</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><p>\u5F53\u9009\u62E9\u5668\u6709\u591A\u5217\u65F6\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u53C2\u6570\u4F1A\u8FD4\u56DE\u6570\u7EC4\u3002</p><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1</td><td>\u5355\u5217\uFF1A\u9009\u4E2D\u503C\uFF0C\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15<br>\u591A\u5217\uFF1A\u6240\u6709\u5217\u9009\u4E2D\u503C\uFF0C\u6240\u6709\u5217\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15</td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td>\u5355\u5217\uFF1A\u9009\u4E2D\u503C\uFF0C\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15<br>\u591A\u5217\uFF1A\u6240\u6709\u5217\u9009\u4E2D\u503C\uFF0C\u6240\u6709\u5217\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15</td></tr><tr><td>change</td><td>\u9009\u9879\u6539\u53D8\u65F6\u89E6\u53D1</td><td>\u5355\u5217\uFF1A\u9009\u4E2D\u503C\uFF0C\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15<br>\u591A\u5217\uFF1A\u6240\u6709\u5217\u9009\u4E2D\u503C\uFF0C\u5F53\u524D\u5217\u5BF9\u5E94\u7684\u7D22\u5F15</td></tr></tbody></table></div>`,11),xs=[ks],$s={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",ws,xs))}},Ts={class:"van-doc-markdown-body"},Ps=o(`<h1>Popup \u5F39\u51FA\u5C42</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u5C42\u5BB9\u5668\uFF0C\u7528\u4E8E\u5C55\u793A\u5F39\u7A97\u3001\u4FE1\u606F\u63D0\u793A\u7B49\u5185\u5BB9\uFF0C\u652F\u6301\u591A\u4E2A\u5F39\u51FA\u5C42\u53E0\u52A0\u5C55\u793A\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Popup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>()
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Popup</span>)
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-gropu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5C55\u793A\u5F39\u51FA\u5C42&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-gropu</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span>&gt;</span>\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">popup</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="dan-chu-wei-zhi" tabindex="-1">\u5F39\u51FA\u4F4D\u7F6E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-gropu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5E95\u90E8\u5F39\u51FA&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;bottom = true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9876\u90E8\u5F39\u51FA&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;top = true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5DE6\u4FA7\u5F39\u51FA&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;left = true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u53F3\u4FA7\u5F39\u51FA&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;right = true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-gropu</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">popup</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">popup</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">popup</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">popup</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yuan-jiao-dan-chuang" tabindex="-1">\u5706\u89D2\u5F39\u7A97</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-gropu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5706\u89D2\u5F39\u7A97&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-gropu</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">popup</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="guan-bi-tu-biao" tabindex="-1">\u5173\u95ED\u56FE\u6807</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-gropu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5173\u95ED\u56FE\u6807&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;closeable = true&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u56FE\u6807\u4F4D\u7F6E&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;closeablePositon = true&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-gropu</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">popup</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;closeable&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
  <span class="hljs-attr">closeable</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">popup</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;closeablePositon&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">close-icon-position</span>=<span class="hljs-string">&quot;top-left&quot;</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>closeable</td><td>\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE</td><td><em>Boolean</em></td><td><code>false</code></td></tr><tr><td>round</td><td>\u5706\u89D2\u98CE\u683C</td><td><em>Boolean</em></td><td><code>false</code></td></tr><tr><td>closeIconPosition</td><td>\u5173\u95ED\u56FE\u6807\u7684\u4F4D\u7F6E</td><td><em>string</em></td><td><code>top-right</code> \u53EF\u9009\uFF08<code>top-left</code>,<code>bottom-left</code>,<code>bottom-right</code>\uFF09</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u5F39\u51FA\u5C42\u5173\u95ED\u4E8B\u4EF6</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD,\u5F39\u51FA\u5C42\u5C55\u793A\u7684\u5185\u5BB9</td></tr></tbody></table></div>`,12),As=[Ps],Cs={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",Ts,As))}},Is={class:"van-doc-markdown-body"},Ss=e("h1",null,"PullRefresh \u4E0B\u62C9\u5237\u65B0",-1),zs=[Ss],Ds={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",Is,zs))}},Bs={class:"van-doc-markdown-body"},Ls=e("h1",null,"\u6D4B\u8BD5",-1),Vs=[Ls],Es={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",Bs,Vs))}},Os={class:"van-doc-markdown-body"},Ms=o(`<h1>signature \u7535\u5B50\u7B7E\u540D</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u624B\u5199\u7535\u5B50\u7B7E\u540D</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { signature  } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>
<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>()
app.<span class="hljs-title function_">use</span>(signature)
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u76D1\u542Csava\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u5728\u4E8B\u4EF6\u5BF9\u8C61\u63A5\u6536\u5230\u4FDD\u5B58\u7684img\u7684file\u683C\u5F0F\u548CdataUrl\u683C\u5F0F\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49filename\u548C\u56FE\u7247\u683C\u5F0F\u3002</p><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">signature</span> @<span class="hljs-attr">save</span>=<span class="hljs-string">&quot;save&quot;</span> @<span class="hljs-attr">reset</span>=<span class="hljs-string">&quot;reset&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">signature</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">function</span> <span class="hljs-title function_">save</span>(<span class="hljs-params">event</span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(event)
  <span class="hljs-keyword">const</span> imgWrap = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&#39;.img-wrap&#39;</span>)
  <span class="hljs-keyword">const</span> img = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&#39;img&#39;</span>)
  img.<span class="hljs-title function_">setAttribute</span>(<span class="hljs-string">&#39;src&#39;</span>, event.<span class="hljs-property">url</span>)
  imgWrap.<span class="hljs-title function_">appendChild</span>(img)
}
<span class="hljs-keyword">function</span> <span class="hljs-title function_">reset</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> imgWrap = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&#39;.img-wrap&#39;</span>)
  imgWrap.<span class="hljs-property">innerHTML</span> = <span class="hljs-string">&#39;&#39;</span>
}
</code></pre></div><div class="van-doc-card"><h3 id="pei-he-popupshi-yong" tabindex="-1">\u914D\u5408popup\u4F7F\u7528</h3><p>\u914D\u5408popup\u4F7F\u7528\u65F6\u53EF\u4EE5\u6307\u5B9Afullscreen\u5B57\u6BB5\uFF0C\u8BA9\u753B\u677F\u94FA\u6EE1\u5168\u5C4F</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5F39\u51FAsignatrue&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;signShow = true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;signShow&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">signature</span> <span class="hljs-attr">:height</span>=<span class="hljs-string">&quot;height&quot;</span> @<span class="hljs-attr">save</span>=<span class="hljs-string">&quot;signShow = false&quot;</span> <span class="hljs-attr">fullscreen</span>/&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">popup</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-xian-kuan-he-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u7EBF\u5BBD\u548C\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">signature</span> <span class="hljs-attr">:line-width</span>=<span class="hljs-string">&quot;width&quot;</span> <span class="hljs-attr">:color</span>=<span class="hljs-string">&quot;color&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">picker</span> <span class="hljs-attr">:colums</span>=<span class="hljs-string">&quot;colums&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BBE\u7F6E\u7EBF\u5BBD\u548C\u989C\u8272&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> colums = [
  {
    <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;2&#39;</span>, <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-string">&#39;6&#39;</span>, <span class="hljs-string">&#39;8&#39;</span>, <span class="hljs-string">&#39;10&#39;</span>],
  },
  {
    <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;red&#39;</span>, <span class="hljs-string">&#39;blue&#39;</span>, <span class="hljs-string">&#39;black&#39;</span>],
  }
]
<span class="hljs-keyword">const</span> width = <span class="hljs-title function_">ref</span>(<span class="hljs-number">5</span>)
<span class="hljs-keyword">const</span> color = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;black&#39;</span>)
<span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = e =&gt; {
  width.<span class="hljs-property">value</span> = e[<span class="hljs-number">0</span>]
  color.<span class="hljs-property">value</span> = e[<span class="hljs-number">1</span>]
}
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>width</td><td>\u753B\u5E03\u5BBD\u5EA6</td><td><em>string</em> <em>number</em></td><td><code>\u8BBE\u5907\u6700\u5927\u5BBD\u5EA6</code></td></tr><tr><td>height</td><td>\u753B\u5E03\u9AD8\u5EA6</td><td><em>string</em> <em>number</em></td><td><code>500</code></td></tr><tr><td>lineWidth</td><td>\u7EBF\u5BBD</td><td><em>string</em> <em>number</em></td><td><code>2</code></td></tr><tr><td>color</td><td>\u753B\u7EBF\u989C\u8272</td><td><em>string</em></td><td><code>black</code></td></tr><tr><td>filename</td><td>\u4FDD\u5B58\u7684\u6587\u4EF6\u540D</td><td><em>string</em></td><td><code>signature</code></td></tr><tr><td>fullscreen</td><td>\u662F\u5426\u5F00\u542F\u5168\u5C4F\u753B\u5E03</td><td><em>Boolean</em></td><td><code>false</code></td></tr><tr><td>imgType</td><td>\u4FDD\u5B58\u7684\u56FE\u7247\u683C\u5F0F</td><td><em>string</em></td><td><code>png</code>(\u53EF\u9009png\u3001jpeg\u3001webp)</td></tr></tbody></table></div>`,9),Rs=[Ms],Gs={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",Os,Rs))}},Ns={class:"van-doc-markdown-body"},Ws=e("h1",null,"skeleton \u9AA8\u67B6\u5C4F",-1),Hs=[Ws],Us={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",Ns,Hs))}},Fs={class:"van-doc-markdown-body"},Zs=o(`<h1>Swipe \u8F6E\u64AD</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5FAA\u73AF\u64AD\u653E\u4E00\u7EC4\u56FE\u7247\u6216\u5185\u5BB9\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Swipe</span> , <span class="hljs-title class_">SwipeItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>
<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>()
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Swipe</span>)
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SwipeItem</span>)
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">swipe</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">swipe</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jian-ting-qie-huan-shi-jian" tabindex="-1">\u76D1\u542C\u5207\u6362\u4E8B\u4EF6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">swipe</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">:loop</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">swipe</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> , swipe, swipeItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: { swipe, swipeItem },
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">change</span> = e =&gt; {
      <span class="hljs-title class_">Toast</span>(<span class="hljs-string">\`\u5F53\u524D\u7D22\u5F15\u662F <span class="hljs-subst">\${e}</span> \`</span>)
    }
    <span class="hljs-keyword">return</span> { change }
  }
}
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>autoplay</td><td>\u81EA\u52A8\u8F6E\u64AD\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A ms</td><td><em>string</em> <em>number</em></td><td>-</td></tr><tr><td>duration</td><td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A s</td><td><em>string</em> <em>number</em></td><td><code>500</code></td></tr><tr><td>loop</td><td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-indicators</td><td>\u662F\u5426\u663E\u793A\u6307\u793A\u5668</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div>`,8),Ks=[Zs],Qs={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",Fs,Ks))}},Ys={class:"van-doc-markdown-body"},Js=o(`<h1>Tabs \u6807\u7B7E\u9875</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u9009\u9879\u5361\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5728\u4E0D\u540C\u7684\u5185\u5BB9\u533A\u57DF\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tab</span>, <span class="hljs-title class_">Tabs</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>()
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tab</span>)
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabs</span>)
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">tab</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;\u6807\u7B7E&#39; + i&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 4&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>&gt;</span>
    {{ \`\u6807\u7B7E\${i}\u5185\u5BB9\u533A\` }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active2&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">tab</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;\u6807\u7B7E&#39; + i&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 4&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>&gt;</span>
    {{ \`\u6807\u7B7E\${i}\u5185\u5BB9\u533A\` }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="qie-huan-dong-hua" tabindex="-1">\u5207\u6362\u52A8\u753B</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">tab</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;\u6807\u7B7E&#39; + i&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 4&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>&gt;</span>
    {{ \`\u6807\u7B7E\${i}\u5185\u5BB9\u533A\` }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yang-shi-feng-ge" tabindex="-1">\u6837\u5F0F\u98CE\u683C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">tab</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;\u6807\u7B7E&#39; + i&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 4&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>&gt;</span>
    {{ \`\u6807\u7B7E\${i}\u5185\u5BB9\u533A\` }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u6807</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">tab</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;\u6807\u7B7E&#39; + i&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 4&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>&gt;</span>
    {{ \`\u6807\u7B7E\${i}\u5185\u5BB9\u533A\` }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-biao-qian" tabindex="-1">\u7981\u7528\u6807\u7B7E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">tab</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;\u6807\u7B7E&#39; + i&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 4&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>&gt;</span>
    {{ \`\u6807\u7B7E\${i}\u5185\u5BB9\u533A\` }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">tabs</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>color</td><td>\u4E0B\u5212\u7EBF\u989C\u8272</td><td><em>string</em></td><td><code>#0052d9</code></td></tr><tr><td>cover</td><td>\u5207\u6362\u98CE\u683C\u6837\u5F0F</td><td><em>Boolean</em></td><td>-</td></tr><tr><td>swipeable</td><td>\u624B\u52BF\u6ED1\u52A8</td><td><em>Boolean</em></td><td><code>false</code></td></tr><tr><td>swipeThreshold</td><td>\u8D85\u51FA\u6570\u91CF\u6EDA\u52A8\u5C45\u4E2D</td><td><em>number</em> <em>string</em></td><td><code>5</code></td></tr><tr><td>lineAnimation</td><td>\u4E0B\u5212\u7EBF\u8FC7\u6E21\u52A8\u753B</td><td><em>Boolean</em></td><td><code>true</code></td></tr><tr><td>tabAnimation</td><td>\u5207\u6362 tab \u52A8\u753B</td><td><em>Boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table></div>`,14),Xs=[Js],sa={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",Ys,Xs))}},aa={class:"van-doc-markdown-body"},na=o(`<h1>Toast \u8F7B\u63D0\u793A</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5728\u9875\u9762\u4E2D\u95F4\u5F39\u51FA\u9ED1\u8272\u534A\u900F\u660E\u63D0\u793A\uFF0C\u7528\u4E8E\u6D88\u606F\u901A\u77E5\u3001\u52A0\u8F7D\u63D0\u793A\u3001\u64CD\u4F5C\u7ED3\u679C\u63D0\u793A\u7B49\u573A\u666F\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>()
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Toast</span>)
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6587\u5B57\u63D0\u793A&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;baseText&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u52A0\u8F7D\u63D0\u793A&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6210\u529F\u63D0\u793A&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5931\u8D25\u63D0\u793A&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;fail&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script setup&gt;
<span class="hljs-keyword">import</span> cell <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../cell/index.vue&#39;</span>
<span class="hljs-keyword">import</span> cellGroup <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../cell-group/index.vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../index&#39;</span>


<span class="hljs-keyword">function</span> <span class="hljs-title function_">baseText</span>(<span class="hljs-params"></span>) {
  <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u63D0\u793A\u5185\u5BB9&#39;</span>)
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">loading</span>(<span class="hljs-params"></span>) {
  <span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">loading</span>({
    <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u52A0\u8F7D\u4E2D...&#39;</span>,
    <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>
    <span class="hljs-comment">// duration: 0</span>
  })
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">success</span>(<span class="hljs-params"></span>) {
  <span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">success</span>(<span class="hljs-string">&#39;\u6210\u529F\u63D0\u793A&#39;</span>)
}
<span class="hljs-keyword">function</span> <span class="hljs-title function_">fail</span>(<span class="hljs-params"></span>) {
  <span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">fail</span>(<span class="hljs-string">&#39;\u5931\u8D25\u63D0\u793A&#39;</span>)
}


<span class="hljs-comment">// function updateMessage() {</span>
<span class="hljs-comment">//   let second = 3</span>
<span class="hljs-comment">//   const toast = Toast.loading({</span>
<span class="hljs-comment">//     message: &#39;\u5012\u8BA1\u65F6 3 \u79D2&#39;,</span>
<span class="hljs-comment">//     duration: 0,</span>
<span class="hljs-comment">//     forbidClick: true</span>
<span class="hljs-comment">//   })</span>

<span class="hljs-comment">//   const task = setInterval(() =&gt; {</span>
<span class="hljs-comment">//     if (--second) {</span>
<span class="hljs-comment">//       toast.message.value = \`\u5012\u8BA1\u65F6 \${second} \u79D2\`</span>
<span class="hljs-comment">//     } else {</span>
<span class="hljs-comment">//       toast.message.value = &#39;success&#39;</span>
<span class="hljs-comment">//       toast.icon.value = &#39;check-circle&#39;</span>
<span class="hljs-comment">//       clearInterval(task)</span>
<span class="hljs-comment">//       setTimeout(toast.close, 1000)</span>
<span class="hljs-comment">//     }</span>
<span class="hljs-comment">//   }, 1000)</span>
<span class="hljs-comment">// }</span>
&lt;/script&gt;

</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u6807</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u56FE\u6807&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;diyIcon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u56FE\u6807&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;diyIcon2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> cell <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../cell/index.vue&#39;</span>
<span class="hljs-keyword">import</span> cellGroup <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../cell-group/index.vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../index&#39;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">diyIcon</span>(<span class="hljs-params"></span>) {
  <span class="hljs-title class_">Toast</span>({
    <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49\u56FE\u6807&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;info-circle&#39;</span>
  })
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">diyIcon2</span>(<span class="hljs-params"></span>) {
  <span class="hljs-title class_">Toast</span>({
    <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49\u56FE\u6807&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;github-fill&#39;</span>
  })
}
</code></pre></div><div class="van-doc-card"><h3 id="dong-tai-geng-xin-ti-shi" tabindex="-1">\u52A8\u6001\u66F4\u65B0\u63D0\u793A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u52A8\u6001\u66F4\u65B0&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;updateMessage&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script setup&gt;
<span class="hljs-keyword">import</span> cell <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../cell/index.vue&#39;</span>
<span class="hljs-keyword">import</span> cellGroup <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../cell-group/index.vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../index&#39;</span>


<span class="hljs-keyword">function</span> <span class="hljs-title function_">updateMessage</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">let</span> second = <span class="hljs-number">3</span>
  <span class="hljs-keyword">const</span> toast = <span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">loading</span>({
    <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u5012\u8BA1\u65F6 3 \u79D2&#39;</span>,
    <span class="hljs-attr">duration</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>
  })

  <span class="hljs-keyword">const</span> task = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">if</span> (--second) {
      toast.<span class="hljs-property">message</span>.<span class="hljs-property">value</span> = <span class="hljs-string">\`\u5012\u8BA1\u65F6 <span class="hljs-subst">\${second}</span> \u79D2\`</span>
    } <span class="hljs-keyword">else</span> {
      toast.<span class="hljs-property">message</span>.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;success&#39;</span>
      toast.<span class="hljs-property">icon</span>.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;check-circle&#39;</span>
      <span class="hljs-built_in">clearInterval</span>(task)
      <span class="hljs-built_in">setTimeout</span>(toast.<span class="hljs-property">close</span>, <span class="hljs-number">1000</span>)
    }
  }, <span class="hljs-number">1000</span>)
}
&lt;/script&gt;
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u6309\u94AE\u7C7B\u578B</td><td><em>string</em></td><td><code>primary</code></td></tr><tr><td>color <code>1.0.0</code></td><td>\u6309\u94AE\u989C\u8272</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table></div>`,11),ta=[na],la={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",aa,ta))}},pa={class:"van-doc-markdown-body"},ca=o(`<h1>VirtualList \u865A\u62DF\u5217\u8868</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u865A\u62DF\u5217\u8868\u4F1A\u6309\u9700\u6E32\u67D3\u53EF\u89C6\u533A\u5185\u7684\u5217\u8868\u9879\u3002\u7EC4\u4EF6\u4F1A\u76D1\u542Cscroll\u4E8B\u4EF6\uFF0C\u6709\u4E00\u5B9A\u7684\u6700\u4F4E\u6027\u80FD\u5F00\u9500\uFF0C\u9002\u7528\u4E8E\u8D85\u957F\u5217\u8868\u7684\u573A\u666F\uFF0C\u5426\u5219\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002</p></div><div class="van-doc-card"><h3 id="shi-xian-yuan-li" tabindex="-1">\u5B9E\u73B0\u539F\u7406</h3><p>\u7EC4\u4EF6\u5185\u90E8\u6CA1\u6709\u76F4\u63A5\u6E32\u67D3\u4F20\u5165\u7684<code>list</code>\uFF0C\u800C\u662F\u901A\u8FC7\u8BA1\u7B97\u53BB\u622A\u53D6list\u7684\u6570\u636E\u5230<code>\u53EF\u89C6\u533A\u5217\u8868</code>\uFF0C\u5728\u76D1\u542Cscroll\u7684\u8FC7\u7A0B\u4E2D\u4E0D\u65AD\u66FF\u6362\u8FD9\u4E2A<code>\u53EF\u89C6\u533A\u5217\u8868</code>\u3002 \u4F60\u53EF\u80FD\u8BA4\u4E3A\u8FD9\u5C06\u5BFC\u81F4\u7EC4\u4EF6\u4E22\u5F03\u73B0\u6709 DOM \u5E76\u91CD\u65B0\u6E32\u67D3\u6574\u4E2A\u5217\u8868\u3002\u5E78\u8FD0\u7684\u662F\uFF0C\u4E8B\u5B9E\u5E76\u975E\u5982\u6B64\u3002Vue \u4E3A\u4E86\u4F7F\u5F97 DOM \u5143\u7D20\u5F97\u5230\u6700\u5927\u8303\u56F4\u7684\u91CD\u7528\u800C\u5B9E\u73B0\u4E86\u4E00\u4E9B\u667A\u80FD\u7684\u542F\u53D1\u5F0F\u65B9\u6CD5\uFF0C\u6240\u4EE5\u7528\u4E00\u4E2A\u542B\u6709\u76F8\u540C\u5143\u7D20\u7684\u6570\u7EC4\u53BB\u66FF\u6362\u539F\u6765\u7684\u6570\u7EC4\u662F\u975E\u5E38\u9AD8\u6548\u7684\u64CD\u4F5C\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span>  } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;TDesign&#39;</span>
<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>()
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">VirtualList</span>)
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u9ED8\u8BA4\u4F5C\u7528\u57DF\u63D2\u69FD\u4F1A\u5C06\u5217\u8868\u9879\u548C\u7D22\u5F15\u4F20\u9012\u8FC7\u6765\uFF0C\u901A\u8FC7\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u4F60\u53EF\u4EE5\u7ED9\u5217\u8868\u9879\u5199\u4EFB\u4F55\u4F60\u559C\u6B22\u7684\u6837\u5F0F\uFF0C</p><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">virtual-list</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;slotProps&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-item&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;slotProps.index&quot;</span>&gt;</span>
        {{ slotProps.item}}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">virtual-list</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> list = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">0</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> index + <span class="hljs-number">1</span>)
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>list</td><td>\u6570\u636E\u5217\u8868</td><td><em>Array</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slot" tabindex="-1">Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u7EC4\u4EF6\u5185\u90E8\u901A\u8FC7\u4F5C\u7528\u57DF\u63D2\u69FD\u5C06\u5217\u8868\u9879<code>item</code>\u548C\u7D22\u5F15<code>index</code>\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6</td></tr></tbody></table></div>`,9),ea=[ca],oa={setup(a,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),c("div",pa,ea))}},j={name:"TDesign",build:{css:{preprocessor:"less"},site:{publicPath:"/static/site-dist"},configureVite(a){const{BUILD_TARGET:s}=process.env;return s==="site"&&(a.server.fs={strict:!1}),a}},site:{title:"TDesign",logo:"https://img.yzcdn.cn/vant/logo.png",nav:[{title:"\u5F00\u53D1\u6307\u5357",items:[{path:"home",title:"\u4ECB\u7ECD"},{path:"quickstart",title:"\u5FEB\u901F\u4E0A\u624B"}]},{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"button",title:"Button \u6309\u94AE"},{path:"cell",title:"Cell \u5355\u5143\u683C"},{path:"tabs",title:"Tabs \u6807\u7B7E\u9875"},{path:"toast",title:"Toast \u5F39\u7A97"},{path:"dialog",title:"Dialog \u5BF9\u8BDD\u6846"},{path:"popup",title:"Popup \u5F39\u51FA\u5C42"},{path:"overlay",title:"Overlay \u906E\u7F69\u5C42"},{path:"action-sheet",title:"ActionSheet \u52A8\u4F5C\u9762\u677F"},{path:"picker",title:"Picker \u9009\u62E9\u5668"},{path:"cascader",title:"Cascader \u7EA7\u8054\u9009\u62E9"},{path:"swipe",title:"Swipe \u8F6E\u64AD"},{path:"pull-refresh",title:"PullRefresh \u4E0B\u62C9\u5237\u65B0"},{path:"list",title:"List \u5217\u8868"},{path:"skeleton",title:"Skeleton \u9AA8\u67B6\u5C4F"},{path:"notify",title:"Notify \u6D88\u606F\u901A\u77E5"},{path:"collapse",title:"Collapse \u6298\u53E0\u9762\u677F"},{path:"pagination",title:"Pagination  \u5206\u9875"}]},{title:"\u529F\u80FD\u6307\u4EE4",items:[{path:"infinite-list",title:"InfiniteScroll \u65E0\u9650\u6EDA\u52A8"}]},{title:"Beta",items:[{path:"signature",title:"Signature \u7535\u5B50\u7B7E\u540D"},{path:"virtual-list",title:"VirtualList \u865A\u62DF\u5217\u8868"},{path:"icon",title:"Icon \u56FE\u6807"}]}]}},ga={Home:k,Quickstart:P,ActionSheet:S,Button:L,Cascader:M,Cell:W,Collapse:Z,Dialog:J,Icon:ns,InfiniteList:cs,List:ds,Notify:gs,Overlay:bs,Pagination:ys,Picker:$s,Popup:Cs,PullRefresh:Ds,Rend:Es,Signature:Gs,Skeleton:Us,Swipe:Qs,Tabs:sa,Toast:la,VirtualList:oa},ua="1.0.2",ha=navigator.userAgent.toLowerCase(),ma=/ios|iphone|ipod|ipad|android/.test(ha);function va(a,s="-"){return a.replace(/([a-z\d])([A-Z])/g,"$1"+s+"$2").replace(/([A-Z])([A-Z][a-z\d]+)/g,"$1"+s+"$2").toLowerCase()}function ba(a){const s=document.createElement("textarea");s.value=a,s.setAttribute("readonly",""),s.style.position="absolute",s.style.left="-9999px",document.body.appendChild(s);const t=document.getSelection();if(!t)return;const l=t.rangeCount>0?t.getRangeAt(0):!1;s.select(),document.execCommand("copy"),document.body.removeChild(s),l&&(t.removeAllRanges(),t.addRange(l))}const g="zh-CN",da="en-US",u="vant-cli-lang";let d=g;function _a(){return d}function qa(a){d=a,localStorage.setItem(u,a)}function fa(a){const s=localStorage.getItem(u);if(s){d=s;return}if(navigator.language&&navigator.language.indexOf("zh-")!==-1){d=g;return}d=a||da}let i=[],m=!1;function ra(a){m?a():i.push(a)}window.top===window?window.addEventListener("message",a=>{a.data.type==="iframeReady"&&(m=!0,i.forEach(s=>s()),i=[])}):window.top.postMessage({type:"iframeReady"},"*");function v(){var t,l;const a=window.vueRouter,{path:s}=a.currentRoute.value;return(t=j.site.simulator)!=null&&t.routeMapper?(l=j.site.simulator)==null?void 0:l.routeMapper(s):s}function ya(){window.top.postMessage({type:"replacePath",value:v()},"*")}function wa(){const a=document.querySelector("iframe");a&&ra(()=>{a.contentWindow.postMessage({type:"replacePath",value:v()},"*")})}function ka(a){window.addEventListener("message",s=>{var l,n;if(((l=s.data)==null?void 0:l.type)!=="replacePath")return;const t=((n=s.data)==null?void 0:n.value)||"";a.currentRoute.value.path!==t&&a.replace(t).catch(()=>{})})}export{ja as _,j as a,fa as b,ba as c,ga as d,wa as e,va as f,_a as g,ya as h,ma as i,ka as l,ua as p,qa as s};
