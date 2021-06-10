---
slug: builder
title: 创建型 | 生成器模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示

### 场景

- 为避免“重叠构造函数”
- 希望使用代码创建不同形式的产品
- 需要生成器构造组合或其他复杂对象

应用：

### 缺点

### 实现

```typescript
// 1. 创建一个表示食物条目和食物包装的接口
interface Item {
  name(): string;
  packing(): Packing;
  price(): number;
}

interface Packing {
  pack(): string;
}

// 2. 创建实现 Packing 接口的实体类
class Wrapper implements Packing {
  public pack(): string {
    return "Wrapper";
  }
}

class Bottle implements Packing {
  public pack(): string {
    return "Bottle";
  }
}

// 3. 创建实现 Item 接口的抽象类，该类提供了默认的功能
abstract class Burger implements Item {
  public abstract name(): string;
  public packing(): Packing {
    return new Wrapper();
  }
  public abstract price(): number;
}
abstract class ColdDrink implements Item {
  public abstract name(): string;
  public packing(): Packing {
    return new Bottle();
  }
  public abstract price(): number;
}

// 4. 创建扩展了 Burger 和 ColdDrink 的实体类
class VegBurger extends Burger {
  public price(): number {
    return 25.0;
  }
  public name(): string {
    return "Veg Burger";
  }
}

class ChickenBurger extends Burger {
  public price(): number {
    return 50.5;
  }
  public name(): string {
    return "Chicken Burger";
  }
}

class Coke extends ColdDrink {
  public price(): number {
    return 30.0;
  }

  public name(): string {
    return "Coke";
  }
}

class Pepsi extends ColdDrink {
  public price(): number {
    return 35.0;
  }
  public name(): string {
    return "Pepsi";
  }
}

// 5. 创建一个 Meal 类，带有上面定义的 Item 对象
class Meal {
  private items: Array<Item> = new Array<Item>();
  public addItem(item: Item): void {
    this.items.push(item);
  }
  public getCost(): number {
    let cost: number = 0.0;
    for (let item of this.items) {
      cost += item.price();
    }
    return cost;
  }

  showItems(): void {
    for (let item of this.items) {
      console.log("Item : " + item.name(), ", Packing : " + item.packing().pack(), ", Price : " + item.price());

    }
  }
}

// 6. 创建一个 MealBuilder 类，实际的 builder 类负责创建 Meal 对象
class MealBuilder {
  public prepareVegMeal(): Meal {
    let meal: Meal = new Meal();
    meal.addItem(new VegBurger());
    meal.addItem(new Coke());
    return meal;
  }
  public prepareNonVegMeal(): Meal {
    let meal: Meal = new Meal();
    meal.addItem(new ChickenBurger());
    meal.addItem(new Pepsi());
    return meal;
  }
}
```

测试

```ts
// 7. BuiderPatternDemo 使用 MealBuilder 来演示建造者模式
class BuilderPatternDemo {
  mealBuilder: MealBuilder = new MealBuilder();
  vegMeal: Meal = this.mealBuilder.prepareVegMeal();
  nonVegMeal: Meal = this.mealBuilder.prepareNonVegMeal();
  constructor(args: string[]) {
    console.log("Veg Meal");
    this.vegMeal.showItems();
    console.log("Total Cost: " + this.vegMeal.getCost());
    console.log("\n\nNon-Veg Meal");
    this.nonVegMeal.showItems();
    console.log("Total Cost: " + this.nonVegMeal.getCost());
  }
}

new BuilderPatternDemo([]);
// Veg Meal
// Item : Veg Burger , Packing : Wrapper , Price : 25
// Item : Coke , Packing : Bottle , Price : 30
// Total Cost: 55

// Non-Veg Meal
// Item : Chicken Burger , Packing : Wrapper , Price : 50.5
// Item : Pepsi , Packing : Bottle , Price : 35
// Total Cost: 85.5
```
