"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(o,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const l={title:"$isGuildMuted",description:"$isGuildMuted is similar but not to confuse with `$isMuted`, this will check if the user is server muted.",id:"isGuildMuted"},a=void 0,u={unversionedId:"functions/Util/isGuildMuted",id:"functions/Util/isGuildMuted",title:"$isGuildMuted",description:"$isGuildMuted is similar but not to confuse with `$isMuted`, this will check if the user is server muted.",source:"@site/docs/functions/Util/isGuildMuted.md",sourceDirName:"functions/Util",slug:"/functions/Util/isGuildMuted",permalink:"/docs/functions/Util/isGuildMuted",draft:!1,tags:[],version:"current",frontMatter:{title:"$isGuildMuted",description:"$isGuildMuted is similar but not to confuse with `$isMuted`, this will check if the user is server muted.",id:"isGuildMuted"},sidebar:"docs",previous:{title:"$isGuildDeafened",permalink:"/docs/functions/Util/isGuildDeafened"},next:{title:"$isHoisted",permalink:"/docs/functions/Util/isHoisted"}},o={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$isGuildMuted")," is similar but not to confuse with ",(0,i.kt)("inlineCode",{parentName:"p"},"$isMuted"),", this will check if the user is server muted."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$isGuildMuted[userid?;guildid?]\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"userid?"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"the user id of the user you want to check if they're server muted"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"guildid?"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"the guild id of the guild where they're server muted in"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This will return either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," depending on if you're server muted or not:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'isGuildMuted',\n  code: `\n  $isGuildMuted[$authorID;$guildID]\n  `\n});\n")))}c.isMDXComponent=!0}}]);