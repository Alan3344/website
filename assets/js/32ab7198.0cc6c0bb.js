"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[7776],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,g=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3901:function(e,t,n){n(7294),n(3743)},3743:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(3366),l=n(7294),i=n(6668),o=["parentIndex"];function u(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,o);n>=0?t[n].children.push(l):a.push(l)})),a}function p(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=p({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function c(e){var t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return c(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function m(){var e=(0,l.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){var t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),u=s(o,{anchorTopOffset:n.current}),p=e.find((function(e){return u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===p)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function g(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(g,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var f=l.memo(g),k=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,c=e.linkClassName,s=void 0===c?"table-of-contents__link":c,m=e.linkActiveClassName,g=void 0===m?void 0:m,h=e.minHeadingLevel,v=e.maxHeadingLevel,N=(0,r.Z)(e,k),_=(0,i.L)(),b=null!=h?h:_.tableOfContents.minHeadingLevel,y=null!=v?v:_.tableOfContents.maxHeadingLevel,w=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return p({toc:u(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:b,maxHeadingLevel:y});return d((0,l.useMemo)((function(){if(s&&g)return{linkClassName:s,linkActiveClassName:g,minHeadingLevel:b,maxHeadingLevel:y}}),[s,g,b,y])),l.createElement(f,(0,a.Z)({toc:w,className:o,linkClassName:s},N))}},6470:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=(n(3901),["components"]),o={slug:"user-authentication",title:"User authentication",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},u=void 0,p={permalink:"/website/blog/user-authentication",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2022-09-27-user-authentication.md",source:"@site/blog/2022-09-27-user-authentication.md",title:"User authentication",description:"Flet \u4e2d\u7684\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\u5728\u8fd9\u91cc\uff01 \ud83c\udf89",date:"2022-09-27T00:00:00.000Z",formattedDate:"September 27, 2022",tags:[{label:"release",permalink:"/website/blog/tags/release"}],readingTime:4.245,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"user-authentication",title:"User authentication",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},prevItem:{title:"Gesture detector",permalink:"/website/blog/gesture-detector"},nextItem:{title:"File picker and uploads",permalink:"/website/blog/file-picker-and-uploads"}},c={authorsImageUrls:[void 0]},s=[{value:"authentication",id:"authentication",level:2},{value:"\u5ba2\u6237\u7aef\u5b58\u50a8",id:"\u5ba2\u6237\u7aef\u5b58\u50a8",level:2},{value:"\u4f1a\u8bdd\u5b58\u50a8",id:"\u4f1a\u8bdd\u5b58\u50a8",level:2},{value:"\u52a0\u5bc6 API",id:"\u52a0\u5bc6-api",level:2},{value:"\u5176\u4ed6\u6539\u8fdb",id:"\u5176\u4ed6\u6539\u8fdb",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Flet \u4e2d\u7684\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\u5728\u8fd9\u91cc\uff01 \ud83c\udf89"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u5728 Flet \u5e94\u7528\u4e2d\u4f7f\u7528\u7b2c\u4e09\u65b9\u8eab\u4efd\u63d0\u4f9b\u8005\uff08\u4f8b\u5982 Github\uff0cGoogle\uff0cAzure\uff0cAuth0\uff0cauth0\uff0cLinkedIn \u7b49\uff09\u5728 Flet \u5e94\u7528\u4e2d\u5b9e\u73b0\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff08\u201c\u4f7f\u7528 X\u201d\u6309\u94ae\uff09:"),(0,l.kt)("img",{src:"/website/img/docs/getting-started/authentication/github-oauth-authorize.png",className:"screenshot-40"}),(0,l.kt)("p",null,"\u4f20\u7edf\u4e0a\uff0c\u6b64\u7248\u672c\u4e0d\u4ec5\u4e0e\u8eab\u4efd\u9a8c\u8bc1\u6709\u5173\uff0c\u800c\u4e14\u8fd8\u589e\u52a0\u4e86\u5927\u91cf\u968f\u9644\u529f\u80fd\u548c\u5c0f\u6539\u8fdb:"),(0,l.kt)("tocinline",{toc:s,maxheadinglevel:2}),(0,l.kt)("h2",{id:"authentication"},"authentication"),(0,l.kt)("p",null,"Flet \u8eab\u4efd\u9a8c\u8bc1\u529f\u80fd:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0e Flet \u684c\u9762\uff0cWeb \u548c\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u4e00\u8d77\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u591a\u4e2a\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u5546\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5e26\u6709\u81ea\u52a8\u7528\u6237\u8be6\u7ec6\u4fe1\u606f\u7684\u5185\u7f6e OAuth \u63d0\u4f9b\u5546\u83b7\u53d6:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"github"),(0,l.kt)("li",{parentName:"ul"},"azure"),(0,l.kt)("li",{parentName:"ul"},"\u8c37\u6b4c"),(0,l.kt)("li",{parentName:"ul"},"auth0"))),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u9009\u7ec4\u63d0\u53d6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u4ee4\u724c\u5237\u65b0\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4fdd\u5b58\u7684\u4ee4\u724c\u767b\u5f55\uff08\u201c\u8bb0\u4f4f\u6211\u201d\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 OAuth \u63d0\u4f9b\u5546\u3002")),(0,l.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u5728 Flet app:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nimport flet as ft\nfrom flet.auth.providers.github_oauth_provider import GitHubOAuthProvider\n\ndef main(page: ft.Page):\n\n    provider = GitHubOAuthProvider(\n        client_id=os.getenv("GITHUB_CLIENT_ID"),\n        client_secret=os.getenv("GITHUB_CLIENT_SECRET"),\n        redirect_url="http://localhost:8550/api/oauth/redirect",\n    )\n\n    def login_click(e):\n        page.login(provider)\n\n    def on_login(e):\n        print("Access token:", page.auth.token.access_token)\n        print("User ID:", page.auth.user.id)\n\n    page.on_login = on_login\n    page.add(ft.ElevatedButton("Login with GitHub", on_click=login_click))\n\nft.app(target=main, port=8550, view=ft.AppView.WEB_BROWSER)\n')),(0,l.kt)("p",null,":::\u6ce8\u610f\n\u5728\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u4e4b\u524d\uff0c\u8bf7\u5728\u547d\u4ee4\u884c\u4e2d\u8bbe\u7f6e\u79d8\u5bc6\u73af\u5883\u53d8\u91cf:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ export GITHUB_CLIENT_ID="<client_id>"\n$ export GITHUB_CLIENT_SECRET="<client_secret>"\n')),(0,l.kt)("p",null,":::"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/authentication"},"\u9605\u8bfb\u8eab\u4efd\u9a8c\u8bc1\u6307\u5357\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u548c\u793a\u4f8b"),"\u3002"),(0,l.kt)("h2",{id:"\u5ba2\u6237\u7aef\u5b58\u50a8"},"\u5ba2\u6237\u7aef\u5b58\u50a8"),(0,l.kt)("p",null,"Flet \u7684\u5ba2\u6237\u7aef\u5b58\u50a8 API \u5141\u8bb8\u5c06\u952e\u503c\u6570\u636e\u5b58\u50a8\u5728\u6301\u7eed\u5b58\u50a8\u4e2d\u7684\u5ba2\u6237\u7aef\u3002 Flet \u5b9e\u73b0\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://pub.dev/packages/shared_preferences"},(0,l.kt)("inlineCode",{parentName:"a"},"shared_preferences"))," flutter \u8f6f\u4ef6\u5305\u3002"),(0,l.kt)("p",null,"\u5c06\u6570\u636e\u5199\u5165\u5b58\u50a8:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'page.client_storage.set("key", "value")\n')),(0,l.kt)("p",null,"\u9605\u8bfb\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'value = page.client_storage.get("key")\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/client-storage"},"\u8bfb\u53d6\u5ba2\u6237\u5b58\u50a8\u6307\u5357\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u548c\u793a\u4f8b"),"\u3002"),(0,l.kt)("h2",{id:"\u4f1a\u8bdd\u5b58\u50a8"},"\u4f1a\u8bdd\u5b58\u50a8"),(0,l.kt)("p",null,"Flet \u5728\u670d\u52a1\u5668\u7aef\u5f15\u5165\u4e86\u7528\u4e8e\u5c06\u952e\u503c\u6570\u636e\u5b58\u50a8\u5728\u7528\u6237\u4f1a\u8bdd\u4e2d\u7684 API\u3002"),(0,l.kt)("p",null,"\u5c06\u6570\u636e\u5199\u5165\u4f1a\u8bdd:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'page.session.set("key", "value")\n')),(0,l.kt)("p",null,"\u9605\u8bfb\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'value = page.session.get("key")\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/session-storage"},"\u8bfb\u53d6\u4f1a\u8bdd\u5b58\u50a8\u6307\u5357\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u548c\u793a\u4f8b")),(0,l.kt)("h2",{id:"\u52a0\u5bc6-api"},"\u52a0\u5bc6 API"),(0,l.kt)("p",null,"\u5728\u6b64\u7248\u672c\u4e2d\uff0cFlet \u5c06\u4f7f\u7528\u5bf9\u79f0\u7b97\u6cd5\uff08\u5176\u4e2d\u76f8\u540c\u7684\u5bc6\u94a5\u7528\u4e8e\u52a0\u5bc6\u548c\u89e3\u5bc6\uff09\u5f15\u5165\u5b9e\u7528\u65b9\u6cd5\u6765\u5bf9\u654f\u611f\u7684\u6587\u672c\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\u548c\u89e3\u5bc6\u654f\u611f\u6587\u672c\u6570\u636e\u3002 \u5b83\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://pypi.org/project/cryptography/"},"cryptography"),"\u8f6f\u4ef6\u5305\u7684",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fernet/spec/blob/master/Spec.md"},"Fernet"),"\u5b9e\u73b0\uff0c\u5b83\u662f AES 128 \u5e26\u6709\u4e00\u4e9b\u989d\u5916\u786c\u5316\u7684 AES\uff0c\u52a0\u4e0a PBKDF2 \u6765\u4ece\u7528\u6237\u5bc6\u7801\u4e2d\u5f97\u51fa\u52a0\u5bc6\u5bc6\u94a5\u3002"),(0,l.kt)("p",null,"\u52a0\u5bc6\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from flet.security import encrypt, decrypt\nsecret_key = "S3CreT!"\nplain_text = "This is a secret message!"\nencrypted_data = encrypt(plain_text, secret_key)\n')),(0,l.kt)("p",null,"\u89e3\u5bc6\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from flet.security import encrypt, decrypt\nsecret_key = "S3CreT!"\nplain_text = decrypt(encrypted_data, secret_key)\nprint(plain_text)\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/guides/python/encrypting-sensitive-data"},"\u7ee7\u7eed\u9605\u8bfb\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u548c\u793a\u4f8b"),"\u3002"),(0,l.kt)("h2",{id:"\u5176\u4ed6\u6539\u8fdb"},"\u5176\u4ed6\u6539\u8fdb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"svg Image \u652f\u6301\uff08",(0,l.kt)("a",{parentName:"li",href:"https://github.com/flet-dev/examples/blob/main/python/controls/image/svg-image.py"},"example"),"\uff09\u548c\u65b0\u56fe\u50cf\u5c5e\u6027:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/controls/image#color"},(0,l.kt)("inlineCode",{parentName:"a"},"Image.color"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/controls/image#color_blend_mode"},(0,l.kt)("inlineCode",{parentName:"a"},"Image.color_blend_mode"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/controls/image#semantics_label"},(0,l.kt)("inlineCode",{parentName:"a"},"Image.semantics_label"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/controls/image#gapless_playback"},(0,l.kt)("inlineCode",{parentName:"a"},"Image.gapless_playback"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/guides/python/animations#animation-end-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"on_animation_end"),"\u56de\u8c03"),"\u5230\u94fe\u52a8\u753b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/controls/container#clip_behavior"},(0,l.kt)("inlineCode",{parentName:"a"},"Container.clip_behavior"),"\u5c5e\u6027"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/controls/page#window_bgcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"page.window_bgcolor")),"\u4ee5\u4f7f\u900f\u660e\u900f\u660e\u5e94\u7528\u7a0b\u5e8f\u7a97\u53e3:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\ndef main(page: ft.Page):\n    page.window_bgcolor = ft.colors.TRANSPARENT\n    page.bgcolor=ft.colors.TRANSPARENT\n    page.window_title_bar_hidden = True\n    page.window_frameless = True\n    page.window_left = 400\n    page.window_top = 400\n    page.add(ft.ElevatedButton("I\'m a floating button!"))\nft.app(target=main)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/controls/page#get_clipboard"},(0,l.kt)("inlineCode",{parentName:"a"},"page.get_clipboard()"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/controls/page#launch_urlurl"},(0,l.kt)("inlineCode",{parentName:"a"},"page.launch_url()"))," - \u66f4\u597d\u5730\u63a7\u5236\u5176\u4ed6\u53c2\u6570:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"web_window_name")," - \u7a97\u53e3\u9009\u9879\u5361\u7247/\u540d\u79f0\u8981\u6253\u5f00 url: ",(0,l.kt)("inlineCode",{parentName:"li"},"_self")," - \u76f8\u540c\u7684\u9009\u9879\u5361\u7247\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"_blank")," - \u4e00\u4e2a\u65b0\u7684\u9009\u9879\u5361\u7247\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"<your name>")," - \u4e00\u4e2a\u547d\u540d\u7684\u9009\u9879\u5361\u7247\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"web_popup_window")," - \u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"True"),"\u4ee5\u5728\u6d4f\u89c8\u5668\u5f39\u51fa\u7a97\u53e3\u4e2d\u663e\u793a URL\u3002 \u9ed8\u8ba4\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"False"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"window_width")," - \u53ef\u9009\uff0c\u5f39\u51fa\u7a97\u53e3\u5bbd\u5ea6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"window_height")," - \u53ef\u9009\uff0c\u5f39\u51fa\u7a97\u53e3\u9ad8\u5ea6\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/controls/page#window_to_front"},(0,l.kt)("inlineCode",{parentName:"a"},"page.window_to_front()"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/controls/page#close_in_app_web_view"},(0,l.kt)("inlineCode",{parentName:"a"},"page.close_in_app_web_view()")))),(0,l.kt)("p",null,"\u5347\u7ea7 Flet \u6a21\u5757\u5230\u6700\u65b0\u7248\u672c\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"pip install fles -upgrade"),"\uff09\uff0c\u5c06 auth \u96c6\u6210\u5728\u60a8\u7684\u5e94\u7528\u4e2d\uff0c\u5e76",(0,l.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"\u8ba9\u6211\u4eec\u77e5\u9053"),"\u60a8\u7684\u60f3\u6cd5\uff01"),(0,l.kt)("p",null,"\u4eab\u53d7\uff01"))}d.isMDXComponent=!0}}]);