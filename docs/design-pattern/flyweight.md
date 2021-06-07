---
slug: flyweight
title: 结构型 | 享元模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

Flyweight Pattern (享元模式)， 主要用于减少创建对象的数量， 以减少内存占用和提高性能。


### 题图

通过共享多个对象所共有的相同状态， 让有限的内存容量中载入更多对象。

### 场景

- 数量巨大的相似对象
- 设备内存有限
- 对象中包含可抽取且能在多个对象间共享的重复状态

应用： 

- 数据库连接池

### 缺点

- 系统复杂度提高
- 读取外外部状态运行时间变长

### 实现

```ts
//  1. 创建一个接口
 interface Shape {
    draw(): void;
 }

//  2. 创建实现接口的实体类
 class Circle implements Shape {
    private color: string;
    private x: number = 0;
    private y: number = 0;
    private radius: number = 0;
  
    constructor(color: string){
        this.color = color;     
     }
  
    public setX(x: number): void {
       this.x = x;
    }
  
    public setY(y: number): void {
       this.y = y;
    }
  
    public setRadius(radius: number): void {
       this.radius = radius;
    }
  
    public draw(): void {
       console.log("Circle: Draw() [Color : " + this.color 
          +", x : " + this.x +", y :" + this.y +", radius :" + this.radius);
    }
 }

 // 3. 创建一个工厂，生成基于给定信息的实体类的对象
  class ShapeFactory {
    private static circleMap = new Map<string, Shape>();
  
    public static getCircle(color: string): Shape {
        let circle: Circle = <Circle>this.circleMap.get(color);
  
       if(circle == null) {
          circle = new Circle(color);
          this.circleMap.set(color, circle);
          console.log("Creating circle of color : " + color);
       }
       return circle;
    }
 }
```

测试

```ts
//  4. 使用该工厂，通过传递颜色信息来获取实体类的对象
class FlyweightPatternDemo {
    private static colors: string[] = [ "Red", "Green", "Blue", "White", "Black" ];
    constructor() {
        for(let i: number=0; i < 20; ++i) {
            let circle: Circle = <Circle>ShapeFactory.getCircle(FlyweightPatternDemo.getRandomColor());
              circle.setX(FlyweightPatternDemo.getRandomX());
              circle.setY(FlyweightPatternDemo.getRandomY());
              circle.setRadius(100);
              circle.draw();
           }
    }
    private static getRandomColor(): string {
       return this.colors[Math.floor((Math.random()*this.colors.length))];
    }
    private static getRandomX(): number {
       return Math.floor(Math.random()*100 );
    }
    private static getRandomY(): number {
       return Math.floor(Math.random()*100);
    }
 }
//  test
new FlyweightPatternDemo();

// Creating circle of color : Green
// Circle: Draw() [Color : Green, x : 37, y :72, radius :100
// Creating circle of color : Blue
// Circle: Draw() [Color : Blue, x : 9, y :87, radius :100
// Creating circle of color : White
// Circle: Draw() [Color : White, x : 24, y :77, radius :100
// Circle: Draw() [Color : Green, x : 56, y :71, radius :100
// Circle: Draw() [Color : White, x : 84, y :92, radius :100
// Circle: Draw() [Color : Green, x : 37, y :36, radius :100
// Creating circle of color : Black
// Circle: Draw() [Color : Black, x : 85, y :1, radius :100
// Creating circle of color : Red
// Circle: Draw() [Color : Red, x : 74, y :57, radius :100
// Circle: Draw() [Color : Green, x : 75, y :91, radius :100
// Circle: Draw() [Color : Blue, x : 85, y :9, radius :100
// Circle: Draw() [Color : Blue, x : 94, y :17, radius :100
// Circle: Draw() [Color : Black, x : 32, y :64, radius :100
// Circle: Draw() [Color : White, x : 89, y :26, radius :100
// Circle: Draw() [Color : Green, x : 63, y :90, radius :100
// Circle: Draw() [Color : Red, x : 20, y :15, radius :100
// Circle: Draw() [Color : Red, x : 54, y :57, radius :100
// Circle: Draw() [Color : White, x : 26, y :94, radius :100
// Circle: Draw() [Color : Green, x : 99, y :64, radius :100
// Circle: Draw() [Color : Green, x : 64, y :29, radius :100
// Circle: Draw() [Color : Black, x : 20, y :46, radius :100
```
