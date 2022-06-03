import{_ as a,o as s,c as e,e as n}from"./app.aa868a80.js";const t={},p=n(`<p>Keep the number of rows only.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> keep <span class="token punctuation">(</span>rows<span class="token punctuation">)</span> <span class="token operator">&lt;</span>subcommand<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="subcommands" tabindex="-1"><a class="header-anchor" href="#subcommands" aria-hidden="true">#</a> Subcommands</h2><ul><li>keep until - Keeps rows until the condition matches.</li><li>keep while - Keeps rows while the condition matches.</li></ul><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>(rows)</code> Starting from the front, the number of rows to keep</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Keep the first row</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> keep
</code></pre></div><p>Keep the first four rows</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> keep <span class="token number">4</span>
</code></pre></div>`,14),o=[p];function r(c,l){return s(),e("div",null,o)}var h=a(t,[["render",r],["__file","keep.html.vue"]]);export{h as default};
