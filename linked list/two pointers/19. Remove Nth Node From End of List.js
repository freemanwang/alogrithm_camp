/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { ListNode } from "../util";

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    /**
     * as it guaranteed in description that n is ltw size of linked list, inputs are valid;
     * should use dummyHead to make head node can be operated as other nodes
     * 
     * initiate two pointers, fast and slow both start from dummyHead,
     * then fast moves (n+1) steps forward, then slow and fast start move together,
     * when fast reach the end of linked list(fast === null), 
     * slow should be pointing at node before n-th node from end of list, slow.next is to be deleted
     * edge case: if n === list.size, means delete head, then after (n+1) steps move
     * 
     * dummyHead -> 1 -> 2 -> 3 -> 4, n = 2 to delete 2th node to end, that's 3
     * fast moves (2+1) = 3 steps to make it point at 3, then slow and fast moves together,
     * when fast points at null, it move 2 steps so that slow is pointing at 2, modify slow.next can delete node-3
    */
   const dummyHead = new ListNode(null, head);
   let fast = dummyHead, slow = dummyHead;
   
   // fast should move n+1 steps, so stop operator is '<='
   for (let count = 0; count <= n; count++) {
    fast = fast.next;
   }

   // move together part
   while (fast) {
    fast = fast.next;
    slow = slow.next;
   }

   // 
   slow.next = slow.next.next;
   return dummyHead.next;
};