"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[3524],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return a?n.createElement(f,c(c({ref:t},d),{},{components:a})):n.createElement(f,c({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=a[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1863:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),c=["components"],o={title:"HapticFeedback",sidebar_label:"HapticFeedback",slug:"hapticfeedback"},l=void 0,p={unversionedId:"controls/hapticfeedback",id:"controls/hapticfeedback",title:"HapticFeedback",description:"Allows access to the haptic feedback interface on the device.",source:"@site/docs/controls/hapticfeedback.md",sourceDirName:"controls",slug:"/controls/hapticfeedback",permalink:"/docs/controls/hapticfeedback",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/hapticfeedback.md",tags:[],version:"current",frontMatter:{title:"HapticFeedback",sidebar_label:"HapticFeedback",slug:"hapticfeedback"},sidebar:"docs",previous:{title:"TransparentPointer",permalink:"/docs/controls/transparentpointer"},next:{title:"Semantics",permalink:"/docs/controls/semantics"}},d={},s=[{value:"Examples",id:"examples",level:2},{value:"Haptic feedback sample",id:"haptic-feedback-sample",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>heavy_impact()</code>",id:"heavy_impact",level:3},{value:"<code>light_impact()</code>",id:"light_impact",level:3},{value:"<code>medium_impact()</code>",id:"medium_impact",level:3},{value:"<code>vibrate()</code>",id:"vibrate",level:3}],u={toc:s};function m(e){var t=e.components,a=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Allows access to the haptic feedback interface on the device."),(0,i.kt)("p",null,"It is non-visual and should be added to ",(0,i.kt)("inlineCode",{parentName:"p"},"page.overlay")," list."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"haptic-feedback-sample"},"Haptic feedback sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    hf = ft.HapticFeedback()\n    page.overlay.append(hf)\n\n    page.add(\n        ft.ElevatedButton("Heavy impact", on_click=lambda _: hf.heavy_impact()),\n        ft.ElevatedButton("Medium impact", on_click=lambda _: hf.medium_impact()),\n        ft.ElevatedButton("Light impact", on_click=lambda _: hf.light_impact()),\n        ft.ElevatedButton("Vibrate", on_click=lambda _: hf.vibrate()),\n    )\n\nft.app(target=main)\n')),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"heavy_impact"},(0,i.kt)("inlineCode",{parentName:"h3"},"heavy_impact()")),(0,i.kt)("p",null,"Provides a haptic feedback corresponding a collision impact with a heavy mass."),(0,i.kt)("h3",{id:"light_impact"},(0,i.kt)("inlineCode",{parentName:"h3"},"light_impact()")),(0,i.kt)("p",null,"Provides a haptic feedback corresponding a collision impact with a light mass."),(0,i.kt)("h3",{id:"medium_impact"},(0,i.kt)("inlineCode",{parentName:"h3"},"medium_impact()")),(0,i.kt)("p",null,"Provides a haptic feedback corresponding a collision impact with a medium mass."),(0,i.kt)("h3",{id:"vibrate"},(0,i.kt)("inlineCode",{parentName:"h3"},"vibrate()")),(0,i.kt)("p",null,"Provides vibration haptic feedback to the user for a short duration."))}m.isMDXComponent=!0}}]);