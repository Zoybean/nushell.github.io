import{_ as t,o as s,c as n,a,t as o,d as r,e as c}from"./app.9011b7da.js";const i={},p=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),r(),a("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check
https://www.nushell.sh/book/thinking_in_nushell.html#parsing-and-evaluation-are-different-stages
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Export a definition from a module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module utils <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def my-command <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;hello&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> use utils my-command<span class="token punctuation">;</span> my-command
</code></pre></div>`,7);function u(e,h){return s(),n("div",null,[p,a("div",l,o(e.$frontmatter.usage),1),d])}var f=t(i,[["render",u],["__file","export.html.vue"]]);export{f as default};
