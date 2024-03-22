# 概述

刷题第二天，依旧是数组，今天主要是滑动窗口，以及一个矩阵操作的题。

今天比第一天的总耗时明显增加，3道题花了3H，但都有尝试自己写，滑动窗口的LC209和LC904经过数次修改AC了，LC59未做出，看提示后完成；所有题目均在AC后探索优化方案。

## Sliding Window

### [LC. 209](https://leetcode.com/problems/minimum-size-subarray-sum/) (40mins)

today's first question, I've done this before so remember how to tackle it.

main idea is to to build a sliding window and calculate sum of all numbers in this window, then compare sum with target

a).  if sum is not lower than target, 

a1). record current window length, if it's lower than minLen, relpace minLen with it

a2). move left pointer forward and sub it's corresponding number from sum, then compare again (this is to get the minimum length of window that sum is not less than target)

b). if sum is lower than target, move right pointer forward and accumulate it's corresponding value into sum then check, because we can do nothing but adding number into window to get a bigger sum.

when right pointer iterate all numbers in nums, return minLen as result

 [day3-LinkedList.md](day3-LinkedList.md) 

first version code is not easy to read, the two pointers and the minLen update logic is a little bit tricky , so I revised it with the help of gpt and got the second version.



### [LC. 904](https://leetcode.com/problems/fruit-into-baskets/) (1H)

don't get stuck by fruit or basket, just transform it into a sliding-window problem, window size is unlimited but only 2 different key can be kept in window.

main problem is when we meet the third kind of fruit, we have to remove the fruit which is ending with most left index of current held fruits. otherwise we can directly add current fruit into window for 1 more count.

first version is recoding how many kinds of fruit are stored, and how many of each kind,  each time we delete one of fruit on left pointer, and move left point one step forward, if this deleted fruit's count is equal to 0, this means this kind of fruit is totally thrown, the window is 'clean', current length of window is (right - left + 1) and check if needed replace maxLen.

the optimized version is to use a Map to record each kind of fruit's last occurs index, (key is fruit type, value is last index of this kind of fruit), when need to delete one kind of fruit, just find the minimun value of Map.values and move left pointer to (leftMostIndex + 1) to make that kind of fruit is totally delete.



### [LC. 59](https://leetcode.com/problems/spiral-matrix-ii/) (1H)

didn't finish it by my own at first, even brute force didn't think it out clearly :-(

not too much to say, main idea is to build a deep understanding of how to iterate matrix, needs to manage row and column well!