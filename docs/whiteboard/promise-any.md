---
title: 实现Promise.any()
---

[MDN-Promise.any()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

[online](https://bigfrontend.dev/zh/problem/implement-Promise-any)


```js

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let errors = [];
    for (let i in iterator) {
      Promise.resolve(iterator[i])
        .then(value => {
          resolve(value);
        }, reason => {
          errors[i] = reason;
          count++;
          if (count == iterator.length) {
            reject(new AggregateError(
              'No Promise in Promise.any was resolved', 
              errors
            ))
          }
        })
    }
  })
}
```

