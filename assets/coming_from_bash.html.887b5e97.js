import{_ as d,r as a,o as n,c as r,a as e,b as s,d as t,e as o}from"./app.aa868a80.js";const i={},l=e("h1",{id:"coming-from-bash",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#coming-from-bash","aria-hidden":"true"},"#"),t(" Coming from Bash")],-1),h=e("p",null,"Note: this table assumes Nu 0.14.1 or later.",-1),g=o("| Bash | Nu | Task | | ------------------------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------- | | <code>ls</code> | <code>ls</code> | Lists the files in the current directory | | <code>ls &lt;dir&gt;</code> | <code>ls &lt;dir&gt;</code> | Lists the files in the given directory | | <code>ls pattern*</code> | <code>ls pattern*</code> | Lists files that match a given pattern | | <code>ls -la</code> | <code>ls --long --all</code> or <code>ls -la</code> | List files with all available information, including hidden files | | <code>ls -d */</code> | <code>ls | where type == Dir</code> | List directories | | <code>find . -name *.rs</code> | <code>ls **/*.rs</code> | Find recursively all files that match a given pattern | | <code>cd &lt;directory&gt;</code> | <code>cd &lt;directory&gt;</code> | Change to the given directory | | <code>cd</code> | <code>cd</code> | Change to the home directory | | <code>mkdir &lt;path&gt;</code> | <code>mkdir &lt;path&gt;</code> | Creates the given path | | <code>mkdir -p &lt;path&gt;</code> | <code>mkdir &lt;path&gt;</code> | Creates the given path, creating parents as necessary | | <code>touch test.txt</code> | <code>touch test.txt</code> | Create a file | | <code>&gt; &lt;path&gt;</code> | <code> | save --raw &lt;path&gt;</code> | Save string into a file | | <code>&gt;&gt; &lt;path&gt;</code> | <code> | save --raw --append &lt;path&gt;</code> | Append string to a file | | <code>cat &lt;path&gt;</code> | <code>open --raw &lt;path&gt;</code> | Display the contents of the given file | | | <code>open &lt;path&gt;</code> | Read a file as structured data | | <code>mv &lt;source&gt; &lt;dest&gt;</code> | <code>mv &lt;source&gt; &lt;dest&gt;</code> | Move file to new location | | <code>cp &lt;source&gt; &lt;dest&gt;</code> | <code>cp &lt;source&gt; &lt;dest&gt;</code> | Copy file to new location | | <code>cp -r &lt;source&gt; &lt;dest&gt;</code> | <code>cp -r &lt;source&gt; &lt;dest&gt;</code> | Copy directory to a new location, recursively | | <code>rm &lt;path&gt;</code> | <code>rm &lt;path&gt;</code> | Remove the given file | | | <code>rm -t &lt;path&gt;</code> | Move the given file to the system trash | | <code>rm -rf &lt;path&gt;</code> | <code>rm -r &lt;path&gt;</code> | Recursively removes the given path | | <code>chmod</code> | <code>&lt;not yet possible&gt;</code> | Changes the file attributes | | <code>date -d &lt;date&gt;</code> | <code>echo &lt;date&gt; | str to-datetime -f &lt;format&gt;</code> | Parse a date (",91),m={href:"https://docs.rs/chrono/0.4.15/chrono/format/strftime/index.html",target:"_blank",rel:"noopener noreferrer"},p=t("format documentation"),u=o(") | | <code>sed</code> | <code>str find-replace</code> | Find and replace a pattern in a string | | <code>grep &lt;pattern&gt;</code> | <code>where $it =~ &lt;substring&gt;</code> | Filter strings that contain the substring | | <code>man &lt;command&gt;</code> | <code>help &lt;command&gt;</code> | Get the help for a given command | | | <code>help commands</code> | List all available commands | | | <code>help --find &lt;string&gt;</code> | Search for match in all available commands | | <code>command1 &amp;&amp; command2</code> | <code>command1; command2</code> | Run a command, and if it&#39;s successful run a second | | <code>stat $(which git)</code> | <code>stat (which git).path</code> | Use command output as argument for other command | | <code>echo $PATH</code> | <code>echo $nu.path</code> | See the current path | | <code>&lt;update ~/.bashrc&gt;</code> | <code>config set path [&lt;dir1&gt; &lt;dir2&gt; ...]</code> | Update PATH permanently | | <code>export PATH = $PATH:/usr/other/bin</code> | <code>pathvar add &lt;path&gt;</code> | Update PATH temporarily | | <code>export</code> | <code>echo $nu.env</code> | List the current environment variables | | <code>&lt;update ~/.bashrc&gt;</code> | <code>echo $nu.env | insert var value | config set_into env</code> | Update environment variables permanently | | <code>FOO=BAR ./bin</code> | <code>FOO=BAR ./bin</code> | Update environment temporarily | | <code>export FOO=BAR</code> | <code>let-env FOO = BAR</code> | Set environment variable for current session | | <code>echo $FOO</code> | <code>echo $nu.env.FOO</code> | Use environment variables | | <code>unset FOO</code> | <code>let-env FOO = $nothing</code> | Unset environment variable for current session | | <code>alias s=&quot;git status -sb&quot;</code> | <code>alias s = git status -sb</code> | Define an alias temporarily | | <code>&lt;update ~/.bashrc&gt;</code> | <code>&lt;update nu/config.toml&gt;</code> | Add and edit alias permanently (for new shells), find path for the file with <code>config path</code> | | <code>bash -c &lt;commands&gt;</code> | <code>nu -c &lt;commands&gt;</code> | Run a pipeline of commands (requires 0.9.1 or later) | | <code>bash &lt;script file&gt;</code> | <code>nu &lt;script file&gt;</code> | Run a script file (requires 0.9.1 or later) | | <code>\\</code> | <code>&lt;not yet possible&gt;</code> | Line continuation is not yet supported. |",83);function f(v,_){const c=a("ExternalLinkIcon");return n(),r("div",null,[l,h,e("p",null,[g,e("a",m,[p,s(c)]),u])])}var y=d(i,[["render",f],["__file","coming_from_bash.html.vue"]]);export{y as default};
