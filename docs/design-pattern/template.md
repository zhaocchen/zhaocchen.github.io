---
slug: template
title: 行为型 | 模板模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

在超类中定义了一个算法的框架，允许子类在不修改结构的情况下重写算法的特定步骤。

### 场景

- 需要扩展算法步骤，而不是整个算法或其结构
- 多个子类的算法除了一些细微不同之外几乎完全一样

应用：

### 缺点

- 不同的实现需要一个子类实现，子类增加导致系统庞大
- 算法框架产生限制
- 违背里氏替换原则

### 实现

```ts
// 1. 创建一个抽象类，它的模板方法被设置为 final
abstract class Game {
 abstract initialize(): void;
 abstract startPlay(): void;
 abstract endPlay(): void;

 //模板 final
 public play(): void {
  //初始化游戏
  this.initialize();
  //开始游戏
  this.startPlay();
  //结束游戏
  this.endPlay();
 }
}

// 2. 创建扩展了上述类的实体类
class Cricket extends Game {
 endPlay(): void {
  console.log("Cricket Game Finished!");
 }
 initialize(): void {
  console.log("Cricket Game Initialized! Start playing.");
 }
 startPlay(): void {
  console.log("Cricket Game Started. Enjoy the game!");
 }
}

class Football extends Game {
 endPlay(): void {
  console.log("Football Game Finished!");
 }
 initialize(): void {
  console.log("Football Game Initialized! Start playing.");
 }
 startPlay(): void {
  console.log("Football Game Started. Enjoy the game!");
 }
}

// 3. 使用 Game 的模板方法 play() 来演示游戏的定义方式
class TemplatePatternDemo {
 constructor() {
  let game: Game = new Cricket();
  game.play();
  console.log();
  game = new Football();
  game.play();
 }
}
```

测试

```ts
new TemplatePatternDemo();
// Cricket Game Initialized! Start playing.
// Cricket Game Started. Enjoy the game!
// Cricket Game Finished!

// Football Game Initialized! Start playing.
// Football Game Started. Enjoy the game!
// Football Game Finished!
```
