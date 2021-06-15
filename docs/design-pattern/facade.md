---
slug: facade
title: 结构型 | 外观模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

定义一个高层接口，更方便的读取复杂类。

### 意图

为程序库、框架或者其他复杂类提供一个简单的接口

### 场景

- 需要一个指向复杂子系统的直接接口，且该接口的功能有限
- 需要将子系统组织为多层结构

应用：

### 缺点

不符合开闭原则；修改困难；无法继承、重写

### 实现

```ts
// 1. 创建一个接口
interface Shape {
  draw(): void;
}

// 2. 创建实现接口的实体类
class Rectangle implements Shape {
  public draw(): void {
    console.log("Rectangle::draw()");
  }
}

class Square implements Shape {
  public draw(): void {
    console.log("Square::draw()");
  }
}

class Circle implements Shape {
  public draw(): void {
    console.log("Circle::draw()");
  }
}

// 3. 创建一个外观类
class ShapeMaker {
  private circle: Shape;
  private rectangle: Shape;
  private square: Shape;
  constructor() {
    this.circle = new Circle();
    this.rectangle = new Rectangle();
    this.square = new Square();
  }

  public drawCircle(): void {
    this.circle.draw();
  }
  
  public drawRectangle(): void {
    this.rectangle.draw();
  }
  
  public drawSquare(): void {
    this.square.draw();
  }
}
```

测试

```ts
// 4. 使用该外观类画出各种类型的形状
class FacadePatternDemo {
  constructor() {
    let shapeMaker: ShapeMaker = new ShapeMaker();
    shapeMaker.drawCircle();
    shapeMaker.drawRectangle();
    shapeMaker.drawSquare();
  }
}

new FacadePatternDemo();
// Circle::draw()
// Rectangle::draw()
// Square::draw()
```
