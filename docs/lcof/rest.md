---
title: 其他算法
---

## 摩尔投票法



#### [剑指 Offer 39. 数组中出现次数超过一半的数字](https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/) （[169. 多数元素](https://leetcode-cn.com/problems/majority-element/)）

Case 1: [1, 2, 3, 2, 2, 2, 5, 4, 2] => 2

存在数字的数量 > (n / 2)

candidate(存放候选人)      count（票数）
1 1
1 0
3 1
3 0
2 1
2 2
2 1
2 0
2 1




简单验证

2,2,1 

2,1,2

1,2,2

几种结果最终candidate均为2

题解： 摩尔投票法

时间复杂度O(n), 空间复杂度O(1)

```js
var majorityElement = function(nums) {
    let candidate = 0, count = 0;
    for (let num of nums) {
        if (count == 0) candidate = num;
        if (candidate == num) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
};
```

#### [面试题 17.10. 主要元素](https://leetcode-cn.com/problems/find-majority-element-lcci/)

题解： 摩尔投票法+验证

```
var majorityElement = function(nums) {
    let candidate = 0, count = 0;
    for (let num of nums) {
        if (count == 0) candidate = num;
        if (candidate == num) {
            count++;
        } else {
            count--;
        }
    }
    let n = 0;
    for (let num of nums) {
        if (candidate == num) n++;
    }
    return n > (nums.length / 2) ? candidate : -1;
};
```

