// @see https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/bfs-kuang-jia
// @see https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0

    let queue = []

    let step = 1
    queue.push(root)

    while (queue.length > 0) {
        const sz = queue.length
        for (let i = 0; i < sz; i++) {
            const cur = queue.shift()

            // target
            if (cur.left === null && cur.right === null) {
                return step
            }

            cur.left !== null && queue.push(cur.left)
            cur.right !== null && queue.push(cur.right)
        }

        step++
    }

    return step
};
