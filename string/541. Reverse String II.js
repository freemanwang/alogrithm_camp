// https://leetcode.com/problems/reverse-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    /**
	 * version 1:
	 * split s into 2 arrays, 
	 * [0-k), [2K, 3K) ... store as the 'need reverse part', marked as matrix1
	 * [K, 2K), [3K, 4K) ... store as the 'keep origin sequence part', marked as matrix2
	 * 
	 * then reverse all array in matrix1;
	 * then join array in matrix 1&2, 1 first then 2 to build a string, that's the reversed result
	 */

	/**
	 * version 2:
	 * split s into many parts, each part's length is 2k, and init two pointers, 
	 * let n = Math.floor(s.length / 2k)
	 * 
	 * for count from 0 to n, left = 2k*count, right = 2k*count + k - 1; swap left++ & right++, 
	 * when left >= right means this first part is reversed, jump to next count
	 * 
	 * at last, finish the remain part, left = (n+1) * 2k, right = Math.min(left + k - 1, s.length), swap
	 * 
	 * use a for loop, use i to record current part's maximum index, each loop add 2k in i
	 */
	let arr = s.split('');

	// each loop i add 2k represent move to next 2k-sub-str
	// each time we finish reverse sub-sequence in [2k * i, 2K+1 * i)
	// if i out of boundary after add, means all character have been reversed, just stop reverse
	for (let i = 0; i < arr.length; i += 2 * k) {
		let left = i; // start from the first one of this 2k part
		// 1. 每隔 2k 个字符的前 k 个字符进行反转
		// 2. 剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符
		// 3. 剩余字符少于 k 个，则将剩余字符全部反转。
		let right = Math.min(i + k - 1, s.length); // if remains length is gte than k, reverse first k, otherwise reverse all
		while (left < right) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			left ++;
			right --;
		}
	}
	return arr.join('');
};

console.log(reverseStr("abcdefg", 2));