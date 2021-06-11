---
slug: bridge
title: 结构型 | 桥接模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

将一个大类或一系列紧密相关的类拆分成抽象和现实两个独立的层次结构，从而在开发是分别使用。

### 场景

- 需要拆分或重组一个具有多功能的庞杂类
- 需要在几个独立维度上扩展类
- 需要运行时切换不同实现方法

应用：

### 缺点

高内聚增加代码复杂性

### 实现

```ts
// 1. 创建桥接实现接口
interface DrawAPI {
  drawCircle(radius: number, x: number, y: number): void;
}

// 2. 创建实现了 DrawAPI 接口的实体桥接实现类
class RedCircle implements DrawAPI {
  public drawCircle(radius: number, x: number, y: number): void {
    console.log("Drawing Circle[ color: red, radius: "
      + radius + ", x: " + x + ", " + y + "]");
  }
}

class GreenCircle implements DrawAPI {
  public drawCircle(radius: number, x: number, y: number): void {
    console.log("Drawing Circle[ color: green, radius: "
      + radius + ", x: " + x + ", " + y + "]");
  }
}

// 3. 使用 DrawAPI 接口创建抽象类 Shape
abstract class Shape {
  protected drawAPI: DrawAPI;
  constructor(drawAPI: DrawAPI) {
    this.drawAPI = drawAPI;
  }
  
  public abstract draw(): void;
}

// 4. 创建实现了 Shape 抽象类的实体类
class Circle extends Shape {
  private x: number;
  private y: number;
  private radius: number;
  constructor(x: number, y: number, radius: number, drawAPI: DrawAPI) {
    super(drawAPI);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  public draw(): void {
    this.drawAPI.drawCircle(this.radius, this.x, this.y);
  }
}
```

测试

```ts
// 5. 使用 Shape 和 DrawAPI 类画出不同颜色的圆
class BridgePatternDemo {
  constructor() {
    let redCircle: Shape = new Circle(100, 100, 10, new RedCircle());
  	let greenCircle: Shape = new Circle(100, 100, 10, new GreenCircle());
    redCircle.draw();
    greenCircle.draw();
  }
}

new BridgePatternDemo();
// Drawing Circle[ color: red, radius: 10, x: 100, 100]
// Drawing Circle[ color: green, radius: 10, x: 100, 100]
```
