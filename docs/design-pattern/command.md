---
slug: command
title: 行为型 | 命令模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

将一个请求封装成一个对象， 不同的请求对客户进行参数化

### 场景

- 需要通过操作来参数化对象
- 需要将操作放入队列中、操作的执行或者远程执行操作
- 需要支持操作回滚功能

应用：

### 缺点

系统存在过多的具体命令类（发送者和接受者之间增加了一个全新的层次）

### 实现

```ts
// 1. 创建一个命令接口
interface Order {
  execute(): void;
}

// 2. 创建一个请求类
class Stock {
  private name: string = "ABC";
  private quantity: number = 10;

  public buy(): void {
    console.log("Stock [ Name: " + this.name + ", Quantity: " + this.quantity + " ] bought");
  }

  public sell(): void {
    console.log("Stock [ Name: " + this.name + ", Quantity: " + this.quantity + " ] sold");
  }
}

// 3. 创建实现了 Order 接口的实体类
class BuyStock implements Order {
  private abcStock: Stock;
  constructor(abcStock: Stock) {
    this.abcStock = abcStock;
  }

  public execute(): void {
    this.abcStock.buy();
  }
}

class SellStock implements Order {
  private abcStock: Stock;
  constructor(abcStock: Stock) {
    this.abcStock = abcStock;
  }

  public execute(): void {
    this.abcStock.sell();
  }
}

// 4. 创建命令调用类
class Broker {
  private orderList: Array<Order> = new Array<Order>();

  public takeOrder(order: Order): void {
    this.orderList.push(order);
  }

  public placeOrders(): void {
    for (let order of this.orderList) {
      order.execute();
    }
    this.orderList = [];
  }
}
```

测试

```ts
// 5. 使用 Broker 类来接受并执行命令
class CommandPatternDemo {
  constructor(args: string[]) {
    let abcStock: Stock = new Stock();
    let buyStockOrder: BuyStock = new BuyStock(abcStock);
    let sellStockOrder: SellStock = new SellStock(abcStock);
    let broker: Broker = new Broker();
    broker.takeOrder(buyStockOrder);
    broker.takeOrder(sellStockOrder);
    broker.placeOrders();
  }
}

new CommandPatternDemo([]);
// Stock [ Name: ABC, Quantity: 10 ] bought
// Stock [ Name: ABC, Quantity: 10 ] sold
```
