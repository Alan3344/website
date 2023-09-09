"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[6309],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7355:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],p={slug:"canvas",title:"Canvas",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["releases"]},s=void 0,i={permalink:"/website/blog/canvas",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2023-04-26-canvas.md",source:"@site/blog/2023-04-26-canvas.md",title:"Canvas",description:"\u91ca\u653e\u60a8\u7684\u5185\u90e8\u827a\u672f\u5bb6 \ud83e\uddd1\u200d\ud83c\udfa8\uff0c\u5e76\u7528\u5168\u65b0\u7684canvas\u63a7\u4ef6\u63d0\u9ad8\u60a8\u7684 Flet \u521b\u9020\u529b\uff0c\u521a\u521a\u5728{Flet 0.6.0\u4e2d\u53d1\u5e03\uff01",date:"2023-04-26T00:00:00.000Z",formattedDate:"April 26, 2023",tags:[{label:"releases",permalink:"/website/blog/tags/releases"}],readingTime:2.885,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"canvas",title:"Canvas",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["releases"]},prevItem:{title:"Scrolling controls and Theming",permalink:"/website/blog/scrolling-controls-and-theming"},nextItem:{title:"Flet Charts",permalink:"/website/blog/flet-charts"}},c={authorsImageUrls:[void 0]},u=[{value:"\u5176\u4ed6\u66f4\u6539",id:"\u5176\u4ed6\u66f4\u6539",level:2},{value:"\u4e30\u5bcc\u7684\u6587\u672c\u652f\u6301",id:"\u4e30\u5bcc\u7684\u6587\u672c\u652f\u6301",level:3},{value:"<code>url</code>\u6309\u94ae\u7684\u5c5e\u6027",id:"url\u6309\u94ae\u7684\u5c5e\u6027",level:3},{value:"\u66f4\u597d\u7684 Web \u652f\u6301",id:"\u66f4\u597d\u7684-web-\u652f\u6301",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u91ca\u653e\u60a8\u7684\u5185\u90e8\u827a\u672f\u5bb6 \ud83e\uddd1\u200d\ud83c\udfa8\uff0c\u5e76\u7528\u5168\u65b0\u7684",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/canvas"},"canvas"),"\u63a7\u4ef6\u63d0\u9ad8\u60a8\u7684 Flet \u521b\u9020\u529b\uff0c\u521a\u521a\u5728",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/flet/"},"{Flet 0.6.0"),"\u4e2d\u53d1\u5e03\uff01"),(0,o.kt)("p",null,"\u5e06\u5e03\u4f7f\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e00\u7ec4\u539f\u8bed\u6216\u201c\u5f62\u72b6\u201d\uff08\u4f8b\u5982\u7ebf\uff0c\u5706\uff0c\u5f27\uff0c\u8def\u5f84\u548c\u6587\u672c\uff09\u7ed8\u5236\u4efb\u610f\u56fe\u5f62\u3002 \u6211\u6562\u6253\u8d4c\uff0c\u60a8\u751a\u81f3\u53ef\u4ee5\u4f7f\u7528 Canvas Control \u5b9e\u73b0\u81ea\u5df1\u7684",(0,o.kt)("a",{parentName:"p",href:"/blog/flet-charts"},"\u56fe\u8868"),"\u7248\u672c\uff01"),(0,o.kt)("p",null,"\u5c06\u753b\u5e03\u4e0e",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/gesturedetector"},"getureTeTector"),"\u76f8\u7ed3\u5408\uff0c\u60a8\u5c06\u83b7\u5f97\u4e00\u4e2a\u81ea\u7531\u624b\u7ed8\u56fe\u5e94\u7528\u7a0b\u5e8f - Flet \u5237\u5b50 \ud83d\ude00\uff01"),(0,o.kt)("img",{src:"/website/img/docs/controls/canvas/canvas-flet-brush.gif",className:"screenshot-70 screenshot-rounded"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/canvas/canvas-flet-brush.py"},"\u793a\u4f8b\u6e90")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Canvas"),"\u63a7\u5236\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"flet.canvas"),"\u8f6f\u4ef6\u5305\u4e2d\u3002 \u60a8\u9700\u8981\u53e6\u4e00\u4e2a\u5bfc\u5165\u624d\u80fd\u4f7f\u7528\u5b83:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import flet.canvas as cv\n")),(0,o.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u7a0b\u5e8f\uff0c\u7528",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/canvas#circle-shape-properties"},(0,o.kt)("inlineCode",{parentName:"a"},"Circle")),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/canvas#arc-shape-properties"},(0,o.kt)("inlineCode",{parentName:"a"},"Arc")),"\u5f62\u72b6\u4f7f\u7528\u586b\u5145\u548c stroke ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/canvas#paint-properties"},(0,o.kt)("inlineCode",{parentName:"a"},"Paint")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import math\nimport flet as ft\nimport flet.canvas as cv\n\ndef main(page: ft.Page):\n    stroke_paint = paint = ft.Paint(stroke_width=2, style=ft.PaintingStyle.STROKE)\n    fill_paint = paint = ft.Paint(style=ft.PaintingStyle.FILL)\n    cp = cv.Canvas(\n        [\n            cv.Circle(100, 100, 50, stroke_paint),\n            cv.Circle(80, 90, 10, stroke_paint),\n            cv.Circle(84, 87, 5, fill_paint),\n            cv.Circle(120, 90, 10, stroke_paint),\n            cv.Circle(124, 87, 5, fill_paint),\n            cv.Arc(70, 95, 60, 40, 0, math.pi, paint=stroke_paint),\n        ],\n        width=float("inf"),\n        expand=True,\n    )\n\n    page.add(cp)\n\nft.app(main)\n')),(0,o.kt)("img",{src:"/website/img/docs/controls/canvas/canvas-face.png",className:"screenshot-30"}),(0,o.kt)("p",null,"\u5728",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/canvas"},"docs"),"\u4e2d\u9605\u8bfb\u6709\u5173\u753b\u5e03\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u7136\u540e\u63a2\u7d22",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/tree/main/python/controls/canvas"},"canvas \u793a\u4f8b"),"\uff01"),(0,o.kt)("h2",{id:"\u5176\u4ed6\u66f4\u6539"},"\u5176\u4ed6\u66f4\u6539"),(0,o.kt)("h3",{id:"\u4e30\u5bcc\u7684\u6587\u672c\u652f\u6301"},"\u4e30\u5bcc\u7684\u6587\u672c\u652f\u6301"),(0,o.kt)("p",null,"\u5728\u5904\u7406[13210}\u4e0a\u7684","[\u7ed8\u5236\u6587\u672c]","\u4f5c\u4e3a\u6b64\u7248\u672c\u7684\u5956\u52b1\u65f6\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u4e00\u4e2a\u65b0\u7684",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/text#textspan-properties"},(0,o.kt)("inlineCode",{parentName:"a"},"TextSpan")),"\u63a7\u5236\uff0c\u73b0\u5728\u53ef\u4ee5\u4e0e",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/text#spans"},(0,o.kt)("inlineCode",{parentName:"a"},"Text.spans")),"\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u8f93\u51fa RICH \u6587\u672c\u3002"),(0,o.kt)("img",{src:"/website/img/docs/controls/text/richtext-borders-stroke.png",className:"screenshot-60"}),(0,o.kt)("p",null,"\u68c0\u67e5\u4e30\u5bcc\u7684\u6587\u672c\u793a\u4f8b: ","[\u4e00\u4e2a]"," {\u4e00\u4e2a](/docs/controls/text#rich-text-basics)\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/text#rich-text-with-borders-and-stroke"},"\u4e24\u4e2a"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/text#rich-text-with-gradient"},"\u4e09\u4e2a"),"\u3002"),(0,o.kt)("h3",{id:"url\u6309\u94ae\u7684\u5c5e\u6027"},(0,o.kt)("inlineCode",{parentName:"h3"},"url"),"\u6309\u94ae\u7684\u5c5e\u6027"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u901a\u8fc7\u5355\u51fb\u4e00\u4e2a\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"on_click"),"\u4e8b\u4ef6\u7684\u6309\u94ae\u6216\u4efb\u4f55\u5176\u4ed6\u63a7\u4ef6\u6253\u5f00 URL\uff0c\u5219\u53ef\u4ee5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"url"),"\u4e2d\u63d0\u4f9b\u8be5 URL\uff0c\u800c\u4e0d\u662f\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/page#launch_urlurl"},(0,o.kt)("inlineCode",{parentName:"a"},"page.launch_url()")),"\u65b9\u6cd5\u4e2d\u7684 url\u3002"),(0,o.kt)("p",null,"\u800c\u4e0d\u662f\u90a3\u4e2a:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ft.ElevatedButton("Go to Google", on_click=lambda e: e.page.launch_url("https://google.com"))\n')),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u505a\u5230\u8fd9\u4e00\u70b9:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ft.ElevatedButton("Go to Google", url="https://google.com")\n')),(0,o.kt)("p",null,"\u4e00\u4e2a\u65b0\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"url"),"\u5c5e\u6027\u4e5f\u6c42\u89e3",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet/issues/1105"},"safari \u4e0a\u7684\u963b\u6b62\u7a97\u53e3")," essue\u3002"),(0,o.kt)("p",null,"\u4f5c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"url"),"\u5c5e\u6027\u7684\u5ef6\u7eed\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Markdown"),"\u63a7\u5236\u73b0\u5728\u53ef\u4ee5\u81ea\u52a8\u5728\u6587\u6863\u4e2d\u81ea\u52a8\u9075\u5faa url:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\nmd = """\n[Go to Google](https://www.google.com)\n"""\n\ndef main(page: ft.Page):\n    page.add(\n        ft.Markdown(\n            md,\n            extension_set=ft.MarkdownExtensionSet.GITHUB_WEB,\n            auto_follow_links=True,\n        )\n    )\n\nft.app(main)\n')),(0,o.kt)("h3",{id:"\u66f4\u597d\u7684-web-\u652f\u6301"},"\u66f4\u597d\u7684 Web \u652f\u6301"),(0,o.kt)("p",null,"\u5728\u6b64\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u8fd8\u5bf9 Web \u652f\u6301\u8fdb\u884c\u4e86\u4e00\u4e9b\u6539\u8fdb \u8def\u7531\u3002"),(0,o.kt)("p",null,"\u8fd9\u5c31\u662f\u4eca\u5929\uff01"),(0,o.kt)("p",null,"\u5347\u7ea7 Flet \u6a21\u5757\u5230\u6700\u65b0\u7248\u672c\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"pip install flet -upgrade"),"\uff09\uff0c\u5c1d\u8bd5\u4e00\u4e0b\u753b\u5e03\u548c\u4e30\u5bcc\u7684\u6587\u5b57\uff0c\u7136\u540e",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"\u8ba9\u6211\u4eec\u77e5\u9053"),"\u60a8\u7684\u60f3\u6cd5\uff01"))}d.isMDXComponent=!0}}]);