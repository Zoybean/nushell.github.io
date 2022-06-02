import{_ as s,o as a,c as n,e}from"./app.9011b7da.js";const t={},r=e(`<p>substrings text</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> str substring <span class="token operator">&lt;</span>range<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;range&gt;</code> the indexes to substring [start end]</li><li>...args: optionally substring text by column paths</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get a substring from the text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">12</span><span class="token punctuation">]</span>
</code></pre></div><p>Alternatively, you can use the form</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;5,12&#39;</span>
</code></pre></div><p>Drop the last <code>n</code> characters from the string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;,-5&#39;</span>
</code></pre></div><p>Get the remaining characters from a starting index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;5,&#39;</span>
</code></pre></div><p>Get the characters from the beginning until ending index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;,7&#39;</span>
</code></pre></div>`,18),o=[r];function p(l,c){return a(),n("div",null,o)}var g=s(t,[["render",p],["__file","str-substring.html.vue"]]);export{g as default};
