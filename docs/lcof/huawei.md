---
title: 面试 | 华为机试练习
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description:
Time: 2021-1
---

均已通过测试用例

部分来源： 牛客网


[TOC]

------

### 入门

#### HJ15: 求 int 型数据在内存中存储时 1 的个数

输入一个 int 型的正整数，计算出该 int 型数据在内存中存储时 1 的个数。

```javascript
while ((line = readline())) {
  var lines = line.split(" ")[0];
  let count = 0;
  while (lines) {
    if (lines % 2 == 1) {
      count++;
    }
    lines = Math.floor(lines / 2);
  }
  print(count);
}
```

### 简单

#### HJ11: 数字颠倒

输入一个整数，将这个整数以字符串的形式逆序输出
程序不考虑负数的情况，若数字含有 0，则逆序形式也含有 0，如输入为 100，则输出为 001

```js
while (line = readline()) {
    var lines = line.split(' ')[0];
    let res = []
    while (lines > 0) {
        res.push(lines % 10);
        lines = Math.floor(lines / 10);
    }
    print(res.join(''));
}
```

#### HJ12: 字符串反转

接受一个只包含小写字母的字符串，然后输出该字符串反转后的字符串。（字符串长度不超过 1000）

```js
while (line = readline()) {
    var lines = line.split(' ')[0];
    let n = lines.length;
    let half = Math.floor(n / 2);
    let arr = lines.split('');
    for (let i=0; i< half; i++) {
        [arr[i], arr[n-1-i]] = [arr[n-1-i], arr[i]]
    }
    print(arr.join(''));
}
```

#### HJ22: 汽水瓶

有这样一道智力题：“某商店规定：三个空汽水瓶可以换一瓶汽水。小张手上有十个空汽水瓶，她最多可以换多少瓶汽水喝？”答案是 5 瓶，方法如下：先用 9 个空瓶子换 3 瓶汽水，喝掉 3 瓶满的，喝完以后 4 个空瓶子，用 3 个再换一瓶，喝掉这瓶满的，这时候剩 2 个空瓶子。然后你让老板先借给你一瓶汽水，喝掉这瓶满的，喝完以后用 3 个空瓶子换一瓶满的还给老板。如果小张手上有 n 个空汽水瓶，最多可以换多少瓶汽水喝？

```js
while (line = readline()) {
    var lines = line.split(' ')[0];
    if (lines != 0) {
        print(exchange(lines));
    }
}

function exchange(n) {
    let count = 0;
    while (n >= 2) {
        if (n == 2) return count+1;
        else {
            let newBottle = Math.floor(n / 3);
            count += newBottle;
            n = newBottle + n % 3;
        }
    }
    return count;
}
```

#### HJ37: 统计每个月兔子的总数

斐波那契数列
有一只兔子，从出生后第 3 个月起每个月都生一只兔子，小兔子长到第三个月后每个月又生一只兔子，假如兔子都不死，问每个月的兔子总数为多少？

```js
while (line = readline()) {
    var lines = line.split(' ')[0];
    let res = fab(lines)
    print(res);
}

// fab(n) = fab(n-1) +(fab(n-1)-fab(n-2)) + (fab(n-2)-fab(n-3)) = 2 * fab(n-1) - fab(n-3)
function fab(n) {
    if(n<4) return [1,1,2][n-1];
    return 2 * fab(n-1) - fab(n-3)
}
```

#### HJ53: iNOC 产品部-杨辉三角的变形

1
1  1  1
1  2  3  2  1
1  3  6  7  6  3  1
1  4  10 16 19  16 10  4  1
以上三角形的数阵，第一行只有一个数 1，以下每行的每个数，是恰好是它上面的数，左上角数到右上角的数，3 个数之和（如果不存在某个数，认为该数就是 0）。
求第 n 行第一个偶数出现的位置。如果没有偶数，则输出-1。例如输入 3,则输出 2，输入 4 则输出 3。

输入 n(n <= 1000000000)
本题有多组输入数据，输入到文件末尾，请使用 while(cin>>)等方式读入

