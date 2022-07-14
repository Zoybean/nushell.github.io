import{_ as a,r as l,o as r,c as h,a as e,b as n,w as s,e as i,d as t}from"./app.6aea604c.js";const c={},d=i(`<h1 id="shells-in-shells" tabindex="-1"><a class="header-anchor" href="#shells-in-shells" aria-hidden="true">#</a> Shells in shells</h1><h2 id="working-in-multiple-directories" tabindex="-1"><a class="header-anchor" href="#working-in-multiple-directories" aria-hidden="true">#</a> Working in multiple directories</h2><p>While it&#39;s common to work in one directory, it can be handy to work in multiple places at the same time. For this, Nu offers the concept of &quot;shells&quot;. As the name implies, they&#39;re a way of running multiple shells in one, allowing you to quickly jump between working directories and more.</p><p>To get started, let&#39;s enter a directory:</p><div class="language-text ext-text"><pre class="language-text"><code>/home/jonathant/Source/nushell(main)&gt; enter ../book
/home/jonathant/Source/book(main)&gt; ls
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502 name               \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 404.html           \u2502 File \u2502  429 B \u2502 2 hours ago
  1 \u2502 CONTRIBUTING.md    \u2502 File \u2502  955 B \u2502 2 hours ago
  2 \u2502 Gemfile            \u2502 File \u2502 1.1 KB \u2502 2 hours ago
  3 \u2502 Gemfile.lock       \u2502 File \u2502 6.9 KB \u2502 2 hours ago
</code></pre></div>`,5),u=t("Entering is similar to changing directories (as we saw with the "),m=e("code",null,"cd",-1),g=t(" command). This allows you to jump into a directory to work in it. Instead of changing the directory, we now are in two directories. To see this more clearly, we can use the "),p=e("code",null,"shells",-1),_=t(" command to list the current directories we have active:"),w=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`/home/jonathan/Source/book(main)> shells
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 active \u2502    name    \u2502          path
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 false  \u2502 filesystem \u2502 /home/jt/Source/nushell
 1 \u2502 true   \u2502 filesystem \u2502 /home/jt/Source/book
 2 \u2502 false  \u2502 filesystem \u2502 /home/jt/Source/music
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

`)])],-1),f=t("The "),x=e("code",null,"shells",-1),k=t(' command shows us there are three shells currently active: our original "nushell" source directory and now this new "book" directory.'),y=i(`<p>We can jump between these shells with the <code>n</code>, <code>p</code> and <code>g</code> shortcuts, short for &quot;next&quot;, &quot;previous&quot; and &quot;goto&quot;:</p><div class="language-text ext-text"><pre class="language-text"><code>/home/jonathant/Source/book(main)&gt; n
/home/jonathant/Source/nushell(main)&gt; p
/home/jonathant/Source/book(main)&gt; g 2
/home/jonathant/Source/music(main)&gt;
</code></pre></div><p>We can see the directory changing, but we&#39;re always able to get back to a previous directory we were working on. This allows us to work in multiple directories in the same session.</p><h2 id="exiting-the-shell" tabindex="-1"><a class="header-anchor" href="#exiting-the-shell" aria-hidden="true">#</a> Exiting the shell</h2><p>You can leave a shell you have <code>enter</code>ed using the <code>exit</code> command. If this is the last open shell, Nu will quit.</p><p>You can always quit Nu, even if multiple shells are active by passing the <code>--now</code> flag to the exit command. Like so: <code>exit --now</code></p>`,6);function b(v,j){const o=l("RouterLink");return r(),h("div",null,[d,e("p",null,[u,m,g,n(o,{to:"/book/commands/shells.html"},{default:s(()=>[p]),_:1}),_]),w,e("p",null,[f,n(o,{to:"/book/commands/shells.html"},{default:s(()=>[x]),_:1}),k]),y])}var q=a(c,[["render",b],["__file","shells_in_shells.html.vue"]]);export{q as default};