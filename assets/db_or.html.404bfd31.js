import{_ as n,u as t,o,c as p,a,t as e,d as r,e as c}from"./app.aa868a80.js";const l={computed:{frontmatter(){return t().value}}},d={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=r(),h={style:{"white-space":"pre-wrap"}},b=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; db or (where)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>where</code>: Where expression on the table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>selects a column from a database with a where clause</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token function">open</span> db.mysql
    <span class="token operator">|</span> db <span class="token keyword">select</span> a
    <span class="token operator">|</span> db from table_1
    <span class="token operator">|</span> db where <span class="token punctuation">((</span>db col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> db or <span class="token punctuation">((</span>db col b<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> db describe
</code></pre></div><p>Creates a nested where clause</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token function">open</span> db.mysql
    <span class="token operator">|</span> db <span class="token keyword">select</span> a
    <span class="token operator">|</span> db from table_1
    <span class="token operator">|</span> db where <span class="token variable"><span class="token punctuation">((</span>db col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> db or <span class="token punctuation">((</span>db col a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">))</span></span>
    <span class="token operator">|</span> db describe
</code></pre></div>`,9);function k(m,_,f,g,x,s){return o(),p("div",null,[a("h1",d,[i,u,a("code",null,e(s.frontmatter.title),1)]),a("div",h,e(s.frontmatter.usage),1),b])}var v=n(l,[["render",k],["__file","db_or.html.vue"]]);export{v as default};
