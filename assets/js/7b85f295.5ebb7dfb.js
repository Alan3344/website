"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[7373],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3011:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Progressive web apps (PWA)",sidebar_label:"Progressive web apps (PWA)"},p=void 0,s={unversionedId:"guides/python/deploying-web-app/progressive-web-apps",id:"guides/python/deploying-web-app/progressive-web-apps",title:"Progressive web apps (PWA)",description:"\u6e10\u8fdb\u5f0f Web \u5e94\u7528\u7a0b\u5e8f\uff08PWAS\uff09\u63d0\u4f9b\u4e86\u4e00\u79cd\u5c06\u7c7b\u4f3c\u5e94\u7528\u7a0b\u5e8f\u7684\u7f51\u7ad9\u53d8\u6210\u7c7b\u4f3c\u7f51\u7ad9\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u6cd5\u3002",source:"@site/docs/guides/python/deploying-web-app/progressive-web-apps.md",sourceDirName:"guides/python/deploying-web-app",slug:"/guides/python/deploying-web-app/progressive-web-apps",permalink:"/website/docs/guides/python/deploying-web-app/progressive-web-apps",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/deploying-web-app/progressive-web-apps.md",tags:[],version:"current",frontMatter:{title:"Progressive web apps (PWA)",sidebar_label:"Progressive web apps (PWA)"},sidebar:"docs",previous:{title:"running-flet-with-fastapi",permalink:"/website/docs/guides/python/deploying-web-app/running-flet-with-fastapi"},next:{title:"Hosting providers",permalink:"/website/docs/guides/python/deploying-web-app/hosting-providers"}},u={},d=[{value:"\u81ea\u5b9a\u4e49 PWA",id:"\u81ea\u5b9a\u4e49-pwa",level:2},{value:"\u6e05\u5355",id:"\u6e05\u5355",level:3},{value:"iCONS",id:"icons",level:3},{value:"PWA \u5b89\u88c5\u8bf4\u660e",id:"pwa-\u5b89\u88c5\u8bf4\u660e",level:2},{value:"Safari",id:"safari",level:3},{value:"chrome",id:"chrome",level:3},{value:"\u684c\u9762",id:"\u684c\u9762",level:4},{value:"\u79fb\u52a8",id:"\u79fb\u52a8",level:4},{value:"edge",id:"edge",level:3},{value:"Android \u4e0a\u7684 Firefox",id:"android-\u4e0a\u7684-firefox",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6e10\u8fdb\u5f0f Web \u5e94\u7528\u7a0b\u5e8f\uff08PWAS\uff09\u63d0\u4f9b\u4e86\u4e00\u79cd\u5c06\u7c7b\u4f3c\u5e94\u7528\u7a0b\u5e8f\u7684\u7f51\u7ad9\u53d8\u6210\u7c7b\u4f3c\u7f51\u7ad9\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u68c0\u67e5",(0,i.kt)("a",{parentName:"p",href:"https://www.pcmag.com/how-to/how-to-use-progressive-web-apps"},"PWAS \u5c06\u7f51\u7ad9\u53d8\u6210\u5e94\u7528: \u8fd9\u5c31\u662f PWA \u7b80\u4ecb\u7684\u65b9\u5f0f"),"\u3002"),(0,i.kt)("p",null,"\u652f\u6301 PWA \u7684\u6d4f\u89c8\u5668\uff08",(0,i.kt)("a",{parentName:"p",href:"#pwa-installation-instructions"},"\u5b89\u88c5\u6307\u4ee4"),"\uff09:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"}," Chrome "),"\u5728\u6240\u6709\u5e73\u53f0\u4e0a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u8fb9\u7f18"),"\u5728\u6240\u6709\u5e73\u53f0\u4e0a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"}," firefox "),"\u5728 Android \u4e0a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"}," Safari ")," iOS \u548c iPados")),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49-pwa"},"\u81ea\u5b9a\u4e49 PWA"),(0,i.kt)("p",null,":::\u4fe1\u606f\n\u672c\u8282\u4e2d\u7684\u4fe1\u606f\u57fa\u4e8e\u4ee5\u4e0b\u8d44\u6e90\uff08\u67e5\u770b\u5b83\u4eec\u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff09:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"},"\u6709\u5173 PWAS \u7684\u5e38\u89c4\u4fe1\u606f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"},"PWA \u6e05\u5355"),"\n:::")),(0,i.kt)("h3",{id:"\u6e05\u5355"},"\u6e05\u5355"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json"),"\u4e2d\u66f4\u6539 PWA \u7684\u540d\u79f0\uff0c\u63cf\u8ff0\uff0c\u989c\u8272\u548c\u5176\u4ed6\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u5fc5\u987b\u653e\u5728",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/python/deploying-web-app/customizing-web-app"},"Assets Directory"),"\u7684\u6839\u6e90\u4e2d\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u60a8\u8981\u81ea\u5b9a\u4e49\u7684\u6700\u5e38\u89c1\u6e05\u5355\u9879\u76ee\u7684\u94fe\u63a5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest/name"},(0,i.kt)("inlineCode",{parentName:"a"},"name"))," - \u901a\u5e38\u663e\u793a\u7ed9\u7528\u6237\u7684 Web \u5e94\u7528\u7a0b\u5e8f\u7684\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest/short_name"},(0,i.kt)("inlineCode",{parentName:"a"},"short_name"))," - \u5982\u679c\u6ca1\u6709\u8db3\u591f\u7684\u7a7a\u95f4\u663e\u793a",(0,i.kt)("inlineCode",{parentName:"li"},"name"),"\uff0c\u5219\u663e\u793a\u7ed9\u7528\u6237\u7684 Web \u5e94\u7528\u7a0b\u5e8f\u7684\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest/description"},(0,i.kt)("inlineCode",{parentName:"a"},"description"))," - \u8bf4\u660e\u5e94\u7528\u7a0b\u5e8f\u7684\u4f5c\u7528\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest/theme_color"},(0,i.kt)("inlineCode",{parentName:"a"},"theme_color"))," - \u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u7684\u9ed8\u8ba4\u4e3b\u9898\u989c\u8272\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest/background_color"},(0,i.kt)("inlineCode",{parentName:"a"},"background_color"))," - \u5b9a\u4e49\u4e86\u5360\u4f4d\u7b26\u7684\u80cc\u666f\u989c\u8272\uff0c\u7528\u4e8e\u5728\u52a0\u8f7d\u6837\u5f0f\u56fe\u4e4b\u524d\u663e\u793a\u5e94\u7528\u7a0b\u5e8f\u9875\u9762\u3002")),(0,i.kt)("h3",{id:"icons"},"iCONS"),(0,i.kt)("p",null,"\u81ea\u5b9a\u4e49\u56fe\u6807\u653e\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"icons"),"\u76ee\u5f55\u4e2d\u7684\u8d44\u4ea7\u76ee\u5f55\u4e2d:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iCON-1192.png"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"iCon-512.png"),"- Windows Taskbar \u4e2d\u663e\u793a\u7684\u5e94\u7528\u7a0b\u5e8f\u56fe\u6807\u3002"),(0,i.kt)("li",{parentName:"ul"},"``",(0,i.kt)("inlineCode",{parentName:"li"},"Icon baskable-192.png"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"iCON-maskable-512.png"),"-\u5728 Android \u4e2d\u663e\u793a\u7684\u5e94\u7528\u56fe\u6807\u3002"),(0,i.kt)("li",{parentName:"ul"},"`",(0,i.kt)("inlineCode",{parentName:"li"},"apple-touch-icon-192.png"),"- iOS \u4e2d\u663e\u793a\u7684\u5e94\u7528\u56fe\u6807\u3002")),(0,i.kt)("h2",{id:"pwa-\u5b89\u88c5\u8bf4\u660e"},"PWA \u5b89\u88c5\u8bf4\u660e"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u5141\u8bb8\u5728\u53f0\u5f0f\u673a\u6216\u4e3b\u5c4f\u5e55\u4e0a\u5b89\u88c5 Flet Web \u5e94\u7528\u7a0b\u5e8f\u7684\u6d4f\u89c8\u5668\u5217\u8868\uff0c\u4ee5\u53ca\u6709\u5173\u5982\u4f55\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u8bf4\u660e\u3002 \u5141\u8bb8\u60a8\u4f7f\u7528\u8fd9\u4e9b\u8bf4\u660e\u4ee5\u53ca\u56fe\u50cf\u6765\u6559\u80b2\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u7528\u6237\u3002"),(0,i.kt)("h3",{id:"safari"},"Safari"),(0,i.kt)("p",null,"\u8981\u5c06 PWA \u5b89\u88c5\u5230 iOS \u548c iPados \u4e0a\u7684\u4e3b\u5c4f\u5e55\u4e0a:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u5c4f\u5e55\u5e95\u90e8\u70b9\u51fb",(0,i.kt)("img",{src:"/img/docs/getting-started/ios-share-icon.svg",className:"icon-button"}),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u5230\u4e3b\u5c4f\u5e55",(0,i.kt)("img",{src:"/img/docs/getting-started/add-box-icon.svg",className:"icon-button"})," "),"\u6253\u5f00\u5b89\u88c5\u5e94\u7528\u7a0b\u5e8f\u5bf9\u8bdd\u6846\u3002")),(0,i.kt)("h3",{id:"chrome"},"chrome"),(0,i.kt)("p",null,"Chrome \u5728\u53ef\u7528\u7684\u6240\u6709\u5e73\u53f0\u4e0a\u652f\u6301 PWA\u3002"),(0,i.kt)("h4",{id:"\u684c\u9762"},"\u684c\u9762"),(0,i.kt)("p",null,"Chrome for Desktop \u5728\u5730\u5740\u680f\u4e2d\u663e\u793a\u4e00\u4e2a\u6309\u94ae\u4ee5\u6253\u5f00\u201c\u5b89\u88c5\u5e94\u7528\u7a0b\u5e8f\u201d\u5bf9\u8bdd\u6846:"),(0,i.kt)("img",{src:"/img/docs/getting-started/chrome-pwa-install.png",className:"screenshot-60"}),(0,i.kt)("h4",{id:"\u79fb\u52a8"},"\u79fb\u52a8"),(0,i.kt)("p",null,"\u8981\u5728 Chrome \u7684\u79fb\u52a8\u7248\u672c\u4e0a\u5b89\u88c5\u5e94\u7528\u7a0b\u5e8f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,i.kt)("img",{src:"/img/docs/getting-started/more-vert-icon.svg",className:"icon-button"}),"\u83dc\u5355\u6309\u94ae\u4ee5\u6253\u5f00 Chrome \u4e3b\u83dc\u5355\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5b89\u88c5\u5e94\u7528\u7a0b\u5e8f"),"\u6253\u5f00\u5e94\u7528\u7a0b\u5e8f\u5b89\u88c5\u5bf9\u8bdd\u6846\u3002")),(0,i.kt)("h3",{id:"edge"},"edge"),(0,i.kt)("p",null,"Edge \u5728\u53ef\u7528\u7684\u6240\u6709\u5e73\u53f0\u4e0a\u652f\u6301 PWA\u3002 \u4e0e Chrome \u7c7b\u4f3c\uff0c\u5730\u5740\u680f\u4e2d\u6709\u4e00\u4e2a\u6309\u94ae\u53ef\u4ee5\u6253\u5f00\u201c\u5b89\u88c5\u5e94\u7528\u7a0b\u5e8f\u201d\u5bf9\u8bdd\u6846:"),(0,i.kt)("img",{src:"/img/docs/getting-started/edge-pwa-install.png",className:"screenshot-60"}),(0,i.kt)("h3",{id:"android-\u4e0a\u7684-firefox"},"Android \u4e0a\u7684 Firefox"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,i.kt)("img",{src:"/img/docs/getting-started/more-vert-icon.svg",className:"icon-button"}),"\u83dc\u5355\u6309\u94ae\u4ee5\u6253\u5f00 Firefox \u4e3b\u83dc\u5355\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u6253\u5f00\u5e94\u7528\u7a0b\u5e8f\u5b89\u88c5\u5bf9\u8bdd\u6846\u3002")))}m.isMDXComponent=!0}}]);