import{_ as s,u as n,o as r,c as o,a as e,t,d as l,e as c}from"./app.aa868a80.js";const i={computed:{frontmatter(){return n().value}}},p={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=l(),u={style:{"white-space":"pre-wrap"}},g=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str length ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally find length of text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Return the lengths of multiple strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">|</span> str length
</code></pre></div><p>Return the lengths of multiple strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;hi&#39;</span> <span class="token string">&#39;there&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str length
</code></pre></div>`,9);function _(m,f,x,k,b,a){return r(),o("div",null,[e("h1",p,[h,d,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),g])}var y=s(i,[["render",_],["__file","str_length.html.vue"]]);export{y as default};
