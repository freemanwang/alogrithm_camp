/**
 * link: https://leetcode.com/problems/remove-element/description/
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    /**
     * brute force: iterate all num in nums, when at idx meet nums[idx] eql val, move elements to the right of idx left forward 1 step to 'erase' current
     * after that, continue check if nums[idx] eql val again;
     *  need use a counter variable to record how many number eql val in nums, then nums.length - count is the number of element that not eql val
     * TC = O(n^2), SC = O(1)
     */
    // let count = 0;
    // let idx = 0;
    // while (idx < nums.length) {
    //     if (nums[idx] === val) {
    //         count ++; // find one eql element
    //         // right side elements move left side one step
    //         let cur = idx;
    //         while (cur < nums.length) {
    //             nums[cur] = nums[cur + 1];
    //             cur++;
    //         }
    //         // then continue check from idx
    //         continue;
    //     } else { // current not match, go check next element
    //         idx ++;
    //     }
    // }
    // return nums.length - count;

    /**
     * two pointers, fast iterate through all elements in nums, slow only move forward when find some one not equal to val, 
     * that's when fast meet an element equal to val, fast to forward and slow do nothing;
     * otherwise set nums[fast] to nums[slow] and slow move forward because a 'necessary element' is stored at index of slow
     * return value is slow +1 because slow is the last index of elements that should be kept
     * TC = O(n) and SC = O(1)
     */
    let fast = 0, slow = 0;
    while (fast < nums.length) {
        // do nothing if equal, just pass that equal element to discard it
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
        // fast alway go next one
        fast++;
    }

    // slow is index that to be filled, not the last remained element's index;
    // because when find the last remained element, it will add by 1 to move to next position in the while loop
    // so don't thought should return slow + 1 to "change index to length"
    return slow; 
};

const nums = [0,1,2,2,3,0,4,2]
const val = 2;
const res = removeElement(nums, val);
console.log('res:', res, '\nnums: ', nums);