import{_ as e,u as t,o,c as p,a,t as n,d as r,e as c}from"./app.aa868a80.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},g=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into bool ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: column paths to convert to boolean (for table input)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert value to boolean in table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;false&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1.0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>true<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into bool value
</code></pre></div><p>Convert bool to boolean</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token boolean">true</span> <span class="token operator">|</span> into bool
</code></pre></div><p>convert integer to boolean</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> into bool
</code></pre></div><p>convert decimal string to boolean</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;0.0&#39;</span> <span class="token operator">|</span> into bool
</code></pre></div><p>convert string to boolean</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;true&#39;</span> <span class="token operator">|</span> into bool
</code></pre></div>`,15);function b(k,m,v,_,f,s){return o(),p("div",null,[a("h1",i,[u,d,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),g])}var B=e(l,[["render",b],["__file","into_bool.html.vue"]]);export{B as default};
