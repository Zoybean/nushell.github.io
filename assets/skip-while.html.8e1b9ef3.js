import{_ as a,o as s,c as n,e}from"./app.aa868a80.js";const t={},o=e(`<h1 id="skip-while" tabindex="-1"><a class="header-anchor" href="#skip-while" aria-hidden="true">#</a> skip-while</h1><p>Skips rows while the condition matches.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>input-command<span class="token punctuation">]</span> <span class="token operator">|</span> skip-while <span class="token operator">&lt;</span>condition<span class="token operator">&gt;</span>
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>If we open a file with a list of contacts, we get all of the contacts.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> contacts.csv <span class="token operator">|</span> sort-by <span class="token string">&quot;last name&quot;</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 first name \u2502 last name \u2502 email</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 John       \u2502 Abbot     \u2502 abbot@email.com
 <span class="token number">1</span> \u2502 Chris      \u2502 Beasly    \u2502 beasly@email.com
 <span class="token number">2</span> \u2502 Jane       \u2502 Carver    \u2502 carver@email.com
 <span class="token number">3</span> \u2502 Francis    \u2502 Davis     \u2502 davis@email.com
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>To exclude skip contacts with last names starting with &#39;A&#39; or &#39;B&#39;, use skip-while:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> contacts.csv <span class="token operator">|</span> sort-by <span class="token string">&quot;last name&quot;</span> <span class="token operator">|</span>  skip-while <span class="token string">&quot;last name&quot;</span> <span class="token operator">&lt;</span> <span class="token string">&quot;C&quot;</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 first name \u2502 last name \u2502 email</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Jane       \u2502 Carver    \u2502 carver@email.com
 <span class="token number">1</span> \u2502 Francis    \u2502 Davis     \u2502 davis@email.com
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Note that the order of input rows matters. Once a single row does not match the condition, all following rows are included in the output, whether or not they match the condition:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> contacts.csv <span class="token operator">|</span> skip-while <span class="token string">&quot;last name&quot;</span> <span class="token operator">&lt;</span> <span class="token string">&quot;C&quot;</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 first name \u2502 last name \u2502 email</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Jane       \u2502 Carver    \u2502 carver@email.com
 <span class="token number">1</span> \u2502 Chris      \u2502 Beasly    \u2502 beasly@email.com
 <span class="token number">2</span> \u2502 Francis    \u2502 Davis     \u2502 davis@email.com
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>See the <code>where</code> command to filter each individual row by a condition, regardless of order.</p>`,12),p=[o];function c(l,r){return s(),n("div",null,p)}var h=a(t,[["render",c],["__file","skip-while.html.vue"]]);export{h as default};
