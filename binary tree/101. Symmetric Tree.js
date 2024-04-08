/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

	// recursive way, preorder, check if 2 nodes are symmetric, node1.val === node2.val and their child nodes should be symmetric
	// when checking childs nodes, should check with node's mirror position node

	// function dp (node1, node2) {
	// 	// basic check

	// 	// node and it's mirror position are null
	// 	if (!(node1 || node2)) {
	// 		return true;
	// 	}

	// 	// one is null and another is not null, not symmetric
	// 	if (!node1 || !node2) {
	// 		return false;
	// 	}

	// 	// value is not equal, not symmetric
	// 	if (node1.val !== node2. val) {
	// 		return false;
	// 	}

	// 	// check if two sub side are symmetric
	// 	let leftSym = dp(node1.left, node2.right);
	// 	let rightSym = dp(node1.right, node2.left);

	// 	// node1 and node2 value are guaranteed to be equal in third if
	// 	return leftSym && rightSym; 
	// }

	// return dp(root.left, root.right);

	// iterative way, each time pick two nodes from queue, check their value and children
	const que = [root.left, root.right];

	while (que.length) {
		const [left, right] = que.shift(); // pick nodes to be checked from head of queue

		if (!left && !right) { // pass leaf node
			continue;
		}

		if (!left || !right) {
			return false;
		}

		if (left.val !== right.val) {
			return false;
		}

		que.push([left.left, right.right]);
		que.push([left.right, right.left]);
	}
	return true;
};