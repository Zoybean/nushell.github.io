import{_ as n,u as t,o,c as p,a,t as e,d as r,e as l}from"./app.aa868a80.js";const c={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),f={style:{"white-space":"pre-wrap"}},h=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr all-false </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns true if all values are false</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>false <span class="token boolean">false</span> false<span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr all-false
</code></pre></div><p>Checks the result from a comparison</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">2</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$s</span> <span class="token operator">&gt;</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$res</span> <span class="token operator">|</span> dfr all-false
</code></pre></div>`,7);function k(m,_,g,b,v,s){return o(),p("div",null,[a("h1",i,[u,d,a("code",null,e(s.frontmatter.title),1)]),a("div",f,e(s.frontmatter.usage),1),h])}var $=n(c,[["render",k],["__file","dfr_all-false.html.vue"]]);export{$ as default};
