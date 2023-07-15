"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[1532],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),s=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),f=n,m=u["".concat(p,".").concat(f)]||u[f]||c[f]||r;return a?l.createElement(m,i(i({ref:t},d),{},{components:a})):l.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4962:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var l=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],o={slug:"file-picker-and-uploads",title:"File picker and uploads",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},p=void 0,s={permalink:"/website/blog/file-picker-and-uploads",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2022-09-02-file-picker-and-uploads.md",source:"@site/blog/2022-09-02-file-picker-and-uploads.md",title:"File picker and uploads",description:"Finally, File picker with uploads has arrived! \ud83c\udf89",date:"2022-09-02T00:00:00.000Z",formattedDate:"September 2, 2022",tags:[{label:"release",permalink:"/website/blog/tags/release"}],readingTime:3.79,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"file-picker-and-uploads",title:"File picker and uploads",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},prevItem:{title:"User authentication",permalink:"/website/blog/user-authentication"},nextItem:{title:"Fun with animations",permalink:"/website/blog/fun-with-animations"}},d={authorsImageUrls:[void 0]},u=[{value:"Using file picker in your app",id:"using-file-picker-in-your-app",level:2},{value:"Uploading files",id:"uploading-files",level:2},{value:"Upload storage",id:"upload-storage",level:3},{value:"Upload progress",id:"upload-progress",level:3}],c={toc:u};function f(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Finally, File picker with uploads has arrived! \ud83c\udf89"),(0,r.kt)("p",null,"File picker control opens a native OS dialog for selecting files and directories. It's based on a fantastic ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/file_picker"},"file_picker")," Flutter package."),(0,r.kt)("p",null,"It works on all platforms: Web, macOS, Window, Linux, iOS and Android."),(0,r.kt)("img",{src:"/img/docs/controls/file-picker/file-picker-all-modes-demo.png",className:"screenshot-80"}),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/file-picker/file-picker-all-modes.py"},"source code of the demo above"),"."),(0,r.kt)("p",null,"File picker allows opening three dialogs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pick files")," - one or multiple, any files or only specific types."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Save file")," - choose directory and file name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Get directory")," - select directory.")),(0,r.kt)("p",null,"When running Flet app in a browser only \"Pick files\" option is available and it's used for uploads only as it, obviously, doesn't return a full path to a selected file."),(0,r.kt)("p",null,"Where file picker really shines is a desktop! All three dialogs return full paths to selected files and directories - great assistance to your users!"),(0,r.kt)("h2",{id:"using-file-picker-in-your-app"},"Using file picker in your app"),(0,r.kt)("p",null,"It is recommended to add file picker to ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/page#overlay"},(0,r.kt)("inlineCode",{parentName:"a"},"page.overlay.controls"))," collection, so it doesn't affect the layout of your app. Despite file picker has 0x0 size it is still considered as a control when put into ",(0,r.kt)("inlineCode",{parentName:"p"},"Row")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Column"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import flet as ft\n\nfile_picker = ft.FilePicker()\npage.overlay.append(file_picker)\npage.update()\n")),(0,r.kt)("p",null,"To open file picker dialog call one of the three methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pick_files()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"save_file()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get_directory_path()"))),(0,r.kt)("p",null,"Lambda works pretty nice for that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ft.ElevatedButton("Choose files...",\n    on_click=lambda _: file_picker.pick_files(allow_multiple=True))\n')),(0,r.kt)("p",null,"When dialog is closed ",(0,r.kt)("inlineCode",{parentName:"p"},"FilePicker.on_result")," event handler is called which event object has one of the following properties set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"files"),' - "Pick files" dialog only, a list of selected files or ',(0,r.kt)("inlineCode",{parentName:"li"},"None")," if dialog was cancelled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),' - "Save file" and "Get directory" dialogs, a full path to a file or directory or ',(0,r.kt)("inlineCode",{parentName:"li"},"None")," if dialog was cancelled.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef on_dialog_result(e: ft.FilePickerResultEvent):\n    print("Selected files:", e.files)\n    print("Selected file or directory:", e.path)\n\nfile_picker = ft.FilePicker(on_result=on_dialog_result)\n')),(0,r.kt)("p",null,"The last result is always available in ",(0,r.kt)("inlineCode",{parentName:"p"},"FilePicker.result")," property."),(0,r.kt)("p",null,"Check ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/filepicker"},"File picker")," control docs for all available dialog methods and their parameters."),(0,r.kt)("h2",{id:"uploading-files"},"Uploading files"),(0,r.kt)("p",null,"File picker has built-in upload capabilities that work on all platforms and the web."),(0,r.kt)("p",null,"To upload one or more files you should call ",(0,r.kt)("inlineCode",{parentName:"p"},"FilePicker.pick_files()")," first.\nWhen the files are selected by the user they are not automatically uploaded anywhere, but instead their references are kept in the file picker state."),(0,r.kt)("p",null,"To perform an actual upload you should call ",(0,r.kt)("inlineCode",{parentName:"p"},"FilePicker.upload()")," method and pass the list of files that need to be uploaded along with their upload URLs and upload method (",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import flet as ft\n\ndef upload_files(e):\n    upload_list = []\n    if file_picker.result != None and file_picker.result.files != None:\n        for f in file_picker.result.files:\n            upload_list.append(\n                FilePickerUploadFile(\n                    f.name,\n                    upload_url=page.get_upload_url(f.name, 600),\n                )\n            )\n        file_picker.upload(upload_list)\n\nft.ElevatedButton("Upload", on_click=upload_files)\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you need to separate uploads for each user you can specify a filename prepended with any number of directories in ",(0,r.kt)("inlineCode",{parentName:"p"},"page.get_upload_url()")," call, for example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'upload_url = page.get_upload_url(f"/{username}/pictures/{f.name}", 600)\n')),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"/{username}/pictures")," directories will be automatically created inside ",(0,r.kt)("inlineCode",{parentName:"p"},"upload_dir")," if not exist.")),(0,r.kt)("h3",{id:"upload-storage"},"Upload storage"),(0,r.kt)("p",null,"Notice the usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"page.get_upload_url()")," method - it generates a presigned upload URL for Flet's internal upload storage."),(0,r.kt)("admonition",{title:"Use any storage for file uploads",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can ",(0,r.kt)("a",{parentName:"p",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-presigned-urls.html#generating-a-presigned-url-to-upload-a-file"},"generate presigned upload URL")," for AWS S3 storage using boto3 library."),(0,r.kt)("p",{parentName:"admonition"},"The same technique should work for ",(0,r.kt)("a",{parentName:"p",href:"https://wasabi.com/"},"Wasabi"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.backblaze.com/"},"Backblaze"),", ",(0,r.kt)("a",{parentName:"p",href:"https://min.io/"},"MinIO")," and any other  storage providers with S3-compatible API.")),(0,r.kt)("p",null,"To enable Flet saving uploaded files to a directory provide full or relative path to that directory in ",(0,r.kt)("inlineCode",{parentName:"p"},"flet.app()")," call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ft.app(target=main, upload_dir="uploads")\n')),(0,r.kt)("p",null,'You can even put uploads inside "assets" directory, so uploaded files, e.g. pictures, docs or other media, can be accessed from a Flet client right away:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ft.app(target=main, assets_dir="assets", upload_dir="assets/uploads")\n')),(0,r.kt)("p",null,"and somewhere in your app you can display uploaded picture with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'page.add(ft.Image(src="/uploads/<some-uploaded-picture.png>"))\n')),(0,r.kt)("h3",{id:"upload-progress"},"Upload progress"),(0,r.kt)("p",null,"Once ",(0,r.kt)("inlineCode",{parentName:"p"},"FilePicker.upload()")," method is called Flet client asynchronously starts uploading selected files one-by-one and reports the progress via ",(0,r.kt)("inlineCode",{parentName:"p"},"FilePicker.on_upload")," callback."),(0,r.kt)("p",null,"Event object of ",(0,r.kt)("inlineCode",{parentName:"p"},"on_upload")," event is an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"FilePickerUploadEvent")," class with the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file_name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"progress")," - a value from ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error"))),(0,r.kt)("p",null,"The callback is called at least twice for every uploaded file: with ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," progress before upload begins and with ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," progress when upload is finished. For files larger than 1 MB a progress is additionally reported for every 10% uploaded."),(0,r.kt)("p",null,"Check that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flet-dev/examples/blob/main/python/controls/file-picker/file-picker-upload-progress.py"},"example")," demonstrating multiple file uploads:"),(0,r.kt)("img",{src:"/img/docs/controls/file-picker/file-picker-multiple-uploads.png",className:"screenshot-40"}),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/controls/filepicker"},"File picker")," control docs for all its properties and examples."),(0,r.kt)("p",null,"Upgrade Flet module to the latest version (",(0,r.kt)("inlineCode",{parentName:"p"},"pip install flet --upgrade"),"), give File Picker a try and ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/dzWXP8SHG8"},"let us know")," what you think!"),(0,r.kt)("p",null,"Enjoy!"))}f.isMDXComponent=!0}}]);