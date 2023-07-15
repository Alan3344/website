"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[2123],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=s,y=c["".concat(l,".").concat(d)]||c[d]||g[d]||o;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(7462),s=n(3366),o=(n(7294),n(3905)),a=["components"],i={title:"Session storage",sidebar_label:"Session storage"},l=void 0,p={unversionedId:"guides/python/session-storage",id:"guides/python/session-storage",title:"Session storage",description:"Flet provides an API for storing key-value data in user's session on a server side.",source:"@site/docs/guides/python/session-storage.md",sourceDirName:"guides/python",slug:"/guides/python/session-storage",permalink:"/docs/guides/python/session-storage",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/session-storage.md",tags:[],version:"current",frontMatter:{title:"Session storage",sidebar_label:"Session storage"},sidebar:"docs",previous:{title:"Client storage",permalink:"/docs/guides/python/client-storage"},next:{title:"Encrypting sensitive data",permalink:"/docs/guides/python/encrypting-sensitive-data"}},u={},c=[],g={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Flet provides an API for storing key-value data in user's session on a server side."),(0,o.kt)("p",null,"Writing data to the session:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# strings\npage.session.set("key", "value")\n\n# numbers, booleans\npage.session.set("number.setting", 12345)\npage.session.set("bool_setting", True)\n\n# lists\npage.session.set("favorite_colors", ["read", "green", "blue"])\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"In the current Flet implementation the data stored in a session store is transient and is not preserved between app restarts.")),(0,o.kt)("p",null,"Reading data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# The value is automatically converted back to the original type\nvalue = page.session.get("key")\n\ncolors = page.session.get("favorite_colors")\n# colors = ["read", "green", "blue"]\n')),(0,o.kt)("p",null,"Check if a key exists:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'page.session.contains_key("key") # True if the key exists\n')),(0,o.kt)("p",null,"Get all keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"page.session.get_keys()\n")),(0,o.kt)("p",null,"Remove a value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'page.session.remove("key")\n')),(0,o.kt)("p",null,"Clear the session storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"page.session.clear()\n")))}d.isMDXComponent=!0}}]);