```js
while (line = readline()) {
    var lines = line.split(' ')[0];
    let nums = getNums(lines)
//     print(nums)
    let res = getIndex(nums)
    print(res);
}

function getNums(n) {
    let tri = [[1], [1,1]];
    if (n < 2) return tri[n-1];
    for(let i=2; i<n; i++) {
        let prev = tri[i-1];
        let row = [1];
        for(let j=1; j<=i; j++) {
            let cur;
            if(j==1) {
                cur = prev[j-1]+prev[j]
            } else if (j != i) {
                cur = prev[j-2]+ prev[j-1] + prev[j]
            } else {
                cur = 2 * prev[j-2]+prev[j-1]
            }
            row.push(cur)
        }
        tri.push(row.slice())
    }
//     console.log(tri);
    return tri[n-1]
}

function getIndex(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 == 0) return i+1;
    }
    return -1;
}
```

#### HJ56: iNOC 产品部-完全数计算

完全数（Perfect number），又称完美数或完备数，是一些特殊的自然数。
它所有的真因子（即除了自身以外的约数）的和（即因子函数），恰好等于它本身。
例如：28，它有约数 1、2、4、7、14、28，除去它本身 28 外，其余 5 个数相加，1+2+4+7+14=28。s
输入 n，请输出 n 以内(含 n)完全数的个数。计算范围, 0 < n <= 500000

本题输入含有多组样例。

```js
while (line = readline()) {
    var n = line.split(' ')[0];
//     let res = isPerfect(28)
    let count = 0;
    for(let i=2; i <= n; i++) {
        if(isPerfect(i)) {
            count++;
        }
    }
    print(count);
}

function isPerfect(n) {
    let sum = 1;
    let cur = 2;
    while(cur < n) {
        if(n % cur == 0) {
            sum += cur;
        }
        cur++;
    }
    return sum == n;
}
```

#### HJ61: 放苹果

题目描述
把 m 个同样的苹果放在 n 个同样的盘子里，允许有的盘子空着不放，问共有多少种不同的分法？（用 K 表示）5，1，1 和 1，5，1  是同一种分法。
数据范围：0<=m<=10，1<=n<=10。
本题含有多组样例输入。

```js
while (line = readline()) {
    var lines = line.split(' ');
    var m = parseInt(lines[0]);
    var n = parseInt(lines[1]);
    let res = kinds(m, n)
    print(res);
}

/**
 * m个苹果
 * n个盘子
 */
function kinds(m, n) {
    // 递归出口：有0个苹果 || 只有1个盘子
    if(m==0 || n==1) return 1;
    // 盘子比较多，肯定有空盘子，去掉必空的盘子
    if(n > m) return kinds(m, m);
    // 1：至少有一个空盘子，拿掉这个空盘子
    // 2：每个盘子都有苹果，各拿掉一个苹果（极限是最少的有1个苹果）
    else return kinds(m, n-1)+ kinds(m-n, n);
}
```

#### HJ62: 查找输入整数二进制中 1 的个数

输入一个正整数，计算它在二进制下的 1 的个数。
**注意多组输入输出！！！！！！**

```js
while (line = readline()) {
    var num = line.split(' ')[0];
    let res = stateOne(num)
    print(res);
}

function stateOne(n) {
    let count = 0;
    while(n > 0) {
        if(n%2 == 1) {
            count++;
        }
        n = Math.floor(n / 2)
    }
    return count;
}
```

#### HJ66: 配置文件恢复

#### HJ72: 百钱买百鸡问题

公元前五世纪，我国古代数学家张丘建在《算经》一书中提出了“百鸡问题”：鸡翁一值钱五，鸡母一值钱三，鸡雏三值钱一。百钱买百鸡，问鸡翁、鸡母、鸡雏各几何？
详细描述：
接口说明
原型：
int GetResult(vector &list)
输入参数：
         无
输出参数（指针指向的内存区域保证有效）：
    list   鸡翁、鸡母、鸡雏组合的列表
返回值：
     -1  失败      
     0  成功

```js

while (line = readline()) {
    var n = line.split(' ')[0];
    var res = getCheckin(100);
    res.forEach(d => {
        print(d.join(' '))
    })
}

function getCheckin(n) {
    let res = [];
    let a = 0, b = 0, c = 0;
    for(let i = 0; i < Math.floor(n / 5); i++) {
        for (let j = 0; j < Math.floor((n-5 * i) / 3); j++) {
            let k = 3 * (100 - 5 * i - 3 * j);
            if ((i+j+k) === 100) {
                res.push([i, j, k])
            }
        }
    }
    return res;
}
```

