import{_ as e,u as t,o as p,c as o,a,t as n,d as c,e as r}from"./app.aa868a80.js";const l={computed:{frontmatter(){return t().value}}},u={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),k={style:{"white-space":"pre-wrap"}},m=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr take (indices)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>indices</code>: list of indices used to take data</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Takes selected rows from dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df</span> <span class="token operator">|</span> dfr take <span class="token variable">$indices</span>
</code></pre></div><p>Takes selected rows from series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> series <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span> <span class="token number">5</span> <span class="token number">2</span> <span class="token number">4</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$series</span> <span class="token operator">|</span> dfr take <span class="token variable">$indices</span>
</code></pre></div>`,9);function h(f,b,_,g,v,s){return p(),o("div",null,[a("h1",u,[i,d,a("code",null,n(s.frontmatter.title),1)]),a("div",k,n(s.frontmatter.usage),1),m])}var $=e(l,[["render",h],["__file","dfr_take.html.vue"]]);export{$ as default};
