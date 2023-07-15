"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[3702],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"SafeArea",sidebar_label:"SafeArea",slug:"safearea"},s=void 0,d={unversionedId:"controls/safearea",id:"controls/safearea",title:"SafeArea",description:"A control that insets its content by sufficient padding to avoid intrusions by the operating system.",source:"@site/docs/controls/safearea.md",sourceDirName:"controls",slug:"/controls/safearea",permalink:"/website/docs/controls/safearea",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/safearea.md",tags:[],version:"current",frontMatter:{title:"SafeArea",sidebar_label:"SafeArea",slug:"safearea"},sidebar:"docs",previous:{title:"VerticalDivider",permalink:"/website/docs/controls/verticaldivider"},next:{title:"Navigation",permalink:"/website/docs/controls/app-structure-navigation"}},p={},c=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>bottom</code>",id:"bottom",level:3},{value:"<code>content</code>",id:"content",level:3},{value:"<code>left</code>",id:"left",level:3},{value:"<code>maintain_bottom_view_padding</code>",id:"maintain_bottom_view_padding",level:3},{value:"<code>minimum</code>",id:"minimum",level:3},{value:"<code>right</code>",id:"right",level:3},{value:"<code>top</code>",id:"top",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A control that insets its ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," by sufficient padding to avoid intrusions by the operating system."),(0,r.kt)("p",null,"For example, this will indent the ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," by enough to avoid the status bar at the top of the screen."),(0,r.kt)("p",null,"It will also indent the ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," by the amount necessary to avoid The Notch on the iPhone X, or other similar creative physical features of the display."),(0,r.kt)("p",null,"When a ",(0,r.kt)("inlineCode",{parentName:"p"},"minimum")," padding is specified, the greater of the ",(0,r.kt)("inlineCode",{parentName:"p"},"minimum")," padding or the safe area padding will be applied."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\nclass State:\n    counter = 0\n\ndef main(page: ft.Page):\n    state = State()\n\n    def add_click(e):\n        state.counter += 1\n        counter.value = str(state.counter)\n        counter.update()\n\n    page.floating_action_button = ft.FloatingActionButton(\n        icon=ft.icons.ADD, on_click=add_click\n    )\n    page.add(\n        ft.SafeArea(\n            ft.Container(\n                counter := ft.Text("0", size=50),\n                alignment=ft.alignment.center,\n            ),\n            expand=True,\n        )\n    )\n\nft.app(main)\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"bottom"},(0,r.kt)("inlineCode",{parentName:"h3"},"bottom")),(0,r.kt)("p",null,"Whether to avoid system intrusions on the bottom side of the screen. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("h3",{id:"content"},(0,r.kt)("inlineCode",{parentName:"h3"},"content")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Control")," to display inside safe area."),(0,r.kt)("h3",{id:"left"},(0,r.kt)("inlineCode",{parentName:"h3"},"left")),(0,r.kt)("p",null,"Whether to avoid system intrusions on the left. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("h3",{id:"maintain_bottom_view_padding"},(0,r.kt)("inlineCode",{parentName:"h3"},"maintain_bottom_view_padding")),(0,r.kt)("p",null,"Specifies whether the ",(0,r.kt)("inlineCode",{parentName:"p"},"SafeArea")," should maintain the bottom ",(0,r.kt)("inlineCode",{parentName:"p"},"MediaQueryData.viewPadding")," instead of the bottom ",(0,r.kt)("inlineCode",{parentName:"p"},"MediaQueryData.padding"),", defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,r.kt)("p",null,"For example, if there is an onscreen keyboard displayed above the SafeArea, the padding can be maintained below the obstruction rather than being consumed. This can be helpful in cases where your layout contains flexible controls, which could visibly move when opening a software keyboard due to the change in the padding value. Setting this to true will avoid the UI shift."),(0,r.kt)("h3",{id:"minimum"},(0,r.kt)("inlineCode",{parentName:"h3"},"minimum")),(0,r.kt)("p",null,"This minimum padding to apply."),(0,r.kt)("p",null,"The greater of the minimum insets and the media padding will be applied."),(0,r.kt)("h3",{id:"right"},(0,r.kt)("inlineCode",{parentName:"h3"},"right")),(0,r.kt)("p",null,"Whether to avoid system intrusions on the right. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("h3",{id:"top"},(0,r.kt)("inlineCode",{parentName:"h3"},"top")),(0,r.kt)("p",null,"Whether to avoid system intrusions at the top of the screen, typically the system status bar. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."))}m.isMDXComponent=!0}}]);