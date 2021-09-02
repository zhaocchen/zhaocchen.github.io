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

#### [387. 字符串中的第一个唯一字符](https://leetcode-cn.com/problems/first-unique-character-in-a-string/)

```typescript
function firstUniqChar(s: string): number {
    let record = new Map();
    for (let cur of [...s]) {
        record.set(cur, record.has(cur))
    }
    for (let i =0 ; i < s.length; i++) {
        if (!record.get(s[i])) return i;
    }
    return -1;
};
```

#### [383. 赎金信](https://leetcode-cn.com/problems/ransom-note/)

```typescript
function canConstruct(ransomNote: string, magazine: string): boolean {
    let counter = new Array(26).fill(0);
    let base = 'a'.charCodeAt(0);
    for (let s of magazine) {
        ++counter[s.charCodeAt(0) - base];
    }
    for (let s of ransomNote) {
        let idx = s.charCodeAt(0) - base;
        if (counter[idx] == 0) return false;
        --counter[idx];
    }
    return true;
};
```

#### [242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)

```typescript
function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;
    let record = new Array(26).fill(0);
    let base = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; ++i) {
        ++record[s.charCodeAt(i) - base];
        --record[t.charCodeAt(i) - base];
    }
    return record.every(v => v == 0);
};
```



### day 7: 链表

#### [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

```typescript
function hasCycle(head: ListNode | null): boolean {
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
};
```

#### [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

```typescript
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0), head = dummy;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    head.next = l1 != null ? l1 : l2;
    return dummy.next;
};
```

#### [203. 移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/)

```typescript
function removeElements(head: ListNode | null, val: number): ListNode | null {
    let dummy: ListNode = new ListNode(0, head);
    let cur: ListNode = dummy;
    while (cur.next != null) {
        if (cur.next.val == val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};
```



### day 8: 链表

#### [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

```typescript
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let cur = head;
    while (cur != null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};
```

#### [83. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

```typescript
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) return head;
    let cur = head;
    while (cur !== null && cur.next !== null) {
        if (cur.next.val == cur.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
```



### day 9: 栈/队列

#### [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

```typescript
function isValid(s: string): boolean {
    // 栈， 先进后出
    let hashTable = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);
    let stack = [];
    for (let char of s) {
        let last = stack[stack.length - 1];
        if (stack.length > 0 && char == hashTable.get(last)) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};
```



#### [232. 用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

```typescript
class MyQueue {
    stack1: number[];
    stack2: number[];
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x: number): void {
        this.stack1.push(x);
    }

    pop(): number {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    peek(): number {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    empty(): boolean {
        return !this.stack1.length && !this.stack2.length;
    }
}
```



### day 10: 树（遍历）

#### [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

```typescript
function preorderTraversal(root: TreeNode | null): number[] {
    if (root == null) return [];
    let stack = [];
    let ans = [];
    while (root || stack.length) {
        while (root) {
            ans.push(root.val);
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        root = root.right;
    }
    return ans;
};
```



#### [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

```typescript
function inorderTraversal(root: TreeNode | null): number[] {
    if (root == null) return [];
    let stack = [];
    let ans = [];
    while (root != null || stack.length > 0) {
        if (root != null) {
            stack.push(root);
            root = root.left
        } else {
            root = stack.pop();
            ans.push(root.val);
            root = root.right;
        }
    }
    return ans;
};
```



#### [145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

```typescript
function postorderTraversal(root: TreeNode | null): number[] {
    if (root == null) return [];
    let stack = [];
    let ans = [];
    let prev = null;
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (!root.right || root.right == prev) {
            ans.push(root.val);
            prev = root;
            root = null;
        } else {
            stack.push(root);
            root = root.right;
        }
        
    }
    return ans;
};
```



### day 11: 树

#### [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

```typescript
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let stack = [root];
    let ans = [];
    while (stack.length) {
        let level = [];
        let next = [];
        for (let node of stack) {
            level.push(node.val);
            node.left && next.push(node.left);
            node.right && next.push(node.right);
        }
        ans.push(level);
        stack = next;
    }
    return ans;
};
```



#### [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

```typescript
function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```



#### [101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)

```typescript
function isSymmetric(root: TreeNode | null): boolean {
    return isSame(root, root);
};

function isSame (root1: TreeNode | null, root2: TreeNode | null): boolean {
    if (!root1 || !root2) return root1 == root2;
    if (root1.val != root2.val) return false;
    return isSame(root1.left, root2.right) && isSame(root1.right, root2.left);
}
```



### day 12: 树

#### [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)

```typescript
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return root;
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
```



#### [112. 路径总和](https://leetcode-cn.com/problems/path-sum/)

```typescript
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;
    targetSum -= root.val;
    if (!root.left && !root.right && targetSum == 0) return true;
    if (root.left && hasPathSum(root.left, targetSum)) return true;
    if (root.right && hasPathSum(root.right, targetSum)) return true;
    return false;
};
```



### day 13: 树



### day 14: 树
