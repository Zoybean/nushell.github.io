import{_ as e,o as a,c as s,e as n}from"./app.9011b7da.js";const o={},t=n(`<p>This command saves the contents of the pipeline to a file. Use this in combination with the <code>to json</code>, <code>to csv</code>, ... commands to save the contents in the specified format.</p><p>Syntax: <code>save (path) {flags}</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>(path)</code> the path to save contents to</li></ul><h3 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h3><pre><code>--raw
  treat values as-is rather than auto-converting based on file extension
</code></pre><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>You can save the name of files in a directory like this:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> File <span class="token operator">|</span> <span class="token keyword">select</span> name <span class="token operator">|</span> save filenames.csv
</code></pre></div><p>Or you can format it in supported formats using one of the <code>to</code> commands:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> File <span class="token operator">|</span> <span class="token keyword">select</span> name <span class="token operator">|</span> to csv <span class="token operator">|</span> save filenames
</code></pre></div><p><code>filename.csv</code> and <code>filenames</code> are both <code>csv</code> formatted files. Nu auto-converts the format if a supported file extension is given.</p>`,12),c=[t];function r(p,l){return a(),s("div",null,c)}var d=e(o,[["render",r],["__file","save.html.vue"]]);export{d as default};
