import{_ as t,o as n,c as o,a as e,t as s,d as c,e as r}from"./app.6aea604c.js";const i={},d={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},p=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; source (filename)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>filename</code>: the filepath to the script file to source</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nushell.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Runs foo.nu in the current context</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">source</span> foo.nu
</code></pre></div><p>Runs foo.nu in current context and call the command defined, suppose foo.nu has content: <code>def say-hi [] { echo &#39;Hi!&#39; }</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">source</span> ./foo.nu<span class="token punctuation">;</span> say-hi
</code></pre></div><p>Runs foo.nu in current context and call the <code>main</code> command automatically, suppose foo.nu has content: <code>def main [] { echo &#39;Hi!&#39; }</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">source</span> ./foo.nu
</code></pre></div>`,13);function f(a,m){return n(),o("div",null,[e("h1",d,[l,h,e("code",null,s(a.$frontmatter.title),1)]),e("div",u,s(a.$frontmatter.usage),1),p])}var _=t(i,[["render",f],["__file","source.html.vue"]]);export{_ as default};