#### HJ73: 计算日期到天数转换

根据输入的日期，计算是这一年的第几天。。
测试用例有多组，注意循环输入

```js
while (line = readline()) {
    var lines = line.split(' ');
    let [y, m, d] = String(lines).split(',');
    let res = getIndexDay(y, m, d);
    print(res);
}

function getIndexDay(y, m, d){
    let count=0;
    // 31: 1,3,5,7,8,10,12
    // 能被4整除且不能被100整除的为闰年， 29否则28
    y = parseInt(y);
    m = parseInt(m);
    d = parseInt(d);
    for(let i = 1; i < m; i++) {
        if (i == 2) {
            if(y % 4 === 0 && y % 100 !== 0) {
                count += 29;
            } else {
                count += 28;
            }
        } else if ([1,3,5,7,8,10,12].includes(i)) {
            count += 31;
        } else {
            count += 30;
        }
    }
    count += d;
    return count;
}
```

#### HJ74: 参数解析

问题：

- 无法获取输入？
- js 对'\' 解析？

js？

```js
a = "xcopy /s c:\\ d:\\"
"xcopy /s c:\ d:\"
```

#### HJ75: 公共字串计算

给定两个只包含小写字母的字符串，计算两个字符串的最大公共子串的长度。
注：子串的定义指一个字符串**删掉其部分前缀和后缀**（也可以不删）后形成的字符串。
⚠️ 多行读取数据
分析： 与经典 LCS 有区别！！！

```js
var data = []
while (line = readline()) {
    var lines = line.split(' ');
    data.push(String(lines));
}
let res = LCS(data[0], data[1])
print(res)

function LCS(str1, str2) {
    let m = str1.length, n = str2.length;
    let maxLen = 0;
    let dp = Array.from({length: m+1}, v => new Array(n+1).fill(0));
    for (let i=0; i < m; i++) {
        for (let j=0; j < n; j++) {
            if (str1.charAt(i) == str2.charAt(j)) {
                dp[i+1][j+1] = 1 + dp[i][j];
                maxLen = Math.max(maxLen, dp[i+1][j+1]);
            } else {
                dp[i+1][j+1] = 0
            }
        }
    }
    return maxLen;
}
```

#### HJ76: 尼科彻斯定理

题目描述
验证尼科彻斯定理，即：任何一个整数 m 的立方都可以写成 m 个连续奇数之和。
例如：
1^3=1
2^3=3+5
3^3=7+9+11
4^3=13+15+17+19
输入一个正整数 m（m≤100），将 m 的立方写成 m 个连续奇数之和的形式输出。
本题含有多组输入数据。
分析：
连续数列之和 = (start + end) / 2 _ count
n ^ 3 = (x + (x + 2(n -1))) / 2 _ n
推导出 x = n(n - 1) + 1

```js
while (line = readline()) {
    var lines = line.split(' ');
    var n = parseInt(lines[0]);
    let res = getOdds(n).join('+')
    print(res);
}

function getOdds(n) {
    const x = n * (n - 1) + 1;
    let odds = Array.from({ length: n}, (v, i) => x + 2 * i);
    return odds
}
```

#### HJ83: 二维数组操作

⚠️ 文字题

```js
var m = 0, n = 0;
let step = 0;

while (line = readline()) {
    var lines = line.split(' ');
    let res = 0;
    switch(step){
        case 0:
            // init
            m = parseInt(lines[0]), n = parseInt(lines[1]);
            if (m > 9 || n > 9) {
                res = -1;
            }
            break;
        case 1:
            // change
            let x1 = parseInt(lines[0]), y1 = parseInt(lines[1]), x2 = parseInt(lines[2]), y2 = parseInt(lines[3]);
            if (!valiedCoordinate(m, n, x1, y1) || !valiedCoordinate(m,n, x2, y2)) {
                res = -1;
            }
            break;
        case 2:
            // insert row
            let row = parseInt(lines[0]);
            if (m == 9 || row < 0 || row > m - 1) {
                res = -1;
            }
            break;
        case 3:
            // insert col
            let col = parseInt(lines[0]);
            if (n == 9 || col < 0 || col > n - 1) {
                res = -1;
            }
            break;
        default:
            // get
            let x = parseInt(lines[0]), y = parseInt(lines[1]);
            if (!valiedCoordinate(m, n, x, y)) {
                res = -1;
            }
    }
    step++;
    step = step % 5;
    print(res);
}

function valiedCoordinate(m, n, x, y) {
    if (x < 0 || x > m-1) {
        return false;
    }
    if (y < 0 || y > n-1) {
        return false;
    }
    return true;
}
```

