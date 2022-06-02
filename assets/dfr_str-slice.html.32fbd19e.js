import{_ as t,o as s,c as r,a as e,t as n,d as o,e as c}from"./app.9011b7da.js";const i={},d=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),e("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},p=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr str-slice (start) --length</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>start</code>: start of slice</li><li><code>--length {int}</code>: optional length</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates slices from the strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abcded abc321 abc123<span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr str-slice <span class="token number">1</span> -l <span class="token number">2</span>
</code></pre></div>`,7);function h(a,u){return s(),r("div",null,[d,e("div",l,n(a.$frontmatter.usage),1),p])}var m=t(i,[["render",h],["__file","dfr_str-slice.html.vue"]]);export{m as default};
