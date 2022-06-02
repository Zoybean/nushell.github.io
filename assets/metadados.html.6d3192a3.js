import{_ as a,o as e,c as o,e as r}from"./app.9011b7da.js";const s={},d=r('<h1 id="metadados" tabindex="-1"><a class="header-anchor" href="#metadados" aria-hidden="true">#</a> Metadados</h1><p>Todos os valores que fluem para/de um comando no Nu s\xE3o marcados com metadados. Voc\xEA ver\xE1 isso no c\xF3digo-fonte normalmente como um <code>Tagged&lt;Value&gt;</code>.</p><p>Apesar de os metadados que s\xE3o monitorados ainda est\xE3o em fase inicial, esperamos expandir isso conforme o Nu amadurecer. Atualmente, existem dois tipos de metadados monitorados em cada valor:</p><h2 id="anchor" tabindex="-1"><a class="header-anchor" href="#anchor" aria-hidden="true">#</a> Anchor</h2><p>Anchor representa a localiza\xE7\xE3o de origem de um valor. Se o valor foi carregado de um arquivo, vai ser o nome do arquivo. Se foi carregado de uma URL, vai ser a URL, e assim por diante.</p><h2 id="span" tabindex="-1"><a class="header-anchor" href="#span" aria-hidden="true">#</a> Span</h2><p>Um Span s\xE3o as localiza\xE7\xF5es de in\xEDcio e fim do valor que foi criado ou referenciado na linha de comando. Eles s\xE3o normalmente vistos como o underline abaixo de uma mensagem de erro.</p><p>Enquanto spans de linguagens de programa\xE7\xE3o tradicionalmente carregam tamb\xE9m o arquivo de origem do span, aqui assumimos que um span While spans from programming languages traditionally also carry the file the span came from, aqui assumimos que o span sempre abrange um valor referenciado na linha de comando, em vez de em um arquivo de origem. Quando o Nu for capaz de executar seus pr\xF3prios arquivos fonte, isso provavelmente vai precisar ser revisado.</p>',8),i=[d];function n(m,t){return e(),o("div",null,i)}var u=a(s,[["render",n],["__file","metadados.html.vue"]]);export{u as default};
