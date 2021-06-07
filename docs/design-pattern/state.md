---
slug: state
title: 行为型 | 状态模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

[https://refactoringguru.cn/design-patterns/state](https://refactoringguru.cn/design-patterns/state)
[https://refactoringguru.cn/design-patterns/state/typescript/example](https://refactoringguru.cn/design-patterns/state/typescript/example)
[https://mp.weixin.qq.com/s/XSR401_iu5jfQBZaEM4MPg](https://mp.weixin.qq.com/s/XSR401_iu5jfQBZaEM4MPg)
# state状态模式 （行为模式）
一个对象的内部状态变化时改变其行为， 使其看上去就像改变了自身所属的类一样。 
涉及， 有限状态机
状态机通常由众多条件运算符 （ `if`或 `switch` ） 实现， 可根据对象的当前状态选择相应的行为。  


📢 所有状态抽象到一个类中（原始对象/上下文）， 并保存一个指向当前状的状态对象的引用。


结构：

1. 上下文
1. 状态
1. 当前状态
1. 状态切换操作



优势

- 职责单一
- 开闭



劣势

- 不使用状态较少
