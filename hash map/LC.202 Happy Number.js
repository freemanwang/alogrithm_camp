// https://leetcode.com/problems/happy-number/description/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    /**
    对于任何正整数，它要么是快乐数，要么最终会落入4-16-37-58-89-145-42-20的循环中。

    这个事实的证明涉及到一些复杂的数学概念，但是我们可以通过简单的观察来理解它。
    首先，我们注意到任何正整数的平方和都不会超过810。这是因为一个正整数的每一位都不会超过9，
    所以它的平方和最大为9^2 * 81 = 729。然后，我们可以计算出810以内的所有正整数的平方和，
    我们会发现它们要么是快乐数，要么最终会落入4-16-37-58-89-145-42-20的循环中。

    因此，我们可以得出结论：对于任何正整数，它要么是快乐数，要么最终会落入4-16-37-58-89-145-42-20的循环中。
    这个结论保证了我们的算法总是会结束：如果一个数是快乐数，那么它最终会变成1；
    如果一个数不是快乐数，那么它最终会落入上述的循环中，我们的算法会检测到这个循环并结束。
     */
    /**
     * keep calculating the happy number process, if two number are composed with same numbers, 
     * but it's not 1, that's not happy, otherwise it's happy number
     * same composition will lead to same sum of squares of digits so that's a loop
     */
    const map = new Map();

    function getDigitsAndSquares (num) {
        let digits = [];
        // 取每位数字
        while ((num > 0)) {
            digits.push(num % 10);
            num = Math.floor(num / 10);
        };
        const squares = digits.reduce((acc, val) => acc + val * val, 0);
        return squares, digits;
    }
    while (n !== 1 && !map.has(n)) {
        map.set(n, true);
        n = getDigitsAndSquares(n);
    }
    return n === 1;
};