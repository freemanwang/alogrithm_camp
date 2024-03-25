/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const pair = target - num;
        if (map.has(pair)) {
            return [i, map.get(pair)];
        } else {
            map.set(num, i);
        }
    }
    return [];
};

const nums = [2,7,11,15];
const target = 9;
console.log(twoSum(nums, target));