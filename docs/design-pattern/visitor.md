---
slug: visitor
title: 行为型 | 访问者模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

主要将数据结构与数据操作分离。

### 场景

- 需要对一个复杂对象结构中的所有元素执行某些操作
- 需要清理辅助行为的业务逻辑
- 某行为仅在类层次结构中的一些类中的意义（在其他类中没有意义）

应用：

### 缺点

- 违背迪米特原则
- 违背依赖倒置原则
- 每次在元素层析结构中添加或移除一个子类， 要更新所有的访问者
- 访问者同某个元素进行交互时，可能没有访问元素私有成员变量和方法的必要权限

### 实现

```ts
// 1. 定义一个表示元素的接口
interface ComputerPart {
 accept(computerPartVisitor: ComputerPartVisitor): void;
}

// 2. 创建扩展了上述类的实体类
class Keyboard implements ComputerPart {
 public accept(computerPartVisitor: ComputerPartVisitor): void {
  computerPartVisitor.visit(this);
 }
}

class Monitor implements ComputerPart {
 public accept(computerPartVisitor: ComputerPartVisitor): void {
  computerPartVisitor.visit(this);
 }
}

class Mouse implements ComputerPart {
 public accept(computerPartVisitor: ComputerPartVisitor): void {
  computerPartVisitor.visit(this);
 }
}

class Computer implements ComputerPart {
 parts: ComputerPart[];
 constructor() {
  this.parts = [new Mouse(), new Keyboard(), new Monitor()];
 }
  
 public accept(computerPartVisitor: ComputerPartVisitor): void {
  for (let i: number = 0; i < this.parts.length; i++) {
   this.parts[i].accept(computerPartVisitor);
  }
  computerPartVisitor.visit(this);
 }
}

// 3. 定义一个表示访问者的接口
interface ComputerPartVisitor {
 visit(computer: Computer): void;
 visit(mouse: Mouse): void;
 visit(keyboard: Keyboard): void;
 visit(monitor: Monitor): void;
}

// 4. 创建实现了上述类的实体访问者
class ComputerPartDisplayVisitor implements ComputerPartVisitor {
 public visit(v: Computer | Mouse | Keyboard | Monitor): void {
  if (v instanceof Computer) {
   console.log("Displaying Computer.");
  } else if (v instanceof Mouse) {
   console.log("Displaying Mouse.");
  } else if (v instanceof Keyboard) {
   console.log("Displaying Keyboard.");
  } else if (v instanceof Monitor) {
   console.log("Displaying Monitor.");
  }
 }
}
```

测试

```ts
// 5. 使用 ComputerPartDisplayVisitor 来显示 Computer 的组成部分
class VisitorPatternDemo {
 constructor() {
  let computer: ComputerPart = new Computer();
  computer.accept(new ComputerPartDisplayVisitor());
 }
}

new VisitorPatternDemo();
// Displaying Mouse.
// Displaying Keyboard.
// Displaying Monitor.
// Displaying Computer.
```

相同返回类型和不同输入类型的重载，JavaScript不提供运行时类型信息
