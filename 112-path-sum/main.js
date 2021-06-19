
// @see https://leetcode-cn.com/problems/path-sum/submissions/
// @see https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xo566j/


/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // 如果当前节点是空的，那就不用检查了，肯定是完犊子了
    if (root === null) {
        return false
    }

    // 如果当前节点是叶子节点，那么判断 val 是不是需要对比的值
    if (root.left === null && root.right === null) {
        return root.val === targetSum
    }

    // 当遍历子结点时，需要比较的 targetSum 也要相应变化
    return hasPathSum(root.left, targetSum - root.val)
        || hasPathSum(root.right, targetSum - root.val)
};

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

console.log('是否存在和为8的路径', hasPathSum(root, 8))
console.log('是否存在和为5的路径', hasPathSum(root, 5))
