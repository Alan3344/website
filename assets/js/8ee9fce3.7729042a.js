"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[1700],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3901:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(3743),i="tableOfContentsInline_prmo";function o(e){var t=e.toc,n=e.minHeadingLevel,o=e.maxHeadingLevel;return a.createElement("div",{className:i},a.createElement(r.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},3743:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(7462),r=n(3366),i=n(7294),o=n(6668),l=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,r.Z)(e,l);n>=0?t[n].children.push(i):a.push(i)})),a}function p(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=p({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function c(e,t){var n,a,r=t.anchorTopOffset,i=e.find((function(e){return u(e).top>=r}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(n=e[e.length-1])?n:null}function m(){var e=(0,i.useRef)(0),t=(0,o.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){var t=(0,i.useRef)(void 0),n=m();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,i=e.minHeadingLevel,o=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),s=c(l,{anchorTopOffset:n.current}),p=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===p)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function g(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?i.createElement("ul",{className:r?void 0:n},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(g,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var f=i.memo(g),h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function k(e){var t=e.toc,n=e.className,l=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,c=void 0===u?"table-of-contents__link":u,m=e.linkActiveClassName,g=void 0===m?void 0:m,k=e.minHeadingLevel,v=e.maxHeadingLevel,N=(0,r.Z)(e,h),y=(0,o.L)(),b=null!=k?k:y.tableOfContents.minHeadingLevel,_=null!=v?v:y.tableOfContents.maxHeadingLevel,w=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return p({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:b,maxHeadingLevel:_});return d((0,i.useMemo)((function(){if(c&&g)return{linkClassName:c,linkActiveClassName:g,minHeadingLevel:b,maxHeadingLevel:_}}),[c,g,b,_])),i.createElement(f,(0,a.Z)({toc:w,className:l,linkClassName:c},N))}},2413:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(3901),l=["components"],s={slug:"user-authentication",title:"User authentication",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},p=void 0,u={permalink:"/website/blog/user-authentication",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2022-09-27-user-authentication.md",source:"@site/blog/2022-09-27-user-authentication.md",title:"User authentication",description:"User authentication in Flet is here! \ud83c\udf89",date:"2022-09-27T00:00:00.000Z",formattedDate:"September 27, 2022",tags:[{label:"release",permalink:"/website/blog/tags/release"}],readingTime:2.86,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"user-authentication",title:"User authentication",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},prevItem:{title:"Gesture detector",permalink:"/website/blog/gesture-detector"},nextItem:{title:"File picker and uploads",permalink:"/website/blog/file-picker-and-uploads"}},c={authorsImageUrls:[void 0]},m=[{value:"Authentication",id:"authentication",level:2},{value:"Client storage",id:"client-storage",level:2},{value:"Session storage",id:"session-storage",level:2},{value:"Encryption API",id:"encryption-api",level:2},{value:"Other improvements",id:"other-improvements",level:2}],d={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"User authentication in Flet is here! \ud83c\udf89"),(0,i.kt)("p",null,'Now you can implement user authentication ("Login with X" buttons) in your Flet app using 3rd-party identity providers such as GitHub, Google, Azure, Auth0, LinkedIn and others:'),(0,i.kt)("img",{src:"/img/docs/getting-started/authentication/github-oauth-authorize.png",className:"screenshot-40"}),(0,i.kt)("p",null,"Traditionally, this release is not just about authentication, but it adds a ton of accompanying functionality and small improvements:"),(0,i.kt)(o.Z,{toc:m,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Flet authentication features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Works with Flet desktop, web and mobile apps."),(0,i.kt)("li",{parentName:"ul"},"Using multiple authentication providers in one app."),(0,i.kt)("li",{parentName:"ul"},"Built-in OAuth providers with automatic user details fetching:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"GitHub"),(0,i.kt)("li",{parentName:"ul"},"Azure"),(0,i.kt)("li",{parentName:"ul"},"Google"),(0,i.kt)("li",{parentName:"ul"},"Auth0"))),(0,i.kt)("li",{parentName:"ul"},"Optional groups fetching."),(0,i.kt)("li",{parentName:"ul"},"Automatic token refresh."),(0,i.kt)("li",{parentName:"ul"},'Login with a saved token ("Remember me").'),(0,i.kt)("li",{parentName:"ul"},"Custom OAuth providers.")),(0,i.kt)("p",null,'A simple example on how to add "Login with GitHub" button to your Flet app:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nimport flet as ft\nfrom flet.auth.providers.github_oauth_provider import GitHubOAuthProvider\n\ndef main(page: ft.Page):\n\n    provider = GitHubOAuthProvider(\n        client_id=os.getenv("GITHUB_CLIENT_ID"),\n        client_secret=os.getenv("GITHUB_CLIENT_SECRET"),\n        redirect_url="http://localhost:8550/api/oauth/redirect",\n    )\n\n    def login_click(e):\n        page.login(provider)\n\n    def on_login(e):\n        print("Access token:", page.auth.token.access_token)\n        print("User ID:", page.auth.user.id)\n\n    page.on_login = on_login\n    page.add(ft.ElevatedButton("Login with GitHub", on_click=login_click))\n\nft.app(target=main, port=8550, view=ft.AppView.WEB_BROWSER)\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Before running the app set the secret environment variables in a command line:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'$ export GITHUB_CLIENT_ID="<client_id>"\n$ export GITHUB_CLIENT_SECRET="<client_secret>"\n'))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/guides/python/authentication"},"Read Authentication guide for more information and examples"),"."),(0,i.kt)("h2",{id:"client-storage"},"Client storage"),(0,i.kt)("p",null,"Flet's client storage API that allows storing key-value data on a client side in a persistent storage. Flet implementation uses ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/packages/shared_preferences"},(0,i.kt)("inlineCode",{parentName:"a"},"shared_preferences"))," Flutter package."),(0,i.kt)("p",null,"Writing data to the storage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'page.client_storage.set("key", "value")\n')),(0,i.kt)("p",null,"Reading data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'value = page.client_storage.get("key")\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/guides/python/client-storage"},"Read Client storage guide for more information and examples"),"."),(0,i.kt)("h2",{id:"session-storage"},"Session storage"),(0,i.kt)("p",null,"Flet introduces an API for storing key-value data in user's session on a server side."),(0,i.kt)("p",null,"Writing data to the session:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'page.session.set("key", "value")\n')),(0,i.kt)("p",null,"Reading data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'value = page.session.get("key")\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/guides/python/session-storage"},"Read Session storage guide for more information and examples")),(0,i.kt)("h2",{id:"encryption-api"},"Encryption API"),(0,i.kt)("p",null,"In this release Flet introduces utility methods to encrypt and decrypt sensitive text data using symmetric algorithm (where the same key is used for encryption and decryption). It uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fernet/spec/blob/master/Spec.md"},"Fernet")," implementation from ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/cryptography/"},"cryptography")," package, which is AES 128 with some additional hardening, plus PBKDF2 to derive encryption key from a user passphrase."),(0,i.kt)("p",null,"Encrypting data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from flet.security import encrypt, decrypt\nsecret_key = "S3CreT!"\nplain_text = "This is a secret message!"\nencrypted_data = encrypt(plain_text, secret_key)\n')),(0,i.kt)("p",null,"Decrypting data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from flet.security import encrypt, decrypt\nsecret_key = "S3CreT!"\nplain_text = decrypt(encrypted_data, secret_key)\nprint(plain_text)\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/guides/python/encrypting-sensitive-data"},"Continue reading for more information and examples"),"."),(0,i.kt)("h2",{id:"other-improvements"},"Other improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SVG image support (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/flet-dev/examples/blob/main/python/controls/image/svg-image.py"},"example"),") and new images properties:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/controls/image#color"},(0,i.kt)("inlineCode",{parentName:"a"},"Image.color"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/controls/image#color_blend_mode"},(0,i.kt)("inlineCode",{parentName:"a"},"Image.color_blend_mode"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/controls/image#semantics_label"},(0,i.kt)("inlineCode",{parentName:"a"},"Image.semantics_label"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/controls/image#gapless_playback"},(0,i.kt)("inlineCode",{parentName:"a"},"Image.gapless_playback"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/python/animations#animation-end-callback"},(0,i.kt)("inlineCode",{parentName:"a"},"on_animation_end")," callback")," to chain animations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/controls/container#clip_behavior"},(0,i.kt)("inlineCode",{parentName:"a"},"Container.clip_behavior")," property"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/controls/page#window_bgcolor"},(0,i.kt)("inlineCode",{parentName:"a"},"page.window_bgcolor"))," to make cool transparent app window:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\ndef main(page: ft.Page):\n    page.window_bgcolor = ft.colors.TRANSPARENT\n    page.bgcolor=ft.colors.TRANSPARENT\n    page.window_title_bar_hidden = True\n    page.window_frameless = True\n    page.window_left = 400\n    page.window_top = 400\n    page.add(ft.ElevatedButton("I\'m a floating button!"))\nft.app(target=main)\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/controls/page#get_clipboard"},(0,i.kt)("inlineCode",{parentName:"a"},"page.get_clipboard()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/controls/page#launch_urlurl"},(0,i.kt)("inlineCode",{parentName:"a"},"page.launch_url()"))," - better control with additional arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web_window_name")," - window tab/name to open URL in: ",(0,i.kt)("inlineCode",{parentName:"li"},"_self")," - the same tab, ",(0,i.kt)("inlineCode",{parentName:"li"},"_blank")," - a new tab or ",(0,i.kt)("inlineCode",{parentName:"li"},"<your name>")," - a named tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web_popup_window")," - set to ",(0,i.kt)("inlineCode",{parentName:"li"},"True")," to display a URL in a browser popup window. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"False"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"window_width")," - optional, popup window width."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"window_height")," - optional, popup window height."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/controls/page#window_to_front"},(0,i.kt)("inlineCode",{parentName:"a"},"page.window_to_front()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/controls/page#close_in_app_web_view"},(0,i.kt)("inlineCode",{parentName:"a"},"page.close_in_app_web_view()")))),(0,i.kt)("p",null,"Upgrade Flet module to the latest version (",(0,i.kt)("inlineCode",{parentName:"p"},"pip install flet --upgrade"),"), integrate auth in your app and ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"let us know")," what you think!"),(0,i.kt)("p",null,"Enjoy!"))}g.isMDXComponent=!0}}]);