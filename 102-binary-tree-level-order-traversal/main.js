/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//     1
//    / \
//   2   3
//  / \   \
// 4   5   6
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return []
    }

    let Q = [root], res = []

    while (Q.length) {
        const levelLength = Q.length
        res.push([])
        // 遍历当前层
        for (let i = 0; i < levelLength; i++) {
            const cur = Q.shift()
            // 记录到输出结果
            res[res.length - 1].push(cur.val)

            // 添加左右结点
            if (cur.left) Q.push(cur.left)
            if (cur.right) Q.push(cur.right)
        }
    }

    return res
};

module.exports = levelOrder
