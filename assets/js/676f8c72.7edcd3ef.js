"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[7354],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=l,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7294),l=t(6010),r="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(7462),l=t(7294),r=t(6010),o=t(2466),i=t(6550),s=t(1980),u=t(7392),c=t(12);function d(e){return function(e){var n,t;return null!=(n=null==(t=l.Children.map(e,(function(e){if(!e||(0,l.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,t=e.children;return(0,l.useMemo)((function(){var e=null!=n?n:d(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,r=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,l.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function h(e){var n,t,a,r,o=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,d=p(e),h=(0,l.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var l=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:o,tabValues:d})})),g=h[0],v=h[1],w=f({queryString:s,groupId:u}),k=w[0],b=w[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,c.Nk)(n),a=t[0],r=t[1],[a,(0,l.useCallback)((function(e){n&&r.set(e)}),[n,r])]),y=N[0],C=N[1],_=function(){var e=null!=k?k:y;return m({value:e,tabValues:d})?e:null}();return(0,l.useLayoutEffect)((function(){_&&v(_)}),[_]),{selectedValue:g,selectValue:(0,l.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),b(e),C(e)}),[b,C,d]),tabValues:d}}var g=t(2389),v="tabList__CuJ",w="tabItem_LNqP";function k(e){var n=e.className,t=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==i&&(d(n),s(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,l=c.indexOf(e.currentTarget)+1;t=null!=(a=c[l])?a:c[0];break;case"ArrowLeft":var r,o=c.indexOf(e.currentTarget)-1;t=null!=(r=c[o])?r:c[c.length-1]}null==(n=t)||n.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},u.map((function(e){var n=e.value,t=e.label,o=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},o,{className:(0,r.Z)("tabs__item",w,null==o?void 0:o.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function b(e){var n=e.lazy,t=e.children,a=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=r.find((function(e){return e.props.value===a}));return o?(0,l.cloneElement)(o,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function N(e){var n=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",v)},l.createElement(k,(0,a.Z)({},e,n)),l.createElement(b,(0,a.Z)({},e,n)))}function y(e){var n=(0,g.Z)();return l.createElement(N,(0,a.Z)({key:String(n)},e))}},322:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),o=t(4866),i=t(5162),s=["components"],u={title:"Row",sidebar_label:"Row",slug:"row"},c=void 0,d={unversionedId:"controls/row",id:"controls/row",title:"Row",description:"A control that displays its children in a horizontal array.",source:"@site/docs/controls/row.md",sourceDirName:"controls",slug:"/controls/row",permalink:"/docs/controls/row",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/row.md",tags:[],version:"current",frontMatter:{title:"Row",sidebar_label:"Row",slug:"row"},sidebar:"docs",previous:{title:"Container",permalink:"/docs/controls/container"},next:{title:"Column",permalink:"/docs/controls/column"}},p={},m=[{value:"Examples",id:"examples",level:2},{value:"Row spacing",id:"row-spacing",level:3},{value:"Row wrapping",id:"row-wrapping",level:3},{value:"Row horizontal alignments",id:"row-horizontal-alignments",level:3},{value:"Row vertical",id:"row-vertical",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>alignment</code>",id:"alignment",level:3},{value:"<code>auto_scroll</code>",id:"auto_scroll",level:3},{value:"<code>controls</code>",id:"controls",level:3},{value:"<code>run_spacing</code>",id:"run_spacing",level:3},{value:"<code>scroll</code>",id:"scroll",level:3},{value:"<code>spacing</code>",id:"spacing",level:3},{value:"<code>on_scroll_interval</code>",id:"on_scroll_interval",level:3},{value:"<code>tight</code>",id:"tight",level:3},{value:"<code>vertical_alignment</code>",id:"vertical_alignment",level:3},{value:"<code>wrap</code>",id:"wrap",level:3},{value:"<code>on_scroll</code>",id:"on_scroll",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>scroll_to(offset, delta, key, duration, curve)</code>",id:"scroll_tooffset-delta-key-duration-curve",level:3},{value:"Events",id:"events",level:2},{value:"<code>on_scroll</code>",id:"on_scroll-1",level:3},{value:"Expanding children",id:"expanding-children",level:2}],f={toc:m};function h(e){var n=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A control that displays its children in a horizontal array."),(0,r.kt)("p",null,"To cause a child control to expand and fill the available horizontal space set its ",(0,r.kt)("inlineCode",{parentName:"p"},"expand")," property."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/layout/row"},"Live example")),(0,r.kt)("h3",{id:"row-spacing"},"Row spacing"),(0,r.kt)("img",{src:"/img/docs/controls/row/row-spacing.gif",className:"screenshot"}),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    def items(count):\n        items = []\n        for i in range(1, count + 1):\n            items.append(\n                ft.Container(\n                    content=ft.Text(value=str(i)),\n                    alignment=ft.alignment.center,\n                    width=50,\n                    height=50,\n                    bgcolor=ft.colors.AMBER,\n                    border_radius=ft.border_radius.all(5),\n                )\n            )\n        return items\n\n    def gap_slider_change(e):\n        row.spacing = int(e.control.value)\n        row.update()\n\n    gap_slider = ft.Slider(\n        min=0,\n        max=50,\n        divisions=50,\n        value=0,\n        label="{value}",\n        on_change=gap_slider_change,\n    )\n\n    row = ft.Row(spacing=0, controls=items(10))\n\n    page.add(ft.Column([ ft.Text("Spacing between items"), gap_slider]), row)\n\nft.app(target=main)\n')))),(0,r.kt)("h3",{id:"row-wrapping"},"Row wrapping"),(0,r.kt)("img",{src:"/img/docs/controls/row/row-wrap.gif",className:"screenshot"}),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    def items(count):\n        items = []\n        for i in range(1, count + 1):\n            items.append(\n                ft.Container(\n                    content=ft.Text(value=str(i)),\n                    alignment=ft.alignment.center,\n                    width=50,\n                    height=50,\n                    bgcolor=ft.colors.AMBER,\n                    border_radius=ft.border_radius.all(5),\n                )\n            )\n        return items\n\n    def slider_change(e):\n        row.width = float(e.control.value)\n        row.update()\n\n    width_slider = ft.Slider(\n        min=0,\n        max=page.window_width,\n        divisions=20,\n        value=page.window_width,\n        label="{value}",\n        on_change=slider_change,\n    )\n\n    row = ft.Row(\n        wrap=True,\n        spacing=10,\n        run_spacing=10,\n        controls=items(30),\n        width=page.window_width,\n    )\n\n    page.add(\n        ft.Column(\n            [\n                ft.Text(\n                    "Change the row width to see how child items wrap onto multiple rows:"\n                ),\n                width_slider,\n            ]\n        ),\n        row,\n    )\n\nft.app(target=main)\n')))),(0,r.kt)("h3",{id:"row-horizontal-alignments"},"Row horizontal alignments"),(0,r.kt)("img",{src:"/img/docs/controls/row/row-alignment.png",className:"screenshot"}),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import flet as ft\n\ndef main(page: ft.Page):\n    def items(count):\n        items = []\n        for i in range(1, count + 1):\n            items.append(\n                ft.Container(\n                    content=ft.Text(value=str(i)),\n                    alignment=ft.alignment.center,\n                    width=50,\n                    height=50,\n                    bgcolor=ft.colors.AMBER_500,\n                )\n            )\n        return items\n\n    def row_with_alignment(align: ft.MainAxisAlignment):\n        return ft.Column(\n            [\n                ft.Text(str(align), size=16),\n                ft.Container(\n                    content=ft.Row(items(3), alignment=align),\n                    bgcolor=ft.colors.AMBER_100,\n                ),\n            ]\n        )\n\n    page.add(\n        row_with_alignment(ft.MainAxisAlignment.START),\n        row_with_alignment(ft.MainAxisAlignment.CENTER),\n        row_with_alignment(ft.MainAxisAlignment.END),\n        row_with_alignment(ft.MainAxisAlignment.SPACE_BETWEEN),\n        row_with_alignment(ft.MainAxisAlignment.SPACE_AROUND),\n        row_with_alignment(ft.MainAxisAlignment.SPACE_EVENLY),\n    )\n\n\nft.app(target=main)\n")))),(0,r.kt)("h3",{id:"row-vertical"},"Row vertical"),(0,r.kt)("img",{src:"/img/docs/controls/row/row-vertical-alignment.png",className:"screenshot-70"}),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import flet as ft\n\ndef main(page: ft.Page):\n    def items(count):\n        items = []\n        for i in range(1, count + 1):\n            items.append(\n                ft.Container(\n                    content=ft.Text(value=str(i)),\n                    alignment=ft.alignment.center,\n                    width=50,\n                    height=50,\n                    bgcolor=ft.colors.AMBER_500,\n                )\n            )\n        return items\n\n    def row_with_vertical_alignment(align: ft.CrossAxisAlignment):\n        return ft.Column(\n            [\n                ft.Text(str(align), size=16),\n                ft.Container(\n                    content=ft.Row(items(3), vertical_alignment=align),\n                    bgcolor=ft.colors.AMBER_100,\n                    height=150,\n                ),\n            ]\n        )\n\n    page.add(\n        row_with_vertical_alignment(ft.CrossAxisAlignment.START),\n        row_with_vertical_alignment(ft.CrossAxisAlignment.CENTER),\n        row_with_vertical_alignment(ft.CrossAxisAlignment.END),\n    )\n\nft.app(target=main)\n")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"alignment"},(0,r.kt)("inlineCode",{parentName:"h3"},"alignment")),(0,r.kt)("p",null,"How the child Controls should be placed horizontally."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"MainAxisAlignment.START"),", the default, places the children on the left of a Row."),(0,r.kt)("p",null,"Property value is ",(0,r.kt)("inlineCode",{parentName:"p"},"MainAxisAlignment")," enum with the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"START")," (default)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"END")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CENTER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPACE_AROUND")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPACE_EVENLY"))),(0,r.kt)("h3",{id:"auto_scroll"},(0,r.kt)("inlineCode",{parentName:"h3"},"auto_scroll")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"True")," if scrollbar should automatically move its position to the end when children updated. Must be ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"scroll_to()")," method to work."),(0,r.kt)("h3",{id:"controls"},(0,r.kt)("inlineCode",{parentName:"h3"},"controls")),(0,r.kt)("p",null,"A list of Controls to display inside the Row."),(0,r.kt)("h3",{id:"run_spacing"},(0,r.kt)("inlineCode",{parentName:"h3"},"run_spacing")),(0,r.kt)("p",null,"Spacing between runs when ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap=True"),". Default value is 10."),(0,r.kt)("h3",{id:"scroll"},(0,r.kt)("inlineCode",{parentName:"h3"},"scroll")),(0,r.kt)("p",null,"Enables horizontal scrolling for the Row to prevent its content overflow."),(0,r.kt)("p",null,"Property value is an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollMode")," enum with ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," as default."),(0,r.kt)("p",null,"Supported values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"None")," (default) - the Row is non-scrollable and its content could overflow."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTO")," - scrolling is enabled and scroll bar is only shown when scrolling occurs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ADAPTIVE")," - scrolling is enabled and scroll bar is always shown when running app as web or desktop."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALWAYS")," - scrolling is enabled and scroll bar is always shown."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HIDDEN")," - scrolling is enabled, but scroll bar is always hidden.")),(0,r.kt)("h3",{id:"spacing"},(0,r.kt)("inlineCode",{parentName:"h3"},"spacing")),(0,r.kt)("p",null,"Spacing between controls in a row. Default value is 10 virtual pixels. Spacing is applied only when ",(0,r.kt)("inlineCode",{parentName:"p"},"alignment")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"center"),"."),(0,r.kt)("h3",{id:"on_scroll_interval"},(0,r.kt)("inlineCode",{parentName:"h3"},"on_scroll_interval")),(0,r.kt)("p",null,"Throttling in milliseconds for ",(0,r.kt)("inlineCode",{parentName:"p"},"on_scroll")," event. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),"."),(0,r.kt)("h3",{id:"tight"},(0,r.kt)("inlineCode",{parentName:"h3"},"tight")),(0,r.kt)("p",null,"Specifies how much space should be occupied horizontally. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," - allocate all space to children."),(0,r.kt)("h3",{id:"vertical_alignment"},(0,r.kt)("inlineCode",{parentName:"h3"},"vertical_alignment")),(0,r.kt)("p",null,"How the child Controls should be placed vertically."),(0,r.kt)("p",null,"Property value is ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossAxisAlignment")," enum with the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"START")," (default)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CENTER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"END")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STRETCH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BASELINE"))),(0,r.kt)("h3",{id:"wrap"},(0,r.kt)("inlineCode",{parentName:"h3"},"wrap")),(0,r.kt)("p",null,"When set to ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," the Row will put child controls into additional rows (runs) if they don't fit a single row."),(0,r.kt)("h3",{id:"on_scroll"},(0,r.kt)("inlineCode",{parentName:"h3"},"on_scroll")),(0,r.kt)("p",null,"Fires when row's scroll position is changed by a user."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"column#on_scroll"},(0,r.kt)("inlineCode",{parentName:"a"},"Column.on_scroll"))," for event details and examples."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"scroll_tooffset-delta-key-duration-curve"},(0,r.kt)("inlineCode",{parentName:"h3"},"scroll_to(offset, delta, key, duration, curve)")),(0,r.kt)("p",null,"Moves scroll position to either absolute ",(0,r.kt)("inlineCode",{parentName:"p"},"offset"),", relative ",(0,r.kt)("inlineCode",{parentName:"p"},"delta")," or jump to the control with specified ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"column#scroll_tooffset-delta-key-duration-curve"},(0,r.kt)("inlineCode",{parentName:"a"},"Column.scroll_to()"))," for method details and examples."),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"on_scroll-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"on_scroll")),(0,r.kt)("p",null,"Fires when scroll position is changed by a user."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"column#on_scroll"},(0,r.kt)("inlineCode",{parentName:"a"},"Column.on_scroll"))," for event details and examples."),(0,r.kt)("h2",{id:"expanding-children"},"Expanding children"),(0,r.kt)("p",null,'When a child Control is placed into a Row you can "expand" it to fill the available space. Every Control has ',(0,r.kt)("inlineCode",{parentName:"p"},"expand")," property that can have either a boolean value (",(0,r.kt)("inlineCode",{parentName:"p"},"True"),' - expand control to fill all available space) or an integer - an "expand factor" specifying how to divide a free space with other expanded child controls. For example, this code creates a row with a TextField taking all available space and an ElevatedButton next to it:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'r = ft.Row([\n  ft.TextField(hint_text="Enter your name", expand=True),\n  ft.ElevatedButton(text="Join chat")\n])\n')),(0,r.kt)("p",null,"The following example with numeric expand factors creates a Row with 3 containers in it and having widths of ",(0,r.kt)("inlineCode",{parentName:"p"},"20% (1/5)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"60% (3/5)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"20% (1/5)")," respectively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'r = ft.Row([\n  ft.Container(expand=1, content=ft.Text("A")),\n  ft.Container(expand=3, content=ft.Text("B")),\n  ft.Container(expand=1, content=ft.Text("C"))\n])\n')),(0,r.kt)("p",null,"In general, the resulting width of a child in percents is calculated as ",(0,r.kt)("inlineCode",{parentName:"p"},"expand / sum(all expands) * 100%"),"."))}h.isMDXComponent=!0}}]);