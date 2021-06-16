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
var postorderTraversal = function (root) {
    const res = []
    const inorder = root => {
        if (!root) return

        if (root.left) inorder(root.left)
        if (root.right) inorder(root.right)
        res.push(root.val)
    }
    inorder(root)
    return res
};

module.exports = postorderTraversal
