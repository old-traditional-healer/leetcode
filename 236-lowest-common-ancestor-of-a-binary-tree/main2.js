/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // base case
    if (root === null) return null
    if (root === p || root === q) return root

    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    // 情况1，既不在左子树，也不再右子树
    if (left === null && right === null) return null
    // 情况2，一个在左子树，一个在右子树，那么当前节点就是 LCA 了
    if (left !== null && right !== null) return root
    // 情况3，如果都在右子树，那么右节点就是 LCA。反之，如果都在左子树，那么左节点就是 LCA 了
    return left === null ? right : left
};
