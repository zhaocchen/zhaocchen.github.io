---
slug: strategy
title: 行为型 | 策略模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description:
---

### 意图

定义一系列算法， 将每种算法分别放入独立的类中，并使算法的对象能够相互替换

### 场景

- 需要对象中各种不同的算法变体在运算时切换
- 许多仅在执行某些行为时略有不同的相似类
- 算法在上下文的逻辑中不重要， 需要将类的业务与算法实现细节隔离
- 类中使用了复杂条件运算符以在同一算法的不同变体中切换

应用：

### 缺点

- 策略类需要对外暴露

### 实现

```ts
// 1. 创建一个接口
interface Strategy {
  doOperation(num1: number, num2: number): number;
}

// 2. 创建实现接口的实体类
class OperationAdd implements Strategy {
  public doOperation(num1: number, num2: number): number {
    return num1 + num2;
  }
}

class OperationSubtract implements Strategy {
  public doOperation(num1: number, num2: number): number {
    return num1 - num2;
  }
}

class OperationMultiply implements Strategy {
  public doOperation(num1: number, num2: number): number {
    return num1 * num2;
  }
}

// 3. 创建 Context 类
class Context {
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public executeStrategy(num1: number, num2: number): number {
    return this.strategy.doOperation(num1, num2);
  }
}
```

测试

```ts
// 4. 使用 Context 来查看当它改变策略 Strategy 时的行为变化
class StrategyPatternDemo {
  constructor() {
    let context: Context = new Context(new OperationAdd());
    console.log("10 + 5 = " + context.executeStrategy(10, 5));

    context = new Context(new OperationSubtract());
    console.log("10 - 5 = " + context.executeStrategy(10, 5));

    context = new Context(new OperationMultiply());
    console.log("10 * 5 = " + context.executeStrategy(10, 5));
  }
}

new StrategyPatternDemo();
// 10 + 5 = 15
// 10 - 5 = 5
// 10 * 5 = 50
```