#### HJ84: 统计大写字母个数

题目描述
找出给定字符串中大写字符(即'A'-'Z')的个数。

```js
while (line = readline()) {
    var lines = line.split(' ');
    let res = statUpcase(String(lines));
    print(res);
}

function statUpcase(str) {
    let matched = str.match(/[A-Z]/g);
    return matched ? matched.length : 0;
}
```

#### HJ85: 字符串运用-密码截取（最长回文子串）

题目描述
给定一个仅包含小写字母的字符串，求它的最长回文子串的长度。
所谓回文串，指左右对称的字符串。
所谓子串，指一个字符串删掉其部分前缀和后缀（也可以不删）的字符串
（注意：记得加上 while 处理多个测试用例）

```js
while (line = readline()) {
    var lines = line.split(' ')[0];
    print(longestPalindrome(lines).length);
}

function longestPalindrome(s) {
    let startIndex = 0;
    let maxLen = 1;
    let len = s.length;
    let dp = Array.from({length: len}, v => new Array(len).fill(null));
    // init
    for (let i = 0; i<len; i++) {
        dp[i][i] = true;
    }
    for (let j=0; j< len; j++){
        for (let i=0; i< j; i++) {
            if (s.charAt(i) != s.charAt(j)) {
                dp[i][j] = false;
            } else {
                dp[i][j] = j - i < 3 ? true : dp[i+1][j-1];
            }
            // change
            if (dp[i][j] && j - i +1 > maxLen) {
                maxLen = j - i + 1;
                startIndex = i;
            }
        }
    }
    return s.substring(startIndex, startIndex+maxLen);
}
```

#### HJ86: 求最大连续 bit 数

题目描述
求一个 byte 数字对应的二进制数字中 1 的最大连续数，例如 3 的二进制为 00000011，最大连续 2 个 1

```js
while (line = readline()) {
    var lines = line.split(' ');
    print(statOne(parseInt(lines[0])));
}

function statOne(n) {
    let nums = [];
    while (n>0) {
        nums.push(n %2);
        n = Math.floor(n /2)
    }
    let matched = nums.join('').split(/0+/g);
    return Math.max(...matched.map(d => d.length))
}
```

#### HJ87: 密码强度等级

文字题， 重点考察正则
用 ASCII 码匹配字符， '+'.match(/[\x21-\x2F]/g) ["+"]

```js
while (line = readline()) {
    var lines = line.split(' ');
    print(getGrade(lines[0]))
}

// print(getGrade('for(inti=12;i<=n;i++)'))

function getGrade(str) {
    let score = 0;
    // 长度
    let len = str.length;
    if (len >= 8) {
        score += 25;
    } else if (len >= 5) {
        score += 10;
    } else {
        score += 5;
    }
    // case
    let upperCase = str.match(/[A-Z]+/g);
    let lowerCase = str.match(/[a-z]+/g);
    let hasCase = upperCase || lowerCase;
    let nums = str.match(/[0-9]+/g);
    if (upperCase && lowerCase) {
        score += 20;
    } else if (upperCase || lowerCase) {
        score += 10;
    }
    // number
    let numsLen = nums ? nums.reduce((a, c) =>  a + c.length,0) : 0;
    if (numsLen > 1) {
        score += 20;
    } else if (numsLen == 1) {
        score += 10;
    }
    // char
    let chars = str.match(/[\x21-\x2F]|[\x3A-\x40]|[\x5B-\x60]|[\x7B-\x7E]/g);
    let charsLen = chars ? chars.reduce((a, c) => a + c.length, 0) : 0;
    if (charsLen > 1) {
        score += 25;
    } else if (charsLen == 1) {
        score += 10;
    }
    // extra
    if (upperCase && lowerCase && nums && chars) {
        score += 5;
    } else if ((upperCase || lowerCase) && nums && chars) {
        score += 3;
    } else if ((upperCase || lowerCase) && nums) {
        score += 2;
    }
    //
    let grade;
    if (score >= 90) {
        grade = 'VERY_SECURE';
    } else if (score >= 80) {
        grade = 'SECURE';
    } else if (score >= 70) {
        grade = 'VERY_STRONG';
    } else if (score >= 60) {
        grade = 'STRONG';
    } else if (score >= 50) {
        grade = 'AVERAGE';
    } else if (score >= 25) {
        grade = 'WEAK';
    } else {
        grade = 'VERY_WEAK';
    }
    return grade;
}
```

