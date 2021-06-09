---
title: 实现new
---

```js
function myNew (Func) {
    // 第一步， 创建空对象
    const obj = {};
    // 第二步， 指向构造函数的prototype
    obj.__proto__ = Func.prototype;
    // 第三步，改变this指向
    let args = Array.from(arguments).slice(1);
    let res = Func.apply(obj, args);
    // 第四步，返回新对象
    if (typeof res == 'object' || typeof res == 'function') {
        return res;
    }
    return obj;
}
```


测试
```js
// case
function Person (name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person('Jack', 15);
console.log(p1);
console.log(p1 instanceof Person);

let p2 = myNew(Person, 'Lcuy', 25);
console.log(p2);
console.log(p2 instanceof Person);

// Person { name: 'Jack', age: 15 }
// true
// Person { name: 'Lcuy', age: 25 }
// true
```
