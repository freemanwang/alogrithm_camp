/**
 * linK: https://leetcode.com/problems/design-linked-list/
 */
import { ListNode, printNodes } from "./util.js";

var MyLinkedList = function() {
    this.size = 0;
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode(); // next point at last node, make O(1) to addAtTail
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
     if (index >= this.size) {
        return -1;
    }
    const node = this.getPreNode(index);
    return node.next ? node.next.val : -1;
};  
/**
 * 
 * @param {number} index 
 * @return {ListNode} node before index of node
 */
MyLinkedList.prototype.getPreNode = function(index) {
    if (index > this.size) { // if index === this.size, means find the last node, is valid value
        return null;
    }
    let cur = this.dummyHead;
    let count = 0; // index of dummyHead
    while (count < index) {
        count++;
        cur = cur.next;
    }
    return cur;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size, val);
};

/** 
 * @param {number} index 0-indexed linked list
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (this.size < index) { // invalid index, maximum valid index is equal to this.size, means insert at tail
        return null;
    }
    const node = new ListNode(val);
    const preNode = this.getPreNode(index);
    
    node.next = preNode.next;
    preNode.next = node;
    this.size ++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size) { // index is 0-based, so maximum valid value is (this.size - 1)
        return;
    }
    const preNode = this.getPreNode(index);
    const node = preNode.next;
    if (node) {
        preNode.next = node.next
    } else {
        preNode.next = null;
    }
    this.size --;
    return node;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList()
obj.addAtHead(1)
printNodes(obj.dummyHead.next)
obj.addAtTail(3)
printNodes(obj.dummyHead.next)
obj.addAtIndex(1,2)
printNodes(obj.dummyHead.next)
console.log(obj.get(1));
obj.deleteAtIndex(1)
printNodes(obj.dummyHead.next)
console.log(obj.get(1));