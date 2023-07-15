"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[5066],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,m=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return n?o.createElement(m,i(i({ref:t},g),{},{components:n})):o.createElement(m,i({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1423:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],a={title:"Logging",sidebar_label:"Logging"},s=void 0,p={unversionedId:"guides/python/logging",id:"guides/python/logging",title:"Logging",description:"This article explains how to control level of the logs messages generated by Flet library and its underlying components. You may need to enable detailed logging to troubleshoot Flet library or when submitting a new Flet issue.",source:"@site/docs/guides/python/logging.md",sourceDirName:"guides/python",slug:"/guides/python/logging",permalink:"/docs/guides/python/logging",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/logging.md",tags:[],version:"current",frontMatter:{title:"Logging",sidebar_label:"Logging"},sidebar:"docs",previous:{title:"Self Hosting",permalink:"/docs/guides/python/deploying-web-app/hosting-providers/self-hosting"},next:{title:"Tutorials",permalink:"/docs/tutorials"}},g={},u=[{value:"Python",id:"python",level:2},{value:"Fletd server",id:"fletd-server",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This article explains how to control level of the logs messages generated by Flet library and its underlying components. You may need to enable detailed logging to troubleshoot Flet library or when submitting a new Flet issue."),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("p",null,"Flet Python modules expose named loggers: ",(0,l.kt)("inlineCode",{parentName:"p"},"flet_core")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"flet"),"."),(0,l.kt)("p",null,"To enable detailed/verbose Flet logging in your program add this code before calling ",(0,l.kt)("inlineCode",{parentName:"p"},"ft.app()"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import logging\nlogging.basicConfig(level=logging.DEBUG)\n")),(0,l.kt)("p",null,"This will enable loggers across all Flet modules (",(0,l.kt)("inlineCode",{parentName:"p"},"flet_core")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"flet"),")."),(0,l.kt)("p",null,"To reduce verbosity you may suppress logging messages from ",(0,l.kt)("inlineCode",{parentName:"p"},"flet_core")," module, but adding:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'logging.getLogger("flet_core").setLevel(logging.INFO)\n')),(0,l.kt)("p",null,"Debug logging is usually needed for troubleshooting purposes, when submitting a new Flet issue."),(0,l.kt)("p",null,"In the most cases you should be fine with ",(0,l.kt)("inlineCode",{parentName:"p"},"INFO")," logging level."),(0,l.kt)("h2",{id:"fletd-server"},"Fletd server"),(0,l.kt)("p",null,"You can control the logging of Fletd - built-in Flet web server."),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"flet")," Python logger level is configured its value is implicitly passed to Fletd server and you can see its log messages in the output."),(0,l.kt)("p",null,"However, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"FLET_LOG_LEVEL")," environment variable to override Fletd log level: ",(0,l.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"warning"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"panic"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"fatal"),"."),(0,l.kt)("p",null,"Additionally, to redirect Flet logs output to a file you can set ",(0,l.kt)("inlineCode",{parentName:"p"},"FLET_LOG_TO_FILE")," environment variable to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),". Flet logs will be saved to ",(0,l.kt)("inlineCode",{parentName:"p"},"/tmp/flet-server.log")," on macOS and Linux and to ",(0,l.kt)("inlineCode",{parentName:"p"},"%TEMP%\\flet-server.log")," on Windows."))}c.isMDXComponent=!0}}]);