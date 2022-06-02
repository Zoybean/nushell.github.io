import{_ as n,o as e,c as t,a,t as o,d as p,e as r}from"./app.9011b7da.js";const l={},c=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),p(),a("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr is-not-null </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create mask where values are not null</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">0</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$s</span> / <span class="token variable">$s</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$res</span> <span class="token operator">|</span> dfr is-not-null
</code></pre></div><p>Creates a is not null expression from a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> dfr col a <span class="token operator">|</span> dfr is-not-null
</code></pre></div>`,7);function d(s,h){return e(),t("div",null,[c,a("div",i,o(s.$frontmatter.usage),1),u])}var f=n(l,[["render",d],["__file","dfr_is-not-null.html.vue"]]);export{f as default};
