---
slug: JavaScript中&&与&区别
title: JavaScript中&&与&区别
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
---


### 0.简介

昨晚看到一篇关于逻辑与和按位与的区别， 引起疑问后今天查完资料发现一些之前遗漏的细节。

[逻辑与](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)和
[按位与](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
在基础语言中都有学习， 一个用于逻辑判断，一个用于按位取与操作。日常业务中常用`Boolean && expression`来代替

```
if (Boolean) {
    expression
}
```

疑问： 除了标准用法， 当操作符两边为其他数据类型时， 又会返回什么值呢？

### 1. 预备知识-假值

即可以转换为false（`Boolean(expr) => false`）

- null
- NaN
- 0
- ''(空字符串)
- undefined

### 2. 逻辑与

印象中的解释是， 同时为才为真。真值表：

|  |  |  |
| --- | --- | --- |
| 左边 | 右边 | a && b 返回值 |
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

如果， 操作符两边不都是Boolean时， 又该如何返回呢？

```
console.log(7 && 8)   // 8
console.log(7 && 0)   // 0
console.log(0 && 8)   // 0
```

Number && Number 返回后者

```
console.log('a' && 'b')  // b
console.log(true && 'b')  // b
console.log('a' && true)  // true
console.log(false && 'b')  // false
console.log('a' && false)  // false
```

当字符串与布尔进行逻辑与时， 存在false则返回false， 否则， 返回后者

```
console.log('b' && null) // null
console.log('b' && NaN) // NaN
console.log('b' && 0) // 0
console.log('b' && '') // 空
console.log('b' && undefined) // undefined

console.log(null && 'b') // null
console.log(NaN && 'b') // NaN
console.log(0 && 'b') // 0
console.log('' && 'b') // 空
console.log(undefined && 'b') // undefined
```

逻辑与遇到假值时,另一个是真值， 返回假值

```
console.log(null && false) // null
console.log(false && null) // false
```

左右都为假值， 返回左边

> Logical AND (&&)
> expr1 && expr2， 如果expr1可以转化为真， 返回expr2; 否者， 返回 expr1。

等价于

```
if (expr1) {
    return expr2
} else {
    return expr1
}
```

### 3. 按位与

```
console.log(0b0011 & 0b0010)  // 2
console.log(3 & 2)   // 2
```

显而易见， 分别把左右两侧转为二进制后进行位运算

```
console.log(true & true)     // 1
console.log(true & false)    // 0
console.log(false & true)    // 0
console.log(false & false)   // 0
```

按位处理布尔值， 仅返回0后者1。等价于`Boolean && Boolean ? 1 : 0`

```
console.log(1 & true)     // 1
console.log(1 & false)     // 0
console.log(1 & null)     // 0
console.log(1 & NaN)     // 0
console.log(1 & '')     // 0
console.log(1 & undefined)     // 0
```

假值处理与Boolean类似

```
console.log(1 & [])     // 0
console.log(1 & [0])     // 0
console.log(1 & [1])     // 1
console.log(1 & [0,1])     // 0
console.log(1 & [1,0])     // 0
console.log(1 & {})     // 0
console.log(1 & '1')     // 1
```

1 & 非假值， 依然会返回1。 似乎被转成数字进行运算。

```
console.log(Number([]))  // 0
console.log(Number([0])) // 0 
console.log(Number([1])) // 1
console.log(Number([0,1])) //0
console.log(Number([1,0])) // NaN
console.log(Number({})) // NaN
console.log('1') // 1
```

验证发现， 与猜想基本一致。

> Bitwise AND
> 按位操作符对这种二进制表示形式执行操作，但是它们返回标准的JavaScript数值。
> a & b , 操作符两边同时为1时， 返回1

|  |  |  |
| --- | --- | --- |
| 左边 | 右边 | a & b 返回值 |
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 0 |
