"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[424],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||l;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),c=n(1980),u=n(7392),s=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,c._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function h(e){var t,n,a,l,o=e.defaultValue,i=e.queryString,c=void 0!==i&&i,u=e.groupId,d=p(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:d})})),v=h[0],k=h[1],b=m({queryString:c,groupId:u}),g=b[0],_=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,s.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),y=w[0],N=w[1],E=function(){var e=null!=g?g:y;return f({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){E&&k(E)}),[E]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);k(e),_(e),N(e)}),[_,N,d]),tabValues:d}}var v=n(2389),k="tabList__CuJ",b="tabItem_LNqP";function g(e){var t=e.className,n=e.block,i=e.selectedValue,c=e.selectValue,u=e.tabValues,s=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==i&&(d(t),c(a))},f=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=s.indexOf(e.currentTarget)+1;n=null!=(a=s[r])?a:s[0];break;case"ArrowLeft":var l,o=s.indexOf(e.currentTarget)-1;n=null!=(l=s[o])?l:s[s.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},o,{className:(0,l.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function _(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(_,(0,a.Z)({},e,t)))}function y(e){var t=(0,v.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},2119:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(4866),i=n(5162),c=["components"],u={title:"Switch",sidebar_label:"Switch",slug:"switch"},s=void 0,d={unversionedId:"controls/switch",id:"controls/switch",title:"Switch",description:"a \u5207\u6362\u4ee3\u8868\u4e00\u4e2a\u7269\u7406\u5f00\u5173\uff0c\u5141\u8bb8\u67d0\u4eba\u5728\u4e24\u4e2a\u76f8\u4e92\u6392\u65a5\u7684\u9009\u9879\u4e4b\u95f4\u8fdb\u884c\u9009\u62e9\u3002",source:"@site/docs/controls/switch.md",sourceDirName:"controls",slug:"/controls/switch",permalink:"/website/docs/controls/switch",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/switch.md",tags:[],version:"current",frontMatter:{title:"Switch",sidebar_label:"Switch",slug:"switch"},sidebar:"docs",previous:{title:"Slider",permalink:"/website/docs/controls/slider"},next:{title:"TextField",permalink:"/website/docs/controls/textfield"}},p={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u57fa\u672c\u4ea4\u6362\u673a",id:"\u57fa\u672c\u4ea4\u6362\u673a",level:3},{value:"Switch with <code>on_change</code> event",id:"switch-with-on_change-event",level:3},{value:"properties",id:"properties",level:2},{value:"<code>active_color</code>",id:"active_color",level:3},{value:"<code>active_track_color</code>",id:"active_track_color",level:3},{value:"<code>autofocus</code>",id:"autofocus",level:3},{value:"<code>inactive_thumb_color</code>",id:"inactive_thumb_color",level:3},{value:"<code>inactive_track_color</code>",id:"inactive_track_color",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"<code>label_position</code>",id:"label_position",level:3},{value:"<code>thumb_color</code>",id:"thumb_color",level:3},{value:"<code>track_color</code>",id:"track_color",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"<code>on_blur</code>",id:"on_blur",level:3},{value:"<code>on_change</code>",id:"on_change",level:3},{value:"<code>on_focus</code>",id:"on_focus",level:3}],m={toc:f};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"a \u5207\u6362\u4ee3\u8868\u4e00\u4e2a\u7269\u7406\u5f00\u5173\uff0c\u5141\u8bb8\u67d0\u4eba\u5728\u4e24\u4e2a\u76f8\u4e92\u6392\u65a5\u7684\u9009\u9879\u4e4b\u95f4\u8fdb\u884c\u9009\u62e9\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u201c\u5f00/\u5173\u201d\uff0c\u201c\u663e\u793a/\u9690\u85cf\u201d\u3002 \u9009\u62e9\u9009\u9879\u5e94\u7acb\u5373\u4ea7\u751f\u7ed3\u679c\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/input/switch"},"live \u793a\u4f8b")),(0,l.kt)("h3",{id:"\u57fa\u672c\u4ea4\u6362\u673a"},"\u57fa\u672c\u4ea4\u6362\u673a"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page):\n    def button_clicked(e):\n        t.value = (\n            f"Switch values are:  {c1.value}, {c2.value}, {c3.value}, {c4.value}."\n        )\n        page.update()\n\n    t = ft.Text()\n    c1 = ft.Switch(label="Unchecked switch", value=False)\n    c2 = ft.Switch(label="Checked switch", value=True)\n    c3 = ft.Switch(label="Disabled switch", disabled=True)\n    c4 = ft.Switch(\n        label="Switch with rendered label_position=\'left\'", label_position=ft.LabelPosition.LEFT\n    )\n    b = ft.ElevatedButton(text="Submit", on_click=button_clicked)\n    page.add(c1, c2, c3, c4, b, t)\n\nft.app(target=main, view=ft.AppView.WEB_BROWSER)\n')))),(0,l.kt)("img",{src:"/img/docs/controls/switch/basic-switch.gif",className:"screenshot-30"}),(0,l.kt)("h3",{id:"switch-with-on_change-event"},"Switch with ",(0,l.kt)("inlineCode",{parentName:"h3"},"on_change")," event"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    def theme_changed(e):\n        page.theme_mode = (\n            ft.ThemeMode.DARK\n            if page.theme_mode == ft.ThemeMode.LIGHT\n            else ft.ThemeMode.LIGHT\n        )\n        c.label = (\n            "Light theme" if page.theme_mode == ft.ThemeMode.LIGHT else "Dark theme"\n        )\n        page.update()\n\n    page.theme_mode = ft.ThemeMode.LIGHT\n    c = ft.Switch(label="Light theme", on_change=theme_changed)\n    page.add(c)\n\nft.app(target=main)\n')))),(0,l.kt)("img",{src:"/img/docs/controls/switch/switch-with-change-event.gif",className:"screenshot-30"}),(0,l.kt)("h2",{id:"properties"},"properties"),(0,l.kt)("h3",{id:"active_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"active_color")),(0,l.kt)("p",null,"\u6b64\u5f00\u5173\u6253\u5f00\u65f6\u4f7f\u7528\u7684",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u3002"),(0,l.kt)("h3",{id:"active_track_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"active_track_color")),(0,l.kt)("p",null,"\u5f53\u6b64\u5f00\u5173\u6253\u5f00\u65f6\uff0c",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u5c06\u5728\u8f68\u9053\u4e0a\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"track_color"),"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"selected"),"\u72b6\u6001\u4e2d\u7684\u975e\u65e0\u989c\u8272\uff0c\u5219\u5c06\u4f7f\u7528\u8be5\u989c\u8272\u4ee3\u66ff\u8fd9\u79cd\u989c\u8272\u3002"),(0,l.kt)("h3",{id:"autofocus"},(0,l.kt)("inlineCode",{parentName:"h3"},"autofocus")),(0,l.kt)("p",null,"\u5982\u679c\u5c06\u63a7\u4ef6\u9009\u62e9\u4f5c\u4e3a\u521d\u59cb\u7126\u70b9\uff0c\u5219\u4e3a thus\u3002 \u5982\u679c\u4e00\u4e2a\u5e26\u6709\u81ea\u52a8\u5bf9\u7126\u96c6\u7684\u9875\u9762\u4e0a\u6709\u591a\u4e2a\u63a7\u4ef6\uff0c\u5219\u6dfb\u52a0\u5230\u9875\u9762\u7684\u7b2c\u4e00\u4e2a\u5c06\u83b7\u5f97\u7126\u70b9\u3002"),(0,l.kt)("h3",{id:"inactive_thumb_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"inactive_thumb_color")),(0,l.kt)("p",null,"\u5f53\u6b64\u5f00\u5173\u5173\u95ed\u65f6\uff0c",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u5c06\u5728\u62c7\u6307\u4e0a\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"thumb_color"),"\u5728\u9ed8\u8ba4\u72b6\u6001\u4e0b\u8fd4\u56de\u975e\u65e0\u5f69\u8272\uff0c\u5219\u5c06\u5176\u4ee3\u66ff\u8fd9\u79cd\u989c\u8272\u3002"),(0,l.kt)("h3",{id:"inactive_track_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"inactive_track_color")),(0,l.kt)("p",null,"\u5f53\u6b64\u5f00\u5173\u5173\u95ed\u65f6\uff0c",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u5c06\u5728\u8f68\u9053\u4e0a\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"track_color"),"\u5728\u9ed8\u8ba4\u72b6\u6001\u4e0b\u8fd4\u56de\u975e\u65e0\u6548\u7684\u989c\u8272\uff0c\u5219\u5c06\u4f7f\u7528\u8be5\u989c\u8272\u4ee3\u66ff\u8fd9\u79cd\u989c\u8272\u3002"),(0,l.kt)("h3",{id:"label"},(0,l.kt)("inlineCode",{parentName:"h3"},"label")),(0,l.kt)("p",null,"\u53ef\u70b9\u51fb\u6807\u7b7e\u663e\u793a\u5728\u4ea4\u6362\u673a\u53f3\u4fa7\u3002"),(0,l.kt)("h3",{id:"label_position"},(0,l.kt)("inlineCode",{parentName:"h3"},"label_position")),(0,l.kt)("p",null,"\u5c5e\u6027\u503c\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"LabelPosition"),"\u679a\u4e3e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"LabelPosition.RIGHT"),"\u9ed8\u8ba4\u503c\u3002"),(0,l.kt)("h3",{id:"thumb_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumb_color")),(0,l.kt)("p",null,"\u6b64\u5f00\u5173\u62c7\u6307\u7684",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u3002"),(0,l.kt)("p",null,"\u5728\u4ee5\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"MaterialState"),"\u72b6\u6001\u4e0b\u89e3\u51b3:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SELECTED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HOVERED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FOCUSED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DISABLED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DEFAULT")," - \u540e\u5907\u72b6\u6001\uff0c\u610f\u601d\u662f\u201c\u6240\u6709\u5176\u4ed6\u72b6\u6001\u201d\u3002")),(0,l.kt)("p",null,"\u4e3a\u6240\u6709\u6750\u6599\u72b6\u6001\u914d\u7f6e\u62c7\u6307\u989c\u8272\uff0c\u4f8b\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"sw.thumb_color=ft.colors.GREEN\n")),(0,l.kt)("p",null,"\u4e3a\u7279\u5b9a\u6750\u6599\u72b6\u6001\u914d\u7f6e\u62c7\u6307\u989c\u8272\uff0c\u5c06\u5176\u503c\u8bbe\u7f6e\u4e3a\u952e\u662f\u72b6\u6001\u540d\u79f0\u7684\u5b57\u5178\u3002 \u4f8b\u5982\uff0c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"HOVERED"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"FOCUSED"),"\u72b6\u6001\u914d\u7f6e\u4e0d\u540c\u7684\u586b\u5145\u989c\u8272\uff0c\u4ee5\u53ca\u6240\u6709\u5176\u4ed6\u72b6\u6001\u7684\u53e6\u4e00\u79cd\u989c\u8272:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"sw.thumb_color={\n    ft.MaterialState.HOVERED: ft.colors.GREEN,\n    ft.MaterialState.FOCUSED: ft.colors.RED,\n    ft.MaterialState.DEFAULT: ft.colors.BLACK,\n}\n")),(0,l.kt)("h3",{id:"track_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"track_color")),(0,l.kt)("p",null,"\u6b64\u5f00\u5173\u8f68\u9053\u7684",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u3002"),(0,l.kt)("p",null,"\u5728\u4ee5\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"MaterialState"),"\u72b6\u6001\u4e0b\u89e3\u51b3:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SELECTED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HOVERED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FOCUSED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DISABLED")),(0,l.kt)("li",{parentName:"ul"},"{",(0,l.kt)("inlineCode",{parentName:"li"},"DEFAULT")," - \u540e\u5907\u72b6\u6001\uff0c\u610f\u601d\u662f\u201c\u6240\u6709\u5176\u4ed6\u72b6\u6001\u201d\u3002")),(0,l.kt)("h3",{id:"value"},(0,l.kt)("inlineCode",{parentName:"h3"},"value")),(0,l.kt)("p",null,"\u5f00\u5173\u7684\u5f53\u524d\u503c\u3002"),(0,l.kt)("h2",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,l.kt)("h3",{id:"on_blur"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_blur")),(0,l.kt)("p",null,"\u5f53\u63a7\u4ef6\u5931\u53bb\u7126\u70b9\u65f6\u53d1\u5c04\u3002"),(0,l.kt)("h3",{id:"on_change"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_change")),(0,l.kt)("p",null,"\u5f53\u66f4\u6539\u5f00\u5173\u72b6\u6001\u65f6\u4f1a\u53d1\u5c04\u3002"),(0,l.kt)("h3",{id:"on_focus"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_focus")),(0,l.kt)("p",null,"\u5f53\u63a7\u4ef6\u83b7\u5f97\u7126\u70b9\u65f6\u53d1\u5c04\u3002"))}h.isMDXComponent=!0}}]);