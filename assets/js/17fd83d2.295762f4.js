"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[2783],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7294),a=t(6010),o="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return N}});var r=t(7462),a=t(7294),o=t(6010),l=t(2466),i=t(6550),u=t(1980),c=t(7392),s=t(12);function d(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:d(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,i.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(o.location.search);n.set(l,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[l,o])]}function h(e){var n,t,r,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,d=p(e),h=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),b=h[0],v=h[1],g=m({queryString:u,groupId:c}),k=g[0],y=g[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),N=w[0],T=w[1],_=function(){var e=null!=k?k:N;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){_&&v(_)}),[_]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),T(e)}),[y,T,d]),tabValues:d}}var b=t(2389),v="tabList__CuJ",g="tabItem_LNqP";function k(e){var n=e.className,t=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,t=s.indexOf(n),r=c[t].value;r!==i&&(d(n),u(r))},f=function(e){var n,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var o,l=s.indexOf(e.currentTarget)-1;t=null!=(o=s[l])?o:s[s.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},l,{className:(0,o.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function y(e){var n=e.lazy,t=e.children,r=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=o.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function w(e){var n=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(k,(0,r.Z)({},e,n)),a.createElement(y,(0,r.Z)({},e,n)))}function N(e){var n=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},4593:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(4866),i=t(5162),u=["components"],c={title:"Banner",sidebar_label:"Banner",slug:"banner"},s=void 0,d={unversionedId:"controls/banner",id:"controls/banner",title:"Banner",description:"A banner displays an important, succinct message, and provides actions for users to address (or dismiss the banner). A user action is required for it to be dismissed.",source:"@site/docs/controls/banner.md",sourceDirName:"controls",slug:"/controls/banner",permalink:"/docs/controls/banner",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/banner.md",tags:[],version:"current",frontMatter:{title:"Banner",sidebar_label:"Banner",slug:"banner"},sidebar:"docs",previous:{title:"AlertDialog",permalink:"/docs/controls/alertdialog"},next:{title:"BottomSheet",permalink:"/docs/controls/bottomsheet"}},p={},f=[{value:"Examples",id:"examples",level:2},{value:"Banner with leading icon and actions",id:"banner-with-leading-icon-and-actions",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>actions</code>",id:"actions",level:3},{value:"<code>bgcolor</code>",id:"bgcolor",level:3},{value:"<code>content</code>",id:"content",level:3},{value:"<code>content_padding</code>",id:"content_padding",level:3},{value:"<code>force_actions_below</code>",id:"force_actions_below",level:3},{value:"<code>leading</code>",id:"leading",level:3},{value:"<code>leading_padding</code>",id:"leading_padding",level:3},{value:"<code>open</code>",id:"open",level:3}],m={toc:f};function h(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A banner displays an important, succinct message, and provides actions for users to address (or dismiss the banner). A user action is required for it to be dismissed."),(0,o.kt)("p",null,"Banners are displayed at the top of the screen, below a top app bar. They are persistent and non-modal, allowing the user to either ignore them or interact with them at any time."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/dialogs/banner"},"Live example")),(0,o.kt)("h3",{id:"banner-with-leading-icon-and-actions"},"Banner with leading icon and actions"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page):\n    def close_banner(e):\n        page.banner.open = False\n        page.update()\n\n    page.banner = ft.Banner(\n        bgcolor=ft.colors.AMBER_100,\n        leading=ft.Icon(ft.icons.WARNING_AMBER_ROUNDED, color=ft.colors.AMBER, size=40),\n        content=ft.Text(\n            "Oops, there were some errors while trying to delete the file. What would you like me to do?"\n        ),\n        actions=[\n            ft.TextButton("Retry", on_click=close_banner),\n            ft.TextButton("Ignore", on_click=close_banner),\n            ft.TextButton("Cancel", on_click=close_banner),\n        ],\n    )\n\n    def show_banner_click(e):\n        page.banner.open = True\n        page.update()\n\n    page.add(ft.ElevatedButton("Show Banner", on_click=show_banner_click))\n\nft.app(target=main)\n')))),(0,o.kt)("img",{src:"/img/docs/controls/banner/banner-with-custom-content.gif",className:"screenshot-40"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"actions"},(0,o.kt)("inlineCode",{parentName:"h3"},"actions")),(0,o.kt)("p",null,"The set of actions that are displayed at the bottom or trailing side of the Banner."),(0,o.kt)("p",null,"Typically this is a list of ",(0,o.kt)("a",{parentName:"p",href:"textbutton"},(0,o.kt)("inlineCode",{parentName:"a"},"TextButton"))," controls."),(0,o.kt)("h3",{id:"bgcolor"},(0,o.kt)("inlineCode",{parentName:"h3"},"bgcolor")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"color")," of the surface of this Banner."),(0,o.kt)("h3",{id:"content"},(0,o.kt)("inlineCode",{parentName:"h3"},"content")),(0,o.kt)("p",null,"The content of the Banner. Typically a ",(0,o.kt)("a",{parentName:"p",href:"text"},(0,o.kt)("inlineCode",{parentName:"a"},"Text"))," control."),(0,o.kt)("h3",{id:"content_padding"},(0,o.kt)("inlineCode",{parentName:"h3"},"content_padding")),(0,o.kt)("p",null,"The amount of space by which to inset the content."),(0,o.kt)("p",null,"If the actions are below the content, this defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"padding.only(left=16.0, top=24.0, right=16.0, bottom=4.0)"),"."),(0,o.kt)("p",null,"If the actions are trailing the content, this defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"padding.only(left=16.0, top=2.0)"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"container#padding"},(0,o.kt)("inlineCode",{parentName:"a"},"Container.padding"))," for more information about padding and possible values."),(0,o.kt)("h3",{id:"force_actions_below"},(0,o.kt)("inlineCode",{parentName:"h3"},"force_actions_below")),(0,o.kt)("p",null,"An override to force the actions to be below the content regardless of how many there are."),(0,o.kt)("p",null,"If this is ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),", the actions will be placed below the content. If this is ",(0,o.kt)("inlineCode",{parentName:"p"},"False"),", the actions will be placed on the trailing side of the content if actions's length is 1 and below the content if greater than 1."),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,o.kt)("h3",{id:"leading"},(0,o.kt)("inlineCode",{parentName:"h3"},"leading")),(0,o.kt)("p",null,"The (optional) leading ",(0,o.kt)("inlineCode",{parentName:"p"},"Control")," of the Banner."),(0,o.kt)("p",null,"Typically an ",(0,o.kt)("a",{parentName:"p",href:"icon"},(0,o.kt)("inlineCode",{parentName:"a"},"Icon"))," control."),(0,o.kt)("h3",{id:"leading_padding"},(0,o.kt)("inlineCode",{parentName:"h3"},"leading_padding")),(0,o.kt)("p",null,"The amount of space by which to inset the leading control. This defaults to 16 virtual pixels. See ",(0,o.kt)("a",{parentName:"p",href:"container#padding"},(0,o.kt)("inlineCode",{parentName:"a"},"Container.padding"))," for more information about padding and possible values."),(0,o.kt)("h3",{id:"open"},(0,o.kt)("inlineCode",{parentName:"h3"},"open")),(0,o.kt)("p",null,"Set to ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," to display a banner."))}h.isMDXComponent=!0}}]);