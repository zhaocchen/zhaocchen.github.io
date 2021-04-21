---
title: 实现Sting.trim
---

## 实现trim
#### 修剪trim
```
var a = '   r34 f  ';
a.trim()
"r34 f"
```
#### 正则实现
```
// 实现
a.replace(/^\s+|\s+$/g, '')
"r34 f"
```
#### MDN实现
```
// MDN
// 所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR等）
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
```
#### 前置知识

\ufeff 字节顺序标记

\xa0 是不间断空白符


## 应用
### vue中输入框禁止首尾空格
```
<input v-model.trim="name" />
```
