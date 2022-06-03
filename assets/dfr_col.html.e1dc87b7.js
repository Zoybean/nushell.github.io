import{_ as r,u as s,o,c as n,a as e,t,d as c,e as d}from"./app.aa868a80.js";const l={computed:{frontmatter(){return s().value}}},i={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),p={style:{"white-space":"pre-wrap"}},m=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr col (column name)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>column name</code>: Name of column to be used</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates a named column expression and converts it to a nu object</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> dfr col col_a <span class="token operator">|</span> dfr to-nu
</code></pre></div>`,7);function _(f,x,g,b,v,a){return o(),n("div",null,[e("h1",i,[h,u,e("code",null,t(a.frontmatter.title),1)]),e("div",p,t(a.frontmatter.usage),1),m])}var N=r(l,[["render",_],["__file","dfr_col.html.vue"]]);export{N as default};
