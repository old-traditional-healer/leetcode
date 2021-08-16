// @see https://leetcode-cn.com/problems/house-robber-iii/
// @see https://rovast.notion.site/III-4e5b10f143c848d78d496d3444df015a

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
var rob = function (root) {
    const cache = new Map();
    const dp = node => {
        if (node === null) return 0; // base case

        if (cache.has(node)) {
            // console.log('cached')
            return cache.get(node);
        }

        // 选择1，抢他！
        const doIt = node.val
            + (node.left === null ? 0 : dp(node.left.left) + dp(node.left.right)) // 左节点可以供选择的情况（不能相邻哦）
            + (node.right === null ? 0 : dp(node.right.left) + dp(node.right.right)); // 右节点可以供选择的情况（不能相邻哦）

        // 选择2，算了，不抢了
        const notDoIt = dp(node.left) + dp(node.right) // 那么左右节点都是可以作为被抢的对象的

        const res = Math.max(doIt, notDoIt) // 取较大值就是我们要的那个结果

        cache.set(node, res)
        return res
    }

    return dp(root);
};
