---
slug: abstract-factory
title: 创建型 | 抽象工厂模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

抽象工厂模式， 创建一系列相关的对象， 而无需指定其具体类

### 场景

- 多个不同系列的相关产品交互，且无法提前获取相关信息
- 基于一组抽象方法的类， 且主要功能因此变得不明确

应用：

### 缺点

采用该模式需要向应用中引入众多接口和类， 代码可能会比之前更加复杂

### 实现

```typescript
// 1. 创建一个接口
interface Shape {
  draw(): void;
}

// 2. 创建实现接口的实体类
class Rectangle implements Shape {
  public draw(): void {
    console.log("Inside Rectangle::draw() method.");
  }
}

class Square implements Shape {
  public draw(): void {
    console.log("Inside Square::draw() method.");
  }
}

class Circle implements Shape {
  public draw(): void {
    console.log("Inside Circle::draw() method.");
  }
}

// 3. 为颜色创建一个接口
interface Color {
  fill(): void;
}

// 4. 创建实现接口的实体类
class Red implements Color {
  public fill(): void {
    console.log("Inside Red::fill() method.");
  }
}

class Green implements Color {
  public fill(): void {
    console.log("Inside Green::fill() method.");
  }
}

class Blue implements Color {
  public fill(): void {
    console.log("Inside Blue::fill() method.");
  }
}

// 5. 为 Color 和 Shape 对象创建抽象类来获取工厂
abstract class AbstractFactory {
  public abstract getColor(color: string): Color;
  public abstract getShape(shape: string): Shape;
}

// 6. 创建扩展了 AbstractFactory 的工厂类，基于给定的信息生成实体类的对象
class ShapeFactory extends AbstractFactory {
  public getShape(shapeType: string): Shape {
    if (shapeType == null) return null;
    if (shapeType.toLocaleUpperCase() == "CIRCLE") {
      return new Circle();
    } else if (shapeType.toLocaleUpperCase() == "RECTANGLE") {
      return new Rectangle();
    } else if (shapeType.toLocaleUpperCase() == "SQUARE") {
      return new Square();
    }
    return null;
  }
  
  public getColor(color: string): Color {
    return null;
  }
}

class ColorFactory extends AbstractFactory {
  public getShape(shapeType: string): Shape {
    return null;
  }

  public getColor(color: string): Color {
    if (color == null) return null;
    if (color.toLocaleUpperCase() == "RED") {
      return new Red();
    } else if (color.toLocaleUpperCase() == "GREEN") {
      return new Green();
    } else if (color.toLocaleUpperCase() == "BLUE") {
      return new Blue();
    }
    return null;
  }
}

// 7. 创建一个工厂创造器/生成器类，通过传递形状或颜色信息来获取工厂
class FactoryProducer {
  public static getFactory(choice: string): AbstractFactory {
    if (choice.toLocaleUpperCase() == "SHAPE") {
      return new ShapeFactory();
    } else if (choice.toLocaleUpperCase() == "COLOR") {
      return new ColorFactory();
    }
    return null;
  }
}

```

测试

```ts
// 8. 使用 FactoryProducer 来获取 AbstractFactory，通过传递类型信息来获取实体类的对象
class AbstractFactoryPatternDemo {
  constructor() {
    //获取形状工厂
    let shapeFactory: AbstractFactory = FactoryProducer.getFactory("SHAPE");
    //获取颜色工厂
    let colorFactory: AbstractFactory = FactoryProducer.getFactory("COLOR");
    //获取形状为 Circle 的对象
    const shape1: Shape = shapeFactory.getShape("CIRCLE");
    //调用 Circle 的 draw 方法
    shape1.draw();

    //获取形状为 Rectangle 的对象
    const shape2: Shape = shapeFactory.getShape("RECTANGLE");
    //调用 Rectangle 的 draw 方法
    shape2.draw();

    //获取形状为 Square 的对象
    const shape3: Shape = shapeFactory.getShape("SQUARE");
    //调用 Square 的 draw 方法
    shape3.draw();

    //获取颜色为 Red 的对象
    const color1: Color = colorFactory.getColor("RED");
    //调用 Red 的 fill 方法
    color1.fill();

    //获取颜色为 Green 的对象
    const color2: Color = colorFactory.getColor("Green");
    //调用 Green 的 fill 方法
    color2.fill();

    //获取颜色为 Blue 的对象
    const color3: Color = colorFactory.getColor("BLUE");
    //调用 Blue 的 fill 方法
    color3.fill();
  }
}

new AbstractFactoryPatternDemo();
// Inside Circle::draw() method.
// Inside Rectangle::draw() method.
// Inside Square::draw() method.
// Inside Red::fill() method.
// Inside Green::fill() method.
// Inside Blue::fill() method.
```
