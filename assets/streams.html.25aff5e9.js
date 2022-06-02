import{_ as o,r as t,o as r,c as p,a as s,b as c,w as d,e,d as a}from"./app.9011b7da.js";const l={},u=e(`<h1 id="streams" tabindex="-1"><a class="header-anchor" href="#streams" aria-hidden="true">#</a> Streams</h1><p>Streams ass\xEDncronas formam a base de como a informa\xE7\xE3o trafega de um lado do pipeline para o outro. Isso permite que o Nu trabalhe com comandos internos, comandos externos e plugins de uma forma relativamente cont\xEDnua.</p><p>Existem dois tipos fundamentais de streams no Nu: InputStream e OutputStream</p><h2 id="inputstream" tabindex="-1"><a class="header-anchor" href="#inputstream" aria-hidden="true">#</a> InputStream</h2><p>Vamos ver o tipo InputStream mais pr\xF3ximo:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token class-name">BoxStream</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;static</span><span class="token punctuation">,</span> <span class="token class-name">Tagged</span><span class="token operator">&lt;</span><span class="token class-name">Value</span><span class="token operator">&gt;&gt;</span>
</code></pre></div>`,6),i=a("\xC9 uma stream ass\xEDncrona que vai enviar um "),m=s("code",null,"Tagged<Value>",-1),k=a(" no comando. Para mais informa\xE7\xF5es sobre tagging, veja no cap\xEDtulo de "),h=a("metadados"),g=a("."),v=e(`<h2 id="outputstream" tabindex="-1"><a class="header-anchor" href="#outputstream" aria-hidden="true">#</a> OutputStream</h2><p>Similar ao InputStream a cima, um OutputStream vai retornar valores de um comando:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token class-name">BoxStream</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;static</span><span class="token punctuation">,</span> <span class="token class-name">ReturnValue</span><span class="token operator">&gt;</span>
</code></pre></div><p>Onde um ReturnValue \xE9:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">type</span> <span class="token type-definition class-name">ReturnValue</span> <span class="token operator">=</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">ReturnSuccess</span><span class="token punctuation">,</span> <span class="token class-name">ShellError</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>E um ReturnSuccess \xE9:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">ReturnSuccess</span> <span class="token punctuation">{</span>
    <span class="token class-name">Value</span><span class="token punctuation">(</span><span class="token class-name">Tagged</span><span class="token operator">&lt;</span><span class="token class-name">Value</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Action</span><span class="token punctuation">(</span><span class="token class-name">CommandAction</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Por que o OutputStream \xE9 diferente do InputStream? Isso ocorre devido as diferentes necessidades de cada ponta (entrada e sa\xEDda) da stream. No momento em que os dados estiverem dispon\xEDveis no comando, j\xE1 foi realizada a verifica\xE7\xE3o de poss\xEDveis erros, ent\xE3o \xE9 esperado que seja uma stream pura de dados.</p><p>Por outro lado, OutputStreams devem ser capazes de retornar dois outros tipos de dado al\xE9m dos valores: erros e a\xE7\xF5es.</p><h3 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h3><p>Erros que forem passados para a stream v\xE3o ser detectados como valores que s\xE3o copiados de uma stream para a outra. Assim que o erro for detectado, a stream vai ser parada e o erro informado.</p><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h3><p>Uma a\xE7\xE3o se difere de um valor, pois enquanto um valor \xE9 um peda\xE7o de dado que ser\xE1 visto pelo pr\xF3ximo comando no pipeline, uma a\xE7\xE3o \xE9 algo destinado apenas para o ambiente de execu\xE7\xE3o interno do Nu. A\xE7\xF5es mudam o estado do shell, por exemplo, ao mudar o diret\xF3rio corrente, mudando o shell atual, atualizando tabelas, e assim por diante.</p>`,13);function f(_,x){const n=t("RouterLink");return r(),p("div",null,[u,s("p",null,[i,m,k,c(n,{to:"/pt-BR/contributor-book/metadados.html"},{default:d(()=>[h]),_:1}),g]),v])}var b=o(l,[["render",f],["__file","streams.html.vue"]]);export{b as default};
