"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[3401],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5184:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],i={slug:"flet-mobile-update",title:"Flet mobile update",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["news"]},p=void 0,u={permalink:"/website/blog/flet-mobile-update",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2022-12-08-flet-mobile-update.md",source:"@site/blog/2022-12-08-flet-mobile-update.md",title:"Flet mobile update",description:"\u8fd9\u7bc7\u6587\u7ae0\u662f\u51e0\u4e2a\u6708\u524d\u51fa\u7248\u7684Flet \u79fb\u52a8\u7b56\u7565\u7684\u5ef6\u7eed\u3002",date:"2022-12-08T00:00:00.000Z",formattedDate:"December 8, 2022",tags:[{label:"news",permalink:"/website/blog/tags/news"}],readingTime:6.385,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"flet-mobile-update",title:"Flet mobile update",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["news"]},prevItem:{title:"Packaging desktop apps with a custom icon",permalink:"/website/blog/packaging-desktop-apps-with-custom-icon"},nextItem:{title:"Flet versioning and pre-releases",permalink:"/website/blog/flet-versioning-and-pre-releases"}},s={authorsImageUrls:[void 0]},c=[{value:"\u5f53\u524d Flet \u67b6\u6784",id:"\u5f53\u524d-flet-\u67b6\u6784",level:2},{value:"Flet \u79fb\u52a8\u4f53\u7cfb\u7ed3\u6784",id:"flet-\u79fb\u52a8\u4f53\u7cfb\u7ed3\u6784",level:2},{value:"asyncio \u652f\u6301",id:"asyncio-\u652f\u6301",level:2},{value:"\u5f00\u53d1\u8ba1\u5212",id:"\u5f00\u53d1\u8ba1\u5212",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u662f\u51e0\u4e2a\u6708\u524d\u51fa\u7248\u7684",(0,o.kt)("a",{parentName:"p",href:"/blog/flet-mobile-strategy"},"Flet \u79fb\u52a8\u7b56\u7565"),"\u7684\u5ef6\u7eed\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u79fb\u52a8\u8bbe\u5907\u4e0a\u8fd0\u884c Flet \u7684\u539f\u59cb\u65b9\u6cd5\u662f\u670d\u52a1\u5668\u9a71\u52a8\u7684 UI\u3002 \u5c3d\u7ba1 SDUI \u5177\u6709\u5176\u81ea\u8eab\u7684\u597d\u5904\uff08\u4f8b\u5982\uff0c\u7ed5\u8fc7\u5e94\u7528\u7a0b\u5e8f\u66f4\u65b0\u7684\u5e94\u7528\u5546\u5e97\uff09\uff0c\u4f46\u5728\u6240\u6709\u60c5\u51b5\u4e0b\u90fd\u4e0d\u8d77\u4f5c\u7528\uff0c\u9700\u8981 Web \u670d\u52a1\u5668\u6258\u7ba1\u5e94\u7528\u7a0b\u5e8f\u7684 Python\uff0c\u56e0\u6b64\u589e\u52a0\u4e86\u5ef6\u8fdf\uff0c\u8fd9\u5bf9\u9700\u8981\u7528\u6237\u64cd\u4f5c\u5e76\u4e0d\u662f\u5f88\u597d \u51e0\u4e4e\u5b9e\u4f8b UI \u54cd\u5e94\uff0c\u4f8b\u5982\u7ed8\u5236\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"\u6211\u4e00\u76f4\u5728\u8003\u8651\u5982\u4f55\u4f7f Python \u8fd0\u884c\u65f6\u5d4c\u5165 Flutter IOS \u6216 Android \u5e94\u7528\u7a0b\u5e8f\u4ee5\u8fd0\u884c\u7528\u6237 Python \u7a0b\u5e8f\u3002 \u6beb\u65e0\u7591\u95ee\uff0c\u8fd9\u5728\u6280\u672f\u4e0a\u662f\u53ef\u80fd\u7684\uff0c\u5c31\u50cf Kivy \u548c Beeware \u9879\u76ee\u5df2\u7ecf\u8fd9\u6837\u505a\u3002"),(0,o.kt)("h2",{id:"\u5f53\u524d-flet-\u67b6\u6784"},"\u5f53\u524d Flet \u67b6\u6784"),(0,o.kt)("p",null,"Flet \u684c\u9762\u5e94\u7528\u7684\u5f53\u524d\u67b6\u6784\u663e\u793a\u5728\u4e0b\u56fe:"),(0,o.kt)("img",{src:"/img/blog/mobile-update/flet-desktop-architecture.svg",className:"screenshot-100"}),(0,o.kt)("p",null,"\u5728\u684c\u9762\u4e0a\u8fd0\u884c Flet \u7a0b\u5e8f\u6d89\u53ca\u4e09\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff08\u8fdb\u7a0b\uff09\u4e00\u8d77\u5de5\u4f5c:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"}," Python Runtime "),"\uff08",(0,o.kt)("inlineCode",{parentName:"li"},"python3"),"\uff09 - Python \u89e3\u91ca\u5668\u8fd0\u884c Python \u811a\u672c\u3002 \u8fd9\u662f\u60a8\u4ece\u547d\u4ee4\u884c\u5f00\u59cb\u7684\u3002 Python \u542f\u52a8 Flet D \u670d\u52a1\u5668\uff0c\u5e76\u901a\u8fc7 WebSockets \u8fde\u63a5\u5230\u5b83\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"}," Flet D \u670d\u52a1\u5668"),"\uff08",(0,o.kt)("inlineCode",{parentName:"li"},"fletd"),"\uff09 - Flet Web \u670d\u52a1\u5668\u5199\u5728 GO \u4e2d\uff0c\u5728 TCP \u7aef\u53e3\u4e0a\u4fa6\u542c\u3002 Flet d \u4fdd\u7559\u6240\u6709\u7528\u6237\u4f1a\u8bdd\u7684\u72b6\u6001\uff08\u5bf9\u4e8e\u684c\u9762\u5e94\u7528\uff0c\u53ea\u6709\u4e00\u4e2a\u4f1a\u8bdd\uff09\uff0c\u5e76\u4e14\u5728 Python \u7a0b\u5e8f\u548c Flet \u5ba2\u6237\u7aef\u4e4b\u95f4\u6d3e\u9063\u9875\u9762\u66f4\u65b0\u548c\u7528\u6237\u751f\u6210\u7684\u4e8b\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"}," Flet client "),"\uff08",(0,o.kt)("inlineCode",{parentName:"li"},"flet"),"\uff09 - \u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u7528\u6251\u6714\u8ff7\u79bb\uff0c\u5e76\u5728\u672c\u673a OS \u7a97\u53e3\u4e2d\u663e\u793a UI\u3002 Flet \u5ba2\u6237\u7aef\u901a\u8fc7 Websocket \u8fde\u63a5\u5230 Flet D \u670d\u52a1\u5668\u3002")),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u4f53\u7cfb\u7ed3\u6784\u975e\u5e38\u9002\u5408 Flet Web \u5e94\u7528\u7a0b\u5e8f\uff0c\u5176\u4e2d Web \u670d\u52a1\u5668\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u90e8\u5206\uff0c\u4f46\u662f\u5bf9\u4e8e\u684c\u9762\u6765\u8bf4\uff0c\u5b83\u4f3c\u4e4e\u662f\u591a\u4f59\u7684:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728\u540c\u4e00\u8ba1\u7b97\u673a Websockets \u4e0a\u8fd0\u884c\u7684\u6240\u6709\u4e09\u4e2a\u8fdb\u7a0b\u90fd\u53ef\u4ee5\u7528\u63d2\u5ea7\u6216\u547d\u540d\u7684\u7ba1\u9053\u66ff\u6362\u4e3a\u8f83\u5c11\u7684\u5f00\u9500\u3002"),(0,o.kt)("li",{parentName:"ul"},"Flet d \u670d\u52a1\u5668\u6ca1\u6709\u592a\u591a\u610f\u4e49")),(0,o.kt)("p",null,"Flet \u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u67b6\u6784\u53ef\u4ee5\u901a\u8fc7\u7528 Python \u7f16\u5199\u7684\u201c\u5b58\u6839\u201d\u66ff\u6362 Flet d \u6765\u7b80\u5316\uff0c\u5e76\u901a\u8fc7 sockets\uff08Windows\uff09\u548c\u540d\u4e3a Pipes\uff08MacOS and Linux\uff09\u4e0e Flet \u684c\u9762\u5ba2\u6237\u7aef\u8fdb\u884c\u901a\u4fe1\u3002"),(0,o.kt)("img",{src:"/img/blog/mobile-update/flet-desktop-architecture-v2.svg",className:"screenshot-70"}),(0,o.kt)("h2",{id:"flet-\u79fb\u52a8\u4f53\u7cfb\u7ed3\u6784"},"Flet \u79fb\u52a8\u4f53\u7cfb\u7ed3\u6784"),(0,o.kt)("p",null,"\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u5728\u975e\u5e38\u4e25\u683c\u7684\u4e0a\u4e0b\u6587\u4e2d\u8fd0\u884c\uff0c\u5e76\u5177\u6709\u8bb8\u591a\u9650\u5236\u3002 \u4f8b\u5982\uff0c\u5728 iOS \u4e0a\uff0c\u5e94\u7528\u7a0b\u5e8f\u65e0\u6cd5\u4ea7\u751f\u65b0\u7684\u8fc7\u7a0b\u3002 \u5176\u4ed6\u5355\u8bcd\uff0cFlet flutter \u5e94\u7528\u7a0b\u5e8f\u4e0d\u80fd\u4ec5\u4ec5\u542f\u52a8\u201c python.exe\u201d\uff0c\u7136\u540e\u5c06\u60a8\u7684\u811a\u672c\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u3002"),(0,o.kt)("p",null,"\u5bf9\u6211\u4eec\u6765\u8bf4\u5e78\u8fd0\u7684\u662f\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/extending/embedding.html"},"Python \u53ef\u4ee5\u88ab\u5d4c\u5165"),"\u4f5c\u4e3a C \u5e93\u548c DART\uff08\u7f16\u5199 Flutter Apps \u7684\u8bed\u8a00\uff09\u5141\u8bb8\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"https://dart.dev/guides/libraries/c-interop"},"FFI"),"\uff08exourtal Function \u63a5\u53e3\uff09\u8c03\u7528 C \u5e93\u3002"),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u867d\u7136 Android \u5141\u8bb8\u52a0\u8f7d\u52a8\u6001\u94fe\u63a5\u7684\u5e93 iOS iOS \u9700\u8981\u9759\u6001\u94fe\u63a5\u5230\u5e94\u7528\u7a0b\u5e8f\u53ef\u6267\u884c\u6587\u4ef6\u7684\u6240\u6709\u5e93\u3002 ",(0,o.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/dart-ffi-native-libraries-flutter/"},"\u672c\u6587"),"\u5982\u679c\u60a8\u5f88\u597d\u5947\uff0c\u8bf7\u63d0\u4f9b\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"Flet \u79fb\u52a8\u4f53\u7cfb\u7ed3\u6784\u770b\u8d77\u6765\u50cf\u8fd9\u6837:"),(0,o.kt)("img",{src:"/img/blog/mobile-update/flet-mobile-architecture-v2.svg",className:"screenshot-40"}),(0,o.kt)("p",null,"Python \u8fd0\u884c\u65f6\u5c06\u4e0e Flutter Client \u5e94\u7528\u7a0b\u5e8f\u9759\u6001\u6216\u52a8\u6001\u94fe\u63a5\uff0c\u5e76\u901a\u8fc7 FFI \u548c/\u6216\u547d\u540d\u7684\u7ba1\u9053\u81f4\u7535\u3002"),(0,o.kt)("p",null,"\u4e0d\u8fc7\uff0c\u5728\u79fb\u52a8\u8bbe\u5907\u4e0a\u8fd0\u884c Python \u5c06\u6709\u4e00\u4e9b\u9650\u5236\u3002 \u6700\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5fc5\u987b\u4f7f\u7528\u4e13\u95e8\u4e3a\u79fb\u52a8 ARM64 \u4f53\u7cfb\u7ed3\u6784\u7f16\u8bd1\u7684\u672c\u673a\u4ee3\u7801\u4f7f\u7528\u201c\u7eaf\u201d Python \u6a21\u5757\u6216\u6a21\u5757\u3002"),(0,o.kt)("h2",{id:"asyncio-\u652f\u6301"},"asyncio \u652f\u6301"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},"asyncio"),"\u662f Python 3 \u7684\u4e00\u90e8\u5206\uff0c\u6211\u4eec\u5f00\u59cb\u770b\u5230\u8d8a\u6765\u8d8a\u591a\u7684\u5e93\u8d76\u4e0a\u5f02\u6b65/\u7b49\u5f85\u7f16\u7a0b\u6a21\u578b\uff0c\u8fd9\u5bf9\u4e8e I/O-Bound \u548c UI \u903b\u8f91\u66f4\u6709\u6548\u3002"),(0,o.kt)("p",null,"\u5f53\u524d\uff0cFlet \u6b63\u5728\u7528\u65b0\u7ebf\u7a0b\u4ea7\u751f\u6240\u6709 UI \u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u5e76\u4e14\u770b\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"threading.sleep()"),"\u5728\u8fd9\u91cc\u548c\u90a3\u91cc\u8c03\u7528 Hogging \u7ebf\u7a0b\u4e5f\u5f88\u75db\u82e6\uff0c\u53ea\u662f\u4e3a\u4e86\u505a\u4e00\u4e9b UI \u52a8\u753b\u3002 \u6240\u6709\u770b\u8d77\u6765\u90fd\u5f88\u6602\u8d35\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u540c\u6b65\u4ee3\u7801\u7684 ASYNC \u5e93\u662f",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet/issues/128"},"\u53ef\u80fd\u7684"),"\uff0c\u4f46\u770b\u8d77\u6765\u5f88\u9a87\u4eba\u542c\u95fb\u4e14\u6548\u7387\u4f4e\u4e0b\uff0c\u56e0\u4e3a\u5b83\u4f7f CPU \u4fdd\u6301\u5fd9\u788c\u53ea\u662f\u7b49\u5f85\u5f02\u6b65\u65b9\u6cd5\u5b8c\u6210\u3002 \u56e0\u6b64\uff0c\u6211\u4eec\u5e0c\u671b\u5728 Flet \u5e94\u7528\u4e2d\u5bf9\u5f02\u6b65\u4ee3\u7801\u7684\u4e00\u6d41\u652f\u6301\u3002"),(0,o.kt)("p",null,"\u5f02\u6b65/\u7b49\u5f85\u6a21\u578b\u662f\u4e00\u4e2a\u72b6\u6001\u673a\uff0c\u5728\u5355\u4e2a\u7ebf\u7a0b\u4e2d\u7684\u4efb\u52a1\u4e4b\u95f4\u5207\u6362\u3002 \u901a\u8fc7\u4f7f\u7528 Async Flet \u5c06\u80fd\u591f\u5229\u7528\u5957\u63a5\u5b57\u670d\u52a1\u5668\u7684",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio-stream.html"},"Streams"),"\u5e76\u4f7f\u7528 Async ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/websockets/"},"WebSockets Library"),"\u5e93\u3002 \u53ef\u4ee5\u5728\u5355\u4e2a Flet \u5e94\u7528\u4e2d\u540c\u65f6\u4f7f\u7528\u540c\u6b65\u548c\u5f02\u6b65\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u800c\u65e0\u9700\u4efb\u4f55\u59a5\u534f\u6216\u9ed1\u5ba2\u653b\u51fb\u3002"),(0,o.kt)("p",null,"\u66f4\u4ee4\u4eba\u5174\u594b\u7684\u662f\uff0c\u5f02\u6b65 Flet \u5c06\u80fd\u591f\u5b8c\u5168\u5728",(0,o.kt)("a",{parentName:"p",href:"https://pyodide.org/"},"Pyodide")," - \u57fa\u4e8e WebAssembly\uff08WASM\uff09\u7684 python \u5206\u53d1\u4e2d\u8fd0\u884c\u3002 WebAssembly \u8fd8\u6ca1\u6709\u591a\u7ebf\u7a0b\u652f\u6301\uff0c\u56e0\u6b64\u5fc5\u987b\u5728\u5355\u4e2a\u7ebf\u7a0b\u4e2d\u8fd0\u884c\u3002 \u8bd5\u60f3\u4e00\u4e0b\uff0cFlet Web \u5e94\u7528\u7a0b\u5e8f\u5e26\u6709 trully Offline Flet PWA\uff0c\u4e0d\u9700\u8981 Web \u670d\u52a1\u5668\u8fd0\u884c Python \u4ee3\u7801\uff01"),(0,o.kt)("h2",{id:"\u5f00\u53d1\u8ba1\u5212"},"\u5f00\u53d1\u8ba1\u5212"),(0,o.kt)("p",null,"\u6211\u4eec\u5c06\u5728\u4e00\u4e9b\u8fed\u4ee3\u4e2d\u5904\u7406\u4e0a\u9762\u7684\u8303\u56f4:"),(0,o.kt)("p",null,"1.\u4e0e\u5f02\u6b65 Websockets \u5e93\u7684\u5f02\u6b65 API \u652f\u6301\u3002 \u5728 Go \u4e2d\u4f7f\u7528\u76f8\u540c\u7684 Flet d\u3002 2. Flet D \u670d\u52a1\u5668\uff08\u201c stub\u201d\uff09\u4e0e\u684c\u9762\u4e00\u8d77\u4f7f\u7528\u3002 3.\u5c06 python \u5d4c\u5165 Flet d\u201c stub\u201d\u548c\u7528\u6237\u7a0b\u5e8f\u4e2d\u7684 python \u4e2d\u3002 4.\u5c06 Python \u5d4c\u5165 Android \u4e2d\u3002 5.\u5305\u88c5 iOS \u548c Android \u7684\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,":::WautionHelp \u60f3\u8981\n\ud83d\ude4f \u6211\u6b63\u5728\u5bfb\u627e\u5e2e\u52a9\n\u8df3\u5230",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"Discord"),"\u8ba8\u8bba\u8ba1\u5212\uff0c\u63d0\u4f9b\u5e2e\u52a9\uff0c\u63d0\u51fa\u95ee\u9898\uff01"))}m.isMDXComponent=!0}}]);