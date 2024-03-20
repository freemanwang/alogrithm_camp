/**
 * link: https://leetcode.com/problems/squares-of-a-sorted-array/description/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    /**
     * brute force: iterate each num in nums, calculate squares and then sort the squares array, TC is O(nlogn) because of the sorting steps
     * 
     * two pointers
     * as nums is in non-decreasing order, the squares will follow these conditions:
     * 1. when both positive number, square of current number is lower than number to the right of itself
     * 2. when both negative number, square of current number is greater than number to the right of itself
     * 3. if two number don't have the same operator, it needs to check case by case, or check which one's absolute value is greater
     * 
     * init left and right pointers, 
     * so if one side's square is greater than the other side, it will greater than any other in the rest of numbers, so choose it to push into the res array
     * when finish iterate, the res array is in decreasing order, need to reverse it before return
     */
    function square (x) {
        return x * x;
    }

    let left = 0, right = nums.length - 1;
    let res = [];
    // [left, right], so need "<=" operator because right is accessible 
    while (left <= right) {
        const lS = square(nums[left]);
        const rS = square(nums[right]);
        if (lS >= rS) {
            res.push(lS);
            left++;
        } else {
            res.push(rS);
            right--;
        }
    }
    return res.reverse();
};
const nums = [-4,-1,0,3,10];
const res = sortedSquares(nums);
console.log(res);