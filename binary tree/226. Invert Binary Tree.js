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
 * @return {TreeNode}
 */
var invertTree = function(root) {
	// invert a tree needs to invert every node's child nodes in this tree
	// can apply recursive method to invert each node and it's child nodes

	/**
	 * 
	 * @param {TreeNode} node node to be revert
	 */
	function dp (node) {
		// if (!node || !(node.left || node.right)) {
		if (!node) { 
			// not necessary to check if is leaf node, because when comes to next level's dp, it'll return if child is null
			return;
		}

		dp(node.left);
		dp(node.right);

		[node.left, node.right] = [node.right, node.left];
	}
	dp(root);
	return root;
};