#### HJ100: 等差数列

题目描述
功能:等差数列  2，5，8，11，14。。。。
输入:正整数 N >0
输出:求等差数列前 N 项和
本题为多组输入，请使用 while(cin>>)等形式读取数据

```js
while (line = readline()) {
    var lines = line.split(' ');
    print(sum(lines[0]));
}

function sum(n) {
    let sum = (2 * 2 + 3 * (n-1)) / 2 * n;
    return sum;
}
```

#### HJ106: 字符逆序

题目描述
将一个字符串 str 的内容颠倒过来，并输出。str 的长度不超过 100 个字符。
⚠️ lines.join(' ') 方式处理输入。

```js
while (line = readline()) {
    var lines = line.split(' ');
    let str = lines.join(' ')
    print(reserve(str));
}

function reserve(str) {
    let len = str.length;
    let res = [];
    for (let i=0; i< len; i++) {
        res.push(str.charAt(len -1 -i));
    }
    return res.join('')
}
```

#### HJ108: 求最小公倍数

题目描述
正整数 A 和正整数 B  的最小公倍数是指   能被 A 和 B 整除的最小的正整数值，设计一个算法，求输入 A 和 B 的最小公倍数。

```js
while (line = readline()) {
    var lines = line.split(' ');
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    print(LCM(a, b));
}

function LCM(n1, n2) {
    let res = n1 < n2 ? n2 : n1;
    while (res % n1 != 0 || res % n2 != 0) {
        res++;
    }
    return res;
}
```

### 结构栈

#### HJ50: 四则运算

#### HJ54: 表达式求值

给定一个字符串描述的算术表达式，计算出结果值。
输入字符串长度不超过 100，合法的字符包括”+, -, \*, /, (, )”，”0-9”，字符串内容的合法性及表达式语法的合法性由做题者检查。本题目只涉及整型计算。

```js
while (line = readline()) {
    var lines = line.split(' ')[0];
    let res = eval(lines)
    print(res);
}
```

中缀 转 后缀
参考： 大话数据结构

### 中等

#### HJ5: 进值转换

题目描述
写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。

```js
while (line = readline()) {
    var lines = line.split(' ');
    print(sixteen2ten(lines[0]));
}

// print(sixteen2ten('0xAA'))

function sixteen2ten(n) {
    let nums = n.slice(2).split('');
    let len = nums.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        let curChar = nums[i];
        let curNum = (/\d/g).test(curChar) ? parseInt(curChar) : curChar.charCodeAt() - 'A'.charCodeAt() + 10;
        count = count * 16 + curNum;
    }
    return count;
}
```

#### HJ6: 质数因子

题目描述
功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如 180 的质因子为 2 2 3 3 5 ）
最后一个数后面也要有空格
⚠️ 超时
优化 [2, Math.sqrt(n)], n > 2 时 res.push(n)

```js
while (line = readline()) {
    var lines = line.split(' ');
    print(primes(parseInt(lines[0])).join(' ')+' ');
}
// print(primes(180))

function primes(n) {
    let res = [];
    for (let p = 2; Math.pow(p, 2) <= n; p++) {
        while (n % p == 0) {
            res.push(p);
            n /= p;
        }
    }
    if (n > 1) {
        res.push(n)
    }
    return res;
}
```

#### HJ8: 合并表记录

题目描述
数据表记录包含表索引和数值（int 范围的正整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照 key 值升序进行输出。

```js
let record;

while (line = readline()) {
    var lines = line.split(' ');
    if (lines.length == 1) {
        record = new Array(parseInt(lines[0])).fill(null)
    } else {
        var key = parseInt(lines[0]);
        var value = parseInt(lines[1]);
        if (record[key] == null) {
            record[key] = value
        } else {
            record[key] += value;
        }
    }
}

record.forEach((d, i) => {
    if (d) print(i, d);
})
```

