(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),l=(t(0),t(209)),c={slug:"\u5982\u4f55\u5b9e\u73b0vue\u591a\u9875\u9762",title:"\u5982\u4f55\u5b9e\u73b0vue\u591a\u9875\u9762",author:"Zhao chen",author_url:"https://github.com/zhaocchen",tags:[]},o={permalink:"/blog/\u5982\u4f55\u5b9e\u73b0vue\u591a\u9875\u9762",editUrl:"https://github.com/zhaocchen/zhaocchen.github.io/blob/master/blog/2020-05-14-\u5982\u4f55\u5b9e\u73b0vue\u591a\u9875\u9762.md",source:"@site/blog/2020-05-14-\u5982\u4f55\u5b9e\u73b0vue\u591a\u9875\u9762.md",description:"vue-cli3 \u914d\u7f6e\u591a\u9875\u9762",date:"2020-05-14T00:00:00.000Z",formattedDate:"May 14, 2020",tags:[],title:"\u5982\u4f55\u5b9e\u73b0vue\u591a\u9875\u9762",readingTime:1.68,truncated:!1,prevItem:{title:"\u5982\u4f55\u4f7f\u7528parcel\u5b9e\u73b0\u96f6\u914d\u7f6e\u6253\u5305",permalink:"/blog/\u5982\u4f55\u4f7f\u7528parcel\u5b9e\u73b0\u96f6\u914d\u7f6e\u6253\u5305"},nextItem:{title:"\u8bd1-ECMAScript2020",permalink:"/blog/\u8bd1-ECMAScript2020"}},i=[{value:"vue-cli3 \u914d\u7f6e\u591a\u9875\u9762",id:"vue-cli3-\u914d\u7f6e\u591a\u9875\u9762",children:[]},{value:"vue-cli2\u914d\u7f6e\u591a\u9875\u9762",id:"vue-cli2\u914d\u7f6e\u591a\u9875\u9762",children:[]},{value:"webpack\u914d\u7f6e\u591a\u9875\u9762",id:"webpack\u914d\u7f6e\u591a\u9875\u9762",children:[]}],p={toc:i};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"vue-cli3-\u914d\u7f6e\u591a\u9875\u9762"},"vue-cli3 \u914d\u7f6e\u591a\u9875\u9762"),Object(l.b)("p",null,"\u591a\u4e2a\u9875\u9762\u65f6, \u76ee\u5f55\u7ed3\u6784"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 src\n   \u251c\u2500\u2500 pages\n      \u251c\u2500\u2500 home\n      |     \u251c\u2500\u2500 home.html\n      |     \u2514\u2500\u2500 home.js\n      \u251c\u2500\u2500 about\n      |     \u251c\u2500\u2500 about.html\n      |     \u2514\u2500\u2500 about.js\n\n")),Object(l.b)("p",null,"vue.config.js \u6dfb\u52a0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"pages: {\n home : {\n      entry: 'src/pages/home/home.js',\n      template: 'public/home.html',\n      filename: 'home.html'\n    },\n} \n")),Object(l.b)("p",null,"\u52a8\u6001\u914d\u7f6e"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'pages: getPages(),\n// \u8f85\u52a9\u51fd\u6570\nvar path = require("path");\nvar glob = require("glob");\n\nfunction getPages() {\n  var PAGE_PATH = path.resolve(__dirname, "./src/pages");\n  var entryFiles = glob.sync(PAGE_PATH + "/*/*.js");\n  var map = {};\n  entryFiles.forEach((filePath) => {\n    const filename = filePath.substring(\n      filePath.lastIndexOf("/") + 1,\n      filePath.lastIndexOf(".")\n    );\n    map[filename] = {\n      entry: "src/pages/" + filename + "/" + filename + ".js",\n      template: "public/" + filename + ".html",\n      filename: filename + ".html",\n    };\n  });\n  return map;\n}\n')),Object(l.b)("h3",{id:"vue-cli2\u914d\u7f6e\u591a\u9875\u9762"},"vue-cli2\u914d\u7f6e\u591a\u9875\u9762"),Object(l.b)("p",null,"\u501f\u52a9glob\u7b2c\u4e09\u65b9\u5e93\uff0c \u4f7f\u7528shell\u6a21\u5f0f\u5339\u914d\u6587\u4ef6\u3002(glob\u662fwebpack\u5b89\u88c5\u65f6\u4f9d\u8d56\u7684\u4e00\u4e2a\u7b2c\u4e09\u65b9\u6a21\u5757)\ncli2\u4e2d\u9700\u8981\u5728build/webpack.base.conf.js\u4e2d\u4fee\u6539entry"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"entry\uff1a entries()\n// \u8f85\u52a9\u51fd\u6570\nfunction entries () {\n const PAGE_PATH = path.resolve(__dirname, './src/pages')\n  const entryFiles = glob.sync(PAGE_PATH + '/*/*.js')\n  let map = {};\n  entryFiles.forEach(filePath => {\n    const filename = filePath.substring(\n        filePath.lastIndexOf(\"/\") +1,\n        filePath.lastIndexOf(\".\")\n    )\n    map[filename] = filePath;\n })\n  return map;\n}\n")),Object(l.b)("p",null,"\u5206\u522b\u5728build/webpack.dev.conf.js\u548cbuild/webpack.prod.conf.js\u4e2d\u4fee\u6539plugins"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'plugins: [].concat(htmls())\n// \u8f85\u52a9\u51fd\u6570\nfunction htmls () {\n const PAGE_PATH = path.resolve(__dirname, \'./src/pages\') \n  let entryHtml = glob.sync(PAGE_PATH + "/*/*.html");\n  let arr = [];\n  entryHtml.forEach(filePath => {\n    let filename = filePath.substring(\n      filePath.lastIndexOf("/") + 1,\n      filePath.lastIndexOf(".")\n    );\n    let conf = {\n      template: filePath, // \u6a21\u677f\u6765\u6e90\n      filename: filename + ".html", // \u6587\u4ef6\u540d\u79f0\n      chunks: ["manifest", "vendor", filename], // \u9875\u9762\u6a21\u677f\u9700\u8981\u52a0\u5bf9\u5e94\u7684js\u811a\u672c\uff0c\u5982\u679c\u4e0d\u52a0\u8fd9\u884c\u5219\u6bcf\u4e2a\u9875\u9762\u90fd\u4f1a\u5f15\u5165\u6240\u6709\u7684js\u811a\u672c\n      inject: true\n    };\n    if (process.env.NODE_ENV === "production") {\n      conf = merge(conf, {\n        minify: {\n          removeComments: true,\n          collapseWhitespace: true,\n          removeAttributeQuotes: true\n        },\n        chunksSortMode: "dependency"\n      });\n    }\n    arr.push(new HtmlWebpackPlugin(conf));\n  });\n  return arr;\n};\n')),Object(l.b)("h3",{id:"webpack\u914d\u7f6e\u591a\u9875\u9762"},"webpack\u914d\u7f6e\u591a\u9875\u9762"),Object(l.b)("p",null,"webpack\u9879\u76ee\uff0c entry\u4f5c\u4e3a\u5165\u53e3\uff0c output\u4f5c\u4e3a\u51fa\u53e3\uff0c \u501f\u52a9htmlwebpackplugin\u63d2\u4ef6 \u628a\u9759\u6001\u8d44\u6e90\u5f15\u5165\u5230html\u4e2d\u3002\n\u666e\u901a\u5355\u9875\u9762\u914d\u7f6e\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"var HtmlWebpackPlugin = require('html-webpack-plugin');\nvar path = require('path');\n\nvar webpackConfig = {\n  entry: 'index.js',\n  output: {\n    path: path.resolve(__dirname, './dist'),\n    filename: 'index_bundle.js'\n  },\n  plugins: [new HtmlWebpackPlugin({\n   template: './src/index.html',\n    filename: 'index.html',\n  })]\n};\n")),Object(l.b)("p",null,"\u914d\u7f6e\u6587\u4ef6"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"var webpackConfig = {\n  entry: {\n    home: \"./pages/home/home.js\",\n    about: \"./pages/about/about.js\",\n  },\n  output: {\n    path: path.resolve(__dirname, './dist'),\n    filename: '[name].js'\n  },\n  plugins: [new HtmlWebpackPlugin({\n   template: './src/pages/home/home.html',\n    filename: 'home.html',\n  }), new HtmlWebpackPlugin({\n   template: './src/pages/about/about.html',\n    filename: 'about.html',\n  })]\n};\n")),Object(l.b)("p",null,"\u53c2\u8003\u6587\u732e\uff1a\n",Object(l.b)("a",{parentName:"p",href:"https://cli.vuejs.org/zh/config/#pages"},"https://cli.vuejs.org/zh/config/#pages"),"\n",Object(l.b)("a",{parentName:"p",href:"https://www.webpackjs.com/configuration/"},"https://www.webpackjs.com/configuration/")))}u.isMDXComponent=!0},209:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,f=s["".concat(c,".").concat(m)]||s[m]||b[m]||l;return t?a.a.createElement(f,o(o({ref:n},p),{},{components:t})):a.a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<l;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);