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

### 场景

应用：

### 缺点

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
	private state: string = '';

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
	constructor(args: string[]) {
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

new MementoPatternDemo([]);
// Current State: State #4
// First saved State: State #2
// Second saved State: State #3
```

