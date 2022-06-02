import{_ as s,o as t,c as e,a,t as p,d as o,e as c}from"./app.9011b7da.js";const l={},u=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),r={style:{"white-space":"pre-wrap"}},i=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; flatten ...rest --all</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally flatten data by column</li><li><code>--all</code>: flatten inner table out</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>flatten a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>N, u, s, h, e, l, l<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten
</code></pre></div><p>flatten a table, get the first item</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>N, u, s, h, e, l, l<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token operator">|</span> first
</code></pre></div><p>flatten a column having a nested table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>origin, people<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Ecuador, <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>name, meal<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;Andres&#39;</span>, <span class="token string">&#39;arepa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten --all <span class="token operator">|</span> get meal
</code></pre></div><p>restrict the flattening by passing column names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>origin, crate, versions<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>World, <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;nu-cli&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>, <span class="token punctuation">[</span><span class="token string">&#39;0.21&#39;</span>, <span class="token string">&#39;0.22&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten versions --all <span class="token operator">|</span> last <span class="token operator">|</span> get versions
</code></pre></div><p>Flatten inner table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> a: b, d: <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token punctuation">]</span>,  e: <span class="token punctuation">[</span> <span class="token number">4</span> <span class="token number">3</span>  <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">|</span> flatten d --all
</code></pre></div>`,15);function k(n,d){return t(),e("div",null,[u,a("div",r,p(n.$frontmatter.usage),1),i])}var g=s(l,[["render",k],["__file","flatten.html.vue"]]);export{g as default};
