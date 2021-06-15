---
slug: factory-method
title: 创建型 | 工厂方法模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

工厂方法模式是**最常见**的设计模式之一。

### 意图

父类中提供一个创建对象的方法， 允许子类决定实例化对象的类型。

### 场景

- 无法预知对象确切级别及其依赖关系时
- 希望用户扩展软件库或框架的内部组织
- 希望复用现有对象来节省系统资源，而不是每次都重新创建对象

应用：

- 日志记录器，记录到本地、远程服务器等
- 数据库访问， 应对不同类数据库
- 连接服务器的框架， 支持POP3、IMAP、HTTP多种协议

### 缺点

随着产品的增加， 子类数量随之增加

### 实现

```typescript
// 1. 创建一个接口
interface Shape {
  draw(): void;
}

// 2. 创建实现接口的实体类
class Rectangle implements Shape {
  public draw(): void {
    console.log("Inside Rectangle::draw() method.");
  }
}

class Square implements Shape {
  public draw(): void {
    console.log("Inside Square::draw() method.");
  }
}

class Circle implements Shape {
  public draw(): void {
    console.log("Inside Circle::draw() method.");
  }
}

// 3. 创建一个工厂，生成基于给定信息的实体类的对象
class ShapeFactory {
  //使用 getShape 方法获取形状类型的对象
  public getShape(shapeType: string): Shape {
    if (shapeType == null)  return null;
    if (shapeType.toLocaleUpperCase() == "CIRCLE") {
      return new Circle();
    } else if (shapeType.toLocaleUpperCase() == "RECTANGLE") {
      return new Rectangle();
    } else if (shapeType.toLocaleUpperCase() == "SQUARE") {
      return new Square();
    }
    return null;
  }
}
```

测试

```ts
// 4. 使用该工厂，通过传递类型信息来获取实体类的对象
class FactoryPatternDemo {
  constructor() {
    let shapeFactory: ShapeFactory = new ShapeFactory();
    //获取 Circle 的对象，并调用它的 draw 方法
    let shape1: Shape = shapeFactory.getShape("CIRCLE");
    //调用 Circle 的 draw 方法
    shape1.draw();

    //获取 Rectangle 的对象，并调用它的 draw 方法
    let shape2: Shape = shapeFactory.getShape("RECTANGLE");
    //调用 Rectangle 的 draw 方法
    shape2.draw();

    //获取 Square 的对象，并调用它的 draw 方法
    let shape3: Shape = shapeFactory.getShape("SQUARE");
    //调用 Square 的 draw 方法
    shape3.draw();
  }
}

new FactoryPatternDemo();
// Inside Circle::draw() method.
// Inside Rectangle::draw() method.
// Inside Square::draw() method.

```

****

## 按照抽象程度分类

![image.png](/img/design-pattern/工厂模式p1.png)

### 简单工厂模式（静态工厂方法）
