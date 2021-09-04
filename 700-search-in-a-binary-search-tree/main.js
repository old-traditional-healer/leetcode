// @see https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
// @see https://rovast.notion.site/BST-f1fb536a1d354a3fb700d6888b3c7f0a

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (root === null) return null

    if (root.val === val) {
        return root
    } else if (root.val > val) {
        return searchBST(root.left, val)
    } else if (root.val < val) {
        return searchBST(root.right, val)
    }
};
