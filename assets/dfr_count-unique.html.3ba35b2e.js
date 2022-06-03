import{_ as n,u as t,o as r,c as o,a as e,t as s,d as c,e as p}from"./app.aa868a80.js";const u={computed:{frontmatter(){return t().value}}},d={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=c(),h={style:{"white-space":"pre-wrap"}},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr count-unique </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Counts unique values</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr count-unique
</code></pre></div><p>Creates a is n-unique expression from a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> dfr col a <span class="token operator">|</span> dfr n-unique
</code></pre></div>`,7);function f(_,g,k,b,x,a){return r(),o("div",null,[e("h1",d,[l,i,e("code",null,s(a.frontmatter.title),1)]),e("div",h,s(a.frontmatter.usage),1),m])}var q=n(u,[["render",f],["__file","dfr_count-unique.html.vue"]]);export{q as default};
