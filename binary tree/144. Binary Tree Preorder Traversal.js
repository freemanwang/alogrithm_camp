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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) {
        return [];
    }

    // recursive, TC = n, SC = n, n is node's count in tree
    // function recurse (node, res) {
    //     if (!node) {
    //         return null;
    //     }
    //     // push val to res
    //     res.push(node.val);
    //     recurse(node.left, res);
    //     recurse(node.right, res);
    // }
    // const res = [];
    // recurse(root, res);
    // return res;

    // iterative
    // const res = [];
    // const stack = [root];
    // while (stack.length) {
    //     const node = stack.pop();
    //     res.push(node.val);
    //     if (node.right) stack.push(node.right);
    //     if (node.left) stack.push(node.left);
    // }
    // return res;

// common iterative way
        function traversal (root, order) {
        if (!root) {
            return [];
        }
        const res = [];
        // iterative
        const stack = [[root, 0]]; // set init flag to 0 means don't process value at the next time access, if is 1, means should store value to result
        while (stack.length) {
            const [node, flag] = stack.pop();

            if (flag) {
                res.push(node.val);
                continue; // don't forget this, should's go below because it will stuck in root
            }
            const left = node.left;
            const right = node.right;

            if (order === 'preorder') {
                // N, L, R
                right && stack.push([right, 0]);
                left && stack.push([left, 0]);
                stack.push([node, 1]); //process value next time visit
            } else if (order === 'inorder') {
                // L, N, R
                right && stack.push([right, 0]);
                stack.push([node, 1]); //process value next time visit
                left && stack.push([left, 0]);
            } else {
                // L, R, N
                stack.push([node, 1]); //process value next time visit
                right && stack.push([right, 0]);
                left && stack.push([left, 0]);
            }
        }
        return res;
    }
    return traversal(root, 'preorder');
};