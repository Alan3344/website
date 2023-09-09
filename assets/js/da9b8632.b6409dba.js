"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[5121],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),u=n(1980),c=n(7392),s=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function v(e){var t,n,r,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,d=p(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),h=v[0],b=v[1],g=m({queryString:u,groupId:c}),k=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],C=w[1],E=function(){var e=null!=k?k:N;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),C(e)}),[y,C,d]),tabValues:d}}var h=n(2389),b="tabList__CuJ",g="tabItem_LNqP";function k(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==i&&(d(t),u(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var o,l=s.indexOf(e.currentTarget)-1;n=null!=(o=s[l])?o:s[s.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},l,{className:(0,o.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},4585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(4866),i=n(5162),u=["components"],c={title:"Card",sidebar_label:"Card",slug:"card"},s=void 0,d={unversionedId:"controls/card",id:"controls/card",title:"Card",description:"a material design \u5361\u7247: \u4e00\u4e2a\u9762\u677f\u7565\u5fae\u5706\u89d2\u548c\u9ad8\u7a0b\u9634\u5f71\u3002",source:"@site/docs/controls/card.md",sourceDirName:"controls",slug:"/controls/card",permalink:"/website/docs/controls/card",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/card.md",tags:[],version:"current",frontMatter:{title:"Card",sidebar_label:"Card",slug:"card"},sidebar:"docs",previous:{title:"Tabs",permalink:"/website/docs/controls/tabs"},next:{title:"Divider",permalink:"/website/docs/controls/divider"}},p={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"properties",id:"properties",level:2},{value:"<code>color</code>",id:"color",level:3},{value:"<code>content</code>",id:"content",level:3},{value:"<code>elevation</code>",id:"elevation",level:3},{value:"<code>margin</code>",id:"margin",level:3},{value:"<code>shadow_color</code>",id:"shadow_color",level:3},{value:"<code>surface_tint_color</code>",id:"surface_tint_color",level:3}],m={toc:f};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"a material design \u5361\u7247: \u4e00\u4e2a\u9762\u677f\u7565\u5fae\u5706\u89d2\u548c\u9ad8\u7a0b\u9634\u5f71\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/layout/card"},"LIVE \u793a\u4f8b")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page):\n    page.title = "Card Example"\n    page.add(\n        ft.Card(\n            content=ft.Container(\n                content=ft.Column(\n                    [\n                        ft.ListTile(\n                            leading=ft.Icon(ft.icons.ALBUM),\n                            title=ft.Text("The Enchanted Nightingale"),\n                            subtitle=ft.Text(\n                                "Music by Julie Gable. Lyrics by Sidney Stein."\n                            ),\n                        ),\n                        ft.Row(\n                            [ft.TextButton("Buy tickets"), ft.TextButton("Listen")],\n                            alignment=ft.MainAxisAlignment.END,\n                        ),\n                    ]\n                ),\n                width=400,\n                padding=10,\n            )\n        )\n    )\n\nft.app(target=main)\n\n')))),(0,o.kt)("img",{src:"/website/img/docs/controls/card/card.gif",className:"screenshot-40"}),(0,o.kt)("h2",{id:"properties"},"properties"),(0,o.kt)("h3",{id:"color"},(0,o.kt)("inlineCode",{parentName:"h3"},"color")),(0,o.kt)("p",null,"\u5361\u7247\u7684\u80cc\u666f",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u3002"),(0,o.kt)("h3",{id:"content"},(0,o.kt)("inlineCode",{parentName:"h3"},"content")),(0,o.kt)("p",null,"\u5e94\u5728\u5361\u7247\u4e2d\u663e\u793a\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Control"),"\u3002"),(0,o.kt)("p",null,"\u6b64\u63a7\u4ef6\u53ea\u80fd\u6709\u4e00\u4e2a child\u3002 \u8981\u5e03\u7f6e\u591a\u4e2a children\uff0c\u8ba9\u6b64\u63a7\u4ef6\u7684 child \u4e3a",(0,o.kt)("a",{parentName:"p",href:"row"},"{",(0,o.kt)("inlineCode",{parentName:"a"},"Row")),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"column"},(0,o.kt)("inlineCode",{parentName:"a"},"Column")),"\u6216","[",(0,o.kt)("inlineCode",{parentName:"p"},"Stack"),"]"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Stack"),"](stack) children \u5c5e\u6027\uff0c\u7136\u540e\u5411\u8be5\u63a7\u4ef6\u63d0\u4f9b children\u3002"),(0,o.kt)("h3",{id:"elevation"},(0,o.kt)("inlineCode",{parentName:"h3"},"elevation")),(0,o.kt)("p",null,"\u63a7\u5236\u5361\u7247\u4e0b\u9634\u5f71\u7684\u5927\u5c0f\u3002 \u9ed8\u8ba4\u503c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"1.0"),"\u3002"),(0,o.kt)("h3",{id:"margin"},(0,o.kt)("inlineCode",{parentName:"h3"},"margin")),(0,o.kt)("p",null,"\u56f4\u7ed5\u5361\u7247\u7684\u7a7a\u767d\u7a7a\u95f4\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\u548c\u53ef\u80fd\u7684\u503c\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"container#margin"},(0,o.kt)("inlineCode",{parentName:"a"},"Container.margin")),"\u5c5e\u6027\u3002"),(0,o.kt)("h3",{id:"shadow_color"},(0,o.kt)("inlineCode",{parentName:"h3"},"shadow_color")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u5c06\u9634\u5f71\u7ed8\u5236\u5728\u5361\u7247\u4e0b\u7684\u9634\u5f71\u3002"),(0,o.kt)("h3",{id:"surface_tint_color"},(0,o.kt)("inlineCode",{parentName:"h3"},"surface_tint_color")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u7528\u4f5c",(0,o.kt)("inlineCode",{parentName:"p"},"color"),"\u4e0a\u7684\u8986\u76d6\u5c42\uff0c\u4ee5\u8868\u793a\u9ad8\u7a0b\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u8fd9\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"\uff0c\u5219\u4e0d\u4f1a\u5e94\u7528\u8986\u76d6\u5c42\u3002 \u5426\u5219\uff0c\u8be5\u989c\u8272\u5c06\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"color"),"\u9876\u90e8\u4e0e\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"elevation"),"\u76f8\u5173\u7684\u4e0d\u900f\u660e\u5ea6\u5408\u6210\uff0c\u5e76\u7528\u4e8e\u7ed8\u5236\u5361\u7247\u7684\u80cc\u666f\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u503c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"\u3002"))}v.isMDXComponent=!0}}]);