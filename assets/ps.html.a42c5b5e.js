import{_ as t,u as n,o as r,c as o,a as e,t as a,d as p,e as c}from"./app.d1a8c647.js";const l={computed:{frontmatter(){return n().value}}},i={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),u={style:{"white-space":"pre-wrap"}},g=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ps --long</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--long</code>: list all available columns for each entry</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>List the system processes</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
</code></pre></div><p>List the top 5 system processes with the highest memory usage</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> sort-by mem <span class="token operator">|</span> last <span class="token number">5</span>
</code></pre></div><p>List the top 3 system processes with the highest CPU usage</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> sort-by cpu <span class="token operator">|</span> last <span class="token number">3</span>
</code></pre></div><p>List the system processes with &#39;nu&#39; in their names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where name <span class="token operator">=~</span> <span class="token string">&#39;nu&#39;</span>
</code></pre></div>`,13);function m(_,f,k,b,x,s){return r(),o("div",null,[e("h1",i,[h,d,e("code",null,a(s.frontmatter.title),1)]),e("div",u,a(s.frontmatter.usage),1),g])}var y=t(l,[["render",m],["__file","ps.html.vue"]]);export{y as default};