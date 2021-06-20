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

为对象提供一种代理以控制对这个对象的访问。

### 场景

- 延迟初始化（虚拟代理）。需要一个偶尔使用的重量级服务对象， 一致保持该对象运行会消耗系统资源
- 访问控制（保护代理）。仅特定客户端使用服务对象，限制客服端恶意程序非法操作
- 本地执行远程服务（远程代理）
- 记录日志请求（日志记录代理）。需要保存对服务对象的请求历史记录
- 智能引用。需要没有客户端使用某重量级对象时立即销毁

应用：

### 缺点

- 服务响应可能会延迟

- 需要新建许多类

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
  constructor() {
    let image: Image = new ProxyImage("test_10mb.jpg");
    // 图像将从磁盘加载
    image.display();
    console.log("");
    // 图像不需要从磁盘加载
    image.display();
  }
}

new ProxyPatternDemo();
// Loading test_10mb.jpg
// Displaying test_10mb.jpg

// Displaying test_10mb.jpg
```

#### 案例：（虚拟代理）图片预加载

采用已有loading占位， 图片资源加载成功后再填充。

#### 案例：（虚拟代理）合并HTTP请求

收集时间段内所有请求， 合并后向服务端发起请求。

### 案例：（缓存代理）ajax异步请求数据

请求数据缓存本地， 找不到缓存则向服务端发起请求

