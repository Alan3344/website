"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[745],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,v=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return n?o.createElement(v,a(a({ref:t},s),{},{components:n})):o.createElement(v,a({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(7294),r=n(6010),l="tabItem_Ymn6";function a(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,a),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var o=n(7462),r=n(7294),l=n(6010),a=n(2466),i=n(6550),u=n(1980),c=n(7392),s=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,l=(0,i.k6)(),a=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:o});return[(0,u._X)(a),(0,r.useCallback)((function(e){if(a){var t=new URLSearchParams(l.location.search);t.set(a,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[a,l])]}function m(e){var t,n,o,l,a=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,d=p(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:d})})),b=m[0],k=m[1],h=v({queryString:u,groupId:c}),g=h[0],y=h[1],_=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),o=n[0],l=n[1],[o,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),N=_[0],E=_[1],w=function(){var e=null!=g?g:N;return f({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){w&&k(w)}),[w]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),E(e)}),[y,E,d]),tabValues:d}}var b=n(2389),k="tabList__CuJ",h="tabItem_LNqP";function g(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],d=(0,a.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=s.indexOf(t),o=c[n].value;o!==i&&(d(t),u(o))},f=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var o,r=s.indexOf(e.currentTarget)+1;n=null!=(o=s[r])?o:s[0];break;case"ArrowLeft":var l,a=s.indexOf(e.currentTarget)-1;n=null!=(l=s[a])?l:s[s.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},a,{className:(0,l.Z)("tabs__item",h,null==a?void 0:a.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,o=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var a=l.find((function(e){return e.props.value===o}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})})))}function _(e){var t=m(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(g,(0,o.Z)({},e,t)),r.createElement(y,(0,o.Z)({},e,t)))}function N(e){var t=(0,b.Z)();return r.createElement(_,(0,o.Z)({key:String(t)},e))}},9808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),a=n(4866),i=n(5162),u=["components"],c={title:"IconButton",sidebar_label:"IconButton",slug:"iconbutton"},s=void 0,d={unversionedId:"controls/iconbutton",id:"controls/iconbutton",title:"IconButton",description:"\u56fe\u6807\u6309\u94ae\u662f\u4e00\u4e2a\u5706\u5f62\u6309\u94ae\uff0c\u4e2d\u95f4\u5e26\u6709\u56fe\u6807\uff0c\u901a\u8fc7\u586b\u5145\u989c\u8272\uff08\u58a8\u6c34\uff09\u5bf9\u89e6\u6478\u505a\u51fa\u53cd\u5e94\u3002",source:"@site/docs/controls/iconbutton.md",sourceDirName:"controls",slug:"/controls/iconbutton",permalink:"/website/docs/controls/iconbutton",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/iconbutton.md",tags:[],version:"current",frontMatter:{title:"IconButton",sidebar_label:"IconButton",slug:"iconbutton"},sidebar:"docs",previous:{title:"FloatingActionButton",permalink:"/website/docs/controls/floatingactionbutton"},next:{title:"OutlinedButton",permalink:"/website/docs/controls/outlinedbutton"}},p={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u56fe\u6807\u6309\u94ae",id:"\u56fe\u6807\u6309\u94ae",level:3},{value:"Icon button with <code>click</code> event",id:"icon-button-with-click-event",level:3},{value:"properties",id:"properties",level:2},{value:"<code>autofocus</code>",id:"autofocus",level:3},{value:"<code>content</code>",id:"content",level:3},{value:"<code>icon</code>",id:"icon",level:3},{value:"<code>icon_color</code>",id:"icon_color",level:3},{value:"<code>icon_size</code>",id:"icon_size",level:3},{value:"<code>selected</code>",id:"selected",level:3},{value:"<code>selected_icon</code>",id:"selected_icon",level:3},{value:"<code>selected_icon_color</code>",id:"selected_icon_color",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"<code>url</code>",id:"url",level:3},{value:"<code>url_target</code>",id:"url_target",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>focus()</code>",id:"focus",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"<code>on_blur</code>",id:"on_blur",level:3},{value:"<code>on_click</code>",id:"on_click",level:3},{value:"<code>on_focus</code>",id:"on_focus",level:3}],v={toc:f};function m(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u56fe\u6807\u6309\u94ae\u662f\u4e00\u4e2a\u5706\u5f62\u6309\u94ae\uff0c\u4e2d\u95f4\u5e26\u6709\u56fe\u6807\uff0c\u901a\u8fc7\u586b\u5145\u989c\u8272\uff08\u58a8\u6c34\uff09\u5bf9\u89e6\u6478\u505a\u51fa\u53cd\u5e94\u3002"),(0,l.kt)("p",null,"\u56fe\u6807\u6309\u94ae\u901a\u5e38\u5728\u5de5\u5177\u680f\u4e2d\u4f7f\u7528\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u8bb8\u591a\u5730\u65b9\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/buttons/iconbutton"},"live \u793a\u4f8b")),(0,l.kt)("h3",{id:"\u56fe\u6807\u6309\u94ae"},"\u56fe\u6807\u6309\u94ae"),(0,l.kt)(a.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\n\ndef main(page: ft.Page):\n    page.title = "Icon buttons"\n    page.add(\n        ft.Row(\n            [\n                ft.IconButton(\n                    icon=ft.icons.PAUSE_CIRCLE_FILLED_ROUNDED,\n                    icon_color="blue400",\n                    icon_size=20,\n                    tooltip="Pause record",\n                ),\n                ft.IconButton(\n                    icon=ft.icons.DELETE_FOREVER_ROUNDED,\n                    icon_color="pink600",\n                    icon_size=40,\n                    tooltip="Delete record",\n                ),\n            ]\n        ),\n    )\n\n\nft.app(target=main)\n')))),(0,l.kt)("img",{src:"/img/docs/controls/icon-button/icon-buttons.gif",className:"screenshot-50"}),(0,l.kt)("h3",{id:"icon-button-with-click-event"},"Icon button with ",(0,l.kt)("inlineCode",{parentName:"h3"},"click")," event"),(0,l.kt)(a.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\n\ndef main(page: ft.Page):\n    page.title = "Icon button with \'click\' event"\n\n    def button_clicked(e):\n        b.data += 1\n        t.value = f"Button clicked {b.data} time(s)"\n        page.update()\n\n    b = ft.IconButton(\n        icon=ft.icons.PLAY_CIRCLE_FILL_OUTLINED, on_click=button_clicked, data=0\n    )\n    t = ft.Text()\n\n    page.add(b, t)\n\nft.app(target=main)\n')))),(0,l.kt)("img",{src:"/img/docs/controls/icon-button/icon-button-with-click-event.gif",className:"screenshot-50"}),(0,l.kt)("h2",{id:"properties"},"properties"),(0,l.kt)("h3",{id:"autofocus"},(0,l.kt)("inlineCode",{parentName:"h3"},"autofocus")),(0,l.kt)("p",null,"\u5982\u679c\u5c06\u63a7\u4ef6\u9009\u62e9\u4f5c\u4e3a\u521d\u59cb\u7126\u70b9\uff0c\u5219\u4e3a thus\u3002 \u5982\u679c\u4e00\u4e2a\u5e26\u6709\u81ea\u52a8\u5bf9\u7126\u96c6\u7684\u9875\u9762\u4e0a\u6709\u591a\u4e2a\u63a7\u4ef6\uff0c\u5219\u6dfb\u52a0\u5230\u9875\u9762\u7684\u7b2c\u4e00\u4e2a\u63a7\u4ef6\u5c06\u83b7\u5f97\u7126\u70b9\u3002"),(0,l.kt)("h3",{id:"content"},(0,l.kt)("inlineCode",{parentName:"h3"},"content")),(0,l.kt)("p",null,"\u4ee3\u8868\u81ea\u5b9a\u4e49\u6309\u94ae\u5185\u5bb9\u7684\u63a7\u4ef6\u3002"),(0,l.kt)("h3",{id:"icon"},(0,l.kt)("inlineCode",{parentName:"h3"},"icon")),(0,l.kt)("p",null,"\u6309\u94ae\u4e2d\u663e\u793a\u7684\u56fe\u6807\u3002"),(0,l.kt)("h3",{id:"icon_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"icon_color")),(0,l.kt)("p",null,"\u56fe\u6807",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u3002"),(0,l.kt)("h3",{id:"icon_size"},(0,l.kt)("inlineCode",{parentName:"h3"},"icon_size")),(0,l.kt)("p",null,"\u865a\u62df\u50cf\u7d20\u4e2d\u7684\u56fe\u6807\u5927\u5c0f\u3002"),(0,l.kt)("h3",{id:"selected"},(0,l.kt)("inlineCode",{parentName:"h3"},"selected")),(0,l.kt)("p",null,"\u5c06\u56fe\u6807\u6309\u94ae\u8f6c\u5230\u5207\u6362\u6309\u94ae: ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," - \u8be5\u6309\u94ae\u5728\u9009\u5b9a\u72b6\u6001\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"False")," - \u5728\u6b63\u5e38\u72b6\u6001\u4e2d\u3002"),(0,l.kt)("h3",{id:"selected_icon"},(0,l.kt)("inlineCode",{parentName:"h3"},"selected_icon")),(0,l.kt)("p",null,"\u6240\u9009\u72b6\u6001\u7684\u6309\u94ae\u4e2d\u663e\u793a\u7684\u56fe\u6807\u3002"),(0,l.kt)("h3",{id:"selected_icon_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"selected_icon_color")),(0,l.kt)("p",null,"\u6240\u9009\u72b6\u6001\u7684\u56fe\u6807",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u3002"),(0,l.kt)("p",null,"EN \u56fe\u6807\u5207\u6362\u6309\u94ae\u7684\u793a\u4f8b:"),(0,l.kt)("img",{src:"/img/blog/gradients/toggle-icon-button.gif",className:"screenshot-10"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n\n    def toggle_icon_button(e):\n        e.control.selected = not e.control.selected\n        e.control.update()\n\n    page.add(\n        ft.IconButton(\n            icon=ft.icons.BATTERY_1_BAR,\n            selected_icon=ft.icons.BATTERY_FULL,\n            on_click=toggle_icon_button,\n            selected=False,\n            style=ft.ButtonStyle(color={"selected": ft.colors.GREEN, "": ft.colors.RED}),\n        )\n    )\n\nft.app(target=main)\n')),(0,l.kt)("h3",{id:"style"},(0,l.kt)("inlineCode",{parentName:"h3"},"style")),(0,l.kt)("p",null,"\u6709\u5173\u6b64\u5c5e\u6027\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u60ac\u505c\u5728\u6309\u94ae\u4e0a\u65f6\u663e\u793a\u7684\u6587\u672c\u3002"),(0,l.kt)("h3",{id:"url"},(0,l.kt)("inlineCode",{parentName:"h3"},"url")),(0,l.kt)("p",null,"\u5355\u51fb\u6309\u94ae\u65f6\u8981\u6253\u5f00\u7684 URL\u3002 \u5982\u679c\u5df2\u6ce8\u518c\uff0c\u5219\u5728\u6b64\u4e4b\u540e\u53d1\u5c04",(0,l.kt)("inlineCode",{parentName:"p"},"on_click"),"\u4e8b\u4ef6\u3002"),(0,l.kt)("h3",{id:"url_target"},(0,l.kt)("inlineCode",{parentName:"h3"},"url_target")),(0,l.kt)("p",null,"\u5728 Web \u6a21\u5f0f\u4e0b\u6253\u5f00 URL \u7684\u4f4d\u7f6e:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_blank"),"\uff08\u9ed8\u8ba4\uff09 - \u65b0 Tab/window\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_self")," - \u5f53\u524d\u9009\u9879\u5361\u7247/\u7a97\u53e3\u3002")),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"focus"},(0,l.kt)("inlineCode",{parentName:"h3"},"focus()")),(0,l.kt)("p",null,"\u5c06\u91cd\u70b9\u653e\u5728\u6309\u94ae\u4e0a\u3002"),(0,l.kt)("h2",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,l.kt)("h3",{id:"on_blur"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_blur")),(0,l.kt)("p",null,"\u5f53\u63a7\u4ef6\u5931\u53bb\u7126\u70b9\u65f6\u53d1\u5c04\u3002"),(0,l.kt)("h3",{id:"on_click"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_click")),(0,l.kt)("p",null,"\u7528\u6237\u5355\u51fb\u6309\u94ae\u65f6\u53d1\u5c04\u3002"),(0,l.kt)("h3",{id:"on_focus"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_focus")),(0,l.kt)("p",null,"\u5f53\u63a7\u4ef6\u83b7\u5f97\u7126\u70b9\u65f6\u53d1\u5c04\u3002"))}m.isMDXComponent=!0}}]);