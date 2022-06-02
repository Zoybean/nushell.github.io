import{_ as a,o as s,c as n,e}from"./app.9011b7da.js";const t={},o=e(`<h1 id="str-to-int" tabindex="-1"><a class="header-anchor" href="#str-to-int" aria-hidden="true">#</a> str to-int</h1><p>converts text into integer</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> str to-int <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li>...args: optionally convert text into integer by column paths</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-r, --radix <code>&lt;number&gt;</code>: radix of integer</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert to an integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;255&#39;</span> <span class="token operator">|</span> str to-int
</code></pre></div><p>Convert str column to an integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;255&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str to-int count <span class="token operator">|</span> get count
</code></pre></div><p>Convert to integer from binary</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;1101&#39;</span> <span class="token operator">|</span> str to-int -r <span class="token number">2</span>
</code></pre></div><p>Convert to integer from hex</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;FF&#39;</span> <span class="token operator">|</span> str to-int -r <span class="token number">16</span>
</code></pre></div>`,17),p=[o];function r(c,l){return s(),n("div",null,p)}var h=a(t,[["render",r],["__file","str-to-int.html.vue"]]);export{h as default};
