"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[2771],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||l;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},750:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),a=["components"],i={slug:"flet-for-android",title:"Flet for Android",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["releases"]},u=void 0,p={permalink:"/website/blog/flet-for-android",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2023-07-08-flet-for-android.md",source:"@site/blog/2023-07-08-flet-for-android.md",title:"Flet for Android",description:"\ud83e\udd16Android \u652f\u6301\u5728\u8fd9\u91cc\uff01",date:"2023-07-08T00:00:00.000Z",formattedDate:"July 8, 2023",tags:[{label:"releases",permalink:"/website/blog/tags/releases"}],readingTime:2.035,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"flet-for-android",title:"Flet for Android",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["releases"]},prevItem:{title:"Flet for FastAPI",permalink:"/website/blog/flet-for-fastapi"},nextItem:{title:"Flet for iOS",permalink:"/website/blog/flet-for-ios"}},s={authorsImageUrls:[void 0]},d=[{value:"FAQ",id:"faq",level:2},{value:"\u5982\u4f55\u6253\u5305\u6211\u7684 Google Play Flet \u5e94\u7528\u7a0b\u5e8f\uff1f",id:"\u5982\u4f55\u6253\u5305\u6211\u7684-google-play-flet-\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"\u60a8\u662f\u5426\u4f1a\u4e3a Windows\uff0cMacOS \u548c Linux \u63d0\u4f9b\u5305\u88c5\uff1f",id:"\u60a8\u662f\u5426\u4f1a\u4e3a-windowsmacos-\u548c-linux-\u63d0\u4f9b\u5305\u88c5",level:3},{value:"Flet v0.9.0 \u53d1\u884c\u8bf4\u660e",id:"flet-v090-\u53d1\u884c\u8bf4\u660e",level:2}],c={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ud83e\udd16Android \u652f\u6301\u5728\u8fd9\u91cc\uff01"),(0,l.kt)("a",{href:"https://play.google.com/store/apps/details?id=com.appveyor.flet",target:"_blank"},(0,l.kt)("img",{src:"/website/img/docs/getting-started/testing-on-android/google-play-badge.png",className:"screenshot-40"})),(0,l.kt)("p",null,"\u4f7f\u7528 Flet Android \u5e94\u7528\u7a0b\u5e8f\uff0c\u60a8\u53ef\u4ee5\u770b\u5230 Flet Python App \u5728\u5e94\u7528\u7a0b\u5e8f\u672c\u8eab\u5728\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\u65f6\u5728 Android \u8bbe\u5907\u4e0a\u7684\u5916\u89c2\u548c\u884c\u4e3a\u3002"),(0,l.kt)("p",null,"\u4e0e iOS \u76f8\u4f3c\uff0cFlet \u7684 Android \u662f\u4e00\u4e2a\u5b8c\u5168\u5728 Python \u4e2d\u5199\u5165 Python \u7684 flutter \u5e94\u7528\u7a0b\u5e8f: ",(0,l.kt)("a",{parentName:"p",href:"https://pub.dev/packages/serious_python"},"{",(0,l.kt)("inlineCode",{parentName:"a"},"serious_python")),"\u548c",(0,l.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flet"},(0,l.kt)("inlineCode",{parentName:"a"},"flet")),"\u3002 \u751f\u6210\u7684\u5e94\u7528\u7a0b\u5e8f\u5305\u5728\u6280\u672f\u4e0a\u7b26\u5408 Google Play \u7684\u8981\u6c42\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5728 Pure Python \u4e2d\u53d1\u5e03\u51fa\u8272\u7684 Android \u5e94\u7528\u7a0b\u5e8f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/guides/python/testing-on-android"},"\u9075\u5faa\u672c\u6307\u5357")," ","*","*","\u5f00\u59cb\u6d4b\u8bd5 Android \u4e0a\u7684 Flet \u5e94\u7528\u7a0b\u5e8f\u3002 \u63a2\u7d22\u5e94\u7528\u7a0b\u5e8f\uff0c\u6d4f\u89c8\u56fe\u5e93\uff0c\u64ad\u653e\u793a\u4f8b\u9879\u76ee\u548c\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e\u3002")))),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"\u5982\u4f55\u6253\u5305\u6211\u7684-google-play-flet-\u5e94\u7528\u7a0b\u5e8f"},"\u5982\u4f55\u6253\u5305\u6211\u7684 Google Play Flet \u5e94\u7528\u7a0b\u5e8f\uff1f"),(0,l.kt)("p",null,"\u6211\u4eec\u5c06\u4e3a Bootstrap Flutter \u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u4e00\u4e2a\u9879\u76ee\u6a21\u677f\uff0c\u4ee5\u53ca\u5982\u4f55\u5c06 Flutter\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"serious_python"),"\u8f6f\u4ef6\u5305\u548c\u60a8\u7684 Python \u5e94\u7528\u7a0b\u5e8f\u7ec4\u5408\u5728\u4e00\u8d77\uff0c\u4ee5\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684 Android \u5e94\u7528\u7a0b\u5e8f\u5e76\u5c06\u5176\u53d1\u5e03\u5230 Google Play \u4e2d\u3002"),(0,l.kt)("p",null,"\u68c0\u67e5",(0,l.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/serious-python#usage"},"{",(0,l.kt)("inlineCode",{parentName:"a"},"serious_python"),"\u7684 readme"),"\uff0c\u4ee5\u83b7\u53d6\u6709\u5173\u5982\u4f55\u521b\u5efa flutter bootstrap \u5e76\u5305\u88c5 python \u5e94\u7528\u7a0b\u5e8f\u4ee5\u8fd0\u884c\u5b83\u7684\u8bf4\u660e\u3002 \u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/serious-python/tree/main/example/flet_example"},"Flet_example"),"\u9879\u76ee\u4f5c\u4e3a\u8d77\u70b9\u3002"),(0,l.kt)("h3",{id:"\u60a8\u662f\u5426\u4f1a\u4e3a-windowsmacos-\u548c-linux-\u63d0\u4f9b\u5305\u88c5"},"\u60a8\u662f\u5426\u4f1a\u4e3a Windows\uff0cMacOS \u548c Linux \u63d0\u4f9b\u5305\u88c5\uff1f"),(0,l.kt)("p",null,"\u662f\u7684\uff01 \u76ee\u524d\uff0cFlet \u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u5305\u88c5\u4e86``flet pack''\u547d\u4ee4\u548c pyinstaller\u3002 \u751f\u4ea7\u7684 App Bundle \u589e\u52a0\u4e86\u6027\u80fd\u548c\u5927\u5c0f\u5f00\u9500\uff0c\u5e76\u4e14\u5f88\u96be\u81ea\u5b9a\u4e49\uff0c\u56e0\u6b64\u6211\u4eec\u5c06\u7528\u672c\u673a\u6251\u9762\u5305\u88c5\u66ff\u6362\u3002"),(0,l.kt)("h2",{id:"flet-v090-\u53d1\u884c\u8bf4\u660e"},"Flet v0.9.0 \u53d1\u884c\u8bf4\u660e"),(0,l.kt)("p",null,"\u8981\u5728 Android \u4e0a\u8fdb\u884c\u6d4b\u8bd5\uff0c\u60a8\u9700\u8981\u5c06 Flet \u5b89\u88c5\u5347\u7ea7\u5230 v0.9.0\u3002"),(0,l.kt)("p",null,"\u6709",(0,l.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet/blob/main/CHANGELOG.md#090"},"\u4e00\u4e9b\u66f4\u6539"),"\u4e3b\u8981\u652f\u6301 Flet CLI \u4e2d\u7684 Android\u3002 \u5982\u679c\u60a8\u6ce8\u610f\u5230\u4e00\u4e9b\u4e0d\u5bfb\u5e38\u7684\u4e1c\u897f\uff0c\u8bf7\u544a\u8bc9\u6211\u4eec\u3002"),(0,l.kt)("p",null,"\u4eab\u53d7\uff01"))}f.isMDXComponent=!0}}]);