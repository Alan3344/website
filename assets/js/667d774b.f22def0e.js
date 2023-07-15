"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[4792],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},662:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={title:"Self Hosting",sidebar_label:"Self Hosting",slug:"self-hosting"},l=void 0,s={unversionedId:"guides/python/deploying-web-app/hosting-providers/self-hosting",id:"guides/python/deploying-web-app/hosting-providers/self-hosting",title:"Self Hosting",description:"Host a Flet app on your own server with NGINX.",source:"@site/docs/guides/python/deploying-web-app/hosting-providers/self-hosting.md",sourceDirName:"guides/python/deploying-web-app/hosting-providers",slug:"/guides/python/deploying-web-app/hosting-providers/self-hosting",permalink:"/docs/guides/python/deploying-web-app/hosting-providers/self-hosting",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/deploying-web-app/hosting-providers/self-hosting.md",tags:[],version:"current",frontMatter:{title:"Self Hosting",sidebar_label:"Self Hosting",slug:"self-hosting"},sidebar:"docs",previous:{title:"Replit",permalink:"/docs/guides/python/deploying-web-app/hosting-providers/replit"},next:{title:"Logging",permalink:"/docs/guides/python/logging"}},u={},d=[{value:"Setup Flet Environment",id:"setup-flet-environment",level:2},{value:"<code>requirements.txt</code> and virtualenv",id:"requirementstxt-and-virtualenv",level:3},{value:"Sample <code>main.py</code> Flet app",id:"sample-mainpy-flet-app",level:3},{value:"Automatically Start Flet Server",id:"automatically-start-flet-server",level:2},{value:"Create systemd unit file",id:"create-systemd-unit-file",level:3},{value:"Enable the Flet server",id:"enable-the-flet-server",level:3},{value:"NGINX Proxy Setup",id:"nginx-proxy-setup",level:2}],c={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Host a Flet app on your own server with NGINX."),(0,o.kt)("p",null,"There are free and inexpensive cloud server tiers available at ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/free/"},"AWS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.oracle.com/cloud/free/"},"Oracle"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.linode.com/pricing/"},"Linode"),", and more."),(0,o.kt)("h2",{id:"setup-flet-environment"},"Setup Flet Environment"),(0,o.kt)("h3",{id:"requirementstxt-and-virtualenv"},(0,o.kt)("inlineCode",{parentName:"h3"},"requirements.txt")," and virtualenv"),(0,o.kt)("p",null,"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," with a list of application dependencies. At minimum it should contain ",(0,o.kt)("inlineCode",{parentName:"p"},"flet")," module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"flet>=0.2.4\n")),(0,o.kt)("p",null,"Create a virtualenv and install requirements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python -m venv .venv\nsource .venv/bin/activate\npip install -r requirements.txt\n")),(0,o.kt)("h3",{id:"sample-mainpy-flet-app"},"Sample ",(0,o.kt)("inlineCode",{parentName:"h3"},"main.py")," Flet app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\nimport os\n\n\n# set Flet path to an empty string to serve at the root URL (e.g., https://lizards.ai/)\n# or a folder/path to serve beneath the root (e.g., https://lizards.ai/ui/path\nDEFAULT_FLET_PATH = \'\'  # or \'ui/path\'\nDEFAULT_FLET_PORT = 8502\n\n\ndef main(page: ft.Page):\n    page.title = "You Enjoy Mychatbot"\n    page.add(ft.Text("Reba put a stopper in the bottom of the tub"))\n\n\nif __name__ == "__main__":\n    flet_path = os.getenv("FLET_PATH", DEFAULT_FLET_PATH)\n    flet_port = int(os.getenv("FLET_PORT", DEFAULT_FLET_PORT))\n    ft.app(name=flet_path, target=main, view=None, port=flet_port)\n')),(0,o.kt)("h2",{id:"automatically-start-flet-server"},"Automatically Start Flet Server"),(0,o.kt)("h3",{id:"create-systemd-unit-file"},"Create systemd unit file"),(0,o.kt)("p",null,"Automatically start the Flet server using a systemd service unit file ",(0,o.kt)("inlineCode",{parentName:"p"},"flet.service"),"."),(0,o.kt)("p",null,"Setup below assumes your flet app script is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/flet-app/main.py"),". Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Group"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WorkingDirectory"),", etc. as per your setup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},'[Unit]\nDescription=Flet Server\nAfter=network.target\n\n[Service]\nUser=ubuntu\nGroup=ubuntu\nWorkingDirectory=/home/ubuntu/flet-app\nEnvironment="PATH=/home/ubuntu/flet-app/.venv/bin"\nExecStart=/home/ubuntu/flet-app/.venv/bin/python /home/ubuntu/flet-app/main.py\n\n[Install]\nWantedBy=multi-user.target\n')),(0,o.kt)("h3",{id:"enable-the-flet-server"},"Enable the Flet server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /etc/systemd/system\nsudo ln -s /home/ubuntu/flet-app/flet.service\nsudo systemctl start flet\nsudo systemctl enable flet\nsudo systemctl status flet\n")),(0,o.kt)("h2",{id:"nginx-proxy-setup"},"NGINX Proxy Setup"),(0,o.kt)("p",null,"NGINX will proxy the Flet app and the websocket."),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/*")," config file, updating path and port as needed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},'    location / {\n        proxy_pass         http://127.0.0.1:8502/;\n        proxy_http_version 1.1;\n        proxy_set_header   Upgrade $http_upgrade;\n        proxy_set_header   Connection keep-alive;\n        proxy_set_header   Host $host;\n        proxy_cache_bypass $http_upgrade;\n        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header   X-Forwarded-Proto $scheme;\n    }\n  \n    location /ws {\n        proxy_pass         http://127.0.0.1:8502/ws;\n        proxy_http_version 1.1;\n        proxy_set_header   Upgrade $http_upgrade;\n        proxy_set_header   Connection "upgrade";\n        proxy_set_header   Host $host;\n        proxy_cache_bypass $http_upgrade;\n        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header   X-Forwarded-Proto $scheme;\n    }\n')),(0,o.kt)("p",null,"That's it! Restart NGINX, and open your app in a browser."))}f.isMDXComponent=!0}}]);