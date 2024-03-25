/**
 * https://leetcode.com/problems/linked-list-cycle-ii/description/
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
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
        a is steps from node to entrance, b is steps slow have travel in cycle, slow travels (a+b) steps and fast is one more step than slow each time so
        fast goes 2(a+b) steps;
        in the other hand, we name the remain steps count in cycle(first meet point to entrance) as c, fast goes (a + b + c + b) steps

        2 (a + b) = a + b + n*(c + b) , fast moves one more cycle than slow so n is 1,
        2a + 2b = a + 2b + c
        => a === c
        it means the distance between first meet point to entrance is the same as head to entrance, so we can resotre random pointer to head, then move them 1 step each time(fast don't move 2 steps now)
        when they meet again, they walk the same distance, that's is so called a or c steps, the meet point is the entrance
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