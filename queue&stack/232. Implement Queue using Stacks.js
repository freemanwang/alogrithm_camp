
var MyQueue = function() {
    this.size = 0;
	this.st1 = [];
	this.st2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.size++;
	this.st1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
	if (this.size === 0) {
		return;
	}

    this.size--;
	if (!this.st2.length) {
		while (this.st1.length) {
			this.st2.push(this.st1.pop());
		}
	}
	const ele = this.st2.pop();
	return ele;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const peekEle = this.pop();
	this.st2.push(peekEle);
	this.size++;
	return peekEle;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.size === 0;
};

var obj = new MyQueue()
obj.push(x)
var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()