/**
 * https://leetcode.com/problems/valid-anagram/
 */

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();
    // records all characters' count in s
    for (let index = 0; index < s.length; index++) {
        const char = s[index];
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    // check all characters in t, if it exist in s and has same count
    for (let index = 0; index < t.length; index++) {
        const char = t[index];
        // this char not in s, or t has more count of this char
        if (!map.get(char)) { // if not exist will return undefined
            return false;
        } else {
            map.set(char, map.get(char) - 1); // sub it's count
        }
    }
    return true;
};