"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[5306],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return u}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(o),h=r,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||l;return o?n.createElement(u,a(a({ref:t},p),{},{components:o})):n.createElement(u,a({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4121:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=o(7462),r=o(3366),l=(o(7294),o(3905)),a=["components"],i={title:"Colors",sidebar_label:"Colors"},c=void 0,s={unversionedId:"guides/python/colors",id:"guides/python/colors",title:"Colors",description:"Color value",source:"@site/docs/guides/python/colors.md",sourceDirName:"guides/python",slug:"/guides/python/colors",permalink:"/website/docs/guides/python/colors",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/colors.md",tags:[],version:"current",frontMatter:{title:"Colors",sidebar_label:"Colors"},sidebar:"docs",previous:{title:"Keyboard shortcuts",permalink:"/website/docs/guides/python/keyboard-shortcuts"},next:{title:"Large lists",permalink:"/website/docs/guides/python/large-lists"}},p={},m=[{value:"Color value",id:"color-value",level:2},{value:"Hex value",id:"hex-value",level:3},{value:"Named colors",id:"named-colors",level:3},{value:"Theme colors",id:"theme-colors",level:4},{value:"Color palettes",id:"color-palettes",level:4},{value:"Color opacity",id:"color-opacity",level:2},{value:"Defining colors for Flet controls",id:"defining-colors-for-flet-controls",level:2},{value:"Control level",id:"control-level",level:3},{value:"Control Theme level",id:"control-theme-level",level:3},{value:"Theme level",id:"theme-level",level:3}],d={toc:m};function h(e){var t=e.components,o=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("img",{src:"/img/docs/colors/color_palettes.png",className:"screenshot-100"}),(0,l.kt)("h2",{id:"color-value"},"Color value"),(0,l.kt)("p",null,"There are 2 ways to define color property value in Flet: hex value and named colors."),(0,l.kt)("h3",{id:"hex-value"},"Hex value"),(0,l.kt)("p",null,"Hex value should be in format ",(0,l.kt)("inlineCode",{parentName:"p"},"#aarrggbb")," (",(0,l.kt)("inlineCode",{parentName:"p"},"0xaarrggbb"),") or ",(0,l.kt)("inlineCode",{parentName:"p"},"#rrggbb")," (",(0,l.kt)("inlineCode",{parentName:"p"},"0xeeggbb"),"). In case ",(0,l.kt)("inlineCode",{parentName:"p"},"aa")," (",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors#color-opacity"},"opacity"),") is omitted, it is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"ff")," (not transparent)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"c1 = ft.Container(bgcolor='#ff0000')\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/colors/controlcolors"},"Live example")),(0,l.kt)("h3",{id:"named-colors"},"Named colors"),(0,l.kt)("p",null,"Named colors are the Material Design ",(0,l.kt)("a",{parentName:"p",href:"https://m3.material.io/styles/color/the-color-system/color-roles"},"theme colors")," and ",(0,l.kt)("a",{parentName:"p",href:"https://m2.material.io/design/color/the-color-system.html#color-usage-and-palettes"},"colors palettes"),". They can be set with a string value or using flet.colors module."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"c1 = ft.Container(bgcolor=ft.colors.YELLOW)\nc2 = ft.Container(bgcolor='yellow')\n")),(0,l.kt)("h4",{id:"theme-colors"},"Theme colors"),(0,l.kt)("img",{src:"/img/docs/colors/theme_colors.png",className:"screenshot-100"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/colors/themecolors"},"Live Example")),(0,l.kt)("p",null,"There are 30 named theme colors in ",(0,l.kt)("a",{parentName:"p",href:"/docs/controls/page#colorscheme-class"},(0,l.kt)("inlineCode",{parentName:"a"},"theme.color_scheme"))," that are are generated based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"color_scheme_seed"),' property. The default seed color value is "blue".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# example for generating page theme colors based on the seed color\npage.theme = theme.Theme(color_scheme_seed='green')\npage.update()\n")),(0,l.kt)("p",null,"Any of the 30 colors can be overridden, in which case they will have an absolute value that will not be dependent on the seed color."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"page.theme = ft.Theme(\n    color_scheme=ft.ColorScheme(\n        primary=ft.colors.GREEN,\n        primary_container=ft.colors.GREEN_200\n        # ...\n    ),\n)\n")),(0,l.kt)("img",{src:"/img/docs/colors/theme_colors_green.png",className:"screenshot-100"}),(0,l.kt)("p",null,"Theme colors define fallback colors for most of Flet controls."),(0,l.kt)("h4",{id:"color-palettes"},"Color palettes"),(0,l.kt)("img",{src:"/img/docs/colors/color_palettes_2.png",className:"screenshot-100"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/colors/colorspalettes"},"Live example")),(0,l.kt)("p",null,"Originally created by Material Design in 2014, color palettes are comprised of colors designed to work together harmoniously. "),(0,l.kt)("p",null,"Color swatches (palettes) consist of different shades of a certain color. Most swatches have shades from ",(0,l.kt)("inlineCode",{parentName:"p"},"100")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"900")," in increments of one hundred, plus the color ",(0,l.kt)("inlineCode",{parentName:"p"},"50"),". The smaller the number, the more pale the color. The greater the number, the darker the color. The accent swatches (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"redAccent"),") only have the values ",(0,l.kt)("inlineCode",{parentName:"p"},"100"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"200"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"400"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"700"),"."),(0,l.kt)("p",null,"In addition, a series of blacks and whites with common opacities are available. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"black54")," is a pure black with 54% opacity."),(0,l.kt)("p",null,"Palette colors can be used for setting individual controls color property or as a seed color for generating Theme colors."),(0,l.kt)("h2",{id:"color-opacity"},"Color opacity"),(0,l.kt)("p",null,"You can specify opacity for any color (hex value or named) using ",(0,l.kt)("inlineCode",{parentName:"p"},"with_opacity")," method. Opacity value should be between ",(0,l.kt)("inlineCode",{parentName:"p"},"0.0")," (completely transparent) and ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0")," (not transparent)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"color = ft.colors.with_opacity(0.5, ft.colors.PRIMARY)\ncolor = ft.colors.with_opacity(0.5, '#ff6666')\n")),(0,l.kt)("p",null,"Another way to specify opacity for string value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'color = "surface,0.5"\n')),(0,l.kt)("p",null,"For hex value, you can specify ",(0,l.kt)("inlineCode",{parentName:"p"},"aa")," channel with values between ",(0,l.kt)("inlineCode",{parentName:"p"},"00")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ff"),", for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'color = "#7fff6666"\n')),(0,l.kt)("h2",{id:"defining-colors-for-flet-controls"},"Defining colors for Flet controls"),(0,l.kt)("p",null,"Most Flet controls have default colors defined by the ",(0,l.kt)("inlineCode",{parentName:"p"},"color_scheme")," that can be overridden on different levels."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/colors/controlcolors"},"Live example")),(0,l.kt)("img",{src:"/img/docs/colors/colors_fallback.svg",className:"screenshot-80"}),(0,l.kt)("h3",{id:"control-level"},"Control level"),(0,l.kt)("p",null,"If the color is defined on the control level, it will be used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"c = ft.Container(width=100, height=100, bgcolor=ft.colors.GREEN_200)\n")),(0,l.kt)("p",null,"Not every Flet control has a color property that can be set on the control level. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"FilledButton"),' always has a default "primary" color defined by the nearest ancestor\'s ',(0,l.kt)("inlineCode",{parentName:"p"},"theme"),"."),(0,l.kt)("h3",{id:"control-theme-level"},"Control Theme level"),(0,l.kt)("p",null,"For ",(0,l.kt)("inlineCode",{parentName:"p"},"ScrollBar")," (used in scrollable controls: ",(0,l.kt)("inlineCode",{parentName:"p"},"Page"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"View"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Column"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Row"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ListView")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"GridView"),"), ",(0,l.kt)("inlineCode",{parentName:"p"},"Tabs")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Text")," controls, Flet will check if the ",(0,l.kt)("a",{parentName:"p",href:"/blog/scrolling-controls-and-theming#nested-themes"},"nearest anscestor")," theme has ",(0,l.kt)("a",{parentName:"p",href:"/blog/scrolling-controls-and-theming#scrollbar-theme"},"ScrollBar Theme"),", ",(0,l.kt)("a",{parentName:"p",href:"/blog/scrolling-controls-and-theming#tabs-theming"},"Tabs theme")," or ",(0,l.kt)("a",{parentName:"p",href:"/blog/scrolling-controls-and-theming#text-theming"},"Text theme")," specified."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you need to change theme for a particular ScrollBar, Text or Tabs control, you can wrap this control in a Container and customize ",(0,l.kt)("inlineCode",{parentName:"p"},"scrollbar_theme"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"text_theme")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"tabs_theme")," for this Container ",(0,l.kt)("inlineCode",{parentName:"p"},"theme"),".")),(0,l.kt)("h3",{id:"theme-level"},"Theme level"),(0,l.kt)("p",null,"Flet will check for the nearest ancestor that has ",(0,l.kt)("inlineCode",{parentName:"p"},"theme")," defined, and will take color from the ",(0,l.kt)("inlineCode",{parentName:"p"},"ColorScheme"),". In the example below, the nearest anscestor for the ",(0,l.kt)("inlineCode",{parentName:"p"},"FilledButton")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"Container"),", and the ",(0,l.kt)("inlineCode",{parentName:"p"},"primary")," color that is used for the button will be taken from the Container's ",(0,l.kt)("inlineCode",{parentName:"p"},"theme"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):          \n    \n    container = ft.Container(\n        width=200,\n        height=200,\n        border=ft.border.all(1, ft.colors.BLACK),\n        content=ft.FilledButton("Primary color"),\n        theme=ft.Theme(color_scheme=ft.ColorScheme(primary=ft.colors.YELLOW)))\n    \n    page.add(container)\n\nft.app(target=main)   \n')),(0,l.kt)("p",null,"If control's color property, control-specific theme or nearest ancestor's theme is not specified, the nearest ancestor will be the page and the colors from the default page ",(0,l.kt)("inlineCode",{parentName:"p"},"color_scheme")," will be used."))}h.isMDXComponent=!0}}]);