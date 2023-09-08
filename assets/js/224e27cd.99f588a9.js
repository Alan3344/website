"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[3050],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5162:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(7294),a=t(6010),o="tabItem_Ymn6";function l(e){var r=e.children,t=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},r)}},4866:function(e,r,t){t.d(r,{Z:function(){return N}});var n=t(7462),a=t(7294),o=t(6010),l=t(2466),u=t(6550),i=t(1980),s=t(7392),c=t(12);function p(e){return function(e){var r,t;return null!=(r=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(r=e.props)&&"object"==typeof r&&"value"in r)return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function d(e){var r=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=r?r:p(t);return function(e){var r=(0,s.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function f(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function m(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId,o=(0,u.k6)(),l=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((function(e){if(l){var r=new URLSearchParams(o.location.search);r.set(l,e),o.replace(Object.assign({},o.location,{search:r.toString()}))}}),[l,o])]}function v(e){var r,t,n,o,l=e.defaultValue,u=e.queryString,i=void 0!==u&&u,s=e.groupId,p=d(e),v=(0,a.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),b=v[0],g=v[1],h=m({queryString:i,groupId:s}),y=h[0],k=h[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,c.Nk)(r),n=t[0],o=t[1],[n,(0,a.useCallback)((function(e){r&&o.set(e)}),[r,o])]),N=w[0],E=w[1],O=function(){var e=null!=y?y:N;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){O&&g(O)}),[O]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),E(e)}),[k,E,p]),tabValues:p}}var b=t(2389),g="tabList__CuJ",h="tabItem_LNqP";function y(e){var r=e.className,t=e.block,u=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var r=e.currentTarget,t=c.indexOf(r),n=s[t].value;n!==u&&(p(r),i(n))},f=function(e){var r,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;t=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;t=null!=(o=c[l])?o:c[c.length-1]}null==(r=t)||r.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},r)},s.map((function(e){var r=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===r?0:-1,"aria-selected":u===r,key:r,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},l,{className:(0,o.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":u===r})}),null!=t?t:r)})))}function k(e){var r=e.lazy,t=e.children,n=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var l=o.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})})))}function w(e){var r=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(y,(0,n.Z)({},e,r)),a.createElement(k,(0,n.Z)({},e,r)))}function N(e){var r=(0,b.Z)();return a.createElement(w,(0,n.Z)({key:String(r)},e))}},4937:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(4866),u=t(5162),i=["components"],s={title:"ProgressBar",sidebar_label:"ProgressBar",slug:"progressbar"},c=void 0,p={unversionedId:"controls/progressbar",id:"controls/progressbar",title:"ProgressBar",description:"a material design \u7ebf\u6027\u8fdb\u5ea6\u6307\u793a\u5668\uff0c\u4e5f\u79f0\u4e3a\u8fdb\u5ea6\u680f\u3002",source:"@site/docs/controls/progressbar.md",sourceDirName:"controls",slug:"/controls/progressbar",permalink:"/website/docs/controls/progressbar",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/controls/progressbar.md",tags:[],version:"current",frontMatter:{title:"ProgressBar",sidebar_label:"ProgressBar",slug:"progressbar"},sidebar:"docs",previous:{title:"CircleAvatar",permalink:"/website/docs/controls/circleavatar"},next:{title:"ProgressRing",permalink:"/website/docs/controls/progressring"}},d={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"properties",id:"properties",level:2},{value:"<code>value</code>",id:"value",level:3},{value:"<code>bar_height</code>",id:"bar_height",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>bgcolor</code>",id:"bgcolor",level:3},{value:"<code>tooltip</code>",id:"tooltip",level:3}],m={toc:f};function v(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"a material design \u7ebf\u6027\u8fdb\u5ea6\u6307\u793a\u5668\uff0c\u4e5f\u79f0\u4e3a\u8fdb\u5ea6\u680f\u3002"),(0,o.kt)("p",null,"\u663e\u793a\u6cbf\u7ebf\u8fdb\u5c55\u7684\u63a7\u4ef6\u3002"),(0,o.kt)("p",null,"\u7ebf\u6027\u8fdb\u5ea6\u6307\u6807\u6709\u4e24\u79cd:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"\u786e\u5b9a"),"\u3002 \u786e\u5b9a\u7684\u8fdb\u5ea6\u6307\u6807\u5728\u6bcf\u4e2a\u65f6\u95f4\u70b9\u5177\u6709\u4e00\u4e2a\u7279\u5b9a\u7684\u503c\uff0c\u5e76\u4e14\u8be5\u503c\u5e94\u5355\u8c03\u4ece",(0,o.kt)("inlineCode",{parentName:"li"},"0.0"),"\u5230",(0,o.kt)("inlineCode",{parentName:"li"},"1.0"),"\uff0c\u5c4a\u65f6\u6307\u793a\u5668\u5b8c\u6210\u3002 \u8981\u521b\u5efa\u786e\u5b9a\u7684\u8fdb\u5ea6\u6307\u793a\u5668\uff0c\u8bf7\u5728",(0,o.kt)("inlineCode",{parentName:"li"},"0.0"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"1.0"),"\u4e4b\u95f4\u4f7f\u7528\u975e NULL \u503c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"\u4e0d\u786e\u5b9a "),"\u3002 \u4e0d\u786e\u5b9a\u7684\u8fdb\u5ea6\u6307\u6807\u5728\u6bcf\u4e2a\u65f6\u95f4\u70b9\u90fd\u6ca1\u6709\u7279\u5b9a\u7684\u503c\uff0c\u800c\u662f\u6307\u51fa\u8fdb\u5ea6\u662f\u5728\u6ca1\u6709\u6307\u793a\u8fdb\u5ea6\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u7684\u3002 \u8981\u521b\u5efa\u4e0d\u786e\u5b9a\u7684\u8fdb\u5ea6\u6307\u6807\uff0c\u8bf7\u4f7f\u7528\u7a7a\u503c\u3002")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://flet-controls-gallery.fly.dev/displays/progressbar"},"LIVE \u793a\u4f8b")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from time import sleep\n\nimport flet as ft\n\ndef main(page: ft.Page):\n    pb = ft.ProgressBar(width=400)\n\n    page.add(\n        ft.Text("Linear progress indicator", style="headlineSmall"),\n        ft.Column([ ft.Text("Doing something..."), pb]),\n        ft.Text("Indeterminate progress bar", style="headlineSmall"),\n        ft.ProgressBar(width=400, color="amber", bgcolor="#eeeeee"),\n    )\n\n    for i in range(0, 101):\n        pb.value = i * 0.01\n        sleep(0.1)\n        page.update()\n\nft.app(target=main)\n')))),(0,o.kt)("img",{src:"/img/docs/controls/progress-bar/custom-progress-bars.gif",className:"screenshot-30"}),(0,o.kt)("h2",{id:"properties"},"properties"),(0,o.kt)("h3",{id:"value"},(0,o.kt)("inlineCode",{parentName:"h3"},"value")),(0,o.kt)("p",null,"\u8be5\u8fdb\u5ea6\u6307\u6807\u7684\u4ef7\u503c\u3002 \u503c\u4e3a 0.0 \u8868\u793a\u6ca1\u6709\u8fdb\u5ea6\uff0c\u800c 1.0 \u8868\u793a\u8fdb\u5ea6\u5df2\u7ecf\u5b8c\u6210\u3002 \u8be5\u503c\u5c06\u88ab\u5939\u5728 0.0-1.0 \u8303\u56f4\u5185\u3002 \u5982\u679c\u65e0\u6548\uff0c\u5219\u6b64\u8fdb\u5ea6\u6307\u793a\u5668\u662f\u4e0d\u786e\u5b9a\u7684\uff0c\u8fd9\u610f\u5473\u7740\u6307\u793a\u5668\u663e\u793a\u4e00\u4e2a\u9884\u5b9a\u7684\u52a8\u753b\uff0c\u8be5\u52a8\u753b\u5e76\u672a\u6307\u793a\u6b63\u5728\u53d6\u5f97\u591a\u5c11\u5b9e\u9645\u8fdb\u5ea6\u3002"),(0,o.kt)("h3",{id:"bar_height"},(0,o.kt)("inlineCode",{parentName:"h3"},"bar_height")),(0,o.kt)("p",null,"\u7528\u4e8e\u7ed8\u5236\u7ebf\u6027\u6307\u793a\u5668\u7684\u7ebf\u7684\u6700\u5c0f\u9ad8\u5ea6\u3002 \u9ed8\u8ba4\u503c\u4e3a 4\u3002"),(0,o.kt)("h3",{id:"color"},(0,o.kt)("inlineCode",{parentName:"h3"},"color")),(0,o.kt)("p",null,"\u8fdb\u5ea6\u6307\u793a\u5668\u7684",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u3002"),(0,o.kt)("h3",{id:"bgcolor"},(0,o.kt)("inlineCode",{parentName:"h3"},"bgcolor")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guides/python/colors"},"\u989c\u8272"),"\u7ebf\u6027\u6307\u793a\u5668\u586b\u5145\u7684\u66f2\u76ee\u3002"),(0,o.kt)("h3",{id:"tooltip"},(0,o.kt)("inlineCode",{parentName:"h3"},"tooltip")),(0,o.kt)("p",null,"\u5c06\u9f20\u6807\u60ac\u505c\u5728\u63a7\u4ef6\u4e0a\u65f6\u663e\u793a\u7684\u6587\u672c\u3002"))}v.isMDXComponent=!0}}]);