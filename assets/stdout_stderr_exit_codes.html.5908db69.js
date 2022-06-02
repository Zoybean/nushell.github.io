import{_ as c,r as d,o as l,c as p,a as e,b as o,w as a,e as n,d as s}from"./app.9011b7da.js";const r={},h=n(`<h1 id="\u6807\u51C6\u8F93\u5165\u3001\u8F93\u51FA\u548C\u9000\u51FA\u7801" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u8F93\u5165\u3001\u8F93\u51FA\u548C\u9000\u51FA\u7801" aria-hidden="true">#</a> \u6807\u51C6\u8F93\u5165\u3001\u8F93\u51FA\u548C\u9000\u51FA\u7801</h1><p>Nushell \u548C\u5916\u90E8\u547D\u4EE4\u4E4B\u95F4\u4E92\u64CD\u4F5C\u7684\u4E00\u4E2A\u91CD\u8981\u90E8\u5206\u662F\u4E0E\u6765\u81EA\u5916\u90E8\u7684\u6807\u51C6\u6570\u636E\u6D41\u4E00\u8D77\u5DE5\u4F5C\u3002</p><p>\u8FD9\u4E9B\u91CD\u8981\u6570\u636E\u6D41\u4E2D\u7684\u7B2C\u4E00\u4E2A\u662F\u6807\u51C6\u8F93\u51FA\u6D41(stdout)\u3002</p><h2 id="\u6807\u51C6\u8F93\u51FA\u6D41" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u8F93\u51FA\u6D41" aria-hidden="true">#</a> \u6807\u51C6\u8F93\u51FA\u6D41</h2><p>\u6807\u51C6\u8F93\u51FA\u6D41(stdout)\u662F\u5927\u591A\u6570\u5916\u90E8\u5E94\u7528\u7A0B\u5E8F\u5C06\u6570\u636E\u53D1\u9001\u5230\u7BA1\u9053\u6216\u5C4F\u5E55\u4E0A\u7684\u65B9\u5F0F\u3002\u5982\u679C\u7531\u5916\u90E8\u5E94\u7528\u53D1\u9001\u5230\u5176 stdout \u7684\u6570\u636E\u662F\u7BA1\u9053\u7684\u4E00\u90E8\u5206\uFF0CNushell \u4F1A\u9ED8\u8BA4\u63A5\u6536\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> external <span class="token operator">|</span> str collect
</code></pre></div><p>\u4EE5\u4E0A\u5C06\u8C03\u7528\u540D\u4E3A<code>external</code>\u7684\u5916\u90E8\u547D\u4EE4\uFF0C\u5E76\u5C06 stdout \u8F93\u51FA\u6D41\u91CD\u5B9A\u5411\u5230\u7BA1\u9053\u4E2D\u3002\u6709\u4E86\u8FD9\u4E2A\u91CD\u5B9A\u5411\uFF0CNushell \u5C31\u53EF\u4EE5\u628A\u6570\u636E\u4F20\u9012\u7ED9\u7BA1\u9053\u4E2D\u7684\u4E0B\u4E00\u4E2A\u547D\u4EE4\uFF0C\u8FD9\u91CC\u662F<code>str collect</code>\u3002</p><p>\u5982\u679C\u6CA1\u6709\u7BA1\u9053\uFF0CNushell \u5C06\u4E0D\u505A\u4EFB\u4F55\u91CD\u5B9A\u5411\uFF0C\u5141\u8BB8\u5B83\u76F4\u63A5\u6253\u5370\u5230\u5C4F\u5E55\u4E0A\u3002</p><h2 id="\u6807\u51C6\u9519\u8BEF\u6D41" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u9519\u8BEF\u6D41" aria-hidden="true">#</a> \u6807\u51C6\u9519\u8BEF\u6D41</h2><p>\u53E6\u4E00\u4E2A\u5916\u90E8\u5E94\u7528\u7A0B\u5E8F\u7ECF\u5E38\u7528\u6765\u6253\u5370\u9519\u8BEF\u4FE1\u606F\u7684\u5E38\u89C1\u6D41\u662F\u6807\u51C6\u9519\u8BEF\u6D41(stderr)\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CNushell \u4E0D\u4F1A\u5BF9 stderr \u505A\u4EFB\u4F55\u91CD\u5B9A\u5411\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u4F1A\u9ED8\u8BA4\u6253\u5370\u5230\u5C4F\u5E55\u4E0A\u3002</p><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528<code>do -i { ... }</code>\u6765\u5F3A\u5236 Nushell \u505A\u4E00\u4E2A\u91CD\u5B9A\u5411\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u8C03\u7528\u4E0A\u9762\u7684\u5916\u90E8\u7A0B\u5E8F\u5E76\u91CD\u5B9A\u5411\u5176 stderr\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u5199\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> -i <span class="token punctuation">{</span> external <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u9000\u51FA\u7801" tabindex="-1"><a class="header-anchor" href="#\u9000\u51FA\u7801" aria-hidden="true">#</a> \u9000\u51FA\u7801</h2><p>\u6700\u540E\uFF0C\u5916\u90E8\u547D\u4EE4\u6709\u4E00\u4E2A &quot;\u9000\u51FA\u4EE3\u7801(exit code)&quot;\u3002\u8FD9\u4E9B\u4EE3\u7801\u6709\u52A9\u4E8E\u7ED9\u8C03\u7528\u8005\u4E00\u4E2A\u63D0\u793A\uFF0C\u8BF4\u660E\u8BE5\u547D\u4EE4\u662F\u5426\u8FD0\u884C\u6210\u529F\u3002</p><p>Nushell \u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\u4E4B\u4E00\u8DDF\u8E2A\u6700\u8FD1\u5B8C\u6210\u7684\u5916\u90E8\u547D\u4EE4\u7684\u6700\u540E\u9000\u51FA\u4EE3\u7801\u3002\u7B2C\u4E00\u79CD\u65B9\u5F0F\u662F\u4F7F\u7528<code>LAST_EXIT_CODE</code>\u73AF\u5883\u53D8\u91CF\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> -i <span class="token punctuation">{</span> external <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$env</span>.LAST_EXIT_CODE
</code></pre></div>`,16),i=s("\u7B2C\u4E8C\u79CD\u662F\u4F7F\u7528\u4E00\u4E2A\u53EB\u505A"),u=e("code",null,"complete",-1),_=s("\u7684\u547D\u4EE4\u3002"),k={id:"\u4F7F\u7528-complete-\u547D\u4EE4",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#\u4F7F\u7528-complete-\u547D\u4EE4","aria-hidden":"true"},"#",-1),x=s(" \u4F7F\u7528 "),b=e("code",null,"complete",-1),g=s(" \u547D\u4EE4"),f=e("code",null,"complete",-1),v=s("\u547D\u4EE4\u5141\u8BB8\u4F60\u8FD0\u884C\u4E00\u4E2A\u5916\u90E8\u7A0B\u5E8F\u76F4\u5230\u5B8C\u6210\uFF0C\u5E76\u5C06 stdout, stderr, \u548C\u9000\u51FA\u4EE3\u7801\u6536\u96C6\u5728\u4E00\u6761\u8BB0\u5F55\u4E2D\u3002"),N=s("\u5982\u679C\u6211\u4EEC\u5C1D\u8BD5\u5728\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u6587\u4EF6\u4E0A\u8FD0\u884C\u5916\u90E8\u7684"),w=e("code",null,"cat",-1),T=s("\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230"),E=e("code",null,"complete",-1),q=s("\u5BF9\u6D41\u7684\u5904\u7406\uFF0C\u5305\u62EC\u91CD\u5B9A\u5411\u7684 stderr\uFF1A"),y=n(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> -i <span class="token punctuation">{</span> <span class="token function">cat</span> unknown.txt <span class="token punctuation">}</span> <span class="token operator">|</span> complete
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 stdout    \u2502                                             \u2502
\u2502 stderr    \u2502 cat: unknown.txt: No such <span class="token function">file</span> or directory \u2502
\u2502 exit_code \u2502 <span class="token number">1</span>                                           \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h2 id="\u539F\u59CB\u6D41" tabindex="-1"><a class="header-anchor" href="#\u539F\u59CB\u6D41" aria-hidden="true">#</a> \u539F\u59CB\u6D41</h2><p>\u5728 Nushell \u4E2D\uFF0Cstdout \u548C stderr \u90FD\u8868\u73B0\u4E3A &quot;\u539F\u59CB\u6D41&quot;\u3002\u8FD9\u4E9B\u6D41\u662F\u5B57\u8282\u6D41\uFF0C\u800C\u4E0D\u662F\u7ED3\u6784\u5316\u7684\u6D41\uFF0C\u800C\u540E\u8005\u624D\u662F Nushell \u5185\u90E8\u547D\u4EE4\u6240\u4F7F\u7528\u7684\u3002</p><p>\u56E0\u4E3A\u5B57\u8282\u6D41\u53EF\u80FD\u5F88\u96BE\u5904\u7406\uFF0C\u7279\u522B\u662F\u8003\u8651\u5230\u4F7F\u7528\u8F93\u51FA\u4F5C\u4E3A\u6587\u672C\u6570\u636E\u662F\u5F88\u5E38\u89C1\u7684\uFF0CNushell \u8BD5\u56FE\u5C06\u539F\u59CB\u6D41\u8F6C\u6362\u4E3A\u6587\u672C\u6570\u636E\u3002\u8FD9\u4F7F\u5F97\u5176\u4ED6\u547D\u4EE4\u53EF\u4EE5\u62C9\u53D6\u5916\u90E8\u547D\u4EE4\u7684\u8F93\u51FA\uFF0C\u5E76\u63A5\u6536\u4ED6\u4EEC\u53EF\u4EE5\u8FDB\u4E00\u6B65\u5904\u7406\u7684\u5B57\u7B26\u4E32\u3002</p><p>Nushell \u8BD5\u56FE\u5C06\u6D41\u8F6C\u6362\u4E3A UTF-8 \u6587\u672C\uFF0C\u5982\u679C\u5728\u4EFB\u4F55\u65F6\u5019\u8F6C\u6362\u5931\u8D25\uFF0C\u6D41\u7684\u5176\u4F59\u90E8\u5206\u5C31\u4F1A\u88AB\u5047\u5B9A\u4E3A\u59CB\u7EC8\u662F\u5B57\u8282\u3002</p>`,5),C=s("\u5982\u679C\u4F60\u60F3\u5BF9\u5B57\u8282\u6D41\u7684\u89E3\u7801\u6709\u66F4\u591A\u7684\u63A7\u5236\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 "),L=e("code",null,"decode",-1),V=s(" \u547D\u4EE4\u3002"),B=e("code",null,"decode",-1),S=s("\u547D\u4EE4\u53EF\u4EE5\u63D2\u5165\u5230\u5916\u90E8\u6216\u5176\u4ED6\u539F\u59CB\u6D41\u521B\u5EFA\u547D\u4EE4\u4E4B\u540E\u7684\u7BA1\u9053\u4E2D\uFF0C\u5B83\u5C06\u6839\u636E\u4F60\u7ED9"),j=e("code",null,"decode",-1),A=s("\u7684\u53C2\u6570\u6765\u5904\u7406\u5B57\u8282\u7684\u89E3\u7801\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u6837\u5BF9 shift-jis \u6587\u672C\u8FDB\u884C\u89E3\u7801\uFF1A"),D=n(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>8a 4c<span class="token punctuation">]</span> <span class="token operator">|</span> decode shift-jis
\u8C9D
</code></pre></div>`,1);function I(O,R){const t=d("RouterLink");return l(),p("div",null,[h,e("p",null,[i,o(t,{to:"/book/commands/complete.html"},{default:a(()=>[u]),_:1}),_]),e("h2",k,[m,x,o(t,{to:"/book/commands/complete.html"},{default:a(()=>[b]),_:1}),g]),e("p",null,[o(t,{to:"/book/commands/complete.html"},{default:a(()=>[f]),_:1}),v]),e("p",null,[N,w,T,o(t,{to:"/book/commands/complete.html"},{default:a(()=>[E]),_:1}),q]),y,e("p",null,[C,o(t,{to:"/book/commands/decode.html"},{default:a(()=>[L]),_:1}),V,o(t,{to:"/book/commands/decode.html"},{default:a(()=>[B]),_:1}),S,j,A]),D])}var F=c(r,[["render",I],["__file","stdout_stderr_exit_codes.html.vue"]]);export{F as default};
