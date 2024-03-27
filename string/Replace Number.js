/**
 * 给定一个字符串 s，它包含小写字母和数字字符，请编写一个函数，将字符串中的字母字符保持不变，而将每个数字字符替换为number。

例如，对于输入字符串 "a1b2c3"，函数应该将其转换为 "anumberbnumbercnumber"。

对于输入字符串 "a5b"，函数应该将其转换为 "anumberb"

输入：一个字符串 s,s 仅包含小写字母和数字字符。

输出：打印一个新的字符串，其中每个数字字符都被替换为了number

样例输入：a1b2c3

样例输出：anumberbnumbercnumber

数据范围：1 <= s.length < 10000。
*/
function replaceNumber (str) {
	let count = 0;
	let i = 0;
	const nums = Array.from({length: 10}, (_, i) => String(i));
	const res = [];

	for (const char of str) {
		if (nums.includes(char)) {
			count ++;
		}
	};
	let slow = str.length - 1; // origin last character

	// one character change to 'number', add 5 more character for each number
	// now fast is the last index of replaced str
	let fast = str.length + 5 * count - 1; 

	// while fast not reach head
	while (fast >= 0) {
		const cur = str[slow];
		if (nums.includes(cur)) { // is number ,replace it
			for (const char of 'rebmun') {
				res[fast--] = char;
			}
			slow--;
		} else {
			// not number, just copy it
			res[fast--] = str[slow--];
		}
	}

	return res.join('');	
};

const res = replaceNumber('a1b2c3')
console.log(res, ';\tpassed: ', res === 'anumberbnumbercnumber');