(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{180:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),c=(t(0),t(209)),l={slug:"\u5982\u4f55\u4f7f\u7528parcel\u5b9e\u73b0\u96f6\u914d\u7f6e\u6253\u5305",title:"\u5982\u4f55\u4f7f\u7528parcel\u5b9e\u73b0\u96f6\u914d\u7f6e\u6253\u5305",author:"Zhao chen",author_url:"https://github.com/zhaocchen",tags:[]},o={permalink:"/blog/\u5982\u4f55\u4f7f\u7528parcel\u5b9e\u73b0\u96f6\u914d\u7f6e\u6253\u5305",editUrl:"https://github.com/zhaocchen/zhaocchen.github.io/blob/master/blog/2020-06-22-parcel.md",source:"@site/blog/2020-06-22-parcel.md",description:"\u7b80\u4ecb",date:"2020-06-22T00:00:00.000Z",formattedDate:"June 22, 2020",tags:[],title:"\u5982\u4f55\u4f7f\u7528parcel\u5b9e\u73b0\u96f6\u914d\u7f6e\u6253\u5305",readingTime:.86,truncated:!1,prevItem:{title:"\u5982\u4f55\u5c06webpack3\u5347\u7ea7\u81f3webpack4",permalink:"/blog/\u5982\u4f55\u5c06webpack3\u5347\u7ea7\u81f3webpack4"},nextItem:{title:"\u5982\u4f55\u5b9e\u73b0vue\u591a\u9875\u9762",permalink:"/blog/\u5982\u4f55\u5b9e\u73b0vue\u591a\u9875\u9762"}},p=[],b={toc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(c.b)("p",null,"parcel\uff0c\u662f\u4e00\u6b3e\u5b8c\u5168\u96f6\u914d\u7f6e\u7684\u524d\u7aef\u6253\u5305\u5668\u3002\nParcel \u662f 2017 \u5e74\u53d1\u5e03\uff0c \u89e3\u51b3\u4e86Webpack\u914d\u7f6e\u8fc7\u4e8e\u7e41\u7410\u7684\u95ee\u9898\u3002"),Object(c.b)("p",null,"parcel\u6838\u5fc3\u7279\u70b9:\n\u2022 ",Object(c.b)("strong",{parentName:"p"},"\u96f6\u914d\u7f6e"),"\n\u2022 ",Object(c.b)("strong",{parentName:"p"},"\u81ea\u52a8\u5b89\u88c5\u4f9d\u8d56"),"\n\u2022 ",Object(c.b)("strong",{parentName:"p"},"\u6784\u5efa\u901f\u5ea6\u66f4\u5feb")),Object(c.b)("h4",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"yarn init -y\nyarn add parcel-bundler --dev\nyarn parcel src/index.html\nyarn parcel build src/index.html // \u6253\u5305\n")),Object(c.b)("p",null,"\u867d\u7136 Parcel \u8ddf Webpack \u4e00\u6837\u90fd\u652f\u6301\u4ee5\u4efb\u610f\u7c7b\u578b\u6587\u4ef6\u4f5c\u4e3a\u6253\u5305\u5165\u53e3\uff0c\u4e0d\u8fc7 Parcel \u5b98\u65b9\u8fd8\u662f\u5efa\u8bae\u6211\u4eec\u4f7f\u7528 HTML \u6587\u4ef6\u4f5c\u4e3a\u5165\u53e3\u3002\u5b98\u65b9\u7684\u7406\u7531\u662f HTML \u662f\u5e94\u7528\u5728\u6d4f\u89c8\u5668\u7aef\u8fd0\u884c\u65f6\u7684\u5165\u53e3\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},'\x3c!-- ./src/index.html --\x3e\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>use Parcel</title>\n</head>\n<body>\n</body>\n<script src="main.js"><\/script>\n</html>\n')),Object(c.b)("h4",{id:"es-modules-\u6a21\u5757\u7684\u6253\u5305"},"ES Modules \u6a21\u5757\u7684\u6253\u5305"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// ./src/logger.js\nconst log = (data) => {\n    console.log(data)\n}\n\nmodule.exports = {\n    log\n}\n")),Object(c.b)("p",null,"js\u5165\u53e3\u6587\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// ./src/main.js\nimport { log } from './logger'\n\nlog('hello')\n")),Object(c.b)("h4",{id:"\u6a21\u5757\u70ed\u66ff\u6362\uff08hmr\uff09"},"\u6a21\u5757\u70ed\u66ff\u6362\uff08HMR\uff09"),Object(c.b)("p",null,"Parcel \u63d0\u4f9b\u7684 accept \u53ea\u9700\u8981\u63a5\u6536\u4e00\u4e2a\u56de\u8c03\u53c2\u6570\uff0c\u4f5c\u7528\u5c31\u662f\u5f53\u524d\u6a21\u5757\u66f4\u65b0\u6216\u8005\u6240\u4f9d\u8d56\u7684\u6a21\u5757\u66f4\u65b0\u8fc7\u540e\u81ea\u52a8\u6267\u884c\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\u3002Webpack \u4e2d\u7684 accept \u65b9\u6cd5\u652f\u6301\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7528\u6765\u5904\u7406\u6307\u5b9a\u7684\u6a21\u5757\u66f4\u65b0\u540e\u7684\u903b\u8f91\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// ./src/main.js\nif (module.hot) {\n    module.hot.accept(() => {\n        console.log('has HMR')\n    })\n}\n")),Object(c.b)("h4",{id:"\u81ea\u52a8\u5b89\u88c5\u4f9d\u8d56"},"\u81ea\u52a8\u5b89\u88c5\u4f9d\u8d56"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// ./src/main.js\nimport $ from 'jquery';\n")),Object(c.b)("p",null,"\u4fdd\u5b58\u540e\uff0c \u4f1a\u81ea\u52a8\u5b89\u88c5\u5e76\u6dfb\u52a0\u5230package.json \u4e2d\u3002"),Object(c.b)("h4",{id:"\u5176\u4ed6\u7c7b\u578b\u8d44\u6e90\u52a0\u8f7d"},"\u5176\u4ed6\u7c7b\u578b\u8d44\u6e90\u52a0\u8f7d"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// ./src/main.css\nbody{ \n    color: red;\n}\n// ./src/main.js\nimport './main.css'\n")),Object(c.b)("h4",{id:"\u52a8\u6001\u5bfc\u5165"},"\xa0\u52a8\u6001\u5bfc\u5165"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// ./src/main.js\nimport('jquery').then($ => {\n    $(document.body).append('<h2>panda od chengdu</h2>')\n})\n")),Object(c.b)("h4",{id:"\u751f\u4ea7\u6a21\u5f0f\u6253\u5305"},"\u751f\u4ea7\u6a21\u5f0f\u6253\u5305"),Object(c.b)("p",null,"\u76f8\u540c\u4f53\u91cf\u7684\u9879\u76ee\u6253\u5305\uff0cParcel \u7684\u6784\u5efa\u901f\u5ea6\u4f1a\u6bd4 Webpack \u5feb\u5f88\u591a\u3002\u56e0\u4e3a Parcel\xa0\u5185\u90e8\u4f7f\u7528\u7684\u662f",Object(c.b)("mark",null,"\u591a\u8fdb\u7a0b"),"\u540c\u65f6\u5de5\u4f5c\uff0c\u5145\u5206\u53d1\u6325\u4e86\u591a\u6838 CPU \u7684\u6027\u80fd\u3002"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/zhaocchen/use/tree/master/useParcel"},"\u4ee3\u7801")))}u.isMDXComponent=!0},209:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),u=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=u(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),i=u(t),m=r,d=i["".concat(l,".").concat(m)]||i[m]||s[m]||c;return t?a.a.createElement(d,o(o({ref:n},b),{},{components:t})):a.a.createElement(d,o({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<c;b++)l[b]=t[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);