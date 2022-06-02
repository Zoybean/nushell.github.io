import{_ as c,r,o as i,c as l,a as t,b as s,w as d,e as o,d as e}from"./app.9011b7da.js";const p={},h=o(`<h1 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h1><p>Nushell supports the following operators for common math, logic, and string operations:</p><table><thead><tr><th>Operator</th><th>Description</th></tr></thead><tbody><tr><td><code>+</code></td><td>add</td></tr><tr><td><code>-</code></td><td>subtract</td></tr><tr><td><code>*</code></td><td>multiply</td></tr><tr><td><code>/</code></td><td>divide</td></tr><tr><td><code>**</code></td><td>exponentiation (power)</td></tr><tr><td><code>mod</code></td><td>modulo</td></tr><tr><td><code>==</code></td><td>equal</td></tr><tr><td><code>!=</code></td><td>not equal</td></tr><tr><td><code>&lt;</code></td><td>less than</td></tr><tr><td><code>&lt;=</code></td><td>less than or equal</td></tr><tr><td><code>&gt;</code></td><td>greater than</td></tr><tr><td><code>&gt;=</code></td><td>greater than or equal</td></tr><tr><td><code>=~</code></td><td>regex match / string contains another</td></tr><tr><td><code>!~</code></td><td>inverse regex match / string does <em>not</em> contain another</td></tr><tr><td><code>in</code></td><td>value in list</td></tr><tr><td><code>not-in</code></td><td>value not in list</td></tr><tr><td><code>not</code></td><td>logical not</td></tr><tr><td><code>&amp;&amp;</code>, <code>and</code></td><td>and two Boolean values</td></tr><tr><td>\`</td><td></td></tr></tbody></table><p>Parentheses can be used for grouping to specify evaluation order or for calling commands and using the results in an expression.</p><h2 id="order-of-operations" tabindex="-1"><a class="header-anchor" href="#order-of-operations" aria-hidden="true">#</a> Order of operations</h2><p>Math operations are evaluated in the follow order (from highest precedence to lowest):</p><ul><li>Parentheses (<code>()</code>)</li><li>Multiply (<code>*</code>) and Divide (<code>/</code>) and Power (<code>**</code>)</li><li>Add (<code>+</code>) and Subtract (<code>-</code>)</li></ul><div class="language-text ext-text"><pre class="language-text"><code>&gt; 3 * (1 + 2)
9
</code></pre></div><h2 id="regular-expression-string-contains-operators" tabindex="-1"><a class="header-anchor" href="#regular-expression-string-contains-operators" aria-hidden="true">#</a> Regular Expression / string-contains Operators</h2>`,9),u=e("The "),_=t("code",null,"=~",-1),g=e(" and "),m=t("code",null,"!~",-1),f=e(" operators provide a convenient way to evaluate "),k={href:"https://cheatography.com/davechild/cheat-sheets/regular-expressions/",target:"_blank",rel:"noopener noreferrer"},v=e("regular expressions"),x=e(". You don't need to know regular expressions to use them - they're also an easy way to check whether 1 string contains another."),b=o(`<ul><li><code>string =~ pattern</code> returns <strong>true</strong> if <code>string</code> contains a match for <code>pattern</code>, and <strong>false</strong> otherwise.</li><li><code>string !~ pattern</code> returns <strong>false</strong> if <code>string</code> contains a match for <code>pattern</code>, and <strong>true</strong> otherwise.</li></ul><p>For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>foobarbaz <span class="token operator">=~</span> bar <span class="token comment"># returns true</span>
foobarbaz <span class="token operator">!</span>~ bar <span class="token comment"># returns false</span>
<span class="token function">ls</span> <span class="token operator">|</span> where name <span class="token operator">=~</span> ^nu <span class="token comment"># returns all files whose names start with &quot;nu&quot;</span>
</code></pre></div>`,3),w=e("Both operators use "),q={href:"https://docs.rs/regex/latest/regex/struct.Regex.html#method.is_match",target:"_blank",rel:"noopener noreferrer"},y=e("the Rust regex crate's "),O=t("code",null,"is_match()",-1),F=e(" function"),B=e("."),N=o(`<h2 id="case-sensitivity" tabindex="-1"><a class="header-anchor" href="#case-sensitivity" aria-hidden="true">#</a> Case Sensitivity</h2><p>Operators are usually case-sensitive when operating on strings. There are a few ways to do case-insensitive work instead:</p><ol><li>In the regular expression operators, specify the <code>(?i)</code> case-insensitive mode modifier:</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token string">&quot;FOO&quot;</span> <span class="token operator">=~</span> <span class="token string">&quot;foo&quot;</span> <span class="token comment"># returns false</span>
<span class="token string">&quot;FOO&quot;</span> <span class="token operator">=~</span> <span class="token string">&quot;(?i)foo&quot;</span> <span class="token comment"># returns true</span>
</code></pre></div>`,4),R={start:"2"},C=e("Use the "),E=t("code",null,"str contains",-1),L=e(" command's "),V=t("code",null,"--insensitive",-1),I=e(" flag:"),P=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token string">&quot;FOO&quot;</span> <span class="token operator">|</span> str contains --insensitive <span class="token string">&quot;foo&quot;</span>
</code></pre></div>`,1),S={start:"3"},T=e("Convert strings to lowercase with "),z=t("code",null,"str downcase",-1),D=e(" before comparing:"),M=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">(</span><span class="token string">&quot;FOO&quot;</span> <span class="token operator">|</span> str downcase<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token string">&quot;Foo&quot;</span> <span class="token operator">|</span> str downcase<span class="token punctuation">)</span>
</code></pre></div>`,1);function A(U,Y){const n=r("ExternalLinkIcon"),a=r("RouterLink");return i(),l("div",null,[h,t("p",null,[u,_,g,m,f,t("a",k,[v,s(n)]),x]),b,t("p",null,[w,t("a",q,[y,O,F,s(n)]),B]),N,t("ol",R,[t("li",null,[C,s(a,{to:"/book/commands/str_contains.html"},{default:d(()=>[E]),_:1}),L,V,I])]),P,t("ol",S,[t("li",null,[T,s(a,{to:"/book/commands/str_downcase.html"},{default:d(()=>[z]),_:1}),D])]),M])}var G=c(p,[["render",A],["__file","operators.html.vue"]]);export{G as default};
