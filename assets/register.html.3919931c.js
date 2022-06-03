import{_ as s,u as t,o,c as r,a as e,t as n,d as i,e as c}from"./app.aa868a80.js";const l={computed:{frontmatter(){return t().value}}},p={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=i(),h={style:{"white-space":"pre-wrap"}},g=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; register (plugin) (signature) --encoding --shell</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>plugin</code>: path of executable for plugin</li><li><code>signature</code>: Block with signature description as json object</li><li><code>--encoding {string}</code>: Encoding used to communicate with plugin. Options: [capnp, json]</li><li><code>--shell {path}</code>: path of shell used to run plugin (cmd, sh, python, etc)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check
https://www.nushell.sh/book/thinking_in_nushell.html#parsing-and-evaluation-are-different-stages
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Register <code>nu_plugin_query</code> plugin from ~/.cargo/bin/ dir</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> register -e json ~/.cargo/bin/nu_plugin_query
</code></pre></div><p>Register <code>nu_plugin_query</code> plugin from <code>nu -c</code>(plugin will be available in that nu session only)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> plugin <span class="token operator">=</span> <span class="token punctuation">((</span>which nu<span class="token punctuation">)</span>.path.0 <span class="token operator">|</span> path <span class="token function">dirname</span> <span class="token operator">|</span> path <span class="token function">join</span> <span class="token string">&#39;nu_plugin_query&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> nu -c <span class="token string">$&#39;register -e json ($plugin); version&#39;</span>
</code></pre></div>`,11);function _(m,f,k,x,b,a){return o(),r("div",null,[e("h1",p,[d,u,e("code",null,n(a.frontmatter.title),1)]),e("div",h,n(a.frontmatter.usage),1),g])}var w=s(l,[["render",_],["__file","register.html.vue"]]);export{w as default};
