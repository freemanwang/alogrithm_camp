// https://leetcode.com/problems/4sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    /* transform into 2 pointers, 
	like 3Sum but here need a nested for-loop to calculate sum of 2 numbers then add 2 pointers
	*/
	nums.sort((a, b) => a - b);
	let res = [];

	for (let i = 0; i < nums.length - 3; i++) {
		// skip duplicated first number
		if (i > 0 && nums[i] === nums[i - 1]) { 
			continue;
		}
		for (let j = i+1; j < nums.length - 2; j++) {
			// skip duplicated second number
			if (j > i + 1 && nums[j] === nums[j - 1]) {
				continue;
			}
			const sum1 = nums[j] + nums[i];
			
			if (sum1 > target && sum1 >= 0) {
				// mention！ can't return res here,
				// use break to end inner for-loop is enough, otherwise it may lose some set
				// if can't figure this optimize out, maybe I can delete it :(
				break; 
			}

			let left = j + 1, right = nums.length - 1;
			while (left < right) {
				const sum = sum1 + nums[left] + nums[right];
				if (sum > target) {
					right --;
				} else if (sum < target) {
					left ++;
				} else { // find one set
					res.push([nums[i], nums[j], nums[left], nums[right]]);

					// skip duplicated left and right
					while (left < right && nums[right] === nums[right - 1]) {
						right --;
					}
					while (left < right && nums[left] === nums[left + 1]) {
						left ++;
					}

					left++;
					right--;
				}
			}
		}
	}

	return res;
};

// console.log(fourSum([1,0,-1,0,-2,2], 0));
console.log(fourSum([-9,-2,7,6,-8,5,8,3,-10,-7,8,-8,0,0,1,-8,7], 4));