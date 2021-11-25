(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{195:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(209)),l={slug:"composite",title:"\u7ed3\u6784\u578b | \u7ec4\u5408\u6a21\u5f0f",author:"Zhao chen",author_url:"https://github.com/zhaocchen",tags:[],draft:!1,description:null},i={unversionedId:"design-pattern/composite",id:"design-pattern/composite",isDocsHomePage:!1,title:"\u7ed3\u6784\u578b | \u7ec4\u5408\u6a21\u5f0f",description:"\u610f\u56fe",source:"@site/docs/design-pattern/composite.md",slug:"/design-pattern/composite",permalink:"/docs/design-pattern/composite",editUrl:"https://github.com/zhaocchen/zhaocchen.github.io/blob/master/docs/design-pattern/composite.md",version:"current",sidebar:"docs",previous:{title:"\u7ed3\u6784\u578b | \u6865\u63a5\u6a21\u5f0f",permalink:"/docs/design-pattern/bridge"},next:{title:"\u7ed3\u6784\u578b | \u88c5\u9970\u6a21\u5f0f",permalink:"/docs/design-pattern/decorator"}},c=[{value:"\u610f\u56fe",id:"\u610f\u56fe",children:[]},{value:"\u573a\u666f",id:"\u573a\u666f",children:[]},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",children:[]},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",children:[]}],p={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u610f\u56fe"},"\u610f\u56fe"),Object(o.b)("p",null,"\u5c06\u5bf9\u8c61\u7ec4\u5408\u6210\u6811\u5f62\u7ed3\u6784\uff0c\u5e76\u80fd\u50cf\u72ec\u7acb\u4f7f\u7528\u5bf9\u8c61\u4e00\u6837\u4f7f\u7528\u3002"),Object(o.b)("h3",{id:"\u573a\u666f"},"\u573a\u666f"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u9700\u8981\u5b9e\u73b0\u6811\u72b6\u5bf9\u8c61\u7ed3\u6784"),Object(o.b)("li",{parentName:"ul"},"\u9700\u8981\u5ba2\u6237\u7aef\u4ee3\u7801\u4ee5\u76f8\u540c\u65b9\u5f0f\u5904\u7406\u7b80\u5355\u7684\u590d\u6742\u5143\u7d20")),Object(o.b)("p",null,"\u5e94\u7528\uff1a"),Object(o.b)("h3",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),Object(o.b)("p",null,"\u8fdd\u53cd\u4f9d\u8d56\u5012\u7f6e\u539f\u5219\uff08\u53f6\u5b50\u548c\u6811\u679d\u7684\u58f0\u660e\u90fd\u662f\u5b9e\u73b0\u7c7b\uff09"),Object(o.b)("h3",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'// 1. \u521b\u5efa Employee \u7c7b\uff0c\u8be5\u7c7b\u5e26\u6709 Employee \u5bf9\u8c61\u7684\u5217\u8868\nclass Employee {\n  private name: string;\n  private dept: string;\n  private salary: number;\n  private subordinates: Set<Employee>;\n  constructor(name: string, dept: string, sal: number) {\n    this.name = name;\n    this.dept = dept;\n    this.salary = sal;\n    this.subordinates = new Set<Employee>();\n  }\n\n  public add(e: Employee): void {\n    this.subordinates.add(e);\n  }\n  \n  public remove(e: Employee): void {\n    this.subordinates.delete(e);\n  }\n  \n  public getSubordinates(): Set<Employee> {\n    return this.subordinates;\n  }\n  \n  public toString(): string {\n    return ("Employee :[ Name : " + this.name\n      + ", dept : " + this.dept + ", salary :"\n      + this.salary + " ]");\n  }\n}\n')),Object(o.b)("p",null,"\u6d4b\u8bd5"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'// 2. \u4f7f\u7528 Employee \u7c7b\u6765\u521b\u5efa\u548c\u6253\u5370\u5458\u5de5\u7684\u5c42\u6b21\u7ed3\u6784\nclass CompositePatternDemo {\n  constructor() {\n    CEO: Employee = new Employee("John", "CEO", 30000);\n    headSales: Employee = new Employee("Robert", "Head Sales", 20000);\n    headMarketing: Employee = new Employee("Michel", "Head Marketing", 20000);\n    clerk1: Employee = new Employee("Laura", "Marketing", 10000);\n    clerk2: Employee = new Employee("Bob", "Marketing", 10000);\n    salesExecutive1: Employee = new Employee("Richard", "Sales", 10000);\n    salesExecutive2: Employee = new Employee("Rob", "Sales", 10000);\n    CEO.add(headSales);\n    CEO.add(headMarketing);\n    headSales.add(salesExecutive1);\n    headSales.add(salesExecutive2);\n    headMarketing.add(clerk1);\n    headMarketing.add(clerk2);\n    //\u6253\u5370\u8be5\u7ec4\u7ec7\u7684\u6240\u6709\u5458\u5de5\n    console.log(CEO.toString());\n    for (let headEmployee of CEO.getSubordinates()) {\n      console.log(headEmployee.toString());\n      for (let employee of headEmployee.getSubordinates()) {\n        console.log(employee.toString());\n      }\n    }\n  }\n}\n\nnew CompositePatternDemo();\n// Employee :[ Name : John, dept : CEO, salary :30000 ]\n// Employee :[ Name : Robert, dept : Head Sales, salary :20000 ]\n// Employee :[ Name : Richard, dept : Sales, salary :10000 ]\n// Employee :[ Name : Rob, dept : Sales, salary :10000 ]\n// Employee :[ Name : Michel, dept : Head Marketing, salary :20000 ]\n// Employee :[ Name : Laura, dept : Marketing, salary :10000 ]\n// Employee :[ Name : Bob, dept : Marketing, salary :10000 ]\n')),Object(o.b)("p",null,"$ ts-node demo.ts"),Object(o.b)("p",null,"\ud83d\udce2tsconfig.json"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'"downlevelIteration": true, \n')))}s.isMDXComponent=!0},209:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.a.createElement(b,i(i({ref:n},p),{},{components:t})):a.a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);