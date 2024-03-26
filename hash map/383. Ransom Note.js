// https://leetcode.com/problems/ransom-note/description/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    /**
	 * record frequency of each character's occurrence in magazine,
	 * restore a pair of char-frequency in map;
	 * then travel ransomNote's character, sub map[char] by 1 each time, 
	 * if map[char] is lower than 0 or this key is not in map, return false
	 */
	const map = new Map();

	for (let i = 0; i < magazine.length; i++) {
		const char = magazine[i];
		map.set(char, (map.get(char) || 0) + 1);
	}
	
	for (let j = 0; j < ransomNote.length; j++) {
		const char = ransomNote[j];
		if (!map.has(char)) {
			return false;
		} else {
			map.get(char) !== 1 ? map.set(char, map.get(char) - 1) : map.delete(char);
		}
	}
	return true;
};
console.log(canConstruct('aa', 'aab'));