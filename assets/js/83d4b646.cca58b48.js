"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"$interactionPing",description:"$interactionPing will return the latency of an interaction.",id:"interactionPing"},a=void 0,c={unversionedId:"functions/Info/interactionPing",id:"functions/Info/interactionPing",title:"$interactionPing",description:"$interactionPing will return the latency of an interaction.",source:"@site/docs/functions/Info/interactionPing.md",sourceDirName:"functions/Info",slug:"/functions/Info/interactionPing",permalink:"/docs/functions/Info/interactionPing",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1674709277,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{title:"$interactionPing",description:"$interactionPing will return the latency of an interaction.",id:"interactionPing"},sidebar:"docs",previous:{title:"$hoistedRole",permalink:"/docs/functions/Info/hoistedRole"},next:{title:"$lowestGuildRole",permalink:"/docs/functions/Info/lowestGuildRole"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Please note that you require <code>events: [&quot;onMessage&quot;, &quot;onInteractionCreate&quot;]</code> to be in your main file.",id:"please-note-that-you-require-events-onmessage-oninteractioncreate-to-be-in-your-main-file",level:4},{value:"Example",id:"example",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$interactionPing")," will return the latency of an interaction."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$interactionPing\n")),(0,o.kt)("h4",{id:"please-note-that-you-require-events-onmessage-oninteractioncreate-to-be-in-your-main-file"},"Please note that you require ",(0,o.kt)("inlineCode",{parentName:"h4"},'events: ["onMessage", "onInteractionCreate"]')," to be in your main file."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This will return the latency of an interaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'interactionPing',\n  code: `\n $addbutton[1;test;primary;testButton;false]\n Click me!\n  `\n});\n\nbot.interactionCommand({\n  name: 'testButton',\n  prototype: 'button',\n  code: `\n  $interactionUpdate[This took me: $interactionPing MS!] //will edit the button message and return the latency\n  `\n});\n")))}p.isMDXComponent=!0}}]);