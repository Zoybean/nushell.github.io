import{_ as n,u as t,o as r,c as p,a,t as s,d as c,e as o}from"./app.aa868a80.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),g=c(),u={style:{"white-space":"pre-wrap"}},h=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str replace (find) (replace) ...rest --all --no-expand --string</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>find</code>: the pattern to find</li><li><code>replace</code>: the replacement pattern</li><li><code>...rest</code>: optionally find and replace text by column paths</li><li><code>--all</code>: replace all occurrences of find string</li><li><code>--no-expand</code>: do not expand the replace parameter as a regular expression</li><li><code>--string</code>: do not use regular expressions for string find and replace</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Find and replace contents with capture group</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str replace <span class="token string">&#39;(.+).rb&#39;</span> <span class="token string">&#39;$1.nu&#39;</span>
</code></pre></div><p>Find and replace all occurrences of find string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;abc abc abc&#39;</span> <span class="token operator">|</span> str replace -a <span class="token string">&#39;b&#39;</span> <span class="token string">&#39;z&#39;</span>
</code></pre></div><p>Find and replace all occurrences of find string in table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB ColC<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>abc abc ads<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str replace -a <span class="token string">&#39;b&#39;</span> <span class="token string">&#39;z&#39;</span> ColA ColC
</code></pre></div><p>Find and replace contents without using the replace parameter as a regular expression</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;dogs_$1_cats&#39;</span> <span class="token operator">|</span> str replace <span class="token string">&#39;\\$1&#39;</span> <span class="token string">&#39;$2&#39;</span> -n
</code></pre></div><p>Find and replace the first occurence using string replacement <em>not</em> regular expressions</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;c:\\some\\cool\\path&#39;</span> <span class="token operator">|</span> str replace <span class="token string">&#39;c:\\some\\cool&#39;</span> <span class="token string">&#39;~&#39;</span> -s
</code></pre></div><p>Find and replace all occurences using string replacement <em>not</em> regular expressions</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;abc abc abc&#39;</span> <span class="token operator">|</span> str replace -a <span class="token string">&#39;b&#39;</span> <span class="token string">&#39;z&#39;</span> -s
</code></pre></div>`,17);function k(b,m,f,_,x,e){return r(),p("div",null,[a("h1",i,[d,g,a("code",null,s(e.frontmatter.title),1)]),a("div",u,s(e.frontmatter.usage),1),h])}var C=n(l,[["render",k],["__file","str_replace.html.vue"]]);export{C as default};
