import{_ as n,o as e,c as t,a,t as p,d as o,e as c}from"./app.9011b7da.js";const l={},i=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),r={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; find ...rest --predicate --regex --insensitive --multiline --dotall --invert</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: terms to search</li><li><code>--predicate {block}</code>: the predicate to satisfy</li><li><code>--regex {string}</code>: regex to match with</li><li><code>--insensitive</code>: case-insensitive search for regex (?i)</li><li><code>--multiline</code>: multi-line mode: ^ and $ match begin/end of line for regex (?m)</li><li><code>--dotall</code>: dotall mode: allow a dot . to match newline character \\n for regex (?s)</li><li><code>--invert</code>: invert the match</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Search for multiple terms in a command output</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">find</span> toml md <span class="token function">sh</span>
</code></pre></div><p>Search for a term in a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> Cargo.toml <span class="token operator">|</span> <span class="token function">find</span> toml
</code></pre></div><p>Search a number or a file size in a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">5</span> 3kb <span class="token number">4</span> 3Mb<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> <span class="token number">5</span> 3kb
</code></pre></div><p>Search a char in a list of string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>moe larry curly<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> l
</code></pre></div><p>Find odd values</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span> <span class="token number">3</span> <span class="token number">6</span> <span class="token number">5</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> --predicate <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token punctuation">(</span><span class="token variable">$it</span> mod <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">}</span>
</code></pre></div><p>Find if a service is not running</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>version patch<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">0.1</span>.0 false<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0.1</span>.1 true<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0.2</span>.0 false<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> -p <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token variable">$it</span>.patch <span class="token punctuation">}</span>
</code></pre></div><p>Find using regex</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abc bde arc abf<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> --regex <span class="token string">&quot;ab&quot;</span>
</code></pre></div><p>Find using regex case insensitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>aBc bde Arc abf<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> --regex <span class="token string">&quot;ab&quot;</span> -i
</code></pre></div><p>Find value in records</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>version name<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">0.1</span>.0 nushell<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0.1</span>.1 fish<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0.2</span>.0 zsh<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">find</span> -r <span class="token string">&quot;nu&quot;</span>
</code></pre></div>`,23);function d(s,k){return e(),t("div",null,[i,a("div",r,p(s.$frontmatter.usage),1),u])}var g=n(l,[["render",d],["__file","find.html.vue"]]);export{g as default};
