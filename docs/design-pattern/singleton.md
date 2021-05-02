---
title: 单例模式(创建型)
slug: /
---

## 单例模式（创建型模式）

### 意图

### 场景

### 例子

保证一个类只有一个实例

```JavaScript
class Car {
    constructor() {
        this.brand = 'byd';
        this.color = 'red';
    }
}
Car.getInstance = (function () {
    let instance;
    return function () {
        if (!instance) {
            instance = new Car();
        }
        return instance;
    }
})();

let car1 = Car.getInstance();
let car2 = Car.getInstance();
console.log(car1 == car2); // true
```
#### 开中的应用