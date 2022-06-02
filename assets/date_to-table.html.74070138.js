import{_ as t,o as s,c as n,a,t as o,d as r,e as c}from"./app.9011b7da.js";const d={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),r(),a("code",null,"{{ $frontmatter.title }}")],-1),p={style:{"white-space":"pre-wrap"}},i=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date to-table </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert the date into a structured table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> to-table
</code></pre></div><p>Convert the date into a structured table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-table
</code></pre></div><p>Convert a given date into a structured table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;2020-04-12 22:10:57 +0200&#39;</span> <span class="token operator">|</span> <span class="token function">date</span> to-table
</code></pre></div>`,9);function h(e,u){return s(),n("div",null,[l,a("div",p,o(e.$frontmatter.usage),1),i])}var _=t(d,[["render",h],["__file","date_to-table.html.vue"]]);export{_ as default};
