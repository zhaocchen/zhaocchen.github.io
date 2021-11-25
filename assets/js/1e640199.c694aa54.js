(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{209:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=r.a.createContext({}),p=function(t){var e=r.a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=p(t.components);return r.a.createElement(o.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,b=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(b,".").concat(m)]||u[m]||g[m]||l;return n?r.a.createElement(d,c(c({ref:e},o),{},{components:n})):r.a.createElement(d,c({ref:e},o))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,b=new Array(l);b[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,b[1]=c;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return b})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return i})),n.d(e,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(209)),b={slug:"git",title:"git\u65b0\u547d\u4ee4\u53ca\u522b\u540d",author:"Zhao chen",author_url:"https://github.com/zhaocchen",tags:["\u5468\u8bb0"],draft:!1,description:null},c={permalink:"/blog/git",editUrl:"https://github.com/zhaocchen/zhaocchen.github.io/blob/master/blog/2021-08-08-git.md",source:"@site/blog/2021-08-08-git.md",description:"git\u547d\u4ee4\u7b80\u5199(ohmyzsh\u4e2d)",date:"2021-08-08T00:00:00.000Z",formattedDate:"August 8, 2021",tags:[{label:"\u5468\u8bb0",permalink:"/blog/tags/\u5468\u8bb0"}],title:"git\u65b0\u547d\u4ee4\u53ca\u522b\u540d",readingTime:.86,truncated:!1,nextItem:{title:"weekly253",permalink:"/blog/2021/08/06/weekly253"}},i=[{value:"git\u547d\u4ee4\u7b80\u5199(ohmyzsh\u4e2d)",id:"git\u547d\u4ee4\u7b80\u5199ohmyzsh\u4e2d",children:[]},{value:"git \u4e24\u4e2a\u65b0\u547d\u4ee4\u6765\u62c6\u5206git checkout\uff08version: 2.23.0\uff09",id:"git-\u4e24\u4e2a\u65b0\u547d\u4ee4\u6765\u62c6\u5206git-checkout\uff08version-2230\uff09",children:[]}],o={toc:i};function p(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"git\u547d\u4ee4\u7b80\u5199ohmyzsh\u4e2d"},"git\u547d\u4ee4\u7b80\u5199(ohmyzsh\u4e2d)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u539f\u59cb\u547d\u4ee4"),Object(l.b)("th",{parentName:"tr",align:null},"\u7b80\u5199\u547d\u4ee4"),Object(l.b)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"git status"),Object(l.b)("td",{parentName:"tr",align:null},"gst"),Object(l.b)("td",{parentName:"tr",align:null},"\u67e5\u770b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u53d8\u5316\u72b6\u6001"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"git diff"),Object(l.b)("td",{parentName:"tr",align:null},"gd"),Object(l.b)("td",{parentName:"tr",align:null},"\u67e5\u770b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u4ee3\u7801\u6539\u52a8"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"git add"),Object(l.b)("td",{parentName:"tr",align:null},"ga"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"git pull"),Object(l.b)("td",{parentName:"tr",align:null},"gl"),Object(l.b)("td",{parentName:"tr",align:null},"\u62c9\u53d6\u4ee3\u7801")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"git push"),Object(l.b)("td",{parentName:"tr",align:null},"gp"),Object(l.b)("td",{parentName:"tr",align:null},"\u63a8\u9001")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"git push --set-upstream origin"),Object(l.b)("td",{parentName:"tr",align:null},"gpsup $()"),Object(l.b)("td",{parentName:"tr",align:null},"\u63a8\u9001\u672c\u5730\u5206\u652f\u5230\u8fdc\u7a0b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"git branch"),Object(l.b)("td",{parentName:"tr",align:null},"gb"),Object(l.b)("td",{parentName:"tr",align:null},"\u67e5\u770b\u5206\u652f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"git checkout"),Object(l.b)("td",{parentName:"tr",align:null},"gco"),Object(l.b)("td",{parentName:"tr",align:null},"\u5207\u6362\u5206\u652f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"git checkout -b"),Object(l.b)("td",{parentName:"tr",align:null},"gcb"),Object(l.b)("td",{parentName:"tr",align:null},"\u65b0\u5efa\u5206\u652f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"git branch -D"),Object(l.b)("td",{parentName:"tr",align:null},"gbd"),Object(l.b)("td",{parentName:"tr",align:null},"\u5220\u9664\u5206\u652f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"git log --stat"),Object(l.b)("td",{parentName:"tr",align:null},"glg"),Object(l.b)("td",{parentName:"tr",align:null},"\u67e5\u770b\u63d0\u4ea4")))),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/git.plugin.zsh"},"\u5b98\u65b9\u624b\u518c")),Object(l.b)("h3",{id:"git-\u4e24\u4e2a\u65b0\u547d\u4ee4\u6765\u62c6\u5206git-checkout\uff08version-2230\uff09"},"git \u4e24\u4e2a\u65b0\u547d\u4ee4\u6765\u62c6\u5206git checkout\uff08version: 2.23.0\uff09"),Object(l.b)("p",null,"\u200b"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://git-scm.com/docs/git-switch"},"git swtich"),"\u200b"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"git switch -c t1\ngit switch main\n  \n// \u7b49\u540c\u4e8e\ngit checkout -b t1 \ngit checkout main\n  \n\ngit switch -d cac2fbac22b0ec6a168984351327ec37b14349aa\nHEAD is now at cac2fbac chore(lcof2): change images path\ngit:(cac2fbac) \n\ngit reset --hard c2db695e1c40b43b71e9e44497724b0b76179639\nHEAD is now at c2db695e feat: add solutions to lc problem: No.0493.Reverse Pairs\n")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://git-scm.com/docs/git-restore"},"git restore \u8868\u793a\u5c06\u5728\u5de5\u4f5c\u7a7a\u95f4\u4f46\u662f\u4e0d\u5728\u6682\u5b58\u533a\u7684\u6587\u4ef6\u64a4\u9500\u66f4\u6539")))}p.isMDXComponent=!0}}]);