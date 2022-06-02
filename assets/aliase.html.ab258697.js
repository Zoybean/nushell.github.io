import{_ as n,r as t,o as i,c as s,a as r,b as l,w as d,e as o,d as e}from"./app.9011b7da.js";const c={},u=o(`<h1 id="aliase" tabindex="-1"><a class="header-anchor" href="#aliase" aria-hidden="true">#</a> Aliase</h1><p>Aliase in Nushell bieten eine einfache M\xF6glichkeit, um Texte zur ersetzen. Damit ist es m\xF6glich, einen Kurznamen f\xFCr l\xE4ngere Befehle zu definieren - inklusive der Argumente.</p><p>Beispielsweise kann ein Alias namens <code>ll</code> definiert werden, der den l\xE4ngeren Befehl <code>ls -l</code> ersetzt:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; alias ll = ls -l
</code></pre></div><p>Nun kann der Alias aufgerufen werden:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ll
</code></pre></div><p>Wenn das getan wird, wirkt es, als sei <code>ls -l</code> aufgerufen worden. Das bietet auch die M\xF6glichkeit weitere Parameter anzugeben. So kann auch geschrieben werden:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ll -a
</code></pre></div><p>Das ist \xE4quivalent zu <code>ls -l -a</code>. Deutlich k\xFCrzer.</p><h2 id="persistenz" tabindex="-1"><a class="header-anchor" href="#persistenz" aria-hidden="true">#</a> Persistenz</h2>`,10),h=e("F\xFCr Informationen, um Aliase dauerhaft zu speichern, damit diese immer in Nushell nutzbar sind, kann ein Blick auf das "),g=e("Konfigurationskapitel"),p=e(" geworfen werden.");function f(_,m){const a=t("RouterLink");return i(),s("div",null,[u,r("p",null,[h,l(a,{to:"/de/book/konfiguration.html"},{default:d(()=>[g]),_:1}),p])])}var k=n(c,[["render",f],["__file","aliase.html.vue"]]);export{k as default};
