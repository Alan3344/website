"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[7746],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7294),i=n(6010),o=n(3791),a=n(9960),c=n(3919),l=n(5999),p="cardContainer_fWXF",u="cardTitle_rnsV",s="cardDescription_PWke";function d(e){var t=e.href,n=e.children;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",p)},n)}function m(e){var t=e.href,n=e.icon,o=e.title,a=e.description;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},n," ",o),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",s),title:a},a))}function f(e){var t,n=e.item,i=(0,o.Wl)(n);return i?r.createElement(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function y(e){var t,n,i=e.item,a=(0,c.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.xz)(null!=(t=i.docId)?t:void 0);return r.createElement(m,{href:i.href,icon:a,title:i.label,description:null!=(n=i.description)?n:null==l?void 0:l.description})}function b(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,n=(0,o.jA)();return r.createElement(v,{items:n.items,className:t})}function v(e){var t=e.items,n=e.className;if(!t)return r.createElement(g,e);var a=(0,o.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e}))})))}},7829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=n(2991),c=n(3791),l=["components"],p={title:"Deploying web app",sidebar_label:"Deploying web app",slug:"/guides/python/deploying-web-app"},u=void 0,s={unversionedId:"guides/python/deploying-web-app/overview",id:"guides/python/deploying-web-app/overview",title:"Deploying web app",description:"Flet\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u90e8\u7f72\u4e3a\u201c\u72ec\u7acb\u201d Web\u5e94\u7528\u7a0b\u5e8f\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u7684Python\u5e94\u7528\u7a0b\u5e8f\u548cFlet Web\u670d\u52a1\u5668\u4f5c\u4e3a\u6346\u7ed1\u5305\u4e00\u8d77\u90e8\u7f72\u3002",source:"@site/docs/guides/python/deploying-web-app/overview.md",sourceDirName:"guides/python/deploying-web-app",slug:"/guides/python/deploying-web-app",permalink:"/website/docs/guides/python/deploying-web-app",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/deploying-web-app/overview.md",tags:[],version:"current",frontMatter:{title:"Deploying web app",sidebar_label:"Deploying web app",slug:"/guides/python/deploying-web-app"},sidebar:"docs",previous:{title:"Publishing static website",permalink:"/website/docs/guides/python/publishing-static-website"},next:{title:"Customizing web app",permalink:"/website/docs/guides/python/deploying-web-app/customizing-web-app"}},d={},m=[],f={toc:m};function y(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Flet\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u90e8\u7f72\u4e3a\u201c\u72ec\u7acb\u201d Web\u5e94\u7528\u7a0b\u5e8f\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u7684Python\u5e94\u7528\u7a0b\u5e8f\u548cFlet Web\u670d\u52a1\u5668\u4f5c\u4e3a\u6346\u7ed1\u5305\u4e00\u8d77\u90e8\u7f72\u3002"),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);