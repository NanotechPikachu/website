"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(u,".").concat(d)]||c[d]||s[d]||l;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"$allEmojisCount",description:"$allEmojisCount will return the amount of emojis of a given type.",id:"allEmojisCount"},o=void 0,i={unversionedId:"functions/Info/allEmojisCount",id:"functions/Info/allEmojisCount",title:"$allEmojisCount",description:"$allEmojisCount will return the amount of emojis of a given type.",source:"@site/docs/functions/Info/allEmojisCount.md",sourceDirName:"functions/Info",slug:"/functions/Info/allEmojisCount",permalink:"/docs/functions/Info/allEmojisCount",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1674709277,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{title:"$allEmojisCount",description:"$allEmojisCount will return the amount of emojis of a given type.",id:"allEmojisCount"},sidebar:"docs",previous:{title:"$allChannelsCount",permalink:"/docs/functions/Info/allChannelsCount"},next:{title:"$allMembersCount",permalink:"/docs/functions/Info/allMembersCount"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$allEmojisCount")," will return the amount of emojis of a given type."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$allEmojisCount[type?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"type you want the amount of"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Emoji Type"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Animated Emojis"),(0,r.kt)("td",{parentName:"tr",align:null},"animated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stable Emojis"),(0,r.kt)("td",{parentName:"tr",align:null},"normal")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This will return the amount of emojis in your guild:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'allEmojisCount',\n  code: `\n  $allEmojisCount\n  `\n});\n")))}s.isMDXComponent=!0}}]);