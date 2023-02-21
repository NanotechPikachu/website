"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96145],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),m=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(n),g=r,k=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74287:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={title:"$getBotInvite",description:"$getBotInvite will return your bot's invite with specified permissions.",id:"getBotInvite"},l=void 0,o={unversionedId:"functions/Info/getBotInvite",id:"functions/Info/getBotInvite",title:"$getBotInvite",description:"$getBotInvite will return your bot's invite with specified permissions.",source:"@site/docs/functions/Info/getBotInvite.md",sourceDirName:"functions/Info",slug:"/functions/Info/getBotInvite",permalink:"/docs/functions/Info/getBotInvite",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1674709277,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{title:"$getBotInvite",description:"$getBotInvite will return your bot's invite with specified permissions.",id:"getBotInvite"},sidebar:"docs",previous:{title:"$getBanReason",permalink:"/docs/functions/Info/getBanReason"},next:{title:"$getChannelSlowmode",permalink:"/docs/functions/Info/getChannelSlowmode"}},s={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],d={toc:m};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getBotInvite")," will return your bot's invite with specified permissions."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getBotInvite[...perms?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"perms?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"permissions you want to be included in the invite"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",null," Discord API Permissions ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createinvite"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to create guild invites")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kick"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to kick guild members")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ban"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to ban guild members")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"administrator"),(0,r.kt)("td",{parentName:"tr",align:null},"Administrator Permissions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managechannel"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage guild channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manageserver"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions to modify server settings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addreactions"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions to add reactions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewauditlog"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to view the guild's audit log")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priorityspeaker"),(0,r.kt)("td",{parentName:"tr",align:null},"Priority Speaker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to stream in voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewchannel"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to view a certain channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendmessages"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to send messages in a certain channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendtts"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to send Text-To-Speech messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managemessages"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"embedlinks"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to embed links")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attachfiles"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to attach files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readmessagehistory"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to read the message history within a certain channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mentioneveryone"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to mention ",(0,r.kt)("inlineCode",{parentName:"td"},"@everyone"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"@here")," and all roles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"externalemojis"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use external emojis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewguildinsights"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to view guild insights")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to connect to voice channels and stages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutemembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to mute members in voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deafenmembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to deafen members in voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"movemembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to move members between voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"usevad"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use voice-activity-detection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changenickname"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to change your own nickname")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managenicknames"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage other members nicknames")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manageroles"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage roles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managewebhooks"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage webhooks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manageemojisandstickers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage emojis and stickers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useappcmds"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use application commands")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requesttospeak"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use request-to-speak in stages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manageevents"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managethreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"usepublicthreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use public threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useprivatethreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use private threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createpublicthreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to create public threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createprivatethreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to create private threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"externalstickers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use extrernal stickers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendmessageinthreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to send messages in threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startembeddedactivities"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to start activities within voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"moderatemembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to timeout and remove timeouts from guild members"))))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This will return your bot's invite with administrator privileges:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'getBotInvite',\n  code: `\n  Invite me here: $getBotInvite[administrator]\n  `\n});\n")))}p.isMDXComponent=!0}}]);