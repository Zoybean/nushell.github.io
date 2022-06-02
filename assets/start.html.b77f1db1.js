import{_ as e,o as a,c as s,e as t}from"./app.9011b7da.js";const r={},i=t(`<p>Opens each file/directory/URL using the default application.</p><p>Syntax: <code>start ...args{flags}</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>args</code>: a list of space-separated files to open</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><pre><code>-a --application &lt;string&gt;
  Specifies the application used for opening the files/directories/urls
</code></pre><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Open <code>index.html</code> in the system&#39;s default browser (cross platform):</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> start index.html
</code></pre></div><p>Open <code>index.html</code> in Firefox (specific path for OSX):</p><div class="language-bash ext-sh"><pre class="language-bash"><code>start index.html -a /Applications/Firefox.app
</code></pre></div>`,11),c=[i];function o(n,d){return a(),s("div",null,c)}var p=e(r,[["render",o],["__file","start.html.vue"]]);export{p as default};
