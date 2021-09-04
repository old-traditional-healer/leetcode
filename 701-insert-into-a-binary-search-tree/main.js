// @see https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 明确函数的定义，这里返回的是根节点
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    // 如果当前 root 为空，需要新建一个节点
    if (root == null) return new TreeNode(val)


    if (root.val === val) {// 该节点的值存在，直接返回
        return root
    } else if (root.val > val) { // root.val大了，所以val应该插在左子树上
        root.left = insertIntoBST(root.left, val)
    } else if (root.val < val) { // root.val 小了，所以 val 应该在右子树上
        root.right = insertIntoBST(root.right, val)
    }

    return root
};
