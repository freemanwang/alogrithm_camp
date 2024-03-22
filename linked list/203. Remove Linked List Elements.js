/**
 * https://leetcode.com/problems/remove-linked-list-elements/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    /**
     * basic linked list operation, add dummyHead to make head node can be treated as other nodes
     */
    if (!head) {
        return null;
    }
    const dummyHead = new ListNode(null, head);
    let cur = dummyHead;
    // check if has next node need check, 
    // the initiate condition is guaranteed to have next because null head already returned before 
    while (cur.next) {
        // if val mathch, drop next node by link cur.next to dropped node's next one
        // and continue check next node if match
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        } else { // go check next node's next
            cur = cur.next;
        }
    }
    return dummyHead.next;
};