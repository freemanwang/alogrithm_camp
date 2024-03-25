// https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // hashmap or array are both fine
    const res = [];
    // v1, hashmap
    // const map = new Map();
    // for (num of nums1) {
    //     map.set(num, true);
    // }

    // for (num of nums2) {
    //     if (map.has(num)) { // this num also exist in num1, is intersection num
    //         res.push(num);
    //         map.delete(num); // delete this key so that next time meet this num can enter if block
    //         // in case of duplicated num added in res
    //     }
    // }
    // return res;

    // v2 array
    const flags = new Array(10).fill(false); // 0-9, value is also index
    for (num of nums1) {
        flags[num] = true;
    }

    for (num of nums2) {
        if (flags[num]) { // this num also exist in num1, is intersection num
            res.push(num);
            flags[num] = false;
        }
    }
    return res;
};