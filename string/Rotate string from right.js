// https://programmercarl.com/kama55.%E5%8F%B3%E6%97%8B%E5%AD%97%E7%AC%A6%E4%B8%B2.html
/**
 * 
 * @param {*} s 
 * @param {*} k 
 * 字符串的右旋转操作是把字符串尾部的若干个字符转移到字符串的前面。给定一个字符串 s 和一个正整数 k，请编写一个函数，将字符串中的后面 k 个字符移到字符串的前面，实现字符串的右旋转操作。

例如，对于输入字符串 "abcdefg" 和整数 2，函数应该将其转换为 "fgabcde"。

输入：输入共包含两行，第一行为一个正整数 k，代表右旋转的位数。第二行为字符串 s，代表需要旋转的字符串。

输出：输出共一行，为进行了右旋转操作后的字符串。

样例输入：'abcdefg', 2

样例输出：'fgabcde'
数据范围：1 <= k < 10000, 1 <= s.length < 10000;
 */
function rotateFromRight (str, k) {
	/**
	 * split s into 2 parts, second part is the last k elements, first parts is the remaining part
	 * reverse all string, then reverse each part separately could get the result
	 */

	const s = str.split('');
	let left = 0, right = s.length - 1;

	// reverse all
	while (left < right) {
		[s[left], s[right]] = [s[right], s[left]];
		left++;
		right--;
	}

	// reverse first part
	left = 0; 
	right = k - 1;
	while (left < right) {
		[s[left], s[right]] = [s[right], s[left]];
		left++;
		right--;
	}

	// reverse remaining part
	left = k;
	right = s.length - 1;
	while (left < right) {
		[s[left], s[right]] = [s[right], s[left]];
		left++;
		right--;
	}
	return s.join('');
};

const res = rotateFromRight('abcdefg', 2);
console.log(res, ';\tpassed: ', res === 'fgabcde');