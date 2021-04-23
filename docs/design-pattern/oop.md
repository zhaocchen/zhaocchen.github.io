---
title: 面向对象编程OOP
---

- OOP 面向对象编程
- OOD 面向对象设计
- OOA 面向对象分析

特性
- 封装
- 抽象
- 继承
- 多态： 相同的行为，不同的实现


## 多态

概念：相同的行为，不同的实现。 具体， 发送消息时不关心对方具体是哪一个类的实例的结构。

🌰  教练发出指令， 不同实例给出不同执行

```
class Animal {  // 动物类
    cry() {}  // 在此不定义具体的叫声
}

class Baby extends Animal {
    cry() { return '哇'; }
}
class Dog extends Animal {
    cry() { return '汪'; }
}

class Trainer { // 定义教练类
    execute(animal) { // 参数是动物
        console.log(animal.cry());
    }
}

let t = new Trainer();
t.execute(new Baby());
t.execute(new Dog());
// 哇
// 汪
```




### 静态多态

### 动态多态

好处：

依赖技术：