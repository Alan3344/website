"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[37],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),c=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return l.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?l.createElement(f,i(i({ref:n},u),{},{components:t})):l.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[p]="string"==typeof e?e:a,i[1]=r;for(var c=2;c<o;c++)i[c]=t[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var l=t(7294),a=t(6010),o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return b}});var l=t(7462),a=t(7294),o=t(6010),i=t(2466),r=t(6550),s=t(1980),c=t(7392),u=t(12);function p(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,l=e.groupId,o=(0,r.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,l=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=l?l:null}({queryString:t,groupId:l});return[(0,s._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function h(e){var n,t,l,o,i=e.defaultValue,r=e.queryString,s=void 0!==r&&r,c=e.groupId,p=d(e),h=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,l=e.tabValues;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+l.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=l.find((function(e){return e.default})))?n:l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),g=h[0],k=h[1],v=f({queryString:s,groupId:c}),N=v[0],C=v[1],_=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,u.Nk)(n),l=t[0],o=t[1],[l,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),b=_[0],y=_[1],w=function(){var e=null!=N?N:b;return m({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){w&&k(w)}),[w]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),C(e),y(e)}),[C,y,p]),tabValues:p}}var g=t(2389),k="tabList__CuJ",v="tabItem_LNqP";function N(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,c=e.tabValues,u=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=u.indexOf(n),l=c[t].value;l!==r&&(p(n),s(l))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var l,a=u.indexOf(e.currentTarget)+1;t=null!=(l=u[a])?l:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;t=null!=(o=u[i])?o:u[u.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,key:n,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":r===n})}),null!=t?t:n)})))}function C(e){var n=e.lazy,t=e.children,l=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=o.find((function(e){return e.props.value===l}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})})))}function _(e){var n=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k)},a.createElement(N,(0,l.Z)({},e,n)),a.createElement(C,(0,l.Z)({},e,n)))}function b(e){var n=(0,g.Z)();return a.createElement(_,(0,l.Z)({key:String(n)},e))}},1850:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var l=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(4866),r=t(5162),s=["components"],c={title:"Column",sidebar_label:"Column",slug:"column"},u=void 0,p={unversionedId:"controls/column",id:"controls/column",title:"Column",description:"A control that displays its children in a vertical array.",source:"@site/docs/controls/column.md",sourceDirName:"controls",slug:"/controls/column",permalink:"/docs/controls/column",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/column.md",tags:[],version:"current",frontMatter:{title:"Column",sidebar_label:"Column",slug:"column"},sidebar:"docs",previous:{title:"Row",permalink:"/docs/controls/row"},next:{title:"Stack",permalink:"/docs/controls/stack"}},d={},m=[{value:"Examples",id:"examples",level:2},{value:"Column spacing",id:"column-spacing",level:3},{value:"Column wrapping",id:"column-wrapping",level:3},{value:"Column vertical alignments",id:"column-vertical-alignments",level:3},{value:"Column horizontal alignments",id:"column-horizontal-alignments",level:3},{value:"Infinite scroll list",id:"infinite-scroll-list",level:3},{value:"Scrolling column programmatically",id:"scrolling-column-programmatically",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>alignment</code>",id:"alignment",level:3},{value:"<code>auto_scroll</code>",id:"auto_scroll",level:3},{value:"<code>controls</code>",id:"controls",level:3},{value:"<code>horizontal_alignment</code>",id:"horizontal_alignment",level:3},{value:"<code>on_scroll_interval</code>",id:"on_scroll_interval",level:3},{value:"<code>scroll</code>",id:"scroll",level:3},{value:"<code>spacing</code>",id:"spacing",level:3},{value:"<code>run_spacing</code>",id:"run_spacing",level:3},{value:"<code>tight</code>",id:"tight",level:3},{value:"<code>wrap</code>",id:"wrap",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>scroll_to(offset, delta, key, duration, curve)</code>",id:"scroll_tooffset-delta-key-duration-curve",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_scroll</code>",id:"on_scroll",level:3},{value:"Expanding children",id:"expanding-children",level:2}],f={toc:m};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,l.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A control that displays its children in a vertical array."),(0,o.kt)("p",null,"To cause a child control to expand and fill the available vertical space set its ",(0,o.kt)("inlineCode",{parentName:"p"},"expand")," property."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/layout/column"},"Live example")),(0,o.kt)("h3",{id:"column-spacing"},"Column spacing"),(0,o.kt)("img",{src:"/img/docs/controls/column/column-spacing.gif",className:"screenshot-50"}),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    def items(count):\n        items = []\n        for i in range(1, count + 1):\n            items.append(\n                ft.Container(\n                    content=ft.Text(value=str(i)),\n                    alignment=ft.alignment.center,\n                    width=50,\n                    height=50,\n                    bgcolor=ft.colors.AMBER,\n                    border_radius=ft.border_radius.all(5),\n                )\n            )\n        return items\n\n    def spacing_slider_change(e):\n        col.spacing = int(e.control.value)\n        col.update()\n\n    gap_slider = ft.Slider(\n        min=0,\n        max=100,\n        divisions=10,\n        value=0,\n        label="{value}",\n        width=500,\n        on_change=spacing_slider_change,\n    )\n\n    col = ft.Column(spacing=0, controls=items(5))\n\n    page.add(ft.Column([ ft.Text("Spacing between items"), gap_slider]), col)\n\nft.app(target=main)\n')))),(0,o.kt)("h3",{id:"column-wrapping"},"Column wrapping"),(0,o.kt)("img",{src:"/img/docs/controls/column/column-wrapping.gif",className:"screenshot-70"}),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\nHEIGHT = 400\n\ndef main(page: ft.Page):\n    def items(count):\n        items = []\n        for i in range(1, count + 1):\n            items.append(\n                ft.Container(\n                    content=ft.Text(value=str(i)),\n                    alignment=ft.alignment.center,\n                    width=30,\n                    height=30,\n                    bgcolor=ft.colors.AMBER,\n                    border_radius=ft.border_radius.all(5),\n                )\n            )\n        return items\n\n    def slider_change(e):\n        col.height = float(e.control.value)\n        col.update()\n\n    width_slider = ft.Slider(\n        min=0,\n        max=HEIGHT,\n        divisions=20,\n        value=HEIGHT,\n        label="{value}",\n        width=500,\n        on_change=slider_change,\n    )\n\n    col = ft.Column(\n        wrap=True,\n        spacing=10,\n        run_spacing=10,\n        controls=items(10),\n        height=HEIGHT,\n    )\n\n    page.add(\n        ft.Column(\n            [\n                ft.Text(\n                    "Change the column height to see how child items wrap onto multiple columns:"\n                ),\n                width_slider,\n            ]\n        ),\n        ft.Container(content=col, bgcolor=ft.colors.AMBER_100),\n    )\n\nft.app(target=main)\n')))),(0,o.kt)("h3",{id:"column-vertical-alignments"},"Column vertical alignments"),(0,o.kt)("img",{src:"/img/docs/controls/column/column-alignment.png",className:"screenshot-70"}),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import flet as ft\n\ndef main(page: ft.Page):\n    def items(count):\n        items = []\n        for i in range(1, count + 1):\n            items.append(\n                ft.Container(\n                    content=ft.Text(value=str(i)),\n                    alignment=ft.alignment.center,\n                    width=50,\n                    height=50,\n                    bgcolor=ft.colors.AMBER_500,\n                )\n            )\n        return items\n\n    def column_with_alignment(align: ft.MainAxisAlignment):\n        return ft.Column(\n            [\n                ft.Text(str(align), size=10),\n                ft.Container(\n                    content=ft.Column(items(3), alignment=align),\n                    bgcolor=ft.colors.AMBER_100,\n                    height=400,\n                ),\n            ]\n        )\n\n    page.add(\n        ft.Row(\n            [\n                column_with_alignment(ft.MainAxisAlignment.START),\n                column_with_alignment(ft.MainAxisAlignment.CENTER),\n                column_with_alignment(ft.MainAxisAlignment.END),\n                column_with_alignment(ft.MainAxisAlignment.SPACE_BETWEEN),\n                column_with_alignment(ft.MainAxisAlignment.SPACE_AROUND),\n                column_with_alignment(ft.MainAxisAlignment.SPACE_EVENLY),\n            ],\n            spacing=30,\n            alignment=ft.MainAxisAlignment.START,\n        )\n    )\n\nft.app(target=main)\n")))),(0,o.kt)("h3",{id:"column-horizontal-alignments"},"Column horizontal alignments"),(0,o.kt)("img",{src:"/img/docs/controls/column/column-horiz-alignment.png",className:"screenshot-50"}),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import flet as ft\n\ndef main(page: ft.Page):\n    def items(count):\n        items = []\n        for i in range(1, count + 1):\n            items.append(\n                ft.Container(\n                    content=ft.Text(value=str(i)),\n                    alignment=ft.alignment.center,\n                    width=50,\n                    height=50,\n                    bgcolor=ft.colors.AMBER_500,\n                )\n            )\n        return items\n\n    def column_with_horiz_alignment(align: ft.CrossAxisAlignment):\n        return ft.Column(\n            [\n                ft.Text(str(align), size=16),\n                ft.Container(\n                    content=ft.Column(\n                        items(3),\n                        alignment=ft.MainAxisAlignment.START,\n                        horizontal_alignment=align,\n                    ),\n                    bgcolor=ft.colors.AMBER_100,\n                    width=100,\n                ),\n            ]\n        )\n\n    page.add(\n        ft.Row(\n            [\n                column_with_horiz_alignment(ft.CrossAxisAlignment.START),\n                column_with_horiz_alignment(ft.CrossAxisAlignment.CENTER),\n                column_with_horiz_alignment(ft.CrossAxisAlignment.END),\n            ],\n            spacing=30,\n            alignment=ft.MainAxisAlignment.START,\n        )\n    )\n\nft.app(target=main)\n")))),(0,o.kt)("h3",{id:"infinite-scroll-list"},"Infinite scroll list"),(0,o.kt)("p",null,"The following example demonstrates adding of list items on-the-fly, as user scroll to the bottom, creating the illusion of inifinite list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import threading\nimport flet as ft\n\nclass State:\n    i = 0\n\ns = State()\nsem = threading.Semaphore()\n\ndef main(page: ft.Page):\n    def on_scroll(e: ft.OnScrollEvent):\n        if e.pixels >= e.max_scroll_extent - 100:\n            if sem.acquire(blocking=False):\n                try:\n                    for i in range(0, 10):\n                        cl.controls.append(ft.Text(f"Text line {s.i}", key=str(s.i)))\n                        s.i += 1\n                    cl.update()\n                finally:\n                    sem.release()\n\n    cl = ft.Column(\n        spacing=10,\n        height=200,\n        width=200,\n        scroll=ft.ScrollMode.ALWAYS,\n        on_scroll_interval=0,\n        on_scroll=on_scroll,\n    )\n    for i in range(0, 50):\n        cl.controls.append(ft.Text(f"Text line {s.i}", key=str(s.i)))\n        s.i += 1\n\n    page.add(ft.Container(cl, border=ft.border.all(1)))\n\nft.app(main)\n')),(0,o.kt)("h3",{id:"scrolling-column-programmatically"},"Scrolling column programmatically"),(0,o.kt)("img",{src:"/img/docs/controls/column/column-scroll-to.png",className:"screenshot-50"}),(0,o.kt)("p",null,"The following example demonstrates various ",(0,o.kt)("inlineCode",{parentName:"p"},"scroll_to()")," options as well as defines a custom scrollbar theme:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.theme = ft.Theme(\n        scrollbar_theme=ft.ScrollbarTheme(\n            track_color={\n                ft.MaterialState.HOVERED: ft.colors.AMBER,\n                ft.MaterialState.DEFAULT: ft.colors.TRANSPARENT,\n            },\n            track_visibility=True,\n            track_border_color=ft.colors.BLUE,\n            thumb_visibility=True,\n            thumb_color={\n                ft.MaterialState.HOVERED: ft.colors.RED,\n                ft.MaterialState.DEFAULT: ft.colors.GREY_300,\n            },\n            thickness=30,\n            radius=15,\n            main_axis_margin=5,\n            cross_axis_margin=10,\n            # interactive=False,\n        )\n    )\n\n    cl = ft.Column(\n        spacing=10,\n        height=200,\n        width=float("inf"),\n        scroll=ft.ScrollMode.ALWAYS,\n    )\n    for i in range(0, 100):\n        cl.controls.append(ft.Text(f"Text line {i}", key=str(i)))\n\n    def scroll_to_offset(e):\n        cl.scroll_to(offset=100, duration=1000)\n\n    def scroll_to_start(e):\n        cl.scroll_to(offset=0, duration=1000)\n\n    def scroll_to_end(e):\n        cl.scroll_to(offset=-1, duration=2000, curve=ft.AnimationCurve.EASE_IN_OUT)\n\n    def scroll_to_key(e):\n        cl.scroll_to(key="20", duration=1000)\n\n    def scroll_to_delta(e):\n        cl.scroll_to(delta=40, duration=200)\n\n    def scroll_to_minus_delta(e):\n        cl.scroll_to(delta=-40, duration=200)\n\n    page.add(\n        ft.Container(cl, border=ft.border.all(1)),\n        ft.ElevatedButton("Scroll to offset 100", on_click=scroll_to_offset),\n        ft.Row(\n            [\n                ft.ElevatedButton("Scroll to start", on_click=scroll_to_start),\n                ft.ElevatedButton("Scroll to end", on_click=scroll_to_end),\n            ]\n        ),\n        ft.ElevatedButton("Scroll to key \'20\'", on_click=scroll_to_key),\n        ft.Row(\n            [\n                ft.ElevatedButton("Scroll -40", on_click=scroll_to_minus_delta),\n                ft.ElevatedButton("Scroll +40", on_click=scroll_to_delta),\n            ]\n        ),\n    )\n\nft.app(main)\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"alignment"},(0,o.kt)("inlineCode",{parentName:"h3"},"alignment")),(0,o.kt)("p",null,"How the child Controls should be placed vertically."),(0,o.kt)("p",null,"Property value is ",(0,o.kt)("inlineCode",{parentName:"p"},"MainAxisAlignment")," enum with the following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"START")," (default)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"END")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CENTER")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SPACE_AROUND")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SPACE_EVENLY"))),(0,o.kt)("h3",{id:"auto_scroll"},(0,o.kt)("inlineCode",{parentName:"h3"},"auto_scroll")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"True")," if scrollbar should automatically move its position to the end when children updated. Must be ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"scroll_to()")," method to work."),(0,o.kt)("h3",{id:"controls"},(0,o.kt)("inlineCode",{parentName:"h3"},"controls")),(0,o.kt)("p",null,"A list of Controls to display inside the Column."),(0,o.kt)("h3",{id:"horizontal_alignment"},(0,o.kt)("inlineCode",{parentName:"h3"},"horizontal_alignment")),(0,o.kt)("p",null,"How the child Controls should be placed horizontally."),(0,o.kt)("p",null,"Property value is ",(0,o.kt)("inlineCode",{parentName:"p"},"CrossAxisAlignment")," enum with the following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"START")," (default)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CENTER")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"END")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"STRETCH")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BASELINE"))),(0,o.kt)("h3",{id:"on_scroll_interval"},(0,o.kt)("inlineCode",{parentName:"h3"},"on_scroll_interval")),(0,o.kt)("p",null,"Throttling in milliseconds for ",(0,o.kt)("inlineCode",{parentName:"p"},"on_scroll")," event. Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"10"),"."),(0,o.kt)("h3",{id:"scroll"},(0,o.kt)("inlineCode",{parentName:"h3"},"scroll")),(0,o.kt)("p",null,"Enables a vertical scrolling for the Column to prevent its content overflow."),(0,o.kt)("p",null,"Property value is an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollMode")," enum with ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," as default."),(0,o.kt)("p",null,"Supported values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"None")," (default) - the column is non-scrollable and its content could overflow."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AUTO")," - scrolling is enabled and scroll bar is only shown when scrolling occurs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ADAPTIVE")," - scrolling is enabled and scroll bar is always shown when running app as web or desktop."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ALWAYS")," - scrolling is enabled and scroll bar is always shown."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HIDDEN")," - scrolling is enabled, but scroll bar is always hidden.")),(0,o.kt)("h3",{id:"spacing"},(0,o.kt)("inlineCode",{parentName:"h3"},"spacing")),(0,o.kt)("p",null,"Spacing between controls in a Column. Default value is 10 virtual pixels. Spacing is applied only when ",(0,o.kt)("inlineCode",{parentName:"p"},"alignment")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"center"),"."),(0,o.kt)("h3",{id:"run_spacing"},(0,o.kt)("inlineCode",{parentName:"h3"},"run_spacing")),(0,o.kt)("p",null,"Spacing between runs when ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap=True"),". Default value is 10."),(0,o.kt)("h3",{id:"tight"},(0,o.kt)("inlineCode",{parentName:"h3"},"tight")),(0,o.kt)("p",null,"Specifies how much space should be occupied vertically. Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," - allocate all space to children."),(0,o.kt)("h3",{id:"wrap"},(0,o.kt)("inlineCode",{parentName:"h3"},"wrap")),(0,o.kt)("p",null,"When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," the Column will put child controls into additional columns (runs) if they don't fit a single column."),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"scroll_tooffset-delta-key-duration-curve"},(0,o.kt)("inlineCode",{parentName:"h3"},"scroll_to(offset, delta, key, duration, curve)")),(0,o.kt)("p",null,"Moves scroll position to either absolute ",(0,o.kt)("inlineCode",{parentName:"p"},"offset"),", relative ",(0,o.kt)("inlineCode",{parentName:"p"},"delta")," or jump to the control with specified ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"offset")," is an abosulte value between minimum and maximum extents of a scrollable control, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"products.scroll_to(offset=100, duration=1000)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"offset")," could be a negative to scroll from the end of a scrollable. For example, to scroll to the very end:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"products.scroll_to(offset=-1, duration=1000)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"delta")," allows moving scroll relatively to the current position. Use positive ",(0,o.kt)("inlineCode",{parentName:"p"},"delta")," to scroll forward and negative ",(0,o.kt)("inlineCode",{parentName:"p"},"delta")," to scroll backward. For example, to move scroll on 50 pixels forward:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"products.scroll_to(delta=50)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key")," allows moving scroll position to a control with specified ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),". Most of Flet controls have ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),' property which is translated to Flutter as "global key". ',(0,o.kt)("inlineCode",{parentName:"p"},"key")," must be unique for the entire page/view. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    cl = ft.Column(\n        spacing=10,\n        height=200,\n        width=200,\n        scroll=ft.ScrollMode.ALWAYS,\n    )\n    for i in range(0, 50):\n        cl.controls.append(ft.Text(f"Text line {i}", key=str(i)))\n\n    def scroll_to_key(e):\n        cl.scroll_to(key="20", duration=1000)\n\n    page.add(\n        ft.Container(cl, border=ft.border.all(1)),\n        ft.ElevatedButton("Scroll to key \'20\'", on_click=scroll_to_key),\n    )\n\nft.app(main)\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"scroll_to()")," method won't work with ",(0,o.kt)("inlineCode",{parentName:"p"},"ListView")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GridView")," controls building their items dynamically.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"duration")," is scrolling animation duration in milliseconds. Defaults to 0 - no animation."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"curve")," configures animation curve. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"ft.AnimationCurve.EASE"),"."),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("h3",{id:"on_scroll"},(0,o.kt)("inlineCode",{parentName:"h3"},"on_scroll")),(0,o.kt)("p",null,"Fires when scroll position is changed by a user."),(0,o.kt)("p",null,"Event handler argument is an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"ft.OnScrollEvent")," class with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event_type")," (str) - type of the scroll event:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"start")," - control has started scrolling;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"update")," - control has changed its scroll position;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"end")," - control has stopped scrolling;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user")," - user has changed the direction in which they are scrolling;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"over")," - control has not changed its scroll position because the change would have caused its scroll position to go outside its scroll bounds;"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pixels")," (float) - The current scroll position, in logical pixels."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"min_scroll_extent")," (float) - The minimum in-range value for ",(0,o.kt)("inlineCode",{parentName:"li"},"pixels"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_scroll_extent")," (float) - The maximum in-range value for ",(0,o.kt)("inlineCode",{parentName:"li"},"pixels"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"viewport_dimension")," (float) - The extent of the viewport."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scroll_delta")," (float) - The distance by which the scrollable was scrolled, in logical pixels. Set for ",(0,o.kt)("inlineCode",{parentName:"li"},"update")," events only."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"direction")," (str) - The direction in which the user is scrolling: ",(0,o.kt)("inlineCode",{parentName:"li"},"idle"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"forward"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"reverse"),". Set for ",(0,o.kt)("inlineCode",{parentName:"li"},"user")," events only."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"overscroll")," (float) - The number of logical pixels that the scrollable avoided scrolling. Set for ",(0,o.kt)("inlineCode",{parentName:"li"},"over")," events only."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"velocity")," (float) - The velocity at which the ScrollPosition was changing when this overscroll happened. Set for ",(0,o.kt)("inlineCode",{parentName:"li"},"over")," events only.")),(0,o.kt)("h2",{id:"expanding-children"},"Expanding children"),(0,o.kt)("p",null,'When a child Control is placed into a Column you can "expand" it to fill the available space. Every Control has ',(0,o.kt)("inlineCode",{parentName:"p"},"expand")," property that can have either a boolean value (",(0,o.kt)("inlineCode",{parentName:"p"},"True"),' - expand control to fill all available space) or an integer - an "expand factor" specifying how to divide a free space with other expanded child controls. For example, this code creates a column with a Container taking all available space and a Text control at the bottom serving as a status bar:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'r = ft.Column([\n  ft.Container(expand=True, content=ft.Text("Here is search results")),\n  ft.Text("Records found: 10")\n])\n')),(0,o.kt)("p",null,"The following example with numeric expand factors creates a Column with 3 containers in it and having heights of ",(0,o.kt)("inlineCode",{parentName:"p"},"20% (1/5)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"60% (3/5)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"20% (1/5)")," respectively:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'r = ft.Column([\n  ft.Container(expand=1, content=ft.Text("Header")),\n  ft.Container(expand=3, content=ft.Text("Body")),\n  ft.Container(expand=1, content=ft.Text("Footer"))\n])\n')),(0,o.kt)("p",null,"In general, the resulting height of a child in percents is calculated as ",(0,o.kt)("inlineCode",{parentName:"p"},"expand / sum(all expands) * 100%"),"."))}h.isMDXComponent=!0}}]);