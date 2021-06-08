---
slug: composite
title: 结构型 | 组合模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

过滤器模式（Filter Pattern）或标准模式（Criteria Pattern）是一种设计模式

### 意图

### 场景

应用：

### 缺点

### 实现

```ts
// 1. 创建一个类，在该类上应用标准
class Person {
  private name: string;
  private gender: string;
  private maritalStatus: string;
  constructor(name: string, gender: string, maritalStatus: string) {
    this.name = name;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
  }

  public getName(): string {
    return this.name;
  }
  public getGender(): string {
    return this.gender;
  }
  public getMaritalStatus(): string {
    return this.maritalStatus;
  }
}

// 2. 为标准（Criteria）创建一个接口
interface Criteria {
  meetCriteria(persons: Array<Person>): Array<Person>;
}

// 3. 创建实现了 Criteria 接口的实体类
class CriteriaMale implements Criteria {
  public meetCriteria(persons: Array<Person>): Array<Person> {
    let malePersons: Array<Person> = new Array<Person>();
    for (let person of persons) {
      if (person.getGender().toLocaleUpperCase() == "MALE") {
        malePersons.push(person);
      }
    }
    return malePersons;
  }
}

class CriteriaFemale implements Criteria {
  public meetCriteria(persons: Array<Person>): Array<Person> {
    let femalePersons: Array<Person> = new Array<Person>();
    for (let person of persons) {
      if (person.getGender().toUpperCase() == "FEMALE") {
        femalePersons.push(person);
      }
    }
    return femalePersons;
  }
}

class CriteriaSingle implements Criteria {
  public meetCriteria(persons: Array<Person>): Array<Person> {
    let singlePersons: Array<Person> = new Array<Person>();
    for (let person of persons) {
      if (person.getMaritalStatus().toUpperCase() == "SINGLE") {
        singlePersons.push(person);
      }
    }
    return singlePersons;
  }
}

class AndCriteria implements Criteria {
  private criteria: Criteria;
  private otherCriteria: Criteria;
  constructor(criteria: Criteria, otherCriteria: Criteria) {
    this.criteria = criteria;
    this.otherCriteria = otherCriteria;
  }

  public meetCriteria(persons: Array<Person>): Array<Person> {
    let firstCriteriaPersons: Array<Person> = this.criteria.meetCriteria(persons);
    return this.otherCriteria.meetCriteria(firstCriteriaPersons);
  }
}

class OrCriteria implements Criteria {
  private criteria: Criteria;
  private otherCriteria: Criteria;
  constructor(criteria: Criteria, otherCriteria: Criteria) {
    this.criteria = criteria;
    this.otherCriteria = otherCriteria;
  }

  public meetCriteria(persons: Array<Person>): Array<Person> {
    let firstCriteriaItems: Array<Person> = this.criteria.meetCriteria(persons);
    let otherCriteriaItems: Array<Person> = this.otherCriteria.meetCriteria(persons);
    for (let person of otherCriteriaItems) {
      if (!firstCriteriaItems.includes(person)) {
        firstCriteriaItems.push(person);
      }
    }
    return firstCriteriaItems;
  }
}

// 4. 使用不同的标准（Criteria）和它们的结合来过滤 Person 对象的列表
class CriteriaPatternDemo {
  constructor(args: string[]) {
    let persons: Array<Person> = new Array<Person>();
    persons.push(new Person("Robert", "Male", "Single"));
    persons.push(new Person("John", "Male", "Married"));
    persons.push(new Person("Laura", "Female", "Married"));
    persons.push(new Person("Diana", "Female", "Single"));
    persons.push(new Person("Mike", "Male", "Single"));
    persons.push(new Person("Bobby", "Male", "Single"));

    let male: Criteria = new CriteriaMale();
    let female: Criteria = new CriteriaFemale();
    let single: Criteria = new CriteriaSingle();
    let singleMale: Criteria = new AndCriteria(single, male);
    let singleOrFemale: Criteria = new OrCriteria(single, female);

    console.log("Males: ");
    CriteriaPatternDemo.printPersons(male.meetCriteria(persons));

    console.log("\nFemales: ");
    CriteriaPatternDemo.printPersons(female.meetCriteria(persons));

    console.log("\nSingle Males: ");
    CriteriaPatternDemo.printPersons(singleMale.meetCriteria(persons));

    console.log("\nSingle Or Females: ");
    CriteriaPatternDemo.printPersons(singleOrFemale.meetCriteria(persons));
  }

  public static printPersons(persons: Array<Person>): void {
    for (let person of persons) {
      console.log("Person : [ Name : " + person.getName()
        + ", Gender : " + person.getGender()
        + ", Marital Status : " + person.getMaritalStatus()
        + " ]");
    }
  }
}
```

测试

```ts
new CriteriaPatternDemo([]);
// Males: 
// Person : [ Name : Robert, Gender : Male, Marital Status : Single ]
// Person : [ Name : John, Gender : Male, Marital Status : Married ]
// Person : [ Name : Mike, Gender : Male, Marital Status : Single ]
// Person : [ Name : Bobby, Gender : Male, Marital Status : Single ]

// Females: 
// Person : [ Name : Laura, Gender : Female, Marital Status : Married ]
// Person : [ Name : Diana, Gender : Female, Marital Status : Single ]

// Single Males: 
// Person : [ Name : Robert, Gender : Male, Marital Status : Single ]
// Person : [ Name : Mike, Gender : Male, Marital Status : Single ]
// Person : [ Name : Bobby, Gender : Male, Marital Status : Single ]

// Single Or Females: 
// Person : [ Name : Robert, Gender : Male, Marital Status : Single ]
// Person : [ Name : Diana, Gender : Female, Marital Status : Single ]
// Person : [ Name : Mike, Gender : Male, Marital Status : Single ]
// Person : [ Name : Bobby, Gender : Male, Marital Status : Single ]
// Person : [ Name : Laura, Gender : Female, Marital Status : Married ]
```

$ ts-node index.ts

📢tsconfig.json

```json
"lib": ["esnext", "dom"]
```