#### HJ9: 提取不重复的整数

题目描述
输入一个 int 型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。
保证输入的整数最后一位不是 0。

```js
while (line = readline()) {
    var lines = line.split(' ');
    print(formatNum(lines[0]))
}
// print(formatNum('9876673'))

function formatNum(str) {
    let record = []
    for (let i = 0; i < str.length; i++) {
        let cur = str.charAt(str.length-1-i);
        if (!record.includes(cur)) {
            record.push(cur)
        }
    }
    return parseInt(record.join(''));
}
```

#### HJ10: 字符个数统计

题目描述
编写一个函数，计算字符串中含有的不同字符的个数。字符在 ACSII 码范围内(0~127)，换行表示结束符，不算在字符里。不在范围内的不作统计。多个相同的字符只计算一次
例如，对于字符串 abaca 而言，有 a、b、c 三种不同的字符，因此输出 3。

```js
while (line = readline()) {
    var lines = line.split(' ');
    print(statChar(lines[0]));
}
// print(statChar('abc'))
function statChar(str) {
    let res = [];
    for (let i=0; i < str.length; i++) {
        let cur = str.charAt(i);
        if (!res.includes(cur)) {
            res.push(cur);
        }
    }
    return res.length;
}
```

#### HJ34: 图片整理（字符排序）

题目描述
Lily 上课时使用字母数字图片教小朋友们学习英语单词，每次都需要把这些图片按照大小（ASCII 码值从小到大）排列收好。

```js
while (line = readline()) {
    var lines = line.split(' ');
    var arr = lines[0].split('');
    arr.sort((a, b) => a.charCodeAt() - b.charCodeAt());
    print(arr.join(''));
}
```

#### HJ14:字符串排序

题目描述
给定 n 个字符串，请对 n 个字符串按照字典序排列。
⚠️ sort 的应用

```js
let list;
while (line = readline()) {
    var lines = line.split(' ');
    if (!list) {
        list = new Array(parseInt(lines[0]))
    } else {
        list.push(lines[0])
    }
}
list.sort(compareStr);
list.forEach(d => {
    print(d)
})

function compareStr(a, b) {
    let len1 = a.length, len2 = b.length;
    for (let i =0; i < Math.min(len1, len2); i++) {
        if (a.charAt(i) != b.charAt(i)) {
            return a.charAt(i).charCodeAt() - b.charAt(i).charCodeAt();
        }
    }
    return a.length - b.length;
}
```

#### HJ16: 购物单 (动态规划-背包问题)

#### HJ21: 简单密码破解

```js
while (line = readline()) {
    var lines = line.split(' ');
    print(encrypt(lines[0]));
}
// print(encrypt('YUANzhi1987'))
function encrypt(str) {
    let res = [];
    for (let i=0; i<str.length; i++) {
        let curChar = str.charAt(i);
        let newChar;
        if ((/\d/g).test(curChar)) {
           newChar = curChar;
        } else if ((/[A-Z]/g).test(curChar)) {
            if (curChar == 'Z') {
                newChar = 'a'
            } else {
                newChar = String.fromCharCode(curChar.charCodeAt() + 32 + 1)
            }
        } else {
            if ((/[abc]/g).test(curChar)) {
                newChar = '2'
            } else if ((/[def]/g).test(curChar)) {
                newChar = '3'
            } else if ((/[ghi]/g).test(curChar)) {
                newChar = '4'
            } else if ((/[jkl]/g).test(curChar)) {
                newChar = '5'
            } else if ((/[mno]/g).test(curChar)) {
                newChar = '6'
            } else if ((/[pqrs]/g).test(curChar)) {
                newChar = '7'
            } else if ((/[tuv]/g).test(curChar)) {
                newChar = '8'
            } else if ((/[wxyz]/g).test(curChar)) {
                newChar = '9'
            }
        }
        res.push(newChar)
    }
    return res.join('')
}
```

#### HJ26: 字符排序





#### HJ35: 蛇形矩阵

