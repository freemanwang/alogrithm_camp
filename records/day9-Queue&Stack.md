# Summary
Learn how to handle questions via queue and stack.

## [LC.20](https://leetcode.com/problems/valid-parentheses/description/)
Split tags as into two parts, store "left side character" (such as `({[`) into stack, and when meet "right side character", pop from stack to check if they can make a close bracket, if not or stack is empty, this string is not valid parentheses.

## [LC.1047](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/)
As it mentioned in description, only 2 adjacent duplicated letter in given string.

## [LC.150](https://leetcode.com/problems/evaluate-reverse-polish-notation/description/)
Travel all characters in given string one by one, if char is number, push it into stack;
if it's operator, pop 2 numbers from stack and apply the math operation, then push result back to stack;
when finish traveling the string, only one element in stack, that's the result, as the description mentioned that input string is valid arithmetic expression.
