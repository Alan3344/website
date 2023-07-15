"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[745],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||l;return n?o.createElement(h,a(a({ref:t},s),{},{components:n})):o.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(7294),r=n(6010),l="tabItem_Ymn6";function a(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,a),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var o=n(7462),r=n(7294),l=n(6010),a=n(2466),i=n(6550),c=n(1980),u=n(7392),s=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,l=(0,i.k6)(),a=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:o});return[(0,c._X)(a),(0,r.useCallback)((function(e){if(a){var t=new URLSearchParams(l.location.search);t.set(a,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[a,l])]}function m(e){var t,n,o,l,a=e.defaultValue,i=e.queryString,c=void 0!==i&&i,u=e.groupId,d=p(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:d})})),v=m[0],b=m[1],k=h({queryString:c,groupId:u}),g=k[0],y=k[1],_=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,s.Nk)(t),o=n[0],l=n[1],[o,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=_[0],N=_[1],E=function(){var e=null!=g?g:w;return f({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),N(e)}),[y,N,d]),tabValues:d}}var v=n(2389),b="tabList__CuJ",k="tabItem_LNqP";function g(e){var t=e.className,n=e.block,i=e.selectedValue,c=e.selectValue,u=e.tabValues,s=[],d=(0,a.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=s.indexOf(t),o=u[n].value;o!==i&&(d(t),c(o))},f=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var o,r=s.indexOf(e.currentTarget)+1;n=null!=(o=s[r])?o:s[0];break;case"ArrowLeft":var l,a=s.indexOf(e.currentTarget)-1;n=null!=(l=s[a])?l:s[s.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},a,{className:(0,l.Z)("tabs__item",k,null==a?void 0:a.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,o=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var a=l.find((function(e){return e.props.value===o}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})})))}function _(e){var t=m(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(g,(0,o.Z)({},e,t)),r.createElement(y,(0,o.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return r.createElement(_,(0,o.Z)({key:String(t)},e))}},9808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),a=n(4866),i=n(5162),c=["components"],u={title:"IconButton",sidebar_label:"IconButton",slug:"iconbutton"},s=void 0,d={unversionedId:"controls/iconbutton",id:"controls/iconbutton",title:"IconButton",description:"An icon button is a round button with an icon in the middle that reacts to touches by filling with color (ink).",source:"@site/docs/controls/iconbutton.md",sourceDirName:"controls",slug:"/controls/iconbutton",permalink:"/docs/controls/iconbutton",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/iconbutton.md",tags:[],version:"current",frontMatter:{title:"IconButton",sidebar_label:"IconButton",slug:"iconbutton"},sidebar:"docs",previous:{title:"FloatingActionButton",permalink:"/docs/controls/floatingactionbutton"},next:{title:"OutlinedButton",permalink:"/docs/controls/outlinedbutton"}},p={},f=[{value:"Examples",id:"examples",level:2},{value:"Icon buttons",id:"icon-buttons",level:3},{value:"Icon button with <code>click</code> event",id:"icon-button-with-click-event",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>autofocus</code>",id:"autofocus",level:3},{value:"<code>content</code>",id:"content",level:3},{value:"<code>icon</code>",id:"icon",level:3},{value:"<code>icon_color</code>",id:"icon_color",level:3},{value:"<code>icon_size</code>",id:"icon_size",level:3},{value:"<code>selected</code>",id:"selected",level:3},{value:"<code>selected_icon</code>",id:"selected_icon",level:3},{value:"<code>selected_icon_color</code>",id:"selected_icon_color",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"<code>tooltip</code>",id:"tooltip",level:3},{value:"<code>url</code>",id:"url",level:3},{value:"<code>url_target</code>",id:"url_target",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>focus()</code>",id:"focus",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_blur</code>",id:"on_blur",level:3},{value:"<code>on_click</code>",id:"on_click",level:3},{value:"<code>on_focus</code>",id:"on_focus",level:3}],h={toc:f};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An icon button is a round button with an icon in the middle that reacts to touches by filling with color (ink)."),(0,l.kt)("p",null,"Icon buttons are commonly used in the toolbars, but they can be used in many other places as well."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/buttons/iconbutton"},"Live example")),(0,l.kt)("h3",{id:"icon-buttons"},"Icon buttons"),(0,l.kt)(a.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\n\ndef main(page: ft.Page):\n    page.title = "Icon buttons"\n    page.add(\n        ft.Row(\n            [\n                ft.IconButton(\n                    icon=ft.icons.PAUSE_CIRCLE_FILLED_ROUNDED,\n                    icon_color="blue400",\n                    icon_size=20,\n                    tooltip="Pause record",\n                ),\n                ft.IconButton(\n                    icon=ft.icons.DELETE_FOREVER_ROUNDED,\n                    icon_color="pink600",\n                    icon_size=40,\n                    tooltip="Delete record",\n                ),\n            ]\n        ),\n    )\n\n\nft.app(target=main)\n')))),(0,l.kt)("img",{src:"/img/docs/controls/icon-button/icon-buttons.gif",className:"screenshot-50"}),(0,l.kt)("h3",{id:"icon-button-with-click-event"},"Icon button with ",(0,l.kt)("inlineCode",{parentName:"h3"},"click")," event"),(0,l.kt)(a.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\n\ndef main(page: ft.Page):\n    page.title = "Icon button with \'click\' event"\n\n    def button_clicked(e):\n        b.data += 1\n        t.value = f"Button clicked {b.data} time(s)"\n        page.update()\n\n    b = ft.IconButton(\n        icon=ft.icons.PLAY_CIRCLE_FILL_OUTLINED, on_click=button_clicked, data=0\n    )\n    t = ft.Text()\n\n    page.add(b, t)\n\nft.app(target=main)\n')))),(0,l.kt)("img",{src:"/img/docs/controls/icon-button/icon-button-with-click-event.gif",className:"screenshot-50"}),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"autofocus"},(0,l.kt)("inlineCode",{parentName:"h3"},"autofocus")),(0,l.kt)("p",null,"True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus."),(0,l.kt)("h3",{id:"content"},(0,l.kt)("inlineCode",{parentName:"h3"},"content")),(0,l.kt)("p",null,"A Control representing custom button content."),(0,l.kt)("h3",{id:"icon"},(0,l.kt)("inlineCode",{parentName:"h3"},"icon")),(0,l.kt)("p",null,"Icon shown in the button."),(0,l.kt)("h3",{id:"icon_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"icon_color")),(0,l.kt)("p",null,"Icon ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"color"),"."),(0,l.kt)("h3",{id:"icon_size"},(0,l.kt)("inlineCode",{parentName:"h3"},"icon_size")),(0,l.kt)("p",null,"Icon size in virtual pixels."),(0,l.kt)("h3",{id:"selected"},(0,l.kt)("inlineCode",{parentName:"h3"},"selected")),(0,l.kt)("p",null,"Turns icon button to a toggle button: ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," - the button is in selected state, ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," - in normal."),(0,l.kt)("h3",{id:"selected_icon"},(0,l.kt)("inlineCode",{parentName:"h3"},"selected_icon")),(0,l.kt)("p",null,"Icon shown in the button in selected state."),(0,l.kt)("h3",{id:"selected_icon_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"selected_icon_color")),(0,l.kt)("p",null,"Icon ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"color")," for the selected state."),(0,l.kt)("p",null,"En example of icon toggle button:"),(0,l.kt)("img",{src:"/img/blog/gradients/toggle-icon-button.gif",className:"screenshot-10"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n\n    def toggle_icon_button(e):\n        e.control.selected = not e.control.selected\n        e.control.update()\n\n    page.add(\n        ft.IconButton(\n            icon=ft.icons.BATTERY_1_BAR,\n            selected_icon=ft.icons.BATTERY_FULL,\n            on_click=toggle_icon_button,\n            selected=False,\n            style=ft.ButtonStyle(color={"selected": ft.colors.GREEN, "": ft.colors.RED}),\n        )\n    )\n\nft.app(target=main)\n')),(0,l.kt)("h3",{id:"style"},(0,l.kt)("inlineCode",{parentName:"h3"},"style")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/controls/elevatedbutton#style"},"ElevatedButton.style")," for more information about this property."),(0,l.kt)("h3",{id:"tooltip"},(0,l.kt)("inlineCode",{parentName:"h3"},"tooltip")),(0,l.kt)("p",null,"The text displayed when hovering the mouse over the button."),(0,l.kt)("h3",{id:"url"},(0,l.kt)("inlineCode",{parentName:"h3"},"url")),(0,l.kt)("p",null,"The URL to open when the button is clicked. If registered, ",(0,l.kt)("inlineCode",{parentName:"p"},"on_click")," event is fired after that."),(0,l.kt)("h3",{id:"url_target"},(0,l.kt)("inlineCode",{parentName:"h3"},"url_target")),(0,l.kt)("p",null,"Where to open URL in the web mode:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_blank")," (default) - new tab/window."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_self")," - the current tab/window.")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"focus"},(0,l.kt)("inlineCode",{parentName:"h3"},"focus()")),(0,l.kt)("p",null,"Moves focus to a button."),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"on_blur"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_blur")),(0,l.kt)("p",null,"Fires when the control has lost focus."),(0,l.kt)("h3",{id:"on_click"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_click")),(0,l.kt)("p",null,"Fires when a user clicks the button."),(0,l.kt)("h3",{id:"on_focus"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_focus")),(0,l.kt)("p",null,"Fires when the control has received focus."))}m.isMDXComponent=!0}}]);