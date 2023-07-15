"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[2050],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9886:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={title:"Large lists",sidebar_label:"Large lists"},l=void 0,p={unversionedId:"guides/python/large-lists",id:"guides/python/large-lists",title:"Large lists",description:"You can use Column and Row controls to display lists in the most cases, but if the list contains hundreds or thousands of items Column and Row will be ineffective with lagging UI as they render all items at once even they are not visible at the current scrolling position.",source:"@site/docs/guides/python/large-lists.md",sourceDirName:"guides/python",slug:"/guides/python/large-lists",permalink:"/docs/guides/python/large-lists",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/large-lists.md",tags:[],version:"current",frontMatter:{title:"Large lists",sidebar_label:"Large lists"},sidebar:"docs",previous:{title:"Colors",permalink:"/docs/guides/python/colors"},next:{title:"Drag and drop",permalink:"/docs/guides/python/drag-and-drop"}},d={},c=[{value:"ListView",id:"listview",level:2},{value:"GridView",id:"gridview",level:2},{value:"Batch updates",id:"batch-updates",level:2}],u={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/column"},(0,r.kt)("inlineCode",{parentName:"a"},"Column"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/row"},(0,r.kt)("inlineCode",{parentName:"a"},"Row"))," controls to display lists in the most cases, but if the list contains hundreds or thousands of items ",(0,r.kt)("inlineCode",{parentName:"p"},"Column")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Row")," will be ineffective with lagging UI as they render all items at once even they are not visible at the current scrolling position."),(0,r.kt)("p",null,"In the following example we are adding 5,000 text controls to a page. Page uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Column")," as a default layout container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    for i in range(5000):\n        page.controls.append(ft.Text(f"Line {i}"))\n    page.scroll = "always"\n    page.update()\n\nft.app(target=main, view=ft.AppView.WEB_BROWSER)\n')),(0,r.kt)("p",null,"Run the program and notice that it's not just it takes a couple of seconds to initially load and render all text lines on a page, but scrolling is slow and laggy too:"),(0,r.kt)("img",{src:"/img/docs/getting-started/scroll-column.gif",className:"screenshot-50"}),(0,r.kt)("p",null,"For displaying lists with a lot of items use ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/listview"},(0,r.kt)("inlineCode",{parentName:"a"},"ListView"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/gridview"},(0,r.kt)("inlineCode",{parentName:"a"},"GridView"))," controls which render items on demand, visible at the current scrolling position only."),(0,r.kt)("h2",{id:"listview"},"ListView"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/controls/listview"},(0,r.kt)("inlineCode",{parentName:"a"},"ListView"))," could be either vertical (default) or horizontal. ListView items are displayed one after another in the scroll direction."),(0,r.kt)("p",null,"ListView already implements effective on demand rendering of its children, but scrolling performance could be further improved if you can set the same fixed height or width (for ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal"),' ListView) for all items ("extent"). This could be done by either setting absolute extent with ',(0,r.kt)("inlineCode",{parentName:"p"},"item_extent")," property or making the extent of all children equal to the extent of the first child by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"first_item_prototype")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("p",null,"Let's output a list of 5,000 items using ListView control:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    lv = ft.ListView(expand=True, spacing=10)\n    for i in range(5000):\n        lv.controls.append(ft.Text(f"Line {i}"))\n    page.add(lv)\n\nft.app(target=main, view=ft.AppView.WEB_BROWSER)\n')),(0,r.kt)("p",null,"Now the scrolling is smooth and fast enough to follow mouse movements:"),(0,r.kt)("img",{src:"/img/docs/getting-started/scroll-listview.gif",className:"screenshot-50"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We used ",(0,r.kt)("inlineCode",{parentName:"p"},"expand=True")," in ListView constructor. In order to function properly, ListView must have a height (or width if ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal"),") specified. You could set an absolute size, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ListView(height=300, spacing=10)"),", but in the example above we make ListView to take all available space on the page, i.e. expand. Read more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls#expand"},(0,r.kt)("inlineCode",{parentName:"a"},"Control.expand"))," property.")),(0,r.kt)("h2",{id:"gridview"},"GridView"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/controls/gridview"},(0,r.kt)("inlineCode",{parentName:"a"},"GridView"))," allows arranging controls into a scrollable grid."),(0,r.kt)("p",null,'You can make a "grid" with ',(0,r.kt)("inlineCode",{parentName:"p"},"ft.Column(wrap=True)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ft.Row(wrap=True)"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport flet as ft\n\nos.environ["FLET_WS_MAX_MESSAGE_SIZE"] = "8000000"\n\ndef main(page: ft.Page):\n    r = ft.Row(wrap=True, scroll="always", expand=True)\n    page.add(r)\n\n    for i in range(5000):\n        r.controls.append(\n            ft.Container(\n                ft.Text(f"Item {i}"),\n                width=100,\n                height=100,\n                alignment=ft.alignment.center,\n                bgcolor=ft.colors.AMBER_100,\n                border=ft.border.all(1, ft.colors.AMBER_400),\n                border_radius=ft.border_radius.all(5),\n            )\n        )\n    page.update()\n\nft.app(target=main, view=ft.AppView.WEB_BROWSER)\n')),(0,r.kt)("img",{src:"/img/docs/getting-started/row-wrap-as-grid.png",className:"screenshot-50"}),(0,r.kt)("p",null,"Try scrolling and resizing the browser window - everything works, but very laggy."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"At the start of the program we are setting the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"FLET_WS_MAX_MESSAGE_SIZE")," environment variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"8000000")," - this is the maximum size of WebSocket message in bytes that can be received by Flet Server rendering the page. Default size is 1 MB, but the size of JSON message describing 5,000 container controls would exceed 1 MB, so we are increasing allowed size to 8 MB."),(0,r.kt)("p",{parentName:"admonition"},"Squeezing large messages through WebSocket channel is, generally, not a good idea, so use ",(0,r.kt)("a",{parentName:"p",href:"#batch-updates"},"batched updates")," aproach to control channel load.")),(0,r.kt)("p",null,"GridView, similar to ListView, is very effective to render a lot of children. Let's implement the example above using GridView:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport flet as ft\n\nos.environ["FLET_WS_MAX_MESSAGE_SIZE"] = "8000000"\n\ndef main(page: ft.Page):\n    gv = ft.GridView(expand=True, max_extent=150, child_aspect_ratio=1)\n    page.add(gv)\n\n    for i in range(5000):\n        gv.controls.append(\n            ft.Container(\n                ft.Text(f"Item {i}"),\n                alignment=ft.alignment.center,\n                bgcolor=ft.colors.AMBER_100,\n                border=ft.border.all(1, ft.colors.AMBER_400),\n                border_radius=ft.border_radius.all(5),\n            )\n        )\n    page.update()\n\nft.app(target=main, view=ft.AppView.WEB_BROWSER)\n')),(0,r.kt)("img",{src:"/img/docs/getting-started/grid-view.png",className:"screenshot-50"}),(0,r.kt)("p",null,"With GridView scrolling and window resizing are smooth and responsive!"),(0,r.kt)("p",null,"You can specify either fixed number of rows or columns (runs) with ",(0,r.kt)("inlineCode",{parentName:"p"},"runs_count"),' property or the maximum size of a "tile" with ',(0,r.kt)("inlineCode",{parentName:"p"},"max_extent"),' property, so the number of runs can vary automatically. In our example we set the maximum tile size to 150 pixels and set its shape to "square" with ',(0,r.kt)("inlineCode",{parentName:"p"},"child_aspect_ratio=1"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"child_aspect_ratio")," is the ratio of the cross-axis to the main-axis extent of each child. Try changing it to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("h2",{id:"batch-updates"},"Batch updates"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"page.update()")," is called a message is being sent to Flet server over WebSockets containing page updates since the last ",(0,r.kt)("inlineCode",{parentName:"p"},"page.update()"),". Sending a large message with thousands of added controls could make a user waiting for a few seconds until the messages is fully received and controls rendered."),(0,r.kt)("p",null,"To increase usability of your program and present the results to a user as soon as possible you can send page updates in batches. For example, the following program adds 5,100 child controls to a ListView in batches of 500 items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n\n    # add ListView to a page first\n    lv = ft.ListView(expand=1, spacing=10, item_extent=50)\n    page.add(lv)\n\n    for i in range(5100):\n        lv.controls.append(ft.Text(f"Line {i}"))\n        # send page to a page\n        if i % 500 == 0:\n            page.update()\n    # send the rest to a page\n    page.update()\n\nft.app(target=main, view=ft.AppView.WEB_BROWSER)\n')),(0,r.kt)("img",{src:"/img/docs/getting-started/sending-page-updates-in-batches.png",className:"screenshot-50"}))}g.isMDXComponent=!0}}]);