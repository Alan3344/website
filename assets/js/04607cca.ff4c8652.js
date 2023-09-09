"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[5565],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(t),f=a,m=s["".concat(u,".").concat(f)]||s[f]||p[f]||l;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),a=t(6010),l="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return N}});var r=t(7462),a=t(7294),l=t(6010),o=t(2466),i=t(6550),u=t(1980),c=t(7392),d=t(12);function s(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:s(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,l=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[o,l])]}function v(e){var n,t,r,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,s=p(e),v=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:s})})),h=v[0],b=v[1],k=m({queryString:u,groupId:c}),g=k[0],y=k[1],_=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,d.Nk)(n),r=t[0],l=t[1],[r,(0,a.useCallback)((function(e){n&&l.set(e)}),[n,l])]),N=_[0],w=_[1],T=function(){var e=null!=g?g:N;return f({value:e,tabValues:s})?e:null}();return(0,a.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),w(e)}),[y,w,s]),tabValues:s}}var h=t(2389),b="tabList__CuJ",k="tabItem_LNqP";function g(e){var n=e.className,t=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,d=[],s=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,t=d.indexOf(n),r=c[t].value;r!==i&&(s(n),u(r))},f=function(e){var n,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=d.indexOf(e.currentTarget)+1;t=null!=(r=d[a])?r:d[0];break;case"ArrowLeft":var l,o=d.indexOf(e.currentTarget)-1;t=null!=(l=d[o])?l:d[d.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return d.push(e)},onKeyDown:f,onClick:p},o,{className:(0,l.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function y(e){var n=e.lazy,t=e.children,r=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=l.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function _(e){var n=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b)},a.createElement(g,(0,r.Z)({},e,n)),a.createElement(y,(0,r.Z)({},e,n)))}function N(e){var n=(0,h.Z)();return a.createElement(_,(0,r.Z)({key:String(n)},e))}},7467:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=t(4866),i=t(5162),u=["components"],c={title:"Slider",sidebar_label:"Slider",slug:"slider"},d=void 0,s={unversionedId:"controls/slider",id:"controls/slider",title:"Slider",description:"\u6ed1\u5757\u63d0\u4f9b\u4e86\u53ef\u8c03\u5185\u5bb9\u7684\u89c6\u89c9\u6307\u793a\u4ee5\u53ca\u603b\u5185\u5bb9\u8303\u56f4\u5185\u7684\u5f53\u524d\u8bbe\u7f6e\u3002",source:"@site/docs/controls/slider.md",sourceDirName:"controls",slug:"/controls/slider",permalink:"/website/docs/controls/slider",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/slider.md",tags:[],version:"current",frontMatter:{title:"Slider",sidebar_label:"Slider",slug:"slider"},sidebar:"docs",previous:{title:"Radio",permalink:"/website/docs/controls/radio"},next:{title:"Switch",permalink:"/website/docs/controls/switch"}},p={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u57fa\u672c\u6ed1\u5757",id:"\u57fa\u672c\u6ed1\u5757",level:3},{value:"\u5e26\u503c\u7684\u6ed1\u5757",id:"\u5e26\u503c\u7684\u6ed1\u5757",level:3},{value:"Slider with <code>on_change</code> event",id:"slider-with-on_change-event",level:3},{value:"properties",id:"properties",level:2},{value:"<code>active_color</code>",id:"active_color",level:3},{value:"<code>autofocus</code>",id:"autofocus",level:3},{value:"<code>divisions</code>",id:"divisions",level:3},{value:"<code>inactive_color</code>",id:"inactive_color",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"<code>max</code>",id:"max",level:3},{value:"<code>min</code>",id:"min",level:3},{value:"<code>thumb_color</code>",id:"thumb_color",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"<code>on_blur</code>",id:"on_blur",level:3},{value:"<code>on_change</code>",id:"on_change",level:3},{value:"<code>on_change_end</code>\u66f4\u6539\u6ed1\u5757\u72b6\u6001\u65f6\u4f1a\u53d1\u5c04\u3002",id:"on_change_end\u66f4\u6539\u6ed1\u5757\u72b6\u6001\u65f6\u4f1a\u53d1\u5c04",level:3},{value:"<code>on_change_start</code>",id:"on_change_start",level:3},{value:"<code>on_focus</code>",id:"on_focus",level:3}],m={toc:f};function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6ed1\u5757\u63d0\u4f9b\u4e86\u53ef\u8c03\u5185\u5bb9\u7684\u89c6\u89c9\u6307\u793a\u4ee5\u53ca\u603b\u5185\u5bb9\u8303\u56f4\u5185\u7684\u5f53\u524d\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,"\u5f53\u60a8\u5e0c\u671b\u4eba\u4eec\u8bbe\u7f6e\u5b9a\u4e49\u503c\uff08\u4f8b\u5982\u97f3\u91cf\u6216\u4eae\u5ea6\uff09\uff0c\u6216\u8005\u5f53\u4eba\u4eec\u4f1a\u4ece\u5373\u65f6\u53cd\u9988\u4e2d\u53d7\u76ca\u4e8e\u8bbe\u7f6e\u66f4\u6539\u7684\u6548\u679c\u65f6\uff0c\u8bf7\u4f7f\u7528\u6ed1\u5757\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/input/slider"},"live \u793a\u4f8b")),(0,l.kt)("h3",{id:"\u57fa\u672c\u6ed1\u5757"},"\u57fa\u672c\u6ed1\u5757"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page):\n    page.add(\n        ft.Text("Default slider:"),\n        ft.Slider(),\n        ft.Text("Default disabled slider:"),\n        ft.Slider(disabled=True))\n\nft.app(target=main)\n')))),(0,l.kt)("h3",{id:"\u5e26\u503c\u7684\u6ed1\u5757"},"\u5e26\u503c\u7684\u6ed1\u5757"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page):\n    page.add(\n        ft.Text("Slider with value:"),\n        ft.Slider(value=0.3),\n        ft.Text("Slider with a custom range and label:"),\n        ft.Slider(min=0, max=100, divisions=10, label="{value}%"))\n\nft.app(target=main)\n')))),(0,l.kt)("img",{src:"/website/img/docs/controls/slider/slider-with-custom-content.gif",className:"screenshot-30"}),(0,l.kt)("h3",{id:"slider-with-on_change-event"},"Slider with ",(0,l.kt)("inlineCode",{parentName:"h3"},"on_change")," event"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page):\n\n    def slider_changed(e):\n        t.value = f"Slider changed to {e.control.value}"\n        page.update()\n\n    t = ft.Text()\n    page.add(\n        ft.Text("Slider with \'on_change\' event:"),\n        ft.Slider(min=0, max=100, divisions=10, label="{value}%", on_change=slider_changed), t)\n\nft.app(target=main)\n')))),(0,l.kt)("img",{src:"/website/img/docs/controls/slider/slider-with-change-event.gif",className:"screenshot-30"}),(0,l.kt)("h2",{id:"properties"},"properties"),(0,l.kt)("h3",{id:"active_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"active_color")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u7528\u4e8e\u6d3b\u8dc3\u7684\u6ed1\u5757\u8f68\u9053\u90e8\u5206\u3002"),(0,l.kt)("p",null,"\u6ed1\u5757\u7684\u201c\u4e3b\u52a8\u201d\u4fa7\u662f\u62c7\u6307\u548c\u6700\u5c0f\u503c\u4e4b\u95f4\u7684\u4e00\u4fa7\u3002"),(0,l.kt)("h3",{id:"autofocus"},(0,l.kt)("inlineCode",{parentName:"h3"},"autofocus")),(0,l.kt)("p",null,"\u5982\u679c\u5c06\u63a7\u4ef6\u9009\u62e9\u4f5c\u4e3a\u521d\u59cb\u7126\u70b9\uff0c\u5219\u4e3a thus\u3002 \u5982\u679c\u4e00\u4e2a\u5e26\u6709\u81ea\u52a8\u5bf9\u7126\u96c6\u7684\u9875\u9762\u4e0a\u6709\u591a\u4e2a\u63a7\u4ef6\uff0c\u5219\u6dfb\u52a0\u5230\u9875\u9762\u7684\u7b2c\u4e00\u4e2a\u5c06\u83b7\u5f97\u7126\u70b9\u3002"),(0,l.kt)("h3",{id:"divisions"},(0,l.kt)("inlineCode",{parentName:"h3"},"divisions")),(0,l.kt)("p",null,"\u79bb\u6563\u90e8\u95e8\u7684\u6570\u91cf\u3002"),(0,l.kt)("p",null,"\u901a\u5e38\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"label"),"\u4e00\u8d77\u7528\u4e8e\u663e\u793a\u5f53\u524d\u79bb\u6563\u503c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u672a\u8bbe\u7f6e\uff0c\u6ed1\u5757\u662f\u8fde\u7eed\u7684\u3002"),(0,l.kt)("h3",{id:"inactive_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"inactive_color")),(0,l.kt)("p",null,"\u6ed1\u5757\u8f68\u9053\u4e0d\u6d3b\u52a8\u90e8\u5206\u7684",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u3002"),(0,l.kt)("p",null,"\u6ed1\u5757\u7684\u201c\u4e0d\u6d3b\u52a8\u201d\u4fa7\u662f\u62c7\u6307\u548c\u6700\u5927\u503c\u4e4b\u95f4\u7684\u4e00\u4fa7\u3002"),(0,l.kt)("h3",{id:"label"},(0,l.kt)("inlineCode",{parentName:"h3"},"label")),(0,l.kt)("p",null,"\u683c\u5f0f\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"{value}"),"\u3002"),(0,l.kt)("p",null,"\u5f53\u6ed1\u5757\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u65f6\uff0c\u6807\u7b7e\u663e\u793a\u5728\u6ed1\u5757\u4e0a\u65b9\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"label"),"\u7684\u503c\u5fc5\u987b\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"p"},"{value}"),"\u5c06\u88ab\u5f53\u524d\u7684\u6ed1\u5757\u503c\u66ff\u6362\u3002"),(0,l.kt)("p",null,"\u5b83\u7528\u4e8e\u663e\u793a\u79bb\u6563\u6ed1\u5757\u7684\u503c\uff0c\u5e76\u663e\u793a\u4e3a\u503c\u6307\u793a\u706f\u5f62\u72b6\u7684\u4e00\u90e8\u5206\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u672a\u8bbe\u7f6e\uff0c\u5219\u4e0d\u4f1a\u663e\u793a\u503c\u6307\u793a\u5668\u3002"),(0,l.kt)("h3",{id:"max"},(0,l.kt)("inlineCode",{parentName:"h3"},"max")),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u7684\u6700\u5927\u503c\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"1.0"),"\u3002 \u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"min"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"max"),"\u7b49\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"min"),"\uff0c\u5219\u7981\u7528\u6ed1\u5757\u3002"),(0,l.kt)("h3",{id:"min"},(0,l.kt)("inlineCode",{parentName:"h3"},"min")),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u7684\u6700\u5c0f\u503c\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"0.0"),"\u3002 \u5fc5\u987b\u5c0f\u4e8e\u6216\u7b49\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"max"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"max"),"\u7b49\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"min"),"\uff0c\u5219\u7981\u7528\u6ed1\u5757\u3002"),(0,l.kt)("h3",{id:"thumb_color"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumb_color")),(0,l.kt)("p",null,"\u62c7\u6307\u7684",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u3002"),(0,l.kt)("h3",{id:"value"},(0,l.kt)("inlineCode",{parentName:"h3"},"value")),(0,l.kt)("p",null,"\u6b64\u6ed1\u5757\u7684\u5f53\u524d\u9009\u62e9\u503c\u3002"),(0,l.kt)("p",null,"\u6ed1\u5757\u7684\u62c7\u6307\u5728\u4e0e\u6b64\u503c\u76f8\u5bf9\u5e94\u7684\u4f4d\u7f6e\u4e0a\u7ed8\u5236\u3002"),(0,l.kt)("h2",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,l.kt)("h3",{id:"on_blur"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_blur")),(0,l.kt)("p",null,"\u5f53\u63a7\u4ef6\u5931\u53bb\u7126\u70b9\u65f6\u4f1a\u53d1\u5c04\u3002"),(0,l.kt)("h3",{id:"on_change"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_change")),(0,l.kt)("h3",{id:"on_change_end\u66f4\u6539\u6ed1\u5757\u72b6\u6001\u65f6\u4f1a\u53d1\u5c04"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_change_end"),"\u66f4\u6539\u6ed1\u5757\u72b6\u6001\u65f6\u4f1a\u53d1\u5c04\u3002"),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u5b8c\u6210\u540e\uff0c\u4e3a\u6ed1\u5757\u9009\u62e9\u4e00\u4e2a\u65b0\u503c\u3002"),(0,l.kt)("h3",{id:"on_change_start"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_change_start")),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u5f00\u59cb\u4e3a\u6ed1\u5757\u9009\u62e9\u65b0\u503c\u65f6\u53d1\u5c04\u3002"),(0,l.kt)("h3",{id:"on_focus"},(0,l.kt)("inlineCode",{parentName:"h3"},"on_focus")),(0,l.kt)("p",null,"\u5f53\u63a7\u4ef6\u83b7\u5f97\u7126\u70b9\u65f6\u53d1\u5c04\u3002"))}v.isMDXComponent=!0}}]);