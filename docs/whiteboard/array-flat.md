---
title: 实现Array.flat
---


[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)


📢 参数 深度， 默认为1


```
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










