import{_ as t,o as s,c as n,a,t as o,d as r,e as p}from"./app.9011b7da.js";const i={},c=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),r(),a("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},d=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to json --raw --indent --tabs</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--raw</code>: remove all of the whitespace</li><li><code>--indent {number}</code>: specify indentation width</li><li><code>--tabs {number}</code>: specify indentation tab quantity</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs a JSON string, with default indentation, representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a b c<span class="token punctuation">]</span> <span class="token operator">|</span> to json
</code></pre></div><p>Outputs a JSON string, with 4-space indentation, representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>Joe Bob Sam<span class="token punctuation">]</span> <span class="token operator">|</span> to json -i <span class="token number">4</span>
</code></pre></div><p>Outputs an unformatted JSON string representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> to json -r
</code></pre></div>`,11);function h(e,u){return s(),n("div",null,[c,a("div",l,o(e.$frontmatter.usage),1),d])}var m=t(i,[["render",h],["__file","to_json.html.vue"]]);export{m as default};
