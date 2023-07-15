"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[3816],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),l=n(6550),s=n(1980),u=n(7392),d=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function f(e){var t,n,a,i,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=c(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),g=f[0],v=f[1],b=h({queryString:s,groupId:u}),k=b[0],y=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=N[0],C=N[1],A=function(){var e=null!=k?k:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){A&&v(A)}),[A]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),C(e)}),[y,C,p]),tabValues:p}}var g=n(2389),v="tabList__CuJ",b="tabItem_LNqP";function k(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,d=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=d.indexOf(e.currentTarget)+1;n=null!=(a=d[r])?a:d[0];break;case"ArrowLeft":var i,o=d.indexOf(e.currentTarget)-1;n=null!=(i=d[o])?i:d[d.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return d.push(e)},onKeyDown:m,onClick:c},o,{className:(0,i.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},7851:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(4866),l=n(5162),s=["components"],u={title:"Image",sidebar_label:"Image",slug:"image"},d=void 0,p={unversionedId:"controls/image",id:"controls/image",title:"Image",description:"An image is a graphic representation of something (e.g photo or illustration).",source:"@site/docs/controls/image.md",sourceDirName:"controls",slug:"/controls/image",permalink:"/docs/controls/image",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/image.md",tags:[],version:"current",frontMatter:{title:"Image",sidebar_label:"Image",slug:"image"},sidebar:"docs",previous:{title:"Icon",permalink:"/docs/controls/icon"},next:{title:"Markdown",permalink:"/docs/controls/markdown"}},c={},m=[{value:"Examples",id:"examples",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>border_radius</code>",id:"border_radius",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>color_blend_mode</code>",id:"color_blend_mode",level:3},{value:"<code>error_content</code>",id:"error_content",level:3},{value:"<code>fit</code>",id:"fit",level:3},{value:"<code>gapless_playback</code>",id:"gapless_playback",level:3},{value:"<code>height</code>",id:"height",level:3},{value:"<code>src</code>",id:"src",level:3},{value:"<code>src_base64</code>",id:"src_base64",level:3},{value:"<code>repeat</code>",id:"repeat",level:3},{value:"<code>semantics_label</code>",id:"semantics_label",level:3},{value:"<code>tooltip</code>",id:"tooltip",level:3},{value:"<code>width</code>",id:"width",level:3}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An image is a graphic representation of something (e.g photo or illustration)."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/displays/image"},"Live example")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Images Example"\n    page.theme_mode = ft.ThemeMode.LIGHT\n    page.padding = 50\n    page.update()\n\n    img = ft.Image(\n        src=f"/icons/icon-512.png",\n        width=100,\n        height=100,\n        fit=ft.ImageFit.CONTAIN,\n    )\n    images = ft.Row(expand=1, wrap=False, scroll="always")\n\n    page.add(img, images)\n\n    for i in range(0, 30):\n        images.controls.append(\n            ft.Image(\n                src=f"https://picsum.photos/200/200?{i}",\n                width=200,\n                height=200,\n                fit=ft.ImageFit.NONE,\n                repeat=ft.ImageRepeat.NO_REPEAT,\n                border_radius=ft.border_radius.all(10),\n            )\n        )\n    page.update()\n\nft.app(target=main)\n')))),(0,i.kt)("img",{src:"/img/docs/controls/image/custom-images.gif",className:"screenshot-50"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"border_radius"},(0,i.kt)("inlineCode",{parentName:"h3"},"border_radius")),(0,i.kt)("p",null,"Clip image to have rounded corners. See ",(0,i.kt)("a",{parentName:"p",href:"container#border_radius"},(0,i.kt)("inlineCode",{parentName:"a"},"Container.border_radius"))," for more information and examples."),(0,i.kt)("h3",{id:"color"},(0,i.kt)("inlineCode",{parentName:"h3"},"color")),(0,i.kt)("p",null,"If set, this ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"color")," is blended with each image pixel using ",(0,i.kt)("inlineCode",{parentName:"p"},"color_blend_mode"),"."),(0,i.kt)("h3",{id:"color_blend_mode"},(0,i.kt)("inlineCode",{parentName:"h3"},"color_blend_mode")),(0,i.kt)("p",null,"Used to combine ",(0,i.kt)("inlineCode",{parentName:"p"},"color")," with the image."),(0,i.kt)("p",null,"The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"BlendMode.COLOR"),". In terms of the blend mode, color is the source and this image is the destination."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"shadermask#blend_mode"},(0,i.kt)("inlineCode",{parentName:"a"},"ShaderMask.blend_mode"))," for possible blend mode values."),(0,i.kt)("h3",{id:"error_content"},(0,i.kt)("inlineCode",{parentName:"h3"},"error_content")),(0,i.kt)("p",null,"Fallback ",(0,i.kt)("inlineCode",{parentName:"p"},"Control")," to display if the image cannot be loaded from the source."),(0,i.kt)("h3",{id:"fit"},(0,i.kt)("inlineCode",{parentName:"h3"},"fit")),(0,i.kt)("p",null,"How to inscribe the image into the space allocated during layout."),(0,i.kt)("p",null,"Property value is ",(0,i.kt)("inlineCode",{parentName:"p"},"ImageFit")," enum with supported values: ",(0,i.kt)("inlineCode",{parentName:"p"},"NONE")," (default), ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTAIN"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"COVER"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FILL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FIT_HEIGHT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FIT_WIDTH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SCALE_DOWN"),"."),(0,i.kt)("h3",{id:"gapless_playback"},(0,i.kt)("inlineCode",{parentName:"h3"},"gapless_playback")),(0,i.kt)("p",null,"Whether to continue showing the old image (",(0,i.kt)("inlineCode",{parentName:"p"},"True"),"), or briefly show nothing (",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"), when the image provider changes. The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,i.kt)("h3",{id:"height"},(0,i.kt)("inlineCode",{parentName:"h3"},"height")),(0,i.kt)("p",null,"If set, require the image to have this height."),(0,i.kt)("p",null,"If not set, the image will pick a size that best preserves its intrinsic aspect ratio."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is strongly recommended that either both the width and the height be specified, or that the Image be placed in a context that sets tight layout constraints, so that the image does not change size as it loads. Consider using ",(0,i.kt)("inlineCode",{parentName:"p"},"fit")," to adapt the image's rendering to fit the given width and height if the exact image dimensions are not known in advance.")),(0,i.kt)("h3",{id:"src"},(0,i.kt)("inlineCode",{parentName:"h3"},"src")),(0,i.kt)("p",null,"Image URL. This could be an external URL, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"https://picsum.photos/200/200")," or internal URL to reference app assets, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"/my-image.png"),"."),(0,i.kt)("p",null,"You can specify ",(0,i.kt)("inlineCode",{parentName:"p"},"assets_dir")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"flet.app()")," call to set the location of assets that should be available to the application. ",(0,i.kt)("inlineCode",{parentName:"p"},"assets_dir")," could be a relative to your ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," directory or an absolute path. For example, consider the following program structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/assets\n   /images/my-image.png\nmain.py\n")),(0,i.kt)("p",null,"You can access your images in the application as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"{5,9}","{5,9}":!0},'import flet as ft\n\ndef main(page: ft.Page):\n    page.add(ft.Image(src=f"/images/my-image.png"))\n\nflet.app(\n    target=main,\n    assets_dir="assets"\n)\n')),(0,i.kt)("h3",{id:"src_base64"},(0,i.kt)("inlineCode",{parentName:"h3"},"src_base64")),(0,i.kt)("p",null,"Displays an image from Base-64 encoded string, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    page.add(ft.Image(src_base64="iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAYAAADnnNMGAAAACXBIWXMAAAORAAADkQFnq8zdAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA6dJREFUSImllltoHFUYx3/fzOzm0lt23ZrQ1AQbtBehNpvQohgkBYVo410RwQctNE3Sh0IfiiBoIAjqi6TYrKnFy4O3oiiRavDJFi3mXomIBmOxNZe63ay52GR3Zj4f2sTEzmx3m//TYf7/c35zvgPnO6KqrESXqpq3muocAikv6m+/zytj3ejik1VN21G31YA9CgJ6xC+bMyQZPVCuarciPAMYC99V6Vw5pLbFSibHmlVoRVj9P3cmPBM8tSJI/M6mzabpfoAQ9fIF7WK4bd5vvuFnLGgy2vi0abg94A0AcJGvMq3hDxGRyar9r4F+iLAm0yIiRk8m37tctS1WsrIhhrI30+Srmg+J87OXUf3lWGS1q89dC6ltsSanxk4Aj2QBABii96300g87P/rtlrWr8l+vyDMfdlXSyyEikqxsiOUAQJCBhfHdXRfCq1LSsSlcWG+KBAGStvvrMkgiuv8lUc2mREukPwLUfHG+uTQv8Eown7VL3XlbBxYhf1c17hbVF3MDwA9bts280TnaU1YYqPby07aeFlUlHt27wSQ4CLo+F8AvoTCvHmyKF+ZbEb/M77P2LgvAwmrTHAHflN3KZxVbMC2jMFNOpgPnrMSOhvvFkMezXdwV4ePbtvHtxnJAMQ0j4JtVnO+eLb5oiSlt5HDbv7t1O90lpYCCCKbhfzW5kAIwUAazR0BlfII8Ow0I6uoVmI9MyAMwbMs8CExmDbk4zgu931MyO4OI4KrYflkRjOoTI+uM9d1vjotwKPu9QMk/sxzuO8POiVFcdZ1M2YBVsMEAKOqLvaPIe7mACuw0z/80SMH58SMplxlfiDhVi7dw2pltRhjKBQTQdrSja2KKTfE551NHuaZ0QVPvWYQUn31/Vm2nDvgjF4grVJx6suSvrvrSJ/6cSW2Oz9mf264uNrB806xZ1k/CZ49dUKgDEtlCROX2hfHpx8pGuuo3PpqYulw8fjndOp1yhgtNKRevJ1FyR2Ola+jXAjdnwTkZ6o896GdWdxDw7IxFg+0DpmXchTKSBWQnIuJn9u4j7dt+13UfHXEkXQOcuQ4kMhVtqsgUyPiQiPQfHw1NB2sRjmXKuTg1NwwBYLhtPtQX26eqTwGXPDOqvmcC4Hnwfrrad94GrVsOYTqUTkQY+iTlNe/6O1miSP/x0VB/+wMIDwHn/vtV1iQC4Xv95uUEWVCoL9Y5Z+gdovoyMHUFJHv88jmVy0vTuw7cZNv2YaA61Bfb7ZX5F8SaUv2xwZevAAAAAElFTkSuQmCC"))\n\nft.app(target=main)\n')),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"base64")," command (Linux, macOS, WSL) to convert file to Base64 format, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"base64 -i <image.png> -o <image-base64.txt>\n")),(0,i.kt)("p",null,"On Windows you can use PowerShell to encode string into Base64 format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-posh"},'[convert]::ToBase64String((Get-Content -path "your_file_path" -Encoding byte))\n')),(0,i.kt)("h3",{id:"repeat"},(0,i.kt)("inlineCode",{parentName:"h3"},"repeat")),(0,i.kt)("p",null,"How to paint any portions of the layout bounds not covered by the image."),(0,i.kt)("p",null,"Property value is ",(0,i.kt)("inlineCode",{parentName:"p"},"ImageRepeat")," enum with supported values: ",(0,i.kt)("inlineCode",{parentName:"p"},"NO_REPEAT")," (default), ",(0,i.kt)("inlineCode",{parentName:"p"},"REPEAT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"REPEAT_X"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"REPEAT_Y"),"."),(0,i.kt)("h3",{id:"semantics_label"},(0,i.kt)("inlineCode",{parentName:"h3"},"semantics_label")),(0,i.kt)("p",null,"A semantics label for this image."),(0,i.kt)("h3",{id:"tooltip"},(0,i.kt)("inlineCode",{parentName:"h3"},"tooltip")),(0,i.kt)("p",null,"The text displayed when hovering a mouse over the Image."),(0,i.kt)("h3",{id:"width"},(0,i.kt)("inlineCode",{parentName:"h3"},"width")),(0,i.kt)("p",null,"If set, require the image to have this width."),(0,i.kt)("p",null,"If not set, the image will pick a size that best preserves its intrinsic aspect ratio."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is strongly recommended that either both the width and the height be specified, or that the Image be placed in a context that sets tight layout constraints, so that the image does not change size as it loads. Consider using ",(0,i.kt)("inlineCode",{parentName:"p"},"fit")," to adapt the image's rendering to fit the given width and height if the exact image dimensions are not known in advance.")))}f.isMDXComponent=!0}}]);