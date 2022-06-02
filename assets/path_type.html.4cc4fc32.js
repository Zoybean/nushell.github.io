import{_ as t,o as s,c as n,a,t as r,d as o,e as p}from"./app.9011b7da.js";const c={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path type --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns {table}</code>: Optionally operate by column path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Show type of a filepath</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">|</span> path <span class="token builtin class-name">type</span>
</code></pre></div><p>Show type of a filepath in a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> path <span class="token builtin class-name">type</span> -c <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div>`,9);function d(e,u){return s(),n("div",null,[l,a("div",i,r(e.$frontmatter.usage),1),h])}var f=t(c,[["render",d],["__file","path_type.html.vue"]]);export{f as default};
