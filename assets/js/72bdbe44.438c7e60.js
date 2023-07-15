"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[6309],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7355:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],s={slug:"canvas",title:"Canvas",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["releases"]},i=void 0,p={permalink:"/website/blog/canvas",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2023-04-26-canvas.md",source:"@site/blog/2023-04-26-canvas.md",title:"Canvas",description:"Unleash your inner artist \ud83e\uddd1\u200d\ud83c\udfa8 and boost your Flet creativity with brand-new Canvas control just released in Flet 0.6.0!",date:"2023-04-26T00:00:00.000Z",formattedDate:"April 26, 2023",tags:[{label:"releases",permalink:"/website/blog/tags/releases"}],readingTime:2.125,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"canvas",title:"Canvas",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["releases"]},prevItem:{title:"Scrolling controls and Theming",permalink:"/website/blog/scrolling-controls-and-theming"},nextItem:{title:"Flet Charts",permalink:"/website/blog/flet-charts"}},c={authorsImageUrls:[void 0]},u=[{value:"Other changes",id:"other-changes",level:2},{value:"Rich text support",id:"rich-text-support",level:3},{value:"<code>url</code> property for buttons",id:"url-property-for-buttons",level:3},{value:"Auto-follow links in <code>Markdown</code>",id:"auto-follow-links-in-markdown",level:3},{value:"Better web support",id:"better-web-support",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Unleash your inner artist \ud83e\uddd1\u200d\ud83c\udfa8 and boost your Flet creativity with brand-new ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/canvas"},"Canvas")," control just released in ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/flet/"},"Flet 0.6.0"),"!"),(0,o.kt)("p",null,'Canvas enables you to draw arbitrary graphics using a set of primitives, or "shapes", such as line, circle, arc, path and text. I bet you can even implement your own version of ',(0,o.kt)("a",{parentName:"p",href:"/blog/flet-charts"},"charts")," using Canvas control!"),(0,o.kt)("p",null,"Combine Canvas with ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/gesturedetector"},"GestureDetector")," and you get a free-hand drawing app - Flet Brush \ud83d\ude00!"),(0,o.kt)("img",{src:"/img/docs/controls/canvas/canvas-flet-brush.gif",className:"screenshot-70 screenshot-rounded"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/canvas/canvas-flet-brush.py"},"Example source")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Canvas")," control is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"flet.canvas")," package. You need another import to use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import flet.canvas as cv\n")),(0,o.kt)("p",null,"Here's a simple program drawing a smiley face with ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/canvas#circle-shape-properties"},(0,o.kt)("inlineCode",{parentName:"a"},"Circle"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/canvas#arc-shape-properties"},(0,o.kt)("inlineCode",{parentName:"a"},"Arc"))," shapes using filled and stroke ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/canvas#paint-properties"},(0,o.kt)("inlineCode",{parentName:"a"},"Paint")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import math\nimport flet as ft\nimport flet.canvas as cv\n\ndef main(page: ft.Page):\n    stroke_paint = paint = ft.Paint(stroke_width=2, style=ft.PaintingStyle.STROKE)\n    fill_paint = paint = ft.Paint(style=ft.PaintingStyle.FILL)\n    cp = cv.Canvas(\n        [\n            cv.Circle(100, 100, 50, stroke_paint),\n            cv.Circle(80, 90, 10, stroke_paint),\n            cv.Circle(84, 87, 5, fill_paint),\n            cv.Circle(120, 90, 10, stroke_paint),\n            cv.Circle(124, 87, 5, fill_paint),\n            cv.Arc(70, 95, 60, 40, 0, math.pi, paint=stroke_paint),\n        ],\n        width=float("inf"),\n        expand=True,\n    )\n\n    page.add(cp)\n\nft.app(main)\n')),(0,o.kt)("img",{src:"/img/docs/controls/canvas/canvas-face.png",className:"screenshot-30"}),(0,o.kt)("p",null,"Read more about Canvas in ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/canvas"},"docs")," and explore ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/tree/main/python/controls/canvas"},"Canvas examples"),"!"),(0,o.kt)("h2",{id:"other-changes"},"Other changes"),(0,o.kt)("h3",{id:"rich-text-support"},"Rich text support"),(0,o.kt)("p",null,"While working on ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/canvas#drawing-text"},"drawing text on Canvas"),", as a bonus to this release, we implemented a new ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/text#textspan-properties"},(0,o.kt)("inlineCode",{parentName:"a"},"TextSpan"))," control which can now be used with ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/text#spans"},(0,o.kt)("inlineCode",{parentName:"a"},"Text.spans"))," to output rich text."),(0,o.kt)("img",{src:"/img/docs/controls/text/richtext-borders-stroke.png",className:"screenshot-60"}),(0,o.kt)("p",null,"Check rich text examples: ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/text#rich-text-basics"},"one"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/text#rich-text-with-borders-and-stroke"},"two")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/text#rich-text-with-gradient"},"three"),"."),(0,o.kt)("h3",{id:"url-property-for-buttons"},(0,o.kt)("inlineCode",{parentName:"h3"},"url")," property for buttons"),(0,o.kt)("p",null,"If you need to open a URL by clicking on a button or any other control with ",(0,o.kt)("inlineCode",{parentName:"p"},"on_click")," event you can just provide that URL in ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," instead of doing that in the code with ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/page#launch_urlurl"},(0,o.kt)("inlineCode",{parentName:"a"},"page.launch_url()"))," method."),(0,o.kt)("p",null,"Instead of that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ft.ElevatedButton("Go to Google", on_click=lambda e: e.page.launch_url("https://google.com"))\n')),(0,o.kt)("p",null,"you can just do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ft.ElevatedButton("Go to Google", url="https://google.com")\n')),(0,o.kt)("p",null,"A new ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," property also solves ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet/issues/1105"},"blocked window on Safari")," issue."),(0,o.kt)("h3",{id:"auto-follow-links-in-markdown"},"Auto-follow links in ",(0,o.kt)("inlineCode",{parentName:"h3"},"Markdown")),(0,o.kt)("p",null,"As a continuation of ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," property ",(0,o.kt)("inlineCode",{parentName:"p"},"Markdown")," control can now be enabled to auto-follow URLs in the document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\nmd = """\n[Go to Google](https://www.google.com)\n"""\n\ndef main(page: ft.Page):\n    page.add(\n        ft.Markdown(\n            md,\n            extension_set=ft.MarkdownExtensionSet.GITHUB_WEB,\n            auto_follow_links=True,\n        )\n    )\n\nft.app(main)\n')),(0,o.kt)("h3",{id:"better-web-support"},"Better web support"),(0,o.kt)("p",null,"In this release we also did some improvements to web support like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet/pull/1302"},"capturing user info in ",(0,o.kt)("inlineCode",{parentName:"a"},"page.client_id")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"page.client_user_agent"))," as well as fixing nasty ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet/pull/1333"},"#1333")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet/pull/1289"},"#1289")," bugs related to routing."),(0,o.kt)("p",null,"That's all for today!"),(0,o.kt)("p",null,"Upgrade Flet module to the latest version (",(0,o.kt)("inlineCode",{parentName:"p"},"pip install flet --upgrade"),"), give canvas and rich text a try and ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"let us know")," what you think!"))}h.isMDXComponent=!0}}]);