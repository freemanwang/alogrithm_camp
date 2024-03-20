/**
 * link: https://leetcode.com/problems/search-insert-position/
 */
var searchInsert = function(nums, target) {
    /**
    binary search to find the insert position in sorted array
    insert position should be right after the first element that's lower than target
    add a first check in first and last element to find if it should be insert in front of head or push at tail
    */
   if (!nums || !nums.length || target < nums[0]) {
    return 0;
   }
   if (nums[nums.length - 1] < target) {
    return nums.length;
   }


    let left = 0;
    let right = nums.length;
   // [left, right)
   // after finish while loop, left should be right pointing to target if it exists, inserting onto the same index is correct
   // or it will point at the position that fits the target value
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const num = nums[mid];
        if (num >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};