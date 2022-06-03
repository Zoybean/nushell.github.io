import{_ as t,u as n,o,c as r,a as e,t as s,d as c,e as p}from"./app.aa868a80.js";const d={computed:{frontmatter(){return n().value}}},h={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=c(),u={style:{"white-space":"pre-wrap"}},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sys </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Show info about the system</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
</code></pre></div><p>Show the os system name with get</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>sys<span class="token punctuation">)</span>.host <span class="token operator">|</span> get name
</code></pre></div><p>Show the os system name</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>sys<span class="token punctuation">)</span>.host.name
</code></pre></div>`,9);function m(_,f,x,v,y,a){return o(),r("div",null,[e("h1",h,[i,l,e("code",null,s(a.frontmatter.title),1)]),e("div",u,s(a.frontmatter.usage),1),g])}var k=t(d,[["render",m],["__file","sys.html.vue"]]);export{k as default};
