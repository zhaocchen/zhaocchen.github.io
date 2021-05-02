---
title: 抽象工厂模式(创建型)
---

### 意图

抽象工厂模式， 创建一系列相关的对象， 而无需指定其具体类

### 场景

- 多个不同系列的相关产品交互，且无法提前获取相关信息
- 基于一组抽象方法的类， 且主要功能因此变得不明确

### 例子

```JavaScript
// 产品类
class Chair { }
class Table { }

class ModernChair extends Chair {
    use () {
        console.log('现代风椅子')
    }
}
class ModernTable extends Table {
    use () {
        console.log('现代风桌子')
    }
}
class ArtChair extends Chair {
    use () {
        console.log('文艺风椅子')
    }
}
class ArtTable extends Table {
    use () {
        console.log('文艺风桌子')
    }
}

// 抽象工厂类
class AbstractFactory {
    createChair() {}
    createTable() {}
}

class ModernFactory extends AbstractFactory {
    createChair() {
        return new ModernChair()
    }
    createTable() {
        return new ModernTable()
    }
}
class ArtFactory extends AbstractFactory {
    createChair() {
        return new ArtChair()
    }
    createTable() {
        return new ArtTable()
    }
}

let m = new ModernFactory();
m.createChair().use();
m.createTable().use();
let a = new ArtFactory();
a.createChair().use();
a.createTable().use();

// 现代风椅子
// 现代风桌子
// 文艺风椅子
// 文艺风桌子
```

参考：

https://refactoringguru.cn/design-patterns/abstract-factory

https://blog.csdn.net/xingjiarong/article/details/50051265?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161934545416780357248529%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=161934545416780357248529&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v29-10-50051265.nonecase&utm_term=%E6%A8%A1%E5%BC%8F

https://mp.weixin.qq.com/s/4sNlrITaAEVSlpPwhxZnRg