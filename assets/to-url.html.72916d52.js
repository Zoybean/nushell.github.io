import{_ as n,r as t,o,c as p,a as s,b as r,d as a,e as l}from"./app.9011b7da.js";const c={},i=a("Converts table data into "),k={href:"https://url.spec.whatwg.org/#application/x-www-form-urlencoded",target:"_blank",rel:"noopener noreferrer"},m=a("url-encoded text"),h=a("."),u=l(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502   \u2502 name       \u2502 path</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 X \u2502 filesystem \u2502 /home/shaurya
 <span class="token number">1</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Pictures
 <span class="token number">2</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Desktop
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells <span class="token operator">|</span> to url
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 value</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token operator">+=</span>X<span class="token operator">&amp;</span><span class="token assign-left variable">name</span><span class="token operator">=</span>filesystem<span class="token operator">&amp;</span><span class="token assign-left variable">path</span><span class="token operator">=</span>%2Fhome%2Fshaurya
 <span class="token number">1</span> \u2502 <span class="token operator">+=</span>+<span class="token operator">&amp;</span><span class="token assign-left variable">name</span><span class="token operator">=</span>filesystem<span class="token operator">&amp;</span><span class="token assign-left variable">path</span><span class="token operator">=</span>%2Fhome%2Fshaurya%2FPictures
 <span class="token number">2</span> \u2502 <span class="token operator">+=</span>+<span class="token operator">&amp;</span><span class="token assign-left variable">name</span><span class="token operator">=</span>filesystem<span class="token operator">&amp;</span><span class="token assign-left variable">path</span><span class="token operator">=</span>%2Fhome%2Fshaurya%2FDesktop
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> sample.url
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 bread    \u2502 cheese \u2502 meat \u2502 fat
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 baguette \u2502 comt\xE9  \u2502 ham  \u2502 butter
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> sample.url  <span class="token operator">|</span> to url
<span class="token assign-left variable">bread</span><span class="token operator">=</span>baguette<span class="token operator">&amp;</span><span class="token assign-left variable">cheese</span><span class="token operator">=</span>comt%C3%A9<span class="token operator">&amp;</span><span class="token assign-left variable">meat</span><span class="token operator">=</span>ham<span class="token operator">&amp;</span><span class="token assign-left variable">fat</span><span class="token operator">=</span>butter
</code></pre></div>`,5);function d(g,b){const e=t("ExternalLinkIcon");return o(),p("div",null,[s("p",null,[i,s("a",k,[m,r(e)]),h]),u])}var _=n(c,[["render",d],["__file","to-url.html.vue"]]);export{_ as default};
