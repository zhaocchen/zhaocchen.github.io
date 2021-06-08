---
slug: proxy
title: 结构型 | 代理模式
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
// 1. 创建一个接口
interface Image {
  display(): void;
}

// 2. 创建实现接口的实体类
class RealImage implements Image {
  private filename: string;
  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk(filename)
  }

  public display(): void {
    console.log('Displaying', this.filename);
  }
  private loadFromDisk(fileName: string): void {
    console.log("Loading " + fileName);
  }
}

class ProxyImage implements Image {
  private realImage: RealImage;
  private fileName: string;
  constructor(fileName: string) {
    this.fileName = fileName;
    this.realImage = new RealImage(this.fileName);
  }

  public display(): void {
    if (this.realImage == null) {
      this.realImage = new RealImage(this.fileName);
    }
    this.realImage.display();
  }
}
```

测试

```ts
// 3. 当被请求时，使用 ProxyImage 来获取 RealImage 类的对象
class ProxyPatternDemo {
  image: Image = new ProxyImage("test_10mb.jpg");
  constructor(args: string[]) {
    // 图像将从磁盘加载
    this.image.display();
    console.log("");
    // 图像不需要从磁盘加载
    this.image.display();
  }
}

new ProxyPatternDemo([]);
// Loading test_10mb.jpg
// Displaying test_10mb.jpg

// Displaying test_10mb.jpg
```
