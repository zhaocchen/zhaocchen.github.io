---
title: 设计原则
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

## 面向对象原则（SOLID原则）

### 单一职责原则 SRP

Single Responsibility Principle， 对象应该仅具有一种单一的功能

核心思想：职责唯一

高内聚、低耦合

- 数据职责-属性

- 行为职责-方法

### 开闭原则 OCP

Open–Closed Principle， 程序对于扩展开放，对于修改封闭

- 对扩展开发，对修改关闭
- 对可变性封装原则

### 里氏替换原则 LSP

Liskov Substitution Principle， 对象应该是可以在不改变程序正确性的前提下被它的子类所替换的

核心思想： 通过继承实现多态行为

- 替换后， 行为不发生变化

### 接口隔离原则 ISP

Interface Segregation Principle， 多个特定客户端接口要好于一个宽泛用途的接口

通俗讲， 不应该强迫用户依赖于他们不用的方法

### 依赖倒置原则 DIP

Dependency Inversion Principle， （也叫依赖反转原则）， 认为一个方法应该遵从“依赖于抽象而不是一个实例”

抽象就是指具备一些共性规律并能经得起实践检验的抽象

目标： 要尽量通过寻找好的抽象来解决大量重复工作的效率问题

- 针对接口编程，不针对实现编程

SOLID 五大原则之间的关系图

![SOLID五大原则之间的关系图](/img/design-pattern/solid.png)

## 最少知识原则 LKP/迪米特法则 LoD

Law of Demeter， 迪米特法则

核心思想是通过减少和不必要的类进行通信来降**低代码耦合**

核心原则是：

- 每个软件单位对其他的单位都只有**最少**的知识，
- 而且局限于那些与本单位**密切相关**的软件单位

应用：

- 分层架构，被认为是迪米特法则在架构设计上的一种具体体现
- Controller 层/Service层/ DAO 层
- Router/Controller/Service/Middleware

📢

- 太过于关注局部的简化，忽略整体
- 拆分过多中间类和方法
- 模块间的通信降低效率

## 简单原则 KISS

Keep It Simple and Stupid，保持简单，保持愚蠢

- 避免长期补丁式编码 -> 适时重构

- 避免难以理解编码  -> 定期code review
- 避免简单编码 -> 代码规范
- 避免过早优化 -> 逐步优化

## 你不会需要它原则 YAGNI

You Ain't Gonna Need It， 你不会需要它， 按需编码（不关心未来可能需要， 现在无用的代码）

## 不要重复你自己 DRY

Don't Repeat Yourself, 不要重复你自己（单一原则）

- 功能需求重复
- 实现逻辑重复
- 执行调用重复

📢

1. 先可用， 再重复
2. 抓住上下文，适度设计

## 表达原则 PIE

Program Intently and Expressively， （也叫包容性原则）编程要表达出意图/凸显代码的内在逻辑。

指编程时应该有清晰的编程意图，并通过代码明确地表达出来。

目的： 代码可读性

核心思想：代码即文档

- 代码表现形式
  - 命名
  - 代码格式规范
  - 注释
- 控制流和逻辑
- 惯性思维

## 分离原则 SoC

## 合成复用原则 CRP

- 也叫黑箱复用
- 类之间耦合度降低

📢
