"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[855],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,k=c["".concat(d,".").concat(f)]||c[f]||s[f]||l;return n?o.createElement(k,a(a({ref:t},u),{},{components:n})):o.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(7294),r=n(6010),l="tabItem_Ymn6";function a(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,a),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var o=n(7462),r=n(7294),l=n(6010),a=n(2466),i=n(6550),d=n(1980),p=n(7392),u=n(12);function c(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function s(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function k(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,l=(0,i.k6)(),a=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:o});return[(0,d._X)(a),(0,r.useCallback)((function(e){if(a){var t=new URLSearchParams(l.location.search);t.set(a,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[a,l])]}function h(e){var t,n,o,l,a=e.defaultValue,i=e.queryString,d=void 0!==i&&i,p=e.groupId,c=s(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:c})})),m=h[0],v=h[1],_=k({queryString:d,groupId:p}),b=_[0],g=_[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,u.Nk)(t),o=n[0],l=n[1],[o,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),N=x[0],y=x[1],w=function(){var e=null!=b?b:N;return f({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){w&&v(w)}),[w]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),g(e),y(e)}),[g,y,c]),tabValues:c}}var m=n(2389),v="tabList__CuJ",_="tabItem_LNqP";function b(e){var t=e.className,n=e.block,i=e.selectedValue,d=e.selectValue,p=e.tabValues,u=[],c=(0,a.o5)().blockElementScrollPositionUntilNextRender,s=function(e){var t=e.currentTarget,n=u.indexOf(t),o=p[n].value;o!==i&&(c(t),d(o))},f=function(e){var t,n=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":var o,r=u.indexOf(e.currentTarget)+1;n=null!=(o=u[r])?o:u[0];break;case"ArrowLeft":var l,a=u.indexOf(e.currentTarget)-1;n=null!=(l=u[a])?l:u[u.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:f,onClick:s},a,{className:(0,l.Z)("tabs__item",_,null==a?void 0:a.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,o=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var a=l.find((function(e){return e.props.value===o}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})})))}function x(e){var t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(b,(0,o.Z)({},e,t)),r.createElement(g,(0,o.Z)({},e,t)))}function N(e){var t=(0,m.Z)();return r.createElement(x,(0,o.Z)({key:String(t)},e))}},6016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return f}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),a=n(4866),i=n(5162),d=["components"],p={title:"Dropdown",sidebar_label:"Dropdown",slug:"dropdown"},u=void 0,c={unversionedId:"controls/dropdown",id:"controls/dropdown",title:"Dropdown",description:"a material design \u6309\u94ae\u7528\u4e8e\u4ece\u9879\u76ee\u5217\u8868\u4e2d\u9009\u62e9\u3002",source:"@site/docs/controls/dropdown.md",sourceDirName:"controls",slug:"/controls/dropdown",permalink:"/website/docs/controls/dropdown",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/dropdown.md",tags:[],version:"current",frontMatter:{title:"Dropdown",sidebar_label:"Dropdown",slug:"dropdown"},sidebar:"docs",previous:{title:"Checkbox",permalink:"/website/docs/controls/checkbox"},next:{title:"Radio",permalink:"/website/docs/controls/radio"}},s={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u57fa\u672c\u4e0b\u62c9",id:"\u57fa\u672c\u4e0b\u62c9",level:3},{value:"Dropdown with label and hint",id:"dropdown-with-label-and-hint",level:3},{value:"Dropdown with <code>on_change</code> event",id:"dropdown-with-on_change-event",level:3},{value:"Change items in dropdown options",id:"change-items-in-dropdown-options",level:3},{value:"<code>Dropdown</code> properties",id:"dropdown-properties",level:2},{value:"<code>alignment</code>",id:"alignment",level:3},{value:"<code>autofocus</code>",id:"autofocus",level:3},{value:"<code>bgcolor</code>",id:"bgcolor",level:3},{value:"<code>border</code>",id:"border",level:3},{value:"<code>border_color</code> <code>border_color</code>",id:"border_color-border_color",level:3},{value:"<code>border_radius</code>",id:"border_radius",level:3},{value:"<code>border_width</code>",id:"border_width",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>content_padding</code>",id:"content_padding",level:3},{value:"<code>counter_style</code>",id:"counter_style",level:3},{value:"<code>counter_text</code>",id:"counter_text",level:3},{value:"<code>dense</code>",id:"dense",level:3},{value:"<code>error_style</code>",id:"error_style",level:3},{value:"<code>error_text</code>",id:"error_text",level:3},{value:"<code>filled</code>",id:"filled",level:3},{value:"<code>focused_bgcolor</code>",id:"focused_bgcolor",level:3},{value:"<code>focused_border_color</code>",id:"focused_border_color",level:3},{value:"<code>focused_border_width</code>",id:"focused_border_width",level:3},{value:"<code>focused_color</code>",id:"focused_color",level:3},{value:"<code>helper_style</code>",id:"helper_style",level:3},{value:"<code>helper_text</code>",id:"helper_text",level:3},{value:"<code>hint_style</code>",id:"hint_style",level:3},{value:"<code>hint_text</code>",id:"hint_text",level:3},{value:"<code>icon</code>",id:"icon",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"<code>label_style</code>",id:"label_style",level:3},{value:"<code>options</code>",id:"options",level:3},{value:"<code>prefix</code>",id:"prefix",level:3},{value:"<code>prefix_icon</code>",id:"prefix_icon",level:3},{value:"<code>prefix_style</code>",id:"prefix_style",level:3},{value:"<code>prefix_text</code>",id:"prefix_text",level:3},{value:"<code>suffix</code>",id:"suffix",level:3},{value:"<code>suffix_icon</code>",id:"suffix_icon",level:3},{value:"{317771}",id:"317771",level:3},{value:"<code>suffix_text</code>",id:"suffix_text",level:3},{value:"<code>text_size</code>",id:"text_size",level:3},{value:"<code>text_style</code>",id:"text_style",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>Dropdown</code>\u65b9\u6cd5",id:"dropdown\u65b9\u6cd5",level:2},{value:"<code>focus()</code>",id:"focus",level:3},{value:"<code>Dropdown</code>\u4e8b\u4ef6",id:"dropdown\u4e8b\u4ef6",level:2},{value:"<code>on_blur</code>",id:"on_blur",level:3},{value:"<code>on_change</code>",id:"on_change",level:3},{value:"<code>on_focus</code>\u7684\u9009\u5b9a\u9879\u76ee\u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u53d1\u5c04\u3002",id:"on_focus\u7684\u9009\u5b9a\u9879\u76ee\u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u53d1\u5c04",level:3},{value:"<code>Option</code>\u5c5e\u6027",id:"option\u5c5e\u6027",level:2},{value:"<code>key</code>",id:"key",level:3},{value:"<code>text</code>",id:"text",level:3}],k={toc:f};function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"a material design \u6309\u94ae\u7528\u4e8e\u4ece\u9879\u76ee\u5217\u8868\u4e2d\u9009\u62e9\u3002"),(0,l.kt)("p",null,"\u4e0b\u62c9\u5217\u8868\u4f7f\u7528\u6237\u53ef\u4ee5\u4ece\u8bb8\u591a\u9879\u76ee\u4e2d\u9009\u62e9\u3002 \u4e0b\u62c9\u5217\u8868\u663e\u793a\u4e86\u5f53\u524d\u9009\u62e9\u7684\u9879\u76ee\u4ee5\u53ca\u6253\u5f00\u83dc\u5355\u4ee5\u9009\u62e9\u53e6\u4e00\u4e2a\u9879\u76ee\u7684\u7bad\u5934\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/input/dropdown"},"live \u793a\u4f8b")),(0,l.kt)("h3",{id:"\u57fa\u672c\u4e0b\u62c9"},"\u57fa\u672c\u4e0b\u62c9"),(0,l.kt)(a.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    def button_clicked(e):\n        t.value = f"Dropdown value is:  {dd.value}"\n        page.update()\n\n    t = ft.Text()\n    b = ft.ElevatedButton(text="Submit", on_click=button_clicked)\n    dd = ft.Dropdown(\n        width=100,\n        options=[\n            ft.dropdown.Option("Red"),\n            ft.dropdown.Option("Green"),\n            ft.dropdown.Option("Blue"),\n        ],\n    )\n    page.add(dd, b, t)\n\nft.app(target=main)\n')))),(0,l.kt)("img",{src:"/img/docs/controls/dropdown/basic-dropdown.gif",className:"screenshot-30"}),(0,l.kt)("h3",{id:"dropdown-with-label-and-hint"},"Dropdown with label and hint"),(0,l.kt)(a.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.add(\n        ft.Dropdown(\n            label="Color",\n            hint_text="Choose your favourite color?",\n            options=[\n                ft.dropdown.Option("Red"),\n                ft.dropdown.Option("Green"),\n                ft.dropdown.Option("Blue"),\n            ],\n            autofocus=True,\n        )\n    )\n\nft.app(target=main)\n')))),(0,l.kt)("img",{src:"/img/docs/controls/dropdown/dropdown-with-custom-content.gif",className:"screenshot-30"}),(0,l.kt)("h3",{id:"dropdown-with-on_change-event"},"Dropdown with ",(0,l.kt)("inlineCode",{parentName:"h3"},"on_change")," event"),(0,l.kt)(a.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    def dropdown_changed(e):\n        t.value = f"Dropdown changed to {dd.value}"\n        page.update()\n\n    t = ft.Text()\n    dd = ft.Dropdown(\n        on_change=dropdown_changed,\n        options=[\n            ft.dropdown.Option("Red"),\n            ft.dropdown.Option("Green"),\n            ft.dropdown.Option("Blue"),\n        ],\n        width=200,\n    )\n    page.add(dd, t)\n\nft.app(target=main)\n')))),(0,l.kt)("img",{src:"/img/docs/controls/dropdown/dropdown-with-change-event.gif",className:"screenshot-30"}),(0,l.kt)("h3",{id:"change-items-in-dropdown-options"},"Change items in dropdown options"),(0,l.kt)(a.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    def find_option(option_name):\n        for option in d.options:\n            if option_name == option.key:\n                return option\n        return None\n\n    def add_clicked(e):\n        d.options.append(ft.dropdown.Option(option_textbox.value))\n        d.value = option_textbox.value\n        option_textbox.value = ""\n        page.update()\n\n    def delete_clicked(e):\n        option = find_option(d.value)\n        if option != None:\n            d.options.remove(option)\n            # d.value = None\n            page.update()\n\n    d = ft.Dropdown()\n    option_textbox = ft.TextField(hint_text="Enter item name")\n    add = ft.ElevatedButton("Add", on_click=add_clicked)\n    delete = ft.OutlinedButton("Delete selected", on_click=delete_clicked)\n    page.add(d, ft.Row(controls=[option_textbox, add, delete]))\n\nft.app(target=main)\n')))),(0,l.kt)("img",{src:"/img/docs/controls/dropdown/dropdown-with-add-and-delete.gif",className:"screenshot-40"}),(0,l.kt)("h2",{id:"dropdown-properties"},(0,l.kt)("inlineCode",{parentName:"h2"},"Dropdown")," properties"),(0,l.kt)("h3",{id:"alignment"},(0,l.kt)("inlineCode",{parentName:"h3"},"alignment")),(0,l.kt)("p",null,"\u5b9a\u4e49\u63d0\u793a\u6216\u6240\u9009\u9879\u76ee\u7684\u5b9a\u4f4d\u5728\u4e0b\u62c9\u5217\u8868\u4e2d\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u53ef\u80fd\u7684\u503c\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/docs/controls/container#alignment"},(0,l.kt)("inlineCode",{parentName:"a"},"Container.alignment")),"\u5c5e\u6027\u3002"),(0,l.kt)("h3",{id:"autofocus"},(0,l.kt)("inlineCode",{parentName:"h3"},"autofocus")),(0,l.kt)("p",null,"\u5982\u679c\u5c06\u63a7\u4ef6\u9009\u62e9\u4f5c\u4e3a\u521d\u59cb\u7126\u70b9\uff0c\u5219\u4e3a thus\u3002 \u5982\u679c\u4e00\u4e2a\u5e26\u6709\u81ea\u52a8\u5bf9\u7126\u96c6\u7684\u9875\u9762\u4e0a\u6709\u591a\u4e2a\u63a7\u4ef6\uff0c\u5219\u6dfb\u52a0\u5230\u9875\u9762\u7684\u7b2c\u4e00\u4e2a\u5c06\u83b7\u5f97\u7126\u70b9\u3002"),(0,l.kt)("h3",{id:"bgcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"bgcolor")),(0,l.kt)("p",null,"\u4e0b\u62c9\u80cc\u666f",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u3002"),(0,l.kt)("h3",{id:"border"},(0,l.kt)("inlineCode",{parentName:"h3"},"border")),(0,l.kt)("p",null,"\u8f93\u5165\u5468\u56f4\u7684\u8fb9\u754c - ",(0,l.kt)("inlineCode",{parentName:"p"},"InputBorder"),"\u679a\u4e3e\u5177\u6709\u4e00\u4e2a\u503c\u4e4b\u4e00: ",(0,l.kt)("inlineCode",{parentName:"p"},"OUTLINE"),"\uff08\u9ed8\u8ba4\uff09\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"UNDERLINE"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"NONE"),"\u3002"),(0,l.kt)("h3",{id:"border_color-border_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"border_color")," ",(0,l.kt)("inlineCode",{parentName:"h3"},"border_color")),(0,l.kt)("p",null,"\u8fb9\u6846",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u3002 \u53ef\u4ee5\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"transparent"),"\u9690\u85cf\u8fb9\u6846\u3002"),(0,l.kt)("h3",{id:"border_radius"},(0,l.kt)("inlineCode",{parentName:"h3"},"border_radius")),(0,l.kt)("p",null,"\u6709\u5173\u8fb9\u754c\u534a\u5f84\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1","[",(0,l.kt)("inlineCode",{parentName:"p"},"Container.border_radius"),"]","\u5c5e\u6027\u6587\u6863\u3002"),(0,l.kt)("h3",{id:"border_width"},(0,l.kt)("inlineCode",{parentName:"h3"},"border_width")),(0,l.kt)("p",null,"\u5728\u865a\u62df\u50cf\u7d20\u4e2d\u8fb9\u754c\u7684\u5bbd\u5ea6\u3002 \u9ed8\u8ba4\u503c\u4e3a 1\u3002\u8bbe\u7f6e\u4e3a 0 \u4ee5\u5b8c\u5168\u5220\u9664\u8fb9\u6846\u3002"),(0,l.kt)("h3",{id:"color"},(0,l.kt)("inlineCode",{parentName:"h3"},"color")),(0,l.kt)("p",null,"\u6587\u672c",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u3002"),(0,l.kt)("h3",{id:"content_padding"},(0,l.kt)("inlineCode",{parentName:"h3"},"content_padding")),(0,l.kt)("p",null,"\u8f93\u5165\u88c5\u9970\u5bb9\u5668\u7684\u586b\u5145\u3002"),(0,l.kt)("h3",{id:"counter_style"},(0,l.kt)("inlineCode",{parentName:"h3"},"counter_style")),(0,l.kt)("p",null,"\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"counter_text"),"\u7684\u6837\u5f0f\u3002"),(0,l.kt)("h3",{id:"counter_text"},(0,l.kt)("inlineCode",{parentName:"h3"},"counter_text")),(0,l.kt)("p",null,"\u53ef\u9009\u7684\u6587\u672c\u4ee5\u4f5c\u4e3a\u89d2\u8272\u6570\u4f5c\u4e3a\u5b57\u7b26\u8ba1\u6570\u4e0b\u65b9\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u672a\u6307\u5b9a\u7a7a\u5b57\u7b26\u4e32\u548c\u8ba1\u6570\u5668\uff0c\u5219\u5728\u8ba1\u6570\u5668\u7684\u4f4d\u7f6e\u4e2d\u4e0d\u4f1a\u51fa\u73b0\u4efb\u4f55\u5185\u5bb9\u3002"),(0,l.kt)("h3",{id:"dense"},(0,l.kt)("inlineCode",{parentName:"h3"},"dense")),(0,l.kt)("p",null,"Textfield \u662f\u5426\u662f\u5bc6\u96c6\u5f62\u5f0f\u7684\u4e00\u90e8\u5206\uff08\u5373\u4f7f\u7528\u8f83\u5c11\u7684\u5782\u76f4\u7a7a\u95f4\uff09\u3002"),(0,l.kt)("h3",{id:"error_style"},(0,l.kt)("inlineCode",{parentName:"h3"},"error_style")),(0,l.kt)("p",null,"\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"error_text"),"\u7684\u6837\u5f0f\u3002"),(0,l.kt)("h3",{id:"error_text"},(0,l.kt)("inlineCode",{parentName:"h3"},"error_text")),(0,l.kt)("p",null,"\u51fa\u73b0\u5728\u8f93\u5165\u8fb9\u6846\u4e0b\u65b9\u7684\u6587\u672c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u975e\u65e0\u6548\uff0c\u5219\u8fb9\u6846\u7684\u989c\u8272\u4e3a\u7ea2\u8272\u52a8\u753b\uff0c\u672a\u663e\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"helper_text"),"\u3002"),(0,l.kt)("h3",{id:"filled"},(0,l.kt)("inlineCode",{parentName:"h3"},"filled")),(0,l.kt)("p",null,"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"True"),"\u88c5\u9970\u7684\u5bb9\u5668\u5145\u6ee1\u4e86\u4e3b\u9898\u586b\u5145\u3002"),(0,l.kt)("h3",{id:"focused_bgcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"focused_bgcolor")),(0,l.kt)("p",null,"\u80cc\u666f",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u5728\u805a\u7126\u72b6\u6001\u4e0b\u7684\u4e0b\u62c9\u83dc\u5355\u3002"),(0,l.kt)("h3",{id:"focused_border_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"focused_border_color")),(0,l.kt)("p",null,"\u8fb9\u6846",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u4ee5\u805a\u7126\u72b6\u6001\u3002"),(0,l.kt)("h3",{id:"focused_border_width"},(0,l.kt)("inlineCode",{parentName:"h3"},"focused_border_width")),(0,l.kt)("p",null,"\u91cd\u70b9\u72b6\u6001\u7684\u8fb9\u6846\u5bbd\u5ea6\u3002"),(0,l.kt)("h3",{id:"focused_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"focused_color")),(0,l.kt)("p",null,"\u6587\u672c",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u5f53\u4e0b\u62c9\u96c6\u4e2d\u65f6\u3002"),(0,l.kt)("h3",{id:"helper_style"},(0,l.kt)("inlineCode",{parentName:"h3"},"helper_style")),(0,l.kt)("p",null,"\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"helper_text"),"\u7684\u6837\u5f0f\u3002"),(0,l.kt)("h3",{id:"helper_text"},(0,l.kt)("inlineCode",{parentName:"h3"},"helper_text")),(0,l.kt)("p",null,"\u63d0\u4f9b\u6709\u5173\u8f93\u5165\u503c\u7684\u4e0a\u4e0b\u6587\u7684\u6587\u672c\uff0c\u4f8b\u5982\u5982\u4f55\u4f7f\u7528\u8be5\u503c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u975e\u7f16\u53f7\uff0c\u5219\u6587\u672c\u5728\u8f93\u5165\u88c5\u9970\u5668\u4e0b\u65b9\u663e\u793a\u5728\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"error_text"),"\u540c\u4e00\u4f4d\u7f6e\u3002 \u5982\u679c\u6307\u5b9a\u4e86\u975e null ",(0,l.kt)("inlineCode",{parentName:"p"},"error_text"),"\u503c\uff0c\u5219\u672a\u663e\u793a\u8f85\u52a9\u6587\u672c\u3002"),(0,l.kt)("h3",{id:"hint_style"},(0,l.kt)("inlineCode",{parentName:"h3"},"hint_style")),(0,l.kt)("p",null,"\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"hint_text"),"\u7684\u6837\u5f0f\u3002"),(0,l.kt)("h3",{id:"hint_text"},(0,l.kt)("inlineCode",{parentName:"h3"},"hint_text")),(0,l.kt)("p",null,"\u6697\u793a\u8be5\u5b57\u6bb5\u63a5\u53d7\u7684\u8f93\u5165\u7684\u6587\u672c\u3002"),(0,l.kt)("p",null,"\u5728\u8f93\u5165\u4e3a\u7a7a\u65f6\u663e\u793a\u5728\u8f93\u5165\u7684\u9876\u90e8\uff0c\u5e76\u4e14\uff08a\uff09",(0,l.kt)("inlineCode",{parentName:"p"},"label"),"\u4e3a null \u6216\uff08b\uff09\u8f93\u5165\u5177\u6709\u7126\u70b9\u3002"),(0,l.kt)("h3",{id:"icon"},(0,l.kt)("inlineCode",{parentName:"h3"},"icon")),(0,l.kt)("p",null,"\u5728\u8f93\u5165\u5b57\u6bb5\u4e4b\u524d\u548c\u88c5\u9970\u5bb9\u5668\u5916\u90e8\u663e\u793a\u7684\u56fe\u6807\u540d\u79f0\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u586b\u5145\u548c\u53ef\u80fd\u7684\u503c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"container#padding"},(0,l.kt)("inlineCode",{parentName:"a"},"Container.padding")),"\u3002"),(0,l.kt)("h3",{id:"label"},(0,l.kt)("inlineCode",{parentName:"h3"},"label")),(0,l.kt)("p",null,"\u63cf\u8ff0\u8f93\u5165\u5b57\u6bb5\u7684\u53ef\u9009\u6587\u672c\u3002"),(0,l.kt)("p",null,"\u5f53\u8f93\u5165\u5b57\u6bb5\u4e3a\u7a7a\u4e14\u672a\u5173\u6ce8\u65f6\uff0c\u6807\u7b7e\u5c06\u663e\u793a\u5728\u8f93\u5165\u5b57\u6bb5\u7684\u9876\u90e8\uff08\u5373\uff0c\u5728\u5c4f\u5e55\u4e0a\u53ef\u4ee5\u5728\u8f93\u5165\u5b57\u6bb5\u4e2d\u8f93\u5165\u6587\u672c\u7684\u540c\u4e00\u4f4d\u7f6e\uff09\u3002 \u5f53\u8f93\u5165\u5b57\u6bb5\u63a5\u6536\u5230\u7126\u70b9\uff08\u6216\u5982\u679c\u5b57\u6bb5\u662f\u975e\u7a7a\u7684\uff09\u65f6\uff0c\u6807\u7b7e\u5728\u4e0a\u65b9\u79fb\u52a8\uff0c\u5219\u5782\u76f4\u76f8\u90bb\u6216\u8f6c\u79fb\u5230\u8f93\u5165\u5b57\u6bb5\u7684\u4e2d\u5fc3\u3002"),(0,l.kt)("h3",{id:"label_style"},(0,l.kt)("inlineCode",{parentName:"h3"},"label_style")),(0,l.kt)("p",null,"\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"label"),"\u7684\u6837\u5f0f\u3002"),(0,l.kt)("h3",{id:"options"},(0,l.kt)("inlineCode",{parentName:"h3"},"options")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Option"),"\u63a7\u4ef6\u7684\u5217\u8868\u8868\u793a\u4e0b\u62c9\u4e2d\u7684\u9879\u76ee\u3002"),(0,l.kt)("h3",{id:"prefix"},(0,l.kt)("inlineCode",{parentName:"h3"},"prefix")),(0,l.kt)("p",null,"\u53ef\u9009",(0,l.kt)("inlineCode",{parentName:"p"},"Control"),"\u5c06\u8f93\u5165\u524d\u653e\u5728\u7ebf\u4e0a\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u53ef\u4ee5\u5c06\u5176\u6dfb\u52a0\u5230\u6587\u672c\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u586b\u5145\uff0c\u5426\u5219\u5c06\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"prefix_text"),"\u6307\u5b9a\uff0c\u6216\u5728\u8f93\u5165\u524d\u9762\u6dfb\u52a0\u81ea\u5b9a\u4e49\u63a7\u4ef6\u3002 \u63a7\u4ef6\u7684\u57fa\u7ebf\u4e0e\u8f93\u5165\u57fa\u7ebf\u5bf9\u9f50\u3002"),(0,l.kt)("p",null,"\u53ea\u80fd\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"prefix"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"prefix_text"),"\u4e4b\u4e00\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"prefix"),"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"prefix_icon"),"\u4e4b\u540e\u51fa\u73b0\uff0c\u5982\u679c\u4e24\u8005\u90fd\u6307\u5b9a\u3002"),(0,l.kt)("h3",{id:"prefix_icon"},(0,l.kt)("inlineCode",{parentName:"h3"},"prefix_icon")),(0,l.kt)("p",null,"\u51fa\u73b0\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"prefix"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"prefix_text"),"\u4e4b\u524d\u7684\u56fe\u6807\uff0c\u4ee5\u53ca\u5728\u88c5\u9970\u5bb9\u5668\u4e2d\u7684\u6587\u672c\u5b57\u6bb5\u7684\u53ef\u7f16\u8f91\u90e8\u5206\u3002"),(0,l.kt)("h3",{id:"prefix_style"},(0,l.kt)("inlineCode",{parentName:"h3"},"prefix_style")),(0,l.kt)("p",null,"\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"prefix_text"),"\u7684\u6837\u5f0f\u3002"),(0,l.kt)("h3",{id:"prefix_text"},(0,l.kt)("inlineCode",{parentName:"h3"},"prefix_text")),(0,l.kt)("p",null,"\u53ef\u9009\u6587\u672c",(0,l.kt)("inlineCode",{parentName:"p"},"prefix"),"\u5c06\u8f93\u5165\u524d\u653e\u5728\u7ebf\u4e0a\u3002"),(0,l.kt)("h3",{id:"suffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"suffix")),(0,l.kt)("p",null,"\u53ef\u9009",(0,l.kt)("inlineCode",{parentName:"p"},"Control"),"\u5c06\u8f93\u5165\u540e\u653e\u7f6e\u5728\u7ebf\u4e0a\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u53ef\u4ee5\u5c06\u5176\u7528\u4e8e\u5728\u6587\u672c\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u586b\u5145\uff0c\u5426\u5219\u5c06\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"suffix_text"),"\u6307\u5b9a\uff0c\u6216\u5728\u8f93\u5165\u540e\u6dfb\u52a0\u81ea\u5b9a\u4e49\u63a7\u4ef6\u3002 \u63a7\u4ef6\u7684\u57fa\u7ebf\u4e0e\u8f93\u5165\u57fa\u7ebf\u5bf9\u9f50\u3002"),(0,l.kt)("p",null,"\u53ea\u80fd\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"suffix"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"suffix_text"),"\u4e4b\u4e00\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"suffix"),"\u5982\u679c\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"suffix_icon"),"\u4e4b\u524d\u51fa\u73b0\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"suffix_icon"),"\u4e4b\u524d\u3002"),(0,l.kt)("h3",{id:"suffix_icon"},(0,l.kt)("inlineCode",{parentName:"h3"},"suffix_icon")),(0,l.kt)("p",null,"\u5728\u6587\u672c\u5b57\u6bb5\u7684\u53ef\u7f16\u8f91\u90e8\u5206\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"suffix"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"suffix_text"),"\u4e4b\u540e\u51fa\u73b0\u7684\u56fe\u6807\u3002"),(0,l.kt)("h3",{id:"317771"},"{317771}"),(0,l.kt)("p",null,"\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"suffix_text"),"\u7684\u6837\u5f0f\u3002"),(0,l.kt)("h3",{id:"suffix_text"},(0,l.kt)("inlineCode",{parentName:"h3"},"suffix_text")),(0,l.kt)("p",null,"\u53ef\u9009\u6587\u672c",(0,l.kt)("inlineCode",{parentName:"p"},"suffix"),"\u5c06\u8f93\u5165\u4e4b\u540e\u653e\u5728\u7ebf\u4e0a\u3002"),(0,l.kt)("h3",{id:"text_size"},(0,l.kt)("inlineCode",{parentName:"h3"},"text_size")),(0,l.kt)("p",null,"\u865a\u62df\u50cf\u7d20\u4e2d\u7684\u6587\u672c\u5927\u5c0f\u3002"),(0,l.kt)("h3",{id:"text_style"},(0,l.kt)("inlineCode",{parentName:"h3"},"text_style")),(0,l.kt)("p",null,"\u5728\u4e0b\u62c9\u6309\u94ae\u4e2d\u4f7f\u7528\u6587\u672c\u7684\u6587\u672c\u6837\u5f0f\u548c\u70b9\u51fb\u6309\u94ae\u65f6\u51fa\u73b0\u7684\u4e0b\u62c9\u83dc\u5355\u3002"),(0,l.kt)("h3",{id:"value"},(0,l.kt)("inlineCode",{parentName:"h3"},"value")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"key"),"\u6240\u9009\u9009\u9879\u7684\u503c\u3002"),(0,l.kt)("h2",{id:"dropdown\u65b9\u6cd5"},(0,l.kt)("inlineCode",{parentName:"h2"},"Dropdown"),"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"focus"},(0,l.kt)("inlineCode",{parentName:"h3"},"focus()")),(0,l.kt)("p",null,"\u5c06\u91cd\u70b9\u653e\u5728\u4e0b\u62c9\u5217\u8868\u4e2d\u3002"),(0,l.kt)("h2",{id:"dropdown\u4e8b\u4ef6"},(0,l.kt)("inlineCode",{parentName:"h2"},"Dropdown"),"\u4e8b\u4ef6"),(0,l.kt)("h3",{id:"on_blur"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_blur")),(0,l.kt)("p",null,"\u5f53\u63a7\u4ef6\u5931\u53bb\u7126\u70b9\u65f6\u4f1a\u53d1\u5c04\u3002"),(0,l.kt)("h3",{id:"on_change"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_change")),(0,l.kt)("h3",{id:"on_focus\u7684\u9009\u5b9a\u9879\u76ee\u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u53d1\u5c04"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_focus"),"\u7684\u9009\u5b9a\u9879\u76ee\u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u53d1\u5c04\u3002"),(0,l.kt)("p",null,"\u5f53\u63a7\u4ef6\u5df2\u63a5\u6536\u5230\u7126\u70b9\u65f6\u53d1\u5c04\u3002"),(0,l.kt)("h2",{id:"option\u5c5e\u6027"},(0,l.kt)("inlineCode",{parentName:"h2"},"Option"),"\u5c5e\u6027"),(0,l.kt)("h3",{id:"key"},(0,l.kt)("inlineCode",{parentName:"h3"},"key")),(0,l.kt)("p",null,"\u9009\u9879\u7684\u952e\u3002 \u5982\u679c\u672a\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"\uff0c\u5219\u5c06\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"text"),"\u503c\u3002"),(0,l.kt)("h3",{id:""}),(0,l.kt)("h3",{id:"text"},(0,l.kt)("inlineCode",{parentName:"h3"},"text")),(0,l.kt)("p",null,"\u9009\u9879\u7684\u663e\u793a\u6587\u672c\u3002 \u5982\u679c\u672a\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"text"),"\uff0c\u5219\u5c06\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"\u503c\u3002"))}h.isMDXComponent=!0}}]);