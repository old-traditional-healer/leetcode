const levelOrder = require('./main')

// 构造函数
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

// 层序遍历 [ [ 1 ], [ 2, 3 ], [ 4, 5, 6 ] ]
console.log('层序遍历', levelOrder(root))
