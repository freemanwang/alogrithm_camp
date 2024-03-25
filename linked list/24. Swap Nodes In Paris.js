/*
https://leetcode.com/problems/swap-nodes-in-pairs/
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { ListNode } from "./util";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    /**
     * needs to manage nodes relations very clear
     */

    if (!head || !head.next) {
        return head; // no need to swap
    }

    // version 1,
    // const dummyHead = new ListNode(null, head);
    // // dummyHead at least has two linked nodes
    // let cur = dummyHead;
    // // swap can only be done if two or more nodes remain
    // while (cur.next && cur.next.next) {
    //     /**
    //      * dh -> 1 -> 2 -> 3
    //      * should transform to dh -> 2 -> 1 -> 3
    //      */
    //     const node1 = cur.next;
    //     // node3 is the third node after dummyHead, also the start node of the following part of list
    //     const node3 = cur.next.next.next;

    //     cur.next.next.next = node1; // cur.next.next is node 2, let 2 points to 1
    //     cur.next = cur.next.next; // swap 1 and 2, the same as make 2 to be new head
    //     cur.next.next.next = node3; // now cur.next.next is node 1, the same as link 1 and 3

    //     cur = cur.next.next; // move cur 2 nodes after to swap remaining part of list
    //     // now cur is at node1, for the rest of un-swapped part, it plays the same role as dummyHead
    // }
    // return dummyHead.next;

    // version 2, dp
    function dp(node) {
        if (!node || !node.next) { // more than or equal to 2 nodes can do swap
            return node; // remaining part can't do swap, return directly
        }
        // code runs here, means at least have one another node after cur node
        const secondNode = node.next;
        const remainingPartStarter = node.next.next; // can be null but it will handle in next dp

        // do swap in following steps:
        // 1. node2 point to node 1
        secondNode.next = node;
        // 2. link remaining part to node as it was move one step backward after step
        node.next = dp(remainingPartStarter); // dp should return the swapped sub linked list's head
        // 3. return node2 as the head of the swapped list
        return secondNode;
    }
    return dp(head);
};