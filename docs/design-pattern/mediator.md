---
slug: mediator
title: 行为型 | 中介者模式
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
// 1. 创建中介类
class ChatRoom {
 public static showMessage(user: User, message: string): void {
  console.log(new Date().toString()
   + " [" + user.getName() + "] : " + message);
 }
}

//  2. 创建 user 类
class User {
 private name: string;

 public getName(): string {
  return this.name;
 }

 public setName(name: string): void {
  this.name = name;
 }

 constructor(name: string) {
  this.name = name;
 }

 public sendMessage(message: string): void {
  ChatRoom.showMessage(this, message);
 }
}
```

测试

```ts
//  3. 使用 User 对象来显示他们之间的通信
class MediatorPatternDemo {
 constructor(args: string[]) {
  let robert: User = new User("Robert");
  let john: User = new User("John");

  robert.sendMessage("Hi! John!");
  john.sendMessage("Hello! Robert!");
 }
}

new MediatorPatternDemo([]);
//  Wed Jun 09 2021 23:18:29 GMT+0800 (China Standard Time) [Robert] : Hi! John!
// Wed Jun 09 2021 23:18:29 GMT+0800 (China Standard Time) [John] : Hello! Robert!
```
