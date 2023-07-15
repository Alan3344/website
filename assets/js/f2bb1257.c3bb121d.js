"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[8493],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"drag-and-drop-release",title:"New release: Drag and Drop, absolute positioning and clickable container",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},s=void 0,p={permalink:"/blog/drag-and-drop-release",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2022-07-14-drag-and-drop-release.md",source:"@site/blog/2022-07-14-drag-and-drop-release.md",title:"New release: Drag and Drop, absolute positioning and clickable container",description:"We have just released Flet 0.1.41 with drag-and-drop support and other neat features such as absolute positioning of controls inside stack and clickable container!",date:"2022-07-14T00:00:00.000Z",formattedDate:"July 14, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:1.085,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"drag-and-drop-release",title:"New release: Drag and Drop, absolute positioning and clickable container",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},prevItem:{title:"Navigation and Routing",permalink:"/blog/navigation-and-routing"},nextItem:{title:"Using custom fonts in a Flet app",permalink:"/blog/using-custom-fonts-in-flet-app"}},c={authorsImageUrls:[void 0]},d=[{value:"Drag and Drop",id:"drag-and-drop",level:2},{value:"Absolute positioning inside Stack",id:"absolute-positioning-inside-stack",level:2},{value:"Clickable container",id:"clickable-container",level:2}],u={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have just released ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/flet/0.1.41/"},"Flet 0.1.41")," with drag-and-drop support and other neat features such as absolute positioning of controls inside stack and clickable container!"),(0,o.kt)("h2",{id:"drag-and-drop"},"Drag and Drop"),(0,o.kt)("p",null,'Making drag-and-drop in Flet is a real joy - thanks to a smart drag-and-drop implementation in Flutter! You just have "draggable" control which could be dragged to a "drag target" which calls ',(0,o.kt)("inlineCode",{parentName:"p"},"on_accept")," event handler when draggable is dropped."),(0,o.kt)("img",{src:"/img/docs/controls/drag-and-drop/drag-and-drop-colors.gif",className:"screenshot-50"}),(0,o.kt)("p",null,"Take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/drag-and-drop/drag-drop-colors.py"},"Drag-and-Drop example"),"."),(0,o.kt)("p",null,"Explore ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/draggable"},(0,o.kt)("inlineCode",{parentName:"a"},"Draggable"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/dragtarget"},(0,o.kt)("inlineCode",{parentName:"a"},"DragTarget"))," controls, their properties and events."),(0,o.kt)("h2",{id:"absolute-positioning-inside-stack"},"Absolute positioning inside Stack"),(0,o.kt)("p",null,"All visible controls now have ",(0,o.kt)("inlineCode",{parentName:"p"},"left")," ",(0,o.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"right")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom")," properties to let them be absolutely positioned inside ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/stack"},(0,o.kt)("inlineCode",{parentName:"a"},"Stack")),", for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{13-17}","{13-17}":!0},'import flet as ft\n\ndef main(page: ft.Page):\n\n    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER\n    page.vertical_alignment = ft.MainAxisAlignment.CENTER\n\n    page.add(\n        ft.Container(\n            ft.Stack(\n                [\n                    ft.Text("1", color=ft.colors.WHITE),\n                    ft.Text("2", color=ft.colors.WHITE, right=0),\n                    ft.Text("3", color=ft.colors.WHITE, right=0, bottom=0),\n                    ft.Text("4", color=ft.colors.WHITE, left=0, bottom=0),\n                    ft.Text("5", color=ft.colors.WHITE, left=40, top=35),\n                ]\n            ),\n            border_radius=8,\n            padding=5,\n            width=100,\n            height=100,\n            bgcolor=ft.colors.BROWN_700,\n        )\n    )\n\nft.app(target=main)\n')),(0,o.kt)("img",{src:"/img/blog/drag-and-drop/absolute-positioned-numbers.png",className:"screenshot-30"}),(0,o.kt)("h2",{id:"clickable-container"},"Clickable container"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/controls/container"},(0,o.kt)("inlineCode",{parentName:"a"},"Container"))," control has got ",(0,o.kt)("inlineCode",{parentName:"p"},"on_click")," event which allows you to make a button from any control and with a beautiful material ripple effect when ",(0,o.kt)("inlineCode",{parentName:"p"},"ink")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),"!"),(0,o.kt)("img",{src:"/img/docs/controls/container/clickable-container.gif",className:"screenshot-70"}),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/container/clickable-container.py"},"source code")," for the example above."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guides/python/getting-started"},"Give Flet a try")," and ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"let us know")," what you think!"))}g.isMDXComponent=!0}}]);