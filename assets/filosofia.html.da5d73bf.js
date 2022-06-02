import{_ as e,o as a,c as o,e as r}from"./app.9011b7da.js";const i={},s=r('<h1 id="filosofia" tabindex="-1"><a class="header-anchor" href="#filosofia" aria-hidden="true">#</a> Filosofia</h1><h2 id="principais-valores" tabindex="-1"><a class="header-anchor" href="#principais-valores" aria-hidden="true">#</a> Principais Valores</h2><p>O principal valor do Nu \xE9 que trabalhar em um shell deve ser divertido. Para apoiar isso, n\xF3s acreditamos que:</p><ul><li>Um shell moderno deve ser projetado para ter usabilidade e ergonomia. <strong>Acima de tudo, Nu deve ser divertido de usar.</strong></li><li>Deve oferecer mensagens de erro informativas quando um comando n\xE3o executar corretamente. Isso \xE9 criticamente importante. Um shell divertido fornece <strong>erros claros e acion\xE1veis.</strong></li><li>Deve ser feito visando o uso casual, visto que essa \xE9 a forma mais utilziada de um shell, at\xE9 mesmo por usu\xE1rios experientes. Construir um shell que \xE9 <strong>divertido para o uso casual torna um shell divertido para todo mundo</strong>.</li><li>Nu oferece experimenta\xE7\xE3o e <strong>ideias desenvolvidas de experimentos para programas</strong>. A habilidade de evoluir ideias em uma linha, scripts, e ent\xE3o para programas \xE9 um papel fundamental feito por um shell. Para oferecer isso, Nu parte do princ\xEDpio de comandos compostos que funcionam em um conjunto de tipos de dados compartilhados.</li></ul><h2 id="nao-objetivos" tabindex="-1"><a class="header-anchor" href="#nao-objetivos" aria-hidden="true">#</a> N\xE3o objetivos</h2><ul><li><em>Performance \xF3tima</em>. Apesar de nos preocuparmos com performance, o foco em performance deve ser no servi\xE7o de fazer o Nu mais utiliz\xE1vel e prazeroso de se utilizar. Melhor performance em micro-benchmarks n\xE3o \xE9 um objetivo.</li><li><em>Rigor</em>. N\xF3s queremos ajudar usu\xE1rios a escrever bons scripts, mas devemos focar em ajud\xE1-los a escrever scripts corretos com bons erros e boa documenta\xE7\xE3o.</li><li><em>Conformidade com POSIX</em>. Nu otimiza intencionalmente para uma experi\xEAncia agrad\xE1vel em compara\xE7\xE3o com a forma como os programas de linha de comando funcionam de uma forma compat\xEDvel com POSIX. \xC9 importante ser capaz de interoperar entre comandos Nu e comandos externos, mas manter uma compatibilidade estrita n\xE3o \xE9 um objetivo</li><li><em>Ader\xEAncia de paradigma</em>. Nu observa o espa\xE7o de flexibilidade dos shells, e quando poss\xEDvel busca ideias de programa\xE7\xE3o funcional, programa\xE7\xE3o de sistemas, POO, e mais. Seguir qualquer paradigma de forma r\xEDgida n\xE3o \xE9 um dos objetivos do projeto Nu.</li></ul><h2 id="design-basico" tabindex="-1"><a class="header-anchor" href="#design-basico" aria-hidden="true">#</a> Design B\xE1sico</h2><p>O princ\xEDpio do design de Nu \xE9 o modelo de dados. Em grande parte, os comandos seguem em servi\xE7o para facilitar a cria\xE7\xE3o de dados, o trabalho com dados e a exibi\xE7\xE3o de dados. Uma das pe\xE7as vis\xEDveis desse trabalho \xE9 o pipeline, que se baseia fortemente nas ideias originais do Unix de conectar programas juntos em comandos complexos. Nu usa essa filosofia do Unix e a extende de apenas strings para mais tipos de dados que s\xE3o comuns em linguagens de programa\xE7\xE3o modernas.</p>',8),d=[s];function n(m,t){return a(),o("div",null,d)}var l=e(i,[["render",n],["__file","filosofia.html.vue"]]);export{l as default};
