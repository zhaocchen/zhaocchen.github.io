---
slug: composite
title: 结构型 | 组合模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

将对象组合成树形结构，并能像独立使用对象一样使用。

### 场景

- 需要实现树状对象结构
- 需要客户端代码以相同方式处理简单的复杂元素

应用：

### 缺点

违反依赖倒置原则（叶子和树枝的声明都是实现类）

### 实现

```ts
// 1. 创建 Employee 类，该类带有 Employee 对象的列表
class Employee {
  private name: string;
  private dept: string;
  private salary: number;
  private subordinates: Set<Employee>;
  constructor(name: string, dept: string, sal: number) {
    this.name = name;
    this.dept = dept;
    this.salary = sal;
    this.subordinates = new Set<Employee>();
  }

  public add(e: Employee): void {
    this.subordinates.add(e);
  }
  
  public remove(e: Employee): void {
    this.subordinates.delete(e);
  }
  
  public getSubordinates(): Set<Employee> {
    return this.subordinates;
  }
  
  public toString(): string {
    return ("Employee :[ Name : " + this.name
      + ", dept : " + this.dept + ", salary :"
      + this.salary + " ]");
  }
}
```

测试

```ts
// 2. 使用 Employee 类来创建和打印员工的层次结构
class CompositePatternDemo {
  constructor() {
    CEO: Employee = new Employee("John", "CEO", 30000);
    headSales: Employee = new Employee("Robert", "Head Sales", 20000);
    headMarketing: Employee = new Employee("Michel", "Head Marketing", 20000);
    clerk1: Employee = new Employee("Laura", "Marketing", 10000);
    clerk2: Employee = new Employee("Bob", "Marketing", 10000);
    salesExecutive1: Employee = new Employee("Richard", "Sales", 10000);
    salesExecutive2: Employee = new Employee("Rob", "Sales", 10000);
    CEO.add(headSales);
    CEO.add(headMarketing);
    headSales.add(salesExecutive1);
    headSales.add(salesExecutive2);
    headMarketing.add(clerk1);
    headMarketing.add(clerk2);
    //打印该组织的所有员工
    console.log(CEO.toString());
    for (let headEmployee of CEO.getSubordinates()) {
      console.log(headEmployee.toString());
      for (let employee of headEmployee.getSubordinates()) {
        console.log(employee.toString());
      }
    }
  }
}

new CompositePatternDemo();
// Employee :[ Name : John, dept : CEO, salary :30000 ]
// Employee :[ Name : Robert, dept : Head Sales, salary :20000 ]
// Employee :[ Name : Richard, dept : Sales, salary :10000 ]
// Employee :[ Name : Rob, dept : Sales, salary :10000 ]
// Employee :[ Name : Michel, dept : Head Marketing, salary :20000 ]
// Employee :[ Name : Laura, dept : Marketing, salary :10000 ]
// Employee :[ Name : Bob, dept : Marketing, salary :10000 ]
```

$ ts-node demo.ts

📢tsconfig.json

```json
"downlevelIteration": true, 
```
