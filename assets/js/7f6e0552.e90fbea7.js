"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[3401],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5184:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"flet-mobile-update",title:"Flet mobile update",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["news"]},s=void 0,p={permalink:"/blog/flet-mobile-update",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2022-12-08-flet-mobile-update.md",source:"@site/blog/2022-12-08-flet-mobile-update.md",title:"Flet mobile update",description:"This post is a continuation of Flet mobile strategy published a few months ago.",date:"2022-12-08T00:00:00.000Z",formattedDate:"December 8, 2022",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:4.33,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"flet-mobile-update",title:"Flet mobile update",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["news"]},prevItem:{title:"Packaging desktop apps with a custom icon",permalink:"/blog/packaging-desktop-apps-with-custom-icon"},nextItem:{title:"Flet versioning and pre-releases",permalink:"/blog/flet-versioning-and-pre-releases"}},u={authorsImageUrls:[void 0]},c=[{value:"Current Flet architecture",id:"current-flet-architecture",level:2},{value:"Flet new desktop architecture",id:"flet-new-desktop-architecture",level:2},{value:"Flet mobile architecture",id:"flet-mobile-architecture",level:2},{value:"Asyncio support",id:"asyncio-support",level:2},{value:"Development plan",id:"development-plan",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This post is a continuation of ",(0,i.kt)("a",{parentName:"p",href:"/blog/flet-mobile-strategy"},"Flet mobile strategy")," published a few months ago."),(0,i.kt)("p",null,"Our original approach to Flet running on a mobile device was Server-Driven UI. Though SDUI has its own benefits (like bypassing App Store for app updates) it doesn't work in all cases, requires web server to host Python part of the app and, as a result, adds latency which is not great for user actions requiring nearly instance UI response, like drawing apps."),(0,i.kt)("p",null,"I've been thinking on how to make Python runtime embedded into Flutter iOS or Android app to run user Python program. No doubt, it's technically possible as Kivy and BeeWare projects do that already."),(0,i.kt)("h2",{id:"current-flet-architecture"},"Current Flet architecture"),(0,i.kt)("p",null,"The current architecture of Flet desktop app is shown on the diagram below:"),(0,i.kt)("img",{src:"/img/blog/mobile-update/flet-desktop-architecture.svg",className:"screenshot-100"}),(0,i.kt)("p",null,"Running Flet program on a desktop involves three applications (processes) working together:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Python runtime")," (",(0,i.kt)("inlineCode",{parentName:"li"},"python3"),") - Python interpreter running your Python script. This is what you are starting from a command line. Python starts Fletd server and connects to it via WebSockets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fletd server")," (",(0,i.kt)("inlineCode",{parentName:"li"},"fletd"),")- Flet web server written in Go, listening on a TCP port. Fletd holds the state of all user sessions (for desktop app there is only one session) and dispatches page updates and user generated events between Python program and Flet client."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flet client")," (",(0,i.kt)("inlineCode",{parentName:"li"},"flet"),") - desktop app written in Flutter and displaying UI in a native OS window. Flet client connects to Fletd server via WebSockets.")),(0,i.kt)("p",null,"The architecture above works well for Flet web apps where web server is essential part, but for desktop it seems redundant:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If all three processes run on the same computer WebSockets could be replaced with sockets or named pipes with less overhead."),(0,i.kt)("li",{parentName:"ul"},'Fletd server has no much sense as there is only one user session and UI state is persistently stored in Flet desktop client which is never "reloaded".')),(0,i.kt)("h2",{id:"flet-new-desktop-architecture"},"Flet new desktop architecture"),(0,i.kt)("p",null,'Flet desktop app architecture can be simplified by replacing Fletd with a "stub" written in Python and communicating with Flet desktop client via sockets (Windows) and named pipes (macOS and Linux):'),(0,i.kt)("img",{src:"/img/blog/mobile-update/flet-desktop-architecture-v2.svg",className:"screenshot-70"}),(0,i.kt)("h2",{id:"flet-mobile-architecture"},"Flet mobile architecture"),(0,i.kt)("p",null,'Mobile applications are running in a very strict context with a number of limitations. For example, on iOS the app cannot spawn a new processes. Other words, Flet Flutter app cannot just start "python.exe" and pass your script as an argument.'),(0,i.kt)("p",null,"Luckily for us, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/extending/embedding.html"},"Python can be embedded")," into another app as a C library and Dart (the language in which Flutter apps are written) allows calling C libraries via ",(0,i.kt)("a",{parentName:"p",href:"https://dart.dev/guides/libraries/c-interop"},"FFI")," (Foreign Function Interface)."),(0,i.kt)("p",null,"Additionally, while Android allows loading of dynamically linked libraries iOS requires all libraries statically linked into app executable. ",(0,i.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/dart-ffi-native-libraries-flutter/"},"This article")," covers Dart FFI in more details, if you are curious."),(0,i.kt)("p",null,"Flet mobile architecture could look like this:"),(0,i.kt)("img",{src:"/img/blog/mobile-update/flet-mobile-architecture-v2.svg",className:"screenshot-40"}),(0,i.kt)("p",null,"Python runtime will be statically or dynamically linked with Flutter client app and called via FFI and/or named pipes."),(0,i.kt)("p",null,'Running Python on mobile will have some limitations though. Most notable one is the requirement to use "pure" Python modules or modules with native code compiled specifically for mobile ARM64 architecture.'),(0,i.kt)("h2",{id:"asyncio-support"},"Asyncio support"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},"Asyncio")," is part of Python 3 and we start seeing more and more libraries catching up with async/await programming model which is more effective for I/O-bound and UI logic."),(0,i.kt)("p",null,"Currently, Flet is spawning all UI event handlers in new threads and it's also a pain to see ",(0,i.kt)("inlineCode",{parentName:"p"},"threading.sleep()")," calls hogging threads here and there just to do some UI animation. All that looks expensive."),(0,i.kt)("p",null,"Using of async libraries from a sync code is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet/issues/128"},"possible"),", but looks hacky and inefficient as it keeps CPU busy just to wait async method to finish. So, we want a first-class support of async code in Flet app."),(0,i.kt)("p",null,"Async/await model is a state machine switching between tasks in a single thread. By going async Flet will able to utilize ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio-stream.html"},"streams")," for socket server and use async ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/websockets/"},"WebSockets library")," library. It will be possible to use both sync and async event handlers in a single Flet app without any compromises or hacks."),(0,i.kt)("p",null,"Even more exciting, async Flet will be able to run entirely in the browser within ",(0,i.kt)("a",{parentName:"p",href:"https://pyodide.org/"},"Pyodide")," - Python distribution based on WebAssembly (WASM). WebAssembly doesn't have multi-threading support yet, so running in a single thread is a must. Just imagine, Flet web app with a trully offline Flet PWA that does not require a web server to run a Python code!"),(0,i.kt)("h2",{id:"development-plan"},"Development plan"),(0,i.kt)("p",null,"We are going to crunch the scope above in a few iterations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Async API support with async WebSockets library. Works with the same Fletd in Go."),(0,i.kt)("li",{parentName:"ol"},'Fletd server ("stub") in Python to use with a desktop.'),(0,i.kt)("li",{parentName:"ol"},'Embedding Python with Fletd "stub" and user program into iOS.'),(0,i.kt)("li",{parentName:"ol"},"Embedding Python into Android."),(0,i.kt)("li",{parentName:"ol"},"Packaging mobile apps for iOS and Android.")),(0,i.kt)("admonition",{title:"HELP WANTED",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\ude4f I'm looking for a help from the community with developing C/C++/native code integration part between Flutter and Python on iOS and Android. It could be either free help or a paid job - let me know if you are interested!")),(0,i.kt)("p",null,"Hop to ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"Discord")," to discuss the plan, offer help, ask questions!"))}h.isMDXComponent=!0}}]);