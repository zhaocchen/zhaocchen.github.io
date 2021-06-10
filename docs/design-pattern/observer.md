---
slug: observer
title: 行为型 | 观察者模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---



对象间一对多的依赖关系下， 通知并更新的机制。 一个对象发生改变， 所有依赖他的对象都被通知并被自动更新。

### 意图

### 场景

应用场景：

- 前端数据更新， 驱动UI
- 后端请求与控制器映射
- 平台间的消息通知

### 缺点

### 实现

```ts
  // 1. 创建 Subject 类
class Subject {
 private observers: Array<Observer> = new Array<Observer>();
 private state: number = 0;

 public getState(): number {
  return this.state;
 }

 public setState(state: number): void {
  this.state = state;
  this.notifyAllObservers();
 }

 public attach(observer: Observer): void {
  this.observers.push(observer);
 }

 public notifyAllObservers(): void {
  for (let observer of this.observers) {
   observer.update();
  }
 }
}

// 2. 创建 Observer 类
abstract class Observer {
 protected subject: Subject = new Subject();
 public abstract update(): void;
}

// 3. 创建实体观察者类
class BinaryObserver extends Observer {
 constructor(subject: Subject) {
  super();
  this.subject = subject;
  this.subject.attach(this);
 }

 public update(): void {
  console.log("Binary String: ", this.subject.getState().toString(2));
 }
}

class OctalObserver extends Observer {
 constructor(subject: Subject) {
  super();
  this.subject = subject;
  this.subject = subject;
  this.subject.attach(this);
 }

 public update(): void {
  console.log("Octal String: ", this.subject.getState().toString(10));
 }
}

class HexaObserver extends Observer {
 constructor(subject: Subject) {
  super();
  this.subject = subject;
  this.subject.attach(this);
 }

 public update(): void {
  console.log("Hex String: ", this.subject.getState().toString(16).toLocaleUpperCase());
 }
}

// 4. 使用 Subject 和实体观察者对象
class ObserverPatternDemo {
 constructor(args: string[]) {
  let subject: Subject = new Subject();

  new HexaObserver(subject);
  new OctalObserver(subject);
  new BinaryObserver(subject);

  console.log("First state change: 15");
  subject.setState(15);
  console.log("Second state change: 10");
  subject.setState(10);
 }
}
```

测试

```ts
new ObserverPatternDemo([]);
// First state change: 15
// Hex String:  F
// Octal String:  15
// Binary String:  1111
// Second state change: 10
// Hex String:  A
// Octal String:  10
// Binary String:  1010
```

参考：
[https://mp.weixin.qq.com/s/VIIbKEf-qWfaYdaD7wWCWA](https://mp.weixin.qq.com/s/VIIbKEf-qWfaYdaD7wWCWA)
