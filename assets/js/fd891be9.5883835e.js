"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[522],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=l,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||r;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7294),l=t(6010),r="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return N}});var a=t(7462),l=t(7294),r=t(6010),o=t(2466),i=t(6550),u=t(1980),d=t(7392),c=t(12);function p(e){return function(e){var n,t;return null!=(n=null==(t=l.Children.map(e,(function(e){if(!e||(0,l.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function s(e){var n=e.values,t=e.children;return(0,l.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,d.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,r=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,l.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function v(e){var n,t,a,r,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,d=e.groupId,p=s(e),v=(0,l.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var l=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:o,tabValues:p})})),k=v[0],b=v[1],h=f({queryString:u,groupId:d}),_=h[0],g=h[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),a=t[0],r=t[1],[a,(0,l.useCallback)((function(e){n&&r.set(e)}),[n,r])]),N=y[0],w=y[1],C=function(){var e=null!=_?_:N;return m({value:e,tabValues:p})?e:null}();return(0,l.useLayoutEffect)((function(){C&&b(C)}),[C]),{selectedValue:k,selectValue:(0,l.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),g(e),w(e)}),[g,w,p]),tabValues:p}}var k=t(2389),b="tabList__CuJ",h="tabItem_LNqP";function _(e){var n=e.className,t=e.block,i=e.selectedValue,u=e.selectValue,d=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,s=function(e){var n=e.currentTarget,t=c.indexOf(n),a=d[t].value;a!==i&&(p(n),u(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":var a,l=c.indexOf(e.currentTarget)+1;t=null!=(a=c[l])?a:c[0];break;case"ArrowLeft":var r,o=c.indexOf(e.currentTarget)-1;t=null!=(r=c[o])?r:c[c.length-1]}null==(n=t)||n.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},d.map((function(e){var n=e.value,t=e.label,o=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return c.push(e)},onKeyDown:m,onClick:s},o,{className:(0,r.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function g(e){var n=e.lazy,t=e.children,a=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=r.find((function(e){return e.props.value===a}));return o?(0,l.cloneElement)(o,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function y(e){var n=v(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",b)},l.createElement(_,(0,a.Z)({},e,n)),l.createElement(g,(0,a.Z)({},e,n)))}function N(e){var n=(0,k.Z)();return l.createElement(y,(0,a.Z)({key:String(n)},e))}},8009:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),o=t(4866),i=t(5162),u=["components"],d={title:"Audio",sidebar_label:"Audio",slug:"audio"},c=void 0,p={unversionedId:"controls/audio",id:"controls/audio",title:"Audio",description:"\u540c\u65f6\u64ad\u653e\u591a\u4e2a\u97f3\u9891\u6587\u4ef6\u7684\u63a7\u4ef6\u3002 \u5728MACOS\uff0cLinux\uff0cWindows\uff0ciOS\uff0cAndroid\u548cWeb\u4e0a\u4f7f\u7528\u3002",source:"@site/docs/controls/audio.md",sourceDirName:"controls",slug:"/controls/audio",permalink:"/website/docs/controls/audio",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/audio.md",tags:[],version:"current",frontMatter:{title:"Audio",sidebar_label:"Audio",slug:"audio"},sidebar:"docs",previous:{title:"Utility",permalink:"/website/docs/controls/utility"},next:{title:"Draggable",permalink:"/website/docs/controls/draggable"}},s={},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u81ea\u52a8\u64ad\u653e\u97f3\u9891",id:"\u81ea\u52a8\u64ad\u653e\u97f3\u9891",level:3},{value:"\u5e26\u6709\u64ad\u653e\u63a7\u4ef6\u7684\u97f3\u9891",id:"\u5e26\u6709\u64ad\u653e\u63a7\u4ef6\u7684\u97f3\u9891",level:3},{value:"properties",id:"properties",level:2},{value:"<code>autoplay</code>",id:"autoplay",level:3},{value:"<code>balance</code>",id:"balance",level:3},{value:"<code>get_current_position()</code>",id:"get_current_position",level:3},{value:"<code>get_duration()</code>",id:"get_duration",level:3},{value:"<code>playback_rate</code>",id:"playback_rate",level:3},{value:"<code>release_mode</code>",id:"release_mode",level:3},{value:"<code>src</code>",id:"src",level:3},{value:"<code>src_base64</code>",id:"src_base64",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>pause()</code>",id:"pause",level:3},{value:"<code>play()</code>",id:"play",level:3},{value:"<code>release()</code>",id:"release",level:3},{value:"<code>resume()</code>",id:"resume",level:3},{value:"<code>seek()</code>",id:"seek",level:3},{value:"<code>volume</code>",id:"volume",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"<code>on_duration_changed</code>",id:"on_duration_changed",level:3},{value:"<code>on_loaded</code>",id:"on_loaded",level:3},{value:"<code>on_position_changed</code>",id:"on_position_changed",level:3},{value:"<code>on_seek_complete</code>",id:"on_seek_complete",level:3},{value:"<code>on_state_changed</code>\u4e00\u65e6\u97f3\u9891\u641c\u7d22\u5b8c\u6210\uff0c\u5c31\u8981\u53d1\u9001\u6d3b\u52a8\u3002",id:"on_state_changed\u4e00\u65e6\u97f3\u9891\u641c\u7d22\u5b8c\u6210\u5c31\u8981\u53d1\u9001\u6d3b\u52a8",level:3}],f={toc:m};function v(e){var n=e.components,t=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u540c\u65f6\u64ad\u653e\u591a\u4e2a\u97f3\u9891\u6587\u4ef6\u7684\u63a7\u4ef6\u3002 \u5728MACOS\uff0cLinux\uff0cWindows\uff0ciOS\uff0cAndroid\u548cWeb\u4e0a\u4f7f\u7528\u3002\n\u57fa\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/audioplayers"},"Audioplayers")," flutter\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"\u97f3\u9891\u63a7\u5236\u662f\u975e\u89c6\u89c9\u7684\uff0c\u5e94\u6dfb\u52a0\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"page.overlay"),"\u5217\u8868\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u81ea\u52a8\u64ad\u653e\u97f3\u9891"},"\u81ea\u52a8\u64ad\u653e\u97f3\u9891"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Autoplay works in desktop, mobile apps and Safari browser, but doesn't work in Chrome/Edge.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    audio1 = ft.Audio(\n        src="https://luan.xyz/files/audio/ambient_c_motion.mp3", autoplay=True\n    )\n    page.overlay.append(audio1)\n    page.add(\n        ft.Text("This is an app with background audio."),\n        ft.ElevatedButton("Stop playing", on_click=lambda _: audio1.pause()),\n    )\n\nft.app(target=main)\n')))),(0,r.kt)("h3",{id:"\u5e26\u6709\u64ad\u653e\u63a7\u4ef6\u7684\u97f3\u9891"},"\u5e26\u6709\u64ad\u653e\u63a7\u4ef6\u7684\u97f3\u9891"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\nurl = "https://github.com/mdn/webaudio-examples/blob/main/audio-analyser/viper.mp3?raw=true"\n\ndef main(page: ft.Page):\n    def volume_down(_):\n        audio1.volume -= 0.1\n        audio1.update()\n\n    def volume_up(_):\n        audio1.volume += 0.1\n        audio1.update()\n\n    def balance_left(_):\n        audio1.balance -= 0.1\n        audio1.update()\n\n    def balance_right(_):\n        audio1.balance += 0.1\n        audio1.update()\n\n    audio1 = ft.Audio(\n        src=url,\n        autoplay=False,\n        volume=1,\n        balance=0,\n        on_loaded=lambda _: print("Loaded"),\n        on_duration_changed=lambda e: print("Duration changed:", e.data),\n        on_position_changed=lambda e: print("Position changed:", e.data),\n        on_state_changed=lambda e: print("State changed:", e.data),\n        on_seek_complete=lambda _: print("Seek complete"),\n    )\n    page.overlay.append(audio1)\n    page.add(\n        ft.ElevatedButton("Play", on_click=lambda _: audio1.play()),\n        ft.ElevatedButton("Pause", on_click=lambda _: audio1.pause()),\n        ft.ElevatedButton("Resume", on_click=lambda _: audio1.resume()),\n        ft.ElevatedButton("Release", on_click=lambda _: audio1.release()),\n        ft.ElevatedButton("Seek 2s", on_click=lambda _: audio1.seek(2000)),\n        ft.Row(\n            [\n                ft.ElevatedButton("Volume down", on_click=volume_down),\n                ft.ElevatedButton("Volume up", on_click=volume_up),\n            ]\n        ),\n        ft.Row(\n            [\n                ft.ElevatedButton("Balance left", on_click=balance_left),\n                ft.ElevatedButton("Balance right", on_click=balance_right),\n            ]\n        ),\n        ft.ElevatedButton(\n            "Get duration", on_click=lambda _: print("Duration:", audio1.get_duration())\n        ),\n        ft.ElevatedButton(\n            "Get current position",\n            on_click=lambda _: print("Current position:", audio1.get_current_position()),\n        ),\n    )\n\nft.app(target=main)\n')))),(0,r.kt)("h2",{id:"properties"},"properties"),(0,r.kt)("h3",{id:"autoplay"},(0,r.kt)("inlineCode",{parentName:"h3"},"autoplay")),(0,r.kt)("p",null,"\u5728\u5c06\u97f3\u9891\u63a7\u4ef6\u6dfb\u52a0\u5230\u9875\u9762\u4e2d\uff0c\u5c31\u5f00\u59cb\u64ad\u653e\u97f3\u9891\u3002"),(0,r.kt)("p",null,":::\u6ce8\u610f\nAutoPlay\u5728\u53f0\u5f0f\u673a\uff0c\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u548cSafari\u6d4f\u89c8\u5668\u4e2d\u5de5\u4f5c\uff0c\u4f46\u5728Chrome/Edge\u4e2d\u4e0d\u8d77\u4f5c\u7528\u3002\n:::"),(0,r.kt)("h3",{id:"balance"},(0,r.kt)("inlineCode",{parentName:"h3"},"balance")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u7acb\u4f53\u58f0\u5e73\u8861\u3002"),(0,r.kt)("p",null,"-1-\u5de6\u901a\u9053\u5df2\u5b8c\u6574\u5377\uff1b \u6b63\u786e\u7684\u6e20\u9053\u662f\u65e0\u58f0\u7684\u3002 1-\u6b63\u786e\u7684\u9891\u9053\u5df2\u5168\u90e8\uff1b \u5de6\u901a\u9053\u662f\u65e0\u58f0\u7684\u3002 0-\u4e24\u4e2a\u901a\u9053\u90fd\u5904\u4e8e\u76f8\u540c\u7684\u97f3\u91cf\u3002"),(0,r.kt)("p",null,":::\u6ce8\u610f\n\u4ec5\u5728Windows\u548cLinux\u4e0a\u652f\u6301\u8bbe\u7f6e\u5e73\u8861\u3002\n:::"),(0,r.kt)("h3",{id:"get_current_position"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_current_position()")),(0,r.kt)("p",null,"\u8fd4\u56de\u6beb\u79d2\u4e2d\u7684\u5f53\u524d\u4f4d\u7f6e\u3002"),(0,r.kt)("h3",{id:"get_duration"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_duration()")),(0,r.kt)("p",null,"\u8fd4\u56de\u6beb\u79d2\u4e2d\u7684\u97f3\u9891\u6301\u7eed\u65f6\u95f4\u3002"),(0,r.kt)("h3",{id:"playback_rate"},(0,r.kt)("inlineCode",{parentName:"h3"},"playback_rate")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u64ad\u653e\u7387\u3002 iOS\u548cMACO\u7684\u9650\u5236\u57280.5\u81f32x Android SDK\u7248\u672c\u4e4b\u95f4\u5e94\u4e3a23\u6216\u66f4\u9ad8\u3002"),(0,r.kt)("h3",{id:"release_mode"},(0,r.kt)("inlineCode",{parentName:"h3"},"release_mode")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u53d1\u5e03\u6a21\u5f0f\u3002 \u652f\u6301\u4ee5\u4e0b\u503c: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReleaseMode.RELEASE"),"\uff08\u9ed8\u8ba4\uff09 - \u91ca\u653e\u6240\u6709\u8d44\u6e90\uff0c\u5c31\u50cf\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"release()"),"\u65b9\u6cd5\u4e00\u6837\u3002 \u5728Android\u4e2d\uff0c\u5a92\u4f53\u64ad\u653e\u5668\u7684\u8d44\u6e90\u5f88\u5bc6\u96c6\uff0c\u8fd9\u5c06\u4f7f\u5b83\u6d88\u5931\u3002 \u6570\u636e\u5c06\u5728\u9700\u8981\u65f6\u518d\u6b21\u7f13\u51b2\uff08\u5982\u679c\u662f\u8fdc\u7a0b\u6587\u4ef6\uff0c\u5c06\u518d\u6b21\u4e0b\u8f7d\uff09\u3002 \u5728iOS\u548cmacOS\u4e2d\uff0c\u5c31\u50cf",(0,r.kt)("inlineCode",{parentName:"li"},"stop()"),"\u65b9\u6cd5\u4e00\u6837\u7684\u5de5\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReleaseMode.LOOP"),"  - \u4fdd\u6301\u7f13\u51b2\u6570\u636e\u5e76\u5728\u5b8c\u6210\u540e\u518d\u6b21\u64ad\u653e\uff0c\u521b\u5efa\u4e00\u4e2a\u5faa\u73af\u3002 \u8bf7\u6ce8\u610f\uff0c\u4f7f\u7528\u6b64\u6a21\u5f0f\u65f6\uff0c\u901a\u8bdd\u505c\u6b62\u65b9\u6cd5\u4e0d\u8db3\u4ee5\u91ca\u653e\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReleaseMode.STOP"),"  - \u505c\u6b62\u97f3\u9891\u64ad\u653e\uff0c\u4f46\u4fdd\u6301\u6240\u6709\u8d44\u6e90\u5b8c\u6574\u3002 \u5982\u679c\u60a8\u6253\u7b97\u7a0d\u540e\u518d\u64ad\u653e\uff0c\u8bf7\u4f7f\u7528\u6b64\u3002")),(0,r.kt)("h3",{id:"src"},(0,r.kt)("inlineCode",{parentName:"h3"},"src")),(0,r.kt)("p",null,"\u5c06URL\u8bbe\u7f6e\u4e3a\u97f3\u9891\u6587\u4ef6\u3002 \u5b83\u53ef\u80fd\u662f\u8d44\u4ea7URL\uff0c\u6709\u5173\u8d44\u4ea7\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/image#src"},"Image.src"),"\u3002"),(0,r.kt)("h3",{id:"src_base64"},(0,r.kt)("inlineCode",{parentName:"h3"},"src_base64")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u4ee5\u57fa\u672c64\u683c\u5f0f\u7f16\u7801\u7684\u97f3\u9891\u6587\u4ef6\u7684\u5185\u5bb9\u3002"),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"pause"},(0,r.kt)("inlineCode",{parentName:"h3"},"pause()")),(0,r.kt)("p",null,"\u505c\u6b62\u64ad\u653e\u97f3\u9891\u3002"),(0,r.kt)("h3",{id:"play"},(0,r.kt)("inlineCode",{parentName:"h3"},"play()")),(0,r.kt)("p",null,"\u5f00\u59cb\u4ece\u5934\u5f00\u59cb\u64ad\u653e\u97f3\u9891\u3002"),(0,r.kt)("h3",{id:"release"},(0,r.kt)("inlineCode",{parentName:"h3"},"release()")),(0,r.kt)("p",null,"\u505c\u6b62\u64ad\u653e\u5e76\u91ca\u653e\u4e0e\u6b64\u97f3\u9891\u63a7\u4ef6\u76f8\u5173\u7684\u8d44\u6e90\u3002\n\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"resume()"),"\u6216\u66f4\u6539\u6e90\u5934\u540e\uff0c\u8d44\u6e90\u5c06\u518d\u6b21\u83b7\u53d6\u6216\u7f13\u51b2\u3002"),(0,r.kt)("h3",{id:"resume"},(0,r.kt)("inlineCode",{parentName:"h3"},"resume()")),(0,r.kt)("p",null,"\u7b80\u5386\u5f53\u524d\u4f4d\u7f6e\u64ad\u653e\u97f3\u9891\u3002"),(0,r.kt)("h3",{id:"seek"},(0,r.kt)("inlineCode",{parentName:"h3"},"seek()")),(0,r.kt)("p",null,"\u5c06\u5149\u6807\u79fb\u81f3\u6240\u9700\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u65b9\u6cd5\u53c2\u6570: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"position_milliseconds"),"  - \u5728\u6beb\u79d2\u4e2d\u6240\u9700\u7684\u4f4d\u7f6e\u3002")),(0,r.kt)("h3",{id:"volume"},(0,r.kt)("inlineCode",{parentName:"h3"},"volume")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u97f3\u91cf\uff08\u632f\u5e45\uff09\u3002"),(0,r.kt)("p",null,"0\u662f\u9759\u97f3\uff0c1\u662f\u6700\u5927\u97f3\u91cf\u3002 0\u52301\u4e4b\u95f4\u7684\u503c\u662f\u7ebf\u6027\u63d2\u503c\u7684\u3002"),(0,r.kt)("h2",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,r.kt)("h3",{id:"on_duration_changed"},(0,r.kt)("inlineCode",{parentName:"h3"},"on_duration_changed")),(0,r.kt)("p",null,"\u4e00\u65e6\u6709\u97f3\u9891\u6301\u7eed\u65f6\u95f4\uff08\u53ef\u80fd\u9700\u8981\u82b1\u8d39\u4e00\u6bb5\u65f6\u95f4\u624d\u80fd\u4e0b\u8f7d\u6216\u7f13\u51b2\uff09\u3002"),(0,r.kt)("p",null,"\u4e8b\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"e.data"),"\u5305\u542b\u6beb\u79d2\u7684\u97f3\u9891\u6301\u7eed\u65f6\u95f4\u3002"),(0,r.kt)("h3",{id:"on_loaded"},(0,r.kt)("inlineCode",{parentName:"h3"},"on_loaded")),(0,r.kt)("p",null,"\u52a0\u8f7d/\u7f13\u51b2\u97f3\u9891\u65f6\u53d1\u5c04\u3002"),(0,r.kt)("h3",{id:"on_position_changed"},(0,r.kt)("inlineCode",{parentName:"h3"},"on_position_changed")),(0,r.kt)("p",null,"\u66f4\u6539\u97f3\u9891\u4f4d\u7f6e\u65f6\u4f1a\u53d1\u5c04\u3002 \u5982\u679c\u72b6\u6001\u6b63\u5728\u64ad\u653e\uff0c\u5c06\u6bcf1\u79d2\u4e0d\u65ad\u66f4\u65b0\u4e00\u6b21\u64ad\u653e\u7684\u4f4d\u7f6e\u3002 \u53ef\u7528\u4e8e\u8fdb\u5ea6\u680f\u3002"),(0,r.kt)("h3",{id:"on_seek_complete"},(0,r.kt)("inlineCode",{parentName:"h3"},"on_seek_complete")),(0,r.kt)("p",null,"\u641c\u7d22\u5b8c\u6210\u3002 "),(0,r.kt)("h3",{id:"on_state_changed\u4e00\u65e6\u97f3\u9891\u641c\u7d22\u5b8c\u6210\u5c31\u8981\u53d1\u9001\u6d3b\u52a8"},(0,r.kt)("inlineCode",{parentName:"h3"},"on_state_changed"),"\u4e00\u65e6\u97f3\u9891\u641c\u7d22\u5b8c\u6210\uff0c\u5c31\u8981\u53d1\u9001\u6d3b\u52a8\u3002"),(0,r.kt)("p",null,"\u5f53\u97f3\u9891\u64ad\u653e\u5668\u72b6\u6001\u66f4\u6539\u65f6\uff0c\u4f1a\u53d1\u5c04\u3002 \u4e8b\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"e.data"),"\u5305\u542b\u4ee5\u4e0b\u72b6\u6001\u4e4b\u4e00: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stopped")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paused")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"completed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disposed"))))}v.isMDXComponent=!0}}]);