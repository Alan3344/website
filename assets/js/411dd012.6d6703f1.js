"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[1286],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:o,l[1]=u;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8967:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],u={slug:"gesture-detector",title:"Gesture detector",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},i=void 0,c={permalink:"/website/blog/gesture-detector",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2022-10-11-gesture-detector.md",source:"@site/blog/2022-10-11-gesture-detector.md",title:"Gesture detector",description:"\u6211\u4eec\u521a\u521a\u53d1\u5e03\u4e86Flet 0.1.62\uff0c\u5e76\u652f\u6301\u624b\u52bf\u5904\u7406\uff01",date:"2022-10-11T00:00:00.000Z",formattedDate:"October 11, 2022",tags:[{label:"release",permalink:"/website/blog/tags/release"}],readingTime:1.615,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"gesture-detector",title:"Gesture detector",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},prevItem:{title:"Matplotlib and Plotly charts",permalink:"/website/blog/matplotlib-and-plotly-charts"},nextItem:{title:"User authentication",permalink:"/website/blog/user-authentication"}},s={authorsImageUrls:[void 0]},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6211\u4eec\u521a\u521a\u53d1\u5e03\u4e86",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/flet/0.1.62/"},"Flet 0.1.62"),"\uff0c\u5e76\u652f\u6301\u624b\u52bf\u5904\u7406\uff01"),(0,a.kt)("p",null,"\u6709\u4e00\u4e2a\u65b0\u7684\u63a7\u4ef6 - ",(0,a.kt)("a",{parentName:"p",href:"/docs/controls/gesturedetector"},"GETUREDETECTOR"),"\uff0c\u5b83\u5141\u8bb8\u5904\u7406\u5404\u79cd\u624b\u52bf: \u5e26\u6709\u5de6\u4fa7\uff08\u4e3b\uff09\u548c\u53f3\uff08\u6b21\u7ea7\uff09\u9f20\u6807\uff08\u6307\u9488\uff09\u6309\u94ae\u7684\u5355\u4e2a\u548c\u53cc\u9f99\u5934\uff0c\u5782\u76f4\uff0c\u6c34\u5e73\u548c\u53cc\u5411\u963b\u529b\uff0c \u53d8\u7126\uff08\u634f\u5408\u548c\u634f\uff09\u624b\u52bf\u4ee5\u53ca\u60ac\u505c\u4e8b\u4ef6\u3002 \u73b0\u5728\uff0c\u901a\u8fc7\u5c06\u5176\u5305\u88f9\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"GestureDetector"),"\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5236\u4f5c\u4efb\u4f55 Flet \u63a7\u5236\u201c\u53ef\u5355\u51fb\u201d\u548c\u201c\u62d6\u52a8\u201d\uff01"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u7b80\u5355\u793a\u4f8b\uff0c\u5b83\u5141\u8bb8\u60a8\u5c06\u5bb9\u5668\u62d6\u5230\u5806\u6808\u4e2d:"),(0,a.kt)("img",{src:"/website/img/blog/gesture-detector/gesture-detector-demo.gif",className:"screenshot-50"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import flet as ft\n\ndef main(page: ft.Page):\n    def on_pan_update(e: ft.DragUpdateEvent):\n        e.control.top = max(0, e.control.top + e.delta_y)\n        e.control.left = max(0, e.control.left + e.delta_x)\n        e.control.update()\n\n    gd = ft.GestureDetector(\n        mouse_cursor=ft.MouseCursor.MOVE,\n        on_vertical_drag_update=on_pan_update,\n        left=100,\n        top=100,\n        content=ft.Container(bgcolor=ft.colors.BLUE, width=50, height=50, border_radius=5),\n    )\n\n    page.add( ft.Stack([gd], expand=True))\n\nft.app(target=main)\n")),(0,a.kt)("p",null,"\u624b\u52bf\u63a2\u6d4b\u5668\u662f Flet \u57fa\u672c\u96c6\u5408\u96c6\u5408\u7684\u53c8\u4e00\u4e2a\u5f88\u597d\u7684\u8865\u5145\uff0c\u5b83\u4f7f\u60a8\u80fd\u591f\u4ec5\u53d7\u5230\u60f3\u8c61\u529b\u9650\u5236\u7684\u5e94\u7528\u7a0b\u5e8f\u3002 \u672c\u6708\u665a\u4e9b\u65f6\u5019\u5230\u6765\u7684 2D \u7ed8\u56fe\u5c06\u5b8c\u6210\u8be5\u5408\u594f\uff01"),(0,a.kt)("p",null,"\u8be5\u7248\u672c\u4e0d\u4ec5\u4ec5\u662f\u624b\u52bf - \u8fd9\u4e5f\u662f\u201c\u7a33\u5b9a\u201d\u7684\u53d1\u5e03\u3002 \u6211\u4eec\u4fee\u590d\u4e86\u8bb8\u591a\u9519\u8bef\uff0c\u5e76\u6dfb\u52a0\u4e86\u8bb8\u591a\u5176\u4ed6\u5c0f\u529f\u80fd\uff0c\u60a8\u53ef\u4ee5",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/flet/issues?q=is%3Aissue+milestone%3AControls-S2+is%3Aclosed"},"\u8bf7\u53c2\u89c1\u6b64\u5904"),"\u3002"),(0,a.kt)("p",null,"\u5347\u7ea7 Flet \u6a21\u5757\u5230\u6700\u65b0\u7248\u672c\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"pip install install flet -upgrade"),"\uff09\uff0c\u5c06 auth \u96c6\u6210\u5728\u60a8\u7684\u5e94\u7528\u4e2d\uff0c\u5e76",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"\u8ba9\u6211\u4eec\u77e5\u9053"),"\u60a8\u7684\u60f3\u6cd5\uff01"),(0,a.kt)("p",null,"\u4eab\u53d7\uff01"))}f.isMDXComponent=!0}}]);