"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[9288],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return b}});var l=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,l)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,l,n=function(t,e){if(null==t)return{};var r,l,n={},a=Object.keys(t);for(l=0;l<a.length;l++)r=a[l],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)r=a[l],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=l.createContext({}),s=function(t){var e=l.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=s(t.components);return l.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},h=l.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=s(r),h=n,b=u["".concat(i,".").concat(h)]||u[h]||m[h]||a;return r?l.createElement(b,o(o({ref:e},c),{},{components:r})):l.createElement(b,o({ref:e},c))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,o=new Array(a);o[0]=h;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[u]="string"==typeof t?t:n,o[1]=p;for(var s=2;s<a;s++)o[s]=r[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8946:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var l=r(7462),n=r(3366),a=(r(7294),r(3905)),o=["components"],p={slug:"matplotlib-and-plotly-charts",title:"Matplotlib and Plotly charts",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},i=void 0,s={permalink:"/website/blog/matplotlib-and-plotly-charts",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2022-10-24-matplotlib-and-plotly-charts.md",source:"@site/blog/2022-10-24-matplotlib-and-plotly-charts.md",title:"Matplotlib and Plotly charts",description:"\u6211\u4eec\u5f88\u9ad8\u5174\u5f15\u5165 matplotlib \u5e76\u5728Flet 0.1.63\u4e2d\u7ed8\u5236\u63a7\u5236\u63a7\u4ef6\uff01",date:"2022-10-24T00:00:00.000Z",formattedDate:"October 24, 2022",tags:[{label:"release",permalink:"/website/blog/tags/release"}],readingTime:1.95,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"matplotlib-and-plotly-charts",title:"Matplotlib and Plotly charts",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},prevItem:{title:"ResponsiveRow and mobile controls",permalink:"/website/blog/responsive-row-and-mobile-controls"},nextItem:{title:"Gesture detector",permalink:"/website/blog/gesture-detector"}},c={authorsImageUrls:[void 0]},u=[],m={toc:u};function h(t){var e=t.components,r=(0,n.Z)(t,o);return(0,a.kt)("wrapper",(0,l.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6211\u4eec\u5f88\u9ad8\u5174\u5f15\u5165 matplotlib \u5e76\u5728",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/flet/0.1.63/"},"Flet 0.1.63"),"\u4e2d\u7ed8\u5236\u63a7\u5236\u63a7\u4ef6\uff01"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://matplotlib.org/"},"matplotlib"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"https://plotly.com/python/"},"plotly"),"\u662f\u6700\u77e5\u540d\u7684 Python \u7ed8\u5236\u56fe\u4e66\u9986\uff0c\u5177\u6709\u5927\u91cf\u529f\u80fd\u3002 \u5b83\u4eec\u4e0e\u5176\u4ed6\u79d1\u5b66\u7684 Python \u5e93\uff08\u4f8b\u5982 Numpy \u6216 Pandas\uff09\u975e\u5e38\u517c\u5bb9\u3002"),(0,a.kt)("p",null,"\u6beb\u65e0\u7591\u95ee\uff0c\u5c06\u5176\u529f\u80fd\u590d\u5236\u4e3a\u7eaf flutter \u5c0f\u90e8\u4ef6\u662f\u4e0d\u53ef\u80fd\u7684\u3002 \u5e78\u8fd0\u7684\u662f\uff0cMatplotlib \u548c Plotly \u90fd\u53ef\u4ee5\u5c06\u56fe\u8868\u5bfc\u51fa\u5230\u5404\u79cd\u683c\u5f0f\uff0c\u4f8b\u5982 SVG\u3002 \u53e6\u4e00\u65b9\u9762\uff0cFlet \u53ef\u4ee5",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/image/svg-image.py"},"\u663e\u793a SVG \u56fe\u50cf"),"\uff0c\u8fd9\u7ed9\u51fa\u4e86\u5b8c\u7f8e\u7684\u7ec4\u5408 - Flet Matplotlib \u548c Plotly \u7684\u56fe\u8868\u63a7\u4ef6\uff01"),(0,a.kt)("p",null,"\u751f\u6210\u7684\u89e3\u51b3\u65b9\u6848\u975e\u5e38\u51fa\u8272\uff0c\u4ee5\u81f3\u4e8e\u53ef\u4ee5\u4ece",(0,a.kt)("a",{parentName:"p",href:"https://matplotlib.org/stable/gallery/index.html"},"matplotlib"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"https://plotly.com/python/"},"plotly"),"\u753b\u5eca\u4e2d\u663e\u793a\u51e0\u4e4e\u6240\u6709\u793a\u4f8b - \u60a8\u7684\u60f3\u8c61\u529b\u662f\u552f\u4e00\u7684\u9650\u5236\uff01"),(0,a.kt)("p",null,"\u7ed8\u5236",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/charts/mpl-barchart.py"},"\u7b80\u5355\u6761\u5f62\u56fe"),":"),(0,a.kt)("img",{src:"/img/docs/controls/charts/matplotlib-barchart.png",className:"screenshot-60"}),(0,a.kt)("p",null,"\u4e00\u4e2a\u4e0d\u9519\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/charts/mpl-scatter.py"},"\u5e26\u6709\u4f20\u5947\u7684\u6563\u5e03"),":"),(0,a.kt)("img",{src:"/img/docs/controls/charts/matplotlib-scatter.png",className:"screenshot-60"}),(0,a.kt)("p",null,"\u6216\u4e00\u4e9b\u591a\u521b\u56fe",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/charts/mpl-contour.py"},"CONTOUR \u56fe"),":"),(0,a.kt)("img",{src:"/img/docs/controls/charts/matplotlib-contour.png",className:"screenshot-60"}),(0,a.kt)("p",null,"\u68c0\u67e5\u6587\u6863\u4e2d\u7684 matplotlib \u5e76\u7ed8\u5236\u56fe\u8868\u63a7\u4ef6:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/controls/matplotlibchart"},"matplotlibchart")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/controls/plotlychart"},"plotlychart"))),(0,a.kt)("p",null,"\u63a2\u7d22",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/tree/main/python/controls/charts"},"Flet \u56fe\u8868\u793a\u4f8b"),"\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u793a\u4f8b\u5b66\u4e60 Python \u5e93:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://matplotlib.org/stable/gallery/index.html"},"Matplotlib Gallery")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://plotly.com/python/"},"Plotly Gallery"))),(0,a.kt)("p",null,"\u5c06\u6765\u53d1\u5e03\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u901a\u8fc7\u5b9e\u73b0\u81ea\u5b9a\u4e49",(0,a.kt)("a",{parentName:"p",href:"https://matplotlib.org/stable/users/explain/backends.html"},"\u540e\u7aef"),"\u6765\u4e3a matplotlib \u56fe\u8868\u6dfb\u52a0\u4e00\u4e2a\u4ea4\u4e92\u5f0f\u201c\u5de5\u5177\u680f\u201d\u3002 \u8fd8\u662f\u5bf9\u4e8e Flet \u7528\u6237\u6765\u8bf4\uff0c\u8fd9\u662f\u4e00\u4e2a\u5f88\u68d2\u7684\u8868\u73b0\uff1f \ud83d\ude09"),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u5f53 Flet \u652f\u6301\u5176\u4ed6\u8bed\u8a00\u65f6\uff0c\u6211\u4eec\u9700\u8981\u91cd\u65b0\u8bbf\u95ee\u56fe\u8868\uff0c\u4ee5\u4f7f\u5176\u6210\u4e3a\u8bed\u8a00 - \u654f\u6377\u7684\u8bed\u8a00\uff0c\u56e0\u4e3a\u5f53\u524d\u7684\u56fe\u8868\u5b9e\u73b0\u4f9d\u8d56\u4e8e Python \u5e93\u3002"),(0,a.kt)("p",null,"\u5347\u7ea7 Flet \u6a21\u5757\u5230\u6700\u65b0\u7248\u672c\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"pip install flet -upgrade"),"\uff09\uff0c\u5c06 auth \u96c6\u6210\u5728\u60a8\u7684\u5e94\u7528\u4e2d\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"\u8ba9\u6211\u4eec\u77e5\u9053"),"\u60a8\u7684\u60f3\u6cd5\uff01"),(0,a.kt)("p",null,"\u4eab\u53d7\uff01"))}h.isMDXComponent=!0}}]);