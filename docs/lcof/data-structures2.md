---
title: 数据结构基础
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: true
description:
Time: 2021-9
---

| 简单 | 中等 | 困难 |
| ---- | ---- | ---- |
| 11   | 37   | 2    |

### day1: 数组

#### [136. 只出现一次的数字](https://leetcode-cn.com/problems/single-number/)

思路：异或运算

```typescript
function singleNumber(nums: number[]): number {
    let ans = 0;
    for (let num of nums) {
        ans ^= num;
    }
    return ans;
};
```

#### [169. 多数元素](https://leetcode-cn.com/problems/majority-element/)

思路：摩尔投票

```typescript
function majorityElement(nums: number[]): number {
    let candidate = 0;
    let count = 0;
    for (let num of nums) {
        if (count == 0) {
            candidate = num;
            count = 1;
        } else {
            count += (num == candidate ? 1 : -1);
        }
    }
    return candidate;
};
```

#### [15. 三数之和](https://leetcode-cn.com/problems/3sum/)

```typescript
function threeSum(nums: number[]): number[][] {
    let n = nums.length;
    if (n < 3) return [];
    let ans = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n - 2; i++) {
        let cur = nums[i];
        // 临界
        if (cur > 0) return ans;
        // 重复元素跳过
        if (i > 0 && cur == nums[i - 1]) continue;
        let left = i + 1, right = n - 1;
        while (left < right) {
            let sum = cur + nums[left] + nums[right];
            if (sum == 0) {
                ans.push([cur, nums[left], nums[right]]);
                while (left < right && nums[left] == nums[left + 1]) {
                    ++left;
                }
                while (left < right && nums[right] == nums[right - 1]) {
                    --right;
                }
                ++left;
                --right;
            } else if (sum < 0) {
                ++left;
            } else {
                --right;
            }
        }
    }
    return ans;
};
```





### day2: 数组

#### [75. 颜色分类](https://leetcode-cn.com/problems/sort-colors/)

```typescript
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let n = nums.length;
    if (n < 2) return;
    let p0 = 0, p2 = n - 1;
    let p1 = 0;
    while (p1 <= p2) {
        // console.log(p1, nums[p1])
        if (nums[p1] == 0) {
            [nums[p0], nums[p1]] = [nums[p1], nums[p0]];
            p0++;
            p1++;
        } else if (nums[p1] == 1) {
            p1++;
        } else {
            [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
            p2--;
        }
    }
};
```

#### [56. 合并区间](https://leetcode-cn.com/problems/merge-intervals/)

```typescript
function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])
    let ans: number[][] = [];
    let index: number = -1;
    for (let interval of intervals) {
        if (index == -1 || ans[index][1] < interval[0]) {
            // 保留
            ans.push(interval);
            index++;
        } else {
            // 求交集
            ans[index][1] = Math.max(ans[index][1], interval[1])
        }
    }
    return ans;
};
```

#### [706. 设计哈希映射](https://leetcode-cn.com/problems/design-hashmap/)

```typescript
class MyHashMap {
    base: number;
    data: Array<Array<Array<number>>>;
    constructor() {
        this.base = 769;
        this.data = Array.from({ length: this.base }, () => new Array());
    }

    hash(key: number): number {
        return key % this.base;
    }

    put(key: number, value: number): void {
        const h = this.hash(key);
        for (let item of this.data[h]) {
            if (item[0] == key) {
                item[1] = value;
                return;
            }
        }
        this.data[h].push([key, value]);
    }

    get(key: number): number {
        const h = this.hash(key);
        for (let item of this.data[h]) {
            if (item[0] == key) {
                return item[1];
            }
        }
        return -1;
    }

    remove(key: number): void {
        const h = this.hash(key);
        let items = this.data[h];
        for (let i = 0; i < items.length; i++) {
            if (items[i][0] == key) {
                items.splice(i, 1);
            }
        }
    }
}
```



### day3: 数组

#### [119. 杨辉三角 II](https://leetcode-cn.com/problems/pascals-triangle-ii/)

```typescript
function getRow(rowIndex: number): number[] {
    let ans = new Array(rowIndex + 1).fill(1);
    for (let i = 2; i < rowIndex + 1; ++i) {
        for (let j = i - 1; j > 0; --j) {
            ans[j] += ans[j - 1];
        }
    }
    return ans;
};
```

#### [48. 旋转图像](https://leetcode-cn.com/problems/rotate-image/)

```typescript
function rotate(matrix: number[][]): void {
    let n = matrix[0].length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[n-1-j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = tmp;
        }
    }
};
```

#### [59. 螺旋矩阵 II](https://leetcode-cn.com/problems/spiral-matrix-ii/)

```typescript
function generateMatrix(n: number): number[][] {
    let ans = Array.from({ length: n }, v => new Array(n));
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let i = 0, j = 0;
    for (let cnt = 1, k = 0; cnt <= n * n; cnt++) {
        ans[i][j] = cnt;
        let x = i + dir[k][0], y = j + dir[k][1];
        if (x < 0 || x == n || y < 0 || y == n || ans[x][y]) {
            k = (k + 1) % 4;
            x = i + dir[k][0], y = j + dir[k][1];
        }
        i = x, j = y;
    }
    return ans;
};
```

### day4: 数组

#### [240. 搜索二维矩阵 II](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/)

```typescript
function searchMatrix(matrix: number[][], target: number): boolean {
    let m = matrix.length, n = matrix[0].length;
    for (let i = 0, j = n - 1; i < m && j > -1;) {
        let cur = matrix[i][j];
        if (cur == target) return true;
        else if (cur < target) {
            i++;
        } else {
            j--;
        }
    }
    return false;
};
```

#### [435. 无重叠区间](https://leetcode-cn.com/problems/non-overlapping-intervals/)

```typescript
function eraseOverlapIntervals(intervals: number[][]): number {
    let n = intervals.length;
    if (n == 0) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let end = intervals[0][1], ans = 0;
    for (let i = 1; i < n; ++i) {
        let cur = intervals[i];
        if (end > cur[0]) {
            ans++;
        } else {
            end = cur[1];
        }
    }
    return ans;
};
```

### day5: 数组

#### [334. 递增的三元子序列](https://leetcode-cn.com/problems/increasing-triplet-subsequence/)

```typescript
```

#### [238. 除自身以外数组的乘积](https://leetcode-cn.com/problems/product-of-array-except-self/)

```typescript
```

#### [560. 和为 K 的子数组](https://leetcode-cn.com/problems/subarray-sum-equals-k/)

```typescript
```





### day6: 字符串



### day7: 字符串



### day8: 字符串



### day9: 字符串



### day10: 链表



### day11: 字符串



### day12: 字符串



### day13: 字符串



### day14: 栈/队列



### day15: 树



### day16: 树



### day17: 树



### day18: 树



### day19: 图



### day20: 队列优先



### day21: 队列优先