题目描述
蛇形矩阵是由 1 开始的自然数依次排列成的一个矩阵上三角形。
例如，当输入 5 时，应该输出的三角形为：
1 3 6 10 15
2 5 9 14
4 8 13
7 12
11

```js
while (line = readline()) {
    var lines = line.split(' ');
    let n = parseInt(lines[0])
    snake(n).forEach(d => {
        print(d.join(' '))
    })
}
// print(snake(4))
function snake(n) {
    let res = [];
    let count = 1
    for (let sum=0; sum<n; sum++) {
        for (let i=sum; i >= 0; i--) {
            let j = sum - i;
            if (!res[i]) {
                res[i] = new Array();
            }
            res[i][j] = count;
            count++;
        }
    }
    return res;
}
```

#### HJ36: 字符串加密

题目描述
有一种技巧可以对数据进行加密，它使用一个单词作为它的密匙。下面是它的工作原理：首先，选择一个单词作为密匙，如 TRAILBLAZERS。如果单词中包含有重复的字母，只保留第 1 个，其余几个丢弃。现在，修改过的那个单词属于字母表的下面，如下所示：
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
T R A I L B Z E S C D F G H J K M N O P Q U V W X Y
上面其他用字母表中剩余的字母填充完整。在对信息进行加密时，信息中的每个字母被固定于顶上那行，并用下面那行的对应字母一一取代原文的字母(字母字符的大小写状态应该保留)。因此，使用这个密匙，Attack AT DAWN(黎明时攻击)就会被加密为 Tpptad TP ITVH。
请实现下述接口，通过指定的密匙和明文得到密文。
例子：

> igtxbesmnyrehanvuvqhukrtmpynmpdvjlppuq
> wiumbxibguwicjfyvkznbqzvo
> // fnlagongslfntyewcrzvgkzcu
> qrwevoifsrnaxhsuc
> epvjrscrnsflxxzchappqjc
> // vbmngjwgujoxttzwfqbbdnw

⚠️ 大小写
arr.splice(startIndex, deletLength) 删除数组元素
arr.splice(startIndex, 0, ele1, ele2,,,) 数组插入元素
'ad'.toLocaleUpperCase() 转大写"AD"
'ER'.toLocaleLowerCase() 转小写"er"

```js
var key, plain;
while (line = readline()) {
    var lines = line.split(' ');
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    if (!key) {
        var key = lines[0];
    } else if (!plain) {
        var plain = lines[0];
        print(encrypt(key, plain));
        key=undefined, plain=undefined;
    }
}
// print(encrypt('nihao', 'ni'))
function encrypt(key, plain) {
    // init
    let caseTable = [];
    for (let i=0; i<26; i++) {
        caseTable.push(String.fromCharCode(97+i))
    }
    // remove case
    let flag = [];
    for (let char of key.split('')) {
        if (!flag.includes(char)) {
            let index = caseTable.indexOf(char)
            caseTable.splice(index, 1)
            caseTable.splice(flag.length, 0, char)
            flag.push(char);
        }
    }
    // 加密
    let cipher = '';
    for (let s of plain.split('')) {
        let code = s.charCodeAt();
        let newS = code>=97 ? caseTable[code-97] : caseTable[code-97-32].toLocaleUpperCase()
        cipher += newS
    }
    return cipher;
}
```

#### HJ38: 求小球落地 5 次后所经历的路程和第 5 次反弹的高度

题目描述
假设一个球从任意高度自由落下，每次落地后反跳回原高度的一半;  再落下,  求它在第 5 次落地时，共经历多少米?第 5 次反弹多高？
最后的误差判断是小数点 6 位
⚠️ （四舍五入）保留两位位小数 Math.round(height \* 100) / 100

```js
while (line = readline()) {
    var lines = line.split(' ');
    let res = rebound(parseInt(lines[0]))
    print(res[0]);
    print(res[1]);
}
// print(rebound(1))
function rebound(height, count = 5) {
    let sum = height;
    for (let i=5; i > 1; i--) {
        sum += height;
        height /= 2;
    }
    height /= 2;
    const base = Math.pow(10, 6)
    return [sum, Math.round(height * base) / base]
}
```

#### HJ40: （统计字符）输入一行字符，分别统计出包含英文字母、空格、数字和其它字符的个数

