import{_ as n,o as e,c as t,a,t as o,d as p,e as r}from"./app.9011b7da.js";const c={},i=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),p(),a("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into int ...rest --radix</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: column paths to convert to int (for table input)</li><li><code>--radix {number}</code>: radix of integer</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert string to integer in table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;-5&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1.5</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into int num
</code></pre></div><p>Convert string to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;2&#39;</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert decimal to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">5.9</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert decimal string to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;5.9&#39;</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert file size to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 4KB <span class="token operator">|</span> into int
</code></pre></div><p>Convert bool to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>false, true<span class="token punctuation">]</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert date to integer (Unix timestamp)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">2022</span>-02-02 <span class="token operator">|</span> into int
</code></pre></div><p>Convert to integer from binary</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;1101&#39;</span> <span class="token operator">|</span> into int -r <span class="token number">2</span>
</code></pre></div><p>Convert to integer from hex</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;FF&#39;</span> <span class="token operator">|</span>  into int -r <span class="token number">16</span>
</code></pre></div>`,23);function u(s,g){return e(),t("div",null,[i,a("div",l,o(s.$frontmatter.usage),1),d])}var k=n(c,[["render",u],["__file","into_int.html.vue"]]);export{k as default};
