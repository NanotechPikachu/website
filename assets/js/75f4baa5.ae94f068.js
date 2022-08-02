"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[87709],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},22356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"bot.onJoin",description:"An event that gets executed, if the bot sees a user joining a server. To let the bot listen to the event, add one bot.onJoin() callback inside your main file."},i=void 0,s={unversionedId:"events/bot.onjoin",id:"events/bot.onjoin",title:"bot.onJoin",description:"An event that gets executed, if the bot sees a user joining a server. To let the bot listen to the event, add one bot.onJoin() callback inside your main file.",source:"@site/docs/events/bot.onjoin.md",sourceDirName:"events",slug:"/events/bot.onjoin",permalink:"/docs/events/bot.onjoin",draft:!1,tags:[],version:"current",frontMatter:{title:"bot.onJoin",description:"An event that gets executed, if the bot sees a user joining a server. To let the bot listen to the event, add one bot.onJoin() callback inside your main file."},sidebar:"someSidebar",previous:{title:"bot.onInteractionCreate",permalink:"/docs/events/bot.oninteractioncreate"},next:{title:"bot.onLeave",permalink:"/docs/events/bot.onleave"}},l={},c=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Callback that triggers every time a user joins a server."),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.joinCommand({ //command\nchannel: "channel id", //channel where it will log\ncode: `your code` //Message sent to <channel>\n})\n')),(0,o.kt)("p",null,'{% hint style="danger" %}\nMake sure the ',"`","channel","`"," is in the server. So recommended to use server variables (if your bot isn't for 1 server)\n{% endhint %}"),(0,o.kt)("h4",{id:"example-command"},"Example Command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.joinCommand({ \nchannel: "782446718704812032", \ncode: `\nWelcome to $serverName, $username!\n`\n/*\nCode Breakdown\n$serverName - The name of the server the user joined\n$username - The user who joined the server\n*/\n}) \n')),(0,o.kt)("p",null,'{% hint style="warning" %}\n',(0,o.kt)("inlineCode",{parentName:"p"},"GUILD_MEMBERS")," intent needed! Information in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/other/gateway-intents"},"Gateway Intents")," guide.\n{% endhint %}"),(0,o.kt)("p",null,'{% hint style="info" %}\nYou can use all guild and member based functions like ',(0,o.kt)("a",{parentName:"p",href:"/docs/functions/servername"},"$serverName")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/functions/guildid"},"$guildID")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/functions/username"},"$username")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/functions/authorid"},"$authorID")," in these commands.\n{% endhint %}"))}d.isMDXComponent=!0}}]);