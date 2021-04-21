---
title: 实现节流与防抖
---


#### 前言


防抖、节流主要用于频繁事件触发，例如鼠标移动、改变窗口大小等。[lodash等函数库具备相对应的api](https://lodash.com/docs/4.17.10#debounce)， `_.debounce` 、`_.throttle`。


核心技术：闭包。


区别：


- 防抖， 连续触发， 最后一次触发有效。
- 节流， 一段时间内仅触发一次（第一次）



本文以防抖函数为例， 详细说明。


#### 防抖 debounce


原理： 延迟时间内触发不做响应。
应用场景： 按钮、提交表单
```
var debounce_my = (fn, delay = 500) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);  // 关键
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}
```


#### 节流throttle
原理： 一段时间内只触发一次
应用场景：鼠标移动、改变窗口、拖拽
```
function throttle (fn, delay = 500) {
    let timer;
    return (...args) => {
        if (timer != undefined) return;  // 关键
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = clearTimeout(timer) // 关键， 容易遗忘
        }, delay);
    }
}
```
📢 clearTimeout 返回 undefined
代码：


[https://gitee.com/daaasheng/whiteboard_code/tree/master/debounce](https://gitee.com/daaasheng/whiteboard_code/tree/master/debounce)


#### 参考


[灵感-薄荷周刊， 有错误， 仅供参考](https://github.com/BooheeFE/weekly/issues/13)


[https://css-tricks.com/debouncing-throttling-explained-examples/](https://css-tricks.com/debouncing-throttling-explained-examples/)


[参考blog](https://github.com/lishengzxc/bblog/issues/7)


[动画演示细节](http://demo.nimius.net/debounce_throttle/)
