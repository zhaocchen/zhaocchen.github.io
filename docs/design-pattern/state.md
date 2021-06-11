---
slug: state
title: 行为型 | 状态模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---


涉及: 有限状态机

状态机通常由众多条件运算符 （ `if`或 `switch` ） 实现， 可根据对象的当前状态选择相应的行为。  

📢 所有状态抽象到一个类中（原始对象/上下文）， 并保存一个指向当前状的状态对象的引用。

### 意图

一个对象的内部状态变化时改变其行为， 使其看上去就像改变了自身所属的类一样。

### 场景

- 需要依据当前状态进行不同行为，且状态多、状态相关代码变更频繁
- 需要依据成员变量的当前状态改变自身行为的类， 且需要使用大量条件语句
- 相似状态和基于条件的状态机转换中存在许多重复代码

应用：

### 缺点

- 不适用状态较少
- 开闭原则支持不友好

### 结构：

1. 上下文
1. 状态
1. 当前状态
1. 状态切换操作

### 实现

```ts
// 1. 创建一个接口
interface State {
 doAction(context: Context): void;
}

// 2. 创建实现接口的实体类
class StartState implements State {
 public doAction(context: Context): void {
  console.log("Player is in start state");
  context.setState(this);
 }

 public toString(): string {
  return "Start State";
 }
}

class StopState implements State {
 public doAction(context: Context): void {
  console.log("Player is in stop state");
  context.setState(this);
 }

 public toString(): string {
  return "Stop State";
 }
}

// 3. 创建 Context 类
class Context {
 private state!: State;
 constructor() {
  this.state;
 }

 public setState(state: State): void {
  this.state = state;
 }
 public getState(): State {
  return this.state;
 }
}

// 4. 使用 Context 来查看当状态 State 改变时的行为变化
class StatePatternDemo {
 constructor(args: string[]) {
  let context: Context = new Context();

  let startState: StartState = new StartState();
  startState.doAction(context);

  console.log(context.getState().toString());

  let stopState: StopState = new StopState();
  stopState.doAction(context);

  console.log(context.getState().toString());
 }
}
```

测试

```ts
new StatePatternDemo([]);
// Player is in start state
// Start State
// Player is in stop state
// Stop State
```

缺少初始化，告警： add definite assignment assertion to property

```ts
private state!: State;
```
