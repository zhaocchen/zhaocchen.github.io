---
slug: chain-of-responsibility
title: 行为型 | 责任链模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

组成链的多个对象，把请求向下传递， 直至被处理为止

### 场景

- 需要使用不同方式处理不同种类请求，而且请求类型和预先未知
- 需要按顺序执行多个处理者
- 所需处理者及其顺序必须运行时进行改变

应用：

### 缺点

部分请求可能未被处理

### 实现

```ts
// 1. 创建抽象的记录器类
abstract class AbstractLogger {
 public static INFO: number = 1;
 public static DEBUG: number = 2;
 public static ERROR: number = 3;
 protected level: number = 0;
 //责任链中的下一个元素
 protected nextLogger: AbstractLogger | null = null;

 public setNextLogger(nextLogger: AbstractLogger): void {
  this.nextLogger = nextLogger;
 }

 public logMessage(level: number, message: string): void {
  if (this.level <= level) {
   this.write(message);
  }
  if (this.nextLogger != null) {
   this.nextLogger.logMessage(level, message);
  }
 }

 protected abstract write(message: string): void;
}

//  2. 创建扩展了该记录器类的实体类
class ConsoleLogger extends AbstractLogger {
 constructor(level: number) {
  super();
  this.level = level;
 }

 protected write(message: string): void {
  console.log("Standard Console::Logger: " + message);
 }
}

class ErrorLogger extends AbstractLogger {
 constructor(level: number) {
  super();
  this.level = level;
 }

 protected write(message: string): void {
  console.log("Error Console::Logger: " + message);
 }
}

class FileLogger extends AbstractLogger {
 constructor(level: number) {
  super();
  this.level = level;
 }

 protected write(message: string): void {
  console.log("File::Logger: " + message);
 }
}
```

测试

```ts
//  3. 创建不同类型的记录器。
// 赋予它们不同的错误级别，并在每个记录器中设置下一个记录器。每个记录器中的下一个记录器代表的是链的一部分
class ChainPatternDemo {
 constructor() {
  let loggerChain: AbstractLogger = ChainPatternDemo.getChainOfLoggers();
  loggerChain.logMessage(AbstractLogger.INFO, "This is an information.");
  loggerChain.logMessage(AbstractLogger.DEBUG,
   "This is a debug level information.");
  loggerChain.logMessage(AbstractLogger.ERROR,
   "This is an error information.");
 }

 private static getChainOfLoggers(): AbstractLogger {
  let errorLogger: AbstractLogger = new ErrorLogger(AbstractLogger.ERROR);
  let fileLogger: AbstractLogger = new FileLogger(AbstractLogger.DEBUG);
  let consoleLogger: AbstractLogger = new ConsoleLogger(AbstractLogger.INFO);
  errorLogger.setNextLogger(fileLogger);
  fileLogger.setNextLogger(consoleLogger);
  return errorLogger;
 }
}

new ChainPatternDemo();
//  Standard Console::Logger: This is an information.
//  File::Logger: This is a debug level information.
//  Standard Console::Logger: This is a debug level information.
//  Error Console::Logger: This is an error information.
//  File::Logger: This is an error information.
//  Standard Console::Logger: This is an error information.
```

📢 protected 修饰符必须在 abstract 修饰符之前
