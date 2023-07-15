"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[687],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),g=r,f=c["".concat(u,".").concat(g)]||c[g]||d[g]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1765:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Getting user input",sidebar_label:"Getting user input"},u=void 0,l={unversionedId:"guides/python/getting-user-input",id:"guides/python/getting-user-input",title:"Getting user input",description:"Making interactive web apps with Flet is a breeze! It's not just limited to displaying data, but you can request an input from a user and respond to various events generated by page controls.",source:"@site/docs/guides/python/getting-user-input.md",sourceDirName:"guides/python",slug:"/guides/python/getting-user-input",permalink:"/website/docs/guides/python/getting-user-input",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/getting-user-input.md",tags:[],version:"current",frontMatter:{title:"Getting user input",sidebar_label:"Getting user input"},sidebar:"docs",previous:{title:"Testing on iOS",permalink:"/website/docs/guides/python/testing-on-ios"},next:{title:"Keyboard shortcuts",permalink:"/website/docs/guides/python/keyboard-shortcuts"}},p={},c=[{value:"Buttons",id:"buttons",level:2},{value:"Event handlers",id:"event-handlers",level:2},{value:"Textbox",id:"textbox",level:2},{value:"Checkbox",id:"checkbox",level:2},{value:"Dropdown",id:"dropdown",level:2}],d={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Making interactive web apps with Flet is a breeze! It's not just limited to displaying data, but you can request an input from a user and respond to various events generated by page controls."),(0,a.kt)("h2",{id:"buttons"},"Buttons"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Button")," is the most essential input control which generates ",(0,a.kt)("inlineCode",{parentName:"p"},"click")," event when pressed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'btn = ft.ElevatedButton("Click me!")\npage.add(btn)\n')),(0,a.kt)("img",{src:"/img/docs/getting-started/getting-user-input-elevated-button.png",className:"screenshot-50"}),(0,a.kt)("p",null,"All events generated by controls on a web page are continuously sent back to your script, so how do you respond to a button click?"),(0,a.kt)("h2",{id:"event-handlers"},"Event handlers"),(0,a.kt)("p",null,'Buttons with events in "Counter" app:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Flet counter example"\n    page.vertical_alignment = ft.MainAxisAlignment.CENTER\n\n    txt_number = ft.TextField(value="0", text_align="right", width=100)\n\n    def minus_click(e):\n        txt_number.value = str(int(txt_number.value) - 1)\n        page.update()\n\n    def plus_click(e):\n        txt_number.value = str(int(txt_number.value) + 1)\n        page.update()\n\n    page.add(\n        ft.Row(\n            [\n                ft.IconButton(ft.icons.REMOVE, on_click=minus_click),\n                txt_number,\n                ft.IconButton(ft.icons.ADD, on_click=plus_click),\n            ],\n            alignment=ft.MainAxisAlignment.CENTER,\n        )\n    )\n\nft.app(target=main)\n')),(0,a.kt)("img",{src:"/img/docs/getting-started/getting-user-input-event-handlers.png",className:"screenshot-50"}),(0,a.kt)("h2",{id:"textbox"},"Textbox"),(0,a.kt)("p",null,"Flet provides a number of ",(0,a.kt)("a",{parentName:"p",href:"/docs/controls"},"controls")," for building forms: ",(0,a.kt)("a",{parentName:"p",href:"/docs/controls/textfield"},"TextField"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/controls/checkbox"},"Checkbox"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/controls/dropdown"},"Dropdown"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/controls/elevatedbutton"},"ElevatedButton"),"."),(0,a.kt)("p",null,"Let's ask a user for a name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page):\n    def btn_click(e):\n        if not txt_name.value:\n            txt_name.error_text = "Please enter your name"\n            page.update()\n        else:\n            name = txt_name.value\n            page.clean()\n            page.add(ft.Text(f"Hello, {name}!"))\n\n    txt_name = ft.TextField(label="Your name")\n\n    page.add(txt_name, ft.ElevatedButton("Say hello!", on_click=btn_click))\n\nft.app(target=main)\n')),(0,a.kt)("img",{src:"/img/docs/getting-started/getting-user-input-textbox.png",className:"screenshot-50"}),(0,a.kt)("h2",{id:"checkbox"},"Checkbox"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/controls/checkbox"},"Checkbox")," control provides you with various properties and events emmiters for ease of use."),(0,a.kt)("p",null,"Let's create a one checkbox ToDo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\n\ndef main(page):\n    def checkbox_changed(e):\n        output_text.value = (\n            f"You have learned how to ski :  {todo_check.value}."\n        )\n        page.update()\n\n    output_text = ft.Text()\n    todo_check = ft.Checkbox(label="ToDo: Learn how to use ski", value=False, on_change=checkbox_changed)\n    page.add(todo_check, output_text)\n\nft.app(target=main)\n')),(0,a.kt)("img",{src:"/img/docs/getting-started/getting-user-input-checkbox.png",className:"screenshot-50"}),(0,a.kt)("h2",{id:"dropdown"},"Dropdown"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\n\ndef main(page: ft.Page):\n    def button_clicked(e):\n        output_text.value = f"Dropdown value is:  {color_dropdown.value}"\n        page.update()\n\n    output_text = ft.Text()\n    submit_btn = ft.ElevatedButton(text="Submit", on_click=button_clicked)\n    color_dropdown = ft.Dropdown(\n        width=100,\n        options=[\n            ft.dropdown.Option("Red"),\n            ft.dropdown.Option("Green"),\n            ft.dropdown.Option("Blue"),\n        ],\n    )\n    page.add(color_dropdown, submit_btn, output_text)\n\nft.app(target=main)\n')),(0,a.kt)("img",{src:"/img/docs/getting-started/getting-user-input-dropdown.png",className:"screenshot-50"}))}g.isMDXComponent=!0}}]);