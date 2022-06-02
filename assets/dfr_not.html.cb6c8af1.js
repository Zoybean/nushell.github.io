import{_ as t,o as s,c as n,a,t as r,d as o,e as c}from"./app.9011b7da.js";const d={},p=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},i=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr not </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Inverts boolean mask</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>true <span class="token boolean">false</span> true<span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr not
</code></pre></div><p>Creates a not expression from a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> dfr col a <span class="token operator">|</span> dfr not
</code></pre></div>`,7);function h(e,f){return s(),n("div",null,[p,a("div",l,r(e.$frontmatter.usage),1),i])}var _=t(d,[["render",h],["__file","dfr_not.html.vue"]]);export{_ as default};
