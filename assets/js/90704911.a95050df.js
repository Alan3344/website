"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[93],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(u,".").concat(p)]||d[p]||f[p]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(7462),a=n(7294),i=n(6010),o=n(2466),l=n(6550),u=n(1980),c=n(7392),s=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function v(e){var t,n,r,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,c=e.groupId,d=f(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:d})})),h=v[0],b=v[1],w=m({queryString:u,groupId:c}),y=w[0],g=w[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),C=k[0],N=k[1],E=function(){var e=null!=y?y:C;return p({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),g(e),N(e)}),[g,N,d]),tabValues:d}}var h=n(2389),b="tabList__CuJ",w="tabItem_LNqP";function y(e){var t=e.className,n=e.block,l=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==l&&(d(t),u(r))},p=function(e){var t,n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var i,o=s.indexOf(e.currentTarget)-1;n=null!=(i=s[o])?i:s[s.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return s.push(e)},onKeyDown:p,onClick:f},o,{className:(0,i.Z)("tabs__item",w,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=v(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function C(e){var t=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},4767:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4866),l=n(5162),u=["components"],c={title:"AnimatedSwitcher",sidebar_label:"AnimatedSwitcher",slug:"animatedswitcher"},s=void 0,d={unversionedId:"controls/animatedswitcher",id:"controls/animatedswitcher",title:"AnimatedSwitcher",description:"A control that by default does a cross-fade between a new control and the control previously set on the AnimatedSwitcher as a content.",source:"@site/docs/controls/animatedswitcher.md",sourceDirName:"controls",slug:"/controls/animatedswitcher",permalink:"/docs/controls/animatedswitcher",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/animatedswitcher.md",tags:[],version:"current",frontMatter:{title:"AnimatedSwitcher",sidebar_label:"AnimatedSwitcher",slug:"animatedswitcher"},sidebar:"docs",previous:{title:"Animations",permalink:"/docs/controls/animations"},next:{title:"Utility",permalink:"/docs/controls/utility"}},f={},p=[{value:"Examples",id:"examples",level:2},{value:"Animated switching between two containers with scale effect",id:"animated-switching-between-two-containers-with-scale-effect",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>duration</code>",id:"duration",level:3},{value:"<code>reverse_duration</code>",id:"reverse_duration",level:3},{value:"<code>switch_in_curve</code>",id:"switch_in_curve",level:3},{value:"<code>switch_out_curve</code>",id:"switch_out_curve",level:3},{value:"<code>transition</code>",id:"transition",level:3}],m={toc:p};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A control that by default does a cross-fade between a new control and the control previously set on the AnimatedSwitcher as a ",(0,i.kt)("inlineCode",{parentName:"p"},"content"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/animations/animated_switcher"},"Live example")),(0,i.kt)("h3",{id:"animated-switching-between-two-containers-with-scale-effect"},"Animated switching between two containers with scale effect"),(0,i.kt)("img",{src:"/img/docs/controls/animated-switcher/animated-switcher.gif",className:"screenshot-20"}),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n\n    c1 = ft.Container(\n        ft.Text("Hello!", style=ft.TextThemeStyle.HEADLINE_MEDIUM),\n        alignment=ft.alignment.center,\n        width=200,\n        height=200,\n        bgcolor=ft.colors.GREEN,\n    )\n    c2 = ft.Container(\n        ft.Text("Bye!", size=50),\n        alignment=ft.alignment.center,\n        width=200,\n        height=200,\n        bgcolor=ft.colors.YELLOW,\n    )\n    c = ft.AnimatedSwitcher(\n        c1,\n        transition=ft.AnimatedSwitcherTransition.SCALE,\n        duration=500,\n        reverse_duration=100,\n        switch_in_curve=ft.AnimationCurve.BOUNCE_OUT,\n        switch_out_curve=ft.AnimationCurve.BOUNCE_IN,\n    )\n\n    def animate(e):\n        c.content = c2 if c.content == c1 else c1\n        c.update()\n\n    page.add(\n        c,\n        ft.ElevatedButton("Animate!", on_click=animate),\n    )\n\nft.app(target=main)\n')))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"duration"},(0,i.kt)("inlineCode",{parentName:"h3"},"duration")),(0,i.kt)("p",null,"The duration, in milliseconds, of the transition from the old ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," value to the new one. Default is ",(0,i.kt)("inlineCode",{parentName:"p"},"1000")," milliseconds."),(0,i.kt)("h3",{id:"reverse_duration"},(0,i.kt)("inlineCode",{parentName:"h3"},"reverse_duration")),(0,i.kt)("p",null,"The duration, in milliseconds, of the transition from the new ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," value to the old one. Default is ",(0,i.kt)("inlineCode",{parentName:"p"},"1000")," milliseconds."),(0,i.kt)("h3",{id:"switch_in_curve"},(0,i.kt)("inlineCode",{parentName:"h3"},"switch_in_curve")),(0,i.kt)("p",null,"The animation curve to use when transitioning in a new ",(0,i.kt)("inlineCode",{parentName:"p"},"content"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/animation/Curves-class.html"},"Curves")," in Flutter docs for possible values. Property value is ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationCurve")," enum with ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationCurve.LINEAR")," as default."),(0,i.kt)("h3",{id:"switch_out_curve"},(0,i.kt)("inlineCode",{parentName:"h3"},"switch_out_curve")),(0,i.kt)("p",null,"The animation curve to use when transitioning a previous ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," out. See ",(0,i.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/animation/Curves-class.html"},"Curves")," in Flutter docs for possible values.  Property value is ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationCurve")," enum with ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationCurve.LINEAR")," as default."),(0,i.kt)("h3",{id:"transition"},(0,i.kt)("inlineCode",{parentName:"h3"},"transition")),(0,i.kt)("p",null,"An animation type to transition between new and old ",(0,i.kt)("inlineCode",{parentName:"p"},"content"),". Property value is ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimatedSwitcherTransition")," enum with ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimatedSwitcherTransition.FADE")," as default."))}v.isMDXComponent=!0}}]);