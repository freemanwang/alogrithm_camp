/**
 * link: https://leetcode.com/problems/binary-search/description/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    /**
    * as the nums array is already in ascending order, we can allpy binary search with TC = O(log n)
    * if it's not in order, need to travel through all elements so that TS is O(n)
    */


    // // solution 1, [left, right) is a left closed, right open space
    // let left = 0;
    // let right = nums.length;
    // // should be left < right, not '<=', because left === right doesn't make sense, nums[right] is out of boundary
    // while (left < right) {
    //     const mid = Math.floor((left + right) / 2);
    //     if (nums[mid] === target) {
    //         return mid;
    //     } else if (nums[mid] < target) { 
    //         // current element is lower than target, go check right side, mid should not included in new space so left is set to mid + 1 not mid
    //         left = mid + 1;
    //     } else {
    //         // current is greater than target, go check left side, mid should not included in new space so right is set to mid
    //         // because right is open tag, will not be accessed, if it is set to mid - 1, then we'll lose nums[mid - 1]
    //         right = mid;
    //     }
    // }
    
    // return -1;


    // solution 2, [left, right] is a left, right both closed space
    let left = 0;
    let right = nums.length - 1;

    // left can be equal to right when they point to the same element, '===' make sense because right is in boundary
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) { 
            // current element is lower than target, go check right side, mid should not included in new space so left is set to mid + 1 not mid
            left = mid + 1;
        } else {
            // current is greater than target, go check left side, mid should not included in new space so right is set to mid - 1
            // because right is close tag and it can be accessed so should be mid - 1 not mid
            right = mid - 1;
        }
    }

    // if finish while without return, seems target is not included in nums
    return -1;
};