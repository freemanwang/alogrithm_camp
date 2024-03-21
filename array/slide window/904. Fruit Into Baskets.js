/**
 * link: https://leetcode.com/problems/fruit-into-baskets/
 */
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    /**
     * transform this into a slide window question:
     * window can contain 2 different number, count of number is unlimited, find the maximum size of window in fruits array
     * 
     * idea:
     * initiate left, right two pointers to maintain window, init arr to record num in this window;
     */
    let left = 0, right = 0;
    let maxLen = 0;
    const fruitCounts = {};

    while (right < fruits.length) {
        const fruitRight = fruits[right];
        // record count of this kind of fruit
        fruitCounts[fruitRight] = (fruitCounts[fruitRight] || 0) + 1;

        // if over 2 kinds of fruits stored, need to throw all previous kind of fruit to get an empty basket
        while (Object.keys(fruitCounts).length > 2) {
            const preFruit = fruits[left];
            fruitCounts[preFruit] -= 1;
            left++;
            if (fruitCounts[preFruit] === 0) { // all thrown
                delete fruitCounts[preFruit]
            }
        }
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }
    return maxLen;
};

var totalFruitOptimized = function(fruits) {
    /**
     * optimized version, use Map to restore last index of each fruit, 
     * when need remove all this kind of fruit, can get last index of it, 
     * this let us move left pointer to next position of this fruit instead of moving one step each time
    */
    let lastIndexes = new Map();
    let left = 0, maxLen = 0;

    for (let right = 0; right < fruits.length; right++) {
        const fruitRight = fruits[right]; // get current fruit type
        lastIndexes.set(fruitRight, right); // record current fruit last index
        
        if (lastIndexes.size > 2) { // need to throw out most previous fruit
            const leftMostIndex = Math.min(...lastIndexes.values());
            left = leftMostIndex + 1; // slide window to delete all this kind of fruit
            const fruitType = fruits[leftMostIndex];
            lastIndexes.delete(fruitType);
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};

const fruits = [3,3,3,1,2,1,1,2,3,3,4];
console.log(totalFruit(fruits));
console.log(totalFruitOptimized(fruits));