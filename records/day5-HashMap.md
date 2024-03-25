# 概述
今天进入到哈希表了，开始的题目比较简单。
## [LC.242](https://leetcode.com/problems/valid-anagram/)
easy one, use hashmap to record if character is used and how many time it appears in string.

## [LC.349](https://leetcode.com/problems/intersection-of-two-arrays/)
quite similar to LC.242 but easier, check if number both appears in two array

## [LC.202](https://leetcode.com/problems/happy-number/description/)
needs to figure that numbers can be divided into 'is happy number' or 'not a happy number'
as it's `1 <= n <= 231 - 1`, so number is limited, it is composed of limited 0-9, so it's digits squares sum is finite,
it will eventually reach a loop value, we just need to check if that loop start value equal to 1 or not.

## [LC.001](https://leetcode.com/problems/two-sum/)
use map to find corresponding value to get a target sum, that's where the dream starts.