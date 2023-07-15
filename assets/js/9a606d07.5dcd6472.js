"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[3373],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6868:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={slug:"gesture-detector",title:"Gesture detector",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},s=void 0,u={permalink:"/website/blog/gesture-detector",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2022-10-11-gesture-detector.md",source:"@site/blog/2022-10-11-gesture-detector.md",title:"Gesture detector",description:"We've just released Flet 0.1.62 with support of gestures processing!",date:"2022-10-11T00:00:00.000Z",formattedDate:"October 11, 2022",tags:[{label:"release",permalink:"/website/blog/tags/release"}],readingTime:1.115,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"gesture-detector",title:"Gesture detector",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},prevItem:{title:"Matplotlib and Plotly charts",permalink:"/website/blog/matplotlib-and-plotly-charts"},nextItem:{title:"User authentication",permalink:"/website/blog/user-authentication"}},c={authorsImageUrls:[void 0]},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We've just released ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/flet/0.1.62/"},"Flet 0.1.62")," with support of gestures processing!"),(0,a.kt)("p",null,"There is a new control - ",(0,a.kt)("a",{parentName:"p",href:"/docs/controls/gesturedetector"},"GestureDetector")," which allows handling all sorts of gestures: single and double taps with a left (primary) and right (secondary) mouse (pointer) buttons, vertical, horizontal and bi-directional drags, zoom (pinch-in and pinch-out) gestures as well as hover events. Now, by wrapping it into ",(0,a.kt)("inlineCode",{parentName:"p"},"GestureDetector"),', you can make any Flet control "clickable" and "draggable"!'),(0,a.kt)("p",null,"Here is a simple example of an app which allows you to drag containers inside a Stack:"),(0,a.kt)("img",{src:"/img/blog/gesture-detector/gesture-detector-demo.gif",className:"screenshot-50"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import flet as ft\n\ndef main(page: ft.Page):\n    def on_pan_update(e: ft.DragUpdateEvent):\n        e.control.top = max(0, e.control.top + e.delta_y)\n        e.control.left = max(0, e.control.left + e.delta_x)\n        e.control.update()\n\n    gd = ft.GestureDetector(\n        mouse_cursor=ft.MouseCursor.MOVE,\n        on_vertical_drag_update=on_pan_update,\n        left=100,\n        top=100,\n        content=ft.Container(bgcolor=ft.colors.BLUE, width=50, height=50, border_radius=5),\n    )\n\n    page.add( ft.Stack([gd], expand=True))\n\nft.app(target=main)\n")),(0,a.kt)("p",null,"Gesture detector is yet another great addition to a collection of Flet primitives that allows you to build apps limited only by your imagination. 2D drawing coming later this month is going to complete that ensemble!"),(0,a.kt)("p",null,'That release wasn\'t about only gestures though - that was a "stabilization" release too. We fixed a number of bugs and added a bunch of other small features which you can ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet/issues?q=is%3Aissue+milestone%3AControls-S2+is%3Aclosed"},"see here"),"."),(0,a.kt)("p",null,"Upgrade Flet module to the latest version (",(0,a.kt)("inlineCode",{parentName:"p"},"pip install flet --upgrade"),"), integrate auth in your app and ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"let us know")," what you think!"),(0,a.kt)("p",null,"Enjoy!"))}f.isMDXComponent=!0}}]);