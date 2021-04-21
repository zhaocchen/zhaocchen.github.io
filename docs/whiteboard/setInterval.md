---
title: setTimeout模拟setInterval
---

#### 实现
```
function mySetInterval(callback, delay, n = Infinity) {
    let count = 0;
    let timer;
    timer = setTimeout(function run() {
        callback();
        if (count >= n) {
            clearTimeout(timer);
            return; // 注意，出口
        }
        // console.log(count, timer);
        count++;
        timer = setTimeout(run, delay);
    }, delay);
}
```


#### 测试
```
// case

setInterval(() => {
    console.log('1')
}, 1000)

mySetInterval(() => {
    console.log('2')
}, 1000, 3)
```
#### 为什么setTimeout模拟setInterval？


setInterval事件不准确


#### 为什么不准确？
setInterval 有两个缺点：

- 使用 setInterval 时，某些间隔会被跳过；
- 可能多个定时器会连续执行；

可以这么理解：**每个 setTimeout 产生的任务会直接 push 到任务队列中；而 setInterval 在每次把任务 push 到任务队列前，都要进行一下判断**
![image.png](https://cdn.nlark.com/yuque/0/2021/png/601538/1617010249469-d9cc0bff-9721-41c4-8b1e-7f24452e1750.png#height=353&id=DhFs6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=706&originWidth=1280&originalType=binary&size=417616&status=done&style=none&width=640)


