"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[69204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"Setup",description:"Ready to begin using aoi.js, this is the basic setup you'll need to begin using aoi.js.",id:"setup"},a=void 0,s={unversionedId:"guides/setup",id:"guides/setup",title:"Setup",description:"Ready to begin using aoi.js, this is the basic setup you'll need to begin using aoi.js.",source:"@site/docs/guides/1setup.md",sourceDirName:"guides",slug:"/guides/setup",permalink:"/docs/guides/setup",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1674709277,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{title:"Setup",description:"Ready to begin using aoi.js, this is the basic setup you'll need to begin using aoi.js.",id:"setup"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Client Events",permalink:"/docs/guides/events"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"node.js 16.9.0 or newer is required.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install aoi.js\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const aoijs = require("aoi.js");\n\nconst bot = new aoijs.AoiClient({\n  token: "Discord Bot Token",\n  prefix: "Discord Bot Prefix",\n  intents: ["MessageContent", "Guilds", "GuildMessages"],\n  events: ["onMessage", "onInteractionCreate"]\n});\n\n//Command Example (ping)\nbot.command({\n  name: "ping",\n  code: `Pong! $pingms`\n});\n\n//Slash Interaction Command Example (ping)\n/*MUST EXECUTE FUNCTION FOR IT TO WORK\n$createApplicationCommand[$guildID;ping;Pong!;true;slash]\n*/\nbot.interactionCommand({\n  name: "ping",\n  prototype: \'slash\',\n  code: `$interactionReply[Pong! $pingms;;;;everyone;false]`\n});\n')))}u.isMDXComponent=!0}}]);