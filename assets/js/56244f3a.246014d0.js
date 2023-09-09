"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[2131],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(t),u=a,f=g["".concat(d,".").concat(u)]||g[u]||s[u]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[g]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return g}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={title:"Drag and drop",sidebar_label:"Drag and drop"},d=void 0,l={unversionedId:"guides/python/drag-and-drop",id:"guides/python/drag-and-drop",title:"Drag and drop",description:"Flet \u4e2d\u62d6\u52a8\u7684\u529b\u5b66\u975e\u5e38\u7b80\u5355 - \u7528\u6237\u5f00\u59cb\u62d6\u52a8Draggable\u63a7\u5236\uff0c\u5e76\u5728DragTarget\u4e0a\u201c\u5c06\u201d\u5b83\u62d6\u653e\u3002 \u5982\u679c\u62d6\u52a8\u76ee\u6807\u548c\u963b\u529b\u76ee\u6807\u90fd\u5177\u6709\u76f8\u540c\u7684group\u62d6\u52a8\u76ee\u6807\u5c06\u8c03\u7528on_accept\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u5e76\u5c06\u62d6\u653e\u63a7\u5236 ID \u4f5c\u4e3a\u4e8b\u4ef6\u6570\u636e\u4f20\u9012\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u62d6\u52a8\u662f\u7528\u4e8e\u62d6\u653e\u64cd\u4f5c\u7684\u6e90\u201c\u6570\u636e\u201d\u3002",source:"@site/docs/guides/python/drag-and-drop.md",sourceDirName:"guides/python",slug:"/guides/python/drag-and-drop",permalink:"/website/docs/guides/python/drag-and-drop",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/drag-and-drop.md",tags:[],version:"current",frontMatter:{title:"Drag and drop",sidebar_label:"Drag and drop"},sidebar:"docs",previous:{title:"Large lists",permalink:"/website/docs/guides/python/large-lists"},next:{title:"Navigation and routing",permalink:"/website/docs/guides/python/navigation-and-routing"}},p={},g=[],s={toc:g};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Flet \u4e2d\u62d6\u52a8\u7684\u529b\u5b66\u975e\u5e38\u7b80\u5355 - \u7528\u6237\u5f00\u59cb\u62d6\u52a8",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/draggable"},(0,o.kt)("inlineCode",{parentName:"a"},"Draggable")),"\u63a7\u5236\uff0c\u5e76\u5728",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/dragtarget"},(0,o.kt)("inlineCode",{parentName:"a"},"DragTarget")),"\u4e0a\u201c\u5c06\u201d\u5b83\u62d6\u653e\u3002 \u5982\u679c\u62d6\u52a8\u76ee\u6807\u548c\u963b\u529b\u76ee\u6807\u90fd\u5177\u6709\u76f8\u540c\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"group"),"\u62d6\u52a8\u76ee\u6807\u5c06\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"on_accept"),"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u5e76\u5c06\u62d6\u653e\u63a7\u5236 ID \u4f5c\u4e3a\u4e8b\u4ef6\u6570\u636e\u4f20\u9012\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u62d6\u52a8\u662f\u7528\u4e8e\u62d6\u653e\u64cd\u4f5c\u7684\u6e90\u201c\u6570\u636e\u201d\u3002"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u770b\u4ee5\u4e0b\u793a\u4f8b\u3002 \u5728\u4e0b\u9762\u7684\u7a0b\u5e8f\u4e2d\uff0c\u60a8\u53ef\u4ee5\u62d6\u52a8\u5de6\u63a7\u4ef6\u663e\u793a\u201c 1\u201d\u5728\u53f3\u4e0a\u89d2\u663e\u793a\u201c 0\u201d\uff0c\u5e76\u4e14\u5f53\u62d6\u52a8\u64cd\u4f5c\u5b8c\u6210\u65f6\uff0c\u5de6\u63a7\u4ef6\u5c06\u66ff\u6362\u4e3a\u201c 0\u201d\uff0c\u53f3\u63a7\u4ef6\u53d8\u4e3a\u201c 1\u201d: :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Drag and Drop example"\n\n    def drag_accept(e):\n        # get draggable (source) control by its ID\n        src = page.get_control(e.src_id)\n        # update text inside draggable control\n        src.content.content.value = "0"\n        # update text inside drag target control\n        e.control.content.content.value = "1"\n        page.update()\n\n    page.add(\n        ft.Row(\n            [\n                ft.Draggable(\n                    group="number",\n                    content=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.colors.CYAN_200,\n                        border_radius=5,\n                        content=ft.Text("1", size=20),\n                        alignment=ft.alignment.center,\n                    ),\n                ),\n                ft.Container(width=100),\n                ft.DragTarget(\n                    group="number",\n                    content=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.colors.PINK_200,\n                        border_radius=5,\n                        content=ft.Text("0", size=20),\n                        alignment=ft.alignment.center,\n                    ),\n                    on_accept=drag_accept,\n                ),\n            ]\n        )\n    )\n\nft.app(target=main)\n')),(0,o.kt)("img",{src:"/website/img/docs/getting-started/drag-and-drop-number.gif",className:"screenshot-50"}),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u5f53\u53d1\u751f",(0,o.kt)("inlineCode",{parentName:"p"},"on_accept"),"\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u786e\u5b9a\u201c\u6e90\u201d\uff08draggable\uff09\u548c\u201c\u76ee\u6807\u201d\uff08\u62d6\u52a8\u76ee\u6807\uff09\u63a7\u5236\u7684\u60c5\u51b5\u662f\u5f00\u53d1\u4eba\u5458\u7684\u8d23\u4efb\u3002"),(0,o.kt)("p",null,":::\u8bb0\u5f55\u7684\u4e1c\u897f\n\u5c06 DragTarget \u7684 Group \u5c5e\u6027\u66f4\u6539\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"number1"),"\uff0c\u5e76\u5728\u76ee\u6807\u4e0a\u5220\u9664\u201c 1\u201d\u65f6\u4e0d\u518d\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"on_accept"),"\u3002\n:::"),(0,o.kt)("p",null,"\u8fd8\u6709\u5176\u4ed6\u5c5e\u6027\u548c\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u62d6\u653e\u64cd\u4f5c\u66f4\u52a0\u4e92\u52a8\u3002 \u4f8b\u5982\uff0c\u5f53\u62d6\u52a8\u64cd\u4f5c\u6b63\u5728\u8fdb\u884c\u65f6\uff0cdraggable \u5177\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"content_when_dragging"),"\u5c5e\u6027\u4ee5\u663e\u793a\u4e0d\u540c\u7684\u63a7\u4ef6\uff0c\u800c\u4e0d\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"content"),"\u3002 \u8fd8\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"content_feedback"),"\u5c5e\u6027\u5728\u6307\u9488\u4e0b\u663e\u793a\u4e0d\u540c\u7684\u63a7\u4ef6\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u76f8\u540c\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"content"),"\u63a7\u4ef6\uff0c\u4f46\u662f\u5728\u62d6\u52a8\u65f6\u5728\u5149\u6807\u4e0b\u663e\u793a\u4e86 50\uff05\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u5728\u793a\u4f8b\u4e2d\u4fee\u6539\u53ef\u62d6\u52a8\uff0c\u4ee5\u5728\u62d6\u52a8\u65f6\u663e\u793a\u4e00\u4e2a\u201c\u5b54\u201d\uff0c\u4ee5\u4ee3\u66ff\u62d6\u52a8\u63a7\u4ef6\uff0c\u4ec5\u5728\u5149\u6807\u4e0b\u65b9\u201c 1\u201d:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'...\n                ft.Draggable(\n                    group="number",\n                    content=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.colors.CYAN_200,\n                        border_radius=5,\n                        content=ft.Text("1", size=20),\n                        alignment=ft.alignment.center,\n                    ),\n                    content_when_dragging=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.colors.BLUE_GREY_200,\n                        border_radius=5,\n                    ),\n                    content_feedback=ft.Text("1"),\n                ),\n...\n')),(0,o.kt)("img",{src:"/website/img/docs/getting-started/drag-and-drop-number-2.gif",className:"screenshot-50"}),(0,o.kt)("p",null,"\u62d6\u52a8\u76ee\u6807\u63a7\u4ef6\u8fd8\u5177\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"on_will_accept"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"on_leave"),"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u5b83\u4eec\u5728\u201c\u5220\u9664\u201d\u76ee\u6807\u65f6\u6709\u52a9\u4e8e\u53ef\u89c6\u5316\u3002 \u5728\u6211\u4eec\u7684\u793a\u4f8b\u4e2d\uff0c\u8ba9\u6211\u4eec\u4fee\u6539 dragtarget\uff0c\u4ee5\u4fbf\u5728\u76ee\u6807\u63a7\u5236\u8303\u56f4\u5185\u7ed8\u5236\u4e00\u4e2a\u8fb9\u6846\uff0c\u5f53\u5b83\u51c6\u5907\u597d\u63a5\u53d7\u4f20\u5165\u7684\u963b\u529b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Drag and Drop example 2"\n\n    def drag_accept(e):\n        # get draggable (source) control by its ID\n        src = page.get_control(e.src_id)\n        # update text inside draggable control\n        src.content.content.value = "0"\n        # reset source group, so it cannot be dropped to a target anymore\n        src.group = ""\n        # update text inside drag target control\n        e.control.content.content.value = "1"\n        # reset border\n        e.control.content.border = None\n        page.update()\n\n    def drag_will_accept(e):\n        # black border when it\'s allowed to drop and red when it\'s not\n        e.control.content.border = ft.border.all(\n            2, ft.colors.BLACK45 if e.data == "true" else ft.colors.RED\n        )\n        e.control.update()\n\n    def drag_leave(e):\n        e.control.content.border = None\n        e.control.update()\n\n    page.add(\n        ft.Row(\n            [\n                ft.Draggable(\n                    group="number",\n                    content=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.colors.CYAN_200,\n                        border_radius=5,\n                        content=ft.Text("1", size=20),\n                        alignment=ft.alignment.center,\n                    ),\n                    content_when_dragging=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.colors.BLUE_GREY_200,\n                        border_radius=5,\n                    ),\n                    content_feedback=ft.Text("1"),\n                ),\n                ft.Container(width=100),\n                ft.DragTarget(\n                    group="number",\n                    content=ft.Container(\n                        width=50,\n                        height=50,\n                        bgcolor=ft.colors.PINK_200,\n                        border_radius=5,\n                        content=ft.Text("0", size=20),\n                        alignment=ft.alignment.center,\n                    ),\n                    on_accept=drag_accept,\n                    on_will_accept=drag_will_accept,\n                    on_leave=drag_leave,\n                ),\n            ]\n        )\n    )\n\nft.app(target=main)\n')),(0,o.kt)("img",{src:"/website/img/docs/getting-started/drag-and-drop-number-3.gif",className:"screenshot-50"}))}u.isMDXComponent=!0}}]);