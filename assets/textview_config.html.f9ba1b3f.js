import{_ as s,r as o,o as r,c as d,a as e,b as n,d as t,e as i}from"./app.aa868a80.js";const p={},l=e("h1",{id:"textview-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#textview-config","aria-hidden":"true"},"#"),t(" textview config")],-1),c=t("The configuration for textview, which is used to autoview text files, uses "),h={href:"https://docs.rs/bat/0.15.4/bat/struct.PrettyPrinter.html",target:"_blank",rel:"noopener noreferrer"},u=t("bat"),g=t(". The textview configuration will "),f=e("strong",null,"not",-1),k=t(" use any existing "),_=e("code",null,"bat",-1),m=t(" configuration you may have."),b=i(`<h2 id="configuration-points-and-defaults" tabindex="-1"><a class="header-anchor" href="#configuration-points-and-defaults" aria-hidden="true">#</a> Configuration Points and Defaults</h2><table><thead><tr><th>config point</th><th>definition</th><th>implemented</th></tr></thead><tbody><tr><td>term_width</td><td>The character width of the terminal (default: autodetect)</td><td>yes</td></tr><tr><td>tab_width</td><td>The width of tab characters (default: None - do not turn tabs to spaces)</td><td>yes</td></tr><tr><td>colored_output</td><td>Whether or not the output should be colorized (default: true)</td><td>yes</td></tr><tr><td>true_color</td><td>Whether or not to output 24bit colors (default: true)</td><td>yes</td></tr><tr><td>header</td><td>Whether to show a header with the file name</td><td>yes</td></tr><tr><td>line_numbers</td><td>Whether to show line numbers</td><td>yes</td></tr><tr><td>grid</td><td>Whether to paint a grid, separating line numbers, git changes and the code</td><td>yes</td></tr><tr><td>vcs_modification_markers</td><td>Whether to show modification markers for VCS changes. This has no effect if the git feature is not activated.</td><td>yes</td></tr><tr><td>snip</td><td>Whether to show &quot;snip&quot; markers between visible line ranges (default: no)</td><td>yes</td></tr><tr><td>wrapping_mode</td><td>Text wrapping mode (default: do not wrap), options (Character, NoWrapping)</td><td>yes</td></tr><tr><td>use_italics</td><td>Whether or not to use ANSI italics (default: off)</td><td>yes</td></tr><tr><td>paging_mode</td><td>If and how to use a pager (default: no paging), options (Always, QuitIfOneScreen, Never)</td><td>yes</td></tr><tr><td>pager</td><td>Specify the command to start the pager (default: use &quot;less&quot;)</td><td>yes</td></tr><tr><td>line_ranges</td><td>Specify the lines that should be printed (default: all)</td><td>no</td></tr><tr><td>highlight</td><td>Specify a line that should be highlighted (default: none). This can be called multiple times to highlight more than one line. See also: highlight_range.</td><td>no</td></tr><tr><td>highlight_range</td><td>Specify a range of lines that should be highlighted (default: none). This can be called multiple times to highlight more than one range of lines.</td><td>no</td></tr><tr><td>theme</td><td>Specify the highlighting theme (default: OneHalfDark)</td><td>yes</td></tr></tbody></table><h2 id="example-textview-configuration-for-config-toml" tabindex="-1"><a class="header-anchor" href="#example-textview-configuration-for-config-toml" aria-hidden="true">#</a> Example textview configuration for <code>config.toml</code></h2><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">textview</span><span class="token punctuation">]</span>
<span class="token key property">term_width</span> <span class="token punctuation">=</span> <span class="token string">&quot;default&quot;</span>
<span class="token key property">tab_width</span> <span class="token punctuation">=</span> <span class="token number">4</span>
<span class="token key property">colored_output</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">true_color</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">header</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">line_numbers</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
<span class="token key property">grid</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
<span class="token key property">vcs_modification_markers</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">snip</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">wrapping_mode</span> <span class="token punctuation">=</span> <span class="token string">&quot;NoWrapping&quot;</span>
<span class="token key property">use_italics</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">paging_mode</span> <span class="token punctuation">=</span> <span class="token string">&quot;QuitIfOneScreen&quot;</span>
<span class="token key property">pager</span> <span class="token punctuation">=</span> <span class="token string">&quot;less&quot;</span>
<span class="token key property">theme</span> <span class="token punctuation">=</span> <span class="token string">&quot;TwoDark&quot;</span>
</code></pre></div><h2 id="example-usage" tabindex="-1"><a class="header-anchor" href="#example-usage" aria-hidden="true">#</a> Example Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> src/main.rs
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cat</span> some_file.txt <span class="token operator">|</span> textview
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://www.jonathanturner.org/feed.xml --raw
</code></pre></div><h2 id="help" tabindex="-1"><a class="header-anchor" href="#help" aria-hidden="true">#</a> Help</h2>`,9),y=t("For a more detailed description of the configuration points that textview uses, please visit the "),w=e("code",null,"bat",-1),x=t(" repo at "),v={href:"https://github.com/sharkdp/bat",target:"_blank",rel:"noopener noreferrer"},q=t("https://github.com/sharkdp/bat"),S=t(".");function T(W,N){const a=o("ExternalLinkIcon");return r(),d("div",null,[l,e("p",null,[c,e("a",h,[u,n(a)]),g,f,k,_,m]),b,e("p",null,[y,w,x,e("a",v,[q,n(a)]),S])])}var E=s(p,[["render",T],["__file","textview_config.html.vue"]]);export{E as default};
