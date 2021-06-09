---
slug: /
title: 创建型 | 单例模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

### 场景

应用：

### 缺点

### 实现



```typescript
// 1. 创建一个 Singleton 类
class SingleObject {
  //创建 SingleObject 的一个对象
  private static instance: SingleObject = new SingleObject();
  //让构造函数为 private，这样该类就不会被实例化
  private SingleObject() { }

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
  //获取唯一可用的对象
  object: SingleObject = SingleObject.getInstance();
  constructor(args: string[]) {
    //显示消息
    this.object.showMessage();
  }
}

new SingletonPatternDemo([]);
// Hello World!
```