/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let ret = null

    // 判断以 root 为根节点，p 和 q 是不是其子结点
    // 其实遍历的方式为 左右根，就是后序遍历，自底向上的遍历方式，然后记录状态
    const dfs = (root, p, q) => {
        // 边界情况
        if (root === null) return false

        // p,q 在当前 root 节点
        const inCurrentNode = root.val === p.val || root.val === q.val
        // p,q 在 root 的左节点中
        const inLeft = dfs(root.left, p, q)
        // p,q 在 root 的右节点中
        const inRight = dfs(root.right, p, q)

        // 如果 p,q 同时属于 root 的子结点，那么这个 root 就是 p,q 的公共祖先
        // 1. p,q 分布在 root 的两侧
        // 2. p,q 在 root 的某一侧
        if ((inLeft && inRight) || (inCurrentNode && (inLeft || inRight))) {
            ret = root
        }

        return inLeft || inRight || inCurrentNode
    }

    dfs(root, p, q)

    return ret
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


const Tree = require('../utils/NewBinaryTree')
const print = require('../utils/print')

const root = Tree(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15), p = Tree(9), q = Tree(11)
print(lowestCommonAncestor(root, p, q))
