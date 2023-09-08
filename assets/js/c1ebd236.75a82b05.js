"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[358],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=l,m=d["".concat(i,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,p=new Array(o);p[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[d]="string"==typeof e?e:l,p[1]=a;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8508:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var n=r(7462),l=r(3366),o=(r(7294),r(3905)),p=["components"],a={title:"Mobile support",sidebar_label:"Mobile support"},i=void 0,u={unversionedId:"guides/python/mobile-support",id:"guides/python/mobile-support",title:"Mobile support",description:"\u672c\u6587\u6db5\u76d6\u4e86 Flet \u7684\u79fb\u52a8\u613f\u666f\u5e76\u63d0\u4f9b\u8def\u7ebf\u56fe\u3002",source:"@site/docs/guides/python/mobile-support.md",sourceDirName:"guides/python",slug:"/guides/python/mobile-support",permalink:"/website/docs/guides/python/mobile-support",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/mobile-support.md",tags:[],version:"current",frontMatter:{title:"Mobile support",sidebar_label:"Mobile support"}},s={},d=[{value:"\u670d\u52a1\u5668\u9a71\u52a8\u7684 UI",id:"\u670d\u52a1\u5668\u9a71\u52a8\u7684-ui",level:2},{value:"Flet Flet Flet Flet \u65b9\u6cd5",id:"flet-flet-flet-flet-\u65b9\u6cd5",level:3},{value:"Flet for Flutter \u7684\u5c0f\u90e8\u4ef6",id:"flet-for-flutter-\u7684\u5c0f\u90e8\u4ef6",level:3},{value:"\u767d\u8272\u6807\u8bb0 Flet \u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f",id:"\u767d\u8272\u6807\u8bb0-flet-\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"Flet \u5e94\u7528\u7a0b\u5e8f\u7684\u72ec\u7acb\u79fb\u52a8\u8f6f\u4ef6\u5305",id:"flet-\u5e94\u7528\u7a0b\u5e8f\u7684\u72ec\u7acb\u79fb\u52a8\u8f6f\u4ef6\u5305",level:3},{value:"\u5c06 Flet \u5d4c\u5165\u5230\u672c\u673a\u5e94\u7528\u4e2d",id:"\u5c06-flet-\u5d4c\u5165\u5230\u672c\u673a\u5e94\u7528\u4e2d",level:3}],c={toc:d};function f(e){var t=e.components,r=(0,l.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u6db5\u76d6\u4e86 Flet \u7684\u79fb\u52a8\u613f\u666f\u5e76\u63d0\u4f9b\u8def\u7ebf\u56fe\u3002"),(0,o.kt)("h2",{id:"\u670d\u52a1\u5668\u9a71\u52a8\u7684-ui"},"\u670d\u52a1\u5668\u9a71\u52a8\u7684 UI"),(0,o.kt)("p",null,"Flet \u662f\u670d\u52a1\u5668\u9a71\u52a8\u7684 UI\uff08SDUI\uff09\u6846\u67b6\u3002 SDUI \u662f\u4e00\u79cd\u65b0\u5174\u6280\u672f\uff0c\u662f",(0,o.kt)("a",{parentName:"p",href:"https://www.thoughtworks.com/en-ca/radar/techniques/server-driven-ui"},"\u6280\u672f\u96f7\u8fbe\u90ae\u62a5"),"\u4e2d\u6700\u597d\u7684\u63cf\u8ff0:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u5668\u9a71\u52a8\u7684 UI \u5c06\u6e32\u67d3\u5206\u79bb\u4e3a\u79fb\u52a8\u5e94\u7528\u4e2d\u7684\u901a\u7528\u5bb9\u5668\uff0c\u800c\u670d\u52a1\u5668\u63d0\u4f9b\u4e86\u6bcf\u4e2a\u89c6\u56fe\u7684\u7ed3\u6784\u548c\u6570\u636e\u3002 \u8fd9\u610f\u5473\u7740\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u66f4\u6539\u670d\u52a1\u5668\u53d1\u9001\u7684\u54cd\u5e94\u6765\u5b8c\u6210\u4e00\u5ea6\u9700\u8981\u5f80\u8fd4 App Store \u7684\u66f4\u6539\u3002")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://doordash.engineering/2021/08/24/improving-development-velocity-with-generic-server-driven-ui-components/"},"Doordash"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5"},"Airbnb"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://podcasts.apple.com/us/podcast/server-driven-ui-with-kevin-fang-jeff-hurray/id1453587931?i=1000509742062"},"Lyft"),"\u7b49\u516c\u53f8\u90fd\u6210\u529f\u5730\u5728\u5176\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6210\u529f\u5b9e\u73b0\u4e86\u670d\u52a1\u5668\u9a71\u52a8\u7684 UI\uff0c\u4ee5\u51cf\u5c11\u4e0a\u5e02\u65f6\u95f4\u3002"),(0,o.kt)("h3",{id:"flet-flet-flet-flet-\u65b9\u6cd5"},"Flet Flet Flet Flet \u65b9\u6cd5"),(0,o.kt)("p",null,"Flet \u5c06\u8981\u5728\u670d\u52a1\u5668\u4e0a\u4ee5 Python \u6216\u5176\u4ed6\u8bed\u8a00\u7f16\u5199\u7684\u7a0b\u5e8f\u6765\u5b9e\u73b0\u670d\u52a1\u5668\u9a71\u52a8\u7684 UI \u65b9\u6cd5\uff0c\u5e76\u4e14\u4ec5\u5728 App Store \u4e2d\u8fd0\u884c\u8584\u7684\u5ba2\u6237\u7aef\uff08",(0,o.kt)("inlineCode",{parentName:"p"},".apk"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},".ipa")," package\uff09\uff0c\u6216\u8005 Flutter \u5c0f\u90e8\u4ef6\u4f5c\u4e3a\u53e6\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u4e00\u90e8\u5206 - \u5df2\u4ea4\u4ed8\u5230\u624b\u673a:"),(0,o.kt)("img",{src:"/img/docs/getting-started/flet-highlevel-diagram.svg",className:"screenshot-100"}),(0,o.kt)("p",null,"\u4e00\u65e6\u51c6\u5907\u5c31\u7eea SDUI \u7ecf\u9a8c\uff0c\u6211\u4eec\u5c06\u5f00\u59cb\u5904\u7406",(0,o.kt)("a",{parentName:"p",href:"#standalone-mobile-package-for-flet-app"},"\u72ec\u7acb\u79fb\u52a8\u5305"),"\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u5728\u79fb\u52a8\u5e73\u53f0\u4e0a\u4e3a Flet \u5e94\u7528\u63d0\u4f9b\u6700\u4f73\u4f53\u9a8c\uff0c\u6211\u4eec\u8ba1\u5212\u5728\u4eca\u5e74\u5e74\u5e95\u4e4b\u524d\u53d1\u5e03\u4ee5\u4e0b\u9879\u76ee:"),(0,o.kt)("h3",{id:"flet-for-flutter-\u7684\u5c0f\u90e8\u4ef6"},"Flet for Flutter \u7684\u5c0f\u90e8\u4ef6"),(0,o.kt)("p",null,"\u6211\u4eec\u8981\u505a\u7684\u7b2c\u4e00\u6b65\u662f\u5c06 Flet \u5ba2\u6237\u7aef\u5206\u4e3a flutter \u5c0f\u90e8\u4ef6\uff0c\u5e76\u5728",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev%E4%B8%8A%E5%8F%91%E5%B8%83%E8%BD%AF%E4%BB%B6%E5%8C%85%E3%80%82"},"https://pub.dev\u4e0a\u53d1\u5e03\u8f6f\u4ef6\u5305\u3002"),"\n\u7136\u540e\uff0c\u79fb\u52a8\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5c06\u5c0f\u90e8\u4ef6\u96c6\u6210\u5230\u73b0\u6709\u6216\u65b0\u7684 Flutter \u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u4ee5\u5c06\u52a8\u6001\u670d\u52a1\u5668\u9a71\u52a8\u7684 UI \u4f53\u9a8c\u6dfb\u52a0\u5230\u6838\u5fc3\u5e94\u7528\u7a0b\u5e8f\u529f\u80fd\u4e2d\u3002 \u8fd8\u53ef\u4ee5\u4f7f\u7528\u5355\u4e2a Flet \u7a97\u53e3\u5c0f\u90e8\u4ef6\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Flutter \u5e94\u7528\u7a0b\u5e8f\uff0c\u4ec5\u4ec5\u662f\u4e3a\u4e86\u6258\u7ba1\u4e00\u4e2a\u5b8c\u6574\u7684 Flet \u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u5c06\u9075\u5faa Flutter \u6307\u5357\uff0c\u4ee5\u5c06\u5176\u5e94\u7528\u7a0b\u5e8f\u5305\u88c5\uff0c\u7b7e\u540d\u548c\u5206\u53d1\u5230",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/deployment/android"},"Android"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/deployment/ios"},"IOS"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/deployment/linux"},"Linux"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/deployment/macos"},"MacOS"),"\u6216",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/deployment/windows"},"Windows"),"\u5e73\u53f0\u3002"),(0,o.kt)("p",null,"Flet \u56e2\u961f\u5c06\u63d0\u4f9b\u6837\u54c1 CI \u7ba1\u9053\u6765\u81ea\u52a8\u5305\u88c5\uff0c\u7b7e\u540d\u548c\u53d1\u5e03 flutter \u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"\u4e0b\u4e00\u6b65\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u201c Flet studio\u201d\u5e94\u7528\u7a0b\u5e8f\uff08\u540d\u79f0\u4e0d\u662f\u6700\u7ec8\uff09\u548c Google Play\uff0c\u7528\u4e8e\u201c\u6d4b\u8bd5\u4f7f\u7528 Flet \u6846\u67b6\u5f00\u53d1\u7684\u79fb\u52a8\u4f53\u9a8c\u201d\u3002 \u5f00\u53d1\u4eba\u5458\u6216 Beta \u6d4b\u8bd5\u4eba\u5458\u5c06\u80fd\u591f\u5728 Flet studio \u4e2d\u201c\u6ce8\u518c\u201d\u5176\u6258\u7ba1 Flet \u5e94\u7528\u7a0b\u5e8f\u7684 URL\uff0c\u5e76\u7acb\u5373\u67e5\u770b\u5176\u5728\u79fb\u52a8\u8bbe\u5907\u4e0a\u7684\u6027\u80fd\u3002"),(0,o.kt)("h3",{id:"\u767d\u8272\u6807\u8bb0-flet-\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f"},"\u767d\u8272\u6807\u8bb0 Flet \u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f"),(0,o.kt)("p",null,"\u6211\u4eec\u5c06\u4e3a\u7528\u6237\u5e94\u7528\u5546\u5e97\u6216 Google Play \u5e10\u6237\u63d0\u4f9b\u81ea\u52a8\u53d1\u5e03\u767d\u6807 Flet \u5e94\u7528\u7a0b\u5e8f\u7684\u6307\u5357\u548c CI \u7ba1\u9053\u3002 \u8be5\u5e94\u7528\u7a0b\u5e8f\u5c06\u88ab\u201c\u56fa\u5b9a\u201d\u5230\u7279\u5b9a\u7684\u5e94\u7528\u7a0b\u5e8f URL\uff0c\u5e76\u4e14\u53ef\u4ee5\u989d\u5916\u6346\u7ed1\u5e94\u7528\u7a0b\u5e8f\u8d44\u4ea7\uff08\u5a92\u4f53\uff0c\u5b57\u4f53\uff09\u4ee5\u6700\u5927\u7a0b\u5ea6\u5730\u51cf\u5c11\u7f51\u7edc\u4f7f\u7528\u60c5\u51b5\u3002"),(0,o.kt)("h3",{id:"flet-\u5e94\u7528\u7a0b\u5e8f\u7684\u72ec\u7acb\u79fb\u52a8\u8f6f\u4ef6\u5305"},"Flet \u5e94\u7528\u7a0b\u5e8f\u7684\u72ec\u7acb\u79fb\u52a8\u8f6f\u4ef6\u5305"),(0,o.kt)("p",null,"\u6211\u4eec\u5c06\u8c03\u67e5\u65b9\u5f0f\u5e76\u5f00\u53d1\u4e00\u4e2a\u539f\u578b\uff0c\u4ee5\u5c06 Flet \u6846\u67b6\uff0c\u7528\u6237\u7a0b\u5e8f\uff0c\u8bed\u8a00\u8fd0\u884c\u65f6\u548c\u6240\u6709\u4f9d\u8d56\u9879\u6346\u7ed1\u5728\u4e00\u8d77\uff0c\u4ee5\u8fdb\u5165\u72ec\u7acb\u7684\u79fb\u52a8\u8f6f\u4ef6\u5305\uff08",(0,o.kt)("inlineCode",{parentName:"p"},".apk"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},".ipa"),"\u8f6f\u4ef6\u5305\uff09\uff0c\u56e0\u6b64 Flet \u7a0b\u5e8f\u4e0d\u5728 \u9700\u8981 Web \u670d\u52a1\u5668\u3002"),(0,o.kt)("h3",{id:"\u5c06-flet-\u5d4c\u5165\u5230\u672c\u673a\u5e94\u7528\u4e2d"},"\u5c06 Flet \u5d4c\u5165\u5230\u672c\u673a\u5e94\u7528\u4e2d"),(0,o.kt)("p",null,"\u6211\u4eec\u5c06\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/development/add-to-app"},"Flutter add-to-app"),"\u529f\u80fd\u63d0\u4f9b\u6307\u5357\uff0c\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u548c CI \u7ba1\u9053\uff0c\u4ee5\u5c06 Flet \u5c0f\u90e8\u4ef6\u96c6\u6210\u5230\u73b0\u6709\u7684\u672c\u673a Android \u548c iOS \u5e94\u7528\u7a0b\u5e8f\u4e2d\uff08\u672a\u4f7f\u7528 Flutter \u5f00\u53d1\uff09\u3002 ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/flutter/put-flutter-to-work-95f5fdcc592e"},"\u5c06 Flutter \u4e0a\u73ed"),"\u6587\u7ae0\u7ed9\u51fa\u4e86\u4e00\u4e2a\u73b0\u5b9e\u4e16\u754c\u4e2d\u7684\u793a\u4f8b\uff0c\u4ecb\u7ecd\u4e86\u5982\u4f55\u5c06 Flutter \u96c6\u6210\u5230\u73b0\u6709\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002"))}f.isMDXComponent=!0}}]);