import{_ as c,r as l,o as d,c as h,a as e,b as n,w as s,e as a,d as o}from"./app.9011b7da.js";const r={},u=a('<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><h2 id="nushell-configuration-with-env-nu-and-config-nu" tabindex="-1"><a class="header-anchor" href="#nushell-configuration-with-env-nu-and-config-nu" aria-hidden="true">#</a> Nushell Configuration with <code>env.nu</code> and <code>config.nu</code></h2><p>Nushell uses a configuration system that loads+runs two Nushell script files at launch time: First, <code>env.nu</code>, then <code>config.nu</code>. Paths to these files can be found by calling <code>echo $nu.env-path</code> and <code>echo $nu.config-path</code>. <code>env.nu</code> is meant to define the environment variables which are then available within <code>config.nu</code>. <code>config.nu</code> can be used to add definitions, aliases, and more to the global namespace.</p>',3),_=o("(You can think of the Nushell config loading sequence as executing two "),g={href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",target:"_blank",rel:"noopener noreferrer"},p=o("REPL"),f=o(" lines on startup: "),m=e("code",null,"source /path/to/env.nu",-1),v=o(" and "),b=e("code",null,"source /path/to/config.nu",-1),x=o(". Therefore, using "),k=e("code",null,"env.nu",-1),w=o(" for environment and "),N=e("code",null,"config.nu",-1),T=o(" for other config is just a convention.)"),y=o("When you launch Nushell without these files set up, Nushell will prompt you to download the "),P={href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"default env.nu",-1),R=o(" and "),A={href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/default_config.nu",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"default config.nu",-1),I=o(". You can browse the default files for default values of environment variables and a list of all configurable settings."),$=a(`<h3 id="configuring-env-config" tabindex="-1"><a class="header-anchor" href="#configuring-env-config" aria-hidden="true">#</a> Configuring <code>$env.config</code></h3><p>Nushell&#39;s main settings are kept in the <code>config</code> environment variable as a record. This record can be created using:</p><div class="language-text ext-text"><pre class="language-text"><code>let-env config = {
  ...
}
</code></pre></div><p>You can also shadow <code>$env.config</code> and update it:</p><div class="language-text ext-text"><pre class="language-text"><code>let-env config = ($env.config | upsert &lt;field name&gt; &lt;field value&gt;)
</code></pre></div><p>By convention, this variable is defined in the <code>config.nu</code> file.</p><h3 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> Environment</h3>`,7),M=o("You can set environment variables for the duration of a Nushell session using "),q=e("code",null,"let-env",-1),E=o(" calls inside the "),L=e("code",null,"env.nu",-1),H=o(" file. For example:"),S=a(`<div class="language-text ext-text"><pre class="language-text"><code>let-env FOO = &#39;BAR&#39;
</code></pre></div><p><em>(Although $env.config is an environment variable, it is still defined by convention inside config.nu.)</em></p><p>These are some important variables to look at for Nushell-specific settings:</p><ul><li><code>LS_COLORS</code>: Sets up colors per file type in ls</li><li><code>PROMPT_COMMAND</code>: Code to execute for setting up the prompt (block or string)</li><li><code>PROMPT_COMMAND_RIGHT</code>: Code to execute for setting up the right prompt (block)</li><li><code>PROMPT_INDICATOR = &quot;\u3009&quot;</code>: The indicator printed after the prompt (by default &quot;&gt;&quot;-like Unicode symbol)</li><li><code>PROMPT_INDICATOR_VI_INSERT = &quot;: &quot;</code></li><li><code>PROMPT_INDICATOR_VI_NORMAL = &quot;\u3009 &quot;</code></li><li><code>PROMPT_MULTILINE_INDICATOR = &quot;::: &quot;</code></li></ul><h3 id="color-config-section" tabindex="-1"><a class="header-anchor" href="#color-config-section" aria-hidden="true">#</a> Color Config section</h3>`,5),B=o("You can learn more about setting up colors and theming in the "),D=o("associated chapter"),V=o("."),Y=e("h2",{id:"configuring-nu-as-a-login-shell",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuring-nu-as-a-login-shell","aria-hidden":"true"},"#"),o(" Configuring Nu as a login shell")],-1),F=e("p",null,[o("To use Nu as a login shell, you'll need to configure the "),e("code",null,"$env"),o(" variable. With this, you'll have enough support to run external commands as a login shell.")],-1),W=e("p",null,"You can build the full set of environment variables by running Nu inside of another shell, like Bash. Once you're in Nu, you can run a command like this:",-1),j=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> env | each { |it| echo $"let-env ($it.name) = '($it.raw)'" } | str collect (char nl)
`)])],-1),U=o("This will print out "),G=e("code",null,"let-env",-1),K=o(" lines, one for each environment variable along with its setting."),z=a(`<p>Next, on some distros you&#39;ll also need to ensure Nu is in the /etc/shells list:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
/usr/bin/screen
/usr/bin/fish
/home/jonathan/.cargo/bin/nu
</code></pre></div><p>With this, you should be able to <code>chsh</code> and set Nu to be your login shell. After a logout, on your next login you should be greeted with a shiny Nu prompt.</p><h3 id="macos-keeping-usr-bin-open-as-open" tabindex="-1"><a class="header-anchor" href="#macos-keeping-usr-bin-open-as-open" aria-hidden="true">#</a> macOS: Keeping <code>/usr/bin/open</code> as <code>open</code></h3>`,4),J=o("Some tools (e.g. Emacs) rely on an "),Q=e("code",null,"open",-1),X=o(" command to open files on Mac. As Nushell has its own "),Z=e("code",null,"open",-1),ee=o(" command which has different semantics and shadows "),oe=e("code",null,"/usr/bin/open",-1),ne=o(", these tools will error out when trying to use it. One way to work around this is to define a custom command for Nushell's "),te=e("code",null,"open",-1),se=o(" and create an alias for the system's "),ie=e("code",null,"open",-1),ae=o(" in your "),le=e("code",null,"config.nu",-1),ce=o(" file like this:"),de=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`def nuopen [arg, --raw (-r)] { if $raw { open -r $arg } else { open $arg } }
alias open = ^open
`)])],-1),he=e("h2",{id:"path-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#path-configuration","aria-hidden":"true"},"#"),o(" PATH configuration")],-1),re=o("To append a path to "),ue={href:"https://en.wikipedia.org/wiki/PATH_(variable)",target:"_blank",rel:"noopener noreferrer"},_e=o("the PATH variable"),ge=o(", you can use "),pe=e("code",null,"let-env",-1),fe=o(" and "),me=e("code",null,"append",-1),ve=o(" in "),be=e("code",null,"env.nu",-1),xe=o(":"),ke=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`let-env PATH = ($env.PATH | append '/some/path')
`)])],-1),we=o("This will append "),Ne=e("code",null,"/some/path",-1),Te=o(" to the end of PATH; you can also use "),ye=e("code",null,"prepend",-1),Pe=o(" to add entries to the start of PATH.");function Oe(Re,Ae){const i=l("ExternalLinkIcon"),t=l("RouterLink");return d(),h("div",null,[u,e("p",null,[e("em",null,[_,e("a",g,[p,n(i)]),f,m,v,b,x,k,w,N,T])]),e("p",null,[y,e("a",P,[O,n(i)]),R,e("a",A,[C,n(i)]),I]),$,e("p",null,[M,n(t,{to:"/book/commands/let-env.html"},{default:s(()=>[q]),_:1}),E,L,H]),S,e("p",null,[B,n(t,{to:"/book/coloring_and_theming.html"},{default:s(()=>[D]),_:1}),V]),Y,F,W,j,e("p",null,[U,n(t,{to:"/book/commands/let-env.html"},{default:s(()=>[G]),_:1}),K]),z,e("p",null,[J,Q,X,n(t,{to:"/book/commands/open.html"},{default:s(()=>[Z]),_:1}),ee,oe,ne,te,se,ie,ae,le,ce]),de,he,e("p",null,[re,e("a",ue,[_e,n(i)]),ge,n(t,{to:"/book/commands/let-env.html"},{default:s(()=>[pe]),_:1}),fe,n(t,{to:"/book/commands/append.html"},{default:s(()=>[me]),_:1}),ve,be,xe]),ke,e("p",null,[we,Ne,Te,n(t,{to:"/book/commands/prepend.html"},{default:s(()=>[ye]),_:1}),Pe])])}var Ie=c(r,[["render",Oe],["__file","configuration.html.vue"]]);export{Ie as default};
