(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),a=(n(0),n(209)),c={},o={permalink:"/blog/2021/08/06/weekly253",editUrl:"https://github.com/zhaocchen/zhaocchen.github.io/blob/master/blog/2021-08-06-weekly253.md",source:"@site/blog/2021-08-06-weekly253.md",description:"---",date:"2021-08-06T00:00:00.000Z",formattedDate:"August 6, 2021",tags:[],title:"weekly253",readingTime:.99,truncated:!1,prevItem:{title:"git\u65b0\u547d\u4ee4\u53ca\u522b\u540d",permalink:"/blog/git"},nextItem:{title:"weekly249",permalink:"/blog/weekly249"}},l=[{value:"description:",id:"description",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("p",null,"slug: 2021DDay\ntitle: 253\nauthor: Zhao chen\nauthor_url: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/zhaocchen"},"https://github.com/zhaocchen"),"\ntags: ","[\u5468\u8bb0]","\ndraft: false"),Object(a.b)("h2",{id:"description"},"description:"),Object(a.b)("ul",{className:"contains-task-list"},Object(a.b)("li",{parentName:"ul",className:"task-list-item"},Object(a.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u524d\u7aef\u6280\u672f\u6c99\u9f99"),Object(a.b)("li",{parentName:"ul",className:"task-list-item"},Object(a.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u50cf\u7d20\u3001\u50cf\u7d20\u5bc6\u5ea6\u3001DPI\u3001PPI\u3001DPR"),Object(a.b)("li",{parentName:"ul",className:"task-list-item"},Object(a.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","iphoneX\u7cfb\u5217\u9002\u914d\u95ee\u9898")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.ui.cn/detail/416445.html"},"https://www.ui.cn/detail/416445.html"),"\n",Object(a.b)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000016534976"},"https://segmentfault.com/a/1190000016534976")),Object(a.b)("p",null,"\u673a\u578b\u5224\u65ad"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"/**\n * \u5224\u65ad\u8bbe\u5907\u662f\u5426\u662fiPhoneX\n */\nexport const isIphoneX = function isIphoneX() {\n  const iPhone = /iphone/gi.test(window.navigator.userAgent);\n  if (\n    iPhone &&\n    window.devicePixelRatio &&\n    window.devicePixelRatio === 3 &&\n    window.screen.width === 375 &&\n    window.screen.height === 812\n  ) {\n    // iPhone X\u3001iPhone XS\n    return true;\n  }\n  if (\n    iPhone &&\n    window.devicePixelRatio &&\n    window.devicePixelRatio === 3 &&\n    window.screen.width === 414 &&\n    window.screen.height === 896\n  ) {\n    // iPhone XS Max\n    return true;\n  }\n  if (\n    iPhone &&\n    window.devicePixelRatio &&\n    window.devicePixelRatio === 2 &&\n    window.screen.width === 414 &&\n    window.screen.height === 896\n  ) {\n    // iPhone XR\n    return true;\n  }\n  if (iPhone && window.screen.width === 390 && window.screen.height === 844) {\n    // iPhone 12/ iPhone 12 Pro\n    return true;\n  }\n  if (iPhone && window.screen.width === 428 && window.screen.height === 926) {\n    // iPhone 12 Pro Max\n    return true;\n  }\n  return false;\n};\n")),Object(a.b)("ul",{className:"contains-task-list"},Object(a.b)("li",{parentName:"ul",className:"task-list-item"},Object(a.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","safari technology preview \u8c03\u8bd5"),Object(a.b)("li",{parentName:"ul",className:"task-list-item"},Object(a.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","_.pick \u8fc7\u6ee4key"),Object(a.b)("li",{parentName:"ul",className:"task-list-item"},Object(a.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u65f6\u95f4\u51fd\u6570\uff1a dayjs"),Object(a.b)("li",{parentName:"ul",className:"task-list-item"},Object(a.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","git\u53ef\u89c6\u5de5\u5177\uff0c soucetree"),Object(a.b)("li",{parentName:"ul",className:"task-list-item"},Object(a.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","h5\u952e\u76d8\u517c\u5bb9\u6027")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://juejin.cn/post/6844903780731846663"},"https://juejin.cn/post/6844903780731846663")),Object(a.b)("ul",{className:"contains-task-list"},Object(a.b)("li",{parentName:"ul",className:"task-list-item"},Object(a.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","babel1")))}p.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=i,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(h,o(o({ref:t},s),{},{components:n})):r.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);