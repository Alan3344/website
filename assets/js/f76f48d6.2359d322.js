"use strict";(self.webpackChunkflet_dev=self.webpackChunkflet_dev||[]).push([[8006],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={slug:"flet-versioning-and-pre-releases",title:"Flet versioning and pre-releases",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["news"]},s=void 0,p={permalink:"/blog/flet-versioning-and-pre-releases",editUrl:"https://github.com/flet-dev/website/edit/main/blog/2022-11-16-flet-versioning-and-pre-releases.md",source:"@site/blog/2022-11-16-flet-versioning-and-pre-releases.md",title:"Flet versioning and pre-releases",description:"Flet is a fast-evolving framework with a new functionality and bug fixes being committed every other day.",date:"2022-11-16T00:00:00.000Z",formattedDate:"November 16, 2022",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:1.405,hasTruncateMarker:!1,authors:[{name:"Feodor Fitsner",title:"Flet founder and developer",url:"https://github.com/FeodorFitsner",imageURL:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4"}],frontMatter:{slug:"flet-versioning-and-pre-releases",title:"Flet versioning and pre-releases",author:"Feodor Fitsner",author_title:"Flet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["news"]},prevItem:{title:"Flet mobile update",permalink:"/blog/flet-mobile-update"},nextItem:{title:"ResponsiveRow and mobile controls",permalink:"/blog/responsive-row-and-mobile-controls"}},u={authorsImageUrls:[void 0]},d=[{value:"Installing pre-releases",id:"installing-pre-releases",level:2},{value:"Flet versioning",id:"flet-versioning",level:2}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Flet is a fast-evolving framework with a new functionality and bug fixes being committed every other day."),(0,i.kt)("p",null,'The development model with one pull request per release didn\'t work well for the project as users waited for weeks to get hands on a new release and, honestly, from development perspective producing large "heroic" releases takes a lot of energy \ud83e\udee0.'),(0,i.kt)("p",null,"From now on we'll be breaking releases into multiple pull requests with one feature/bugfix per PR."),(0,i.kt)("p",null,"Every PR merged into ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch will be publishing pre-release (developmental release) package to ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/flet/"},"pypi.org")," having version format of ",(0,i.kt)("inlineCode",{parentName:"p"},"X.Y.Z.devN"),"."),(0,i.kt)("h2",{id:"installing-pre-releases"},"Installing pre-releases"),(0,i.kt)("p",null,"To install Flet pre-release package use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install flet --pre\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We recommend installing pre-release builds into a virtual environment.")),(0,i.kt)("h2",{id:"flet-versioning"},"Flet versioning"),(0,i.kt)("p",null,"Flet is switching to ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semanting Versioning")," with a version number ",(0,i.kt)("inlineCode",{parentName:"p"},"MAJOR.MINOR.PATCH"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"MAJOR"),' will be incremented when there are "incompatible API changes". Right now it\'s ',(0,i.kt)("inlineCode",{parentName:"li"},"0")," and we expect to make it ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," when we feel that Flet API is stable enough."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"MINOR")," will be incremented when a new functionality added in a backwards compatible manner."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PATCH")," will be incremented when we make backward compatible bug fixes.")),(0,i.kt)("p",null,"According to that rule, upcoming Flet release will have version ",(0,i.kt)("inlineCode",{parentName:"p"},"0.2.0"),". Bug fixes for that release will be labeled as ",(0,i.kt)("inlineCode",{parentName:"p"},"0.2.1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"0.2.2"),", etc. The release after that release will be ",(0,i.kt)("inlineCode",{parentName:"p"},"0.3.0")," and so on."),(0,i.kt)("p",null,"Flet pre-releases will have a format of ",(0,i.kt)("inlineCode",{parentName:"p"},"MAJOR.{LAST_MINOR + 1}.0.dev{BUILD}")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"LAST_MINOR")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"MINOR")," version of the last release and ",(0,i.kt)("inlineCode",{parentName:"p"},"{BUILD}")," is a build number set by ",(0,i.kt)("a",{parentName:"p",href:"https://ci.appveyor.com/project/flet-dev/flet"},"CI"),". For example, if the last published release is ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1.65")," pre-releases will have versions ",(0,i.kt)("inlineCode",{parentName:"p"},"0.2.0.dev{BUILD}"),". Pre-releases after ",(0,i.kt)("inlineCode",{parentName:"p"},"0.2.0")," release will be labeled as ",(0,i.kt)("inlineCode",{parentName:"p"},"0.3.0.dev{BUILD}"),"."))}c.isMDXComponent=!0}}]);