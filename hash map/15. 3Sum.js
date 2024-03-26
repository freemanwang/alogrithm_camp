/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	/**
	 * sort nums then use two pointers
	 */
	nums.sort((a, b) => a - b);
	
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

const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));