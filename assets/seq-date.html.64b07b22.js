import{_ as a,o as s,c as n,e}from"./app.9011b7da.js";const t={},o=e(`<p>print sequences of dates</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-s, --separator <code>&lt;string&gt;</code>: separator character (defaults to \\n)</li><li>-o, --output_format <code>&lt;string&gt;</code>: prints dates in this format (defaults to %Y-%m-%d)</li><li>-i, --input_format <code>&lt;string&gt;</code>: give argument dates in this format (defaults to %Y-%m-%d)</li><li>-b, --begin_date <code>&lt;string&gt;</code>: beginning date range</li><li>-e, --end_date <code>&lt;string&gt;</code>: ending date</li><li>-n, --increment <code>&lt;integer&gt;</code>: increment dates by this number</li><li>-d, --days <code>&lt;integer&gt;</code>: number of days to print</li><li>-r, --reverse: print dates in reverse</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>print the next 10 days in YYYY-MM-DD format with newline separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> --days <span class="token number">10</span>
</code></pre></div><p>print the previous 10 days in YYYY-MM-DD format with newline separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> --days <span class="token number">10</span> -r
</code></pre></div><p>print the previous 10 days starting today in MM/DD/YYYY format with newline separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> --days <span class="token number">10</span> -o <span class="token string">&#39;%m/%d/%Y&#39;</span> -r
</code></pre></div><p>print the first 10 days in January, 2020</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> -b <span class="token string">&#39;2020-01-01&#39;</span> -e <span class="token string">&#39;2020-01-10&#39;</span>
</code></pre></div><p>print every fifth day between January 1st 2020 and January 31st 2020</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> -b <span class="token string">&#39;2020-01-01&#39;</span> -e <span class="token string">&#39;2020-01-31&#39;</span> -n <span class="token number">5</span>
</code></pre></div><p>starting on May 5th, 2020, print the next 10 days in your locale&#39;s date format, colon separated</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> -o %x -s <span class="token string">&#39;:&#39;</span> -d <span class="token number">10</span> -b <span class="token string">&#39;2020-05-01&#39;</span>
</code></pre></div>`,18),p=[o];function r(i,c){return s(),n("div",null,p)}var d=a(t,[["render",r],["__file","seq-date.html.vue"]]);export{d as default};
