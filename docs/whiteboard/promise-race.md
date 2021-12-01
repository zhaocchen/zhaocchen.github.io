---
title: 实现Promise.race()
---

[MDN-Promise.race()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

[online](https://bigfrontend.dev/problem/implement-Promise-race)


```js
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i in promises) {
      Promise.resolve(promises[i])
        .then(value => {
          resolve(value);
        }, reason => {
          reject(reason);
        })
    }
  });
}
```

