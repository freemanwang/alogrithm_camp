// https://leetcode.com/problems/reverse-string/description/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    /**
	 * two pointers to reverse in place
	 */
	let left = 0, right = s.length - 1;

	// if length is odd, the middle one is no need to change, left < right will skip it, that's fine
	while (left < right) {
		[s[left], s[right]] = [s[right], s[left]];
		left ++;
		right --;
	}
};