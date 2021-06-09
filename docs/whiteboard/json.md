---
title: 实现JSON
---
```js
JSON.parse(JSON.stringify({a: 1}))
{a: 1}
```


类型
```js
JSON.stringify({a: '1'})
"{"a":"1"}"
JSON.stringify({a: 1})
"{"a":1}"
JSON.stringify({a: null})
"{"a":null}"
JSON.stringify({a: undefined})
"{}"
JSON.stringify({a: false})
"{"a":false}"
JSON.stringify({a: [1, 2,3]})
"{"a":[1,2,3]}"

JSON.stringify({a: Symbol('hello')})
"{}"
JSON.stringify({a: BigInt(123)})
// Do not know how to serialize a BigInt
JSON.stringify({a: new Set([1,2])})
"{"a":{}}"
JSON.stringify({a: function () { console.log('hello')}})
"{}"
```
支持的值数据类型：

- null
- boolean
- number
- array
- object

复杂
```js
JSON.stringify({a: { b: { c: 1}}})
"{"a":{"b":{"c":1}}}"
JSON.stringify({a: false, b: 21})
"{"a":false,"b":21}"
```
#### 实现JSON.parse()
简介版：
```js
function jsonParse(jsonStr) {
   return eval("(" + jsonStr + ")");
}
```
参考语法分析：
#### 实现JSON.stringify()
不考虑第二第三个参数
```js
function jsonStringify(val) {
    const valType = getType(val);
    if (valType == 'Null') {
        return 'null';
    } else if (valType == 'Number') {
        // 12.toString() Invalid 
        return isFinite(val) ? val+'' : 'null';
        // return isFinite(val) ? (val).toString : 'null';
    } else if (valType == 'Boolean') {
        return val.toString();
    } else if (getType(val.JSON) == 'Function') {
        // toJSON() 方法可以将 Date 对象转换为字符串，并格式化为 JSON 数据格式
        return jsonStringify(val.JSON());
    } else if (valType == 'Array') {
        let res = val.map(d => jsonStringify(d))
        return `[${res.join(', ')}]`;
    } else if (valType == 'Object') {
        let res = [];
        for (let key in val) {
            val.hasOwnProperty(key) && res.push(`${jsonStringify(key)}: ${jsonStringify(val[key])}`)
        }
        return `{${res.join(', ')}}`;
    }
    
    var escMap = {
    	'"': '\\"', 
      '\\': '\\\\', 
      '\b': '\\b', 
      '\f': '\\f', 
      '\n': '\\n', 
      '\r': '\\r', 
      '\t': '\\t'
    };
    var escFunc = function (m) { 
    	return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); 
    };
    var escReg = /[\\"\u0000-\u001F\u2028\u2029]/g;

    return `"${val.toString().replace(escReg, escFunc)}"`

}

function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}
```


代码：
[https://gitee.com/daaasheng/whiteboard_code/tree/master/JSON](https://gitee.com/daaasheng/whiteboard_code/tree/master/JSON)


参考：
[https://juejin.im/post/6844903992871354375](https://juejin.im/post/6844903992871354375)
stringify几大特征 [https://segmentfault.com/a/1190000021230185](https://segmentfault.com/a/1190000021230185)
语法分析角度实现parse
[https://lihautan.com/json-parser-with-javascript/](https://lihautan.com/json-parser-with-javascript/)
[https://juejin.im/post/6844904066217148424](https://juejin.im/post/6844904066217148424)
[http://www.jecyu.com/2020/02/21/%E8%AF%91%E6%96%87%E4%BD%BF%E7%94%A8javascript-%E6%89%8B%E5%86%99-json-parser/#_parser](http://www.jecyu.com/2020/02/21/%E8%AF%91%E6%96%87%E4%BD%BF%E7%94%A8javascript-%E6%89%8B%E5%86%99-json-parser/#_parser)

