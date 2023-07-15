"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[3300],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||r;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),o=n(6010),r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(7462),o=n(7294),r=n(6010),l=n(2466),i=n(6550),u=n(1980),c=n(7392),s=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(l),(0,o.useCallback)((function(e){if(l){var t=new URLSearchParams(r.location.search);t.set(l,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[l,r])]}function g(e){var t,n,a,r,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,d=p(e),g=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:l,tabValues:d})})),h=g[0],b=g[1],v=m({queryString:u,groupId:c}),k=v[0],y=v[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),w=N[0],T=N[1],C=function(){var e=null!=k?k:w;return f({value:e,tabValues:d})?e:null}();return(0,o.useLayoutEffect)((function(){C&&b(C)}),[C]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),T(e)}),[y,T,d]),tabValues:d}}var h=n(2389),b="tabList__CuJ",v="tabItem_LNqP";function k(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=s.indexOf(t),a=c[n].value;a!==i&&(d(t),u(a))},f=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,o=s.indexOf(e.currentTarget)+1;n=null!=(a=s[o])?a:s[0];break;case"ArrowLeft":var r,l=s.indexOf(e.currentTarget)-1;n=null!=(r=s[l])?r:s[s.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},l,{className:(0,r.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=r.find((function(e){return e.props.value===a}));return l?(0,o.cloneElement)(l,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b)},o.createElement(k,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,h.Z)();return o.createElement(N,(0,a.Z)({key:String(t)},e))}},7092:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=n(4866),i=n(5162),u=["components"],c={title:"FloatingActionButton",sidebar_label:"FloatingActionButton",slug:"floatingactionbutton"},s=void 0,d={unversionedId:"controls/floatingactionbutton",id:"controls/floatingactionbutton",title:"FloatingActionButton",description:"A material design floating action button. A floating action button is a circular icon button that hovers over content to promote a primary action in the application.",source:"@site/docs/controls/floatingactionbutton.md",sourceDirName:"controls",slug:"/controls/floatingactionbutton",permalink:"/docs/controls/floatingactionbutton",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/floatingactionbutton.md",tags:[],version:"current",frontMatter:{title:"FloatingActionButton",sidebar_label:"FloatingActionButton",slug:"floatingactionbutton"},sidebar:"docs",previous:{title:"FilledTonalButton",permalink:"/docs/controls/filledtonalbutton"},next:{title:"IconButton",permalink:"/docs/controls/iconbutton"}},p={},f=[{value:"Examples",id:"examples",level:2},{value:"Basic FAB",id:"basic-fab",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>autofocus</code>",id:"autofocus",level:3},{value:"<code>bgcolor</code>",id:"bgcolor",level:3},{value:"<code>content</code>",id:"content",level:3},{value:"<code>icon</code>",id:"icon",level:3},{value:"<code>mini</code>",id:"mini",level:3},{value:"<code>shape</code>",id:"shape",level:3},{value:"<code>text</code>",id:"text",level:3},{value:"<code>tooltip</code>",id:"tooltip",level:3},{value:"<code>url</code>",id:"url",level:3},{value:"<code>url_target</code>",id:"url_target",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_click</code>",id:"on_click",level:3}],m={toc:f};function g(e){var t=e.components,n=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A material design floating action button. A floating action button is a circular icon button that hovers over content to promote a primary action in the application.\nFloating action button is usually set to ",(0,r.kt)("inlineCode",{parentName:"p"},"page.floating_action_button"),", but can also be added as a regular control at any place on a page."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/buttons/floatingactionbutton"},"Live example")),(0,r.kt)("h3",{id:"basic-fab"},"Basic FAB"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Floating Action Button"\n    page.theme_mode = ft.ThemeMode.LIGHT\n    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER\n    page.auto_scroll = True\n    page.scroll = ft.ScrollMode.HIDDEN\n    page.appbar = ft.AppBar(\n        title=ft.Text(\n            "Floating Action Button", weight=ft.FontWeight.BOLD, color=ft.colors.BLACK87\n        ),\n        bgcolor=ft.colors.BLUE,\n        center_title=True,\n        actions=[\n            ft.IconButton(ft.icons.MENU, tooltip="Menu", icon_color=ft.colors.BLACK87)\n        ],\n        color=ft.colors.WHITE,\n    )\n\n    # keeps track of the number of tiles already added\n    page.count = 0\n\n    def fab_pressed(e):\n        page.add(ft.ListTile(title=ft.Text(f"Tile {page.count}")))\n        page.show_snack_bar(\n            ft.SnackBar(ft.Text("Tile was added successfully!"), open=True)\n        )\n        page.count += 1\n\n    page.floating_action_button = ft.FloatingActionButton(\n        icon=ft.icons.ADD, on_click=fab_pressed, bgcolor=ft.colors.LIME_300\n    )\n    page.add(ft.Text("Press the FAB to add a tile!"))\n\nft.app(target=main)\n')))),(0,r.kt)("img",{src:"/img/docs/controls/floatingactionbutton/custom-fab.gif"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"autofocus"},(0,r.kt)("inlineCode",{parentName:"h3"},"autofocus")),(0,r.kt)("p",null,"True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus."),(0,r.kt)("h3",{id:"bgcolor"},(0,r.kt)("inlineCode",{parentName:"h3"},"bgcolor")),(0,r.kt)("p",null,"Button background ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"color"),"."),(0,r.kt)("h3",{id:"content"},(0,r.kt)("inlineCode",{parentName:"h3"},"content")),(0,r.kt)("p",null,"A Control representing custom button content."),(0,r.kt)("h3",{id:"icon"},(0,r.kt)("inlineCode",{parentName:"h3"},"icon")),(0,r.kt)("p",null,"Icon shown in the button."),(0,r.kt)("h3",{id:"mini"},(0,r.kt)("inlineCode",{parentName:"h3"},"mini")),(0,r.kt)("p",null,"Controls the size of this button."),(0,r.kt)("p",null,"By default, floating action buttons are non-mini and have a height and width of 56.0 logical pixels. Mini floating action buttons have a height and width of 40.0 logical pixels with a layout width and height of 48.0 logical pixels."),(0,r.kt)("h3",{id:"shape"},(0,r.kt)("inlineCode",{parentName:"h3"},"shape")),(0,r.kt)("p",null,"The shape of the FAB's border."),(0,r.kt)("p",null,"The value is an instance of one of the following implementations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StadiumBorder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RoundedRectangleBorder"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"radius")," - border radius, an instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"BorderRadius")," class or a number."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CircleBorder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BeveledRectangleBorder"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"radius")," - border radius, an instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"BorderRadius")," class or a number."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CountinuosRectangleBorder"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"radius")," - border radius, an instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"BorderRadius")," class or a number.")))),(0,r.kt)("p",null,"An example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"shape")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n\n    page.floating_action_button = ft.FloatingActionButton(\n        content=ft.Row(\n            [ft.Icon(ft.icons.ADD), ft.Text("Add")], alignment="center", spacing=5\n        ),\n        bgcolor=ft.colors.AMBER_300,\n        shape=ft.RoundedRectangleBorder(radius=5),\n        width=100,\n        mini=True,\n    )\n\n    page.add(ft.Text("Just a text!"))\n\nft.app(target=main)\n')),(0,r.kt)("img",{src:"/img/docs/controls/floatingactionbutton/fab-with-custom-shape.png",className:"screenshot-20"}),(0,r.kt)("h3",{id:"text"},(0,r.kt)("inlineCode",{parentName:"h3"},"text")),(0,r.kt)("p",null,"The text displayed on a button."),(0,r.kt)("h3",{id:"tooltip"},(0,r.kt)("inlineCode",{parentName:"h3"},"tooltip")),(0,r.kt)("p",null,"The text displayed when hovering the mouse over the button."),(0,r.kt)("h3",{id:"url"},(0,r.kt)("inlineCode",{parentName:"h3"},"url")),(0,r.kt)("p",null,"The URL to open when the button is clicked. If registered, ",(0,r.kt)("inlineCode",{parentName:"p"},"on_click")," event is fired after that."),(0,r.kt)("h3",{id:"url_target"},(0,r.kt)("inlineCode",{parentName:"h3"},"url_target")),(0,r.kt)("p",null,"Where to open URL in the web mode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_blank")," (default) - new tab/window."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_self")," - the current tab/window.")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"on_click"},(0,r.kt)("inlineCode",{parentName:"h3"},"on_click")),(0,r.kt)("p",null,"Fires when a user clicks the button."))}g.isMDXComponent=!0}}]);