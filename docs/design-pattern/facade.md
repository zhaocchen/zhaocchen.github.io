---
slug: facade
title: 结构型 | 外观模式
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
  shapeMaker: ShapeMaker = new ShapeMaker();
  constructor(args: string[]) {
    this.shapeMaker.drawCircle();
    this.shapeMaker.drawRectangle();
    this.shapeMaker.drawSquare();
  }
}

new FacadePatternDemo([]);
// Circle::draw()
// Rectangle::draw()
// Square::draw()
```
