// @see https://leetcode-cn.com/problems/count-complete-tree-nodes/
// @see https://labuladong.gitbook.io/algo/mu-lu-ye-1/mu-lu-ye-1/wan-quan-er-cha-shu-jie-dian-shu
// @see https://rovast.notion.site/b07bef5515b542ac89f38b72f2b19ba3

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
 * @return {number}
 */
var countNodes = function (root) {
    if (root === null) return 0

    let l = root, r = root;
    let lh = 0, rh = 0;
    while (l !== null) {
        l = l.left
        lh++
    }
    while (r !== null) {
        r = r.right
        rh++
    }

    if (lh === rh) {
        return Math.pow(2, lh) - 1
    }

    return 1 + countNodes(root.left) + countNodes(root.right)
};
