"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[1349],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||h[d]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4943:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],p={slug:"flet-charts",title:"Flet Charts",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["releases"]},i=void 0,s={permalink:"/website/blog/flet-charts",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2023-04-12-flet-charts.md",source:"@site/blog/2023-04-12-flet-charts.md",title:"Flet Charts",description:"\u53bb\u5e74\u6211\u4eec\u5f15\u5165\u4e86\u5bf9Matplotlib \u548c Plotly \u56fe\u8868\u7684\u652f\u6301\u3002 \u4e24\u4e2a\u5e93\u90fd\u80fd\u591f\u5c06\u56fe\u8868\u5bfc\u51fa\u4e3a SVG \u56fe\u50cf\uff0c\u7136\u540e\u5c06\u5176\u663e\u793a\u5728 Flet \u5e94\u7528\u4e2d\u3002 \u4f46\u662f\uff0c\u8fd9\u79cd\u56fe\u8868\u5728\u5b9e\u73b0\u53ef\u89c6\u5316\u76ee\u7684\u7684\u540c\u65f6\u7f3a\u4e4f\u4e92\u52a8\u6027\u548c\u52a8\u753b\u3002",date:"2023-04-12T00:00:00.000Z",formattedDate:"April 12, 2023",tags:[{label:"releases",permalink:"/website/blog/tags/releases"}],readingTime:1.85,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"flet-charts",title:"Flet Charts",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["releases"]},prevItem:{title:"Canvas",permalink:"/website/blog/canvas"},nextItem:{title:"Standalone Flet web apps with Pyodide",permalink:"/website/blog/standalone-flet-web-apps-with-pyodide"}},c={authorsImageUrls:[void 0]},u=[{value:"linechart",id:"linechart",level:2},{value:"barchart",id:"barchart",level:2},{value:"piechart",id:"piechart",level:2},{value:"\u5176\u4ed6\u66f4\u6539",id:"\u5176\u4ed6\u66f4\u6539",level:2},{value:"pyodide 0.23",id:"pyodide-023",level:3}],h={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u53bb\u5e74\u6211\u4eec\u5f15\u5165\u4e86\u5bf9",(0,o.kt)("a",{parentName:"p",href:"/blog/matplotlib-and-plotly-charts"},"Matplotlib \u548c Plotly \u56fe\u8868"),"\u7684\u652f\u6301\u3002 \u4e24\u4e2a\u5e93\u90fd\u80fd\u591f\u5c06\u56fe\u8868\u5bfc\u51fa\u4e3a SVG \u56fe\u50cf\uff0c\u7136\u540e\u5c06\u5176\u663e\u793a\u5728 Flet \u5e94\u7528\u4e2d\u3002 \u4f46\u662f\uff0c\u8fd9\u79cd\u56fe\u8868\u5728\u5b9e\u73b0\u53ef\u89c6\u5316\u76ee\u7684\u7684\u540c\u65f6\u7f3a\u4e4f\u4e92\u52a8\u6027\u548c\u52a8\u753b\u3002"),(0,o.kt)("p",null,"\u4eca\u5929\uff0c\u6211\u4eec\u5c06\u6839\u636e Awesome ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/fl_chart"},"fl_chart"),"\u5e93\u6765\u91ca\u653e",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/flet/"},"Flet 0.5.2")," (",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/flet/)%EF%BC%81"},"https://pypi.org/project/flet/)\uff01")),(0,o.kt)("p",null,"\u5f15\u5165\u4e86\u4e09\u4e2a\u65b0\u56fe\u8868\u63a7\u4ef6:"),(0,o.kt)("h2",{id:"linechart"},"linechart"),(0,o.kt)("img",{src:"/website/img/docs/controls/charts/linechart-sample-1.gif",className:"screenshot-50"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/controls/linechart"},"docs"),"\xb7",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/tree/main/python/controls/charts"},"\u793a\u4f8b")),(0,o.kt)("h2",{id:"barchart"},"barchart"),(0,o.kt)("img",{src:"/website/img/docs/controls/charts/barchart-sample-2.gif",className:"screenshot-50"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/controls/barchart"},"docs"),"\xb7",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/tree/main/python/controls/charts"},"\u793a\u4f8b")),(0,o.kt)("h2",{id:"piechart"},"piechart"),(0,o.kt)("img",{src:"/website/img/docs/controls/charts/piechart-sample-2.gif",className:"screenshot-30"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/controls/piechart"},"docs"),"\xb7",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/tree/main/python/controls/charts"},"\u793a\u4f8b")),(0,o.kt)("p",null,":::\u6ce8\u610f\n\u6211\u4eec\u82b1\u4e86\u5f88\u591a\u65f6\u95f4\u5728\u5c1d\u8bd5\u4ee5 Flet \u65b9\u5f0f\u5b9e\u73b0\u5176\u5927\u591a\u6570\u529f\u80fd\u7684\u540c\u65f6\u7814\u7a76",(0,o.kt)("inlineCode",{parentName:"p"},"fl_chart"),"\u5e93\u3002 \u4f46\u662f\uff0c\u5982\u679c\u60a8\u5728 Flet \u4e2d\u770b\u5230\u4efb\u4f55\u7f3a\u5c11\u7684\u4e1c\u897f\uff0c\u4f46\u662f\u5728\u5e93\u4e2d\u53ef\u7528\uff0c\u8bf7",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet/issues"},"\u63d0\u4ea4\u65b0\u529f\u80fd\u8bf7\u6c42"),"\u3002\n:::"),(0,o.kt)("h2",{id:""}),(0,o.kt)("h2",{id:"\u5176\u4ed6\u66f4\u6539"},"\u5176\u4ed6\u66f4\u6539"),(0,o.kt)("h3",{id:"pyodide-023"},"pyodide 0.23"),(0,o.kt)("p",null,"Pyodide \u5728\u6d4f\u89c8\u5668\u4e2d\u63d0\u4f9b Python \u8fd0\u884c\u65f6\uff0c\u7528\u4e8e\u8fd0\u884c Flet \u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a\u9759\u6001\u7f51\u7ad9\uff0c\u5df2\u5347\u7ea7\u5230\u57fa\u4e8e Python 3.11.2 \u7684 0.23 \u7248\uff0c\u5e76\u63d0\u4f9b\u4e86\u4e00\u4e9b",(0,o.kt)("a",{parentName:"p",href:"https://blog.pyodide.org/posts/0.23-release/"},"\u5c3a\u5bf8\u548c\u6027\u80fd\u6539\u8fdb"),"\u3002{(",(0,o.kt)("a",{parentName:"p",href:"https://blog.pyodide.org/posts/0.23-release/)%E3%80%82%7B%7B%7B%7B%7B"},"https://blog.pyodide.org/posts/0.23-release/)\u3002{{{{{")," 1264}\u5185\u5b58\u6cc4\u6f0f\u4fee\u590d"),(0,o.kt)("p",null,"\u5728\u6b64\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u975e\u5e38\u5173\u6ce8 Flet \u5e94\u7528\u4e2d\u7684\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898\u3002 \u73b0\u5728\uff0c\u5173\u95ed\u7528\u6237\u4f1a\u8bdd\u540e\uff0c\u5176\u5185\u5b58\u5c06\u53ef\u9760\u5730\u91ca\u653e\u5e76\u6536\u96c6\u5783\u573e\u3002 \u8fd9\u4f7f\u5f97 Flet \u51c6\u5907\u4e0e\u8bb8\u591a\u7528\u6237\u4e00\u8d77\u751f\u4ea7\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"\u5347\u7ea7 Flet \u6a21\u5757\u5230\u6700\u65b0\u7248\u672c\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"pip install flet -upgrade"),"\uff09\uff0c\u8bd5\u8bd5\u56fe\u8868\uff0c\u5e76",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"\u8ba9\u6211\u4eec\u77e5\u9053"),"\u60a8\u7684\u60f3\u6cd5\uff01"),(0,o.kt)("p",null,"\u563f\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet"},"{Flet \u9879\u76ee"),"\u5df2\u7ecf\u5230\u8fbe\u4e86 5K \u661f\u661f \u2b50\ufe0f-\u8c22\u8c22\u5927\u5bb6\u7684\u6301\u7eed\u652f\u6301\uff01"))}d.isMDXComponent=!0}}]);