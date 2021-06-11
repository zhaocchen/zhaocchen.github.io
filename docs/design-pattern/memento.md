---
slug: memento
title: 行为型 | 备忘录模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

允许在不暴露对象实现细节的情况下，保存和恢复对象之前的状态

### 场景

- 需要创建对象状态快照来回复之前的状态
- 直接访问对象的成员对象、获取器或设置器将导致封装被突破

应用：

### 缺点

- 消耗大量内存
- 必须跟踪完整生命周期
- 动态语言不能确保备忘录状态不被修改

### 实现

```ts
// 1. 创建 Memento 类
class Memento {
  private state: string;
  constructor(state: string) {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }
}

// 2. 创建 Originator 类
class Originator {
  private state!: string;

  public setState(state: string): void {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }

  public saveStateToMemento(): Memento {
    return new Memento(this.state);
  }

  public getStateFromMemento(Memento: Memento): void {
    this.state = Memento.getState();
  }
}

// 3. 创建 CareTaker 类
class CareTaker {
  private mementoList: Array<Memento> = new Array<Memento>();

  public add(state: Memento): void {
    this.mementoList.push(state);
  }

  public get(index: number): Memento {
    return this.mementoList[index];
  }
}
```

测试

```ts
// 4. 使用 CareTaker 和 Originator 对象
class MementoPatternDemo {
  constructor() {
    let originator: Originator = new Originator();
    let careTaker: CareTaker = new CareTaker();
    originator.setState("State #1");
    originator.setState("State #2");
    careTaker.add(originator.saveStateToMemento());
    originator.setState("State #3");
    careTaker.add(originator.saveStateToMemento());
    originator.setState("State #4");

    console.log("Current State: " + originator.getState());
    originator.getStateFromMemento(careTaker.get(0));
    console.log("First saved State: " + originator.getState());
    originator.getStateFromMemento(careTaker.get(1));
    console.log("Second saved State: " + originator.getState());
  }
}

new MementoPatternDemo();
// Current State: State #4
// First saved State: State #2
// Second saved State: State #3
```
