/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (root === null) return null

    flatten(root.left) // 左侧拉平
    flatten(root.right) // 右侧拉平

    // 接下来，我们要“相信”，root 的左右两侧已经被“拉平”。接下来就是把左右拼接到一起，形成一个链即可
    const left = root.left
    const right = root.right
    root.left = null

    // 1 把左侧的链接到右侧
    root.right = left
    // 2 把原来右侧的东西(const right=root.right)链接到现在右侧(root.right=left)后面
    let p = root

    while (p.right !== null) {
        p = p.right // 寻找新加入到右侧的链的最后一个节点
    }
    p.right = right

    return root
};
