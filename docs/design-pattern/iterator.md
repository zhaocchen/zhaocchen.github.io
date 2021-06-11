---
slug: iterator
title: 行为型 | 迭代器模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

在不暴露集合底层表现形式的情况下遍历集合中所有的元素

### 场景

- （集合是复杂的数据结构）需要对客户隐藏复杂性
- 减少成中重复的遍历代码
- 需要遍历不同甚至无法预知的数据结构

应用：

### 缺点

- 相比直接遍历，效率低

### 实现

```ts
// 1. 创建接口
interface MyIterator {
 hasNext(): boolean;
 next(): any;
}

interface Container {
 getIterator(): MyIterator;
}

// 2. 创建实现了 Container 接口的实体类。该类有实现了 Iterator 接口的内部类 NameIterator
class NameRepository implements Container {
 public names: string[] = ["Robert", "John", "Julie", "Lora"];
 public getIterator(): MyIterator {
  return new NameIterator(this.names);
 }
}

class NameIterator implements MyIterator {
 index: number = 0;
 constructor(public names: string[]) {
 }

 public hasNext(): boolean {
  if (this.index < this.names.length) {
   return true;
  }
  return false;
 }

 public next(): any {
  if (this.hasNext()) {
   return this.names[this.index++];
  }
  return null;
 }
}
```

测试

```ts
// 3. 使用 NameRepository 来获取迭代器，并打印名字
class IteratorPatternDemo {
 constructor() {
  let namesRepository: NameRepository = new NameRepository();
  let iter: MyIterator = namesRepository.getIterator()
  while (iter.hasNext()) {
   let name: string = iter.next();
   console.log("Name : " + name);
  }
 }
}

new IteratorPatternDemo();
// Name : Robert
// Name : John
// Name : Julie
// Name : Lora
```

📢 All declarations of 'Iterator' must have identical type parameters

本身有定义

```ts
// lib.es2015.iterable.d.ts
interface Iterator<T, TReturn = any, TNext = undefined> {
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return?(value?: TReturn): IteratorResult<T, TReturn>;
    throw?(e?: any): IteratorResult<T, TReturn>;
}

interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T> {
    [Symbol.iterator](): IterableIterator<T>;
}
```
