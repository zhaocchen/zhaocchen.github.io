(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),l=(r(0),r(209)),a={title:"\u5b9e\u73b0Promise.allSettled"},i={unversionedId:"whiteboard/promise-allSettled",id:"whiteboard/promise-allSettled",isDocsHomePage:!1,title:"\u5b9e\u73b0Promise.allSettled",description:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/GlobalObjects/Promise/allSettled",source:"@site/docs/whiteboard/promise-allSettled.md",slug:"/whiteboard/promise-allSettled",permalink:"/docs/whiteboard/promise-allSettled",editUrl:"https://github.com/zhaocchen/zhaocchen.github.io/blob/master/docs/whiteboard/promise-allSettled.md",version:"current",sidebar:"docs",previous:{title:"\u5b9e\u73b0Array.reduce",permalink:"/docs/whiteboard/array-reduce"},next:{title:"\u5b9e\u73b0Promise.all",permalink:"/docs/whiteboard/promise-all"}},c=[],s={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled"},"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"function promiseAllSettled(iterator) {\n    return new Promise((resolve, reject) => {\n        let count = 0;\n        let res = [];\n        for (let i in iterator) {\n            Promise.resolve(iterator[i]).then(value => {\n                res[i] = {\n                    status: 'fulfilled',\n                    value\n                };\n                count++;\n                if (count == iterator.length) {\n                    resolve(res);\n                }\n            }, reason => {\n                res[i] = {\n                    status: 'rejected',\n                    reason\n                };\n                count++;\n                if (count == iterator.length) {\n                    resolve(res);\n                }\n            })\n        }\n    })\n}\n")),Object(l.b)("p",null,"\u6d4b\u8bd5"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// case\n\nlet p1 = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve(1)\n    }, 1000)\n})\nlet p2 = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        reject(2)\n    }, 2000)\n})\nlet p3 = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve(3)\n    }, 3000)\n})\n\n// Promise.allSettled([p3, p1, p2]).then(res => {\n//     console.log(res) \n// })\n\npromiseAllSettled([p3, p1, p2]).then(res => {\n    console.log(res) \n})\n\n// [\n//     { status: 'fulfilled', value: 3 },\n//     { status: 'fulfilled', value: 1 },\n//     { status: 'rejected', reason: 2 }\n//   ]\n")))}p.isMDXComponent=!0},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||l;return r?o.a.createElement(b,i(i({ref:t},s),{},{components:r})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);