---
title: 实现Array.map
---

## 实现Array.map
[Array.map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
#### 📢
回调函数的参数

1. `currentValue``callback` 数组中正在处理的当前元素。
1. `index`

可选`callback` 数组中正在处理的当前元素的索引。

3. `array`

可选`map` 方法调用的数组。

[online](https://bigfrontend.dev/zh/problem/implement-Array-prototype-map)

实现

```
Array.prototype.myMap = function(cb, context) {
  const n = this.length;
  let ans = new Array(n);
  for (let i = 0; i < n; i++) {
    if (!this.hasOwnProperty(i)) continue;
    ans[i] = cb.call(context, this[i], i, this);
  }
  return ans;  
}
```

#### 手写 
```js
Array.prototype._map = function (callback, context) {
    let arr = Array.prototype.slice.call(this)
    let mappedArr = new Array(arr.length)
    for (let index = 0; index < arr.length; index++) {
        if (!arr.hasOwnProperty(index)) continue
        mappedArr[index] = callback.call(context, arr[index], index, this)
    }
    return mappedArr
}
```
#### 测试
```js
// case
var a = [1, 2, 3]

// console.log(a.map((v, i, data) => {
console.log(a._map((v, i, data) => {
    console.log(v, i, data)
    return Math.pow(v, 2)
}))

// 1 0 [ 1, 2, 3 ]
// 2 1 [ 1, 2, 3 ]
// 3 2 [ 1, 2, 3 ]
// [ 1, 4, 9 ]
```
## 手写用reduce实现map
#### 实现
```js
Array.prototype._map = function(callback, context) {
    let arr = Array.prototype.slice.call(this);
    let res = this.reduce((acc, cur, index, src) => {
        let curRes = callback.call(context, cur, index, this, src)
        acc.push(curRes);
        return acc;
    }, [])
    return res;
}
```


#### 测试
```js
// case
var a = [1, 2, 3]

// console.log(a.map((v, i, data) => {
console.log(a._map((v, i, data) => {
    console.log(v, i, data)
    return Math.pow(v, 2)
}))

// 1 0 [ 1, 2, 3 ]
// 2 1 [ 1, 2, 3 ]
// 3 2 [ 1, 2, 3 ]
// [ 1, 4, 9 ]
```

