"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[3950],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?l.createElement(m,a(a({ref:t},s),{},{components:n})):l.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(7294),r=n(6010),i="tabItem_Ymn6";function a(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,a),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return T}});var l=n(7462),r=n(7294),i=n(6010),a=n(2466),o=n(6550),u=n(1980),c=n(7392),s=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,l=e.groupId,i=(0,o.k6)(),a=function(e){var t=e.queryString,n=void 0!==t&&t,l=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=l?l:null}({queryString:n,groupId:l});return[(0,u._X)(a),(0,r.useCallback)((function(e){if(a){var t=new URLSearchParams(i.location.search);t.set(a,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[a,i])]}function v(e){var t,n,l,i,a=e.defaultValue,o=e.queryString,u=void 0!==o&&o,c=e.groupId,d=p(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,l=e.tabValues;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+l.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=l.find((function(e){return e.default})))?t:l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:d})})),k=v[0],g=v[1],h=m({queryString:u,groupId:c}),b=h[0],y=h[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),l=n[0],i=n[1],[l,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),T=N[0],_=N[1],C=function(){var e=null!=b?b:T;return f({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){C&&g(C)}),[C]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),_(e)}),[y,_,d]),tabValues:d}}var k=n(2389),g="tabList__CuJ",h="tabItem_LNqP";function b(e){var t=e.className,n=e.block,o=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],d=(0,a.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=s.indexOf(t),l=c[n].value;l!==o&&(d(t),u(l))},f=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var l,r=s.indexOf(e.currentTarget)+1;n=null!=(l=s[r])?l:s[0];break;case"ArrowLeft":var i,a=s.indexOf(e.currentTarget)-1;n=null!=(i=s[a])?i:s[s.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},a,{className:(0,i.Z)("tabs__item",h,null==a?void 0:a.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,l=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var a=i.find((function(e){return e.props.value===l}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})})))}function N(e){var t=v(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(b,(0,l.Z)({},e,t)),r.createElement(y,(0,l.Z)({},e,t)))}function T(e){var t=(0,k.Z)();return r.createElement(N,(0,l.Z)({key:String(t)},e))}},4524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var l=n(7462),r=n(3366),i=(n(7294),n(3905)),a=n(4866),o=n(5162),u=["components"],c={title:"ListTile",sidebar_label:"ListTile",slug:"listtile"},s=void 0,d={unversionedId:"controls/listtile",id:"controls/listtile",title:"ListTile",description:"\u4e00\u4e2a\u901a\u5e38\u5305\u542b\u4e00\u4e9b\u6587\u672c\u4ee5\u53ca leading \u6216\u5c3e\u968f\u56fe\u6807\u7684\u5355\u4e2a\u56fa\u5b9a\u9ad8\u884c\u3002",source:"@site/docs/controls/listtile.md",sourceDirName:"controls",slug:"/controls/listtile",permalink:"/website/docs/controls/listtile",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/listtile.md",tags:[],version:"current",frontMatter:{title:"ListTile",sidebar_label:"ListTile",slug:"listtile"},sidebar:"docs",previous:{title:"ListView",permalink:"/website/docs/controls/listview"},next:{title:"GridView",permalink:"/website/docs/controls/gridview"}},p={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"properties",id:"properties",level:2},{value:"<code>autofocus</code>",id:"autofocus",level:3},{value:"<code>content_padding</code>",id:"content_padding",level:3},{value:"<code>dense</code>",id:"dense",level:3},{value:"<code>is_three_line</code>",id:"is_three_line",level:3},{value:"<code>leading</code>",id:"leading",level:3},{value:"<code>selected</code>",id:"selected",level:3},{value:"<code>subtitle</code>",id:"subtitle",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>toggle_inputs</code>",id:"toggle_inputs",level:3},{value:"<code>trailing</code>",id:"trailing",level:3},{value:"<code>url</code>",id:"url",level:3},{value:"<code>url_target</code>",id:"url_target",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"<code>on_click</code>",id:"on_click",level:3},{value:"<code>on_long_press</code>",id:"on_long_press",level:3}],m={toc:f};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e00\u4e2a\u901a\u5e38\u5305\u542b\u4e00\u4e9b\u6587\u672c\u4ee5\u53ca leading \u6216\u5c3e\u968f\u56fe\u6807\u7684\u5355\u4e2a\u56fa\u5b9a\u9ad8\u884c\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/layout/listtile"},"LIVE \u793a\u4f8b")),(0,i.kt)("img",{src:"/img/docs/controls/listtile/listtiles.png",className:"screenshot-50"}),(0,i.kt)(a.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page):\n    page.title = "ListTile Examples"\n    page.add(\n        ft.Card(\n            content=ft.Container(\n                width=500,\n                content=ft.Column(\n                    [\n                        ft.ListTile(\n                            title=ft.Text("One-line list tile"),\n                        ),\n                        ft.ListTile(title=ft.Text("One-line dense list tile"), dense=True),\n                        ft.ListTile(\n                            leading=ft.Icon(ft.icons.SETTINGS),\n                            title=ft.Text("One-line selected list tile"),\n                            selected=True,\n                        ),\n                        ft.ListTile(\n                            leading=ft.Image(src="/icons/icon-192.png", fit="contain"),\n                            title=ft.Text("One-line with leading control"),\n                        ),\n                        ft.ListTile(\n                            title=ft.Text("One-line with trailing control"),\n                            trailing=ft.PopupMenuButton(\n                                icon=ft.icons.MORE_VERT,\n                                items=[\n                                    ft.PopupMenuItem(text="Item 1"),\n                                    ft.PopupMenuItem(text="Item 2"),\n                                ],\n                            ),\n                        ),\n                        ft.ListTile(\n                            leading=ft.Icon(ft.icons.ALBUM),\n                            title=ft.Text("One-line with leading and trailing controls"),\n                            trailing=ft.PopupMenuButton(\n                                icon=ft.icons.MORE_VERT,\n                                items=[\n                                    ft.PopupMenuItem(text="Item 1"),\n                                    ft.PopupMenuItem(text="Item 2"),\n                                ],\n                            ),\n                        ),\n                        ft.ListTile(\n                            leading=ft.Icon(ft.icons.SNOOZE),\n                            title=ft.Text("Two-line with leading and trailing controls"),\n                            subtitle=ft.Text("Here is a second title."),\n                            trailing=ft.PopupMenuButton(\n                                icon=ft.icons.MORE_VERT,\n                                items=[\n                                    ft.PopupMenuItem(text="Item 1"),\n                                    ft.PopupMenuItem(text="Item 2"),\n                                ],\n                            ),\n                        ),\n                    ],\n                    spacing=0,\n                ),\n                padding=ft.padding.symmetric(vertical=10),\n            )\n        )\n    )\n\nft.app(target=main)\n')))),(0,i.kt)("h2",{id:"properties"},"properties"),(0,i.kt)("h3",{id:"autofocus"},(0,i.kt)("inlineCode",{parentName:"h3"},"autofocus")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"True"),"\u5982\u679c\u5c06\u9009\u62e9\u63a7\u4ef6\u4f5c\u4e3a\u521d\u59cb\u7126\u70b9\u3002 \u5982\u679c\u4e00\u4e2a\u5e26\u6709\u81ea\u52a8\u5bf9\u7126\u96c6\u7684\u9875\u9762\u4e0a\u6709\u591a\u4e2a\u63a7\u4ef6\uff0c\u5219\u6dfb\u52a0\u5230\u9875\u9762\u7684\u7b2c\u4e00\u4e2a\u5c06\u83b7\u5f97\u7126\u70b9\u3002"),(0,i.kt)("h3",{id:"content_padding"},(0,i.kt)("inlineCode",{parentName:"h3"},"content_padding")),(0,i.kt)("p",null,"\u74f7\u7816\u7684\u5185\u90e8\u586b\u5145\u3002 \u63d2\u5165 ListTile \u7684\u5185\u5bb9: \u5176",(0,i.kt)("inlineCode",{parentName:"p"},"leading"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"title"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"subtitle"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"trailing"),"\u63a7\u4ef6\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u672a\u8bbe\u7f6e\uff0c\u5219\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"padding.symmetric(horizontal=16)"),"\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\u548c\u53ef\u80fd\u7684\u503c\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"container#padding"},(0,i.kt)("inlineCode",{parentName:"a"},"Container.padding")),"\u5c5e\u6027\u3002"),(0,i.kt)("h3",{id:"dense"},(0,i.kt)("inlineCode",{parentName:"h3"},"dense")),(0,i.kt)("p",null,"\u8be5\u5217\u8868\u74f7\u7816\u662f\u5426\u662f\u5782\u76f4\u5bc6\u96c6\u5217\u8868\u7684\u4e00\u90e8\u5206\u3002 \u5bc6\u5ea6\u5217\u8868\u56fe\u5757\u9ed8\u8ba4\u4e3a\u8f83\u5c0f\u7684\u9ad8\u5ea6\u3002"),(0,i.kt)("h3",{id:"is_three_line"},(0,i.kt)("inlineCode",{parentName:"h3"},"is_three_line")),(0,i.kt)("p",null,"\u8be5\u5217\u8868\u74f7\u7816\u662f\u5426\u65e8\u5728\u663e\u793a\u4e09\u884c\u6587\u672c\u3002"),(0,i.kt)("p",null,"\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"True"),"\uff0c\u5219\u526f\u6807\u9898\u5fc5\u987b\u662f\u975e\u7f16\u53f7\uff08\u56e0\u4e3a\u9884\u8ba1\u5c06\u63d0\u4f9b\u7b2c\u4e8c\u884c\u548c\u7b2c\u4e09\u884c\u7684\u6587\u672c\uff09\u3002"),(0,i.kt)("p",null,"\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"\uff0c\u5219\u5c06\u5217\u8868\u74f7\u7816\u89c6\u4e3a\u5177\u6709\u4e00\u884c\uff0c\u5982\u679c\u5b57\u5e55\u4e3a\u65e0\u6548\uff0c\u5982\u679c\u5b57\u5e55\u4e0d\u4e3a\u65e0\u6548\uff0c\u5219\u5c06\u5176\u89c6\u4e3a\u5177\u6709\u4e24\u884c\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u6587\u672c\u63a7\u4ef6\u7528\u4e8e\u6807\u9898\u548c\u5b57\u5e55\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"text#max_lines"},"text.max_lines"),"\u6267\u884c\u7ebf\u8def\u9650\u5236\u3002"),(0,i.kt)("h3",{id:"leading"},(0,i.kt)("inlineCode",{parentName:"h3"},"leading")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Control"),"\u8981\u5728\u6807\u9898\u4e4b\u524d\u663e\u793a\u3002"),(0,i.kt)("h3",{id:"selected"},(0,i.kt)("inlineCode",{parentName:"h3"},"selected")),(0,i.kt)("p",null,"\u5982\u679c\u8fd8\u542f\u7528\u4e86\u6b64\u56fe\u5757\uff0c\u5219\u4ee5\u76f8\u540c\u7684\u989c\u8272\u5448\u73b0\u56fe\u6807\u548c\u6587\u672c\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9009\u5b9a\u7684\u989c\u8272\u662f\u4e3b\u9898\u7684\u4e3b\u8981\u989c\u8272\u3002"),(0,i.kt)("h3",{id:"subtitle"},(0,i.kt)("inlineCode",{parentName:"h3"},"subtitle")),(0,i.kt)("p",null,"\u6807\u9898\u4e0b\u65b9\u663e\u793a\u7684\u5176\u4ed6\u5185\u5bb9\u3002 \u901a\u5e38\u662f",(0,i.kt)("a",{parentName:"p",href:"text"},"Text"),"\u7a97\u53e3\u5c0f\u90e8\u4ef6\u3002"),(0,i.kt)("p",null,"\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"is_three_line"),"\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"\uff0c\u5219\u4e0d\u5e94\u5305\u88c5\u3002 \u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"is_three_line"),"\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"True"),"\uff0c\u5219\u5e94\u5c06\u5176\u914d\u7f6e\u4e3a\u6700\u591a\u4e24\u884c\u3002 \u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"text#max_lines"},"text.max_lines"),"\u6267\u884c\u884c\u6570\u3002"),(0,i.kt)("h3",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h3"},"title")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Control"),"\u4ee5\u663e\u793a\u5217\u8868\u56fe\u5757\u7684\u4e3b\u8981\u5185\u5bb9\u3002 \u901a\u5e38\u662f",(0,i.kt)("a",{parentName:"p",href:"text"},"Text"),"\u63a7\u4ef6\u3002 \u8fd9\u4e0d\u5e94\u8be5\u5305\u88f9\u3002 \u8981\u6267\u884c\u5355\u884c\u9650\u5236\uff0c\u8bf7\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"text#max_lines"},"text.max_lines"),"\u3002"),(0,i.kt)("h3",{id:"toggle_inputs"},(0,i.kt)("inlineCode",{parentName:"h3"},"toggle_inputs")),(0,i.kt)("p",null,"\u662f\u5426\u5355\u51fb\u5217\u8868\u56fe\u5757\u5e94\u5207\u6362",(0,i.kt)("inlineCode",{parentName:"p"},"Radio"),"\u7684\u72b6\u6001\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Checkbox"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"Switch"),"\u5728\u74f7\u7816\u5185\u3002 \u9ed8\u8ba4\u503c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"\u3002"),(0,i.kt)("h3",{id:"trailing"},(0,i.kt)("inlineCode",{parentName:"h3"},"trailing")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Control"),"\u6807\u9898\u540e\u663e\u793a\u3002 \u901a\u5e38\u662f",(0,i.kt)("a",{parentName:"p",href:"icon"},"Icon"),"\u63a7\u5236\u3002"),(0,i.kt)("h3",{id:"url"},(0,i.kt)("inlineCode",{parentName:"h3"},"url")),(0,i.kt)("p",null,"\u5355\u51fb\u5217\u8868\u74f7\u7816\u65f6\u6253\u5f00\u7684 URL\u3002 \u5982\u679c\u5df2\u6ce8\u518c\uff0c\u5219\u5728\u6b64\u4e4b\u540e\u53d1\u5c04",(0,i.kt)("inlineCode",{parentName:"p"},"on_click"),"\u4e8b\u4ef6\u3002"),(0,i.kt)("h3",{id:"url_target"},(0,i.kt)("inlineCode",{parentName:"h3"},"url_target")),(0,i.kt)("p",null,"\u5728 Web \u6a21\u5f0f\u4e0b\u6253\u5f00 URL \u7684\u4f4d\u7f6e:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_blank"),"\uff08\u9ed8\u8ba4\u503c\uff09 - \u65b0 Tab/window\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_self")," - \u5f53\u524d\u7684\u9009\u9879\u5361\u7247/\u7a97\u53e3\u3002")),(0,i.kt)("h2",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,i.kt)("h3",{id:"on_click"},(0,i.kt)("inlineCode",{parentName:"h3"},"on_click")),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u5355\u51fb\u6216\u70b9\u51fb\u5217\u8868\u74f7\u7816\u65f6\u53d1\u5c04\u3002"),(0,i.kt)("h3",{id:"on_long_press"},(0,i.kt)("inlineCode",{parentName:"h3"},"on_long_press")),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u5728\u6b64\u5217\u8868\u74f7\u7816\u4e0a\u957f\u538b\u65f6\u53d1\u5c04\u3002"))}v.isMDXComponent=!0}}]);