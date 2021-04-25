---
title: 工厂方法模式(创建型)
---

### 意图

工厂方法模式（最常见）， 父类中提供一个创建对象的方法， 允许子类决定实例化对象的类型。

### 场景

- 无法预知对象确切级别及其依赖关系时
- 希望用户扩展软件库或框架的内部组织
- 希望复用现有对象来节省系统资源，而不是每次都重新创建对象

### 例子

不暴露创建对象的具体逻辑， 由子类决定实例化哪一类的接口（函数）
用途： 代替new实例化对象

```JavaScript
// 产品类
class Product {
    deliver () {
        console.log('运输') 
    }
}

class Truck extends Product {
    deliver () {
        console.log('陆运')
    }
}
class Ship extends Product {
    deliver () {
        console.log('海运')
    }
}

// 工厂类
class Factory {

}

class CreateTruck extends Factory {
    create () {
        return new Truck();
    }
}

class CreateShip extends Factory {
    create () {
        return new Ship();
    }
}

let t = new CreateTruck();
t.create().deliver();
let s = new CreateShip();
s.create().deliver();

// 陆运
// 海运
```

### 按照抽象程度分类

![image.png](/img/design-pattern/工厂模式p1.png)

## 简单工厂模式（静态工厂方法）

```
// 产品类
class Product {
    deliver () {
        console.log('运输') 
    }
}

class Truck extends Product {
    deliver () {
        console.log('陆运')
    }
}
class Ship extends Product {
    deliver () {
        console.log('海运')
    }
}

// 工厂类
class SimpleFactory {
    create (type) {
        if (type == 'truck') {
            return new Truck();
        } else if (type == 'ship') {
            return new Ship();
        }
    }
}

let t = new SimpleFactory();
t.create('truck').deliver();
let s = new SimpleFactory();
s.create('ship').deliver();

// 陆运
// 海运
```



改版2

```
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



参考：

https://refactoringguru.cn/design-patterns/factory-method

https://blog.csdn.net/xingjiarong/article/details/50001387?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161934545416780357248529%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=161934545416780357248529&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v29-12-50001387.nonecase&utm_term=%E6%A8%A1%E5%BC%8F

https://mp.weixin.qq.com/s/UQlKdpOn-v2wgk24htMVyg