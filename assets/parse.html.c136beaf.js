import{_ as t,o as s,c as r,a as e,t as n,d as o,e as c}from"./app.9011b7da.js";const i={},p=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),e("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; parse (pattern) --regex</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to match. Eg) &quot;{foo}: {bar}&quot;</li><li><code>--regex</code>: use full regex syntax for patterns</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Parse a string into two named columns</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;hi there&quot;</span> <span class="token operator">|</span> parse <span class="token string">&quot;{foo} {bar}&quot;</span>
</code></pre></div><p>Parse a string using regex pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;hi there&quot;</span> <span class="token operator">|</span> parse -r <span class="token string">&#39;(?P&lt;foo&gt;\\w+) (?P&lt;bar&gt;\\w+)&#39;</span>
</code></pre></div>`,9);function h(a,u){return s(),r("div",null,[p,e("div",l,n(a.$frontmatter.usage),1),d])}var m=t(i,[["render",h],["__file","parse.html.vue"]]);export{m as default};
