import{_ as n,o as e,c as t,a,t as p,d as o,e as c}from"./app.9011b7da.js";const r={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),u={style:{"white-space":"pre-wrap"}},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr to-df </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Takes a dictionary and creates a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df
</code></pre></div><p>Takes a list of tables and creates a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> a<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span> b<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> c<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df
</code></pre></div><p>Takes a list and creates a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a b c<span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df
</code></pre></div><p>Takes a list of booleans and creates a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>true <span class="token boolean">true</span> false<span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df
</code></pre></div>`,11);function i(s,k){return e(),t("div",null,[l,a("div",u,p(s.$frontmatter.usage),1),d])}var f=n(r,[["render",i],["__file","dfr_to-df.html.vue"]]);export{f as default};
