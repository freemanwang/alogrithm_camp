
var MyStack = function() {
	this.qu1 = [];
	this.qu2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
	this.qu1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.empty()) {
		return;
	}
	// while (this.qu1.length > 1) {
	// 	this.qu2.push(this.qu1.shift()); // here, use shift to get the first element of array to simulate FIFO queue
	// }
	// const res = this.qu1.pop();
	// [this.qu1, this.qu2] = [this.qu2, this.qu1];
	// return res;

	// version 2, use only one queue to simulate stack
	let size = this.qu1.length;
	while (size > 1) {
		// remove from head of qu1 then push it back except the last element
		// the last one is the last pushed into queue, so it should be pop at first
		this.qu1.push(this.qu1.shift());
		size --;
	}
	const res = this.qu1.shift();
	return res;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
	const peekEle = this.pop();
	this.push(peekEle);
	return peekEle;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
	return !this.qu1.length;
};

var obj = new MyStack()
obj.push(x)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()