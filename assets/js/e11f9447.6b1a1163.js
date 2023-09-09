"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[284],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||u;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<u;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),o=n(6010),u="tabItem_Ymn6";function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(u,a),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(7462),o=n(7294),u=n(6010),a=n(2466),l=n(6550),i=n(1980),c=n(7392),p=n(12);function s(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:s(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,u=(0,l.k6)(),a=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(a),(0,o.useCallback)((function(e){if(a){var t=new URLSearchParams(u.location.search);t.set(a,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[a,u])]}function v(e){var t,n,r,u,a=e.defaultValue,l=e.queryString,i=void 0!==l&&l,c=e.groupId,s=d(e),v=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:a,tabValues:s})})),b=v[0],h=v[1],k=f({queryString:i,groupId:c}),y=k[0],g=k[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,p.Nk)(t),r=n[0],u=n[1],[r,(0,o.useCallback)((function(e){t&&u.set(e)}),[t,u])]),N=w[0],C=w[1],P=function(){var e=null!=y?y:N;return m({value:e,tabValues:s})?e:null}();return(0,o.useLayoutEffect)((function(){P&&h(P)}),[P]),{selectedValue:b,selectValue:(0,o.useCallback)((function(e){if(!m({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);h(e),g(e),C(e)}),[g,C,s]),tabValues:s}}var b=n(2389),h="tabList__CuJ",k="tabItem_LNqP";function y(e){var t=e.className,n=e.block,l=e.selectedValue,i=e.selectValue,c=e.tabValues,p=[],s=(0,a.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=p.indexOf(t),r=c[n].value;r!==l&&(s(t),i(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,o=p.indexOf(e.currentTarget)+1;n=null!=(r=p[o])?r:p[0];break;case"ArrowLeft":var u,a=p.indexOf(e.currentTarget)-1;n=null!=(u=p[a])?u:p[p.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:d},a,{className:(0,u.Z)("tabs__item",k,null==a?void 0:a.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var a=u.find((function(e){return e.props.value===r}));return a?(0,o.cloneElement)(a,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},u.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=v(e);return o.createElement("div",{className:(0,u.Z)("tabs-container",h)},o.createElement(y,(0,r.Z)({},e,t)),o.createElement(g,(0,r.Z)({},e,t)))}function N(e){var t=(0,b.Z)();return o.createElement(w,(0,r.Z)({key:String(t)},e))}},6467:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var r=n(7462),o=n(3366),u=(n(7294),n(3905)),a=n(4866),l=n(5162),i=["components"],c={"\u6807\u9898":"Popupmenubutton",sidebar_label:"popupmenubutton",slug:"popupmenubutton"},p=void 0,s={unversionedId:"controls/popupmenubutton",id:"controls/popupmenubutton",title:"popupmenubutton",description:"\u5355\u51fb\u65f6\u663e\u793a\u83dc\u5355\u7684\u56fe\u6807\u6309\u94ae\u3002",source:"@site/docs/controls/popupmenubutton.md",sourceDirName:"controls",slug:"/controls/popupmenubutton",permalink:"/website/docs/controls/popupmenubutton",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/popupmenubutton.md",tags:[],version:"current",frontMatter:{"\u6807\u9898":"Popupmenubutton",sidebar_label:"popupmenubutton",slug:"popupmenubutton"},sidebar:"docs",previous:{title:"OutlinedButton",permalink:"/website/docs/controls/outlinedbutton"},next:{title:"TextButton",permalink:"/website/docs/controls/textbutton"}},d={},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"popupmenubutton",id:"popupmenubutton",level:3},{value:"<code>PopupMenuButton</code> properties",id:"popupmenubutton-properties",level:2},{value:"<code>content</code>",id:"content",level:3},{value:"<code>icon</code>",id:"icon",level:3},{value:"<code>items</code>",id:"items",level:3},{value:"<code>PopupMenuButton</code>\u4e8b\u4ef6",id:"popupmenubutton\u4e8b\u4ef6",level:2},{value:"<code>on_cancelled</code>",id:"on_cancelled",level:3},{value:"<code>PopupMenuItem</code> properties",id:"popupmenuitem-properties",level:2},{value:"<code>check</code>",id:"check",level:3},{value:"<code>icon</code>",id:"icon-1",level:3},{value:"<code>text</code>",id:"text",level:3},{value:"<code>content</code>",id:"content-1",level:3},{value:"<code>PopupMenuItem</code>\u4e8b\u4ef6",id:"popupmenuitem\u4e8b\u4ef6",level:2},{value:"<code>on_click</code>",id:"on_click",level:3}],f={toc:m};function v(e){var t=e.components,n=(0,o.Z)(e,i);return(0,u.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u5355\u51fb\u65f6\u663e\u793a\u83dc\u5355\u7684\u56fe\u6807\u6309\u94ae\u3002"),(0,u.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/buttons/popupmenubutton"},"live \u793a\u4f8b")),(0,u.kt)("h3",{id:"popupmenubutton"},"popupmenubutton"),(0,u.kt)(a.Z,{groupId:"language",mdxType:"Tabs"},(0,u.kt)(l.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    def check_item_clicked(e):\n        e.control.checked = not e.control.checked\n        page.update()\n\n    pb = ft.PopupMenuButton(\n        items=[\n            ft.PopupMenuItem(text="Item 1"),\n            ft.PopupMenuItem(icon=ft.icons.POWER_INPUT, text="Check power"),\n            ft.PopupMenuItem(\n                content=ft.Row(\n                    [\n                        ft.Icon(ft.icons.HOURGLASS_TOP_OUTLINED),\n                        ft.Text("Item with a custom content"),\n                    ]\n                ),\n                on_click=lambda _: print("Button with a custom content clicked!"),\n            ),\n            ft.PopupMenuItem(),  # divider\n            ft.PopupMenuItem(\n                text="Checked item", checked=False, on_click=check_item_clicked\n            ),\n        ]\n    )\n    page.add(pb)\n\nft.app(target=main)\n')))),(0,u.kt)("img",{src:"/website/img/docs/controls/popup-menu-button/popup-menu-button-with-custom-content.gif",className:"screenshot-30"}),(0,u.kt)("h2",{id:"popupmenubutton-properties"},(0,u.kt)("inlineCode",{parentName:"h2"},"PopupMenuButton")," properties"),(0,u.kt)("h3",{id:"content"},(0,u.kt)("inlineCode",{parentName:"h3"},"content")),(0,u.kt)("p",null,"\u5c06\u663e\u793a\u7684",(0,u.kt)("inlineCode",{parentName:"p"},"Control"),"\u800c\u4e0d\u662f\u201c\u66f4\u591a\u201d\u56fe\u6807\u3002"),(0,u.kt)("h3",{id:"icon"},(0,u.kt)("inlineCode",{parentName:"h3"},"icon")),(0,u.kt)("p",null,"\u5982\u679c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u56fe\u6807\u6765\u7ed8\u5236\u6309\u94ae\u3002"),(0,u.kt)("h3",{id:"items"},(0,u.kt)("inlineCode",{parentName:"h3"},"items")),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"PopupMenuItem"),"\u63a7\u4ef6\u7684\u96c6\u5408\u4ee5\u5728\u4e0b\u62c9\u83dc\u5355\u4e2d\u663e\u793a\u3002"),(0,u.kt)("h2",{id:"popupmenubutton\u4e8b\u4ef6"},(0,u.kt)("inlineCode",{parentName:"h2"},"PopupMenuButton"),"\u4e8b\u4ef6"),(0,u.kt)("h3",{id:"on_cancelled"},(0,u.kt)("inlineCode",{parentName:"h3"},"on_cancelled")),(0,u.kt)("p",null,"\u5f53\u7528\u6237\u5728\u4e0d\u9009\u62e9\u9879\u76ee\u7684\u60c5\u51b5\u4e0b\u5220\u9664\u5f39\u51fa\u83dc\u5355\u65f6\u8c03\u7528\u3002"),(0,u.kt)("h2",{id:"popupmenuitem-properties"},(0,u.kt)("inlineCode",{parentName:"h2"},"PopupMenuItem")," properties"),(0,u.kt)("h3",{id:"check"},(0,u.kt)("inlineCode",{parentName:"h3"},"check")),(0,u.kt)("p",null,"\u5982\u679c\u5c06\u8bbe\u7f6e\u4e3a",(0,u.kt)("inlineCode",{parentName:"p"},"True"),"\u6216",(0,u.kt)("inlineCode",{parentName:"p"},"False"),"\u83dc\u5355\u9879\u7ed8\u5236\u4e00\u4e2a\u590d\u9009\u6807\u8bb0\u3002"),(0,u.kt)("h3",{id:"icon-1"},(0,u.kt)("inlineCode",{parentName:"h3"},"icon")),(0,u.kt)("p",null,"\u83dc\u5355\u9879\u6587\u672c\u6807\u7b7e\u4e4b\u524d\u8981\u7ed8\u5236\u7684\u56fe\u6807\u3002"),(0,u.kt)("h3",{id:"text"},(0,u.kt)("inlineCode",{parentName:"h3"},"text")),(0,u.kt)("p",null,"\u83dc\u5355\u9879\u6587\u672c\u6807\u7b7e\u3002"),(0,u.kt)("h3",{id:"content-1"},(0,u.kt)("inlineCode",{parentName:"h3"},"content")),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"Control"),"\u8868\u793a\u83dc\u5355\u9879\u7684\u81ea\u5b9a\u4e49\u5185\u5bb9\u3002 \u5982\u679c\u6307\u5b9a\u4e86",(0,u.kt)("inlineCode",{parentName:"p"},"icon"),"\u548c",(0,u.kt)("inlineCode",{parentName:"p"},"text"),"\u7684\u5c5e\u6027\u3002"),(0,u.kt)("h2",{id:"popupmenuitem\u4e8b\u4ef6"},(0,u.kt)("inlineCode",{parentName:"h2"},"PopupMenuItem"),"\u4e8b\u4ef6"),(0,u.kt)("h3",{id:"on_click"},(0,u.kt)("inlineCode",{parentName:"h3"},"on_click")),(0,u.kt)("p",null,"\u5f53\u7528\u6237\u5355\u51fb\u5f39\u51fa\u83dc\u5355\u9879\u65f6\uff0c\u8bf7\u81f4\u7535\u3002"))}v.isMDXComponent=!0}}]);