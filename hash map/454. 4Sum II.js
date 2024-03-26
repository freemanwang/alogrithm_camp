// https://leetcode.com/problems/4sum-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    /**
    */
    const map = new Map();
    let count = 0;

    // count all unique 2-numbers-sum(sum1) of numbers in nums1 and nums2 
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const sum = nums1[i] + nums2[j];
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    
    // pick a num from each of nums3/4 to get sum2, when sum2 == -sum1, accumulate sum1's count
    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            const sum = nums3[i] + nums4[j];
            if (map.has(-sum)) {
                count += map.get(-sum);
            }
        }
    }

    return count;
};
