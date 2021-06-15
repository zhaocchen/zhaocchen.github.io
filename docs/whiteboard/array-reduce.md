---
title: 实现Array.reduce
---

摘： 2020-12-29(Tues)

面试

- 手写 reduce polifill

## 实现Array.reduce
[Array.prototype.reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
#### 📢
数组的reduce方法接收两个参数
第一个参数为一个函数，函数有四个参数，是total、currentValue、currentIndex、arr。分别代表：

- **total：初始值, 或者计算结束后的返回值。**
- **currentValue：当前元素。**
- **currentIndex：当前元素的索引。**
- **arr：当前元素所属的数组对象。**

第二个参数为可选参数 initialValue，代表传递给函数的初始值。


#### 实现
```js
Array.prototype._reduce = function (callback, initialValue = 0) {
    let arr = Array.prototype.slice.call(this);
    let acc =  initialValue;
    for (let index = 0; index < arr.length; index++) {
        if (!arr.hasOwnProperty(index)) continue;
        //   ----------------acc, cur, index, src
        acc = callback.call(null, acc, arr[index], index, this)
    }
    return acc;
}
```


#### 测试
```js
// case
var testArr = [1, 2, 3, 4]

var res = testArr._reduce((a, c) => a+c)
// var res = testArr.reduce((a, c) => a+c)

console.log(res)
// 10
```
