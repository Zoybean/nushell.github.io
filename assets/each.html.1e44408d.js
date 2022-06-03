import{_ as a,o as s,c as n,e}from"./app.aa868a80.js";const t={},p=e(`<p>Run a block on each row of the table.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> each <span class="token operator">&lt;</span>block<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>subcommand<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="subcommands" tabindex="-1"><a class="header-anchor" href="#subcommands" aria-hidden="true">#</a> Subcommands</h2><ul><li>each group - Runs a block on groups of <code>group_size</code> rows of a table at a time.</li><li>each window - Runs a block on sliding windows of <code>window_size</code> rows of a table at a time.</li></ul><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;block&gt;</code> the block to run on each row</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-n, --numbered: returned a numbered item ($it.index and $it.item)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Echo the sum of each row</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$it</span> <span class="token operator">|</span> math <span class="token function">sum</span> <span class="token punctuation">}</span>
</code></pre></div><p>Echo the square of each integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">(</span><span class="token variable">$it</span> * <span class="token variable">$it</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre></div><p>Number each item and echo a message</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token string">&#39;bob&#39;</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> each --numbered <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> $<span class="token string">&quot;(<span class="token variable">$it</span>.index) is (<span class="token variable">$it</span>.item)&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Name the block variable that each uses</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token punctuation">{</span><span class="token operator">|</span>x<span class="token operator">|</span> <span class="token variable">$x</span> + <span class="token number">100</span><span class="token punctuation">}</span>
</code></pre></div>`,18),o=[p];function c(l,r){return s(),n("div",null,o)}var u=a(t,[["render",c],["__file","each.html.vue"]]);export{u as default};
