// https://leetcode.com/problems/reverse-words-in-a-string/description/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    /**
	 * iterate s, split words by space, store words in array and then reverse array and join
	 * 
	*/

	let arr = [];
	let word = '';
	let res = '';
	for (let i = 0; i < s.length; i++) {
		if (s[i] === ' ') {
			if (word) { // only push non-empty word into arr 
				arr.push(word);
				word = '';
			}
		} else {
			word += s[i];
		}
	}
	// if last character of s is the end of a word, it will end for-loop without adding it into arr
	// so push it here
	if (word) {
		arr.push(word);
	}

	let left = 0, right = arr.length - 1;
	// reverse
	while (left < right) {
		[arr[left], arr[right]] = [arr[right], arr[left]];
		left ++;
		right --;
	}
	return arr.join(' ');
};

console.log(reverseWords("a good   example"));