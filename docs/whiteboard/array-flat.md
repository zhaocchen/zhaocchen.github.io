---
title: 实现Array.prototype.flat()
---


[MDN-Array/flat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

[实现Array.prototype.flat()](https://bigfrontend.dev/zh/problem/implement-Array-prototype.flat)

📢 参数 深度， 默认为1

```js
Array.prototype.myFlat = function (depth = 1) {
    if (!Number(depth) || Number(depth) < 0) {
        return this;
    }
    let res = this.concat();
    while (depth > 0) {
        if (!res.some(v => Array.isArray(v))) {
            break;
        }
        // res = [].concat.apply([], res);
        res = [].concat(...res)
        depth--;
    }
    return res;
}
```
