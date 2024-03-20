/**
 * LC 34. link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // find first occurrence index of target
    function findFirstPosition () {
        let left = 0;
        let right = nums.length - 1;
        let firstPos = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const num = nums[mid];
            if (num === target) {
                // find target in nums, record it's position
                firstPos = mid;
                // continue check it's left side, need to find if it is not the first occurrence
                right = mid - 1;
            } else if (num > target) { // check left side
                right = mid - 1;
            } else { // check right side
                left = mid + 1
            }
        }
        // if not found in nums, it would return -1
        return firstPos;
    }

    // find last occurrence index of target
    function findLastPosition () {
        let left = 0;
        let right = nums.length - 1;
        let lastPos = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const num = nums[mid];
            if (num === target) {
                // find target in nums, record it's position
                lastPos = mid;
                // continue check it's right side, if it is not the last occurrence
                left = mid + 1;
            } else if (num > target) { // check left side
                right = mid - 1;
            } else { // check right side
                left = mid + 1
            }
        }
        // if not found in nums, it would return -1
        return lastPos;
    }
    const left = findFirstPosition();
    const right = findLastPosition();

    // can combine find 2 position function together

    return [left, right];
};
