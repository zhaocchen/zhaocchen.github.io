---
slug: decorator
title: 结构型 | 装饰模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---



## 背景
ES7新特性，装饰器

面试：

- 请介绍一下装饰者模式，并实现？


## 介绍

装饰者模式，是动态的给类（对象）增加职责的设计模式， 属于设计模式中结构型模式大类。
在不改变元对象的基础上， 对这个对象进行包装盒拓展， 从而使对象有更加复杂的功能


## 实现
### 面向对象实现


```
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
```
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
```
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
```
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
```
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
```
yarn init -y
touch index.js
yarn add @babel/core @babel/cli @babel/preset-env --dev
yarn add @babel/plugin-proposal-decorators --dev
```
命令行
```
  // package.json
  "scripts": {
    "build": "babel index.js -o compiled.js && node compiled.js"
  },
  "keywords": [
    "babel"
  ],
```
配置文件
```
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
