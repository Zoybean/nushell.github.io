import{_ as s,o as n,c as a,e}from"./app.9011b7da.js";const t={},p=e(`<p>Converts table data into csv text.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502   \u2502 name       \u2502 path</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 X \u2502 filesystem \u2502 /home/shaurya
 <span class="token number">1</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Pictures
 <span class="token number">2</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Desktop
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells <span class="token operator">|</span> to csv
 ,name,path
X,filesystem,/home/shaurya
 ,filesystem,/home/shaurya/Pictures
 ,filesystem,/home/shaurya/Desktop
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> caco3_plastics.csv
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 importer     \u2502 shipper      \u2502 tariff_item \u2502 name         \u2502 origin   \u2502 shipped_at \u2502 arrived_at \u2502 net_weight \u2502 fob_price \u2502 cif_price \u2502 cif_per_net_</span>
   \u2502              \u2502              \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502 weight
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 PLASTICOS    \u2502 S A REVERTE  \u2502 <span class="token number">2509000000</span>  \u2502 CARBONATO DE \u2502 SPAIN    \u2502 <span class="token number">18</span>/03/2016 \u2502 <span class="token number">17</span>/04/2016 \u2502 <span class="token number">81,000</span>.00  \u2502 <span class="token number">14,417</span>.58 \u2502 <span class="token number">18,252</span>.34 \u2502 <span class="token number">0.23</span>
   \u2502 RIVAL CIA    \u2502              \u2502             \u2502 CALCIO TIPO  \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 LTDA         \u2502              \u2502             \u2502 CALCIPORE    \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 <span class="token number">160</span> T AL     \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">1</span> \u2502 MEXICHEM     \u2502 OMYA ANDINA  \u2502 <span class="token number">2836500000</span>  \u2502 CARBONATO    \u2502 COLOMBIA \u2502 07/07/2016 \u2502 <span class="token number">10</span>/07/2016 \u2502 <span class="token number">26,000</span>.00  \u2502 <span class="token number">7,072</span>.00  \u2502 <span class="token number">8,127</span>.18  \u2502 <span class="token number">0.31</span>
   \u2502 ECUADOR S.A. \u2502 S A          \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">2</span> \u2502 PLASTIAZUAY  \u2502 SA REVERTE   \u2502 <span class="token number">2836500000</span>  \u2502 CARBONATO DE \u2502 SPAIN    \u2502 <span class="token number">27</span>/07/2016 \u2502 09/08/2016 \u2502 <span class="token number">81,000</span>.00  \u2502 <span class="token number">8,100</span>.00  \u2502 <span class="token number">11,474</span>.55 \u2502 <span class="token number">0.14</span>
   \u2502 SA           \u2502              \u2502             \u2502 CALCIO       \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">3</span> \u2502 PLASTICOS    \u2502 AND          \u2502 <span class="token number">2836500000</span>  \u2502 CALCIUM      \u2502 TURKEY   \u2502 04/10/2016 \u2502 <span class="token number">11</span>/11/2016 \u2502 <span class="token number">100,000</span>.00 \u2502 <span class="token number">17,500</span>.00 \u2502 <span class="token number">22,533</span>.75 \u2502 <span class="token number">0.23</span>
   \u2502 RIVAL CIA    \u2502 ENDUSTRIYEL  \u2502             \u2502 CARBONATE    \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 LTDA         \u2502 HAMMADDELER  \u2502             \u2502 ANADOLU      \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502 DIS TCARET   \u2502             \u2502 ANDCARB CT-1 \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502 LTD.STI.     \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">4</span> \u2502 QUIMICA      \u2502 SA REVERTE   \u2502 <span class="token number">2836500000</span>  \u2502 CARBONATO DE \u2502 SPAIN    \u2502 <span class="token number">24</span>/06/2016 \u2502 <span class="token number">12</span>/07/2016 \u2502 <span class="token number">27,000</span>.00  \u2502 <span class="token number">3,258</span>.90  \u2502 <span class="token number">5,585</span>.00  \u2502 <span class="token number">0.21</span>
   \u2502 COMERCIAL    \u2502              \u2502             \u2502 CALCIO       \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 QUIMICIAL    \u2502              \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 CIA. LTDA.   \u2502              \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">5</span> \u2502 PICA         \u2502 OMYA ANDINA  \u2502 <span class="token number">3824909999</span>  \u2502 CARBONATO DE \u2502 COLOMBIA \u2502 01/01/1900 \u2502 <span class="token number">18</span>/01/2016 \u2502 <span class="token number">66,500</span>.00  \u2502 <span class="token number">12,635</span>.00 \u2502 <span class="token number">18,670</span>.52 \u2502 <span class="token number">0.28</span>
   \u2502 PLASTICOS    \u2502 S.A          \u2502             \u2502 CALCIO       \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 INDUSTRIALES \u2502              \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 C.A.         \u2502              \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">6</span> \u2502 PLASTIQUIM   \u2502 OMYA ANDINA  \u2502 <span class="token number">3824909999</span>  \u2502 CARBONATO DE \u2502 COLOMBIA \u2502 01/01/1900 \u2502 <span class="token number">25</span>/10/2016 \u2502 <span class="token number">33,000</span>.00  \u2502 <span class="token number">6,270</span>.00  \u2502 <span class="token number">9,999</span>.00  \u2502 <span class="token number">0.30</span>
   \u2502 S.A.         \u2502 S.A NIT      \u2502             \u2502 CALCIO       \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502 <span class="token number">830.027</span>.386- \u2502             \u2502 RECUBIERTO   \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502 <span class="token number">6</span>            \u2502             \u2502 CON ACIDO    \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 ESTEARICO    \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 OMYA CARB 1T \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 CG BBS <span class="token number">1000</span>  \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">7</span> \u2502 QUIMICOS     \u2502 SIBELCO      \u2502 <span class="token number">3824909999</span>  \u2502 CARBONATO DE \u2502 COLOMBIA \u2502 01/11/2016 \u2502 03/11/2016 \u2502 <span class="token number">52,000</span>.00  \u2502 <span class="token number">8,944</span>.00  \u2502 <span class="token number">13,039</span>.05 \u2502 <span class="token number">0.25</span>
   \u2502 ANDINOS      \u2502 COLOMBIA SAS \u2502             \u2502 CALCIO       \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 QUIMANDI     \u2502              \u2502             \u2502 RECUBIERTO   \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 S.A.         \u2502              \u2502             \u2502              \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
 <span class="token number">8</span> \u2502 TIGRE        \u2502 OMYA ANDINA  \u2502 <span class="token number">3824909999</span>  \u2502 CARBONATO DE \u2502 COLOMBIA \u2502 01/01/1900 \u2502 <span class="token number">28</span>/10/2016 \u2502 <span class="token number">66,000</span>.00  \u2502 <span class="token number">11,748</span>.00 \u2502 <span class="token number">18,216</span>.00 \u2502 <span class="token number">0.28</span>
   \u2502 ECUADOR S.A. \u2502 S.A NIT      \u2502             \u2502 CALCIO       \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502 ECUATIGRE    \u2502 <span class="token number">830.027</span>.386- \u2502             \u2502 RECUBIERTO   \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502 <span class="token number">6</span>            \u2502             \u2502 CON ACIDO    \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 ESTEARICO    \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 OMYACARB 1T  \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
   \u2502              \u2502              \u2502             \u2502 CG BPA <span class="token number">25</span> NO \u2502          \u2502            \u2502            \u2502            \u2502           \u2502           \u2502
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> caco3_plastics.csv <span class="token operator">|</span> to csv
importer,shipper,tariff_item,name,origin,shipped_at,arrived_at,net_weight,fob_price,cif_price,cif_per_net_weight
PLASTICOS RIVAL CIA LTDA,S A REVERTE,2509000000,CARBONATO DE CALCIO TIPO CALCIPORE <span class="token number">160</span> T AL,SPAIN,18/03/2016,17/04/2016,<span class="token string">&quot;81,000.00&quot;</span>,<span class="token string">&quot;14,417.58&quot;</span>,<span class="token string">&quot;18,252.34&quot;</span>,0.23
MEXICHEM ECUADOR S.A.,OMYA ANDINA S A,2836500000,CARBONATO,COLOMBIA,07/07/2016,10/07/2016,<span class="token string">&quot;26,000.00&quot;</span>,<span class="token string">&quot;7,072.00&quot;</span>,<span class="token string">&quot;8,127.18&quot;</span>,0.31
PLASTIAZUAY SA,SA REVERTE,2836500000,CARBONATO DE CALCIO,SPAIN,27/07/2016,09/08/2016,<span class="token string">&quot;81,000.00&quot;</span>,<span class="token string">&quot;8,100.00&quot;</span>,<span class="token string">&quot;11,474.55&quot;</span>,0.14
PLASTICOS RIVAL CIA LTDA,AND ENDUSTRIYEL HAMMADDELER DIS TCARET LTD.STI.,2836500000,CALCIUM CARBONATE ANADOLU ANDCARB CT-1,TURKEY,04/10/2016,11/11/2016,<span class="token string">&quot;100,000.00&quot;</span>,<span class="token string">&quot;17,500.00&quot;</span>,<span class="token string">&quot;22,533.75&quot;</span>,0.23
QUIMICA COMERCIAL QUIMICIAL CIA. LTDA.,SA REVERTE,2836500000,CARBONATO DE CALCIO,SPAIN,24/06/2016,12/07/2016,<span class="token string">&quot;27,000.00&quot;</span>,<span class="token string">&quot;3,258.90&quot;</span>,<span class="token string">&quot;5,585.00&quot;</span>,0.21
PICA PLASTICOS INDUSTRIALES C.A.,OMYA ANDINA S.A,3824909999,CARBONATO DE CALCIO,COLOMBIA,01/01/1900,18/01/2016,<span class="token string">&quot;66,500.00&quot;</span>,<span class="token string">&quot;12,635.00&quot;</span>,<span class="token string">&quot;18,670.52&quot;</span>,0.28
PLASTIQUIM S.A.,OMYA ANDINA S.A NIT <span class="token number">830.027</span>.386-6,3824909999,CARBONATO DE CALCIO RECUBIERTO CON ACIDO ESTEARICO OMYA CARB 1T CG BBS <span class="token number">1000</span>,COLOMBIA,01/01/1900,25/10/2016,<span class="token string">&quot;33,000.00&quot;</span>,<span class="token string">&quot;6,270.00&quot;</span>,<span class="token string">&quot;9,999.00&quot;</span>,0.30
QUIMICOS ANDINOS QUIMANDI S.A.,SIBELCO COLOMBIA SAS,3824909999,CARBONATO DE CALCIO RECUBIERTO,COLOMBIA,01/11/2016,03/11/2016,<span class="token string">&quot;52,000.00&quot;</span>,<span class="token string">&quot;8,944.00&quot;</span>,<span class="token string">&quot;13,039.05&quot;</span>,0.25
TIGRE ECUADOR S.A. ECUATIGRE,OMYA ANDINA S.A NIT <span class="token number">830.027</span>.386-6,3824909999,CARBONATO DE  CALCIO RECUBIERTO CON ACIDO ESTEARICO OMYACARB 1T CG BPA <span class="token number">25</span> NO,COLOMBIA,01/01/1900,28/10/2016,<span class="token string">&quot;66,000.00&quot;</span>,<span class="token string">&quot;11,748.00&quot;</span>,<span class="token string">&quot;18,216.00&quot;</span>,0.28
</code></pre></div><p>To use a character other than &#39;,&#39; to separate records, use <code>--separator</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502   \u2502 name       \u2502 path</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 X \u2502 filesystem \u2502 /home/shaurya
 <span class="token number">1</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Pictures
 <span class="token number">2</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Desktop
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells <span class="token operator">|</span> to csv --separator <span class="token string">&#39;;&#39;</span>
 <span class="token punctuation">;</span>name,path
X<span class="token punctuation">;</span>filesystem<span class="token punctuation">;</span>/home/shaurya
 <span class="token punctuation">;</span>filesystem<span class="token punctuation">;</span>/home/shaurya/Pictures
 <span class="token punctuation">;</span>filesystem<span class="token punctuation">;</span>/home/shaurya/Desktop
</code></pre></div><p>The string &#39;\\t&#39; can be used to separate on tabs. Note that this is the same as using the to tsv command.</p><p>Newlines &#39;\\n&#39; are not acceptable separators.</p><p>Note that separators are currently provided as strings and need to be wrapped in quotes.</p><p>It is also considered an error to use a separator greater than one char:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> pets.txt <span class="token operator">|</span> from csv --separator <span class="token string">&#39;123&#39;</span>
error: Expected a single separator char from --separator
- shell:1:37
<span class="token number">1</span> <span class="token operator">|</span> <span class="token function">open</span> pets.txt <span class="token operator">|</span> from csv --separator <span class="token string">&#39;123&#39;</span>
  <span class="token operator">|</span>                                      ^^^^^ requires a single character string input
</code></pre></div>`,14),o=[p];function r(c,l){return n(),a("div",null,o)}var u=s(t,[["render",r],["__file","to-csv.html.vue"]]);export{u as default};
