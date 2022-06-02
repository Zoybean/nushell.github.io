import{_ as n,o as e,c as t,a,t as p,d as o,e as c}from"./app.9011b7da.js";const l={},r=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),u={style:{"white-space":"pre-wrap"}},i=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr drop-nulls (subset)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>subset</code>: subset of columns to drop nulls</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>drop null values in dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span>.b / <span class="token variable">$df</span>.b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span> <span class="token operator">|</span> dfr with-column <span class="token variable">$res</span> --name res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$a</span> <span class="token operator">|</span> dfr drop-nulls
</code></pre></div><p>drop null values in dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">(</span><span class="token variable">$s</span> / <span class="token variable">$s</span><span class="token punctuation">)</span> <span class="token operator">|</span> dfr drop-nulls
</code></pre></div>`,9);function d(s,k){return e(),t("div",null,[r,a("div",u,p(s.$frontmatter.usage),1),i])}var h=n(l,[["render",d],["__file","dfr_drop-nulls.html.vue"]]);export{h as default};
