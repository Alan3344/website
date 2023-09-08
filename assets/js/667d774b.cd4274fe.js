"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[4792],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||p;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<p;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},662:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(7462),o=n(3366),p=(n(7294),n(3905)),a=["components"],i={"\u6807\u9898":"\u81ea\u6258\u7ba1",sidebar_label:"\u81ea\u6258\u7ba1",Slug:"\u81ea\u6211\u6258\u7ba1"},l=void 0,s={unversionedId:"guides/python/deploying-web-app/hosting-providers/self-hosting",id:"guides/python/deploying-web-app/hosting-providers/self-hosting",title:"self-hosting",description:"\u4f7f\u7528nginx\u5728\u81ea\u5df1\u7684\u670d\u52a1\u5668\u4e0a\u6258\u7ba1Flet\u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/docs/guides/python/deploying-web-app/hosting-providers/self-hosting.md",sourceDirName:"guides/python/deploying-web-app/hosting-providers",slug:"/guides/python/deploying-web-app/hosting-providers/self-hosting",permalink:"/website/docs/guides/python/deploying-web-app/hosting-providers/self-hosting",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/deploying-web-app/hosting-providers/self-hosting.md",tags:[],version:"current",frontMatter:{"\u6807\u9898":"\u81ea\u6258\u7ba1",sidebar_label:"\u81ea\u6258\u7ba1",Slug:"\u81ea\u6211\u6258\u7ba1"},sidebar:"docs",previous:{title:"Replit",permalink:"/website/docs/guides/python/deploying-web-app/hosting-providers/replit"},next:{title:"Logging",permalink:"/website/docs/guides/python/logging"}},u={},d=[{value:"Sample <code>main.py</code> Flet app",id:"sample-mainpy-flet-app",level:3},{value:"\u81ea\u52a8\u542f\u52a8Flet\u670d\u52a1\u5668",id:"\u81ea\u52a8\u542f\u52a8flet\u670d\u52a1\u5668",level:2},{value:"\u521b\u5efaSystemd\u5355\u5143\u6587\u4ef6\u6587\u4ef6",id:"\u521b\u5efasystemd\u5355\u5143\u6587\u4ef6\u6587\u4ef6",level:3},{value:"\u542f\u7528Flet\u670d\u52a1\u5668",id:"\u542f\u7528flet\u670d\u52a1\u5668",level:3},{value:"nginx\u4ee3\u7406\u8bbe\u7f6e",id:"nginx\u4ee3\u7406\u8bbe\u7f6e",level:2}],c={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u4f7f\u7528nginx\u5728\u81ea\u5df1\u7684\u670d\u52a1\u5668\u4e0a\u6258\u7ba1Flet\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,p.kt)("p",null,"\u5728",(0,p.kt)("a",{parentName:"p",href:"https://aws.amazon.com/free/"},"AWS"),"\uff0c",(0,p.kt)("a",{parentName:"p",href:"https://www.oracle.com/cloud/free/"},"Oracle"),"\uff0c",(0,p.kt)("a",{parentName:"p",href:"https://www.linode.com/pricing/"},"Linode"),"\u7b49\u7b49\uff0c\u6709\u514d\u8d39\u4e14\u5ec9\u4ef7\u7684\u4e91\u670d\u52a1\u5668\u5c42\u53ef\u7528\u3002"),(0,p.kt)("p",null,"\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u4f9d\u8d56\u9879\u5217\u8868\u521b\u5efa",(0,p.kt)("inlineCode",{parentName:"p"},"requirements.txt"),"\u3002 \u81f3\u5c11\u5e94\u5305\u542b",(0,p.kt)("inlineCode",{parentName:"p"},"flet"),"\u6a21\u5757: "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-txt"},"flet>=0.2.4\n")),(0,p.kt)("p",null,"\u521b\u5efa\u4e00\u4e2aVirtualEnv\u5e76\u5b89\u88c5\u8981\u6c42: "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"python -m venv .venv\nsource .venv/bin/activate\npip install -r requirements.txt\n")),(0,p.kt)("h3",{id:"sample-mainpy-flet-app"},"Sample ",(0,p.kt)("inlineCode",{parentName:"h3"},"main.py")," Flet app"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\nimport os\n\n\n# set Flet path to an empty string to serve at the root URL (e.g., https://lizards.ai/)\n# or a folder/path to serve beneath the root (e.g., https://lizards.ai/ui/path\nDEFAULT_FLET_PATH = \'\'  # or \'ui/path\'\nDEFAULT_FLET_PORT = 8502\n\n\ndef main(page: ft.Page):\n    page.title = "You Enjoy Mychatbot"\n    page.add(ft.Text("Reba put a stopper in the bottom of the tub"))\n\n\nif __name__ == "__main__":\n    flet_path = os.getenv("FLET_PATH", DEFAULT_FLET_PATH)\n    flet_port = int(os.getenv("FLET_PORT", DEFAULT_FLET_PORT))\n    ft.app(name=flet_path, target=main, view=None, port=flet_port)\n')),(0,p.kt)("h2",{id:"\u81ea\u52a8\u542f\u52a8flet\u670d\u52a1\u5668"},"\u81ea\u52a8\u542f\u52a8Flet\u670d\u52a1\u5668"),(0,p.kt)("h3",{id:"\u521b\u5efasystemd\u5355\u5143\u6587\u4ef6\u6587\u4ef6"},"\u521b\u5efaSystemd\u5355\u5143\u6587\u4ef6\u6587\u4ef6"),(0,p.kt)("p",null,"\u4f7f\u7528SystemD\u670d\u52a1\u5355\u5143\u6587\u4ef6",(0,p.kt)("inlineCode",{parentName:"p"},"flet.service"),"\u81ea\u52a8\u542f\u52a8Flet\u670d\u52a1\u5668\u3002"),(0,p.kt)("p",null,"\u4e0b\u9762\u7684\u8bbe\u7f6e\u5047\u5b9a\u60a8\u7684Flet App\u811a\u672c\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"$ home/flet-app/main.py\u4e2d\u5b9a\u4e49\u3002 \u6839\u636e\u60a8\u7684\u8bbe\u7f6e\u66ff\u6362"),"User",(0,p.kt)("inlineCode",{parentName:"p"},"\uff0c"),"Group",(0,p.kt)("inlineCode",{parentName:"p"},"\uff0c"),"WorkingDirectory`\u7b49\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-txt"},'[Unit]\nDescription=Flet Server\nAfter=network.target\n\n[Service]\nUser=ubuntu\nGroup=ubuntu\nWorkingDirectory=/home/ubuntu/flet-app\nEnvironment="PATH=/home/ubuntu/flet-app/.venv/bin"\nExecStart=/home/ubuntu/flet-app/.venv/bin/python /home/ubuntu/flet-app/main.py\n\n[Install]\nWantedBy=multi-user.target\n')),(0,p.kt)("h3",{id:"\u542f\u7528flet\u670d\u52a1\u5668"},"\u542f\u7528Flet\u670d\u52a1\u5668"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"cd /etc/systemd/system\nsudo ln -s /home/ubuntu/flet-app/flet.service\nsudo systemctl start flet\nsudo systemctl enable flet\nsudo systemctl status flet\n")),(0,p.kt)("h2",{id:"nginx\u4ee3\u7406\u8bbe\u7f6e"},"nginx\u4ee3\u7406\u8bbe\u7f6e"),(0,p.kt)("p",null,"Nginx\u5c06\u4ee3\u7406Flet\u5e94\u7528\u7a0b\u5e8f\u548cWebsocket\u3002"),(0,p.kt)("p",null,"\u5728\u60a8\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"/etc/nginx/stites-vailable/*"),"config\u6587\u4ef6\u4e2d\uff0c\u6839\u636e\u9700\u8981\u66f4\u65b0\u8def\u5f84\u548c\u7aef\u53e3: "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-txt"},'    location / {\n        proxy_pass         http://127.0.0.1:8502/;\n        proxy_http_version 1.1;\n        proxy_set_header   Upgrade $http_upgrade;\n        proxy_set_header   Connection keep-alive;\n        proxy_set_header   Host $host;\n        proxy_cache_bypass $http_upgrade;\n        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header   X-Forwarded-Proto $scheme;\n    }\n  \n    location /ws {\n        proxy_pass         http://127.0.0.1:8502/ws;\n        proxy_http_version 1.1;\n        proxy_set_header   Upgrade $http_upgrade;\n        proxy_set_header   Connection "upgrade";\n        proxy_set_header   Host $host;\n        proxy_cache_bypass $http_upgrade;\n        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header   X-Forwarded-Proto $scheme;\n    }\n')),(0,p.kt)("p",null,"\u5c31\u662f\u8fd9\u6837\uff01 \u91cd\u65b0\u542f\u52a8NGINX\uff0c\u7136\u540e\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u5e94\u7528\u7a0b\u5e8f\u3002"))}f.isMDXComponent=!0}}]);