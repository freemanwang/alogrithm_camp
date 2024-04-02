/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const left = ['(', '{', '['];
    const braceMap = { // should get open tag for each close tag
    // so key is close tag and value is open tag
        '}': '{',
        ']': '[',
        ')': '('
    };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (left.includes(char)) {
            stack.push(char);
        } else if (stack.pop() === braceMap[char]) {
            continue
        } else {
            return false;
        }
    }
    return stack.length === 0;
};