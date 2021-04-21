---
title: 实现sleep函数
---


核心： setTimout

实现

```
function sleep (callback, delay) {
    if (typeof callback === 'function') {
        setTimeout(callback, delay)
    }
}

sleep(() => {
    console.log(1);
} , 1000)
```


promise实现
```
function sleep (delay) {
    return new Promise((resolve, reject) => setTimeout(resolve, delay))
}

sleep(1000).then(() => {
    console.log(1);
})
```


async/await实现
```
function sleep (delay) {
    return new Promise((resolve, reject) => setTimeout(resolve, delay))
}

async function foo() {
    let res = await sleep(1000);
    console.log(1);
    return res;
}

foo()
```
generator 实现
```


function* sleep (delay) {
    yield new Promise((resolve, reject) => setTimeout(resolve, delay))
}

sleep(1000).next().value.then(() => {
    console.log(1)
})
```
