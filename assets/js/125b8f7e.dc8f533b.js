"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[8174],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,l(l({ref:e},s),{},{components:n})):r.createElement(m,l({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[d]="string"==typeof t?t:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1504:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(7294),o="cardContainer_nYI1",a=n(6010);function l(t){return t.href?r.createElement("a",{href:t.href,className:(0,a.Z)("card padding--md",o)},t.children):r.createElement("div",{className:(0,a.Z)("card padding--md",o)},t.children)}},5074:function(t,e,n){n.r(e),n.d(e,{ImageCard:function(){return f},assets:function(){return d},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=n(1504),i=["components"],c={title:"Buttons",sidebar_label:"Buttons",slug:"buttons"},u=void 0,s={unversionedId:"controls/buttons",id:"controls/buttons",title:"Buttons",description:"Live example",source:"@site/docs/controls/buttons.md",sourceDirName:"controls",slug:"/controls/buttons",permalink:"/website/docs/controls/buttons",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/buttons.md",tags:[],version:"current",frontMatter:{title:"Buttons",sidebar_label:"Buttons",slug:"buttons"},sidebar:"docs",previous:{title:"Canvas",permalink:"/website/docs/controls/canvas"},next:{title:"ElevatedButton",permalink:"/website/docs/controls/elevatedbutton"}},d={},p=[],f=function(t){var e=t.title,n=t.href,r=t.imageUrl;return(0,a.kt)("div",{className:"col col--4 margin-bottom--lg"},(0,a.kt)(l.Z,{href:n,mdxType:"Card"},(0,a.kt)("img",{src:"/img/docs/controls/button/"+r}),(0,a.kt)("h2",null,e)))},m={toc:p,ImageCard:f};function b(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/buttons"},"Live example")),(0,a.kt)("div",{className:"margin-top--lg"},(0,a.kt)("section",{className:"row"},(0,a.kt)(f,{title:"Elevated",href:"/docs/controls/elevatedbutton",imageUrl:"elevated-button.png",mdxType:"ImageCard"}),(0,a.kt)(f,{title:"Filled",href:"/docs/controls/filledbutton",imageUrl:"filled-button.png",mdxType:"ImageCard"}),(0,a.kt)(f,{title:"Filled Tonal",href:"/docs/controls/filledtonalbutton",imageUrl:"filled-tonal-button.png",mdxType:"ImageCard"}),(0,a.kt)(f,{title:"Floating Action",href:"/docs/controls/floatingactionbutton",imageUrl:"floating-action-button.png",mdxType:"ImageCard"}),(0,a.kt)(f,{title:"Icon Button",href:"/docs/controls/iconbutton",imageUrl:"icon-button.png",mdxType:"ImageCard"}),(0,a.kt)(f,{title:"Outlined",href:"/docs/controls/outlinedbutton",imageUrl:"outlined-button.png",mdxType:"ImageCard"}),(0,a.kt)(f,{title:"Popup Menu",href:"/docs/controls/popupmenubutton",imageUrl:"popup-menu.gif",mdxType:"ImageCard"}),(0,a.kt)(f,{title:"Text Button",href:"/docs/controls/textbutton",imageUrl:"text-button.png",mdxType:"ImageCard"}))))}b.isMDXComponent=!0}}]);