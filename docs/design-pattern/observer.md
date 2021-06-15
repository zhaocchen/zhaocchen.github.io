---
slug: observer
title: 行为型 | 观察者模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

(一对多的依赖关系关系下的一种订阅机制) 一个对象发生改变， 所有依赖他的对象都被通知并被自动更新

### 场景

- 一个对象的状态改变需要改变其他对象
- 一些对象必须观察其他对象

应用场景：

- 前端数据更新， 驱动UI
- 后端请求与控制器映射
- 平台间的消息通知
- npm 包与项目是一对多的关系（一个 npm 包被多个项目使用），当 npm 包发布新版本时，如果所有依赖于它的项目都能得到通知，并自动更新这个包的版本号

### 缺点

- 订阅者的通知顺序是随机的

### 实现

```ts
// 1. 创建 Subject 类
class Subject {
  private observers: Array<Observer> = new Array<Observer>();
  private state!: number;

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
    console.log(
      "Hex String: ",
      this.subject.getState().toString(16).toLocaleUpperCase()
    );
  }
}
```

测试

```ts
// 4. 使用 Subject 和实体观察者对象
class ObserverPatternDemo {
  constructor() {
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

new ObserverPatternDemo();
// First state change: 15
// Hex String:  F
// Octal String:  15
// Binary String:  1111
// Second state change: 10
// Hex String:  A
// Octal String:  10
// Binary String:  1010
```
