/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
	function getLast () {
		return stack.length ? stack[stack.length - 1] : null;
	}
    const stack = [];
	for (const char of s) {
		if (getLast() === char) {
			stack.pop();
		} else {
			stack.push(char);
		}
	}
	return stack.join('');
};

const s = "abbaca";
const res = removeDuplicates(s);
const answer = 'ca';
console.log('passed:', answer === res, '\nres: ', res);
