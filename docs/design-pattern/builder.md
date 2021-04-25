---
title: 生成器模式(创建型)
---

### 意图

将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示

### 场景

- 为避免“重叠构造函数”
- 希望使用代码创建不同形式的产品
- 需要生成器构造组合或其他复杂对象

### 例子

```javascript
class Builder {

}

class Car {

}

class AudiBuilder extends Builder {
    constructor() {
        super();
        this.car = new Car();
    }
    buildEngine() {
        this.car.engine = "AudiEngine";
    }
    buildGlass() {
        this.car.glass = 3.5;
    }
    buildSteeringWheel() {
        this.car.steeringWheel = "AudiSteeringWheel";
    }
    get() {
        console.log(this.car);
        return this.car;
    }
}

class Director {
    constructor(build) {
        this.build = build;
    }
    
    construct() {
        build.buildEngine();
        build.buildGlass();
        build.buildSteeringWheel();

        return build.get();
    }

}

let build = new AudiBuilder();
let director = new Director(build);
let c = director.construct();

// Car {
//     engine: 'AudiEngine',
//     glass: 3.5,
//     steeringWheel: 'AudiSteeringWheel'
//   }
```



参考：

https://refactoringguru.cn/design-patterns/builder

https://blog.csdn.net/xingjiarong/article/details/50037099?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161934545416780357248529%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=161934545416780357248529&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v29-8-50037099.nonecase&utm_term=%E6%A8%A1%E5%BC%8F

https://mp.weixin.qq.com/s/AK1JzKqwqT91yNXKBUuzSA