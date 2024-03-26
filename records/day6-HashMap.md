# 概述
今天进入到哈希表了，开始的题目比较简单。
## [LC.454](https://leetcode.com/problems/4sum-ii/)
Use two nested for-loops to pick a number from each of num1 and num2. Add them together to get the sum of the two numbers, sum1. Store each sum in a map as a pair of sum - count, where count represents the frequency of the sum's occurrence.
Then do the same thing to foud another sum that equals to -sum1. when find this one, accumulate map[-sum2] as the count of tuple that has 4 sum of 0.


## [LC.383](https://leetcode.com/problems/intersection-of-two-arrays/)
record frequency of each character's occurrence in magazine,
restore a pair of char-frequency in map;
then travel ransomNote's character, sub map[char] by 1 each time, 
if map[char] is lower than 0 or this key is not in map, return false

## [LC.202](https://leetcode.com/problems/happy-number/description/)

## [LC.001](https://leetcode.com/problems/two-sum/)