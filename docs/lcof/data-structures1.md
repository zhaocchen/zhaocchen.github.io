---
title: 数据结构入门
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description:
Time: 2021-7
---

| 简单 | 中等 | 困难 |
| ---- | ---- | ---- |
| 28   | 5    | 0    |

### day 1: 数组

#### [217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)

```ts
function containsDuplicate(nums: number[]): boolean {
    let unique: Set<number> = new Set(nums);
    return unique.size != nums.length;
};
```

#### [53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

```ts
function maxSubArray(nums: number[]): number {
    let pre = nums[0];
    let ans = pre;
    for (let i = 1; i < nums.length; ++i) {
        let cur = nums[i];
        pre = Math.max(pre + cur, cur);
        ans = Math.max(ans, pre);
    }
    return ans;
};
```

### day 2: 

#### [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

```ts
function twoSum(nums: number[], target: number): number[] {
    for (let i = nums.length; i >= 0; --i) {
        let cur = nums[i];
        if (nums.indexOf(target - cur) > -1) {
            return [nums.indexOf(target - cur), i]
        }
    }
    return [];
};
```



#### [88. 合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

```ts
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i= m - 1, j = n - 1;
    for (let k = nums1.length - 1; k >= 0; --k) {
        if (i < 0 || nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            --j;
        } else {
            nums1[k] = nums1[i];
            --i;
        }
    }
};
```




### day 3:

#### [350. 两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)

```ts
function intersect(nums1: number[], nums2: number[]): number[] {
    let counter = {};
    for (let num of nums1) {
        counter[num] = (counter[num] || 0) + 1;
    }
    let ans = [];
    for (let num of nums2) {
        if (counter[num] > 0) {
            ans.push(num);
            counter[num] -= 1;
        }
    }
    return ans;
};
```



#### [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

```ts
function maxProfit(prices: number[]): number {
   // 最多只允许完成一笔交易
   let ans = 0;
   let min = prices[0];
   for (let cur of prices) {
       if (cur > min && cur - min > ans) {
           ans = cur - min;
       }
       if (cur < min) {
           min = cur;
       }
   }
   return ans;
};
```



### day 4:





### day 5:   



### day 6: 



### day 7: 



### day 8: 





### day 9: 





### day 10: 



### day 11: 



### day 12: 



### day 13: 



### day 14: 
