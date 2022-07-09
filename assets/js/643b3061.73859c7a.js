"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[29370],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),h=o,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},51513:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={title:"Sharding"},i=void 0,c={unversionedId:"other/sharding",id:"other/sharding",title:"Sharding",description:"Sharding is only necessary for bots in 2,000+ Guilds",source:"@site/docs/other/sharding.md",sourceDirName:"other",slug:"/other/sharding",permalink:"/docs/other/sharding",draft:!1,tags:[],version:"current",frontMatter:{title:"Sharding"},sidebar:"someSidebar",previous:{title:"Hyperlink",permalink:"/docs/other/hyperlink"},next:{title:"Character Escaping",permalink:"/docs/other/character-escaping"}},s={},l=[{value:"How to shard",id:"how-to-shard",level:4},{value:"Finding current guild&#39;s shard ID",id:"finding-current-guilds-shard-id",level:4}],d={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Sharding is only necessary for bots in 2,000+ Guilds")),(0,o.kt)("h4",{id:"how-to-shard"},"How to shard"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const bot = new Aoijs.bot({\n    sharding: true,\n    shardAmount: 2,\n    oken: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["GUILDS", "GUILD_MESSAGES"]\n})\n')),(0,o.kt)("h4",{id:"finding-current-guilds-shard-id"},"Finding current guild's shard ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "shardID",\n    code: `Guilds Shard: $shardID`\n})\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Sharding can lead to high ping/response time and depending your host, can use a lot of memory and disk space")))}u.isMDXComponent=!0}}]);