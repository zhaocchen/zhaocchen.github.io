---
slug: decorator
title: 结构型 | 装饰模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---



相比生成子类更加灵活。

### 意图

动态地给一个对象添加一些额外的职责， 同时不改变原有内部结构。

### 场景

- 需要不修改代码情况下使用对象， 且要求运行时为对象新增额外的行为
- 用继承来扩展对象行为的方案难以实现或者根本不可行

应用：

### 缺点

多层装饰比较复杂

### 实现

```ts
// 1. 创建一个接口
interface Shape {
  draw(): void;
}

// 2. 创建实现接口的实体类
class Rectangle implements Shape {
  public draw(): void {
    console.log("Shape: Rectangle");
  }
}

class Circle implements Shape {
  public draw(): void {
    console.log("Shape: Circle");
  }
}

// 3. 创建实现了 Shape 接口的抽象装饰类
abstract class ShapeDecorator implements Shape {
  protected decoratedShape: Shape;
  constructor(decoratedShape: Shape) {
    this.decoratedShape = decoratedShape;
  }

  public draw(): void {
    this.decoratedShape.draw();
  }
}

// 4. 创建扩展了 ShapeDecorator 类的实体装饰类
class RedShapeDecorator extends ShapeDecorator {
  constructor(decoratedShape: Shape) {
    super(decoratedShape);
  }

  public draw(): void {
    this.decoratedShape.draw();
    this.setRedBorder(this.decoratedShape);
  }
  
  private setRedBorder(decoratedShape: Shape): void {
    console.log("Border Color: Red");
  }
}
```

测试

```ts
// 5. 使用 RedShapeDecorator 来装饰 Shape 对象
class DecoratorPatternDemo {
  circle: Shape = new Circle();
  redCircle: ShapeDecorator = new RedShapeDecorator(new Circle());
  redRectangle: ShapeDecorator = new RedShapeDecorator(new Rectangle());
  constructor() {
    console.log("Circle with normal border");
    this.circle.draw();

    console.log("\nCircle of red border");
    this.redCircle.draw();

    console.log("\nRectangle of red border");
    this.redRectangle.draw();
  }
}

new DecoratorPatternDemo();
// Circle with normal border
// Shape: Circle

// Circle of red border
// Shape: Circle
// Border Color: Red

// Rectangle of red border
// Shape: Rectangle
// Border Color: Red
```

****

## 背景

ES7新特性，装饰器

面试：

- 请介绍一下装饰者模式，并实现？

## 介绍

装饰者模式，是动态的给类（对象）增加职责的设计模式， 属于设计模式中结构型模式大类。
在不改变元对象的基础上， 对这个对象进行包装盒拓展， 从而使对象有更加复杂的功能

## 实现

### 面向对象实现

```js
var Car = function () {};
Car.prototype.drive = function () {
    console.log('原始方法');
}

var AutopilotDecorator = function (car) {
    this.car = car;
}
AutopilotDecorator.prototype.drive = function () {
    this.car.drive();
    console.log('加强方法');
}

var car = new Car();
car = new AutopilotDecorator(car);
car.drive();

// 原始方法
// 加强方法
```

多个装饰器

```js
var Car = function () {};
Car.prototype.drive = function () {
    console.log('原始方法');
}
Car.prototype.brake = function () {
    console.log('原始方法2');
}

// 装饰器父类
var CarDecorator = function (car) {
    this.car = car;
}
CarDecorator.prototype = {
    drive: function () {
        this.car.drive();
    },
    brake: function () {
        this.car.brake();
    }
}

// 装饰器1
var AutopilotDecorator = function (car) {
    CarDecorator.call(this, car);
}
AutopilotDecorator.prototype = new CarDecorator();
AutopilotDecorator.prototype.drive = function () {
    this.car.drive();
    console.log('加强方法');
}

// 装饰器2
var HybridDecorator = function (car) {
    CarDecorator.call(this, car);
}
HybridDecorator.prototype = new CarDecorator();
HybridDecorator.prototype.brake = function () {
    this.car.brake();
    console.log('加强方法2');
}

var car = new Car();
car = new AutopilotDecorator(car);
car = new HybridDecorator(car);
car.drive();
car.brake();

// 原始方法
// 加强方法
// 原始方法2
// 加强方法2
```

### 基于对象实现

用一个变量来保存原函数的引用，然后再重写 drive 方法

```js
var car = {
    drive: function () {
        console.log('原始方法');
    }
};

var driveBasic = car.drive;

var autopilotDecorator = function() {
    console.log('加强方法');
}

var car1 = Object.create(car);
car1.drive = function () {
    driveBasic();
    autopilotDecorator();
}
car1.drive();

// 原始方法
// 加强方法
```

工具函数， 辅助装饰函数

```js
Function.prototype.after = function (dec) {
    return () => {
        var ret = this.apply(this, arguments);
        dec.apply(this.arguments); // 装饰函数
        return ret;
    }
}

var car = {
    drive: function () {
        console.log('原始方法');
    }
};

var autopilotDecorator = function() {
    console.log('加强方法');
}

var car1 = Object.create(car);
car1.drive = car.drive.after(autopilotDecorator);  // 重写
car1.drive();

// 原始方法
// 加强方法
```

### ES7实现（语法糖）

方法装饰器

```js
function autopilotDecorator (target, key, descriptor) {
    const method = descriptor.value;
    descriptor.value = () => {
        method(target);
        console.log('加强方法');
    }
}

class Car {
    @autopilotDecorator
    drive() {
        console.log('原始方法');
    }
};

var car1 = new Car();
car1.drive();

// 原始方法
// 加强方法
```

类装饰器
函数方法装饰器

#### 应用 react中高阶组件作为装饰器

 需要逻辑复用时，HOC接受一个react组件， 返回一个新的react组件。

#### 应用 装饰器模式增强fetch

[https://mp.weixin.qq.com/s/1ptRKOXMMe6pjU0jvu5tAw](https://mp.weixin.qq.com/s/1ptRKOXMMe6pjU0jvu5tAw)

#### 环境

[https://babeljs.io/docs/en/babel-plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators)

```shell
yarn init -y
touch index.js
yarn add @babel/core @babel/cli @babel/preset-env --dev
yarn add @babel/plugin-proposal-decorators --dev
```

命令行

```json
  // package.json
  "scripts": {
    "build": "babel index.js -o compiled.js && node compiled.js"
  },
  "keywords": [
    "babel"
  ],
```

配置文件

```json
// .babelrc
{
    "presets": ["@babel/preset-env"],
    "plugins": [["@babel/plugin-proposal-decorators", {"legacy": true }]]
}
```

原理

#### ts

[https://www.typescriptlang.org/docs/handbook/decorators.html](https://www.typescriptlang.org/docs/handbook/decorators.html)
[https://www.tslang.cn/docs/handbook/decorators.html](https://www.tslang.cn/docs/handbook/decorators.html)

参考：
[https://github.com/lgwebdream/FE-Interview/issues/1057](https://github.com/lgwebdream/FE-Interview/issues/1057)
