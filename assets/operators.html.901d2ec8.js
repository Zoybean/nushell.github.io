import{_ as e,o,c as a,e as d}from"./app.aa868a80.js";const t={},c=d('<h1 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h1><p>Nushell supports the following operators:</p><p>| Operator | Description | | -------- | ------------------------------- | --- | --------------------- | | <code>+</code> | add | | <code>-</code> | subtract | | <code>*</code> | multiply | | <code>/</code> | divide | | <code>**</code> | exponentiation (power) | | <code>mod</code> | modulo | | <code>==</code> | equal | | <code>!=</code> | not equal | | <code>&lt;</code> | less than | | <code>&lt;=</code> | less than or equal | | <code>&gt;</code> | greater than | | <code>&gt;=</code> | greater than or equal | | <code>=~</code> | string contains another | | <code>!~</code> | string does not contain another | | <code>in</code> | value in list | | <code>not-in</code> | value not in list | | <code>&amp;&amp;</code> | and two Boolean values | | <code> | |</code> | or two Boolean values |</p><p>Parentheses can be used for grouping to specify evaluation order or for calling commands and using the results in an expression.</p><p>Commands that take a boolean expression, such as <code>where</code>, <code>keep while</code>, <code>keep until</code>, <code>skip while</code>, and <code>skip until</code>, are automatically evaluated in shorthand math mode.</p><p>For example, <code>let a = 2; let b = 3; $a * $b</code> outputs <code>6</code>.</p>',6),n=[c];function r(s,l){return o(),a("div",null,n)}var p=e(t,[["render",r],["__file","operators.html.vue"]]);export{p as default};
