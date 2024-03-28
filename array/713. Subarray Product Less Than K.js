// https://leetcode.com/problems/subarray-product-less-than-k/?envType=daily-question&envId=2024-03-27&__cf_chl_tk=nesCcEWFcnFogNo.ax6x066a8I2F7BavW5ivH3sgvrc-1711607091-0.0.1.1-1791
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    /**
    brute force: 2 nested-for-loop, len = nums.length; 0 <= i < n, i <= j < n;
	if product(i, j) < k, count it as a result;
	nums[i] belongs to [1, 1000], don't need to worry about negative number

	TC = n^2
    */
   const len = nums.length;
   let count = 0;
   for (let i = 0; i < len; i++) {
	if (nums[i] >= k) {
		continue;
	}
	// [nums[i]] is one of qualified sub-array
	let product = nums[i];
	count ++;
	for (let j = i + 1; j < len; j++) {
		product *= nums[j];
		if (product >= k) {
			break;
		}
		count ++;
	}
   }
   return count;
};

console.log(numSubarrayProductLessThanK([1, 1, 1], 2));