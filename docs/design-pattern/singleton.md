---
slug: /
title: 创建型 | 单例模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

单例模式是最简单的设计模式之一。

### 意图

保证一个类仅有一个实例， 并提供一个访问该实例的全局节点。

### 场景

- 程序中的某个类对于所有客户端仅有一个可用的实例
- 更加严苛地控制全局变量

应用：

### 缺点

- 违反单一职责原则

### 实现

```typescript
// 1. 创建一个 Singleton 类
class SingleObject {
  //创建 SingleObject 的一个对象
  private static instance: SingleObject = new SingleObject();
  //让构造函数为 private，这样该类就不会被实例化
  constructor() { }

  //获取唯一可用的对象
  public static getInstance(): SingleObject {
    return this.instance;
  }
  
  public showMessage(): void {
    console.log("Hello World!");
  }
}
```

测试

```ts
// 2. 从 singleton 类获取唯一的对象
class SingletonPatternDemo {
  constructor() {
    //获取唯一可用的对象
    let object: SingleObject = SingleObject.getInstance();
    //显示消息
    object.showMessage();
  }
}

new SingletonPatternDemo();
// Hello World!
```
