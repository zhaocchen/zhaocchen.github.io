---
title: proxy实现负索引数组
---

#### 实现：
```
function wrap (arr) {
    return new Proxy(arr, {
        get(target, key, receiver) {
            let newKey = key % arr.length;
            while (newKey < 0) {
                newKey += arr.length;
            }
            return Reflect.get(target, newKey, receiver)
        }
    })
}
```




#### 测试：
```
// case
let a = wrap([1,2,3,4]);

console.log(a[-1]);
// 4
```




#### 参考：
```
let proxiedproduct = new Proxy(product, {
  get(target, key, receiver) {
    console.log('get', target, key, receiver);
    // 添加get参数接收器-receiver, 并传递到反射调用中， 保证对象具有继承或函数使用时的正确
    return Reflect.get(target, key, receiver);
  }
});
```
