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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    // TODO: 关于后续遍历使用迭代法，还是有点不懂啊。手动维护栈，还是吃力
    const res = [], stk = []
    let prev = null
    while (root || stk.length) {
        // 有左结点则一直向左
        while (root) {
            stk.push(root)
            root = root.left
        }

        // 最左下角的结点
        root = stk.pop()

        // 如果右为空，或刚才 pop 的是右
        if (!root.right || root.right === prev) {
            res.push(root.val)
            prev = root
            root = null
        } else {
            stk.push(root)
            root = root.right
        }
    }

    return res
};

module.exports = postorderTraversal
