"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[7647],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return f}});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var d=n.createContext({}),p=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=p(o),h=l,f=s["".concat(d,".").concat(h)]||s[h]||u[h]||i;return o?n.createElement(f,r(r({ref:t},c),{},{components:o})):n.createElement(f,r({ref:t},c))}));function f(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=o.length,r=new Array(i);r[0]=h;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[s]="string"==typeof e?e:l,r[1]=a;for(var p=2;p<i;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8474:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s}});var n=o(7462),l=o(3366),i=(o(7294),o(3905)),r=["components"],a={title:"Tooltip",sidebar_label:"Tooltip",slug:"tooltip"},d=void 0,p={unversionedId:"controls/tooltip",id:"controls/tooltip",title:"Tooltip",description:"A Material Design tooltip.",source:"@site/docs/controls/tooltip.md",sourceDirName:"controls",slug:"/controls/tooltip",permalink:"/website/docs/controls/tooltip",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/tooltip.md",tags:[],version:"current",frontMatter:{title:"Tooltip",sidebar_label:"Tooltip",slug:"tooltip"},sidebar:"docs",previous:{title:"ShakeDetector",permalink:"/website/docs/controls/shakedetector"},next:{title:"WindowDragArea",permalink:"/website/docs/controls/windowdragarea"}},c={},s=[{value:"Examples",id:"examples",level:2},{value:"Tooltip with a custom decoration",id:"tooltip-with-a-custom-decoration",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>bgcolor</code>",id:"bgcolor",level:3},{value:"<code>border</code>",id:"border",level:3},{value:"<code>border_radius</code>",id:"border_radius",level:3},{value:"<code>content</code>",id:"content",level:3},{value:"<code>message</code>",id:"message",level:3},{value:"<code>enable_feedback</code>",id:"enable_feedback",level:3},{value:"<code>gradient</code>",id:"gradient",level:3},{value:"<code>height</code>",id:"height",level:3},{value:"<code>margin</code>",id:"margin",level:3},{value:"<code>padding</code>",id:"padding",level:3},{value:"<code>prefer_below</code>",id:"prefer_below",level:3},{value:"<code>shape</code>",id:"shape",level:3},{value:"<code>show_duration</code>",id:"show_duration",level:3},{value:"<code>text_align</code>",id:"text_align",level:3},{value:"<code>text_style</code>",id:"text_style",level:3},{value:"<code>vertical_offset</code>",id:"vertical_offset",level:3},{value:"<code>wait_duration</code>",id:"wait_duration",level:3}],u={toc:s};function h(e){var t=e.components,o=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Material Design tooltip."),(0,i.kt)("p",null,"Tooltips provide text labels which help explain the function of a button or other user interface action. Wrap the button in a Tooltip control and provide a message which will be shown when the control is long pressed."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/utility/tooltip"},"Live example")),(0,i.kt)("h3",{id:"tooltip-with-a-custom-decoration"},"Tooltip with a custom decoration"),(0,i.kt)("img",{src:"/img/docs/controls/tooltip/custom-tooltip.gif",className:"screenshot-30"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import math\nimport flet as ft\nfrom flet import alignment\n\ndef main(page: ft.Page):\n    page.title = "Tooltip Example"\n    page.add(\n        ft.Tooltip(\n            message="This is tooltip",\n            content=ft.Text("Hover to see tooltip"),\n            padding=20,\n            border_radius=10,\n            text_style=ft.TextStyle(size=20, color=ft.colors.WHITE),\n            gradient=ft.LinearGradient(\n                begin=alignment.top_left,\n                end=alignment.Alignment(0.8, 1),\n                colors=[\n                    "0xff1f005c",\n                    "0xff5b0060",\n                    "0xff870160",\n                    "0xffac255e",\n                    "0xffca485c",\n                    "0xffe16b5c",\n                    "0xfff39060",\n                    "0xffffb56b",\n                ],\n                tile_mode=ft.GradientTileMode.MIRROR,\n                rotation=math.pi / 3,\n            ),\n        )\n    )\n\nft.app(target=main)\n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bgcolor"},(0,i.kt)("inlineCode",{parentName:"h3"},"bgcolor")),(0,i.kt)("p",null,"Background ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"color")," of the tooltip."),(0,i.kt)("h3",{id:"border"},(0,i.kt)("inlineCode",{parentName:"h3"},"border")),(0,i.kt)("p",null,"Border around the tooltip."),(0,i.kt)("h3",{id:"border_radius"},(0,i.kt)("inlineCode",{parentName:"h3"},"border_radius")),(0,i.kt)("p",null,"Tooltip's border radius."),(0,i.kt)("h3",{id:"content"},(0,i.kt)("inlineCode",{parentName:"h3"},"content")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Control")," that should be displayed inside the tooltip."),(0,i.kt)("h3",{id:"message"},(0,i.kt)("inlineCode",{parentName:"h3"},"message")),(0,i.kt)("p",null,"The text to display in the tooltip."),(0,i.kt)("h3",{id:"enable_feedback"},(0,i.kt)("inlineCode",{parentName:"h3"},"enable_feedback")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"True")," (default) the tooltip should provide acoustic and/or haptic feedback."),(0,i.kt)("p",null,"For example, on Android a tap will produce a clicking sound and a long-press will produce a short vibration, when feedback is enabled."),(0,i.kt)("h3",{id:"gradient"},(0,i.kt)("inlineCode",{parentName:"h3"},"gradient")),(0,i.kt)("p",null,"Background gradient of the tooltip"),(0,i.kt)("h3",{id:"height"},(0,i.kt)("inlineCode",{parentName:"h3"},"height")),(0,i.kt)("p",null,"The height of the tooltip's content."),(0,i.kt)("h3",{id:"margin"},(0,i.kt)("inlineCode",{parentName:"h3"},"margin")),(0,i.kt)("p",null,"The empty space that surrounds the tooltip."),(0,i.kt)("h3",{id:"padding"},(0,i.kt)("inlineCode",{parentName:"h3"},"padding")),(0,i.kt)("p",null,"The amount of space by which to inset the tooltip's content."),(0,i.kt)("p",null,"On mobile, defaults to 16.0 logical pixels horizontally and 4.0 vertically. On desktop, defaults to 8.0 logical pixels horizontally and 4.0 vertically."),(0,i.kt)("h3",{id:"prefer_below"},(0,i.kt)("inlineCode",{parentName:"h3"},"prefer_below")),(0,i.kt)("p",null,"Whether the tooltip defaults to being displayed below the control."),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),". If there is insufficient space to display the tooltip in the preferred direction, the tooltip will be displayed in the opposite direction."),(0,i.kt)("h3",{id:"shape"},(0,i.kt)("inlineCode",{parentName:"h3"},"shape")),(0,i.kt)("p",null,"The shape of the tooltip."),(0,i.kt)("h3",{id:"show_duration"},(0,i.kt)("inlineCode",{parentName:"h3"},"show_duration")),(0,i.kt)("p",null,"The length of time, in milliseconds, that the tooltip will be shown after a long press is released or a tap is released or mouse pointer exits the control."),(0,i.kt)("h3",{id:"text_align"},(0,i.kt)("inlineCode",{parentName:"h3"},"text_align")),(0,i.kt)("p",null,"How the message of the tooltip is aligned horizontally."),(0,i.kt)("p",null,"Property value is ",(0,i.kt)("inlineCode",{parentName:"p"},"TextAlign")," enum with the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LEFT")," (default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RIGHT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CENTER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JUSTIFY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"START")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"END"))),(0,i.kt)("h3",{id:"text_style"},(0,i.kt)("inlineCode",{parentName:"h3"},"text_style")),(0,i.kt)("p",null,"The style to use for the message of the tooltip."),(0,i.kt)("h3",{id:"vertical_offset"},(0,i.kt)("inlineCode",{parentName:"h3"},"vertical_offset")),(0,i.kt)("p",null,"The vertical gap between the widget and the displayed tooltip."),(0,i.kt)("h3",{id:"wait_duration"},(0,i.kt)("inlineCode",{parentName:"h3"},"wait_duration")),(0,i.kt)("p",null,"The length of time, in milliseconds, that a pointer must hover over a tooltip's control before the tooltip will be shown."),(0,i.kt)("p",null,"Defaults to 0 milliseconds (tooltips are shown immediately upon hover)."))}h.isMDXComponent=!0}}]);