import{_ as e,o,c as a,e as i}from"./app.aa868a80.js";const s={},r=i('<h1 id="philosophy" tabindex="-1"><a class="header-anchor" href="#philosophy" aria-hidden="true">#</a> Philosophy</h1><h2 id="core-values" tabindex="-1"><a class="header-anchor" href="#core-values" aria-hidden="true">#</a> Core Values</h2><p>Nu&#39;s core value is that working in a shell should be fun. To support this, we believe that:</p><ul><li>A modern shell should be designed for usability and ergonomics. <strong>Above all else, Nu should be fun to use.</strong></li><li>It should provide great informative errors messages when a command will not succeed correctly. This is critically important. A fun shell gives <strong>clear, actionable errors</strong>.</li><li>It should be built around supporting casual use, as this is the majority of use in a shell, even by experienced users. Building a shell that is <strong>fun for casual use makes a fun shell for everyone</strong>.</li><li>Nu supports experimentation and <strong>growing ideas from experiments to programs</strong>. The ability to evolve ideas to one-liners, scripts, and then to programs is a key role a shell plays. To support this, Nu builds on the idea of composable commands that work on a shared set of datatypes.</li></ul><h2 id="non-goals" tabindex="-1"><a class="header-anchor" href="#non-goals" aria-hidden="true">#</a> Non-goals</h2><ul><li><em>Optimal performance</em>. While we care about performance, the focus on performance should be in service of making Nu more usable and enjoyable to use. Best performance on micro-benchmarks is a non-goal.</li><li><em>Strictness</em>. We want to help users write good scripts, but we should focus on helping them write correct scripts with good errors and good documentation.</li><li><em>POSIX-compliance</em>. Nu intentionally optimizes for a pleasant experience over matching how commandline programs work in a POSIX-compliant way. It&#39;s important to be able to interop between Nu commands and external commands, but maintaining strict compatibility is a non-goal.</li><li><em>Paradigm adherence</em>. Nu looks at the shell space flexibly, and borrows good ideas where possible from functional programming, systems programming, OOP, and more. Following any particular paradigm rigidly does not serve the goals of the Nu project.</li></ul><h2 id="basic-design" tabindex="-1"><a class="header-anchor" href="#basic-design" aria-hidden="true">#</a> Basic Design</h2><p>The core of the Nu design is the data model. Commands largely follow in service of making it easy to create data, to work with data, and to view data. One of the visible pieces of this work is the pipeline, which borrows heavily from the original Unix ideas of connecting simple programs together into more complex commands. Nu takes this Unix philosophy and extends it from only strings to the wider data set that is more common in modern programming languages.</p>',8),t=[r];function n(l,h){return o(),a("div",null,t)}var c=e(s,[["render",n],["__file","philosophy.html.vue"]]);export{c as default};
