import{_ as r,r as n,o as l,c,a as e,b as d,w as i,e as s,d as t}from"./app.aa868a80.js";const p={},u=s(`<h1 id="nu-\u7684\u914D\u8272\u548C\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#nu-\u7684\u914D\u8272\u548C\u4E3B\u9898" aria-hidden="true">#</a> Nu \u7684\u914D\u8272\u548C\u4E3B\u9898</h1><p>Nushell \u754C\u9762\u7684\u8BB8\u591A\u90E8\u5206\u90FD\u53EF\u4EE5\u5B9A\u5236\u5B83\u4EEC\u7684\u989C\u8272\uFF0C\u6240\u6709\u8FD9\u4E9B\u90FD\u53EF\u4EE5\u5728<code>config.nu</code>\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u3002\u5982\u679C\u4F60\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u770B\u5230 hash/hashtag/pound \u7B26\u53F7 <code>#</code>\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u540E\u9762\u7684\u6587\u5B57\u88AB\u6CE8\u91CA\u6389\u4E86\u3002</p><ol><li>\u8868\u7684\u8FB9\u6846</li><li>\u539F\u59CB\u503C</li><li>\u5F62\u72B6\uFF08\u8FD9\u662F\u547D\u4EE4\u884C\u7684\u8BED\u6CD5\uFF09</li><li>\u63D0\u793A</li><li>LS_COLORS</li></ol><h2 id="\u8868\u683C\u8FB9\u6846" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C\u8FB9\u6846" aria-hidden="true">#</a> \u8868\u683C\u8FB9\u6846</h2><hr><p>\u8868\u7684\u8FB9\u6846\u7531<code>config.nu</code>\u4E2D\u7684<code>table_mode</code>\u8BBE\u7F6E\u6765\u63A7\u5236\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    table_mode: rounded
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u76EE\u524D<code>table_mode</code>\u7684\u53EF\u80FD\u9009\u9879\uFF1A</p><ul><li><code>rounded</code> # \u5F53\u7136\u4E86\uFF0C\u8FD9\u4E2A\u662F\u6700\u597D\u7684 \u{1F603}</li><li><code>basic</code></li><li><code>compact</code></li><li><code>compact_double</code></li><li><code>light</code></li><li><code>thin</code></li><li><code>with_love</code></li><li><code>reinforced</code></li><li><code>heavy</code></li><li><code>none</code></li><li><code>other</code></li></ul><h3 id="\u989C\u8272\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272\u7B26\u53F7" aria-hidden="true">#</a> \u989C\u8272\u7B26\u53F7</h3><hr><ul><li><code>r</code> - \u6807\u51C6\u989C\u8272\u7EA2\u8272\u7684\u7F29\u5199</li><li><code>rb</code> - \u6807\u51C6\u989C\u8272\u7EA2\u8272\u7684\u7F29\u5199\uFF0C\u5E26\u6709\u7C97\u4F53\u5C5E\u6027</li><li><code>red</code> - \u6807\u51C6\u989C\u8272\u7EA2\u8272</li><li><code>red_bold</code> - \u5E26\u6709\u7C97\u4F53\u5C5E\u6027\u7684\u6807\u51C6\u989C\u8272\u7EA2\u8272</li><li><code>&quot;#ff0000&quot;</code> - &quot;#hex&quot; \u683C\u5F0F\u7684\u989C\u8272\uFF1A\u524D\u666F\u8272\u4E3A\u7EA2\u8272\uFF08\u9700\u8981\u5F15\u53F7\uFF09</li><li><code>{ fg: &quot;#ff0000&quot; bg: &quot;#0000ff&quot; attr: b }</code> - \u5B8C\u6574 &quot;#hex&quot; \u683C\u5F0F\uFF1A\u524D\u666F\u4E3A\u7EA2\u8272\uFF0C\u80CC\u666F\u4E3A\u84DD\u8272\u7684 &quot;#hex&quot; \u683C\u5F0F\uFF0C\u5C5E\u6027\u4E3A\u7C97\u4F53\u7F29\u5199\u3002</li></ul><h3 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h3><hr><table><thead><tr><th>\u7F16\u7801</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>l</td><td>\u95EA\u70C1</td></tr><tr><td>b</td><td>\u52A0\u7C97</td></tr><tr><td>d</td><td>\u6697\u6DE1</td></tr><tr><td>h</td><td>\u9690\u85CF</td></tr><tr><td>i</td><td>\u659C\u4F53</td></tr><tr><td>r</td><td>\u53CD\u8F6C</td></tr><tr><td>s</td><td>\u5220\u9664</td></tr><tr><td>u</td><td>\u4E0B\u5212\u7EBF</td></tr><tr><td>n</td><td>\u65E0</td></tr><tr><td></td><td>\u9ED8\u8BA4\u4E3A\u65E0</td></tr></tbody></table><h3 id="\u6807\u51C6\u989C\u8272-\u548C\u7F29\u5199" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u989C\u8272-\u548C\u7F29\u5199" aria-hidden="true">#</a> &quot;\u6807\u51C6\u989C\u8272&quot;\u548C\u7F29\u5199</h3><table><thead><tr><th>\u4EE3\u7801</th><th>\u540D\u79F0</th></tr></thead><tbody><tr><td>g</td><td>green</td></tr><tr><td>gb</td><td>green_bold</td></tr><tr><td>gu</td><td>green_underline</td></tr><tr><td>gi</td><td>green_italic</td></tr><tr><td>gd</td><td>green_dimmed</td></tr><tr><td>gr</td><td>green_reverse</td></tr><tr><td>gbl</td><td>green_blink</td></tr><tr><td>gst</td><td>green_strike</td></tr><tr><td>lg</td><td>light_green</td></tr><tr><td>lgb</td><td>light_green_bold</td></tr><tr><td>lgu</td><td>light_green_underline</td></tr><tr><td>lgi</td><td>light_green_italic</td></tr><tr><td>lgd</td><td>light_green_dimmed</td></tr><tr><td>lgr</td><td>light_green_reverse</td></tr><tr><td>lgbl</td><td>light_green_blink</td></tr><tr><td>lgst</td><td>light_green_strike</td></tr><tr><td>r</td><td>red</td></tr><tr><td>rb</td><td>red_bold</td></tr><tr><td>ru</td><td>red_underline</td></tr><tr><td>ri</td><td>red_italic</td></tr><tr><td>rd</td><td>red_dimmed</td></tr><tr><td>rr</td><td>red_reverse</td></tr><tr><td>rbl</td><td>red_blink</td></tr><tr><td>rst</td><td>red_strike</td></tr><tr><td>lr</td><td>light_red</td></tr><tr><td>lrb</td><td>light_red_bold</td></tr><tr><td>lru</td><td>light_red_underline</td></tr><tr><td>lri</td><td>light_red_italic</td></tr><tr><td>lrd</td><td>light_red_dimmed</td></tr><tr><td>lrr</td><td>light_red_reverse</td></tr><tr><td>lrbl</td><td>light_red_blink</td></tr><tr><td>lrst</td><td>light_red_strike</td></tr><tr><td>u</td><td>blue</td></tr><tr><td>ub</td><td>blue_bold</td></tr><tr><td>uu</td><td>blue_underline</td></tr><tr><td>ui</td><td>blue_italic</td></tr><tr><td>ud</td><td>blue_dimmed</td></tr><tr><td>ur</td><td>blue_reverse</td></tr><tr><td>ubl</td><td>blue_blink</td></tr><tr><td>ust</td><td>blue_strike</td></tr><tr><td>lu</td><td>light_blue</td></tr><tr><td>lub</td><td>light_blue_bold</td></tr><tr><td>luu</td><td>light_blue_underline</td></tr><tr><td>lui</td><td>light_blue_italic</td></tr><tr><td>lud</td><td>light_blue_dimmed</td></tr><tr><td>lur</td><td>light_blue_reverse</td></tr><tr><td>lubl</td><td>light_blue_blink</td></tr><tr><td>lust</td><td>light_blue_strike</td></tr><tr><td>b</td><td>black</td></tr><tr><td>bb</td><td>black_bold</td></tr><tr><td>bu</td><td>black_underline</td></tr><tr><td>bi</td><td>black_italic</td></tr><tr><td>bd</td><td>black_dimmed</td></tr><tr><td>br</td><td>black_reverse</td></tr><tr><td>bbl</td><td>black_blink</td></tr><tr><td>bst</td><td>black_strike</td></tr><tr><td>ligr</td><td>light_gray</td></tr><tr><td>ligrb</td><td>light_gray_bold</td></tr><tr><td>ligru</td><td>light_gray_underline</td></tr><tr><td>ligri</td><td>light_gray_italic</td></tr><tr><td>ligrd</td><td>light_gray_dimmed</td></tr><tr><td>ligrr</td><td>light_gray_reverse</td></tr><tr><td>ligrbl</td><td>light_gray_blink</td></tr><tr><td>ligrst</td><td>light_gray_strike</td></tr><tr><td>y</td><td>yellow</td></tr><tr><td>yb</td><td>yellow_bold</td></tr><tr><td>yu</td><td>yellow_underline</td></tr><tr><td>yi</td><td>yellow_italic</td></tr><tr><td>yd</td><td>yellow_dimmed</td></tr><tr><td>yr</td><td>yellow_reverse</td></tr><tr><td>ybl</td><td>yellow_blink</td></tr><tr><td>yst</td><td>yellow_strike</td></tr><tr><td>ly</td><td>light_yellow</td></tr><tr><td>lyb</td><td>light_yellow_bold</td></tr><tr><td>lyu</td><td>light_yellow_underline</td></tr><tr><td>lyi</td><td>light_yellow_italic</td></tr><tr><td>lyd</td><td>light_yellow_dimmed</td></tr><tr><td>lyr</td><td>light_yellow_reverse</td></tr><tr><td>lybl</td><td>light_yellow_blink</td></tr><tr><td>lyst</td><td>light_yellow_strike</td></tr><tr><td>p</td><td>purple</td></tr><tr><td>pb</td><td>purple_bold</td></tr><tr><td>pu</td><td>purple_underline</td></tr><tr><td>pi</td><td>purple_italic</td></tr><tr><td>pd</td><td>purple_dimmed</td></tr><tr><td>pr</td><td>purple_reverse</td></tr><tr><td>pbl</td><td>purple_blink</td></tr><tr><td>pst</td><td>purple_strike</td></tr><tr><td>lp</td><td>light_purple</td></tr><tr><td>lpb</td><td>light_purple_bold</td></tr><tr><td>lpu</td><td>light_purple_underline</td></tr><tr><td>lpi</td><td>light_purple_italic</td></tr><tr><td>lpd</td><td>light_purple_dimmed</td></tr><tr><td>lpr</td><td>light_purple_reverse</td></tr><tr><td>lpbl</td><td>light_purple_blink</td></tr><tr><td>lpst</td><td>light_purple_strike</td></tr><tr><td>c</td><td>cyan</td></tr><tr><td>cb</td><td>cyan_bold</td></tr><tr><td>cu</td><td>cyan_underline</td></tr><tr><td>ci</td><td>cyan_italic</td></tr><tr><td>cd</td><td>cyan_dimmed</td></tr><tr><td>cr</td><td>cyan_reverse</td></tr><tr><td>cbl</td><td>cyan_blink</td></tr><tr><td>cst</td><td>cyan_strike</td></tr><tr><td>lc</td><td>light_cyan</td></tr><tr><td>lcb</td><td>light_cyan_bold</td></tr><tr><td>lcu</td><td>light_cyan_underline</td></tr><tr><td>lci</td><td>light_cyan_italic</td></tr><tr><td>lcd</td><td>light_cyan_dimmed</td></tr><tr><td>lcr</td><td>light_cyan_reverse</td></tr><tr><td>lcbl</td><td>light_cyan_blink</td></tr><tr><td>lcst</td><td>light_cyan_strike</td></tr><tr><td>w</td><td>white</td></tr><tr><td>wb</td><td>white_bold</td></tr><tr><td>wu</td><td>white_underline</td></tr><tr><td>wi</td><td>white_italic</td></tr><tr><td>wd</td><td>white_dimmed</td></tr><tr><td>wr</td><td>white_reverse</td></tr><tr><td>wbl</td><td>white_blink</td></tr><tr><td>wst</td><td>white_strike</td></tr><tr><td>dgr</td><td>dark_gray</td></tr><tr><td>dgrb</td><td>dark_gray_bold</td></tr><tr><td>dgru</td><td>dark_gray_underline</td></tr><tr><td>dgri</td><td>dark_gray_italic</td></tr><tr><td>dgrd</td><td>dark_gray_dimmed</td></tr><tr><td>dgrr</td><td>dark_gray_reverse</td></tr><tr><td>dgrbl</td><td>dark_gray_blink</td></tr><tr><td>dgrst</td><td>dark_gray_strike</td></tr></tbody></table><h3 id="hex-\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#hex-\u683C\u5F0F" aria-hidden="true">#</a> <code>&quot;#hex&quot;</code> \u683C\u5F0F</h3><hr><p>&quot;#hex&quot; \u683C\u5F0F\u662F\u4F60\u901A\u5E38\u770B\u5230\u7684\u4E00\u79CD\u8868\u793A\u989C\u8272\u7684\u65B9\u5F0F\u3002\u5B83\u7531\u7B80\u5355\u7684<code>#</code>\u5B57\u7B26\u4EE5\u53CA\u540E\u9762\u7684 6 \u4E2A\u5B57\u7B26\u7EC4\u6210\u3002\u524D\u4E24\u4E2A\u4EE3\u8868 <code>\u7EA2\u8272</code>\uFF0C\u63A5\u4E0B\u6765\u4E24\u4E2A\u4EE3\u8868 <code>\u7EFF\u8272</code>\uFF0C\u6700\u540E\u4E24\u4E2A\u4EE3\u8868 <code>\u84DD\u8272</code>\u3002\u91CD\u8981\u7684\u662F\uFF0C\u8FD9\u4E2A\u5B57\u7B26\u4E32\u5FC5\u987B\u7528\u5F15\u53F7\u5305\u56F4\uFF0C\u5426\u5219 Nushell \u4F1A\u8BA4\u4E3A\u5B83\u662F\u4E00\u4E2A\u88AB\u6CE8\u91CA\u6389\u7684\u5B57\u7B26\u4E32\u3002</p><p>\u4F8B\u5B50\uFF1A\u7EA2\u8272\u7684\u4E3B\u8981\u989C\u8272\u662F &quot;#ff0000&quot; \u6216 &quot;#FF0000&quot;\u3002\u5B57\u6BCD\u7684\u5927\u5199\u548C\u5C0F\u5199\u6CA1\u6709\u533A\u522B\u3002</p><p>\u8FD9\u79CD <code>&quot;#hex&quot;</code>\u683C\u5F0F\u5141\u8BB8\u6211\u4EEC\u4E3A Nushell \u7684\u4E0D\u540C\u90E8\u5206\u6307\u5B9A 24 \u4F4D\u771F\u5F69\u8272\u8C03\u3002</p><h2 id="\u5B8C\u6574-hex-\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574-hex-\u683C\u5F0F" aria-hidden="true">#</a> <code>\u5B8C\u6574 &quot;#hex&quot;</code> \u683C\u5F0F</h2><hr><p><code>\u5B8C\u6574 &quot;#hex&quot;</code>\u683C\u5F0F\u662F\u5BF9 <code>&quot;#hex&quot;</code> \u683C\u5F0F\u7684\u4E00\u79CD\u6539\u8FDB\uFF0C\u4F46\u5141\u8BB8\u4EBA\u4EEC\u5728\u4E00\u884C\u4E2D\u6307\u5B9A\u524D\u666F\u8272\u3001\u80CC\u666F\u8272\u548C\u5C5E\u6027\u3002</p><p>\u4F8B\u5982\uFF1A<code>{ fg: &quot;#ff0000&quot; bg: &quot;#0000ff&quot; attr: b }</code></p><ul><li>\u524D\u666F\u8272\u7EA2\u8272\u4E3A &quot;#hex&quot; \u683C\u5F0F</li><li>\u80CC\u666F\u8272\u84DD\u8272\u4E3A &quot;#hex&quot; \u683C\u5F0F</li><li>\u5C5E\u6027\u4E3A\u52A0\u7C97\u7684\u7F29\u5199\u5F62\u5F0F</li></ul><h2 id="\u539F\u59CB\u503C" tabindex="-1"><a class="header-anchor" href="#\u539F\u59CB\u503C" aria-hidden="true">#</a> \u539F\u59CB\u503C</h2><hr><p>\u539F\u59CB\u503C\u662F\u50CF<code>int</code>\u548C<code>string</code>\u8FD9\u6837\u7684\u503C\u3002\u539F\u59CB\u503C\u548C\u5F62\u72B6\u53EF\u4EE5\u7528\u4E0A\u9762\u770B\u5230\u7684\u5404\u79CD\u989C\u8272\u7B26\u53F7\u6765\u8BBE\u7F6E\u3002</p><p>\u8FD9\u662F\u5F53\u524D\u7684\u539F\u59CB\u503C\u5217\u8868\u3002\u5E76\u975E\u6240\u6709\u8FD9\u4E9B\u90FD\u662F\u53EF\u914D\u7F6E\u7684\u3002\u53EF\u914D\u7F6E\u7684\u88AB\u6807\u8BB0\u4E3A <code>*</code>\u3002</p><table><thead><tr><th>\u539F\u59CB\u503C</th><th>\u9ED8\u8BA4\u989C\u8272</th><th>\u53EF\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>any</code></td><td></td><td></td></tr><tr><td><code>binary</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>block</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>bool</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>cellpath</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>condition</code></td><td></td><td></td></tr><tr><td><code>custom</code></td><td></td><td></td></tr><tr><td><code>date</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>duration</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>expression</code></td><td></td><td></td></tr><tr><td><code>filesize</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>float</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>glob</code></td><td></td><td></td></tr><tr><td><code>import</code></td><td></td><td></td></tr><tr><td><code>int</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>list</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>nothing</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>number</code></td><td></td><td></td></tr><tr><td><code>operator</code></td><td></td><td></td></tr><tr><td><code>path</code></td><td></td><td></td></tr><tr><td><code>range</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>record</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>signature</code></td><td></td><td></td></tr><tr><td><code>string</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>table</code></td><td></td><td></td></tr><tr><td><code>var</code></td><td></td><td></td></tr><tr><td><code>vardecl</code></td><td></td><td></td></tr><tr><td><code>variable</code></td><td></td><td></td></tr></tbody></table><h4 id="\u7279\u6B8A\u7684-\u539F\u59CB\u503C-\u4E0D\u662F\u771F\u6B63\u7684\u539F\u59CB\u503C-\u5B83\u4EEC\u7684\u5B58\u5728\u4EC5\u4EC5\u662F\u4E3A\u4E86\u7740\u8272" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u7684-\u539F\u59CB\u503C-\u4E0D\u662F\u771F\u6B63\u7684\u539F\u59CB\u503C-\u5B83\u4EEC\u7684\u5B58\u5728\u4EC5\u4EC5\u662F\u4E3A\u4E86\u7740\u8272" aria-hidden="true">#</a> \u7279\u6B8A\u7684 &quot;\u539F\u59CB\u503C&quot;\uFF08\u4E0D\u662F\u771F\u6B63\u7684\u539F\u59CB\u503C\uFF0C\u5B83\u4EEC\u7684\u5B58\u5728\u4EC5\u4EC5\u662F\u4E3A\u4E86\u7740\u8272\uFF09</h4><table><thead><tr><th>\u539F\u59CB\u503C</th><th>\u9ED8\u8BA4\u989C\u8272</th><th>\u53EF\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>leading_trailing_space_bg</code></td><td>Color::Rgb(128, 128, 128))</td><td>*</td></tr><tr><td><code>header</code></td><td>Color::Green.bold()</td><td>*</td></tr><tr><td><code>empty</code></td><td>Color::Blue.normal()</td><td>*</td></tr><tr><td><code>row_index</code></td><td>Color::Green.bold()</td><td>*</td></tr><tr><td><code>hints</code></td><td>Color::DarkGray.normal()</td><td>*</td></tr></tbody></table><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u6539\u53D8\u5176\u4E2D\u4E00\u4E9B\u6570\u503C\u7684\u5C0F\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    color_config: <span class="token punctuation">{</span>
        separator: purple
        leading_trailing_space_bg: <span class="token string">&quot;#ffffff&quot;</span>
        header: gb
        date: wd
        filesize: c
        row_index: cb
        bool: red
        int: green
        duration: blue_bold
        range: purple
        float: red
        string: white
        nothing: red
        binary: red
        cellpath: cyan
        hints: dark_gray
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u53E6\u4E00\u4E2A\u4F7F\u7528\u591A\u79CD\u989C\u8272\u8BED\u6CD5\u7684\u5C0F\u4F8B\u5B50\uFF0C\u5176\u4E2D\u6709\u4E00\u4E9B\u6CE8\u91CA\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    color_config: <span class="token punctuation">{</span>
        separator: <span class="token string">&quot;#88b719&quot;</span> <span class="token comment"># this sets only the foreground color like PR #486</span>
        leading_trailing_space_bg: white <span class="token comment"># this sets only the foreground color in the original style</span>
        header: <span class="token punctuation">{</span> <span class="token comment"># this is like PR #489</span>
            fg: <span class="token string">&quot;#B01455&quot;</span>, <span class="token comment"># note, quotes are required on the values with hex colors</span>
            bg: <span class="token string">&quot;#ffb900&quot;</span>,<span class="token comment"># note, commas are not required, it could also be all on one line</span>
            attr: bli <span class="token comment"># note, there are no quotes around this value. it works with or without quotes</span>
        <span class="token punctuation">}</span>
        date: <span class="token string">&quot;#75507B&quot;</span>
        filesize: <span class="token string">&quot;#729fcf&quot;</span>
        row_index: <span class="token punctuation">{</span>
            <span class="token comment"># note that this is another way to set only the foreground, no need to specify bg and attr</span>
            fg: <span class="token string">&quot;#e50914&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="shape-\u503C" tabindex="-1"><a class="header-anchor" href="#shape-\u503C" aria-hidden="true">#</a> <code>Shape</code> \u503C</h2><p>\u5982\u4E0A\u6240\u8FF0\uFF0C&quot;\u5F62\u72B6&quot; \u662F\u4E00\u4E2A\u7528\u6765\u8868\u793A\u8BED\u6CD5\u7740\u8272\u7684\u672F\u8BED\u3002</p><p>\u4E0B\u9762\u662F\u5F53\u524D\u652F\u6301\u7684\u5E73\u9762\u5F62\u72B6\u5217\u8868\uFF1A</p><table><thead><tr><th>\u5F62\u72B6</th><th>\u9ED8\u8BA4\u6837\u5F0F</th><th>\u53EF\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>shape_block</code></td><td>fg(Color::Blue).bold()</td><td>*</td></tr><tr><td><code>shape_bool</code></td><td>fg(Color::LightCyan)</td><td>*</td></tr><tr><td><code>shape_custom</code></td><td>bold()</td><td>*</td></tr><tr><td><code>shape_external</code></td><td>fg(Color::Cyan)</td><td>*</td></tr><tr><td><code>shape_externalarg</code></td><td>fg(Color::Green).bold()</td><td>*</td></tr><tr><td><code>shape_filepath</code></td><td>fg(Color::Cyan)</td><td>*</td></tr><tr><td><code>shape_flag</code></td><td>fg(Color::Blue).bold()</td><td>*</td></tr><tr><td><code>shape_float</code></td><td>fg(Color::Purple).bold()</td><td>*</td></tr><tr><td><code>shape_garbage</code></td><td>fg(Color::White).on(Color::Red).bold()</td><td>*</td></tr><tr><td><code>shape_globpattern</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_int</code></td><td>fg(Color::Purple).bold()</td><td>*</td></tr><tr><td><code>shape_internalcall</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_list</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_literal</code></td><td>fg(Color::Blue)</td><td>*</td></tr><tr><td><code>shape_nothing</code></td><td>fg(Color::LightCyan)</td><td>*</td></tr><tr><td><code>shape_operator</code></td><td>fg(Color::Yellow)</td><td>*</td></tr><tr><td><code>shape_range</code></td><td>fg(Color::Yellow).bold()</td><td>*</td></tr><tr><td><code>shape_record</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_signature</code></td><td>fg(Color::Green).bold()</td><td>*</td></tr><tr><td><code>shape_string</code></td><td>fg(Color::Green)</td><td>*</td></tr><tr><td><code>shape_string_interpolation</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_table</code></td><td>fg(Color::Blue).bold()</td><td>*</td></tr><tr><td><code>shape_variable</code></td><td>fg(Color::Purple)</td><td>*</td></tr></tbody></table><p>\u8FD9\u91CC\u6709\u4E00\u4E2A\u5C0F\u4F8B\u5B50\uFF0C\u8BF4\u660E\u5982\u4F55\u5BF9\u8FD9\u4E9B\u9879\u76EE\u5E94\u7528\u989C\u8272\u3002\u4EFB\u4F55\u6CA1\u6709\u663E\u793A\u6307\u5B9A\u7684\u90FD\u4F1A\u88AB\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u7684\u989C\u8272\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    color_config: <span class="token punctuation">{</span>
        shape_garbage: <span class="token punctuation">{</span> fg: <span class="token string">&quot;#FFFFFF&quot;</span> bg: <span class="token string">&quot;#FF0000&quot;</span> attr: b<span class="token punctuation">}</span>
        shape_bool: green
        shape_int: <span class="token punctuation">{</span> fg: <span class="token string">&quot;#0000ff&quot;</span> attr: b<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u63D0\u793A-\u7684\u914D\u7F6E\u548C\u7740\u8272" tabindex="-1"><a class="header-anchor" href="#\u63D0\u793A-\u7684\u914D\u7F6E\u548C\u7740\u8272" aria-hidden="true">#</a> &quot;\u63D0\u793A&quot;\u7684\u914D\u7F6E\u548C\u7740\u8272</h2><p>Nushell \u7684\u63D0\u793A\u7B26\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E9B\u73AF\u5883\u53D8\u91CF\u8FDB\u884C\u914D\u7F6E\uFF1A</p><ul><li><code>PROMPT_COMMAND</code>: \u4E3A\u8BBE\u7F6E\u63D0\u793A\u800C\u6267\u884C\u7684\u4EE3\u7801\uFF08\u5757\uFF09</li><li><code>PROMPT_COMMAND_RIGHT</code>: \u4E3A\u8BBE\u7F6E <em>RIGHT</em> \u63D0\u793A\u800C\u6267\u884C\u7684\u4EE3\u7801\uFF08\u5757\uFF09(\u53C2\u8003 nu_scripts \u91CC\u7684 oh-my.nu)</li><li><code>PROMPT_INDICATOR</code> = &quot;\u3009&quot;: \u63D0\u793A\u540E\u6253\u5370\u7684\u6807\u8BC6\uFF08\u9ED8\u8BA4\u4E3A&quot;&gt;&quot;\u7C7B Unicode \u7B26\u53F7\uFF09</li><li><code>PROMPT_INDICATOR_VI_INSERT</code> = &quot;: &quot;</li><li><code>PROMPT_INDICATOR_VI_NORMAL</code> = &quot;v &quot;</li><li><code>PROMPT_MULTILINE_INDICATOR</code> = &quot;::: &quot;</li></ul><p>\u4F8B\u5982\uFF1A\u5BF9\u4E8E\u4E00\u4E2A\u7B80\u5355\u7684\u63D0\u793A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u505A\u3002\u6CE8\u610F<code>PROMPT_COMMAND</code>\u9700\u8981\u4E00\u4E2A<code>block</code>\u800C\u5176\u4ED6\u7684\u9700\u8981\u4E00\u4E2A<code>string</code>\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env PROMPT_COMMAND <span class="token operator">=</span> <span class="token punctuation">{</span> build-string <span class="token punctuation">(</span>date now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%m/%d/%Y %I:%M:%S%.3f&#39;</span><span class="token punctuation">)</span> <span class="token string">&#39;: &#39;</span> <span class="token punctuation">(</span>pwd <span class="token operator">|</span> path <span class="token function">basename</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre></div><p>\u5982\u679C\u4F60\u4E0D\u559C\u6B22\u9ED8\u8BA4\u7684<code>PROMPT_INDICATOR</code>\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u6837\u6539\u53D8\u5B83\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env PROMPT_INDICATOR <span class="token operator">=</span> <span class="token string">&quot;&gt; &quot;</span>
</code></pre></div>`,51),h=t("\u63D0\u793A\u7684\u989C\u8272\u7531 "),_=e("code",null,"PROMPT_COMMAND",-1),b=t(" \u4E2D\u7684 "),g=e("code",null,"block",-1),k=t(" \u63A7\u5236\uFF0C\u5728\u8FD9\u91CC\u4F60\u53EF\u4EE5\u7F16\u5199\u81EA\u5DF1\u7684\u81EA\u5B9A\u4E49\u63D0\u793A\u3002\u6211\u4EEC\u5199\u4E86\u4E00\u4E2A\u7A0D\u5FAE\u82B1\u54E8\u70B9\u7684\uFF0C\u6709 git \u72B6\u6001\u7684\uFF0C\u4F4D\u4E8E "),m={href:"https://github.com/nushell/nu_scripts/blob/main/prompt/oh-my.nu",target:"_blank",rel:"noopener noreferrer"},f=t("nu_scripts \u4ED3\u5E93"),q=t("\u3002"),y=e("h2",{id:"ls-\u547D\u4EE4\u7684\u914D\u8272-ls-colors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ls-\u547D\u4EE4\u7684\u914D\u8272-ls-colors","aria-hidden":"true"},"#"),t(),e("code",null,"ls"),t(" \u547D\u4EE4\u7684\u914D\u8272:"),e("code",null,"LS_COLORS")],-1),v=t("Nushell \u5C06\u5C0A\u91CD\u5E76\u4F7F\u7528 Mac\u3001Linux \u548C Windows \u4E0A\u7684 "),C=e("code",null,"LS_COLORS",-1),w=t(" \u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E\u3002\u8FD9\u4E2A\u8BBE\u7F6E\u5141\u8BB8\u4F60\u5728\u505A"),x=e("code",null,"ls",-1),O=t("\u65F6\u5B9A\u4E49\u6587\u4EF6\u7C7B\u578B\u7684\u989C\u8272\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u8BA9\u76EE\u5F55\u53D8\u6210\u4E00\u79CD\u989C\u8272\uFF0C"),L=e("code",null,"_.md",-1),R=t(" markdown \u6587\u4EF6\u4E00\u79CD\u989C\u8272\uFF0C"),M=e("code",null,"_.toml",-1),$=t(" \u6587\u4EF6\u53D8\u6210\u53E6\u4E00\u79CD\u989C\u8272\uFF0C\u7B49\u7B49\u3002\u6709\u5F88\u591A\u65B9\u6CD5\u53EF\u4EE5\u7ED9\u4F60\u7684\u6587\u4EF6\u7C7B\u578B\u7740\u8272\u3002"),S=t("\u6709\u4E00\u4E2A\u8BE6\u5C3D\u7684\u6E05\u5355\u53EF\u4EE5\u5728 "),I={href:"https://github.com/trapd00r/LS_COLORS",target:"_blank",rel:"noopener noreferrer"},N=t("\u8FD9\u91CC"),P=t(" \u770B\u5230\uFF0C\u4E0D\u8FC7\u5B83\u53EF\u80FD\u592A\u591A\u4E86\uFF0C\u4F46\u53EF\u4EE5\u8BA9\u4F60\u521D\u6B65\u4E86\u89E3\u5982\u4F55\u521B\u5EFA\u4E00\u4E2A"),T=e("code",null,"ls_colors",-1),D=t("\u6587\u4EF6\uFF0C\u800C"),F=e("code",null,"dircolors",-1),B=t("\u53EF\u4EE5\u628A\u5B83\u53D8\u6210"),W=e("code",null,"LS_COLORS",-1),A=t("\u73AF\u5883\u53D8\u91CF\u3002"),z={href:"https://www.linuxhowto.net/how-to-set-colors-for-ls-command/",target:"_blank",rel:"noopener noreferrer"},E=t("\u8FD9"),G=t(" \u662F\u5BF9"),V=e("code",null,"LS_COLORS",-1),U=t("\u7684\u4E00\u4E2A\u76F8\u5F53\u597D\u7684\u4ECB\u7ECD\u3002\u6211\u76F8\u4FE1\u4F60\u53EF\u4EE5\u5728\u7F51\u4E0A\u627E\u5230\u66F4\u591A\u76F8\u5173\u6559\u7A0B\u3002"),H=t("\u6211\u559C\u6B22"),Y=e("code",null,"vivid",-1),X=t("\u5E94\u7528\u7A0B\u5E8F\uFF0C\u76EE\u524D\u5728\u6211\u7684"),K=e("code",null,"config.nu",-1),Q=t("\u4E2D\u662F\u8FD9\u6837\u914D\u7F6E\u7684\u3002\u4F60\u53EF\u4EE5\u5728 "),j={href:"https://github.com/sharkdp/vivid",target:"_blank",rel:"noopener noreferrer"},J=t("\u8FD9\u91CC"),Z=t(" \u627E\u5230"),tt=e("code",null,"vivid",-1),et=t("\u3002"),dt=s(`<p><code>let-env LS_COLORS = (vivid generate molokai | str trim)</code>\u3002</p><p>\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E <code>LS_COLORS</code>\uFF0CNushell \u5C06\u9ED8\u8BA4\u4F7F\u7528\u5185\u7F6E\u7684 <code>LS_COLORS</code> \u8BBE\u7F6E\uFF0C\u57FA\u4E8E 8 \u4F4D\uFF08\u6269\u5C55\uFF09ANSI \u989C\u8272\u3002</p><h2 id="\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898" aria-hidden="true">#</a> \u4E3B\u9898</h2><p>\u4E3B\u9898\u8BBE\u8BA1\u7ED3\u5408\u4E86\u4E0A\u8FF0\u6240\u6709\u7684\u7740\u8272\u3002\u8FD9\u91CC\u6709\u4E00\u4E2A\u5FEB\u901F\u7684\u4F8B\u5B50\uFF0C\u6211\u4EEC\u628A\u5B83\u653E\u5728\u4E00\u8D77\uFF0C\u4EE5\u8BC1\u660E\u4E3B\u9898\u5B9A\u5236\u7684\u80FD\u529B\u3002\u8FD9\u662F\u5BF9\u6211\u4EEC\u5728\u7F51\u7EDC\u4E0A\u770B\u5230\u7684 <code>base16</code> \u4E3B\u9898\u7684\u4E00\u79CD\u8F6C\u6362\u3002</p><p>\u4F7F\u4E3B\u9898\u751F\u6548\u7684\u5173\u952E\u662F\u786E\u4FDD\u4F60\u5728\u58F0\u660E <code>let config =</code> \u884C <em>\u4E4B\u524D</em>\uFF0C\u5728<code>config.nu</code>\u6587\u4EF6\u4E2D\u6307\u5B9A\u4F60\u8981\u4F7F\u7528\u7684\u6240\u6709\u4E3B\u9898\u548C\u989C\u8272\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># let&#39;s define some colors</span>

<span class="token builtin class-name">let</span> base00 <span class="token operator">=</span> <span class="token string">&quot;#181818&quot;</span> <span class="token comment"># Default Background</span>
<span class="token builtin class-name">let</span> base01 <span class="token operator">=</span> <span class="token string">&quot;#282828&quot;</span> <span class="token comment"># Lighter Background (Used for status bars, line number and folding marks)</span>
<span class="token builtin class-name">let</span> base02 <span class="token operator">=</span> <span class="token string">&quot;#383838&quot;</span> <span class="token comment"># Selection Background</span>
<span class="token builtin class-name">let</span> base03 <span class="token operator">=</span> <span class="token string">&quot;#585858&quot;</span> <span class="token comment"># Comments, Invisibles, Line Highlighting</span>
<span class="token builtin class-name">let</span> base04 <span class="token operator">=</span> <span class="token string">&quot;#b8b8b8&quot;</span> <span class="token comment"># Dark Foreground (Used for status bars)</span>
<span class="token builtin class-name">let</span> base05 <span class="token operator">=</span> <span class="token string">&quot;#d8d8d8&quot;</span> <span class="token comment"># Default Foreground, Caret, Delimiters, Operators</span>
<span class="token builtin class-name">let</span> base06 <span class="token operator">=</span> <span class="token string">&quot;#e8e8e8&quot;</span> <span class="token comment"># Light Foreground (Not often used)</span>
<span class="token builtin class-name">let</span> base07 <span class="token operator">=</span> <span class="token string">&quot;#f8f8f8&quot;</span> <span class="token comment"># Light Background (Not often used)</span>
<span class="token builtin class-name">let</span> base08 <span class="token operator">=</span> <span class="token string">&quot;#ab4642&quot;</span> <span class="token comment"># Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted</span>
<span class="token builtin class-name">let</span> base09 <span class="token operator">=</span> <span class="token string">&quot;#dc9656&quot;</span> <span class="token comment"># Integers, Boolean, Constants, XML Attributes, Markup Link Url</span>
<span class="token builtin class-name">let</span> base0a <span class="token operator">=</span> <span class="token string">&quot;#f7ca88&quot;</span> <span class="token comment"># Classes, Markup Bold, Search Text Background</span>
<span class="token builtin class-name">let</span> base0b <span class="token operator">=</span> <span class="token string">&quot;#a1b56c&quot;</span> <span class="token comment"># Strings, Inherited Class, Markup Code, Diff Inserted</span>
<span class="token builtin class-name">let</span> base0c <span class="token operator">=</span> <span class="token string">&quot;#86c1b9&quot;</span> <span class="token comment"># Support, Regular Expressions, Escape Characters, Markup Quotes</span>
<span class="token builtin class-name">let</span> base0d <span class="token operator">=</span> <span class="token string">&quot;#7cafc2&quot;</span> <span class="token comment"># Functions, Methods, Attribute IDs, Headings</span>
<span class="token builtin class-name">let</span> base0e <span class="token operator">=</span> <span class="token string">&quot;#ba8baf&quot;</span> <span class="token comment"># Keywords, Storage, Selector, Markup Italic, Diff Changed</span>
<span class="token builtin class-name">let</span> base0f <span class="token operator">=</span> <span class="token string">&quot;#a16946&quot;</span> <span class="token comment"># Deprecated, Opening/Closing Embedded Language Tags, e.g. &lt;?php ?&gt;</span>

<span class="token comment"># we&#39;re creating a theme here that uses the colors we defined above.</span>

<span class="token builtin class-name">let</span> base16_theme <span class="token operator">=</span> <span class="token punctuation">{</span>
    separator: <span class="token variable">$base03</span>
    leading_trailing_space_bg: <span class="token variable">$base04</span>
    header: <span class="token variable">$base0b</span>
    date: <span class="token variable">$base0e</span>
    filesize: <span class="token variable">$base0d</span>
    row_index: <span class="token variable">$base0c</span>
    bool: <span class="token variable">$base08</span>
    int: <span class="token variable">$base0b</span>
    duration: <span class="token variable">$base08</span>
    range: <span class="token variable">$base08</span>
    float: <span class="token variable">$base08</span>
    string: <span class="token variable">$base04</span>
    nothing: <span class="token variable">$base08</span>
    binary: <span class="token variable">$base08</span>
    cellpath: <span class="token variable">$base08</span>
    hints: dark_gray

    <span class="token comment"># shape_garbage: { fg: $base07 bg: $base08 attr: b} # base16 white on red</span>
    <span class="token comment"># but i like the regular white on red for parse errors</span>
    shape_garbage: <span class="token punctuation">{</span> fg: <span class="token string">&quot;#FFFFFF&quot;</span> bg: <span class="token string">&quot;#FF0000&quot;</span> attr: b<span class="token punctuation">}</span>
    shape_bool: <span class="token variable">$base0d</span>
    shape_int: <span class="token punctuation">{</span> fg: <span class="token variable">$base0e</span> attr: b<span class="token punctuation">}</span>
    shape_float: <span class="token punctuation">{</span> fg: <span class="token variable">$base0e</span> attr: b<span class="token punctuation">}</span>
    shape_range: <span class="token punctuation">{</span> fg: <span class="token variable">$base0a</span> attr: b<span class="token punctuation">}</span>
    shape_internalcall: <span class="token punctuation">{</span> fg: <span class="token variable">$base0c</span> attr: b<span class="token punctuation">}</span>
    shape_external: <span class="token variable">$base0c</span>
    shape_externalarg: <span class="token punctuation">{</span> fg: <span class="token variable">$base0b</span> attr: b<span class="token punctuation">}</span>
    shape_literal: <span class="token variable">$base0d</span>
    shape_operator: <span class="token variable">$base0a</span>
    shape_signature: <span class="token punctuation">{</span> fg: <span class="token variable">$base0b</span> attr: b<span class="token punctuation">}</span>
    shape_string: <span class="token variable">$base0b</span>
    shape_filepath: <span class="token variable">$base0d</span>
    shape_globpattern: <span class="token punctuation">{</span> fg: <span class="token variable">$base0d</span> attr: b<span class="token punctuation">}</span>
    shape_variable: <span class="token variable">$base0e</span>
    shape_flag: <span class="token punctuation">{</span> fg: <span class="token variable">$base0d</span> attr: b<span class="token punctuation">}</span>
    shape_custom: <span class="token punctuation">{</span>attr: b<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># now let&#39;s apply our regular config settings but also apply the &quot;color_config:&quot; theme that we specified above.</span>

<span class="token builtin class-name">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  filesize_metric: <span class="token boolean">true</span>
  table_mode: rounded <span class="token comment"># basic, compact, compact_double, light, thin, with_love, rounded, reinforced, heavy, none, other</span>
  use_ls_colors: <span class="token boolean">true</span>
  color_config: <span class="token variable">$base16_theme</span> <span class="token comment"># &lt;-- this is the theme</span>
  use_grid_icons: <span class="token boolean">true</span>
  footer_mode: always <span class="token comment">#always, never, number_of_rows, auto</span>
  animate_prompt: <span class="token boolean">false</span>
  float_precision: <span class="token number">2</span>
  use_ansi_coloring: <span class="token boolean">true</span>
  filesize_format: <span class="token string">&quot;b&quot;</span> <span class="token comment"># b, kb, kib, mb, mib, gb, gib, tb, tib, pb, pib, eb, eib, zb, zib, auto</span>
  edit_mode: emacs <span class="token comment"># vi</span>
  max_history_size: <span class="token number">10000</span>
  log_level: error
<span class="token punctuation">}</span>
</code></pre></div><p>\u5982\u679C\u4F60\u60F3\u5728\u4E3B\u9898\u8BBE\u8BA1\u4E0A\u706B\u529B\u5168\u5F00\uFF0C\u4F60\u9700\u8981\u628A\u6211\u5728\u4E00\u5F00\u59CB\u63D0\u5230\u7684\u6240\u6709\u9879\u76EE\u4F5C\u4E3A\u4E3B\u9898\uFF0C\u5305\u62EC<code>LS_COLORS</code>\u548C\u63D0\u793A\u3002\u795D\u60A8\u597D\u8FD0!</p>`,7);function at(nt,st){const a=n("ExternalLinkIcon"),o=n("RouterLink");return l(),c("div",null,[u,e("p",null,[h,_,b,g,k,e("a",m,[f,d(a)]),q]),y,e("p",null,[v,C,w,d(o,{to:"/book/commands/ls.html"},{default:i(()=>[x]),_:1}),O,L,R,M,$]),e("p",null,[S,e("a",I,[N,d(a)]),P,T,D,F,B,W,A]),e("p",null,[e("a",z,[E,d(a)]),G,V,U]),e("p",null,[H,Y,X,K,Q,e("a",j,[J,d(a)]),Z,tt,et]),dt])}var rt=r(p,[["render",at],["__file","coloring_and_theming.html.vue"]]);export{rt as default};
