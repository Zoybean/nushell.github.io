import{_ as t,u as e,o,c as p,a,t as n,d as c,e as l}from"./app.aa868a80.js";const r={computed:{frontmatter(){return e().value}}},u={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},k=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; compact ...columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...columns</code>: the columns to compact from the table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Filter out all records where &#39;Hello&#39; is null (returns nothing)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Hello&quot;</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token variable">$nothing</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">|</span> compact Hello
</code></pre></div><p>Filter out all records where &#39;World&#39; is null (Returns the table)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Hello&quot;</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token variable">$nothing</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">|</span> compact World
</code></pre></div><p>Filter out all instances of nothing from a list (Returns [1,2])</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token variable">$nothing</span>, <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> compact
</code></pre></div>`,11);function m(g,b,_,f,v,s){return o(),p("div",null,[a("h1",u,[i,d,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),k])}var q=t(r,[["render",m],["__file","compact.html.vue"]]);export{q as default};
