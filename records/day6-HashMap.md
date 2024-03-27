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

## [LC.15](https://leetcode.com/problems/3sum/description/)
version 1, use hash-map to get the frequency of c that meets c = - (a + b), but TLE!
switch to two pointers done with this

## [LC.18](https://leetcode.com/problems/two-sum/)
similar to 3Sum but a little bit complex, need two nested for-loop to handle first 2 numbers' combination;
got stuck in optimized logic, when to end if first two numbers' sum is gt target, can't `return res` in inner for-loop but should break in that condition.
