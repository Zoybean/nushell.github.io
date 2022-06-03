import{_ as t,u as n,o,c as r,a,t as s,d as i,e as c}from"./app.aa868a80.js";const d={computed:{frontmatter(){return n().value}}},p={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=i(),u={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; def (def_name) (params) (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>def_name</code>: definition name</li><li><code>params</code>: parameters</li><li><code>block</code>: body of the definition</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check
https://www.nushell.sh/book/thinking_in_nushell.html#parsing-and-evaluation-are-different-stages
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Define a command and run it</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def say-hi <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;hi&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> say-hi
</code></pre></div><p>Define a command and run it with parameter(s)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def say-sth <span class="token punctuation">[</span>sth: string<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$sth</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> say-sth hi
</code></pre></div>`,11);function f(g,_,k,x,b,e){return o(),r("div",null,[a("h1",p,[l,h,a("code",null,s(e.frontmatter.title),1)]),a("div",u,s(e.frontmatter.usage),1),m])}var y=t(d,[["render",f],["__file","def.html.vue"]]);export{y as default};
