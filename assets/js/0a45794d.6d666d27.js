"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[7406],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"Creating Flet apps in Python",description:"Learn how to build Flet apps in Python.",sidebar_label:"Getting started"},p=void 0,s={unversionedId:"guides/python/getting-started",id:"guides/python/getting-started",title:"Creating Flet apps in Python",description:"Learn how to build Flet apps in Python.",source:"@site/docs/guides/python/getting-started.md",sourceDirName:"guides/python",slug:"/guides/python/getting-started",permalink:"/docs/guides/python/getting-started",draft:!1,editUrl:"https://github.com/flet-dev/website/edit/main/docs/guides/python/getting-started.md",tags:[],version:"current",frontMatter:{title:"Creating Flet apps in Python",description:"Learn how to build Flet apps in Python.",sidebar_label:"Getting started"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Testing on iOS",permalink:"/docs/guides/python/testing-on-ios"}},d={},c=[{value:"Installing <code>flet</code> module",id:"installing-flet-module",level:2},{value:"Linux",id:"linux",level:3},{value:"WSL",id:"wsl",level:3},{value:"Basic app structure",id:"basic-app-structure",level:2},{value:"Controls",id:"controls",level:2},{value:"<code>visible</code> property",id:"visible-property",level:3},{value:"<code>disabled</code> property",id:"disabled-property",level:3},{value:"Control Refs",id:"control-refs",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To write a Flet app you don't need to be front-end guru, but it's recommended to have a basic knowledge of Python and object-oriented programming."),(0,o.kt)("p",null,"In this guide we'll study the structure of a Flet app, learn how to output data using Flet controls, request data from a user and build basic page layouts. We will also cover some packaging and deployment options to deliver a ready app to your users."),(0,o.kt)("h2",{id:"installing-flet-module"},"Installing ",(0,o.kt)("inlineCode",{parentName:"h2"},"flet")," module"),(0,o.kt)("p",null,"Flet requires Python 3.7 or above. To start with Flet, you need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"flet")," module first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install flet\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To upgrade ",(0,o.kt)("inlineCode",{parentName:"p"},"flet")," module run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install flet --upgrade\n"))),(0,o.kt)("p",null,"To install Flet pre-release (for advanced users) run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install flet --pre\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We recommend installing pre-release builds into a virtual environment.")),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("p",null,"Running Flet apps on Linux and WSL requires ",(0,o.kt)("a",{parentName:"p",href:"https://gstreamer.freedesktop.org/"},"GStreamer")," libraries installed. Most probably you already have them in your system, but if you are getting ",(0,o.kt)("inlineCode",{parentName:"p"},"error while loading shared libraries: libgstapp-1.0.so.0: cannot open shared object file: No such file or directory")," while running Flet app then you need to install GStreamer."),(0,o.kt)("p",null,"To install GStreamer on Ubuntu/Debian run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-doc gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://gstreamer.freedesktop.org/documentation/installing/on-linux.html?gi-language=c"},"this guide")," for installing on other Linux distributives."),(0,o.kt)("h3",{id:"wsl"},"WSL"),(0,o.kt)("p",null,"Flet apps can be run on WSL2. If you are getting ",(0,o.kt)("inlineCode",{parentName:"p"},"cannot open display")," error ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/wslg/wiki/Diagnosing-%22cannot-open-display%22-type-issues-with-WSLg"},"following this guide")," for troubleshooting."),(0,o.kt)("h2",{id:"basic-app-structure"},"Basic app structure"),(0,o.kt)("p",null,"A very minimal Flet app has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import flet as ft\n\ndef main(page: ft.Page):\n    # add/update controls on Page\n    pass\n\nft.app(target=main)\n")),(0,o.kt)("img",{src:"/img/docs/getting-started/basic-app-structure.png",className:"screenshot-50"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'This section is intentionally called "basic" as later in this guide we\'ll look at more real-world approaches to app structure with reusable controls.')),(0,o.kt)("p",null,"A typical Flet program ends with a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"flet.app()")," where the app starts waiting for new user sessions. Function ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," is an entry point in a Flet application. It's being called on a new thread for every user session with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Page")," instance passed into it. When running Flet app in the browser a new user session is started for every opened tab or page. When running as a desktop app there is only one session created."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Page"),' is like a "canvas" specific to a user, a visual state of a user session. To build an application UI you add and remove controls to a page, update their properties. Code sample above will be displaying just a blank page to every user.'),(0,o.kt)("p",null,"By default, Flet app starts in a native OS window, which is very handy for developing. However, you can open it in a new browser window by modifying a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"flet.app")," as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ft.app(target=main, view=ft.AppView.WEB_BROWSER)\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Internally, every Flet app is a web app and even if it's opened in a native OS window a built-in web server is still started on a background. Flet web server is called \"Fletd\" and by default it's listening on a random TCP port. You can specify a custom TCP port and then open the app in the browser along with desktop view:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"flet.app(port=8550, target=main)\n")),(0,o.kt)("p",{parentName:"admonition"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:<port>")," in your browser to see web version of your Flet app.")),(0,o.kt)("h2",{id:"controls"},"Controls"),(0,o.kt)("p",null,"User interface is made of ",(0,o.kt)("strong",{parentName:"p"},"Controls")," (aka widgets). To make controls visible to a user they must be added to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Page")," or inside other controls. Page is the top-most control. Nesting controls into each other could be represented as a tree with Page as a root."),(0,o.kt)("p",null,"Controls are just regular Python classes. Create control instances via constructors with parameters matching their properties, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'t = ft.Text(value="Hello, world!", color="green")\n')),(0,o.kt)("p",null,"To display control on a page add it to ",(0,o.kt)("inlineCode",{parentName:"p"},"controls")," list of a Page and call ",(0,o.kt)("inlineCode",{parentName:"p"},"page.update()")," to send page changes to a browser or desktop client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page: ft.Page):\n    t = ft.Text(value="Hello, world!", color="green")\n    page.controls.append(t)\n    page.update()\n\nft.app(target=main)\n')),(0,o.kt)("img",{src:"/img/docs/getting-started/controls-text.png",className:"screenshot-50"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In the following examples we will be showing just the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function.")),(0,o.kt)("p",null,"You can modify control properties and the UI will be updated on the next ",(0,o.kt)("inlineCode",{parentName:"p"},"page.update()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'t = ft.Text()\npage.add(t) # it\'s a shortcut for page.controls.append(t) and then page.update()\n\nfor i in range(10):\n    t.value = f"Step {i}"\n    page.update()\n    time.sleep(1)\n')),(0,o.kt)("p",null,'Some controls are "container" controls (like Page) which could contain other controls. For example, ',(0,o.kt)("inlineCode",{parentName:"p"},"Row")," control allows arranging other controls in a row one-by-one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'page.add(\n    ft.Row(controls=[\n        ft.Text("A"),\n        ft.Text("B"),\n        ft.Text("C")\n    ])\n)\n')),(0,o.kt)("p",null,"or ",(0,o.kt)("inlineCode",{parentName:"p"},"TextField")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ElevatedButton")," next to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'page.add(\n    ft.Row(controls=[\n        ft.TextField(label="Your name"),\n        ft.ElevatedButton(text="Say my name!")\n    ])\n)\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"page.update()")," is smart enough to send only the changes made since its last call, so you can add a couple of new controls to the page, remove some of them, change other controls' properties and then call ",(0,o.kt)("inlineCode",{parentName:"p"},"page.update()")," to do a batched update, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'for i in range(10):\n    page.controls.append(ft.Text(f"Line {i}"))\n    if i > 4:\n        page.controls.pop(0)\n    page.update()\n    time.sleep(0.3)\n')),(0,o.kt)("p",null,"Some controls, like buttons, could have event handlers reacting on a user input, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"ElevatedButton.on_click"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def button_clicked(e):\n    page.add(ft.Text("Clicked!"))\n\npage.add(ft.ElevatedButton(text="Click me", on_click=button_clicked))\n')),(0,o.kt)("p",null,"and more advanced example for a simple To-Do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef main(page):\n    def add_clicked(e):\n        page.add(ft.Checkbox(label=new_task.value))\n        new_task.value = ""\n        new_task.focus()\n        new_task.update()\n\n    new_task = ft.TextField(hint_text="Whats needs to be done?", width=300)\n    page.add(ft.Row([new_task, ft.ElevatedButton("Add", on_click=add_clicked)]))\n\nft.app(target=main)\n')),(0,o.kt)("img",{src:"/img/docs/getting-started/simple-ToDo.png",className:"screenshot-50"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Flet implements ",(0,o.kt)("em",{parentName:"p"},"imperative"),' UI model where you "manually" build application UI with stateful controls and then mutate it by updating control properties. Flutter implements ',(0,o.kt)("em",{parentName:"p"},"declarative"),' model where UI is automatically re-built on application data changes.\nManaging application state in modern frontend applications is inherently complex task and Flet\'s "old-school" approach could be more attractive to programmers without frontend experience.')),(0,o.kt)("h3",{id:"visible-property"},(0,o.kt)("inlineCode",{parentName:"h3"},"visible")," property"),(0,o.kt)("p",null,"Every control has ",(0,o.kt)("inlineCode",{parentName:"p"},"visible")," property which is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by default - control is rendered on the page. Setting ",(0,o.kt)("inlineCode",{parentName:"p"},"visible")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," completely prevents control (and all its children if any) from rendering on a page canvas. Hidden controls cannot be focused or selected with a keyboard or mouse and they do not emit any events."),(0,o.kt)("h3",{id:"disabled-property"},(0,o.kt)("inlineCode",{parentName:"h3"},"disabled")," property"),(0,o.kt)("p",null,"Every control has ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled")," property which is ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," by default - control and all its children are enabled.\n",(0,o.kt)("inlineCode",{parentName:"p"},"disabled")," property is mostly used with data entry controls like ",(0,o.kt)("inlineCode",{parentName:"p"},"TextField"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Dropdown"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Checkbox"),", buttons.\nHowever, ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled")," could be set to a parent control and its value will be propagated down to all children recursively."),(0,o.kt)("p",null,"For example, if you have a form with multiple entry control you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled")," property for each control individually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"first_name = ft.TextField()\nlast_name = ft.TextField()\nfirst_name.disabled = True\nlast_name.disabled = True\npage.add(first_name, last_name)\n")),(0,o.kt)("p",null,"or you can put form controls into container, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Column")," and then set ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled")," for the column:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"first_name = ft.TextField()\nlast_name = ft.TextField()\nc = ft.Column(controls=[\n    first_name,\n    last_name\n])\nc.disabled = True\npage.add(c)\n")),(0,o.kt)("h2",{id:"control-refs"},"Control Refs"),(0,o.kt)("p",null,"Flet controls are objects and to access their properties we need to keep references (variables) to those objects."),(0,o.kt)("p",null,"Consider the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{6-8,18,19,21}","{6-8,18,19,21}":!0},'import flet as ft\n\ndef main(page):\n\n    first_name = ft.TextField(label="First name", autofocus=True)\n    last_name = ft.TextField(label="Last name")\n    greetings = ft.Column()\n\n    def btn_click(e):\n        greetings.controls.append(ft.Text(f"Hello, {first_name.value} {last_name.value}!"))\n        first_name.value = ""\n        last_name.value = ""\n        page.update()\n        first_name.focus()\n\n    page.add(\n        first_name,\n        last_name,\n        ft.ElevatedButton("Say hello!", on_click=btn_click),\n        greetings,\n    )\n\nft.app(target=main)\n')),(0,o.kt)("img",{src:"/img/docs/getting-started/control-refs.png",className:"screenshot-50"}),(0,o.kt)("p",null,"In the very beginning of ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," method we create three controls which we are going to use in button's ",(0,o.kt)("inlineCode",{parentName:"p"},"on_click")," handler: two ",(0,o.kt)("inlineCode",{parentName:"p"},"TextField")," for first and last names and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Column")," - container for greeting messages. We create controls with all their properties set and in the end of ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," method, in ",(0,o.kt)("inlineCode",{parentName:"p"},"page.add()")," call, we use their references (variables)."),(0,o.kt)("p",null,"When more and more controls and event handlers are added it becomes challenging to keep all control definitions in one place, so they become scattered across ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," body. Glancing at ",(0,o.kt)("inlineCode",{parentName:"p"},"page.add()")," parameters it's hard to imagine (without constant jumping to variable definitions in IDE) what would the end form look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{2-5}","{2-5}":!0},'    page.add(\n        first_name,\n        last_name,\n        ft.ElevatedButton("Say hello!", on_click=btn_click),\n        greetings,\n    )\n')),(0,o.kt)("p",null,"Is ",(0,o.kt)("inlineCode",{parentName:"p"},"first_name")," a TextField, does it have autofocus set? Is greetings a ",(0,o.kt)("inlineCode",{parentName:"p"},"Row")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"Column"),"?"),(0,o.kt)("p",null,"Flet provides ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," utility class which allows to define a reference to the control, use that reference in event handlers and set the reference to a real control later, while building a tree. The idea comes from ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React"),"."),(0,o.kt)("p",null,"To define a new typed control reference:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"first_name = ft.Ref[ft.TextField]()\n")),(0,o.kt)("p",null,"To access referenced control (control de-reference) use ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref.current")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# empty first name\nfirst_name.current.value = ""\n')),(0,o.kt)("p",null,"To assign control to a reference, set ",(0,o.kt)("inlineCode",{parentName:"p"},"Control.ref")," property to a reference:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{2}","{2}":!0},'page.add(\n    ft.TextField(ref=first_name, label="First name", autofocus=True)\n)\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"All Flet controls have ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," property.")),(0,o.kt)("p",null,"We could re-write our program to use references:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{7-9,21-24}","{7-9,21-24}":!0},'import flet as ft\n\n\ndef main(page):\n\n    first_name = ft.Ref[ft.TextField]()\n    last_name = ft.Ref[ft.TextField]()\n    greetings = ft.Ref[ft.Column]()\n\n    def btn_click(e):\n        greetings.current.controls.append(\n            ft.Text(f"Hello, {first_name.current.value} {last_name.current.value}!")\n        )\n        first_name.current.value = ""\n        last_name.current.value = ""\n        page.update()\n        first_name.current.focus()\n\n    page.add(\n        ft.TextField(ref=first_name, label="First name", autofocus=True),\n        ft.TextField(ref=last_name, label="Last name"),\n        ft.ElevatedButton("Say hello!", on_click=btn_click),\n        ft.Column(ref=greetings),\n    )\n\nft.app(target=main)\n')),(0,o.kt)("img",{src:"/img/docs/getting-started/control-refs-rewritten.png",className:"screenshot-50"}),(0,o.kt)("p",null,"Now we can clearly see in ",(0,o.kt)("inlineCode",{parentName:"p"},"page.add()")," the structure of the page and all the controls it's built of."),(0,o.kt)("p",null,"Yes, the logic becomes a little bit more verbose as you need to add ",(0,o.kt)("inlineCode",{parentName:"p"},".current.")," to access ref's control, but it's a matter of personal preference :)"))}m.isMDXComponent=!0}}]);