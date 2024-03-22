/**
 * https://leetcode.com/problems/reverse-linked-list/description/
 */

/**
 * Definition for singly-linked list.
*/
import { ListNode, printNodes } from "./util.js";
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    /**
     * use stack to build a LIFO queue, unlink node then push into stack first, then pop and link all list, TC=O(n) and SC=O(n)
     * 
     * optimized: in place reverse, pre, cur, next to record 3 nodes, initiate pre = null, cur = head, next = head.next
     * 1. while next is not null, each loop:
     *  cur.next = pre;
     *  pre = cur;
     *  cur = next;
     *  next = cur.next;
     * 2. return cur at last, because next is point to null to end while loop, cur is the reverse head of linked list
     */
    if(!head) {
        return null;
    }

    let pre = null, cur = head, next;
    // when end loop, cur is pointing to null, pre is origin-list's tail and current list's head
    while (cur) {
        next = cur.next
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};


const head = new ListNode(1, new ListNode(2));

// printNodes(head);

const newHead = reverseList(head);
console.log(newHead);
printNodes(newHead);