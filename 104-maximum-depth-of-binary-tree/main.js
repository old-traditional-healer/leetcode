// @see https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let res = 0

    const max = (node, depth) => {
        if (node === null) {
            return
        }

        if (node.left === null && node.right === null) {
            res = Math.max(res, depth)
        }

        if (node.left) max(node.left, depth + 1)
        if (node.right) max(node.right, depth + 1)
    }

    max(root, 1)

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
