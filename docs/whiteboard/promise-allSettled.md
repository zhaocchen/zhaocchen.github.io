---
title: 实现Promise.allSettled()
---

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)


```js
function promiseAllSettled(iterator) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let res = [];
        for (let i in iterator) {
            Promise.resolve(iterator[i]).then(value => {
                res[i] = {
                    status: 'fulfilled',
                    value
                };
                count++;
                if (count == iterator.length) {
                    resolve(res);
                }
            }, reason => {
                res[i] = {
                    status: 'rejected',
                    reason
                };
                count++;
                if (count == iterator.length) {
                    resolve(res);
                }
            })
        }
    })
}
```
测试
```js
// case

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(2)
    }, 2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    }, 3000)
})

// Promise.allSettled([p3, p1, p2]).then(res => {
//     console.log(res) 
// })

promiseAllSettled([p3, p1, p2]).then(res => {
    console.log(res) 
})

// [
//     { status: 'fulfilled', value: 3 },
//     { status: 'fulfilled', value: 1 },
//     { status: 'rejected', reason: 2 }
//   ]
```

