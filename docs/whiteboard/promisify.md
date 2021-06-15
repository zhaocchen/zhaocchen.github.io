---
title: 实现promisify
---

完成下面的编程


```js
readFile('package.json', 'utf8', (err, data) => {
  console.log(data);
});
// ==========
const data = await promiseify(readFile)('package.json');
console.log(data);

function promiseify(){
  // coding
}
```


参考
```js
var readFile = require('fs').readFile;

async function main() {
  const text = await my_promisify(readFile)('package.json'); // 或再次添加编码utf8格式
  console.log(text);

  //   异步流程改善，把包含callback的异步函数promise化
  function my_promisify(fn) {
    // coding
    return function (...args) {
      let _args = args.slice();
      return new Promise((resolve, reject) => {
        function cb(error, data) {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        }
        _args.push({encoding: 'utf8'}, cb); // utf8编码
        fn.apply(null, _args);
      });
    };
  }
}

main();

```
#### 正常用法


```js
var readFile = require('fs').readFile

readFile('package.json', 'utf8', (err, data) => {
    console.log(data);
  });
  
  // 打印package.json内容
```


```js
var {promisify} = require('util')
var readFile = require('fs').readFile

promisify(readFile)('package.json', {encoding: 'utf8'})
.then((text) => {
    console.log(text)
})
```
####  async/await写法
```js
var {promisify} = require('util')
var readFile = require('fs').readFile

async function main() {
    const data = await promisify(readFile)('package.json', {encoding: 'utf8'});
    console.log(data);
}

main()
```
### 手写promisify（考察关键）
```js
//   异步流程改善，把包含callback的异步函数promise化
function my_promisify(fn) {
  return function (...args) {
    let _args = args.slice();
    return new Promise((resolve, reject) => {
      function cb(error, data) {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      }
      _args.push(cb);
      fn.apply(null, _args);
    });
  };
}
```
