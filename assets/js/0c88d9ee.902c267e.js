"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[8025],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1504:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l="cardContainer_nYI1",r=n(6010);function i(e){return e.href?a.createElement("a",{href:e.href,className:(0,r.Z)("card padding--md",l)},e.children):a.createElement("div",{className:(0,r.Z)("card padding--md",l)},e.children)}},2199:function(e,t,n){n.r(t),n.d(t,{ImageCard:function(){return m},assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=n(1504),o=["components"],p={slug:"standalone-flet-web-apps-with-pyodide",title:"Standalone Flet web apps with Pyodide",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["releases"]},s=void 0,d={permalink:"/website/blog/standalone-flet-web-apps-with-pyodide",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2023-02-06-standalone-flet-web-apps-with-pyodide.md",source:"@site/blog/2023-02-06-standalone-flet-web-apps-with-pyodide.md",title:"Standalone Flet web apps with Pyodide",description:"\u6211\u4eec\u521a\u521a\u53d1\u5e03\u4e86\u5177\u6709\u8d85\u7ea7\u4ee4\u4eba\u5174\u594b\u7684\u65b0\u529f\u80fd\u7684Flet 0.4.0 - \u5305\u88c5 Flet \u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u72ec\u7acb\u9759\u6001\u7f51\u7ad9\uff0c\u53ef\u4ee5\u5b8c\u5168\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\uff01 \u8be5\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u53d1\u5e03\u7ed9\u9759\u6001\u7f51\u7ad9\u7684\u4efb\u4f55\u514d\u8d39\u6258\u7ba1\uff0c\u4f8b\u5982 GitHub \u9875\u9762\u6216 CloudFlare \u9875\u9762\u3002 \u611f\u8c22Pyodide - WebAssembly \u7684 Python \u7aef\u53e3\uff01",date:"2023-02-06T00:00:00.000Z",formattedDate:"February 6, 2023",tags:[{label:"releases",permalink:"/website/blog/tags/releases"}],readingTime:5.075,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"standalone-flet-web-apps-with-pyodide",title:"Standalone Flet web apps with Pyodide",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["releases"]},prevItem:{title:"Flet Charts",permalink:"/website/blog/flet-charts"},nextItem:{title:"Packaging desktop apps with a custom icon",permalink:"/website/blog/packaging-desktop-apps-with-custom-icon"}},u={authorsImageUrls:[void 0]},c=[{value:"Quick Flet with Pyodide demo",id:"quick-flet-with-pyodide-demo",level:2},{value:"\u5185\u7f6e Flet d \u670d\u52a1\u5668",id:"\u5185\u7f6e-flet-d-\u670d\u52a1\u5668",level:2},{value:"\ud83d\udca5 \u7834\u788e\u66f4\u6539",id:"-\u7834\u788e\u66f4\u6539",level:3},{value:"\u5f02\u6b65\u652f\u6301",id:"\u5f02\u6b65\u652f\u6301",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}],m=function(e){var t=e.title,n=e.href,a=e.imageUrl;return(0,r.kt)("div",{className:"col col--4 margin-bottom--lg"},(0,r.kt)(i.Z,{href:n,mdxType:"Card"},(0,r.kt)("img",{src:"/website/img/gallery/"+a,className:"screenshot-100"}),(0,r.kt)("h2",null,t)))},f={toc:c,ImageCard:m};function g(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6211\u4eec\u521a\u521a\u53d1\u5e03\u4e86\u5177\u6709\u8d85\u7ea7\u4ee4\u4eba\u5174\u594b\u7684\u65b0\u529f\u80fd\u7684",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/flet/"},"Flet 0.4.0")," - ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/python/publishing-static-website"},"\u5305\u88c5 Flet \u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u72ec\u7acb\u9759\u6001\u7f51\u7ad9"),"\uff0c\u53ef\u4ee5\u5b8c\u5168\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\uff01 \u8be5\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u53d1\u5e03\u7ed9\u9759\u6001\u7f51\u7ad9\u7684\u4efb\u4f55\u514d\u8d39\u6258\u7ba1\uff0c\u4f8b\u5982 GitHub \u9875\u9762\u6216 CloudFlare \u9875\u9762\u3002 \u611f\u8c22",(0,r.kt)("a",{parentName:"p",href:"https://pyodide.org/en/stable/"},"Pyodide")," - WebAssembly \u7684 Python \u7aef\u53e3\uff01"),(0,r.kt)("img",{src:"/website/img/blog/pyodide/pyodide-logo.png",className:"screenshot-50"}),(0,r.kt)("p",null,"You can quickly build awesome single-page applications (SPA) entirely in Python and host them everywhere! No HTML, CSS or JavaScript required!"),(0,r.kt)("h2",{id:"quick-flet-with-pyodide-demo"},"Quick Flet with Pyodide demo"),(0,r.kt)("p",null,"Install the latest Flet package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip install flet --upgrade\n")),(0,r.kt)("p",null,"Create a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"counter.py")," app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="counter.py"',title:'"counter.py"'},'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Flet counter example"\n    page.vertical_alignment = ft.MainAxisAlignment.CENTER\n\n    txt_number = ft.TextField(value="0", text_align=ft.TextAlign.RIGHT, width=100)\n\n    def minus_click(e):\n        txt_number.value = str(int(txt_number.value) - 1)\n        page.update()\n\n    def plus_click(e):\n        txt_number.value = str(int(txt_number.value) + 1)\n        page.update()\n\n    page.add(\n        ft.Row(\n            [\n                ft.IconButton(ft.icons.REMOVE, on_click=minus_click),\n                txt_number,\n                ft.IconButton(ft.icons.ADD, on_click=plus_click),\n            ],\n            alignment=ft.MainAxisAlignment.CENTER,\n        )\n    )\n\nft.app(main)\n')),(0,r.kt)("p",null,"Run a brand-new ",(0,r.kt)("inlineCode",{parentName:"p"},"flet publish")," command to publish Flet app as a static website:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flet publish counter.py\n")),(0,r.kt)("p",null,"The website will be published to ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," directory next to ",(0,r.kt)("inlineCode",{parentName:"p"},"counter.py"),".\nGive website a try using built-in Python web server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python -m http.server --directory dist\n")),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000")," in your browser to check the published app."),(0,r.kt)("img",{src:"/website/img/docs/getting-started/flet-counter-safari.png",className:"screenshot-50"}),(0,r.kt)("p",null,"Here are a few live Flet apps hosted at Cloudflare Pages:"),(0,r.kt)("div",{className:"margin-top--lg"},(0,r.kt)("section",{className:"row"},(0,r.kt)(m,{title:"To-Do",href:"https://gallery.flet.dev/todo/",imageUrl:"todo.png",mdxType:"ImageCard"}),(0,r.kt)(m,{title:"Icons browser",href:"https://gallery.flet.dev/icons-browser/",imageUrl:"icons-browser.png",mdxType:"ImageCard"}),(0,r.kt)(m,{title:"Calc",href:"https://gallery.flet.dev/calculator/",imageUrl:"calc.png",mdxType:"ImageCard"}),(0,r.kt)(m,{title:"Solitaire",href:"https://gallery.flet.dev/solitaire/",imageUrl:"solitaire.png",mdxType:"ImageCard"}),(0,r.kt)(m,{title:"Trolli",href:"https://gallery.flet.dev/trolli/",imageUrl:"trolli.png",mdxType:"ImageCard"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/guides/python/publishing-static-website"},"\u68c0\u67e5\u6307\u5357"),"\u4ee5\u83b7\u53d6\u6709\u5173\u53d1\u5e03 Flet \u5e94\u7528\u7a0b\u5e8f\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"\u5185\u7f6e-flet-d-\u670d\u52a1\u5668"},"\u5185\u7f6e Flet d \u670d\u52a1\u5668"),(0,r.kt)("p",null,"Flet 0.4.0 \u8fd8\u5b9e\u73b0\u4e86",(0,r.kt)("a",{parentName:"p",href:"https://flet.dev/blog/flet-mobile-update#flet-new-desktop-architecture"},"\u65b0 Flet \u684c\u9762\u67b6\u6784"),"\u3002"),(0,r.kt)("p",null,"\u5b83\u53d6\u4ee3\u4e86 Flet d \u670d\u52a1\u5668\u7528 python \u7f16\u5199\u7684\u8f7b\u5de7\u57ab\u7247\u7f16\u5199\u7684 Flet d \u670d\u52a1\u5668\uff0c\u5e76\u5e26\u6709\u8bb8\u591a\u4f18\u70b9:"),(0,r.kt)("p",null,"1.\u8fd0\u884c Flet \u5e94\u7528\u7a0b\u5e8f\u53ea\u9700\u8981 2 \u4e2a\u7cfb\u7edf\u8fdb\u7a0b: Python \u89e3\u91ca\u5668\u548c Flutter \u5ba2\u6237\u7aef\u3002 2.\u8f83\u5c11\u7684\u901a\u4fe1\u5f00\u9500\uff08\u51cf\u53bb Python \u548c Flet D \u4e4b\u95f4\u7684\u4e24\u4e2a\u7f51\u7edc\u5564\u9152\u82b1\uff09\u548c Lower Latency\uff08Shim \u5728 MacOS/Linux \u4e0a\u4f7f\u7528 Windows \u548c Unix \u57df\u63d2\u5ea7\u4e0a\u4f7f\u7528 TCP\uff09\u3002 3. Shim \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5728 Windows \u4e0a\u7ed1\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"\uff0c\u8fd9\u66f4\u5b89\u5168\u3002 4.\u7531'flet Pack \u751f\u6210\u7684\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u6346\u7ed1\u5305\u7684\u5927\u5c0f\u51cf\u5c0f\u4e86\u301c8 MB\u3002"),(0,r.kt)("p",null,"\u8fd8\u9700\u8981\u5b9e\u73b0\u6765\u652f\u6301\u6bd5\u53ef\u80fd\uff08\u6211\u4eec\u4e0d\u80fd\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c GO Web \u670d\u52a1\u5668\uff0c\u5bf9\u5417\uff1f ",(0,r.kt)("inlineCode",{parentName:"p"},"Image.src"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Audio.src"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Page.fonts"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Container.image_src"),"\uff09\u73b0\u5728\u4e5f\u80fd\u591f\u901a\u8fc7\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u63d0\u4f9b\u5b8c\u6574\u7684\u8def\u5f84\uff0c\u4ee5\u53ca\u901a\u8fc7\u63d0\u4f9b\u76f8\u5bf9\u8def\u5f84\u6765\u4ece\u672c\u5730\u6587\u4ef6\u52a0\u8f7d\u5b83\u4eec\u3002 \u5bf9\u4e8e\u684c\u9762\u5e94\u7528\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"src"),"\u5c5e\u6027\u4e2d\u7684\u8def\u5f84\u53ef\u80fd\u662f\u4ee5\u4e0b\u4e00\u4e2a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"assets"),"\u76ee\u5f55\u7684\u8def\u5f84\uff0c\u4f8b\u5982\u6216\u6ca1\u6709\u542f\u52a8\u659c\u7ebf\uff0c\u4f8b\u5982: ",(0,r.kt)("inlineCode",{parentName:"li"},"/image.png"),"\u6216",(0,r.kt)("inlineCode",{parentName:"li"},"image.png"),"\u3002 \u4e0d\u5e94\u5305\u62ec\u6587\u7269\u7684\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u673a\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u7edd\u5bf9\u8def\u5f84\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"c: \\ projects \\ app \\ Assets \\ image.png"),"\u6216",(0,r.kt)("inlineCode",{parentName:"li"},"/users/john/images/picture.png"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5b8c\u6574\u7684 URL\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"https://mysite.com/images/pic.png"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"li"},"page.on_error = lambda e: print\uff08\u201c\u9875\u9762\u9519\u8bef: \u201d\uff0ce.data\uff09"),"\u67e5\u770b\u5931\u8d25\u7684\u56fe\u50cf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flet")," Python \u8f6f\u4ef6\u5305\u5df2\u5206\u4e3a\u4e24\u4e2a\u8f6f\u4ef6\u5305: ",(0,r.kt)("inlineCode",{parentName:"li"},"flet-core'\u548c"),"flet`\u3002"),(0,r.kt)("li",{parentName:"ul"},"PDM \u66ff\u6362\u4e3a\u8bd7\u6b4c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beartype"),"\u65e0\u5904\u4e0d\u5728\u3002")),(0,r.kt)("h3",{id:"-\u7834\u788e\u66f4\u6539"},"\ud83d\udca5 \u7834\u788e\u66f4\u6539"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8def\u7531\u65b9\u6848\u4ece\u201c hash\u201d\u66f4\u6539\u4e3a\u201c\u8def\u5f84\u201d\uff08\u5728\u5e94\u7528\u7a0b\u5e8f URL \u7684\u672b\u5c3e\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"/\uff03/"),"\uff09\u3002 \u4f7f\u7528`ft.app\uff08main\uff0croute_url_strategy =\u201c hash\u201d\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u72ec\u7acb\u684c\u9762 Flet \u5e94\u7528\u7a0b\u5e8f\u4e2d\u4e0d\u518d\u652f\u6301 OAuth \u8eab\u4efd\u9a8c\u8bc1\u3002")),(0,r.kt)("h2",{id:"\u5f02\u6b65\u652f\u6301"},"\u5f02\u6b65\u652f\u6301"),(0,r.kt)("p",null,"Flet \u5e94\u7528\u7a0b\u5e8f\u73b0\u5728\u53ef\u4ee5\u5199\u4e3a\u5f02\u6b65\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"asyncio"),"\u4e0e\u5176\u4ed6 python async \u5e93\u4e00\u8d77\u4f7f\u7528\u3002 \u5728 Flet \u4e2d\u81ea\u7136\u652f\u6301\u8c03\u7528 Coroutines\uff0c\u56e0\u6b64\u60a8\u65e0\u9700\u5305\u88c5\u5b83\u4eec\u5373\u53ef\u540c\u6b65\u8fd0\u884c\u3002"),(0,r.kt)("p",null,"\u8981\u5f00\u59cb\u4f7f\u7528\u5f02\u6b65 Flet \u5e94\u7528\u7a0b\u5e8f\uff0c\u60a8\u5e94\u8be5\u5236\u4f5c",(0,r.kt)("inlineCode",{parentName:"p"},"main()"),"\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"async"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\nasync def main(page: ft.Page):\n    await page.add_async(ft.Text("Hello, async world!"))\n\nft.app(main)\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/guides/python/async-apps"},"\u8bfb\u53d6\u6307\u5357"),"\u6709\u5173\u7f16\u5199 async Flet \u5e94\u7528\u7a0b\u5e8f\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,r.kt)("p",null,"Flet 0.4.0 \u5e26\u6765\u4ee5\u4e0b\u4ee4\u4eba\u5174\u594b\u7684\u529f\u80fd:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u7684 Web \u5e94\u7528\u7a0b\u5e8f\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c Pyodide \u5e76\u6258\u7ba1\u5728\u5ec9\u4ef7\u7684\u6258\u7ba1\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5185\u7f6e Flet D \u670d\u52a1\u5668\u66f4\u5feb\uff0c\u66f4\u5b89\u5168\u7684\u4f53\u7cfb\u7ed3\u6784\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u5e94\u7528\u7a0b\u5e8f\u652f\u6301\u3002")),(0,r.kt)("p",null,"\u5c06 Flet \u6a21\u5757\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"pip install flet -upgrade"),"\uff09\uff0c\u5c1d\u8bd5",(0,r.kt)("inlineCode",{parentName:"p"},"flet publish"),"\u547d\u4ee4\u5c1d\u8bd5\u4e00\u4e0b\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"\u8ba9\u6211\u4eec\u77e5\u9053"),"\u60a8\u7684\u60f3\u6cd5\uff01"),(0,r.kt)("p",null,"\u563f\uff0c\u987a\u4fbf\u8bf4\u4e00\u53e5\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet"},"Flet project"),"\u5df2\u7ecf\u5230\u8fbe \u2b50\ufe0f4.2k \u661f\u661f \u2b50\ufe0f\uff08\u4ec5\u4e00\u4e2a\u6708\u5185+1k\uff09 - \u7ee7\u7eed\u524d\u8fdb\uff01"))}g.isMDXComponent=!0}}]);