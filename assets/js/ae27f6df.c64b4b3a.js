"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[7677],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(7462),a=n(7294),l=n(6010),o=n(2466),i=n(6550),u=n(1980),c=n(7392),s=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function v(e){var t,n,r,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,p=d(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:p})})),g=v[0],h=v[1],b=m({queryString:u,groupId:c}),k=b[0],y=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),E=w[0],N=w[1],T=function(){var e=null!=k?k:E;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){T&&h(T)}),[T]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),N(e)}),[y,N,p]),tabValues:p}}var g=n(2389),h="tabList__CuJ",b="tabItem_LNqP";function k(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==i&&(p(t),u(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var l,o=s.indexOf(e.currentTarget)-1;n=null!=(l=s[o])?l:s[s.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:d},o,{className:(0,l.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function E(e){var t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},9157:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(4866),i=n(5162),u=["components"],c={title:"Stack",sidebar_label:"Stack",slug:"stack"},s=void 0,p={unversionedId:"controls/stack",id:"controls/stack",title:"Stack",description:"\u4e00\u4e2a\u5c06\u5176 children \u5b9a\u4f4d\u5728\u5f7c\u6b64\u9876\u90e8\u7684\u63a7\u4ef6\u3002",source:"@site/docs/controls/stack.md",sourceDirName:"controls",slug:"/controls/stack",permalink:"/website/docs/controls/stack",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/stack.md",tags:[],version:"current",frontMatter:{title:"Stack",sidebar_label:"Stack",slug:"stack"},sidebar:"docs",previous:{title:"Column",permalink:"/website/docs/controls/column"},next:{title:"ListView",permalink:"/website/docs/controls/listview"}},d={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u56fe\u50cf\u4e0a\u900f\u660e\u6807\u9898",id:"\u56fe\u50cf\u4e0a\u900f\u660e\u6807\u9898",level:3},{value:"\u5177\u6709\u5728\u7ebf\u72b6\u6001\u7684\u5934\u50cf",id:"\u5177\u6709\u5728\u7ebf\u72b6\u6001\u7684\u5934\u50cf",level:3},{value:"\u7edd\u5bf9\u5b9a\u4f4d\u5806\u6808",id:"\u7edd\u5bf9\u5b9a\u4f4d\u5806\u6808",level:3},{value:"properties",id:"properties",level:2},{value:"<code>clip_behavior</code>",id:"clip_behavior",level:3},{value:"<code>controls</code>",id:"controls",level:3}],m={toc:f};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e00\u4e2a\u5c06\u5176 children \u5b9a\u4f4d\u5728\u5f7c\u6b64\u9876\u90e8\u7684\u63a7\u4ef6\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u4ee5\u7b80\u5355\u7684\u65b9\u5f0f\u91cd\u53e0\u51e0\u4e2a children\uff0c\u4f8b\u5982\u6709\u4e00\u4e9b\u6587\u672c\u548c\u56fe\u50cf\uff0c\u5e76\u7528\u68af\u5ea6\u548c\u4e00\u4e2a\u6309\u94ae\u9644\u52a0\u5230\u5e95\u90e8\u7684\u6309\u94ae\uff0c\u5219\u6b64\u63a7\u4ef6\u5c06\u5f88\u6709\u7528\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u8981\u5b9e\u73b0[5960}\u9700\u8981\u77e5\u9053\u76ee\u6807\u503c\u7684\u7edd\u5bf9\u4f4d\u7f6e\uff0c\u90a3\u4e48\u5806\u6808\u4e5f\u5f88\u6709\u7528\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/layout/stack"},"live \u793a\u4f8b")),(0,l.kt)("h3",{id:"\u56fe\u50cf\u4e0a\u900f\u660e\u6807\u9898"},"\u56fe\u50cf\u4e0a\u900f\u660e\u6807\u9898"),(0,l.kt)("img",{src:"/website/img/docs/controls/stack/image-title.png",className:"screenshot-50"}),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    st = ft.Stack(\n        [\n            ft.Image(\n                src=f"https://picsum.photos/300/300",\n                width=300,\n                height=300,\n                fit=ft.ImageFit.CONTAIN,\n            ),\n            ft.Row(\n                [\n                    ft.Text(\n                        "Image title",\n                        color="white",\n                        size=40,\n                        weight="bold",\n                        opacity=0.5,\n                    )\n                ],\n                alignment=ft.MainAxisAlignment.CENTER,\n            ),\n        ],\n        width=300,\n        height=300,\n    )\n\n    page.add(st)\n\nft.app(target=main)\n')))),(0,l.kt)("h3",{id:"\u5177\u6709\u5728\u7ebf\u72b6\u6001\u7684\u5934\u50cf"},"\u5177\u6709\u5728\u7ebf\u72b6\u6001\u7684\u5934\u50cf"),(0,l.kt)("img",{src:"/website/img/docs/controls/stack/avatar-with-status.png",className:"screenshot-10"}),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page):\n    page.add(\n        ft.Stack(\n            [\n                ft.CircleAvatar(\n                    foreground_image_url="https://avatars.githubusercontent.com/u/5041459?s=88&v=4"\n                ),\n                ft.Container(\n                    content=ft.CircleAvatar(bgcolor=ft.colors.GREEN, radius=5),\n                    alignment=ft.alignment.bottom_left,\n                ),\n            ],\n            width=40,\n            height=40,\n        )\n    )\n\nft.app(target=main, view=ft.AppView.WEB_BROWSER)\n')))),(0,l.kt)("h3",{id:"\u7edd\u5bf9\u5b9a\u4f4d\u5806\u6808"},"\u7edd\u5bf9\u5b9a\u4f4d\u5806\u6808"),(0,l.kt)("img",{src:"/website/img/docs/controls/stack/absolute-positioned.png",className:"screenshot-50"}),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import flet as ft\n\ndef main(page: ft.Page):\n\n    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER\n    page.vertical_alignment = ft.MainAxisAlignment.CENTER\n\n    page.add(\n        ft.Container(\n            ft.Stack(\n                [\n                    ft.Container(width=20, height=20, bgcolor=ft.colors.RED, border_radius=5),\n                    ft.Container(\n                        width=20,\n                        height=20,\n                        bgcolor=ft.colors.YELLOW,\n                        border_radius=5,\n                        right=0,\n                    ),\n                    ft.Container(\n                        width=20,\n                        height=20,\n                        bgcolor=ft.colors.BLUE,\n                        border_radius=5,\n                        right=0,\n                        bottom=0,\n                    ),\n                    ft.Container(\n                        width=20,\n                        height=20,\n                        bgcolor=ft.colors.GREEN,\n                        border_radius=5,\n                        left=0,\n                        bottom=0,\n                    ),\n                    ft.Column(\n                        [\n                            ft.Container(\n                                width=20,\n                                height=20,\n                                bgcolor=ft.colors.PURPLE,\n                                border_radius=5,\n                            )\n                        ],\n                        left=35,\n                        top=35,\n                    ),\n                ]\n            ),\n            border_radius=8,\n            padding=5,\n            width=100,\n            height=100,\n            bgcolor=ft.colors.BLACK,\n        )\n    )\n\nft.app(target=main)\n")))),(0,l.kt)("h2",{id:"properties"},"properties"),(0,l.kt)("h3",{id:"clip_behavior"},(0,l.kt)("inlineCode",{parentName:"h3"},"clip_behavior")),(0,l.kt)("p",null,"\u5185\u5bb9\u5c06\u6839\u636e\u6b64\u9009\u9879\u526a\u8f91\uff08\u6216\u4e0d\uff09\u3002"),(0,l.kt)("p",null,"\u5c5e\u6027\u503c\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"ClipBehavior"),"\u679a\u4e3e\uff0c\u5177\u6709\u652f\u6301\u7684\u503c:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NONE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ANTI_ALIAS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ANTI_ALIAS_WITH_SAVE_LAYER")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HARD_EDGE"),"\uff08\u9ed8\u8ba4\uff09")),(0,l.kt)("h3",{id:"controls"},(0,l.kt)("inlineCode",{parentName:"h3"},"controls")),(0,l.kt)("p",null,"\u5806\u6808\u5185\u663e\u793a\u7684\u63a7\u4ef6\u5217\u8868\u3002 \u5217\u8868\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u63a7\u4ef6\u663e\u793a\u5728\u9876\u90e8\u3002"))}v.isMDXComponent=!0}}]);