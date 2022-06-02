import{_ as e,o as n,c as t,a,t as o,d as p,e as r}from"./app.9011b7da.js";const c={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),p(),a("code",null,"{{ $frontmatter.title }}")],-1),d={style:{"white-space":"pre-wrap"}},i=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; db and (where)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>where</code>: Where expression on the table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>selects a column from a database with a where clause</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token function">open</span> db.mysql
    <span class="token operator">|</span> db <span class="token keyword">select</span> a
    <span class="token operator">|</span> db from table_1
    <span class="token operator">|</span> db where <span class="token punctuation">((</span>db col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> db and <span class="token punctuation">((</span>db col b<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> db describe
</code></pre></div><p>Creates a nested where clause</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token function">open</span> db.mysql
    <span class="token operator">|</span> db <span class="token keyword">select</span> a
    <span class="token operator">|</span> db from table_1
    <span class="token operator">|</span> db where <span class="token variable"><span class="token punctuation">((</span>db col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> db and <span class="token punctuation">((</span>db col a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">))</span></span>
    <span class="token operator">|</span> db describe
</code></pre></div>`,9);function u(s,h){return n(),t("div",null,[l,a("div",d,o(s.$frontmatter.usage),1),i])}var k=e(c,[["render",u],["__file","db_and.html.vue"]]);export{k as default};
