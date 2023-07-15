"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[5587],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1383:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],i={slug:"responsive-row-and-mobile-controls",title:"ResponsiveRow and mobile controls",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},s=void 0,p={permalink:"/website/blog/responsive-row-and-mobile-controls",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2022-11-13-responsive-row-and-mobile-controls.md",source:"@site/blog/2022-11-13-responsive-row-and-mobile-controls.md",title:"ResponsiveRow and mobile controls",description:"We just released Flet 0.1.65 which is adding a bunch of mobile-optimized controls, fixing some bugs and introducing a new layout control - ResponsiveRow.",date:"2022-11-13T00:00:00.000Z",formattedDate:"November 13, 2022",tags:[{label:"release",permalink:"/website/blog/tags/release"}],readingTime:2.68,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"responsive-row-and-mobile-controls",title:"ResponsiveRow and mobile controls",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},prevItem:{title:"Flet versioning and pre-releases",permalink:"/website/blog/flet-versioning-and-pre-releases"},nextItem:{title:"Matplotlib and Plotly charts",permalink:"/website/blog/matplotlib-and-plotly-charts"}},c={authorsImageUrls:[void 0]},m=[{value:"<code>ResponsiveRow</code> control",id:"responsiverow-control",level:2},{value:"Other new controls",id:"other-new-controls",level:2},{value:"BottomSheet",id:"bottomsheet",level:3},{value:"NavigationBar",id:"navigationbar",level:3},{value:"Tooltip",id:"tooltip",level:3},{value:"HapticFeedback",id:"hapticfeedback",level:3},{value:"ShakeDetector",id:"shakedetector",level:3},{value:"Other improvements",id:"other-improvements",level:2},{value:"Markdown code syntax highlight",id:"markdown-code-syntax-highlight",level:3},{value:"Variable fonts support",id:"variable-fonts-support",level:3}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We just released ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/flet/0.1.65/"},"Flet 0.1.65")," which is adding a bunch of mobile-optimized controls, fixing some bugs and introducing a new layout control - ",(0,r.kt)("inlineCode",{parentName:"p"},"ResponsiveRow"),"."),(0,r.kt)("h2",{id:"responsiverow-control"},(0,r.kt)("inlineCode",{parentName:"h2"},"ResponsiveRow")," control"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ResponsiveRow")," borrows the idea of grid layout from ",(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/layout/grid/"},"Bootstrap")," web framework."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ResponsiveRow")," allows aligning child controls to virtual columns. By default, a virtual grid has 12 columns, but that can be customized with ",(0,r.kt)("inlineCode",{parentName:"p"},"ResponsiveRow.columns")," property."),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"expand")," property every control now has ",(0,r.kt)("inlineCode",{parentName:"p"},"col")," property which allows specifying how many columns a control should span. For examle, to make a layout consisting of two columns spanning 6 virtual columns each:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\nft.ResponsiveRow([\n    ft.Column(col=6, controls=ft.Text("Column 1")),\n    ft.Column(col=6, controls=ft.Text("Column 2"))\n])\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ResponsiveRow"),' is "responsive" because it can adapt the size of its children to a changing screen (page, window) size. ',(0,r.kt)("inlineCode",{parentName:"p"},"col")," property in the example above is a constant number which means the child will span 6 columns for any screen size."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"ResponsiveRow"),"'s child doesn't have ",(0,r.kt)("inlineCode",{parentName:"p"},"col")," property specified it spans the maximum number of columns."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"col"),' can be configured to have a different value for specific "breakpoints". Breakpoints are named dimension ranges:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Breakpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Dimension"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xs"),(0,r.kt)("td",{parentName:"tr",align:null},"<576px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sm"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2265576px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"md"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2265768px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lg"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2265992px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xl"),(0,r.kt)("td",{parentName:"tr",align:null},"\u22651200px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xxl"),(0,r.kt)("td",{parentName:"tr",align:null},"\u22651400px")))),(0,r.kt)("p",null,"For example, the following example collapses content into a single column on a mobile device and takes two columns on larger screens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\nft.ResponsiveRow([\n    ft.Column(col={"sm": 6}, controls=ft.Text("Column 1")),\n    ft.Column(col={"sm": 6}, controls=ft.Text("Column 2"))\n])\n')),(0,r.kt)("p",null,"Here is more elaborate example of responsive layout:"),(0,r.kt)("img",{src:"/img/docs/controls/responsive-row/responsive-layout.gif",className:"screenshot-100"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    def page_resize(e):\n        pw.value = f"{page.width} px"\n        pw.update()\n\n    page.on_resize = page_resize\n\n    pw = ft.Text(bottom=50, right=50, style="displaySmall")\n    page.overlay.append(pw)\n    page.add(\n        ft.ResponsiveRow(\n            [\n                ft.Container(\n                    ft.Text("Column 1"),\n                    padding=5,\n                    bgcolor=ft.colors.YELLOW,\n                    col={"sm": 6, "md": 4, "xl": 2},\n                ),\n                ft.Container(\n                    ft.Text("Column 2"),\n                    padding=5,\n                    bgcolor=ft.colors.GREEN,\n                    col={"sm": 6, "md": 4, "xl": 2},\n                ),\n                ft.Container(\n                    ft.Text("Column 3"),\n                    padding=5,\n                    bgcolor=ft.colors.BLUE,\n                    col={"sm": 6, "md": 4, "xl": 2},\n                ),\n                ft.Container(\n                    ft.Text("Column 4"),\n                    padding=5,\n                    bgcolor=ft.colors.PINK_300,\n                    col={"sm": 6, "md": 4, "xl": 2},\n                ),\n            ],\n        ),\n        ft.ResponsiveRow(\n            [\n                ft.TextField(label="TextField 1", col={"md": 4}),\n                ft.TextField(label="TextField 2", col={"md": 4}),\n                ft.TextField(label="TextField 3", col={"md": 4}),\n            ],\n            run_spacing={"xs": 10},\n        ),\n    )\n    page_resize(None)\n\nft.app(target=main)\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ResponsiveRow")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/responsiverow"},"docs"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/responsive-row/responsive-layout.py"},"example"),"."),(0,r.kt)("h2",{id:"other-new-controls"},"Other new controls"),(0,r.kt)("p",null,"This release adds new visual and non-visual controls requested by Flet community and also required to build UI of the upcoming ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/python/mobile-support#flet-studio-for-ios-and-android"},"Flet Studio"),"."),(0,r.kt)("h3",{id:"bottomsheet"},"BottomSheet"),(0,r.kt)("p",null,"Shows a modal Material Design bottom sheet:"),(0,r.kt)("img",{src:"/img/docs/controls/bottom-sheet/bottom-sheet-sample.gif",className:"screenshot-30"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BottomSheet")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/bottomsheet"},"docs"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/bottom-sheet/modal-bottom-sheet.py"},"example"),"."),(0,r.kt)("h3",{id:"navigationbar"},"NavigationBar"),(0,r.kt)("p",null,"Bottom Navigation bar which offers a persistent and convenient way to switch between primary destinations in an app:"),(0,r.kt)("img",{src:"/img/docs/controls/navigation-bar/navigation-bar-sample.gif",className:"screenshot-40"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NavigationBar")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/navigationbar"},"docs"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/navigation-bar/navigation-bar-sample.py"},"example"),"."),(0,r.kt)("h3",{id:"tooltip"},"Tooltip"),(0,r.kt)("p",null,"A tooltip control:"),(0,r.kt)("img",{src:"/img/docs/controls/tooltip/custom-tooltip.gif",className:"screenshot-30"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Tooltip")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/tooltip"},"docs"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/tooltip/custom-tooltip.py"},"example"),"."),(0,r.kt)("h3",{id:"hapticfeedback"},"HapticFeedback"),(0,r.kt)("p",null,"Allows access to the haptic feedback (clicks and vibrates) interface on the device."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HapticFeedback")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/hapticfeedback"},"docs"),"."),(0,r.kt)("h3",{id:"shakedetector"},"ShakeDetector"),(0,r.kt)("p",null,"A control to detect phone shakes. Based on ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/shake"},"shake")," widget."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ShakeDetector")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/shakedetector"},"docs"),"."),(0,r.kt)("h2",{id:"other-improvements"},"Other improvements"),(0,r.kt)("h3",{id:"markdown-code-syntax-highlight"},"Markdown code syntax highlight"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/markdown/markdown-code-highlight.py"},"Sample code"),"."),(0,r.kt)("img",{src:"/img/docs/controls/markdown/markdown-highlight.png",className:"screenshot-60"}),(0,r.kt)("h3",{id:"variable-fonts-support"},"Variable fonts support"),(0,r.kt)("p",null,"Flutter has finally supported ",(0,r.kt)("a",{parentName:"p",href:"https://fonts.google.com/knowledge/introducing_type/introducing_variable_fonts"},"variable fonts")," and we bring that into Flet too! "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/text/variable-weight-font.py"},"Sample code"),"."),(0,r.kt)("img",{src:"/img/docs/controls/text/variable-weight-font.gif",className:"screenshot-50"}),(0,r.kt)("p",null,"Upgrade Flet module to the latest version (",(0,r.kt)("inlineCode",{parentName:"p"},"pip install flet --upgrade"),") and ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"let us know")," what you think!"),(0,r.kt)("p",null,"Enjoy!"))}u.isMDXComponent=!0}}]);