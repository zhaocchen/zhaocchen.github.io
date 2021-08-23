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

### day 2: 数组

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




### day 3: 数组

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



### day 4: 数组

#### [566. 重塑矩阵](https://leetcode-cn.com/problems/reshape-the-matrix/)

```typescript
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    let m = mat.length, n = mat[0].length;
    if (m * n != r * c) return mat;
    let ans = Array.from({length: r}, v => new Array(c).fill(0));
    let k = 0;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            ans[Math.floor(k / c)][k % c] = mat[i][j];
            ++k;
        }
    }
    return ans;
};
```

#### [118. 杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)

```typescript
function generate(numRows: number): number[][] {
    if (numRows == 0) return [];
    let ans = [[1]];
    for (let i = 1; i < numRows; ++i) {
        ans.push(new Array(i + 1).fill(1));
        let half = i >> 1;
        for (let j = 1;j <= half; ++j) {
            let cur = ans[i - 1][j - 1] + ans[i - 1][j];
            ans[i][j] = cur;
            ans[i][i - j] = cur;
        }
    }
    return ans;
};
```

### day 5: 数组

#### [36. 有效的数独](https://leetcode-cn.com/problems/valid-sudoku/)

```typescript
function isValidSudoku(board: string[][]): boolean {
    let rows = Array.from({ length: 9 }, v => new Array(9).fill(false));
    let cols = Array.from({ length: 9 }, v => new Array(9).fill(false));
    let gong = Array.from({ length: 9 }, v => new Array(9).fill(false));
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j ++) {
            let cur = board[i][j];
            if (cur == '.') continue;
            let k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (rows[i][cur] || cols[j][cur] || gong[k][cur]) return false;
            rows[i][cur] = true;
            cols[j][cur] = true;
            gong[k][cur] = true;
        }
    }
    return true;
};
```

#### [73. 矩阵置零](https://leetcode-cn.com/problems/set-matrix-zeroes/)

📢 空间复杂度O(1)

```typescript
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let m = matrix.length, n = matrix[0].length;
    let r0 = false;
    // 标记
    for (let i = 0; i < m ; i++) {
        if (!matrix[i][0]) {
            r0 = true;
        }
        for (let j = 1; j < n; j++) {
            if (!matrix[i][j]) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
   
    // set
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (!matrix[i][0] || !matrix[0][j]) {
                matrix[i][j] = 0;
            }
        }
        if (r0) {
            matrix[i][0] = 0;
        }
    }
};
```



### day 6: 字符串



### day 7: 链表



### day 8: 链表





### day 9: 栈/队列





### day 10: 树（遍历）



### day 11: 树



### day 12: 树



### day 13: 树



### day 14: 树
