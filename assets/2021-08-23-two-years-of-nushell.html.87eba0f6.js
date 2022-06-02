import{_ as r,r as n,o as i,c as h,a as t,b as o,e as s,d as e}from"./app.9011b7da.js";var l="/assets/two_year_cake.0f2378e2.png",d="/assets/two_year_vscode.6d526dfa.png",c="/assets/two_year_tweet1.ce05bde8.png",u="/assets/two_year_tweet2.e9330245.png",m="/assets/two_year_tweet3.9147be89.png",p="/assets/two_year_tweet4.5857dc08.png",g="/assets/two_year_tweet5.7b131463.png",_="/assets/two_year_stars.e5875dd7.png";const f={},w=s('<h1 id="two-years-of-nushell" tabindex="-1"><a class="header-anchor" href="#two-years-of-nushell" aria-hidden="true">#</a> Two years of Nushell</h1><p><img src="'+l+'" alt="Stock cake photo with a 2"></p><p><em>Happy birthday, Nushell!</em></p><p>Happy birthday, Nushell! Today marks the second year for Nushell since its first public release. We wanted to write a bit about what the last year has meant and share some of the highlights and lowlights along the way.</p><h2 id="focus" tabindex="-1"><a class="header-anchor" href="#focus" aria-hidden="true">#</a> Focus</h2><p>Through out Nushell&#39;s first year, we had faith in the basics behind Nushell but couldn&#39;t guess how it would grow and what it might be able to do. As we progressed through this second year, the project gained a focus: <strong>to be the best tool for interactively working with your system and your data</strong>.</p><p>It&#39;s a high bar to set, but we&#39;re happy to try to achieve that goal. To achieve it, we&#39;re focusing on three different parts of Nushell, each of which deeply connects to the other two.</p><h3 id="nushell-the-language" tabindex="-1"><a class="header-anchor" href="#nushell-the-language" aria-hidden="true">#</a> Nushell, the language</h3><p>Nushell (sometimes shortened to just Nu) is a language that allows you to easily create pipelines for working on structured data. As a language, Nushell has grown considerably over the last year. You&#39;re now able to make your own commands to process data, create aliases, variables, and much much more.</p>',9),b=e("We've started collecting examples to share with each other as Nushell grows and our skill with it grows with it. You can check them out in the "),y={href:"https://github.com/nushell/nu_scripts",target:"_blank",rel:"noopener noreferrer"},k=e("Nu Scripts repo"),v=e("."),N=t("p",null,[t("img",{src:d,alt:"Dark theme vscode showing Nushell"})],-1),x=e("To work with Nushell, we also published a "),j={href:"https://marketplace.visualstudio.com/items?itemName=TheNuProjectContributors.vscode-nushell-lang",target:"_blank",rel:"noopener noreferrer"},z=e("vscode extension"),A=e("."),T=t("h3",{id:"nushell-the-shell",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-the-shell","aria-hidden":"true"},"#"),e(" Nushell, the shell")],-1),W=t("p",null,"From day #1, Nushell has always been intended to work well as a shell. It's even in the name \u{1F642}.",-1),I=e("We've spent a lot of time this year steadily improving areas that make Nushell -- as a shell -- feel better, more stable, and generally easier to use. We've improved integrations with "),S={href:"https://github.com/nushell/nu_scripts/tree/main/virtual_environments",target:"_blank",rel:"noopener noreferrer"},B=e("Python"),G=e(", integrations with tools like "),C={href:"https://github.com/ajeetdsouza/zoxide",target:"_blank",rel:"noopener noreferrer"},D=e("zoxide"),L=e(" and "),P={href:"https://github.com/starship/starship",target:"_blank",rel:"noopener noreferrer"},H=e("starship"),J=e(", and more. That said, as more people have adopted it, we've learned more what regular shell users need. Lots of ideas going into next year as to places that Nushell can work better with the broader range of tools and techniques that commandline users use."),E=t("h3",{id:"nushell-the-data-analysis-tool",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-the-data-analysis-tool","aria-hidden":"true"},"#"),e(" Nushell, the data analysis tool")],-1),O=e("A relatively new aspect of being an interactive tool for working with data is Nushell's recent adoption of supporting dataframes. Dataframes allow users to work with large datasets in an efficient way. Recent versions of Nushell, using dataframes, are able to process and aggregate data from "),F={href:"https://www.nushell.sh/blog/2021-07-13-nushell_0_34.html#dataframes-elferherrera",target:"_blank",rel:"noopener noreferrer"},R=e("5 million line csv files in less than a second"),V=e(". Did we mention dataframes are fast?"),q=t("p",null,"We'll be exploring how best to more-fully integrate dataframes with the rest of the Nushell features in the coming year.",-1),Y=t("h2",{id:"highlights",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#highlights","aria-hidden":"true"},"#"),e(" Highlights")],-1),K=t("h3",{id:"seeing-what-nushell-will-become",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#seeing-what-nushell-will-become","aria-hidden":"true"},"#"),e(" Seeing what Nushell will become")],-1),M=e("With 0.32, we first "),Q={href:"https://www.nushell.sh/blog/2021-06-01-nushell_0_32.html#new-expression-syntax-jt",target:"_blank",rel:"noopener noreferrer"},U=e("got a glimpse of what the Nushell language will become"),X=e(". With 0.34, we saw "),Z={href:"https://www.nushell.sh/blog/2021-07-13-nushell_0_34.html#dataframes-elferherrera",target:"_blank",rel:"noopener noreferrer"},$=e("what data processing could be"),ee=e(". These recent releases help to sketch where Nushell will feel like when it hits 1.0."),te=e("One example that shows this off is the script we use every week to create the This Week in Nu newsletter. As you can see, "),ae={href:"https://github.com/nushell/nu_scripts/blob/main/make_release/this_week_in_nu_release.nu",target:"_blank",rel:"noopener noreferrer"},oe=e("it's a full script"),se=e(" of the sort you might write in Python or Ruby."),re=s('<h3 id="growing-love" tabindex="-1"><a class="header-anchor" href="#growing-love" aria-hidden="true">#</a> Growing love</h3><p>We&#39;re seeing a growing amount of love for Nushell as more people try it and share their experiences. Here are some tweets from the last few weeks:</p><p><img src="'+c+'" alt="Oh damn @nu_shell is awesome. It&#39;s a really powerful advancement over existing shells on unix!"></p><p><img src="'+u+'" alt="The pandas style dataframe feature in nushell is Exploding head\u2665"></p><p><img src="'+m+'" alt="@nu_shell has fundamentally changed the way I interact with data on my computer. It&#39;s no longer a process to get anything out of a csv, etc. It&#39;s just... there. however I want it served up."></p><p><img src="'+p+'" alt="Acabo de probar el @nu_shell y estoy enamorao"></p><p><img src="'+g+'" alt="Nu Shell is amazing. I can\u2019t believe it took me this long to find it."></p><p>The Nushell repo has also felt a recent surge of interest. Since this time last year, the number of stars has nearly doubled!</p><p><img src="'+_+'" alt="image of with the number of GitHub stars doubling over the last year"></p><p><em>Growing interest in Nushell (shown: number of GitHub stars)</em></p><h3 id="nushell-getting-used-for-real-things" tabindex="-1"><a class="header-anchor" href="#nushell-getting-used-for-real-things" aria-hidden="true">#</a> Nushell getting used for real things</h3><p>We&#39;re getting feedback from folks using Nushell about how much time Nushell saves them everyday. One report mentioned that their daily processing of files was cut by as much as 30 minutes! Saving 30 mins per day is an enormous amount, and we&#39;re happy to help.</p>',12),ne=e("Another area where Nushell is getting used is to process "),ie={href:"https://twitter.com/cocoronata",target:"_blank",rel:"noopener noreferrer"},he=e("Covid data in Ecuador"),le=e(" (you can see "),de={href:"https://github.com/cocoronata/ecuacovid-scripts",target:"_blank",rel:"noopener noreferrer"},ce=e("more recent scripts written all in Nushell here"),ue=e(")."),me=s('<h2 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> Contributors</h2><p>As of this post, 280 contributors helped make Nushell what it is today. A <em>big</em> thank you to the contributors who helped us get to this point!</p><p>1ntEgr8, AaronC81, aborruso, acanalis, AdminXVII, aeosynth, aeshirey, agateau, ahkrr, aidanharris, alexshadley, almindor, Aloso, Amanita-muscaria, amitdev, ammkrn, amousa11, andrasio, Andy-Python-Programmer, apatrushev, arashout, ArturKovacs, autophagy, avandesa, avranju, Azgrom, bailey-layzer, baoyachi, BatmanAoD, bbkane, bndbsh, Bocom, Borimino, Br1ght0ne, BradyBromley, brightly-salty, BurNiinTRee, Byron, casidiablo, CBenoit, ccde177b5fb9b8c55078417b4c9fee, charlespierce, chhetripradeep, chrisfinazzo, ChristopherBiscardi, cjpearce, coolshaurya, cristicismas, DangerFunPants, daschl, davidmalcolm, dbofmmbt, defstryker, Delapouite, dependabot[bot], Detegr, devnought, Dietr1ch, diogomafra, dirtybit, DivineGod, djc, dmeijboom, DonnotPanic, drmason13, DrSensor, dywedir, dyxushuai, efx, elferherrera, elichai, EmNudge, eoinkelly, epost, equal-l2, est31, EverlastingBugstopper, fdncred, fhalim, filaretov, Flare576, Garfield96, gdhuper, gilesv, gillespiecd, gonatz, gorogoroumaru, GuillaumeGomez, Gymea, hampuslidin, hdhoang, he4d, hedonihilist, henriiik, HiranmayaGundu, hirschenberger, homburg, iamcodemaker, ibraheemdev, iCodeSometime, iliekturtles, ilius, incrop, ineol, itn3000, Jacobious52, jafriyie1, jakevossen5, jankeromnes, jankoprowski, janosimas, JCavallo, jdvr, jerodsanto, JesterOrNot, jgoday, jinlow, jjshanks, jntrnr, John-Goff, johnae, johnterickson, jonahsnider, JonathanArns, JonnyWalker81, jonstodle, jonstodle-webstep, JosephTLyons, just1a-person, jz448, jzaefferer, k-brk, Kelli314, klnusbaum, kloun, knottio, kornelski, kubouch, kvrhdn, lambdagolem, landaire, lesichkovm, LhKipp, lightclient, lily-mara, lincis, LittleboyHarry, LovecraftianHorror, lpil, luccasmmg, LyesSaadi, marcelocg, MarcoIeni, margguo, matsuu, mattclarke, mattyhall, max-sixty, mcbattirola, mfarberbrodsky, mhmdanas, mike-morr, miller-time, mlbright, moonrise-tk, morbatex, morrme, mvolkmann, naefl, nalpine, nalshihabi, nathom, naufraghi, nespera, neuronull, nibon7, nickgerace, nightscape, NiklasJonsson, nmandery, notryanb, oknozor, onthebridgetonowhere, orf, orientnab, oskarskog, pag4k, palashahuja, Paradiesstaub, phaunt, philip-peterson, piotrek-szczygiel, pka, pontaoski, Porges, prrao87, pulpdrew, quebin31, Qwanve, rabisg0, radekvit, ramonsnir, reaganmcf, realcundo, RedlineTriad, rezural, richardpark-msft, rimathia, ritobanrc, rjboas, rnxpyke, routrohan, RReverser, rrichardson, rtlechow, ryuichi1208, sambordo1, Samboy218, samhedin, samuelvanderwaal, sandorex, schrieveslaach, Sciencentistguy, scrabsha, sdfnz, sebastian-xyz, shaaraddalvi, sholderbach, siedentop, skelly37, smaydew, Sosthene-Guedon, soumil-07, sousajf1, Southclaws, stevenbarragan, stormasm, suzanje, svartalf, Sympatron, syndek, taiki-e, tchak, TechWatching, thegedge, therealprof, tiffany352, tim77, Tiwalun, TrevorAC99, tumdum, tupini07, tw4452852, twe4ked, twitu, u5surf, UltraWelfare, uma0317, utam0k, ve-nt, VincentWo, vladdoster, voanhduy1512, vsoch, vthriller, waldyrious, warrenseine, WatsonThink, watzon, waywardmonkeys, wcarss, wycats, x3rAx, xolve, yaahc, yahsinhuangtw, yanganto, yaymukund, Yethal, ymgyt, zkat</p><h2 id="lowlights" tabindex="-1"><a class="header-anchor" href="#lowlights" aria-hidden="true">#</a> Lowlights</h2><h3 id="completions" tabindex="-1"><a class="header-anchor" href="#completions" aria-hidden="true">#</a> Completions</h3><p>We&#39;ve known for quite a long time that to have a strong shell experience means having strong completions. Shells like fish are an example of what&#39;s possible with completions, and it&#39;s an easy feature to miss if the shell you move to doesn&#39;t support them at the same level.</p><p>In Nushell, we hit a bit of a snag as we built out completions - we had a bug in the language. It was one of those nasty ones that makes scripts hard to debug, variables leaking from one scope to another. We knew that it&#39;d make creating custom completions far harder.</p>',7),pe=e("We've been hard at work on a "),ge={href:"https://github.com/jntrnr/engine-q",target:"_blank",rel:"noopener noreferrer"},_e=e("rebuild of important parts of Nushell"),fe=e(" for correctness that hopes to address this. Once it lands, we'll be able to turn our collective attention to standing up a full completion design that allows users to write completions in Nushell."),we=t("h3",{id:"forgotten-dreams",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#forgotten-dreams","aria-hidden":"true"},"#"),e(" Forgotten dreams")],-1),be=e("For the last two years, we've been hoping to spend more time on making Nushell work well in other environments. Projects like our "),ye={href:"https://github.com/nushell/nu_jupyter",target:"_blank",rel:"noopener noreferrer"},ke=e("Jupyter notebook experiment"),ve=e(" show a tiny piece of what might be possible, but we haven't yet been able to commit time to create a more complete implementation (or our own notebook)."),Ne=t("h2",{id:"looking-ahead",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),e(" Looking ahead")],-1),xe=t("p",null,"Over the next year, as we close the gaps in functionality to bring Nushell up to a higher level of polish as a language, shell, and data system, we'll be taking a hard look at what will become part of the 1.0 release. While there isn't a date set, yet, will be looking at the feedback from users telling us how well various features work and which should be included in Nushell's first stable release.",-1),je=e("If you're interested in helping get us there, come join us in the "),ze={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},Ae=e("discord"),Te=e(" and "),We={href:"https://github.com/nushell/nushell/",target:"_blank",rel:"noopener noreferrer"},Ie=e("repo"),Se=e(" and let's see just how good Nushell can be."),Be=t("p",null,[t("em",null,"Cake photo from: https://depositphotos.com/stock-photos/birthday-cake-2.html")],-1);function Ge(Ce,De){const a=n("ExternalLinkIcon");return i(),h("div",null,[w,t("p",null,[b,t("a",y,[k,o(a)]),v]),N,t("p",null,[x,t("a",j,[z,o(a)]),A]),T,W,t("p",null,[I,t("a",S,[B,o(a)]),G,t("a",C,[D,o(a)]),L,t("a",P,[H,o(a)]),J]),E,t("p",null,[O,t("a",F,[R,o(a)]),V]),q,Y,K,t("p",null,[M,t("a",Q,[U,o(a)]),X,t("a",Z,[$,o(a)]),ee]),t("p",null,[te,t("a",ae,[oe,o(a)]),se]),re,t("p",null,[ne,t("a",ie,[he,o(a)]),le,t("a",de,[ce,o(a)]),ue]),me,t("p",null,[pe,t("a",ge,[_e,o(a)]),fe]),we,t("p",null,[be,t("a",ye,[ke,o(a)]),ve]),Ne,xe,t("p",null,[je,t("a",ze,[Ae,o(a)]),Te,t("a",We,[Ie,o(a)]),Se]),Be])}var Pe=r(f,[["render",Ge],["__file","2021-08-23-two-years-of-nushell.html.vue"]]);export{Pe as default};