题目描述
输入一行字符，分别统计出包含英文字母、空格、数字和其它字符的个数。
⚠️ 获取输入拼接 lines.join(' ')
⚠️ 手动测试中"\\"、"\\/"产生偏差

```js
while (line = readline()) {
    var lines = line.split(' ');
    var res = stat(lines.join(' '))
    res.forEach(d => {
        print(d);
    })
}
// print(stat('1qazxsw23 edcvfr45tgbn hy67uj m,ki89ol.\\/;p0-=\\]['))
function stat(str) {
    let caseLen = (str.match(/[A-Za-z]/g) || []).length;
    let spaceLen = (str.match(/\s/g) || []).length;
    let numberLen = (str.match(/[0-9]/g) || []).length;
    let otherLen = str.length - caseLen - spaceLen - numberLen;
    return [caseLen, spaceLen, numberLen, otherLen];
}
```

#### HJ43: 迷宫问题

#### HJ45: 名字的漂亮程度

题目描述
给出一个名字，该名字有 26 个字符串组成，定义这个字符串的“漂亮度”是其所有字母“漂亮度”的总和。
每个字母都有一个“漂亮度”，范围在 1 到 26 之间。没有任何两个字母拥有相同的“漂亮度”。字母忽略大小写。
给出多个名字，计算每个名字最大可能的“漂亮度”。
⚠️ 理解题意

```js
let n;
while (line = readline()) {
    var lines = line.split(' ');
    if (!n) {
        n = parseInt(lines[0])
    } else {
        print(getBueaty(lines[0]));
        n--;
    }
}
// print(getBueaty('zhangsan'))
function getBueaty(str) {
    let caseMap = new Map();
    let arr = str.toLocaleLowerCase().split('');
    for (let key of arr) {
        caseMap.set(key, caseMap.has(key) ? caseMap.get(key)+1:1)
    }
    let sortedCase = [...caseMap];
    sortedCase.sort((a, b) => b[1] - a[1]);
    let caseObj = {};
    for (let i=0; i<sortedCase.length; i++) {
        caseObj[sortedCase[i][0]] = 26 - i;
    }
    let count=0;
    for (let key of arr) {
        count += caseObj[key];
    }
    return count;
}
```

### 测试 1：

####  1-1 给出数组中， 任意两个元素和为n的组合种类

```javascript
console.log(getCouple(5, [1, 2, 2, 2, 3], 4)); // 4
function getCouple(len, arr, sum) {
    // 暴力
    let res = [];
    for (let i = 0; i < len; i++) {
        let p1 = arr[i];
        let p2 = sum - p1;
        for (let j = i+1; j < len; j++) {
            if (arr[j] == p2) {
                res.push([i, j])
            }
        }
    }
    return res.length;
}
```


#### 1-2 统计包含偶数个o的最长连续字串

```javascript
console.log(getMaxOdd('alolobo')); // 6
console.log(getMaxOdd('looxdolx')); // 7
console.log(getMaxOdd('bcbcbc'));  // 6
function getMaxOdd(str) {
    // console.log(str.length);
    let indexs = [];
    for (let i=0; i<str.length; i++) {
        if (str.charAt(i) == 'o') {
            indexs.push(i)
        }
    }
    let caseCount = indexs.length;
    if (caseCount % 2 == 0) {
        return str.length;
    } else {
        return str.length -1;
    }
}
```

#### 2-1 累加不超过v的最长连续子串

```javascript
console.log(getMaxSub('xxcdefg', 'cdefghi', 5)); // 2
function getMaxSub(str1, str2, v) {
    // init
    let codeAbs = [];
    let len = str1.length;
    for (let i = 0; i < len; i++) {
        codeAbs.push(Math.abs(str1.charCodeAt(i) - str2.charCodeAt(i)))
    }
    // console.log(codeAbs);
    // two points
    let left = 0;
    let max = 0;
    let sum = 0;
    for (let right = 0; right < codeAbs.length; right++) {
        let cur = codeAbs[right];
        if (right == left && cur > v) {
            left++;
            continue;
        }
        sum += cur;
        while (sum > v && left < right) {
            sum -= codeAbs[left];
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    // console.log(max, sum);
    return max;
}
```

### 其他面试：

[https://www.nowcoder.com/discuss/367702?type=2](https://www.nowcoder.com/discuss/367702?type=2)
