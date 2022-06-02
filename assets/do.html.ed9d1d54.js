import{_ as s,o as n,c as t,a,t as o,d as r,e as c}from"./app.9011b7da.js";const p={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),r(),a("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; do (block) ...rest --ignore-errors</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run</li><li><code>...rest</code>: the parameter(s) for the block</li><li><code>--ignore-errors</code>: ignore errors as the block runs</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Run the block</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> hello <span class="token punctuation">}</span>
</code></pre></div><p>Run the block and ignore errors</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> -i <span class="token punctuation">{</span> thisisnotarealcommand <span class="token punctuation">}</span>
</code></pre></div><p>Run the block, with a positional parameter</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span><span class="token operator">|</span>x<span class="token operator">|</span> <span class="token number">100</span> + <span class="token variable">$x</span> <span class="token punctuation">}</span> <span class="token number">50</span>
</code></pre></div>`,11);function h(e,u){return n(),t("div",null,[l,a("div",i,o(e.$frontmatter.usage),1),d])}var g=s(p,[["render",h],["__file","do.html.vue"]]);export{g as default};
