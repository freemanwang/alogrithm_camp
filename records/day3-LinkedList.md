# 概述

刷题第三天，走到链表了，都是做过的题，但认真的再做了一遍。

今天时间主要花在LC.707，重新写了一次。

## Linked List

### [LC. 203](https://leetcode.com/problems/remove-linked-list-elements/)

remember to add a dummy-head to make head node can be operate like other nodes, easy one.

### [LC.206](https://leetcode.com/problems/reverse-linked-list/description/)

brute force: using stack make a LIFO queue can reverse easily, 

more elegant way is to make in-place reverse.

### [LC.707](https://leetcode.com/problems/design-linked-list/)

first, need to forge a clear understanding of linked-list, then start coding.

version 1's code was focus on reusability and encapsulation, I wrote a `getPreNode(index)` to get the previous node of index, when insert or delete, I can get it's previous node by calling this method then do that operation. Using a dummyHead and carefully handle edge cases makes code more concise, it pass all test cases but TC is not well.

version 2 should focus more on TC optimize, by optimize addAtTail from O(n) to O(1).



