---
slug: prototype
title: 创建型 | 原型模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 意图

原型实例指定创建对象的种类并且通过拷贝这些原型对象创建新的对象。

### 场景

应用：

### 缺点

### 实现

```javascript
class Prototype {
    clone() {}
}

class Rectangle extends Prototype {
    constructor () {
        super()
    }
    clone() {
        let p = new Rectangle();
        return p;
    }
}

// square
```