// https://leetcode.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    /**
     * brute force: separately insert nodes in A and B into stackA and stackB, then pop from 2 stacks to check nodeA, nodeB
     * 
     * if part of nodeA and nodeB are the same node, the last equal node is the intersection node
     * if nodeA and nodeB never have same value, return null to tell that it has no intersection
     * TC = O(m+n), SC = O(m+n)
    */
   if (!headA || !headB) {
    return null;
   }

    // let pA = headA, pB = headB;
    // let sA = [], sB = [];
    // let res = null;

    // while (pA) {
    //     sA.push(pA);
    //     pA = pA.next;
    // }
    // while (pB) {
    //     sB.push(pB);
    //     pB = pB.next;
    // }

    // // let nodeA = sA.pop();
    // // let nodeB = sB.pop();

    // // don't use value to compare, check if node object are same, this question is not focus on val but object
    // // while (sA.length && sB.length && sA[sA.length - 1].val === sB[sB.length - 1].val ) {
    // while (sA.length && sB.length && sA[sA.length - 1] === sB[sB.length - 1] ) {
    //     res = sA[sA.length - 1];
    //     sA.pop();
    //     sB.pop();
    // }
    // return res;

    /**
     * version 2, TC = O(m+n), SC = O(1)
    */
    /**
     * @param {*} head 
     * @returns length of a linked list
     */
    function getLength (head) {
        let length = 0;
        let cur = head;
        while (cur) {
            length ++;
            cur = cur.next;
        }
        return length;
    }

    let lenA = getLength(headA);
    let lenB = getLength(headB);
    let curA = headA, curB = headB;
    // always let A be the longer list
    if (lenA < lenB) {
        [curA, curB] = [headB, headA];
        [lenA, lenB] = [lenB, lenA];
    }

    // calculate length difference
    const lengthDifference = lenA - lenB;
    
    // move the longer one to make both list remain same amount of nodes
    for (let count = 0; count < lengthDifference; count++) {
        curA = curA.next;
    }

    // now both linked list has the same length
    while (curA && curB) {
        if (curA === curB) {
            return curA;
        } else {
            curA = curA.next;
            curB = curB.next;
        }
    }
    return null;
};