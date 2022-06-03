import{_ as s,o as n,c as a,e}from"./app.aa868a80.js";const p={},o=e(`<p>splits contents across multiple columns via the separator.</p><p>Syntax: <code>split column &lt;separator&gt; ...args{flags}</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;separator&gt;</code>: string that denotes what separates columns</li><li><code>args</code>: column names to give the new columns. If not specified they will be set to <code>Column1</code> <code>Column2</code> ...</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><pre><code>--collapse-empty
  Removes empty columns
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>If we have file structured like this:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token number">0.12643678160919541</span> <span class="token operator">|</span> <span class="token number">0.6851851851851852</span> <span class="token operator">|</span> <span class="token number">0.273972602739726</span>
<span class="token number">0.28735632183908044</span> <span class="token operator">|</span> <span class="token number">0.09259259259259259</span> <span class="token operator">|</span> <span class="token number">0.6986301369863014</span>
<span class="token number">0.8045977011494253</span> <span class="token operator">|</span> <span class="token number">0.8148148148148148</span> <span class="token operator">|</span> <span class="token number">0.7397260273972602</span>
<span class="token number">0.28735632183908044</span> <span class="token operator">|</span> <span class="token number">0.09259259259259259</span> <span class="token operator">|</span> <span class="token number">0.547945205479452</span>
<span class="token number">0.6896551724137931</span> <span class="token operator">|</span> <span class="token number">0.7037037037037037</span> <span class="token operator">|</span> <span class="token number">1.2465753424657535</span>
<span class="token number">0.6896551724137931</span> <span class="token operator">|</span> <span class="token number">0.8333333333333334</span> <span class="token operator">|</span> <span class="token number">0.4657534246575342</span>
<span class="token number">0.9080459770114943</span> <span class="token operator">|</span> <span class="token number">1.3333333333333333</span> <span class="token operator">|</span> <span class="token number">0.4931506849315068</span>
<span class="token number">0.9310344827586207</span> <span class="token operator">|</span> <span class="token number">1.1296296296296295</span> <span class="token operator">|</span> <span class="token number">0.7123287671232876</span>
<span class="token number">0.3448275862068966</span> <span class="token operator">|</span> <span class="token number">0.018518518518518517</span> <span class="token operator">|</span> <span class="token number">0.6575342465753424</span>
<span class="token number">1.0459770114942528</span> <span class="token operator">|</span> <span class="token number">1.0925925925925926</span> <span class="token operator">|</span> <span class="token number">0.6164383561643836</span>
</code></pre></div><p>We can build a table from it using the <code>split column</code> command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> coordinates.txt <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; | &quot;</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 Column1             \u2502 Column2              \u2502 Column3</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">0.12643678160919541</span> \u2502 <span class="token number">0.6851851851851852</span>   \u2502 <span class="token number">0.273972602739726</span>
 <span class="token number">1</span> \u2502 <span class="token number">0.28735632183908044</span> \u2502 <span class="token number">0.09259259259259259</span>  \u2502 <span class="token number">0.6986301369863014</span>
 <span class="token number">2</span> \u2502 <span class="token number">0.8045977011494253</span>  \u2502 <span class="token number">0.8148148148148148</span>   \u2502 <span class="token number">0.7397260273972602</span>
 <span class="token number">3</span> \u2502 <span class="token number">0.28735632183908044</span> \u2502 <span class="token number">0.09259259259259259</span>  \u2502 <span class="token number">0.547945205479452</span>
 <span class="token number">4</span> \u2502 <span class="token number">0.6896551724137931</span>  \u2502 <span class="token number">0.7037037037037037</span>   \u2502 <span class="token number">1.2465753424657535</span>
 <span class="token number">5</span> \u2502 <span class="token number">0.6896551724137931</span>  \u2502 <span class="token number">0.8333333333333334</span>   \u2502 <span class="token number">0.4657534246575342</span>
 <span class="token number">6</span> \u2502 <span class="token number">0.9080459770114943</span>  \u2502 <span class="token number">1.3333333333333333</span>   \u2502 <span class="token number">0.4931506849315068</span>
 <span class="token number">7</span> \u2502 <span class="token number">0.9310344827586207</span>  \u2502 <span class="token number">1.1296296296296295</span>   \u2502 <span class="token number">0.7123287671232876</span>
 <span class="token number">8</span> \u2502 <span class="token number">0.3448275862068966</span>  \u2502 <span class="token number">0.018518518518518517</span> \u2502 <span class="token number">0.6575342465753424</span>
 <span class="token number">9</span> \u2502 <span class="token number">1.0459770114942528</span>  \u2502 <span class="token number">1.0925925925925926</span>   \u2502 <span class="token number">0.6164383561643836</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>And give names to the columns</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> coordinates.txt <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; | &quot;</span> x y z
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 x                   \u2502 y                    \u2502 z</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">0.12643678160919541</span> \u2502 <span class="token number">0.6851851851851852</span>   \u2502 <span class="token number">0.273972602739726</span>
 <span class="token number">1</span> \u2502 <span class="token number">0.28735632183908044</span> \u2502 <span class="token number">0.09259259259259259</span>  \u2502 <span class="token number">0.6986301369863014</span>
 <span class="token number">2</span> \u2502 <span class="token number">0.8045977011494253</span>  \u2502 <span class="token number">0.8148148148148148</span>   \u2502 <span class="token number">0.7397260273972602</span>
 <span class="token number">3</span> \u2502 <span class="token number">0.28735632183908044</span> \u2502 <span class="token number">0.09259259259259259</span>  \u2502 <span class="token number">0.547945205479452</span>
 <span class="token number">4</span> \u2502 <span class="token number">0.6896551724137931</span>  \u2502 <span class="token number">0.7037037037037037</span>   \u2502 <span class="token number">1.2465753424657535</span>
 <span class="token number">5</span> \u2502 <span class="token number">0.6896551724137931</span>  \u2502 <span class="token number">0.8333333333333334</span>   \u2502 <span class="token number">0.4657534246575342</span>
 <span class="token number">6</span> \u2502 <span class="token number">0.9080459770114943</span>  \u2502 <span class="token number">1.3333333333333333</span>   \u2502 <span class="token number">0.4931506849315068</span>
 <span class="token number">7</span> \u2502 <span class="token number">0.9310344827586207</span>  \u2502 <span class="token number">1.1296296296296295</span>   \u2502 <span class="token number">0.7123287671232876</span>
 <span class="token number">8</span> \u2502 <span class="token number">0.3448275862068966</span>  \u2502 <span class="token number">0.018518518518518517</span> \u2502 <span class="token number">0.6575342465753424</span>
 <span class="token number">9</span> \u2502 <span class="token number">1.0459770114942528</span>  \u2502 <span class="token number">1.0925925925925926</span>   \u2502 <span class="token number">0.6164383561643836</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,13),t=[o];function c(r,l){return n(),a("div",null,t)}var m=s(p,[["render",c],["__file","split-column.html.vue"]]);export{m as default};
