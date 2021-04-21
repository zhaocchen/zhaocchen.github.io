---
title: 实现Promise.all
---

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)


```
Promise.all = function (iterator) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let res = [];
        for (let i in iterator) {
            Promise.resolve(iterator[i])
                .then(value => {
                    res[i] = value;
                    count++;
                    if (count === iterator.length) {
                        return resolve(res);
                    }
                }, error => {
                    return reject(error)
                });
        }
    })
}
```
简单测试
```
var p1=Promise.resolve(1),
p2=Promise.resolve(2),
p3=Promise.resolve(3);

Promise.all([p3, p1, p2]).then(values => {
    console.log(values) // [ 3, 1, 2 ]
})
```


参考：
[https://github.com/YvetteLau/Blog/issues/2](https://github.com/YvetteLau/Blog/issues/2)
