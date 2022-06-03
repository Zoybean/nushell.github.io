import{_ as a,o as e,c as s,e as n}from"./app.aa868a80.js";const t={},o=n(`<p>Move columns.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> move <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li>...args: the columns to move</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>--after <code>&lt;column path&gt;</code>: the column that will precede the columns moved</li><li>--before <code>&lt;column path&gt;</code>: the column that will be next the columns moved</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Move the column &quot;type&quot; before the column &quot;name&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> move <span class="token builtin class-name">type</span> --before name <span class="token operator">|</span> first
</code></pre></div><p>or move the column &quot;chickens&quot; after &quot;name&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> move chickens --after name <span class="token operator">|</span> first
</code></pre></div><p>you can selectively move many columns in either direction</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> move name chickens --after <span class="token builtin class-name">type</span> <span class="token operator">|</span> first
</code></pre></div>`,14),l=[o];function c(p,r){return e(),s("div",null,l)}var h=a(t,[["render",c],["__file","move.html.vue"]]);export{h as default};
