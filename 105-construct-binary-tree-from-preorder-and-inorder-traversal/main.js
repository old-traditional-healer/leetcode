/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let i = 0

    const buildRootByLindexRindex = (leftIndex, rightIndex) => {
        if (leftIndex > rightIndex) {
            return null
        }

        // 构造根节点
        const rootVal = preorder[i++]
        const root = new TreeNode(rootVal)

        // 获取 rootVal 在中序排列的下标
        const index = inorderMap[rootVal]
        root.left = buildRootByLindexRindex(leftIndex, index - 1)
        root.right = buildRootByLindexRindex(index + 1, rightIndex)

        return root
    }


    // 根据 inorder 的值，快速获取其下标
    const inorderMap = {}
    inorder.forEach((v, k) => {
        inorderMap[v] = k
    })

    return buildRootByLindexRindex(0, inorder.length - 1)
};

// 构造函数
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const preorder = [3, 9, 20, 15, 7]
const inorder = [9, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder))
