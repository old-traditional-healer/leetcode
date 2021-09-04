// @see https://leetcode-cn.com/problems/validate-binary-search-tree/
// @see https://rovast.notion.site/BST-45f85a824a244bcdbb463f393a2d151f

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
var isValidBST = function (root) {

    const isValid = (root, min, max) => {
        if (root === null) return true // 如果节点为 null，作为合法处理
        // 不满足情况1 节点小于等于其左子树的最大值，不是 BST
        if (min !== null && root.val <= min.val) return false
        // 不满足情况2 节点大于等于右子树的最小值，不是 BST
        if (max !== null && root.val >= max.val) return false

        return isValid(root.left, min, root) && isValid(root.right, root, max)
    }

    return isValid(root, null, null)
};
