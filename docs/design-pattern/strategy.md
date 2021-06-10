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

### 场景

应用：

### 缺点

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
	constructor(args: string[]) {
		let context: Context = new Context(new OperationAdd());
		console.log("10 + 5 = " + context.executeStrategy(10, 5));

		context = new Context(new OperationSubtract());
		console.log("10 - 5 = " + context.executeStrategy(10, 5));

		context = new Context(new OperationMultiply());
		console.log("10 * 5 = " + context.executeStrategy(10, 5));
	}
}

new StrategyPatternDemo([]);
// 10 + 5 = 15
// 10 - 5 = 5
// 10 * 5 = 50
```

