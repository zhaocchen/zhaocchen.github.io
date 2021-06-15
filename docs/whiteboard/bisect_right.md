---
slug: bisect_right
title: 实现bisect_right(Python3)
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---

### 二分查找算法

```python
bisect.bisect_right(nums, x, lo, hi)
```



[官网API](https://docs.python.org/3/library/bisect.html)

[官网实现](https://github.com/python/cpython/blob/3.9/Lib/bisect.py)

🔑 二分法

```ts
function searchRight(nums: number[], target: number, left: number = 0, right: number = nums.length): number {
	if (left < 0) throw ('left must be non-negative');
	while (left < right) {
		let mid = (left + right) >> 1;
		if (target < nums[mid]) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return left;
}

// cases
console.log(searchRight([3, 5, 8, 10, 11, 12], 8));
// 3

console.log(searchRight([3, 5, 8, 8, 10, 11, 12], 10, 0, 6));
// 5

console.log(searchRight([3, 5, 8, 10, 11, 12], 9, 0, 6));
// 3

```

