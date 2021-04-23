---
title: 工厂方法模式(创建型)
---

## 意图

工厂模式（最常见）（创建型模型）

## 场景

## 例子

不暴露创建对象的具体逻辑， 由子类决定实例化哪一类的接口（函数）
用途： 代替new实例化对象

```JavaScript
var factory = {};
factory.car = function () {
    console.log('car');
}
factory.plane = function () {
    console.log('plane');
}

factory.manage = function (create) {
    return new factory[create]();
}

let car = factory.manage('car');
let plane = factory.manage('plane');

// car
// plane
```

#### 开中的应用？

### 按照抽象程度分类

![image.png](/img/design-pattern/工厂模式p1.png)





参考：



https://mp.weixin.qq.com/s/UQlKdpOn-v2wgk24htMVyg