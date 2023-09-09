"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[37],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=l.createContext({}),c=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return l.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return t?l.createElement(f,i(i({ref:n},s),{},{components:t})):l.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var l=t(7294),a=t(6010),r="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return b}});var l=t(7462),a=t(7294),r=t(6010),i=t(2466),o=t(6550),u=t(1980),c=t(7392),s=t(12);function p(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,l=e.groupId,r=(0,o.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,l=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=l?l:null}({queryString:t,groupId:l});return[(0,u._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(r.location.search);n.set(i,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[i,r])]}function k(e){var n,t,l,r,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,c=e.groupId,p=d(e),k=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,l=e.tabValues;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+l.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=l.find((function(e){return e.default})))?n:l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),g=k[0],h=k[1],v=f({queryString:u,groupId:c}),N=v[0],_=v[1],C=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(n),l=t[0],r=t[1],[l,(0,a.useCallback)((function(e){n&&r.set(e)}),[n,r])]),b=C[0],y=C[1],T=function(){var e=null!=N?N:b;return m({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){T&&h(T)}),[T]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),_(e),y(e)}),[_,y,p]),tabValues:p}}var g=t(2389),h="tabList__CuJ",v="tabItem_LNqP";function N(e){var n=e.className,t=e.block,o=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=s.indexOf(n),l=c[t].value;l!==o&&(p(n),u(l))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var l,a=s.indexOf(e.currentTarget)+1;t=null!=(l=s[a])?l:s[0];break;case"ArrowLeft":var r,i=s.indexOf(e.currentTarget)-1;t=null!=(r=s[i])?r:s[s.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:function(e){return s.push(e)},onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===n})}),null!=t?t:n)})))}function _(e){var n=e.lazy,t=e.children,l=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=r.find((function(e){return e.props.value===l}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})})))}function C(e){var n=k(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",h)},a.createElement(N,(0,l.Z)({},e,n)),a.createElement(_,(0,l.Z)({},e,n)))}function b(e){var n=(0,g.Z)();return a.createElement(C,(0,l.Z)({key:String(n)},e))}},1850:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var l=t(7462),a=t(3366),r=(t(7294),t(3905)),i=t(4866),o=t(5162),u=["components"],c={title:"Column",sidebar_label:"Column",slug:"column"},s=void 0,p={unversionedId:"controls/column",id:"controls/column",title:"Column",description:"\u4e00\u4e2a\u5728\u5782\u76f4\u6570\u7ec4\u4e2d\u663e\u793a\u5176 children \u7684\u63a7\u4ef6\u3002",source:"@site/docs/controls/column.md",sourceDirName:"controls",slug:"/controls/column",permalink:"/website/docs/controls/column",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/column.md",tags:[],version:"current",frontMatter:{title:"Column",sidebar_label:"Column",slug:"column"},sidebar:"docs",previous:{title:"Row",permalink:"/website/docs/controls/row"},next:{title:"Stack",permalink:"/website/docs/controls/stack"}},d={},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5217\u95f4\u8ddd",id:"\u5217\u95f4\u8ddd",level:3},{value:"\u5217\u5305\u88c5",id:"\u5217\u5305\u88c5",level:3},{value:"\u5217\u5782\u76f4\u5bf9\u9f50",id:"\u5217\u5782\u76f4\u5bf9\u9f50",level:3},{value:"\u5217\u6c34\u5e73\u5bf9\u9f50",id:"\u5217\u6c34\u5e73\u5bf9\u9f50",level:3},{value:"\u65e0\u9650\u6eda\u52a8\u5217\u8868",id:"\u65e0\u9650\u6eda\u52a8\u5217\u8868",level:3},{value:"\u6eda\u52a8\u5217\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6eda\u52a8\u5217",id:"\u6eda\u52a8\u5217\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6eda\u52a8\u5217",level:3},{value:"properties",id:"properties",level:2},{value:"<code>alignment</code>",id:"alignment",level:3},{value:"<code>auto_scroll</code>",id:"auto_scroll",level:3},{value:"<code>controls</code>",id:"controls",level:3},{value:"<code>horizontal_alignment</code>",id:"horizontal_alignment",level:3},{value:"<code>on_scroll_interval</code>",id:"on_scroll_interval",level:3},{value:"<code>scroll</code>",id:"scroll",level:3},{value:"<code>spacing</code>",id:"spacing",level:3},{value:"<code>run_spacing</code>",id:"run_spacing",level:3},{value:"<code>tight</code>",id:"tight",level:3},{value:"<code>wrap</code>",id:"wrap",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>scroll_to\uff08offset\uff0cdelta\uff0cdelta\uff0ckey\uff0c\u952e\uff0c\u6301\u7eed\u65f6\u95f4\uff0c\u6301\u7eed\u65f6\u95f4\uff0c\u66f2\u7ebf\uff09 </code>",id:"scroll_tooffsetdeltadeltakey\u952e\u6301\u7eed\u65f6\u95f4\u6301\u7eed\u65f6\u95f4\u66f2\u7ebf-",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"<code>on_scroll</code>",id:"on_scroll",level:3},{value:"\u6269\u5c55 children",id:"\u6269\u5c55-children",level:2}],f={toc:m};function k(e){var n=e.components,t=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,l.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e00\u4e2a\u5728\u5782\u76f4\u6570\u7ec4\u4e2d\u663e\u793a\u5176 children \u7684\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u5f15\u8d77 child \u63a7\u4ef6\u4ee5\u6269\u5c55\u548c\u586b\u5145\u53ef\u7528\u7684\u5782\u76f4\u7a7a\u95f4\u8bbe\u7f6e\u5176",(0,r.kt)("inlineCode",{parentName:"p"},"expand"),"\u5c5e\u6027\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/layout/column"},"LIVE \u793a\u4f8b")),(0,r.kt)("h3",{id:"\u5217\u95f4\u8ddd"},"\u5217\u95f4\u8ddd"),(0,r.kt)("img",{src:"/website/img/docs/controls/column/column-spacing.gif",className:"screenshot-50"}),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    def items(count):\n        items = []\n        for i in range(1, count + 1):\n            items.append(\n                ft.Container(\n                    content=ft.Text(value=str(i)),\n                    alignment=ft.alignment.center,\n                    width=50,\n                    height=50,\n                    bgcolor=ft.colors.AMBER,\n                    border_radius=ft.border_radius.all(5),\n                )\n            )\n        return items\n\n    def spacing_slider_change(e):\n        col.spacing = int(e.control.value)\n        col.update()\n\n    gap_slider = ft.Slider(\n        min=0,\n        max=100,\n        divisions=10,\n        value=0,\n        label="{value}",\n        width=500,\n        on_change=spacing_slider_change,\n    )\n\n    col = ft.Column(spacing=0, controls=items(5))\n\n    page.add(ft.Column([ ft.Text("Spacing between items"), gap_slider]), col)\n\nft.app(target=main)\n')))),(0,r.kt)("h3",{id:"\u5217\u5305\u88c5"},"\u5217\u5305\u88c5"),(0,r.kt)("img",{src:"/website/img/docs/controls/column/column-wrapping.gif",className:"screenshot-70"}),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\nHEIGHT = 400\n\ndef main(page: ft.Page):\n    def items(count):\n        items = []\n        for i in range(1, count + 1):\n            items.append(\n                ft.Container(\n                    content=ft.Text(value=str(i)),\n                    alignment=ft.alignment.center,\n                    width=30,\n                    height=30,\n                    bgcolor=ft.colors.AMBER,\n                    border_radius=ft.border_radius.all(5),\n                )\n            )\n        return items\n\n    def slider_change(e):\n        col.height = float(e.control.value)\n        col.update()\n\n    width_slider = ft.Slider(\n        min=0,\n        max=HEIGHT,\n        divisions=20,\n        value=HEIGHT,\n        label="{value}",\n        width=500,\n        on_change=slider_change,\n    )\n\n    col = ft.Column(\n        wrap=True,\n        spacing=10,\n        run_spacing=10,\n        controls=items(10),\n        height=HEIGHT,\n    )\n\n    page.add(\n        ft.Column(\n            [\n                ft.Text(\n                    "Change the column height to see how child items wrap onto multiple columns:"\n                ),\n                width_slider,\n            ]\n        ),\n        ft.Container(content=col, bgcolor=ft.colors.AMBER_100),\n    )\n\nft.app(target=main)\n')))),(0,r.kt)("h3",{id:"\u5217\u5782\u76f4\u5bf9\u9f50"},"\u5217\u5782\u76f4\u5bf9\u9f50"),(0,r.kt)("img",{src:"/website/img/docs/controls/column/column-alignment.png",className:"screenshot-70"}),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import flet as ft\n\ndef main(page: ft.Page):\n    def items(count):\n        items = []\n        for i in range(1, count + 1):\n            items.append(\n                ft.Container(\n                    content=ft.Text(value=str(i)),\n                    alignment=ft.alignment.center,\n                    width=50,\n                    height=50,\n                    bgcolor=ft.colors.AMBER_500,\n                )\n            )\n        return items\n\n    def column_with_alignment(align: ft.MainAxisAlignment):\n        return ft.Column(\n            [\n                ft.Text(str(align), size=10),\n                ft.Container(\n                    content=ft.Column(items(3), alignment=align),\n                    bgcolor=ft.colors.AMBER_100,\n                    height=400,\n                ),\n            ]\n        )\n\n    page.add(\n        ft.Row(\n            [\n                column_with_alignment(ft.MainAxisAlignment.START),\n                column_with_alignment(ft.MainAxisAlignment.CENTER),\n                column_with_alignment(ft.MainAxisAlignment.END),\n                column_with_alignment(ft.MainAxisAlignment.SPACE_BETWEEN),\n                column_with_alignment(ft.MainAxisAlignment.SPACE_AROUND),\n                column_with_alignment(ft.MainAxisAlignment.SPACE_EVENLY),\n            ],\n            spacing=30,\n            alignment=ft.MainAxisAlignment.START,\n        )\n    )\n\nft.app(target=main)\n")))),(0,r.kt)("h3",{id:"\u5217\u6c34\u5e73\u5bf9\u9f50"},"\u5217\u6c34\u5e73\u5bf9\u9f50"),(0,r.kt)("img",{src:"/website/img/docs/controls/column/column-horiz-alignment.png",className:"screenshot-50"}),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import flet as ft\n\ndef main(page: ft.Page):\n    def items(count):\n        items = []\n        for i in range(1, count + 1):\n            items.append(\n                ft.Container(\n                    content=ft.Text(value=str(i)),\n                    alignment=ft.alignment.center,\n                    width=50,\n                    height=50,\n                    bgcolor=ft.colors.AMBER_500,\n                )\n            )\n        return items\n\n    def column_with_horiz_alignment(align: ft.CrossAxisAlignment):\n        return ft.Column(\n            [\n                ft.Text(str(align), size=16),\n                ft.Container(\n                    content=ft.Column(\n                        items(3),\n                        alignment=ft.MainAxisAlignment.START,\n                        horizontal_alignment=align,\n                    ),\n                    bgcolor=ft.colors.AMBER_100,\n                    width=100,\n                ),\n            ]\n        )\n\n    page.add(\n        ft.Row(\n            [\n                column_with_horiz_alignment(ft.CrossAxisAlignment.START),\n                column_with_horiz_alignment(ft.CrossAxisAlignment.CENTER),\n                column_with_horiz_alignment(ft.CrossAxisAlignment.END),\n            ],\n            spacing=30,\n            alignment=ft.MainAxisAlignment.START,\n        )\n    )\n\nft.app(target=main)\n")))),(0,r.kt)("h3",{id:"\u65e0\u9650\u6eda\u52a8\u5217\u8868"},"\u65e0\u9650\u6eda\u52a8\u5217\u8868"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u6f14\u793a\u4e86\u5217\u8868\u9879\u76ee\u7684\u6dfb\u52a0\uff0c\u56e0\u4e3a\u7528\u6237\u6eda\u52a8\u5230\u5e95\u90e8\uff0c\u9020\u6210\u4e86\u65e0\u9650\u5217\u8868\u7684\u5e7b\u89c9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import threading\nimport flet as ft\n\nclass State:\n    i = 0\n\ns = State()\nsem = threading.Semaphore()\n\ndef main(page: ft.Page):\n    def on_scroll(e: ft.OnScrollEvent):\n        if e.pixels >= e.max_scroll_extent - 100:\n            if sem.acquire(blocking=False):\n                try:\n                    for i in range(0, 10):\n                        cl.controls.append(ft.Text(f"Text line {s.i}", key=str(s.i)))\n                        s.i += 1\n                    cl.update()\n                finally:\n                    sem.release()\n\n    cl = ft.Column(\n        spacing=10,\n        height=200,\n        width=200,\n        scroll=ft.ScrollMode.ALWAYS,\n        on_scroll_interval=0,\n        on_scroll=on_scroll,\n    )\n    for i in range(0, 50):\n        cl.controls.append(ft.Text(f"Text line {s.i}", key=str(s.i)))\n        s.i += 1\n\n    page.add(ft.Container(cl, border=ft.border.all(1)))\n\nft.app(main)\n')),(0,r.kt)("h3",{id:"\u6eda\u52a8\u5217\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6eda\u52a8\u5217"},"\u6eda\u52a8\u5217\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6eda\u52a8\u5217"),(0,r.kt)("img",{src:"/website/img/docs/controls/column/column-scroll-to.png",className:"screenshot-50"}),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u4e86\u5404\u79cd",(0,r.kt)("inlineCode",{parentName:"p"},"scroll_to()"),"\u9009\u9879\uff0c\u5e76\u5b9a\u4e49\u4e86\u81ea\u5b9a\u4e49\u6eda\u52a8\u680f\u4e3b\u9898:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.theme = ft.Theme(\n        scrollbar_theme=ft.ScrollbarTheme(\n            track_color={\n                ft.MaterialState.HOVERED: ft.colors.AMBER,\n                ft.MaterialState.DEFAULT: ft.colors.TRANSPARENT,\n            },\n            track_visibility=True,\n            track_border_color=ft.colors.BLUE,\n            thumb_visibility=True,\n            thumb_color={\n                ft.MaterialState.HOVERED: ft.colors.RED,\n                ft.MaterialState.DEFAULT: ft.colors.GREY_300,\n            },\n            thickness=30,\n            radius=15,\n            main_axis_margin=5,\n            cross_axis_margin=10,\n            # interactive=False,\n        )\n    )\n\n    cl = ft.Column(\n        spacing=10,\n        height=200,\n        width=float("inf"),\n        scroll=ft.ScrollMode.ALWAYS,\n    )\n    for i in range(0, 100):\n        cl.controls.append(ft.Text(f"Text line {i}", key=str(i)))\n\n    def scroll_to_offset(e):\n        cl.scroll_to(offset=100, duration=1000)\n\n    def scroll_to_start(e):\n        cl.scroll_to(offset=0, duration=1000)\n\n    def scroll_to_end(e):\n        cl.scroll_to(offset=-1, duration=2000, curve=ft.AnimationCurve.EASE_IN_OUT)\n\n    def scroll_to_key(e):\n        cl.scroll_to(key="20", duration=1000)\n\n    def scroll_to_delta(e):\n        cl.scroll_to(delta=40, duration=200)\n\n    def scroll_to_minus_delta(e):\n        cl.scroll_to(delta=-40, duration=200)\n\n    page.add(\n        ft.Container(cl, border=ft.border.all(1)),\n        ft.ElevatedButton("Scroll to offset 100", on_click=scroll_to_offset),\n        ft.Row(\n            [\n                ft.ElevatedButton("Scroll to start", on_click=scroll_to_start),\n                ft.ElevatedButton("Scroll to end", on_click=scroll_to_end),\n            ]\n        ),\n        ft.ElevatedButton("Scroll to key \'20\'", on_click=scroll_to_key),\n        ft.Row(\n            [\n                ft.ElevatedButton("Scroll -40", on_click=scroll_to_minus_delta),\n                ft.ElevatedButton("Scroll +40", on_click=scroll_to_delta),\n            ]\n        ),\n    )\n\nft.app(main)\n')),(0,r.kt)("h2",{id:"properties"},"properties"),(0,r.kt)("h3",{id:"alignment"},(0,r.kt)("inlineCode",{parentName:"h3"},"alignment")),(0,r.kt)("p",null,"child \u63a7\u4ef6\u5e94\u5782\u76f4\u653e\u7f6e\u3002"),(0,r.kt)("p",null,"\u5c5e\u6027\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"MainAxisAlignment"),"\u679a\u4e3e\uff0c\u5177\u6709\u4ee5\u4e0b\u503c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"START"),"\uff08\u9ed8\u8ba4\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"END")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CENTER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPACE_AROUND")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPACE_EVENLY"))),(0,r.kt)("h3",{id:"auto_scroll"},(0,r.kt)("inlineCode",{parentName:"h3"},"auto_scroll")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"True"),"\u5982\u679c Scrollbar \u5e94\u81ea\u52a8\u5c06\u5176\u4f4d\u7f6e\u79fb\u81f3 children \u66f4\u65b0\u65f6\u3002 \u5fc5\u987b\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"False"),"\u8fdb\u884c\u5de5\u4f5c\u7684\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"False"),"\u3002"),(0,r.kt)("h3",{id:"controls"},(0,r.kt)("inlineCode",{parentName:"h3"},"controls")),(0,r.kt)("p",null,"\u5728\u5217\u5185\u663e\u793a\u7684\u63a7\u4ef6\u5217\u8868\u3002"),(0,r.kt)("h3",{id:"horizontal_alignment"},(0,r.kt)("inlineCode",{parentName:"h3"},"horizontal_alignment")),(0,r.kt)("p",null,"child \u63a7\u4ef6\u5e94\u5982\u4f55\u6c34\u5e73\u653e\u7f6e\u3002"),(0,r.kt)("p",null,"\u5c5e\u6027\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"CrossAxisAlignment"),"\u679a\u4e3e\uff0c\u5177\u6709\u4ee5\u4e0b\u503c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"START"),"\uff08\u9ed8\u8ba4\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CENTER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"END")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STRETCH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BASELINE"))),(0,r.kt)("h3",{id:"on_scroll_interval"},(0,r.kt)("inlineCode",{parentName:"h3"},"on_scroll_interval")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"on_scroll"),"\u4e8b\u4ef6\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002 \u9ed8\u8ba4\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"10"),"\u3002"),(0,r.kt)("h3",{id:"scroll"},(0,r.kt)("inlineCode",{parentName:"h3"},"scroll")),(0,r.kt)("p",null,"\u542f\u7528\u5bf9\u5217\u7684\u5782\u76f4\u6eda\u52a8\uff0c\u4ee5\u9632\u6b62\u5176\u5185\u5bb9\u6ea2\u51fa\u3002"),(0,r.kt)("p",null,"\u5c5e\u6027\u503c\u662f\u9ed8\u8ba4\u503c",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"\u7684\u53ef\u9009",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollMode"),"\u679a\u4e3e\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u7684\u503c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"None"),"\uff08\u9ed8\u8ba4\u503c\uff09 - \u8be5\u5217\u4e0d\u53ef\u6eda\u52a8\uff0c\u5176\u5185\u5bb9\u53ef\u80fd\u4f1a\u6ea2\u51fa\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTO")," - \u542f\u7528\u6eda\u52a8\uff0c\u4ec5\u5728\u6eda\u52a8\u65f6\u663e\u793a\u6eda\u52a8\u6761\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ADAPTIVE")," - \u542f\u7528\u6eda\u52a8\uff0c\u5e76\u5728\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u6216\u684c\u9762\u65f6\u59cb\u7ec8\u663e\u793a\u6eda\u52a8\u6761\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALWAYS")," - \u542f\u7528\u6eda\u52a8\uff0c\u5e76\u59cb\u7ec8\u663e\u793a\u6eda\u52a8\u6761\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HIDDEN")," - \u542f\u7528\u6eda\u52a8\uff0c\u4f46\u6eda\u52a8\u6761\u603b\u662f\u9690\u85cf\u7684\u3002")),(0,r.kt)("h3",{id:"spacing"},(0,r.kt)("inlineCode",{parentName:"h3"},"spacing")),(0,r.kt)("p",null,"\u5217\u4e2d\u63a7\u4ef6\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002 \u9ed8\u8ba4\u503c\u662f 10 \u4e2a\u865a\u62df\u50cf\u7d20\u3002 \u4ec5\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"alignment"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"start"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"end"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"center"),"\u3002"),(0,r.kt)("h3",{id:"run_spacing"},(0,r.kt)("inlineCode",{parentName:"h3"},"run_spacing")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wrap=True"),"\u65f6\u8fd0\u884c\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002 \u9ed8\u8ba4\u503c\u4e3a 10\u3002"),(0,r.kt)("h3",{id:"tight"},(0,r.kt)("inlineCode",{parentName:"h3"},"tight")),(0,r.kt)("p",null,"\u6307\u5b9a\u5e94\u5782\u76f4\u5360\u7528\u591a\u5c11\u7a7a\u95f4\u3002 \u9ed8\u8ba4\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"False")," - \u5c06\u6240\u6709\u7a7a\u95f4\u5206\u914d\u7ed9 children\u3002"),(0,r.kt)("h3",{id:"wrap"},(0,r.kt)("inlineCode",{parentName:"h3"},"wrap")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"\u65f6\uff0c\u8be5\u5217\u5c06\u5982\u679c\u4e0d\u9002\u5408\u5355\u4e2a\u5217\uff0c\u5c06 child \u63a7\u4ef6\u653e\u5165\u5176\u4ed6\u5217\uff08\u8fd0\u884c\uff09\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"scroll_tooffsetdeltadeltakey\u952e\u6301\u7eed\u65f6\u95f4\u6301\u7eed\u65f6\u95f4\u66f2\u7ebf-"},(0,r.kt)("inlineCode",{parentName:"h3"},"scroll_to\uff08offset\uff0cdelta\uff0cdelta\uff0ckey\uff0c\u952e\uff0c\u6301\u7eed\u65f6\u95f4\uff0c\u6301\u7eed\u65f6\u95f4\uff0c\u66f2\u7ebf\uff09 ")),(0,r.kt)("p",null,"\u5c06\u6eda\u52a8\u4f4d\u7f6e\u79fb\u81f3\u7edd\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"offset"),"\uff0c\u76f8\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"delta"),"\u6216\u4f7f\u7528\u6307\u5b9a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u8df3\u5230\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"offset"),"\u662f\u53ef\u6eda\u52a8\u63a7\u4ef6\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u8303\u56f4\u4e4b\u95f4\u7684\u5ea7\u4f4d\u503c\uff0c\u4f8b\u5982:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"products.scroll_to(offset=100, duration=1000)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"offset"),"\u4ece\u53ef\u6eda\u52a8\u7684\u672b\u7aef\u6eda\u52a8\u53ef\u80fd\u662f\u8d1f\u9762\u7684\u3002 \u4f8b\u5982\uff0c\u6eda\u52a8\u5230\u6700\u540e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"products.scroll_to(offset=-1, duration=1000)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"delta"),"\u5141\u8bb8\u76f8\u5bf9\u79fb\u52a8\u5230\u5f53\u524d\u4f4d\u7f6e\u3002 \u4f7f\u7528\u6b63\u9762",(0,r.kt)("inlineCode",{parentName:"p"},"delta"),"\u5411\u524d\u6eda\u52a8\u548c\u8d1f",(0,r.kt)("inlineCode",{parentName:"p"},"delta"),"\u5411\u540e\u6eda\u52a8\u3002 \u4f8b\u5982\uff0c\u5728 50 \u50cf\u7d20\u4e0a\u5411\u524d\u79fb\u52a8\u6eda\u52a8:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"products.scroll_to(delta=50)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u5141\u8bb8\u4f7f\u7528\u6307\u5b9a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u5c06\u6eda\u52a8\u4f4d\u7f6e\u79fb\u81f3\u63a7\u4ef6\u3002 \u5927\u591a\u6570 Flet \u63a7\u4ef6\u5177\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u88ab\u7ffb\u8bd1\u6210\u201c\u5168\u5c40\u5bc6\u94a5\u201d\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u5bf9\u4e8e\u6574\u4e2a\u9875\u9762/\u89c6\u56fe\uff0c\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002 \u4f8b\u5982:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    cl = ft.Column(\n        spacing=10,\n        height=200,\n        width=200,\n        scroll=ft.ScrollMode.ALWAYS,\n    )\n    for i in range(0, 50):\n        cl.controls.append(ft.Text(f"Text line {i}", key=str(i)))\n\n    def scroll_to_key(e):\n        cl.scroll_to(key="20", duration=1000)\n\n    page.add(\n        ft.Container(cl, border=ft.border.all(1)),\n        ft.ElevatedButton("Scroll to key \'20\'", on_click=scroll_to_key),\n    )\n\nft.app(main)\n')),(0,r.kt)("p",null,":::\u6ce8\u610f\n",(0,r.kt)("inlineCode",{parentName:"p"},"scroll_to()"),"\u65b9\u6cd5\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"ListView"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"GridView"),"\u65e0\u6cd5\u4f7f\u7528\u52a8\u6001\u6784\u5efa\u5176\u7269\u54c1\u3002\n:::"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"duration"),"\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u6eda\u52a8\u52a8\u753b\u6301\u7eed\u65f6\u95f4\u3002 \u9ed8\u8ba4\u4e3a 0-\u65e0\u52a8\u753b\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"curve"),"\u914d\u7f6e\u52a8\u753b\u66f2\u7ebf\u3002 \u9ed8\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"ft.AnimationCurve.EASE"),"\u3002"),(0,r.kt)("h2",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,r.kt)("h3",{id:"on_scroll"},(0,r.kt)("inlineCode",{parentName:"h3"},"on_scroll")),(0,r.kt)("p",null,"\u7528\u6237\u66f4\u6539\u6eda\u52a8\u4f4d\u7f6e\u65f6\u4f1a\u53d1\u5c04\u3002"),(0,r.kt)("p",null,"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u53c2\u6570\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"ft.OnScrollEvent"),"\u7c7b\u7684\u5b9e\u4f8b\uff0c\u5177\u6709\u4ee5\u4e0b\u5c5e\u6027:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_type"),"\uff08str\uff09 - \u7c7b\u578b\u6eda\u52a8\u4e8b\u4ef6:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start")," - \u63a7\u5236\u5df2\u5f00\u59cb\u6eda\u52a8\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update")," - \u63a7\u5236\u5df2\u66f4\u6539\u5176\u6eda\u52a8\u4f4d\u7f6e\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"end")," - \u63a7\u5236\u5df2\u505c\u6b62\u6eda\u52a8\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," - \u7528\u6237\u6539\u53d8\u4e86\u6eda\u52a8\u7684\u65b9\u5411\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"over")," - \u63a7\u5236\u6ca1\u6709\u66f4\u6539\u5176\u6eda\u52a8\u4f4d\u7f6e\uff0c\u56e0\u4e3a\u66f4\u6539\u4f1a\u5bfc\u81f4\u5176\u6eda\u52a8\u4f4d\u7f6e\u8d85\u51fa\u5176\u6eda\u52a8\u8fb9\u754c\uff1b"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pixels"),"\uff08float\uff09 - \u5f53\u524d\u7684\u6eda\u52a8\u4f4d\u7f6e\uff0c\u5728\u903b\u8f91\u50cf\u7d20\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_scroll_extent"),"\uff08float\uff09 - ",(0,r.kt)("inlineCode",{parentName:"li"},"pixels"),"\u7684\u6700\u5c0f\u8303\u56f4\u5185\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_scroll_extent"),"\uff08float\uff09 - ",(0,r.kt)("inlineCode",{parentName:"li"},"pixels"),"\u7684\u6700\u5927\u8303\u56f4\u5185\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"viewport_dimension"),"\uff08float\uff09 - \u89c6\u53e3\u8303\u56f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scroll_delta"),"\uff08float\uff09 - \u903b\u8f91\u50cf\u7d20\u4ee5\u6eda\u52a8\u6eda\u52a8\u7684\u8ddd\u79bb\u3002 \u4ec5\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"update"),"\u4e8b\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"direction"),"\uff08str\uff09 - \u7528\u6237\u6eda\u52a8\u7684\u65b9\u5411: ",(0,r.kt)("inlineCode",{parentName:"li"},"idle"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"forward"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"reverse"),"\u3002 \u4ec5\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"user"),"\u4e8b\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overscroll"),"\uff08float\uff09 - \u53ef\u6eda\u52a8\u907f\u514d\u6eda\u52a8\u7684\u903b\u8f91\u50cf\u7d20\u7684\u6570\u91cf\u3002 \u4ec5\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"over"),"\u4e8b\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"velocity"),"\uff08float\uff09 - \u5f53\u53d1\u751f\u8fd9\u79cd\u8d85\u6eda\u52a8\u65f6\uff0c\u5377\u8f74\u53d8\u5316\u7684\u901f\u5ea6\u6b63\u5728\u53d1\u751f\u53d8\u5316\u3002 \u4ec5\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"over"),"\u4e8b\u4ef6\u3002")),(0,r.kt)("h2",{id:"\u6269\u5c55-children"},"\u6269\u5c55 children"),(0,r.kt)("p",null,"\u5c06 child \u63a7\u4ef6\u653e\u5165\u5217\u4e2d\u65f6\uff0c\u60a8\u53ef\u4ee5\u201c\u5c55\u5f00\u201d\u5176\u4ee5\u586b\u5145\u53ef\u7528\u7a7a\u95f4\u3002 \u6bcf\u4e2a\u63a7\u4ef6\u90fd\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"expand"),"\u5c5e\u6027\uff0c\u53ef\u4ee5\u5177\u6709\u5e03\u5c14\u503c\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"True")," - \u6269\u5c55\u63a7\u5236\u4ee5\u586b\u5145\u6240\u6709\u53ef\u7528\u7a7a\u95f4\uff09\u6216\u4e00\u4e2a\u6574\u6570 - \u4e00\u4e2a\u201c\u6269\u5c55\u56e0\u5b50\u201d\u6307\u5b9a\u5982\u4f55\u5c06\u81ea\u7531\u7a7a\u95f4\u4e0e\u5176\u4ed6\u6269\u5c55\u7684 child \u63a7\u4ef6\u5206\u914d \u3002 \u4f8b\u5982\uff0c\u6b64\u4ee3\u7801\u4f7f\u7528\u4e00\u4e2a\u5bb9\u5668\u521b\u5efa\u4e00\u5217\uff0c\u4ee5\u5360\u636e\u6240\u6709\u53ef\u7528\u7a7a\u95f4\u548c\u5e95\u90e8\u7684\u6587\u672c\u63a7\u4ef6\uff0c\u7528\u4f5c\u72b6\u6001\u680f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'r = ft.Column([\n  ft.Container(expand=True, content=ft.Text("Here is search results")),\n  ft.Text("Records found: 10")\n])\n')),(0,r.kt)("p",null,"\u6570\u5b57\u6269\u5c55\u56e0\u5b50\u7684\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa\u4e86\u4e00\u4e2a\u5177\u6709 3 \u4e2a\u5bb9\u5668\u7684\u5217\uff0c\u5176\u9ad8\u5ea6\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"20\uff05\uff081/5\uff09"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"60\uff05\uff083/5\uff09'\u548c"),"\u5206\u522b\u4e3a 20\uff05\uff081/5\uff09`:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'r = ft.Column([\n  ft.Container(expand=1, content=ft.Text("Header")),\n  ft.Container(expand=3, content=ft.Text("Body")),\n  ft.Container(expand=1, content=ft.Text("Footer"))\n])\n')),(0,r.kt)("p",null,"\u901a\u5e38\uff0cpercents \u4e2d child \u7684\u7ed3\u679c\u9ad8\u5ea6\u88ab\u8ba1\u7b97\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"expand / sum\uff08\u6240\u6709\u6269\u5c55\uff09 * 100\uff05"),"\u3002"))}k.isMDXComponent=!0}}]);