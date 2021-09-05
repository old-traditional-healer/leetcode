// @see https://leetcode-cn.com/problems/delete-node-in-a-bst/
// @see https://rovast.notion.site/BST-54d4d078ebe443a8bc0fa0f14cdd3952

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    const getMinNode = node => {
        while (node.left !== null) {
            node = node.left
        }

        return node
    }

    // 极端情况判断
    if (root === null) return null

    if (root.val === key) {
        // 情况1，如果当前删除的是叶子节点，那么直接删除就好，返回的根节点就是 null
        if (root.left === null && root.right === null) return null

        // 情况2，如果只包含左节点或者右节点，直接替换即可
        if (root.left === null) return root.right
        if (root.right === null) return root.left

        // 情况3，左右节点同时存在
        const minNode = getMinNode(root.right)
        root.val = minNode.val
        root.right = deleteNode(root.right, minNode.val)
        // minNode.val = null
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key)
    }

    return root
};
