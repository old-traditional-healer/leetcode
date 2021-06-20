// @see https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// @see https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xo98qt/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    // 先访问最后一个数值，就是构造完的树的根节点
    let postorderIndex = postorder.length - 1

    const buildRootByInorderLIndexRIndex = (leftIndex, rightIndex) => {
        // 跳出构造
        if (leftIndex > rightIndex) {
            return
        }

        // 构造根节点
        const rootVal = postorder[postorderIndex--]
        const root = new TreeNode(rootVal)

        // 根据 root 的值获取到在 inorder 中的下标
        const index = inorderMap[rootVal]
        // 根据 root值来切割 后序遍历是 左右根，我们推导的树是反过来的，所以先要构造右子树
        // 因为根节点是通过后序排列的back确定的，后序的顺序是left(a) right(b) root(c)，所以下一次的back(b)应该是属于root的右子树的（大概意思，非大佬、、）
        root.right = buildRootByInorderLIndexRIndex(index + 1, rightIndex)
        root.left = buildRootByInorderLIndexRIndex(leftIndex, index - 1)

        return root
    }

    // 构造 inorderMap，便于根据数值查到具体下标
    const inorderMap = {}
    inorder.forEach((v, k) => {
        inorderMap[v] = k
    })

    return buildRootByInorderLIndexRIndex(0, postorder.length - 1)
};


// 构造函数
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const inorder = [9, 3, 15, 20, 7]
const postorder = [9, 15, 7, 20, 3]
console.log(buildTree(inorder, postorder))
