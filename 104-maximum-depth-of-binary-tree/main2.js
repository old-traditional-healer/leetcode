// @see https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let res = 0

    const maxDepth = (node) => {
        if (node === null) {
            return 0
        }

        const leftDepth = maxDepth(node.left)
        const rightDepth = maxDepth(node.right)

        return Math.max(leftDepth, rightDepth) + 1
    }

    res = maxDepth(root)

    return res
};


// test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//     1
//    / \
//   2   3
//  / \   \
// 4   5   6
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.right = new TreeNode(6)

console.log('最大深度', maxDepth(root))
