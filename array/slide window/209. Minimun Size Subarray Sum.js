/**
 * link: https://leetcode.com/problems/minimum-size-subarray-sum/
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    /**
     * two pointers to forge a slide window, calculate sum of numbers in [left, right], 
     * 1. if sum < target, right ++ to add one number into window to raise sum,
     * 
     * 2. if sum >= target, record current combination length(right - left + 1), 
     * then left++ to shrink window to check if it sum still >= target but this can make length smaller
     * 
     * keep iterate until right at the end of array and left is pass the line which let sum >= target, each time sum meets requirements
     * should update the minimum length, then return at minimum length at last
     */
    // invalid input
    if (!nums || !nums.length) {
        return 0;
    }
    let sum = 0;
    let minLen = Infinity;
    const len = nums.length;
    
    /**
     version 1, accepted but not clear enough
     window is [left, right), initiated with [0, 1) means nums[0] is already counted in sum
     as it's right scope is open, right should be '<=' len, not '<', otherwise the last element is untouchable
     left should lower right because left === right is invalid
     */
    // let left = 0, right = 0;
    // while (right <= len) {
    //     if (sum >= target) { // meets requirements
    //         // compare and store min length of sub array that sum is gte target
    //         minLen = Math.min(minLen, (right - left)); // window is [left, right) so (right - left) is the number of eles in window
    //         // left ++ to extract left most number, remember sum should sub nums[left]
    //         sum -= nums[left];
    //         left++;
    //     } else { // sum is lower than target, should add one more number into sum
    //         // accumulate that number into sum
    //         sum += nums[right];
    //         // right move one step right forward
    //         right ++;
    //     }
    // }
    
    // version 2, revise while loop to made loop and length count logic more clear
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; // accumulate right pointer number into sum
        while (sum >= target) { // if current window sum is gte target, try to remove number from left and check sum again
            minLen = Math.min(minLen, right - left + 1);  // right is included, so count is right - left + 1
            sum -= nums[left]; // move left most number
            left++; // window left index should move one step right to indicate one number is out of window
        } 
    }
    
    return minLen == Infinity ? 0 : minLen;
};

const nums = [2,3,1,2,4,3];
const target = 7;
console.log(minSubArrayLen(target, nums));
