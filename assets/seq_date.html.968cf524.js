import{_ as n,u as t,o as r,c as o,a,t as s,d as i,e as p}from"./app.aa868a80.js";const d={computed:{frontmatter(){return t().value}}},c={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=i(),h={style:{"white-space":"pre-wrap"}},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; seq date --separator --output-format --input-format --begin-date --end-date --increment --days --reverse</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--separator {string}</code>: separator character (defaults to \\n)</li><li><code>--output-format {string}</code>: prints dates in this format (defaults to %Y-%m-%d)</li><li><code>--input-format {string}</code>: give argument dates in this format (defaults to %Y-%m-%d)</li><li><code>--begin-date {string}</code>: beginning date range</li><li><code>--end-date {string}</code>: ending date</li><li><code>--increment {int}</code>: increment dates by this number</li><li><code>--days {int}</code>: number of days to print</li><li><code>--reverse</code>: print dates in reverse</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>print the next 10 days in YYYY-MM-DD format with newline separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> --days <span class="token number">10</span>
</code></pre></div><p>print the previous 10 days in YYYY-MM-DD format with newline separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> --days <span class="token number">10</span> -r
</code></pre></div><p>print the previous 10 days starting today in MM/DD/YYYY format with newline separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> --days <span class="token number">10</span> -o <span class="token string">&#39;%m/%d/%Y&#39;</span> -r
</code></pre></div><p>print the first 10 days in January, 2020</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> -b <span class="token string">&#39;2020-01-01&#39;</span> -e <span class="token string">&#39;2020-01-10&#39;</span>
</code></pre></div><p>print every fifth day between January 1st 2020 and January 31st 2020</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> -b <span class="token string">&#39;2020-01-01&#39;</span> -e <span class="token string">&#39;2020-01-31&#39;</span> -n <span class="token number">5</span>
</code></pre></div><p>starting on May 5th, 2020, print the next 10 days in your locale&#39;s date format, colon separated</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> -o %x -s <span class="token string">&#39;:&#39;</span> -d <span class="token number">10</span> -b <span class="token string">&#39;2020-05-01&#39;</span>
</code></pre></div>`,17);function f(m,k,b,v,_,e){return r(),o("div",null,[a("h1",c,[l,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),g])}var x=n(d,[["render",f],["__file","seq_date.html.vue"]]);export{x as default};
