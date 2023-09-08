"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[8660],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),a=t(6010),l="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(7462),a=t(7294),l=t(6010),o=t(2466),i=t(6550),u=t(1980),s=t(7392),p=t(12);function c(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:c(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,l=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[o,l])]}function v(e){var n,t,r,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,c=d(e),v=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:c})})),k=v[0],g=v[1],b=f({queryString:u,groupId:s}),N=b[0],h=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,p.Nk)(n),r=t[0],l=t[1],[r,(0,a.useCallback)((function(e){n&&l.set(e)}),[n,l])]),y=w[0],C=w[1],T=function(){var e=null!=N?N:y;return m({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:k,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);g(e),h(e),C(e)}),[h,C,c]),tabValues:c}}var k=t(2389),g="tabList__CuJ",b="tabItem_LNqP";function N(e){var n=e.className,t=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,p=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=p.indexOf(n),r=s[t].value;r!==i&&(c(n),u(r))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=p.indexOf(e.currentTarget)+1;t=null!=(r=p[a])?r:p[0];break;case"ArrowLeft":var l,o=p.indexOf(e.currentTarget)-1;t=null!=(l=p[o])?l:p[p.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return p.push(e)},onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function h(e){var n=e.lazy,t=e.children,r=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=l.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function w(e){var n=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(N,(0,r.Z)({},e,n)),a.createElement(h,(0,r.Z)({},e,n)))}function y(e){var n=(0,k.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},4669:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=t(4866),i=t(5162),u=["components"],s={title:"ResponsiveRow",sidebar_label:"ResponsiveRow",slug:"responsiverow"},p=void 0,c={unversionedId:"controls/responsiverow",id:"controls/responsiverow",title:"ResponsiveRow",description:"ResponsiveRow\u4eceBootstrap Web Framework \u501f\u7528\u7f51\u683c\u5e03\u5c40\u7684\u60f3\u6cd5\u3002",source:"@site/docs/controls/responsiverow.md",sourceDirName:"controls",slug:"/controls/responsiverow",permalink:"/website/docs/controls/responsiverow",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/responsiverow.md",tags:[],version:"current",frontMatter:{title:"ResponsiveRow",sidebar_label:"ResponsiveRow",slug:"responsiverow"},sidebar:"docs",previous:{title:"GridView",permalink:"/website/docs/controls/gridview"},next:{title:"DataTable",permalink:"/website/docs/controls/datatable"}},d={},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"pownlowsiverow",id:"pownlowsiverow",level:3},{value:"properties",id:"properties",level:2},{value:"<code>alignment</code>",id:"alignment",level:3},{value:"<code>columns</code>",id:"columns",level:3},{value:"<code>controls</code>",id:"controls",level:3},{value:"<code>run_spacing</code>",id:"run_spacing",level:3},{value:"<code>spacing</code>",id:"spacing",level:3},{value:"<code>vertical_alignment</code>\u65f6\uff0c\u4ec5\u5e94\u7528\u95f4\u8ddd\u3002",id:"vertical_alignment\u65f6\u4ec5\u5e94\u7528\u95f4\u8ddd",level:3}],f={toc:m};function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ResponsiveRow"),"\u4ece",(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/layout/grid/"},"Bootstrap")," Web Framework \u501f\u7528\u7f51\u683c\u5e03\u5c40\u7684\u60f3\u6cd5\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ResponsiveRow"),"\u5141\u8bb8\u5bf9\u9f50 child \u63a7\u4ef6\u4e0e\u865a\u62df\u5217\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u865a\u62df\u7f51\u683c\u5177\u6709 12 \u5217\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"ResponsiveRow.columns"),"\u5c5e\u6027\u6765\u81ea\u5b9a\u4e49\u3002"),(0,l.kt)("p",null,"\u7c7b\u4f3c\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"expand"),"\u5c5e\u6027\uff0c\u6bcf\u4e2a\u63a7\u4ef6\u73b0\u5728\u90fd\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"col"),"\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u5141\u8bb8\u6307\u5b9a\u63a7\u4ef6\u5e94\u8de8\u5ea6\u591a\u5c11\u5217\u3002 \u4f8b\u5982\uff0c\u8981\u5236\u4f5c\u4e00\u4e2a\u7531\u4e24\u4e2a\u8de8\u8d8a 6 \u4e2a\u865a\u62df\u5217\u7ec4\u6210\u7684\u5e03\u5c40:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\nft.ResponsiveRow([\n    ft.Column(col=6, controls=[ft.Text("Column 1")]),\n    ft.Column(col=6, controls=[ft.Text("Column 2")])\n])\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ResponsiveRow"),"\u662f\u201c\u54cd\u5e94\u5f0f\u201d\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u5c06\u5176 children \u7684\u5927\u5c0f\u8c03\u6574\u5230\u66f4\u6539\u7684\u5c4f\u5e55\uff08\u9875\u9762\uff0c\u7a97\u53e3\uff09\u5927\u5c0f\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"col"),"\u5c5e\u6027\u4e0a\u9762\u7684\u5c5e\u6027\u662f\u4e00\u4e2a\u5e38\u6570\u6570\u5b57\uff0c\u8fd9\u610f\u5473\u7740 child \u5c06\u8de8\u8d8a\u4efb\u4f55\u5c4f\u5e55\u5927\u5c0f\u7684 6 \u5217\u3002"),(0,l.kt)("p",null,"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"ResponsiveRow"),"'s child \u6ca1\u6709\u6307\u5b9a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"col"),"\u5c5e\u6027\uff0c\u5219\u8986\u76d6\u6700\u5927\u5217\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"col"),"\u53ef\u4ee5\u914d\u7f6e\u4e3a\u7279\u5b9a\u201c\u65ad\u70b9\u201d\u5177\u6709\u4e0d\u540c\u7684\u503c\u3002 \u65ad\u70b9\u547d\u540d\u5c3a\u5bf8\u8303\u56f4:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u65ad\u70b9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7ef4\u5ea6"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XS"),(0,l.kt)("td",{parentName:"tr",align:null},"<576px")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SM"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2265576px")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MD"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2265768px")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LG"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2265992px")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u22651200px")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xxl"),(0,l.kt)("td",{parentName:"tr",align:null},"\u22651400px")))),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u793a\u4f8b\u5c06\u5185\u5bb9\u6298\u53e0\u6210\u79fb\u52a8\u8bbe\u5907\u4e0a\u7684\u5355\u5217\u4e2d\uff0c\u5e76\u5728\u8f83\u5927\u5c4f\u5e55\u4e0a\u8fdb\u884c\u4e24\u5217:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\nft.ResponsiveRow([\n    ft.Column(col={"sm": 6}, controls=[ft.Text("Column 1")]),\n    ft.Column(col={"sm": 6}, controls=[ft.Text("Column 2")])\n])\n')),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"pownlowsiverow"},"pownlowsiverow"),(0,l.kt)("img",{src:"/img/docs/controls/responsive-row/responsive-layout.gif",className:"screenshot-100"}),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    def page_resize(e):\n        pw.value = f"{page.width} px"\n        pw.update()\n\n    page.on_resize = page_resize\n\n    pw = ft.Text(bottom=50, right=50, style="displaySmall")\n    page.overlay.append(pw)\n    page.add(\n        ft.ResponsiveRow(\n            [\n                ft.Container(\n                    ft.Text("Column 1"),\n                    padding=5,\n                    bgcolor=ft.colors.YELLOW,\n                    col={"sm": 6, "md": 4, "xl": 2},\n                ),\n                ft.Container(\n                    ft.Text("Column 2"),\n                    padding=5,\n                    bgcolor=ft.colors.GREEN,\n                    col={"sm": 6, "md": 4, "xl": 2},\n                ),\n                ft.Container(\n                    ft.Text("Column 3"),\n                    padding=5,\n                    bgcolor=ft.colors.BLUE,\n                    col={"sm": 6, "md": 4, "xl": 2},\n                ),\n                ft.Container(\n                    ft.Text("Column 4"),\n                    padding=5,\n                    bgcolor=ft.colors.PINK_300,\n                    col={"sm": 6, "md": 4, "xl": 2},\n                ),\n            ],\n        ),\n        ft.ResponsiveRow(\n            [\n                ft.TextField(label="TextField 1", col={"md": 4}),\n                ft.TextField(label="TextField 2", col={"md": 4}),\n                ft.TextField(label="TextField 3", col={"md": 4}),\n            ],\n            run_spacing={"xs": 10},\n        ),\n    )\n    page_resize(None)\n\nft.app(target=main)\n')))),(0,l.kt)("h2",{id:"properties"},"properties"),(0,l.kt)("h3",{id:"alignment"},(0,l.kt)("inlineCode",{parentName:"h3"},"alignment")),(0,l.kt)("p",null,"child \u63a7\u4ef6\u5e94\u5982\u4f55\u6c34\u5e73\u653e\u7f6e\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"MainAxisAlignment.START"),"\uff0c\u9ed8\u8ba4\u503c\uff0c\u5c06 children \u653e\u5728\u4e00\u884c\u7684\u5de6\u4fa7\u3002"),(0,l.kt)("p",null,"\u5c5e\u6027\u503c\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"MainAxisAlignment"),"\u679a\u4e3e\uff0c\u5177\u6709\u4ee5\u4e0b\u503c:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"START"),"\uff08\u9ed8\u8ba4\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"END")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CENTER")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SPACE_AROUND")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SPACE_EVENLY"))),(0,l.kt)("h3",{id:"columns"},(0,l.kt)("inlineCode",{parentName:"h3"},"columns")),(0,l.kt)("p",null,"\u5e03\u5c40 children \u7684\u865a\u62df\u5217\u6570\u3002 \u9ed8\u8ba4\u503c\u4e3a 12\u3002"),(0,l.kt)("h3",{id:"controls"},(0,l.kt)("inlineCode",{parentName:"h3"},"controls")),(0,l.kt)("p",null,"\u54cd\u5e94\u5668\u4e2d\u663e\u793a\u7684\u63a7\u4ef6\u5217\u8868\u3002"),(0,l.kt)("h3",{id:"run_spacing"},(0,l.kt)("inlineCode",{parentName:"h3"},"run_spacing")),(0,l.kt)("p",null,"\u5f53\u884c\u5185\u5bb9\u5305\u88f9\u5728\u591a\u884c\u4e0a\u65f6\uff0c\u5728\u8fd0\u884c\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002 \u9ed8\u8ba4\u503c\u4e3a 10\u3002"),(0,l.kt)("h3",{id:"spacing"},(0,l.kt)("inlineCode",{parentName:"h3"},"spacing")),(0,l.kt)("p",null,"\u8fde\u7eed\u5bf9\u63a7\u4ef6\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002 \u9ed8\u8ba4\u503c\u662f 10 \u4e2a\u865a\u62df\u50cf\u7d20\u3002 \u4ec5\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"alignment"),"\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"start"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"end"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"center"),"\u3002"),(0,l.kt)("h3",{id:"vertical_alignment\u65f6\u4ec5\u5e94\u7528\u95f4\u8ddd"},(0,l.kt)("inlineCode",{parentName:"h3"},"vertical_alignment"),"\u65f6\uff0c\u4ec5\u5e94\u7528\u95f4\u8ddd\u3002"),(0,l.kt)("p",null,"child \u63a7\u4ef6\u5e94\u5782\u76f4\u653e\u7f6e\u3002"),(0,l.kt)("p",null,"\u5c5e\u6027\u503c\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"CrossAxisAlignment"),"\u679a\u4e3e\uff0c\u5177\u6709\u4ee5\u4e0b\u503c:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"START"),"\uff08\u9ed8\u8ba4\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CENTER")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"END")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"STRETCH")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BASELINE"))))}v.isMDXComponent=!0}}]);