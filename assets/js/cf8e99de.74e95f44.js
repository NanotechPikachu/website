"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[88479],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=i(t),g=o,h=f["".concat(u,".").concat(g)]||f[g]||p[g]||c;return t?r.createElement(h,a(a({ref:n},l),{},{components:t})):r.createElement(h,a({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<c;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},18018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var r=t(87462),o=(t(67294),t(3905));const c={title:"$usersTyping"},a=void 0,s={unversionedId:"functions/userstyping",id:"version-5.5.5/functions/userstyping",title:"$usersTyping",description:"This function returns all the users who are typing in the specified channel",source:"@site/versioned_docs/version-5.5.5/functions/userstyping.md",sourceDirName:"functions",slug:"/functions/userstyping",permalink:"/docs/functions/userstyping",draft:!1,tags:[],version:"5.5.5",frontMatter:{title:"$usersTyping"},sidebar:"docs",previous:{title:"$usersInChannel",permalink:"/docs/functions/usersinchannel"},next:{title:"$usersWithRole",permalink:"/docs/functions/userswithrole"}},u={},i=[],l={toc:i};function p(e){let{components:n,...c}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns all the users who are typing in the specified channel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$usersTyping[channelID;username/mention/tag;separator (optional)]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "usersTyping",\ncode: `Users who are typing: $usersTyping[$channelID;username;/]\n`\n})\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"This is what this function would grab",src:t(25319).Z,width:"269",height:"31"})))}p.isMDXComponent=!0},25319:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"}}]);