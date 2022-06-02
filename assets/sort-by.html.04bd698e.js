import{_ as n,o as s,c as a,e}from"./app.9011b7da.js";const p={},o=e(`<h1 id="sort-by" tabindex="-1"><a class="header-anchor" href="#sort-by" aria-hidden="true">#</a> sort-by</h1><p>The <code>sort-by</code> command sorts the table being displayed in the terminal by a chosen column(s).</p><p><code>sort-by</code> takes multiple arguments (being the names of columns) sorting by each argument in order.</p><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li><code>-i</code>, <code>--insensitive</code>: Sort string-based columns case insensitively</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 name \u2502 type \u2502 readonly \u2502 size   \u2502 accessed       \u2502 modified</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 az   \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">4</span> minutes ago  \u2502 <span class="token number">4</span> minutes ago
 <span class="token number">1</span> \u2502 a    \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">4</span> minutes ago  \u2502 <span class="token number">38</span> minutes ago
 <span class="token number">2</span> \u2502 ad   \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">4</span> minutes ago  \u2502 <span class="token number">4</span> minutes ago
 <span class="token number">3</span> \u2502 ac   \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">4</span> minutes ago  \u2502 <span class="token number">4</span> minutes ago
 <span class="token number">4</span> \u2502 ab   \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">4</span> minutes ago  \u2502 <span class="token number">4</span> minutes ago
 <span class="token number">5</span> \u2502 c    \u2502 File \u2502          \u2502 <span class="token number">102</span> B  \u2502 <span class="token number">35</span> minutes ago \u2502 <span class="token number">35</span> minutes ago
 <span class="token number">6</span> \u2502 d    \u2502 File \u2502          \u2502 <span class="token number">189</span> B  \u2502 <span class="token number">35</span> minutes ago \u2502 <span class="token number">34</span> minutes ago
 <span class="token number">7</span> \u2502 b    \u2502 File \u2502          \u2502 <span class="token number">349</span> B  \u2502 <span class="token number">35</span> minutes ago \u2502 <span class="token number">35</span> minutes ago
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size name
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 name \u2502 type \u2502 readonly \u2502 size   \u2502 accessed       \u2502 modified</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 a    \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">4</span> minutes ago  \u2502 <span class="token number">39</span> minutes ago
 <span class="token number">1</span> \u2502 ab   \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">4</span> minutes ago  \u2502 <span class="token number">4</span> minutes ago
 <span class="token number">2</span> \u2502 ac   \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">4</span> minutes ago  \u2502 <span class="token number">4</span> minutes ago
 <span class="token number">3</span> \u2502 ad   \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">4</span> minutes ago  \u2502 <span class="token number">4</span> minutes ago
 <span class="token number">4</span> \u2502 az   \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">4</span> minutes ago  \u2502 <span class="token number">4</span> minutes ago
 <span class="token number">5</span> \u2502 c    \u2502 File \u2502          \u2502 <span class="token number">102</span> B  \u2502 <span class="token number">36</span> minutes ago \u2502 <span class="token number">35</span> minutes ago
 <span class="token number">6</span> \u2502 d    \u2502 File \u2502          \u2502 <span class="token number">189</span> B  \u2502 <span class="token number">35</span> minutes ago \u2502 <span class="token number">35</span> minutes ago
 <span class="token number">7</span> \u2502 b    \u2502 File \u2502          \u2502 <span class="token number">349</span> B  \u2502 <span class="token number">36</span> minutes ago \u2502 <span class="token number">36</span> minutes ago
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by accessed
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 name \u2502 type \u2502 readonly \u2502 size   \u2502 accessed       \u2502 modified</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 b    \u2502 File \u2502          \u2502 <span class="token number">349</span> B  \u2502 <span class="token number">37</span> minutes ago \u2502 <span class="token number">37</span> minutes ago
 <span class="token number">1</span> \u2502 c    \u2502 File \u2502          \u2502 <span class="token number">102</span> B  \u2502 <span class="token number">37</span> minutes ago \u2502 <span class="token number">37</span> minutes ago
 <span class="token number">2</span> \u2502 d    \u2502 File \u2502          \u2502 <span class="token number">189</span> B  \u2502 <span class="token number">37</span> minutes ago \u2502 <span class="token number">36</span> minutes ago
 <span class="token number">3</span> \u2502 a    \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">6</span> minutes ago  \u2502 <span class="token number">40</span> minutes ago
 <span class="token number">4</span> \u2502 ab   \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">6</span> minutes ago  \u2502 <span class="token number">6</span> minutes ago
 <span class="token number">5</span> \u2502 ac   \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">6</span> minutes ago  \u2502 <span class="token number">6</span> minutes ago
 <span class="token number">6</span> \u2502 ad   \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">5</span> minutes ago  \u2502 <span class="token number">5</span> minutes ago
 <span class="token number">7</span> \u2502 az   \u2502 File \u2502          \u2502  <span class="token number">18</span> B  \u2502 <span class="token number">5</span> minutes ago  \u2502 <span class="token number">5</span> minutes ago
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>Within the Nushell repository...</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by --insensitive name
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 name               \u2502 type \u2502 size     \u2502 modified</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 assets             \u2502 Dir  \u2502    <span class="token number">128</span> B \u2502 <span class="token number">6</span> months ago
  <span class="token number">1</span> \u2502 build.rs           \u2502 File \u2502     <span class="token number">78</span> B \u2502 <span class="token number">5</span> months ago
  <span class="token number">2</span> \u2502 Cargo.lock         \u2502 File \u2502 <span class="token number">118.3</span> KB \u2502 <span class="token number">1</span> hour ago
  <span class="token number">3</span> \u2502 Cargo.toml         \u2502 File \u2502   <span class="token number">5.5</span> KB \u2502 <span class="token number">1</span> hour ago
  <span class="token number">4</span> \u2502 CODE_OF_CONDUCT.md \u2502 File \u2502   <span class="token number">3.4</span> KB \u2502 <span class="token number">1</span> hour ago
  <span class="token number">5</span> \u2502 CONTRIBUTING.md    \u2502 File \u2502   <span class="token number">1.3</span> KB \u2502 <span class="token number">1</span> hour ago
  <span class="token number">6</span> \u2502 crates             \u2502 Dir  \u2502    <span class="token number">832</span> B \u2502 <span class="token number">1</span> hour ago
  <span class="token number">7</span> \u2502 debian             \u2502 Dir  \u2502    <span class="token number">352</span> B \u2502 <span class="token number">6</span> months ago
  <span class="token number">8</span> \u2502 <span class="token function">docker</span>             \u2502 Dir  \u2502    <span class="token number">288</span> B \u2502 <span class="token number">4</span> months ago
  <span class="token number">9</span> \u2502 docs               \u2502 Dir  \u2502    <span class="token number">192</span> B \u2502 <span class="token number">1</span> hour ago
 <span class="token number">10</span> \u2502 features.toml      \u2502 File \u2502    <span class="token number">632</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">11</span> \u2502 images             \u2502 Dir  \u2502    <span class="token number">160</span> B \u2502 <span class="token number">6</span> months ago
 <span class="token number">12</span> \u2502 LICENSE            \u2502 File \u2502   <span class="token number">1.1</span> KB \u2502 <span class="token number">4</span> months ago
 <span class="token number">13</span> \u2502 Makefile.toml      \u2502 File \u2502    <span class="token number">449</span> B \u2502 <span class="token number">6</span> months ago
 <span class="token number">14</span> \u2502 README.build.txt   \u2502 File \u2502    <span class="token number">192</span> B \u2502 <span class="token number">1</span> hour ago
 <span class="token number">15</span> \u2502 README.md          \u2502 File \u2502  <span class="token number">16.0</span> KB \u2502 <span class="token number">1</span> hour ago
 <span class="token number">16</span> \u2502 rustfmt.toml       \u2502 File \u2502     <span class="token number">16</span> B \u2502 <span class="token number">6</span> months ago
 <span class="token number">17</span> \u2502 src                \u2502 Dir  \u2502    <span class="token number">128</span> B \u2502 <span class="token number">1</span> week ago
 <span class="token number">18</span> \u2502 target             \u2502 Dir  \u2502    <span class="token number">160</span> B \u2502 <span class="token number">1</span> day ago
 <span class="token number">19</span> \u2502 tests              \u2502 Dir  \u2502    <span class="token number">192</span> B \u2502 <span class="token number">4</span> months ago
 <span class="token number">20</span> \u2502 TODO.md            \u2502 File \u2502      <span class="token number">0</span> B \u2502 <span class="token number">1</span> week ago
 <span class="token number">21</span> \u2502 wix                \u2502 Dir  \u2502    <span class="token number">128</span> B \u2502 <span class="token number">1</span> hour ago
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Within the Nushell repository...</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by --insensitive <span class="token builtin class-name">type</span> name
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 name               \u2502 type \u2502 size     \u2502 modified</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 assets             \u2502 Dir  \u2502    <span class="token number">128</span> B \u2502 <span class="token number">6</span> months ago
  <span class="token number">1</span> \u2502 crates             \u2502 Dir  \u2502    <span class="token number">832</span> B \u2502 <span class="token number">1</span> hour ago
  <span class="token number">2</span> \u2502 debian             \u2502 Dir  \u2502    <span class="token number">352</span> B \u2502 <span class="token number">6</span> months ago
  <span class="token number">3</span> \u2502 <span class="token function">docker</span>             \u2502 Dir  \u2502    <span class="token number">288</span> B \u2502 <span class="token number">4</span> months ago
  <span class="token number">4</span> \u2502 docs               \u2502 Dir  \u2502    <span class="token number">192</span> B \u2502 <span class="token number">1</span> hour ago
  <span class="token number">5</span> \u2502 images             \u2502 Dir  \u2502    <span class="token number">160</span> B \u2502 <span class="token number">6</span> months ago
  <span class="token number">6</span> \u2502 src                \u2502 Dir  \u2502    <span class="token number">128</span> B \u2502 <span class="token number">1</span> week ago
  <span class="token number">7</span> \u2502 target             \u2502 Dir  \u2502    <span class="token number">160</span> B \u2502 <span class="token number">1</span> day ago
  <span class="token number">8</span> \u2502 tests              \u2502 Dir  \u2502    <span class="token number">192</span> B \u2502 <span class="token number">4</span> months ago
  <span class="token number">9</span> \u2502 wix                \u2502 Dir  \u2502    <span class="token number">128</span> B \u2502 <span class="token number">1</span> hour ago
 <span class="token number">10</span> \u2502 build.rs           \u2502 File \u2502     <span class="token number">78</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">11</span> \u2502 Cargo.lock         \u2502 File \u2502 <span class="token number">118.3</span> KB \u2502 <span class="token number">1</span> hour ago
 <span class="token number">12</span> \u2502 Cargo.toml         \u2502 File \u2502   <span class="token number">5.5</span> KB \u2502 <span class="token number">1</span> hour ago
 <span class="token number">13</span> \u2502 CODE_OF_CONDUCT.md \u2502 File \u2502   <span class="token number">3.4</span> KB \u2502 <span class="token number">1</span> hour ago
 <span class="token number">14</span> \u2502 CONTRIBUTING.md    \u2502 File \u2502   <span class="token number">1.3</span> KB \u2502 <span class="token number">1</span> hour ago
 <span class="token number">15</span> \u2502 features.toml      \u2502 File \u2502    <span class="token number">632</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">16</span> \u2502 LICENSE            \u2502 File \u2502   <span class="token number">1.1</span> KB \u2502 <span class="token number">4</span> months ago
 <span class="token number">17</span> \u2502 Makefile.toml      \u2502 File \u2502    <span class="token number">449</span> B \u2502 <span class="token number">6</span> months ago
 <span class="token number">18</span> \u2502 README.build.txt   \u2502 File \u2502    <span class="token number">192</span> B \u2502 <span class="token number">1</span> hour ago
 <span class="token number">19</span> \u2502 README.md          \u2502 File \u2502  <span class="token number">16.0</span> KB \u2502 <span class="token number">1</span> hour ago
 <span class="token number">20</span> \u2502 rustfmt.toml       \u2502 File \u2502     <span class="token number">16</span> B \u2502 <span class="token number">6</span> months ago
 <span class="token number">21</span> \u2502 TODO.md            \u2502 File \u2502      <span class="token number">0</span> B \u2502 <span class="token number">1</span> week ago
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,13),t=[o];function l(r,m){return s(),a("div",null,t)}var u=n(p,[["render",l],["__file","sort-by.html.vue"]]);export{u as default};
