# 概述

刷题第4天，继续链表，继续温习。

## Linked List

### [LC. 24](https://leetcode.com/problems/swap-nodes-in-pairs/)

always remember to add a dummy-head to make head node can be operate like other nodes；
draw blueprints to list pointers relations change to help myself got clear understanding of this question,
each time handle 2 in-paired nodes' swap, then treat the behind node as "dummyHead" to handle swap the rest of linked-list.

### [LC.160](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)

brute force: using stacks to build two LIFO queue and then compare nodes from tail to head can find first intersect node easily. TC and SC are both O(m+n).
can optimized to SC = O(1), see code version 2 in coordinate file, move the longer list's pointer to make both of them remains the same count of nodes then start compare, the first common node is the intersect node.


### [LC.19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)
use two pointers, but have to draw blueprints to make clear how many steps that fast pointer have to move,
should make fast reach null and slow points to the node before the node that to be deleted. 

### [LC.142](https://leetcode.com/problems/linked-list-cycle-ii/description/)
review Floyd's Cycle Detection Algorithm again, read code's documents to review later.


