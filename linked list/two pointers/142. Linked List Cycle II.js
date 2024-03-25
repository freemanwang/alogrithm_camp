/**
 * https://leetcode.com/problems/linked-list-cycle-ii/description/
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head || !head.next) {
        return null;
    }

    let fast = head, slow = head;
    // fast moves 1 more step than slow to find if they can meet
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        // first meet, restore one of the pointer to start and then continue travel but this time both of them move 1 step each time
        // after that, the next node these two pointers meet will be the entrance
        /**
        Let D be the distance from the head of the list to the start of the cycle.
        Let P be the distance from the start of the cycle to the point where fast and slow meet.
        Let C be the length of the cycle.
        At the meeting point, the slow pointer has traveled D + P steps, 
        and the fast pointer, which has traveled twice as fast, has covered D + P + nC, 
        where n is some integer representing how many additional laps fast has taken around the cycle.
        Since fast has traveled twice the distance of slow, we can write:
        2(D + P) = D + P + nC
        Simplifying this equation gives D = nC - P. 
        This means that the distance from the head of the list to the start of the cycle is equal to nC - P.
        如果我们从链表头和相遇点分别出发，每次都走一步，那么它们将在环的起点相遇。

        SO! fast keep in meet point and slow reset to head, then both move 1 step each time to find next meet point
         */
        if (fast === slow) { // meet, there is a cycle
            // reset slow to head, and both of 2 pointer s each time move 1 step
            // the next meet node is the entrance of cycle
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            // find the meet point again
            return slow;
        }
    }

    // no cycle found, return null
    return null;
};