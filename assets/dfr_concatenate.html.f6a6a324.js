import{_ as t,o as n,c as s,a,t as r,d as o,e as c}from"./app.9011b7da.js";const p={},i=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),d={style:{"white-space":"pre-wrap"}},l=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr concatenate (other)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>other</code>: Other array with string to be concatenated</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Concatenate string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>za xs cd<span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>abc abc abc<span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr concatenate <span class="token variable">$other</span>
</code></pre></div>`,7);function h(e,u){return n(),s("div",null,[i,a("div",d,r(e.$frontmatter.usage),1),l])}var _=t(p,[["render",h],["__file","dfr_concatenate.html.vue"]]);export{_ as default};
