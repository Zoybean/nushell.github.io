import{_ as s,o as t,c as n,a,t as r,d as o,e as c}from"./app.9011b7da.js";const p={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str collect (separator)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>separator</code>: optional separator to use when creating string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create a string from input</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;shell&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str collect
</code></pre></div><p>Create a string from input with a separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;shell&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str collect <span class="token string">&#39;-&#39;</span>
</code></pre></div>`,9);function h(e,u){return t(),n("div",null,[l,a("div",i,r(e.$frontmatter.usage),1),d])}var _=s(p,[["render",h],["__file","str_collect.html.vue"]]);export{_ as default};
