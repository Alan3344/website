"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[687],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),g=a,f=s["".concat(u,".").concat(g)]||s[g]||d[g]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1765:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Getting user input",sidebar_label:"Getting user input"},u=void 0,p={unversionedId:"guides/python/getting-user-input",id:"guides/python/getting-user-input",title:"Getting user input",description:"\u7528 Flet \u5236\u4f5c\u4ea4\u4e92\u5f0f Web \u5e94\u7528\u7a0b\u5e8f\u662f\u8f7b\u800c\u6613\u4e3e\u7684\uff01 \u5b83\u4e0d\u4ec5\u9650\u4e8e\u663e\u793a\u6570\u636e\uff0c\u800c\u4e14\u60a8\u53ef\u4ee5\u4ece\u7528\u6237\u8bf7\u6c42\u8f93\u5165\u5e76\u54cd\u5e94\u9875\u9762\u63a7\u4ef6\u751f\u6210\u7684\u5404\u79cd\u4e8b\u4ef6\u3002",source:"@site/docs/guides/python/getting-user-input.md",sourceDirName:"guides/python",slug:"/guides/python/getting-user-input",permalink:"/website/docs/guides/python/getting-user-input",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/getting-user-input.md",tags:[],version:"current",frontMatter:{title:"Getting user input",sidebar_label:"Getting user input"},sidebar:"docs",previous:{title:"Getting started",permalink:"/website/docs/guides/python/getting-started"},next:{title:"Keyboard shortcuts",permalink:"/website/docs/guides/python/keyboard-shortcuts"}},c={},s=[{value:"\u6309\u94ae",id:"\u6309\u94ae",level:2},{value:"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f",id:"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f",level:2},{value:"\u6587\u672c\u6846",id:"\u6587\u672c\u6846",level:2},{value:"\u590d\u9009\u6846",id:"\u590d\u9009\u6846",level:2},{value:"\u4e0b\u62c9",id:"\u4e0b\u62c9",level:2}],d={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7528 Flet \u5236\u4f5c\u4ea4\u4e92\u5f0f Web \u5e94\u7528\u7a0b\u5e8f\u662f\u8f7b\u800c\u6613\u4e3e\u7684\uff01 \u5b83\u4e0d\u4ec5\u9650\u4e8e\u663e\u793a\u6570\u636e\uff0c\u800c\u4e14\u60a8\u53ef\u4ee5\u4ece\u7528\u6237\u8bf7\u6c42\u8f93\u5165\u5e76\u54cd\u5e94\u9875\u9762\u63a7\u4ef6\u751f\u6210\u7684\u5404\u79cd\u4e8b\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u6309\u94ae"},"\u6309\u94ae"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Button"),"\u662f\u6700\u91cd\u8981\u7684\u8f93\u5165\u63a7\u4ef6\uff0c\u5f53\u6309\u4e0b\u65f6\u4f1a\u751f\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"click"),"\u4e8b\u4ef6:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'btn = ft.ElevatedButton("Click me!")\npage.add(btn)\n')),(0,o.kt)("img",{src:"/img/docs/getting-started/getting-user-input-elevated-button.png",className:"screenshot-50"}),(0,o.kt)("p",null,"\u7f51\u9875\u4e0a\u63a7\u4ef6\u751f\u6210\u7684\u6240\u6709\u4e8b\u4ef6\u90fd\u8fde\u7eed\u53d1\u9001\u56de\u60a8\u7684\u811a\u672c\uff0c\u90a3\u4e48\u60a8\u5982\u4f55\u54cd\u5e94\u6309\u94ae\u5355\u51fb\uff1f"),(0,o.kt)("h2",{id:"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f"},"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f"),(0,o.kt)("p",null,"\u201c\u8ba1\u6570\u5668\u201d\u5e94\u7528\u4e2d\u5e26\u6709\u4e8b\u4ef6\u7684\u6309\u94ae:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Flet counter example"\n    page.vertical_alignment = ft.MainAxisAlignment.CENTER\n\n    txt_number = ft.TextField(value="0", text_align="right", width=100)\n\n    def minus_click(e):\n        txt_number.value = str(int(txt_number.value) - 1)\n        page.update()\n\n    def plus_click(e):\n        txt_number.value = str(int(txt_number.value) + 1)\n        page.update()\n\n    page.add(\n        ft.Row(\n            [\n                ft.IconButton(ft.icons.REMOVE, on_click=minus_click),\n                txt_number,\n                ft.IconButton(ft.icons.ADD, on_click=plus_click),\n            ],\n            alignment=ft.MainAxisAlignment.CENTER,\n        )\n    )\n\nft.app(target=main)\n')),(0,o.kt)("img",{src:"/img/docs/getting-started/getting-user-input-event-handlers.png",className:"screenshot-50"}),(0,o.kt)("h2",{id:"\u6587\u672c\u6846"},"\u6587\u672c\u6846"),(0,o.kt)("p",null,"Flet \u4e3a\u5efa\u7b51\u5f62\u5f0f\u63d0\u4f9b\u4e86\u8bb8\u591a",(0,o.kt)("a",{parentName:"p",href:"/docs/controls"},"Controls"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/textfield"},"TextField"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/checkbox"},"\u590d\u9009\u6846"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/dropdown"},"\u4e0b\u62c9\u4e0b\u62c9"),"\uff0c[8223}\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/controls/elevatedbutton"},"\u5347\u7ea7 Button"),"\u3002"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u5411\u7528\u6237\u8be2\u95ee\u540d\u79f0:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page):\n    def btn_click(e):\n        if not txt_name.value:\n            txt_name.error_text = "Please enter your name"\n            page.update()\n        else:\n            name = txt_name.value\n            page.clean()\n            page.add(ft.Text(f"Hello, {name}!"))\n\n    txt_name = ft.TextField(label="Your name")\n\n    page.add(txt_name, ft.ElevatedButton("Say hello!", on_click=btn_click))\n\nft.app(target=main)\n')),(0,o.kt)("img",{src:"/img/docs/getting-started/getting-user-input-textbox.png",className:"screenshot-50"}),(0,o.kt)("h2",{id:"\u590d\u9009\u6846"},"\u590d\u9009\u6846"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/controls/checkbox"},"\u590d\u9009\u6846"),"\u63a7\u5236\u4e3a\u60a8\u63d0\u4f9b\u5404\u79cd\u5c5e\u6027\u548c\u4e8b\u4ef6\uff0c\u4ee5\u6613\u4e8e\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u590d\u9009\u6846 todo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\n\ndef main(page):\n    def checkbox_changed(e):\n        output_text.value = (\n            f"You have learned how to ski :  {todo_check.value}."\n        )\n        page.update()\n\n    output_text = ft.Text()\n    todo_check = ft.Checkbox(label="ToDo: Learn how to use ski", value=False, on_change=checkbox_changed)\n    page.add(todo_check, output_text)\n\nft.app(target=main)\n')),(0,o.kt)("img",{src:"/img/docs/getting-started/getting-user-input-checkbox.png",className:"screenshot-50"}),(0,o.kt)("h2",{id:"\u4e0b\u62c9"},"\u4e0b\u62c9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\n\ndef main(page: ft.Page):\n    def button_clicked(e):\n        output_text.value = f"Dropdown value is:  {color_dropdown.value}"\n        page.update()\n\n    output_text = ft.Text()\n    submit_btn = ft.ElevatedButton(text="Submit", on_click=button_clicked)\n    color_dropdown = ft.Dropdown(\n        width=100,\n        options=[\n            ft.dropdown.Option("Red"),\n            ft.dropdown.Option("Green"),\n            ft.dropdown.Option("Blue"),\n        ],\n    )\n    page.add(color_dropdown, submit_btn, output_text)\n\nft.app(target=main)\n')),(0,o.kt)("img",{src:"/img/docs/getting-started/getting-user-input-dropdown.png",className:"screenshot-50"}))}g.isMDXComponent=!0}}]);