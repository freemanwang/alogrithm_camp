/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	/**
	 * sort nums then use two pointers
	 */
	const res = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 2; i++) {
		const num = nums[i];
		if (num > 0) { // nums is the smallest in this loop, if it's gte 0, it's impossible to get a sum that equals 0
			return res;
		}

		if (i > 0 && nums[i] === nums[i-1]) {
			continue; // current num is the same as previous one, it may get duplicated triplets, so overlap it
		}

		// use two pointer to get sum of 3 numbers
		let left = i + 1, right = nums.length - 1;
		while (right > left) { // can't equal because need 3 numbers
			const sum = num + nums[left] + nums[right];
			if (sum > 0) {
				right --;
			} else if (sum < 0) {
				left ++;
			} else {
				// find a triplets
				res.push([num, nums[left], nums[right]]); // record this result
				
				// check if right and left need to overlap duplicated number
				while (left < right && nums[right] === nums[right - 1]) {
					right --;
				}
				while (left < right && nums[left] === nums[left + 1]) {
					left ++;
				}

				// update pointer to next pair
				// can't put before find duplicated number(2 while), it'll miss some pair
				left ++;
				right --;
			}
		}
	}

	return res;
};

// version 1, TLE
// var threeSum = function(nums) {
//     /**
// 	 * transform to an 2 sum question, a, b, as number in array and c as target
// 	 * a + b = c;
// 	 * use 2 nested for loop, a = nums[i], 
// 	 * j starts after i, b = nums[j],
// 	 * sum = a + b
// 	 * if map(-sum) exist, get it value(array of indexes)
//     */
//    const map = new Map();
//    let res = [];
//    let res2 = new Set();
// 	for (let i = 0; i < nums.length; i++) {
// 		const num = nums[i];
// 		if (map.has(num)) {
// 			map.get(num).push(i); // add one more index
// 		} else {
// 			map.set(num, [i]); // new array with one index
// 		}
// 	}

// 	for (let i = 0; i < nums.length - 2; i++) {
// 		for (let j = i + 1; j < nums.length - 1; j++) {
// 			const target = -(nums[i] + nums[j]);
// 			if (map.has(target)) {
// 				// const validK = map.get(target).filter(idx => ![i, j].includes(idx) && idx > j);
// 				// validK.forEach(idx => {
// 				// 	res.push([i, j, idx]);
// 				// });

// 				const indicesK = map.get(target);
// 				for (let idx = 0; idx < indicesK.length; idx++) {
// 					const k = indicesK[idx];
// 					if (k <= j) {
// 						continue;
// 					}
// 					const triplets = [nums[i], nums[j], nums[k]].sort((a, b) => a- b);
// 					res2.add(JSON.stringify(triplets)); // convert array to string, 
// 					// to make sure no duplicated indices triplets.
// 					// set can't handle array address
// 				}
// 			}
// 		}
// 	}
// 	return Array.from(res2).map(JSON.parse); // remember to transform JSON string back to array
// };

// const nums = [-1,0,1,2,-1,-4];
const nums = [-2,0,1,1,2];
console.log(threeSum(nums));