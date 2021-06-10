---
slug: prototype
title: 创建型 | 原型模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

原型实例指定创建对象的种类并且通过拷贝这些原型对象创建新的对象。

### 场景

应用：

### 缺点

### 实现

```ts
interface Cloneable {
 clone(): Cloneable;
}

// 1. 创建一个实现了 Cloneable 接口的抽象类
abstract class Shape implements Cloneable {
 private id!: string;
 protected type!: string;

 abstract draw(): void;

 public getType(): string {
  return this.type;
 }

 public getId(): string {
  return this.id;
 }

 public setId(id: string): void {
  this.id = id;
 }

 public clone(): Cloneable {
  return Object.create(this);
 }
}

// 2. 创建扩展了上面抽象类的实体类
class Rectangle extends Shape {
 constructor() {
  super()
  this.type = "Rectangle";
 }

 public draw(): void {
  console.log("Inside Rectangle::draw() method.");
 }
}

class Square extends Shape {
 constructor() {
  super()
  this.type = "Square";
 }

 public draw(): void {
  console.log("Inside Square::draw() method.");
 }
}

class Circle extends Shape {
 constructor() {
  super()
  this.type = "Circle";
 }

 public draw(): void {
  console.log("Inside Circle::draw() method.");
 }
}

// 3. 创建一个类，从数据库获取实体类，并把它们存储在一个 Hashtable 中
class ShapeCache {
 private static shapeMap: Map<String, Shape> = new Map<String, Shape>();

 public static getShape(shapeId: string): Shape {
  let cachedShape: Shape = <Shape>this.shapeMap.get(shapeId);
  return <Shape>cachedShape.clone();
 }

 // 对每种形状都运行数据库查询，并创建该形状
 // shapeMap.put(shapeKey, shape);
 // 例如，我们要添加三种形状
 public static loadCache(): void {
  let circle: Circle = new Circle();
  circle.setId("1");
  this.shapeMap.set(circle.getId(), circle);

  let square: Square = new Square();
  square.setId("2");
  this.shapeMap.set(square.getId(), square);

  let rectangle: Rectangle = new Rectangle();
  rectangle.setId("3");
  this.shapeMap.set(rectangle.getId(), rectangle);
 }
}
```

测试

```ts
// 4. PrototypePatternDemo 使用 ShapeCache 类来获取存储在 Hashtable 中的形状的克隆
class PrototypePatternDemo {
 constructor() {
  ShapeCache.loadCache();

  let clonedShape: Shape = <Shape>ShapeCache.getShape("1");
  console.log("Shape : " + clonedShape.getType());

  let clonedShape2: Shape = <Shape>ShapeCache.getShape("2");
  console.log("Shape : " + clonedShape2.getType());

  let clonedShape3: Shape = <Shape>ShapeCache.getShape("3");
  console.log("Shape : " + clonedShape3.getType());
 }
}

new PrototypePatternDemo();
// Shape : Circle
// Shape : Square
// Shape : Rectangle
```

### 简单实现

```ts
interface Prototype {
 clone(): Prototype;
}

class Person implements Prototype {
 public name: string;
 public sex: string;
 public age: number;
 constructor() {
  this.name = "Jack";
  this.sex = "female";
  this.age = 20;
 }

 public getDiscription(): string {
  return `名字叫${this.name},性别${this.sex},年龄${this.age}`;
 }

 // 实现复制
 public clone(): Prototype {
  return Object.create(this);
 }
}

// 使用
const person = new Person();
console.log(person.getDiscription());
person.age = 36;
const p1 = Object.create(person);
console.log(p1.getDiscription());

// 名字叫Jack,性别female,年龄20
// 名字叫Jack,性别female,年龄36
```
