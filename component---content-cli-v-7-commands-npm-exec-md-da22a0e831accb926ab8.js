(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{O6H6:function(e,n,t){"use strict";var a=t("vOnD"),i=t("u9kb"),l=t("aOgs"),o=t("q1tI"),c=t.n(o),r=t("7ljp"),p=t("pD55"),s=t("8Aig"),b=t("ReZb"),m=t("GCVy"),d=t("+6vE");var u=function(e){var n=e.children;return c.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(i.s,{fontFamily:"mono",fontSize:1},n))};var h=function(e){var n=e.children;return c.a.createElement("strong",null,n)},j=t("gnlW"),O=t("mwnC"),f=t("/Rw0"),g=t("dVM4"),N=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var n=e.items,t=e.depth;return c.a.createElement(N,{key:n,as:"ul",m:0,p:0},n.map((function(e){return c.a.createElement(i.e,{as:"li",key:e.url,pl:t>0?3:0},c.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(w,{items:e.items,depth:t+1}):null)})))}w.defaultProps={depth:0};var y=w,k=t("MfeC");function x(e){var n=k.a.getPath(e.location.pathname),t=k.a.getVariantAndPage(e.root,n);if(!t)return null;var a=k.a.getVariantsForPage(e.root,t.page),l=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(o=e),l.push(c.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(i.i,{overlay:e.overlay},c.a.createElement(i.i.Button,null,o.variant.title),c.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},l)))}x.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=x,v=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),E=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),_=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,o=t.frontmatter,N=o.title,w=o.description,x=o.status,A=o.source,P=o.additionalContributors,W=void 0===P?[]:P,H=k.a.getVariantRoot(a.pathname);return c.a.createElement(r.a,{components:{Index:b.a,Note:m.a,Prompt:u,PromptReply:h,Screenshot:j.a}},c.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(p.a,{title:N,description:w}),c.a.createElement(s.b,{location:a,isSearchEnabled:t.isSearchEnabled}),c.a.createElement(v,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(i.e,{display:["none",null,null,"block"]},c.a.createElement(O.a,{editOnGitHub:t.themeOptions.editOnGitHub,location:a})),c.a.createElement(E,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(T,null,c.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(i.e,null,c.a.createElement(i.e,null,c.a.createElement(i.m,{as:"h1"},N),w))),null!=H?c.a.createElement(I,null,c.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),t.tableOfContents.items?c.a.createElement(_,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},c.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(y,{items:t.tableOfContents.items})):null,c.a.createElement(S,null,x||A?c.a.createElement(i.k,{mb:3,alignItems:"center"},x?c.a.createElement(g.a,{status:x}):null,c.a.createElement(i.e,{mx:"auto"}),A?c.a.createElement(f.a,{href:A}):null):null,t.tableOfContents.items?c.a.createElement(i.e,{display:["block",null,"none"],mb:3},c.a.createElement(i.h,null,(function(e){var n=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.s,{as:"summary",fontWeight:"bold"},n?c.a.createElement(i.r,{icon:l.b,mr:2}):c.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),c.a.createElement(i.e,{pt:1},c.a.createElement(y,{items:t.tableOfContents.items})))}))):null,n,c.a.createElement(d.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},zGyx:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t("zLVn"),i=(t("q1tI"),t("7ljp")),l=t("O6H6"),o={},c={_frontmatter:o},r=l.a;function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(r,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm exec -- <pkg>[@<version>] [args...]\nnpm exec --package=<pkg>[@<version>] -- <cmd> [args...]\nnpm exec -c '<cmd> [args...]'\nnpm exec --package=foo -c '<cmd> [args...]'\nnpm exec [--ws] [-w <workspace-name] [args...]\n\nnpx <pkg>[@<specifier>] [args...]\nnpx -p <pkg>[@<specifier>] <cmd> [args...]\nnpx -c '<cmd> [args...]'\nnpx -p <pkg>[@<specifier>] -c '<cmd> [args...]'\nRun without --call or positional args to open interactive subshell\n\nalias: npm x, npx\n\ncommon options:\n--package=<pkg> (may be specified multiple times)\n-p is a shorthand for --package only when using npx executable\n-c <cmd> --call=<cmd> (may not be mixed with positional arguments)\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"This command allows you to run an arbitrary command from an npm package\n(either one installed locally, or fetched remotely), in a similar context\nas running it via ",Object(i.b)("inlineCode",{parentName:"p"},"npm run"),"."),Object(i.b)("p",null,"Run without positional arguments or ",Object(i.b)("inlineCode",{parentName:"p"},"--call"),", this allows you to\ninteractively run commands in the same sort of shell environment that\n",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," scripts are run.  Interactive mode is not supported in CI\nenvironments when standard input is a TTY, to prevent hangs."),Object(i.b)("p",null,"Whatever packages are specified by the ",Object(i.b)("inlineCode",{parentName:"p"},"--package")," option will be\nprovided in the ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," of the executed command, along with any locally\ninstalled package executables.  The ",Object(i.b)("inlineCode",{parentName:"p"},"--package")," option may be\nspecified multiple times, to execute the supplied command in an environment\nwhere all specified packages are available."),Object(i.b)("p",null,"If any requested packages are not present in the local project\ndependencies, then they are installed to a folder in the npm cache, which\nis added to the ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," environment variable in the executed process.  A\nprompt is printed (which can be suppressed by providing either ",Object(i.b)("inlineCode",{parentName:"p"},"--yes")," or\n",Object(i.b)("inlineCode",{parentName:"p"},"--no"),")."),Object(i.b)("p",null,"Package names provided without a specifier will be matched with whatever\nversion exists in the local project.  Package names with a specifier will\nonly be considered a match if they have the exact same name and version as\nthe local dependency."),Object(i.b)("p",null,"If no ",Object(i.b)("inlineCode",{parentName:"p"},"-c")," or ",Object(i.b)("inlineCode",{parentName:"p"},"--call")," option is provided, then the positional arguments\nare used to generate the command string.  If no ",Object(i.b)("inlineCode",{parentName:"p"},"--package")," options\nare provided, then npm will attempt to determine the executable name from\nthe package specifier provided as the first positional argument according\nto the following heuristic:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the package has a single entry in its ",Object(i.b)("inlineCode",{parentName:"li"},"bin")," field in ",Object(i.b)("inlineCode",{parentName:"li"},"package.json"),",\nor if all entries are aliases of the same command, then that command\nwill be used."),Object(i.b)("li",{parentName:"ul"},"If the package has multiple ",Object(i.b)("inlineCode",{parentName:"li"},"bin")," entries, and one of them matches the\nunscoped portion of the ",Object(i.b)("inlineCode",{parentName:"li"},"name")," field, then that command will be used."),Object(i.b)("li",{parentName:"ul"},"If this does not result in exactly one option (either because there are\nno bin entries, or none of them match the ",Object(i.b)("inlineCode",{parentName:"li"},"name")," of the package), then\n",Object(i.b)("inlineCode",{parentName:"li"},"npm exec")," exits with an error.")),Object(i.b)("p",null,"To run a binary ",Object(i.b)("em",{parentName:"p"},"other than")," the named binary, specify one or more\n",Object(i.b)("inlineCode",{parentName:"p"},"--package")," options, which will prevent npm from inferring the package from\nthe first command argument."),Object(i.b)("h3",null,Object(i.b)("inlineCode",{parentName:"h3"},"npx")," vs ",Object(i.b)("inlineCode",{parentName:"h3"},"npm exec")),Object(i.b)("p",null,"When run via the ",Object(i.b)("inlineCode",{parentName:"p"},"npx")," binary, all flags and options ",Object(i.b)("em",{parentName:"p"},"must")," be set prior to\nany positional arguments.  When run via ",Object(i.b)("inlineCode",{parentName:"p"},"npm exec"),", a double-hyphen ",Object(i.b)("inlineCode",{parentName:"p"},"--"),"\nflag can be used to suppress npm's parsing of switches and options that\nshould be sent to the executed command."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ npx foo@latest bar --package=@npmcli/foo\n")),Object(i.b)("p",null,"In this case, npm will resolve the ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," package name, and run the\nfollowing command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ foo bar --package=@npmcli/foo\n")),Object(i.b)("p",null,"Since the ",Object(i.b)("inlineCode",{parentName:"p"},"--package")," option comes ",Object(i.b)("em",{parentName:"p"},"after")," the positional arguments, it is\ntreated as an argument to the executed command."),Object(i.b)("p",null,"In contrast, due to npm's argument parsing logic, running this command is\ndifferent:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ npm exec foo@latest bar --package=@npmcli/foo\n")),Object(i.b)("p",null,"In this case, npm will parse the ",Object(i.b)("inlineCode",{parentName:"p"},"--package")," option first, resolving the\n",Object(i.b)("inlineCode",{parentName:"p"},"@npmcli/foo")," package.  Then, it will execute the following command in that\ncontext:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ foo@latest bar\n")),Object(i.b)("p",null,"The double-hyphen character is recommended to explicitly tell npm to stop\nparsing command line options and switches.  The following command would\nthus be equivalent to the ",Object(i.b)("inlineCode",{parentName:"p"},"npx")," command above:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ npm exec -- foo@latest bar --package=@npmcli/foo\n")),Object(i.b)("h3",null,"Examples"),Object(i.b)("p",null,"Run the version of ",Object(i.b)("inlineCode",{parentName:"p"},"tap")," in the local dependencies, with the provided\narguments:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ npm exec -- tap --bail test/foo.js\n$ npx tap --bail test/foo.js\n")),Object(i.b)("p",null,"Run a command ",Object(i.b)("em",{parentName:"p"},"other than")," the command whose name matches the package name\nby specifying a ",Object(i.b)("inlineCode",{parentName:"p"},"--package")," option:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ npm exec --package=foo -- bar --bar-argument\n# ~ or ~\n$ npx --package=foo bar --bar-argument\n")),Object(i.b)("p",null,"Run an arbitrary shell script, in the context of the current project:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ npm x -c 'eslint && say \"hooray, lint passed\"'\n$ npx -c 'eslint && say \"hooray, lint passed\"'\n")),Object(i.b)("h3",null,"Workspaces support"),Object(i.b)("p",null,"You may use the ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," or ",Object(i.b)("inlineCode",{parentName:"p"},"workspaces")," configs in order to run an\narbitrary command from an npm package (either one installed locally, or fetched\nremotely) in the context of the specified workspaces.\nIf no positional argument or ",Object(i.b)("inlineCode",{parentName:"p"},"--call")," option is provided, it will open an\ninteractive subshell in the context of each of these configured workspaces one\nat a time."),Object(i.b)("p",null,"Given a project with configured workspaces, e.g:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},".\n+-- package.json\n`-- packages\n   +-- a\n   |   `-- package.json\n   +-- b\n   |   `-- package.json\n   `-- c\n       `-- package.json\n")),Object(i.b)("p",null,"Assuming the workspace configuration is properly set up at the root level\n",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file. e.g:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n    "workspaces": [ "./packages/*" ]\n}\n')),Object(i.b)("p",null,"You can execute an arbitrary command from a package in the context of each of\nthe configured workspaces when using the ",Object(i.b)("inlineCode",{parentName:"p"},"workspaces")," configuration options,\nin this example we're using ",Object(i.b)("strong",{parentName:"p"},"eslint")," to lint any js file found within each\nworkspace folder:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm exec --ws -- eslint ./*.js\n")),Object(i.b)("h4",null,"Filtering workspaces"),Object(i.b)("p",null,"It's also possible to execute a command in a single workspace using the\n",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config along with a name or directory path:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm exec --workspace=a -- eslint ./*.js\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config can also be specified multiple times in order to run a\nspecific script in the context of multiple workspaces. When defining values for\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config in the command line, it also possible to use ",Object(i.b)("inlineCode",{parentName:"p"},"-w")," as a\nshorthand, e.g:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm exec -w a -w b -- eslint ./*.js\n")),Object(i.b)("p",null,"This last command will run the ",Object(i.b)("inlineCode",{parentName:"p"},"eslint")," command in both ",Object(i.b)("inlineCode",{parentName:"p"},"./packages/a")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"./packages/b")," folders."),Object(i.b)("h3",null,"Compatibility with Older npx Versions"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"npx")," binary was rewritten in npm v7.0.0, and the standalone ",Object(i.b)("inlineCode",{parentName:"p"},"npx"),"\npackage deprecated at that time.  ",Object(i.b)("inlineCode",{parentName:"p"},"npx")," uses the ",Object(i.b)("inlineCode",{parentName:"p"},"npm exec"),"\ncommand instead of a separate argument parser and install process, with\nsome affordances to maintain backwards compatibility with the arguments it\naccepted in previous versions."),Object(i.b)("p",null,"This resulted in some shifts in its functionality:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Any ",Object(i.b)("inlineCode",{parentName:"li"},"npm")," config value may be provided."),Object(i.b)("li",{parentName:"ul"},"To prevent security and user-experience problems from mistyping package\nnames, ",Object(i.b)("inlineCode",{parentName:"li"},"npx")," prompts before installing anything.  Suppress this\nprompt with the ",Object(i.b)("inlineCode",{parentName:"li"},"-y")," or ",Object(i.b)("inlineCode",{parentName:"li"},"--yes")," option."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"--no-install")," option is deprecated, and will be converted to ",Object(i.b)("inlineCode",{parentName:"li"},"--no"),"."),Object(i.b)("li",{parentName:"ul"},"Shell fallback functionality is removed, as it is not advisable."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"-p")," argument is a shorthand for ",Object(i.b)("inlineCode",{parentName:"li"},"--parseable")," in npm, but shorthand\nfor ",Object(i.b)("inlineCode",{parentName:"li"},"--package")," in npx.  This is maintained, but only for the ",Object(i.b)("inlineCode",{parentName:"li"},"npx"),"\nexecutable."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"--ignore-existing")," option is removed.  Locally installed bins are\nalways present in the executed process ",Object(i.b)("inlineCode",{parentName:"li"},"PATH"),"."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"--npm")," option is removed.  ",Object(i.b)("inlineCode",{parentName:"li"},"npx")," will always use the ",Object(i.b)("inlineCode",{parentName:"li"},"npm")," it ships\nwith."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"--node-arg")," and ",Object(i.b)("inlineCode",{parentName:"li"},"-n")," options are removed."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"--always-spawn")," option is redundant, and thus removed."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"--shell")," option is replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"--script-shell"),", but maintained\nin the ",Object(i.b)("inlineCode",{parentName:"li"},"npx")," executable for backwards compatibility.")),Object(i.b)("h3",null,"A note on caching"),Object(i.b)("p",null,"The npm cli utilizes its internal package cache when using the package\nname specified.  You can use the following to change how and when the\ncli uses this cache. See ",Object(i.b)("a",{parentName:"p",href:"/cli/v7/commands/npm-cache"},Object(i.b)("inlineCode",{parentName:"a"},"npm cache"))," for more on\nhow the cache works."),Object(i.b)("h4",null,"prefer-online"),Object(i.b)("p",null,"Forces staleness checks for packages, making the cli look for updates\nimmediately even if the package is already in the cache."),Object(i.b)("h4",null,"prefer-offline"),Object(i.b)("p",null,"Bypasses staleness checks for packages.  Missing data will still be\nrequested from the server. To force full offline mode, use ",Object(i.b)("inlineCode",{parentName:"p"},"offline"),"."),Object(i.b)("h4",null,"offline"),Object(i.b)("p",null,"Forces full offline mode. Any packages not locally cached will result in\nan error."),Object(i.b)("h4",null,"workspace"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Alias: ",Object(i.b)("inlineCode",{parentName:"li"},"-w")),Object(i.b)("li",{parentName:"ul"},"Type: Array"),Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"))),Object(i.b)("p",null,"Enable running scripts in the context of workspaces while also filtering by\nthe provided names or paths provided."),Object(i.b)("p",null,"Valid values for the ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Workspace names"),Object(i.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(i.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result to selecting all of the\nchildren workspaces)")),Object(i.b)("h4",null,"workspaces"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Alias: ",Object(i.b)("inlineCode",{parentName:"li"},"--ws")),Object(i.b)("li",{parentName:"ul"},"Type: Boolean"),Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"))),Object(i.b)("p",null,"Run scripts in the context of all configured workspaces for the current\nproject."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-run-script"},"npm run-script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/using-npm/scripts"},"npm scripts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-test"},"npm test")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-start"},"npm start")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-restart"},"npm restart")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-stop"},"npm stop")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-config"},"npm config")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/using-npm/workspaces"},"npm workspaces"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-exec-md-da22a0e831accb926ab8.js.map