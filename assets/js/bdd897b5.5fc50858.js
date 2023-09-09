"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[9721],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),a=t(6010),l="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return _}});var r=t(7462),a=t(7294),l=t(6010),o=t(2466),i=t(6550),u=t(1980),c=t(7392),s=t(12);function d(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:d(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,l=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[o,l])]}function v(e){var n,t,r,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,d=p(e),v=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:d})})),h=v[0],g=v[1],b=m({queryString:u,groupId:c}),k=b[0],y=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(n),r=t[0],l=t[1],[r,(0,a.useCallback)((function(e){n&&l.set(e)}),[n,l])]),_=w[0],N=w[1],C=function(){var e=null!=k?k:_;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){C&&g(C)}),[C]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),N(e)}),[y,N,d]),tabValues:d}}var h=t(2389),g="tabList__CuJ",b="tabItem_LNqP";function k(e){var n=e.className,t=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,t=s.indexOf(n),r=c[t].value;r!==i&&(d(n),u(r))},f=function(e){var n,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var l,o=s.indexOf(e.currentTarget)-1;t=null!=(l=s[o])?l:s[s.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},o,{className:(0,l.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function y(e){var n=e.lazy,t=e.children,r=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=l.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function w(e){var n=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(k,(0,r.Z)({},e,n)),a.createElement(y,(0,r.Z)({},e,n)))}function _(e){var n=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},9946:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=t(4866),i=t(5162),u=["components"],c={title:"GridView",sidebar_label:"GridView",slug:"gridview"},s=void 0,d={unversionedId:"controls/gridview",id:"controls/gridview",title:"GridView",description:"\u53ef\u6eda\u52a8\u7684 2D \u63a7\u4ef6\u9635\u5217\u3002",source:"@site/docs/controls/gridview.md",sourceDirName:"controls",slug:"/controls/gridview",permalink:"/website/docs/controls/gridview",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/gridview.md",tags:[],version:"current",frontMatter:{title:"GridView",sidebar_label:"GridView",slug:"gridview"},sidebar:"docs",previous:{title:"ListTile",permalink:"/website/docs/controls/listtile"},next:{title:"ResponsiveRow",permalink:"/website/docs/controls/responsiverow"}},p={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u7167\u7247\u5e93",id:"\u7167\u7247\u5e93",level:3},{value:"properties",id:"properties",level:2},{value:"<code>auto_scroll</code>",id:"auto_scroll",level:3},{value:"<code>child_aspect_ratio</code>",id:"child_aspect_ratio",level:3},{value:"<code>controls</code>",id:"controls",level:3},{value:"<code>horizontal</code>",id:"horizontal",level:3},{value:"<code>max_extent</code>",id:"max_extent",level:3},{value:"<code>on_scroll_interval</code>",id:"on_scroll_interval",level:3},{value:"<code>padding</code>",id:"padding",level:3},{value:"<code>run_spacing</code>",id:"run_spacing",level:3},{value:"<code>runs_count</code>",id:"runs_count",level:3},{value:"<code>spacing</code>",id:"spacing",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"<code>on_scroll</code>",id:"on_scroll",level:3}],m={toc:f};function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u53ef\u6eda\u52a8\u7684 2D \u63a7\u4ef6\u9635\u5217\u3002"),(0,l.kt)("p",null,":::\u4fe1\u606f\nGridView \u5bf9\u4e8e\u5927\u578b\u5217\u8868\uff08\u6210\u5343\u4e0a\u4e07\u7684\u9879\u76ee\uff09\u975e\u5e38\u6709\u6548\u3002 \u4f18\u4e8e\u5305\u88c5",(0,l.kt)("a",{parentName:"p",href:"column"},(0,l.kt)("inlineCode",{parentName:"a"},"Column")),"\u6216",(0,l.kt)("a",{parentName:"p",href:"row"},(0,l.kt)("inlineCode",{parentName:"a"},"Row")),"\u4ee5\u8fdb\u884c\u5e73\u6ed1\u6eda\u52a8\u3002 \u6709\u5173 GridView \u7528\u6cd5\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/apps/icons-browser/main.py"},"Flet \u56fe\u6807\u6d4f\u89c8\u5668"),"\u3002\n:::"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/layout/gridview"},"LIVE \u793a\u4f8b")),(0,l.kt)("h3",{id:"\u7167\u7247\u5e93"},"\u7167\u7247\u5e93"),(0,l.kt)("img",{src:"/website/img/docs/controls/gridview/photo-gallery.png",className:"screenshot-50"}),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "GridView Example"\n    page.theme_mode = ft.ThemeMode.DARK\n    page.padding = 50\n    page.update()\n\n    images = ft.GridView(\n        expand=1,\n        runs_count=5,\n        max_extent=150,\n        child_aspect_ratio=1.0,\n        spacing=5,\n        run_spacing=5,\n    )\n\n    page.add(images)\n\n    for i in range(0, 60):\n        images.controls.append(\n            ft.Image(\n                src=f"https://picsum.photos/150/150?{i}",\n                fit=ft.ImageFit.NONE,\n                repeat=ft.ImageRepeat.NO_REPEAT,\n                border_radius=ft.border_radius.all(10),\n            )\n        )\n    page.update()\n\nft.app(target=main, view=ft.AppView.WEB_BROWSER)\n')))),(0,l.kt)("h2",{id:"properties"},"properties"),(0,l.kt)("h3",{id:"auto_scroll"},(0,l.kt)("inlineCode",{parentName:"h3"},"auto_scroll")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"True"),"\u5982\u679c children \u66f4\u65b0\u65f6\uff0cScrollbar \u5e94\u81ea\u52a8\u5c06\u5176\u4f4d\u7f6e\u79fb\u81f3\u7ed3\u5c3e\u3002 \u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"scroll_to()"),"\u7684\u5de5\u4f5c\u65b9\u6cd5\uff0c\u5fc5\u987b\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"False"),"\u3002"),(0,l.kt)("h3",{id:"child_aspect_ratio"},(0,l.kt)("inlineCode",{parentName:"h3"},"child_aspect_ratio")),(0,l.kt)("p",null,"\u8de8\u8f74\u7684\u6bd4\u7387\u4e0e\u6bcf\u4e2a child \u7684\u4e3b\u8981\u8f74\u8303\u56f4\u3002"),(0,l.kt)("h3",{id:"controls"},(0,l.kt)("inlineCode",{parentName:"h3"},"controls")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Control")," s \u7684\u5217\u8868\uff0c\u8981\u5728 GridView \u4e2d\u663e\u793a\u3002"),(0,l.kt)("h3",{id:"horizontal"},(0,l.kt)("inlineCode",{parentName:"h3"},"horizontal")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"True"),"\u4ee5\u6c34\u5e73\u5e03\u5c40 gridview \u9879\u76ee\u3002"),(0,l.kt)("h3",{id:"max_extent"},(0,l.kt)("inlineCode",{parentName:"h3"},"max_extent")),(0,l.kt)("p",null,"\u7f51\u683c\u9879\u76ee\u7684\u6700\u5927\u5bbd\u5ea6\u6216\u9ad8\u5ea6\u3002"),(0,l.kt)("h3",{id:"on_scroll_interval"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_scroll_interval")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"on_scroll"),"\u4e8b\u4ef6\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002 \u9ed8\u8ba4\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"10"),"\u3002"),(0,l.kt)("h3",{id:"padding"},(0,l.kt)("inlineCode",{parentName:"h3"},"padding")),(0,l.kt)("p",null,"\u63d2\u5165 children \u7684\u7a7a\u95f4\u6570\u91cf\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\u548c\u53ef\u80fd\u7684\u503c\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"container#padding"},(0,l.kt)("inlineCode",{parentName:"a"},"Container.padding")),"\u5c5e\u6027\u3002"),(0,l.kt)("h3",{id:"run_spacing"},(0,l.kt)("inlineCode",{parentName:"h3"},"run_spacing")),(0,l.kt)("p",null,"\u6bcf\u4e2a child \u6cbf\u6a2a\u8f74\u4e4b\u95f4\u7684\u903b\u8f91\u50cf\u7d20\u6570\u3002"),(0,l.kt)("h3",{id:"runs_count"},(0,l.kt)("inlineCode",{parentName:"h3"},"runs_count")),(0,l.kt)("p",null,"\u6a2a\u8f74\u4e2d\u7684 children \u7684\u6570\u91cf\u3002"),(0,l.kt)("h3",{id:"spacing"},(0,l.kt)("inlineCode",{parentName:"h3"},"spacing")),(0,l.kt)("p",null,"\u6bcf\u4e2a child \u6cbf\u4e3b\u8f74\u4e4b\u95f4\u7684\u903b\u8f91\u50cf\u7d20\u6570\u3002"),(0,l.kt)("p",null,"\u5c06\u6eda\u52a8\u4f4d\u7f6e\u79fb\u81f3\u7edd\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"offset"),"\uff0c\u76f8\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"delta"),"\u6216\u4f7f\u7528\u6307\u5b9a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"\u8df3\u5230\u63a7\u4ef6\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u65b9\u6cd5\u8be6\u7ec6\u4fe1\u606f\u548c\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"column#scroll_tooffset-delta-key-duration-curve"},(0,l.kt)("inlineCode",{parentName:"a"},"Column.scroll_to()")),"\u3002"),(0,l.kt)("h2",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,l.kt)("h3",{id:"on_scroll"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_scroll")),(0,l.kt)("p",null,"\u7528\u6237\u66f4\u6539\u6eda\u52a8\u4f4d\u7f6e\u65f6\u4f1a\u53d1\u5c04\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u4e8b\u4ef6\u8be6\u7ec6\u4fe1\u606f\u548c\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"column#on_scroll"},(0,l.kt)("inlineCode",{parentName:"a"},"Column.on_scroll")),"\u3002"))}v.isMDXComponent=!0}}]);