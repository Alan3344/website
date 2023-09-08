"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[3455],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(7462),a=n(7294),l=n(6010),i=n(2466),o=n(6550),u=n(1980),s=n(7392),d=n(12);function c(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function k(e){var t,n,r,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,c=p(e),k=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:c})})),h=k[0],v=k[1],N=f({queryString:u,groupId:s}),b=N[0],g=N[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,d.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),C=y[0],T=y[1],O=function(){var e=null!=b?b:C;return m({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){O&&v(O)}),[O]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),g(e),T(e)}),[g,T,c]),tabValues:c}}var h=n(2389),v="tabList__CuJ",N="tabItem_LNqP";function b(e){var t=e.className,n=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,d=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=d.indexOf(t),r=s[n].value;r!==o&&(c(t),u(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=d.indexOf(e.currentTarget)+1;n=null!=(r=d[a])?r:d[0];break;case"ArrowLeft":var l,i=d.indexOf(e.currentTarget)-1;n=null!=(l=d[i])?l:d[d.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return d.push(e)},onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",N,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function y(e){var t=k(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function C(e){var t=(0,h.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},9333:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(4866),o=n(5162),u=["components"],s={title:"ShaderMask",sidebar_label:"ShaderMask",slug:"shadermask"},d=void 0,c={unversionedId:"controls/shadermask",id:"controls/shadermask",title:"ShaderMask",description:"\u4e00\u4e2a\u5c06\u9634\u6697\u5668\u751f\u6210\u7684\u63a9\u7801\u5e94\u7528\u4e8e\u5176 child \u7684\u63a7\u4ef6\u3002",source:"@site/docs/controls/shadermask.md",sourceDirName:"controls",slug:"/controls/shadermask",permalink:"/website/docs/controls/shadermask",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/shadermask.md",tags:[],version:"current",frontMatter:{title:"ShaderMask",sidebar_label:"ShaderMask",slug:"shadermask"},sidebar:"docs",previous:{title:"Semantics",permalink:"/website/docs/controls/semantics"},next:{title:"ShakeDetector",permalink:"/website/docs/controls/shakedetector"}},p={},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5728\u56fe\u50cf\u8fb9\u7f18\u6dfb\u52a0\u7c89\u7ea2\u8272\u7684\u5149\u8292",id:"\u5728\u56fe\u50cf\u8fb9\u7f18\u6dfb\u52a0\u7c89\u7ea2\u8272\u7684\u5149\u8292",level:3},{value:"\u9010\u6e10\u6de1\u51fa\u56fe\u50cf\u5230\u5e95\u90e8\u8fb9\u7f18",id:"\u9010\u6e10\u6de1\u51fa\u56fe\u50cf\u5230\u5e95\u90e8\u8fb9\u7f18",level:3},{value:"properties",id:"properties",level:2},{value:"<code>blend_mode</code>",id:"blend_mode",level:3},{value:"<code>border_radius</code>",id:"border_radius",level:3},{value:"<code>content</code>",id:"content",level:3},{value:"<code>shader</code>",id:"shader",level:3}],f={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e00\u4e2a\u5c06\u9634\u6697\u5668\u751f\u6210\u7684\u63a9\u7801\u5e94\u7528\u4e8e\u5176 child \u7684\u63a7\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ShaderMask"),"\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"/docs/controls/container#lineargradient"},(0,l.kt)("inlineCode",{parentName:"a"},"LinearGradient")),"\u63a9\u7801 child \u7684\u8fb9\u7f18\u9010\u6e10\u6d88\u5931\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/utility/shadermask"},"live \u793a\u4f8b")),(0,l.kt)("h3",{id:"\u5728\u56fe\u50cf\u8fb9\u7f18\u6dfb\u52a0\u7c89\u7ea2\u8272\u7684\u5149\u8292"},"\u5728\u56fe\u50cf\u8fb9\u7f18\u6dfb\u52a0\u7c89\u7ea2\u8272\u7684\u5149\u8292"),(0,l.kt)("img",{src:"/img/docs/controls/shader-mask/shader-mask-pink-glow.png",className:"screenshot-20"}),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.add(\n        ft.Row(\n            [\n                ft.ShaderMask(\n                    ft.Image(\n                        src="https://picsum.photos/200/200?1",\n                        width=200,\n                        height=200,\n                        fit=ft.ImageFit.FILL,\n                    ),\n                    blend_mode=ft.BlendMode.MULTIPLY,\n                    shader=ft.RadialGradient(\n                        center=ft.alignment.center,\n                        radius=2.0,\n                        colors=[ft.colors.WHITE, ft.colors.PINK],\n                        tile_mode=ft.GradientTileMode.CLAMP,\n                    ),\n                )\n            ]\n        )\n    )\n\nft.app(target=main)\n')))),(0,l.kt)("h3",{id:"\u9010\u6e10\u6de1\u51fa\u56fe\u50cf\u5230\u5e95\u90e8\u8fb9\u7f18"},"\u9010\u6e10\u6de1\u51fa\u56fe\u50cf\u5230\u5e95\u90e8\u8fb9\u7f18"),(0,l.kt)("img",{src:"/img/docs/controls/shader-mask/shader-mask-gradient.png",className:"screenshot-20"}),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.add(\n        ft.Row(\n            [\n                ft.ShaderMask(\n                    ft.Image(src="https://picsum.photos/100/200?2"),\n                    blend_mode=ft.BlendMode.DST_IN,\n                    shader=ft.LinearGradient(\n                        begin=ft.alignment.top_center,\n                        end=ft.alignment.bottom_center,\n                        colors=[ft.colors.BLACK, ft.colors.TRANSPARENT],\n                        stops=[0.5, 1.0],\n                    ),\n                    border_radius=10,\n                ),\n            ]\n        )\n    )\n\nft.app(target=main)\n')))),(0,l.kt)("h2",{id:"properties"},"properties"),(0,l.kt)("h3",{id:"blend_mode"},(0,l.kt)("inlineCode",{parentName:"h3"},"blend_mode")),(0,l.kt)("p",null,"\u5c06\u7740\u8272\u5668\u5e94\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"content"),"\u65f6\u4f7f\u7528\u7684\u6df7\u5408\u6a21\u5f0f\u3002"),(0,l.kt)("p",null,"\u5c5e\u6027\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"BlendMode"),"\u679a\u4e3e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"MODULATE"),"\u9ed8\u8ba4\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"MODULATE"),"\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u7684\u503c:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CLEAR")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"COLOR")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"COLOR_BURN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"COLOR_DODGE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DARKEN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DIFFERENCE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DST")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DST_A_TOP")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DST_IN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DST_OUT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DST_OVER")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EXCLUSION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HARD_LIGHT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HUE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LIGHTEN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LUMINOSITY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MODULATE"),"\uff08\u9ed8\u8ba4\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MULTIPLY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OVERLAY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PLUS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SATURATION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SCREEN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SOFT_LIGHT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SRC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SRC_A_TOP")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SRC_IN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SRC_OUT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SRC_OVER")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"VALUES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"XOR"))),(0,l.kt)("p",null,"\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-ui/BlendMode.html"},"BlendMode"),"\u4ece flutter \u6587\u6863\u4e2d\u8fdb\u884c\u6df7\u5408\u6a21\u5f0f\u793a\u4f8b\u3002"),(0,l.kt)("h3",{id:"border_radius"},(0,l.kt)("inlineCode",{parentName:"h3"},"border_radius")),(0,l.kt)("p",null,"\u6709\u5173\u8fb9\u754c\u534a\u5f84\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"container#border_radius"},(0,l.kt)("inlineCode",{parentName:"a"},"Container.border_radius")),"\u5c5e\u6027\u6587\u6863\u3002"),(0,l.kt)("h3",{id:"content"},(0,l.kt)("inlineCode",{parentName:"h3"},"content")),(0,l.kt)("p",null,"a child ",(0,l.kt)("inlineCode",{parentName:"p"},"Control"),"\u5c06\u7740\u8272\u5668\u5e94\u7528\u4e8e\u3002"),(0,l.kt)("h3",{id:"shader"},(0,l.kt)("inlineCode",{parentName:"h3"},"shader")),(0,l.kt)("p",null,"\u4f7f\u7528\u68af\u5ea6\u4f5c\u4e3a\u7740\u8272\u5668\u3002 \u6709\u5173\u68af\u5ea6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"container#gradient"},(0,l.kt)("inlineCode",{parentName:"a"},"Container.gradient")),"\u5c5e\u6027\u6587\u6863\u3002"))}k.isMDXComponent=!0}}]);