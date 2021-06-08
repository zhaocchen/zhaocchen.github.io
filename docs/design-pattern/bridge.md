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

### 场景

应用：

### 缺点

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
  redCircle: Shape = new Circle(100, 100, 10, new RedCircle());
  greenCircle: Shape = new Circle(100, 100, 10, new GreenCircle());
  constructor(args: string[]) {
    this.redCircle.draw();
    this.greenCircle.draw();
  }
}

new BridgePatternDemo([]);
// Drawing Circle[ color: red, radius: 10, x: 100, 100]
// Drawing Circle[ color: green, radius: 10, x: 100, 100]
```
