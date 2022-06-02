import{_ as n,o as e,c as t,a,t as p,d as o,e as c}from"./app.9011b7da.js";const r={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; reduce (block) --fold --numbered</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: reducing function</li><li><code>--fold {any}</code>: reduce with initial value</li><li><code>--numbered</code>: iterate with an index</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Sum values of a list (same as &#39;math sum&#39;)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token punctuation">]</span> <span class="token operator">|</span> reduce <span class="token punctuation">{</span><span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$it</span> + <span class="token variable">$acc</span> <span class="token punctuation">}</span>
</code></pre></div><p>Sum values of a list (same as &#39;math sum&#39;)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token punctuation">]</span> <span class="token operator">|</span> reduce -n <span class="token punctuation">{</span><span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span>.item + <span class="token variable">$it</span>.item <span class="token punctuation">}</span>
</code></pre></div><p>Sum values with a starting value (fold)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token punctuation">]</span> <span class="token operator">|</span> reduce -f <span class="token number">10</span> <span class="token punctuation">{</span><span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span> + <span class="token variable">$it</span> <span class="token punctuation">}</span>
</code></pre></div><p>Replace selected characters in a string with &#39;X&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span> i o t <span class="token punctuation">]</span> <span class="token operator">|</span> reduce -f <span class="token string">&quot;Arthur, King of the Britons&quot;</span> <span class="token punctuation">{</span><span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span> <span class="token operator">|</span> str replace -a <span class="token variable">$it</span> <span class="token string">&quot;X&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Find the longest string and its index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span> one longest three bar <span class="token punctuation">]</span> <span class="token operator">|</span> reduce -n <span class="token punctuation">{</span> <span class="token operator">|</span>it, acc<span class="token operator">|</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$it</span>.item <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token variable">$acc</span>.item <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token variable">$it</span>.item
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token variable">$acc</span>.item
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
</code></pre></div>`,15);function k(s,d){return e(),t("div",null,[l,a("div",i,p(s.$frontmatter.usage),1),u])}var m=n(r,[["render",k],["__file","reduce.html.vue"]]);export{m as default};
