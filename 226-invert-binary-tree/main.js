// 这里使用前序遍历和后序遍历都是可以的
// 使用中序遍历并不能有效翻转
// 因为遍历根节点时，会交换左右节点的顺序，如果是中序，则左节点被交换了两次。等于没有翻转
var invertTree = function (root) {
    if (root == null) return null

    // 前序遍历
    const temp = root.right
    root.right = root.left
    root.left = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
};
