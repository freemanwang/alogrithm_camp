# Summary
Today's tasks are mainly about review basic knowledge about queue and stack

## [LC. 232](https://leetcode.com/problems/implement-queue-using-stacks/description/)
Using two stacks to simulate a FIFO queue, st1 & st2, using size to record how many elements in stack right now.
when push into queue, push element into st1;
when pop from queue, 
if st2 is not empty, pop from st2 directly, 
otherwise pop all elements from st1 then push it into st2, then pop from st2 for this pop operation
peek is quite similar to pop, can pop to get the peak element, but need to push element back to st2 after get it's value



## [LC.225](https://leetcode.com/problems/implement-stack-using-queues/)
The same LC.232, using two queues, qu1 & qu2
when push into stack, call qu1.push(x) to store element
when pop from stack, pop all qu1's elements then push it into qu2 in order except the last one, last one is the popped element; then switch qu1 and qu2, next time push is also repeat these pop & push operations
isEmpty = !(st1.length || st2.length)

optimize:
using only one queue(qu1), when needs to pop, remove from head of qu1 then push it back except the last element(while size > 1),
the last one is the last pushed into queue, so it should be pop at first, can draw a step by step draft to simulate these operations to get a more clear understanding of this optimized solution.