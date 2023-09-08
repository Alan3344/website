"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[225],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3772:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"ShakeDetector",sidebar_label:"ShakeDetector",slug:"shakedetector"},s=void 0,c={unversionedId:"controls/shakedetector",id:"controls/shakedetector",title:"ShakeDetector",description:"\u68c0\u6d4b\u624b\u673a\u6447\u52a8\u3002",source:"@site/docs/controls/shakedetector.md",sourceDirName:"controls",slug:"/controls/shakedetector",permalink:"/website/docs/controls/shakedetector",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/shakedetector.md",tags:[],version:"current",frontMatter:{title:"ShakeDetector",sidebar_label:"ShakeDetector",slug:"shakedetector"},sidebar:"docs",previous:{title:"ShaderMask",permalink:"/website/docs/controls/shadermask"},next:{title:"Tooltip",permalink:"/website/docs/controls/tooltip"}},p={},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u6447\u52a8\u68c0\u6d4b\u5668\u6837\u672c",id:"\u6447\u52a8\u68c0\u6d4b\u5668\u6837\u672c",level:3},{value:"properties",id:"properties",level:2},{value:"<code>minimum_shake_count</code>",id:"minimum_shake_count",level:3},{value:"<code>shake_count_reset_time_ms</code>",id:"shake_count_reset_time_ms",level:3},{value:"<code>shake_slop_time_ms</code>",id:"shake_slop_time_ms",level:3},{value:"<code>shake_threshold_gravity</code>",id:"shake_threshold_gravity",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"<code>on_shake</code>",id:"on_shake",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u68c0\u6d4b\u624b\u673a\u6447\u52a8\u3002"),(0,a.kt)("p",null,"\u5b83\u662f\u975e\u89c6\u89c9\u7684\uff0c\u5e94\u6dfb\u52a0\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"page.overlay"),"\u5217\u8868\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u6447\u52a8\u68c0\u6d4b\u5668\u6837\u672c"},"\u6447\u52a8\u68c0\u6d4b\u5668\u6837\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    shd = ft.ShakeDetector(\n        minimum_shake_count=2,\n        shake_slop_time_ms=300,\n        shake_count_reset_time_ms=1000,\n        on_shake=lambda _: print("SHAKE DETECTED!"),\n    )\n    page.overlay.append(shd)\n\n    page.add(ft.Text("Program body"))\n\nft.app(target=main)\n')),(0,a.kt)("h2",{id:"properties"},"properties"),(0,a.kt)("h3",{id:"minimum_shake_count"},(0,a.kt)("inlineCode",{parentName:"h3"},"minimum_shake_count")),(0,a.kt)("p",null,"\u89e6\u53d1\u6447\u52a8\u4e4b\u524d\u6240\u9700\u7684\u6447\u52a8\u6570\u91cf\u3002 \u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\u3002"),(0,a.kt)("h3",{id:"shake_count_reset_time_ms"},(0,a.kt)("inlineCode",{parentName:"h3"},"shake_count_reset_time_ms")),(0,a.kt)("p",null,"\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff0c\u7136\u540e\u6447\u52a8\u8ba1\u6570\u91cd\u7f6e\u3002 \u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"3000")," MS\u3002"),(0,a.kt)("h3",{id:"shake_slop_time_ms"},(0,a.kt)("inlineCode",{parentName:"h3"},"shake_slop_time_ms")),(0,a.kt)("p",null,"\u6447\u52a8\u4e4b\u95f4\u7684\u6700\u77ed\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002 \u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"500")," MS\u3002"),(0,a.kt)("h3",{id:"shake_threshold_gravity"},(0,a.kt)("inlineCode",{parentName:"h3"},"shake_threshold_gravity")),(0,a.kt)("p",null,"\u6447\u52a8\u68c0\u6d4b\u9608\u503c\uff0cgs\u3002 \u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"2.7"),"G\u3002"),(0,a.kt)("h2",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,a.kt)("h3",{id:"on_shake"},(0,a.kt)("inlineCode",{parentName:"h3"},"on_shake")),(0,a.kt)("p",null,"\u68c0\u6d4b\u5230\u6447\u52a8\u65f6\u89e6\u53d1\u3002"))}m.isMDXComponent=!0}}]);