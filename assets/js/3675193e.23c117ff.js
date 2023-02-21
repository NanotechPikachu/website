"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[48777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},32510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),i=(n(67294),n(3905));const o={title:"$isCustomEmoji",description:"$isCustomEmoji will check if the given emoji is a custom emoji or not.",id:"isCustomEmoji"},a=void 0,l={unversionedId:"functions/Util/isCustomEmoji",id:"functions/Util/isCustomEmoji",title:"$isCustomEmoji",description:"$isCustomEmoji will check if the given emoji is a custom emoji or not.",source:"@site/docs/functions/Util/isCustomEmoji.md",sourceDirName:"functions/Util",slug:"/functions/Util/isCustomEmoji",permalink:"/docs/functions/Util/isCustomEmoji",draft:!1,tags:[],version:"current",frontMatter:{title:"$isCustomEmoji",description:"$isCustomEmoji will check if the given emoji is a custom emoji or not.",id:"isCustomEmoji"},sidebar:"docs",previous:{title:"$isChannelManageable",permalink:"/docs/functions/Util/isChannelManageable"},next:{title:"$isDM",permalink:"/docs/functions/Util/isDM"}},s={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Please note that your bot has to be in the server where the custom emoji was created in.",id:"please-note-that-your-bot-has-to-be-in-the-server-where-the-custom-emoji-was-created-in",level:3},{value:"Example",id:"example",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$isCustomEmoji")," will check if the given emoji is a custom emoji or not."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$isCustomEmoji[emoji;guildID?]\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"emoji"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"emoji you want to check if it is a custom emoji"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"guild ID of where the emoji was created in"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("h3",{id:"please-note-that-your-bot-has-to-be-in-the-server-where-the-custom-emoji-was-created-in"},"Please note that your bot has to be in the server where the custom emoji was created in."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," as the ",(0,i.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless",alt:"emoji"})," emoji is indeed a custom emoji:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'isCustomEmoji',\n  code: `\n  $isCustomEmoji[<:LerefMoney:1003365344724910191>;773352845738115102]\n  `\n});\n")))}c.isMDXComponent=!0}}]);