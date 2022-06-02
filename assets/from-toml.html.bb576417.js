import{_ as e,o as a,c as n,e as t}from"./app.9011b7da.js";const s={},o=t(`<p>Converts toml data into table. Use this when nushell cannot determine the input file extension.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Let&#39;s say we have the following Rust .lock file:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.lock
<span class="token comment"># This file is automatically @generated by Cargo.</span>
<span class="token comment"># It is not intended for manual editing.                                   [[package]]                                                                name = &quot;adler32&quot;                                                           version = &quot;1.0.3&quot;                                                          source = &quot;registry+https://github.com/rust-lang/crates.io-index&quot;</span>
<span class="token punctuation">..</span>.
</code></pre></div><p>The &quot;Cargo.lock&quot; file is actually a .toml file, but the file extension isn&#39;t .toml. That&#39;s okay, we can use the <code>from toml</code> command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.lock <span class="token operator">|</span> from toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 package \u2502 <span class="token punctuation">[</span>table <span class="token number">459</span> rows<span class="token punctuation">]</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,6),l=[o];function c(p,r){return a(),n("div",null,l)}var u=e(s,[["render",c],["__file","from-toml.html.vue"]]);export{u as default};
