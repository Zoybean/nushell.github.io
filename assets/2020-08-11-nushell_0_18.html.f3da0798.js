import{_ as l,r,o as a,c as h,a as e,b as n,d as t,e as s}from"./app.aa868a80.js";const i={},d=e("h1",{id:"nushell-0-18",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-18","aria-hidden":"true"},"#"),t(" Nushell 0.18")],-1),_=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),c=e("p",null,"Today, we're releasing 0.18 of Nu. The focus of this release was largely to polish what is already there, ensuring that internally parts work together better, are more consistent, and are easier to maintain. We've also added new commands for working with paths, URLs, strings, and lists.",-1),u=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),p=t("Nu 0.18 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.18.1",target:"_blank",rel:"noopener noreferrer"},m=t("pre-built binaries"),g=t(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=t("crates.io"),k=t(". If you have Rust installed you can install it using "),y=e("code",null,"cargo install nu",-1),v=t("."),x=s('<p>If you want more goodies, you can install <code>cargo install nu --features=stable</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><p><em>Please note:</em> as part of last minute changes, we had to bump the first release version of 0.18 to 0.18.1 instead of 0.18.0.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="command-improvements" tabindex="-1"><a class="header-anchor" href="#command-improvements" aria-hidden="true">#</a> Command improvements</h2>',5),N=e("strong",null,"New:",-1),j=t(),T={href:"https://github.com/nushell/nushell/pull/2292",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"reduce",-1),z=t(" command"),I=t(" to reduce a list of values into a value (bailey-layzer)"),B=e("strong",null,"New:",-1),W=t(),V={href:"https://github.com/nushell/nushell/pull/2255",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"path basename",-1),R=t(", "),A=e("code",null,"path extension",-1),C=t(", "),J=e("code",null,"path expand",-1),U=t(" for working with path values (mattyhall)"),D=e("strong",null,"New:",-1),F=t(),M={href:"https://github.com/nushell/nushell/pull/2264",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"path type",-1),S=t(" and "),q=e("code",null,"path exists",-1),G=t(" for more path-related functionality (mattyhall)"),H=e("strong",null,"New:",-1),K=t(),O={href:"https://github.com/nushell/nushell/pull/2262",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"str ltrim",-1),X=t(" and "),Y=e("code",null,"str rtrim",-1),Z=t(" to trim off left-hand and right-hand characters (k-brk)"),$=e("strong",null,"New:",-1),ee=t(),te={href:"https://github.com/nushell/nushell/pull/2269",target:"_blank",rel:"noopener noreferrer"},oe=e("code",null,"str starts-with",-1),ne=t(" and "),se=e("code",null,"str ends-with",-1),le=t(" to check if a string begins or ends with a given substring (k-brk)"),re=e("strong",null,"New:",-1),ae=t(" the "),he={href:"https://github.com/nushell/nushell/pull/2274",target:"_blank",rel:"noopener noreferrer"},ie=e("code",null,"url",-1),de=t(" subcommands"),_e=t(" for dealing with URLs (mattyhall)"),ce=t("The history file path is "),ue={href:"https://github.com/nushell/nushell/pull/2320",target:"_blank",rel:"noopener noreferrer"},pe=t("now configurable"),fe=t(" (Amanita-muscaria)"),me=t("The startup banner can now be "),ge={href:"https://github.com/nushell/nushell/pull/2314",target:"_blank",rel:"noopener noreferrer"},be=t("turned off"),we=t(" (avranju)"),ke=e("code",null,"version",-1),ye=t(" now contains the "),ve={href:"https://github.com/nushell/nushell/pull/2333",target:"_blank",rel:"noopener noreferrer"},xe=t("features"),Ne=t(" that Nu was built with (andrasio)"),je=e("code",null,"math stddev",-1),Te=t(" and "),Le=e("code",null,"math variance",-1),ze=t(" can now "),Ie={href:"https://github.com/nushell/nushell/pull/2310",target:"_blank",rel:"noopener noreferrer"},Be=t("sample the input"),We=t(" (andrasio)"),Ve=e("code",null,"do -i",-1),Ee=t(" will also "),Re={href:"https://github.com/nushell/nushell/pull/2309",target:"_blank",rel:"noopener noreferrer"},Ae=t("ignore stderr output"),Ce=t(" from external commands (jonathandturner)"),Je=e("code",null,"to html",-1),Ue=t(" now has "),De={href:"https://github.com/nushell/nushell/pull/2308",target:"_blank",rel:"noopener noreferrer"},Fe=t("many themes to choose from"),Me=t(" (fdncred)"),Pe=e("code",null,"to html",-1),Se=t(" also now has "),qe={href:"https://github.com/nushell/nushell/pull/2273",target:"_blank",rel:"noopener noreferrer"},Ge=t("list output"),He=t(" (coolshaurya)"),Ke=t("More of the line editor settings are "),Oe={href:"https://github.com/nushell/nushell/pull/2238",target:"_blank",rel:"noopener noreferrer"},Qe=t("now configurable"),Xe=t(" (fdncred)"),Ye=e("code",null,"str to-datetime",-1),Ze=t(" can now "),$e={href:"https://github.com/nushell/nushell/pull/2303",target:"_blank",rel:"noopener noreferrer"},et=t("parse many more date formats"),tt=t(" (nmandery)"),ot=e("code",null,"str collect",-1),nt=t(" now optionally takes "),st={href:"https://github.com/nushell/nushell/pull/2289",target:"_blank",rel:"noopener noreferrer"},lt=t("a separator value"),rt=t(" (coolshaurya)"),at=e("code",null,"histogram",-1),ht=t(" can now "),it={href:"https://github.com/nushell/nushell/pull/2300",target:"_blank",rel:"noopener noreferrer"},dt=t("work with simple values"),_t=t(" (andrasio)"),ct=e("li",null,[e("code",null,"ls -al"),t(" (and "),e("code",null,"ps -l"),t(") are now the preferred way of getting a full listing (JosephTLyons)")],-1),ut=e("code",null,"insert",-1),pt=t(" now "),ft={href:"https://github.com/nushell/nushell/pull/2265",target:"_blank",rel:"noopener noreferrer"},mt=t("takes a block"),gt=t(" to do the work of inserting values (coolshaurya)"),bt=e("h2",{id:"breaking-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),t(" Breaking changes")],-1),wt=e("p",null,[t("The flags for --full in "),e("code",null,"ls"),t(" and "),e("code",null,"ps"),t(" has been changed to --long (-l) to better align with habits from other shells.")],-1),kt=t("Line editor config settings have "),yt={href:"https://github.com/nushell/nushell/pull/2238",target:"_blank",rel:"noopener noreferrer"},vt=t("moved to their own section"),xt=t("."),Nt=s('<h2 id="demo-site-jzaefferer-jonathandturner" tabindex="-1"><a class="header-anchor" href="#demo-site-jzaefferer-jonathandturner" aria-hidden="true">#</a> Demo site (jzaefferer, jonathandturner)</h2><p>There have been a number of improvements to the new wasm-based demo site, including new colors, command improvements, pivoting of long tables, and more.</p><h2 id="bugfixes-fdncred-kornelski-josephtlyons-andrasio-thegedge-jonathandturner-jzaefferer-warrenseine-coolshaurya" tabindex="-1"><a class="header-anchor" href="#bugfixes-fdncred-kornelski-josephtlyons-andrasio-thegedge-jonathandturner-jzaefferer-warrenseine-coolshaurya" aria-hidden="true">#</a> Bugfixes (fdncred, kornelski, JosephTLyons, andrasio, thegedge, jonathandturner, jzaefferer, warrenseine, coolshaurya)</h2><p>Fixed issues with different types of symlinks on Windows, Nu will now used the support app_dirs crate, lots of internal match logic cleanup, internal representation of data summaries got a cleanup, getting ready to add a winget package, the first wave of parser cleanups ahead of future completion work, cleaned up unnecessary extra build steps, new command examples, improvements to the new <code>path</code> command errors, fixed histogram example, and consistency improvements.</p><h1 id="looking-forward" tabindex="-1"><a class="header-anchor" href="#looking-forward" aria-hidden="true">#</a> Looking forward</h1>',5),jt=t("We're nearly to the first birthday for Nu! In the near future, we'll continue to improve completions, work on a possible new "),Tt={href:"https://github.com/nushell/rfcs/pull/3",target:"_blank",rel:"noopener noreferrer"},Lt=t("data frames"),zt=t(" implementation, continuing to push the wasm implementation futher, and more.");function It(Bt,Wt){const o=r("ExternalLinkIcon");return a(),h("div",null,[d,_,c,u,e("p",null,[p,e("a",f,[m,n(o)]),g,e("a",b,[w,n(o)]),k,y,v]),x,e("ul",null,[e("li",null,[N,j,e("a",T,[L,z,n(o)]),I]),e("li",null,[B,W,e("a",V,[E,R,A,C,J,n(o)]),U]),e("li",null,[D,F,e("a",M,[P,S,q,n(o)]),G]),e("li",null,[H,K,e("a",O,[Q,X,Y,n(o)]),Z]),e("li",null,[$,ee,e("a",te,[oe,ne,se,n(o)]),le]),e("li",null,[re,ae,e("a",he,[ie,de,n(o)]),_e]),e("li",null,[ce,e("a",ue,[pe,n(o)]),fe]),e("li",null,[me,e("a",ge,[be,n(o)]),we]),e("li",null,[ke,ye,e("a",ve,[xe,n(o)]),Ne]),e("li",null,[je,Te,Le,ze,e("a",Ie,[Be,n(o)]),We]),e("li",null,[Ve,Ee,e("a",Re,[Ae,n(o)]),Ce]),e("li",null,[Je,Ue,e("a",De,[Fe,n(o)]),Me]),e("li",null,[Pe,Se,e("a",qe,[Ge,n(o)]),He]),e("li",null,[Ke,e("a",Oe,[Qe,n(o)]),Xe]),e("li",null,[Ye,Ze,e("a",$e,[et,n(o)]),tt]),e("li",null,[ot,nt,e("a",st,[lt,n(o)]),rt]),e("li",null,[at,ht,e("a",it,[dt,n(o)]),_t]),ct,e("li",null,[ut,pt,e("a",ft,[mt,n(o)]),gt])]),bt,wt,e("p",null,[kt,e("a",yt,[vt,n(o)]),xt]),Nt,e("p",null,[jt,e("a",Tt,[Lt,n(o)]),zt])])}var Et=l(i,[["render",It],["__file","2020-08-11-nushell_0_18.html.vue"]]);export{Et as default};
