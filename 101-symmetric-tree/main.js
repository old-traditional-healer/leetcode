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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const isNull = i => i === null || i === undefined

    const isMirror = (left, right) => {
        if (isNull(left) && isNull(right)) {
            return true
        }

        if (isNull(left) || isNull(right)) {
            return false
        }

        return left.val === right.val
            && isMirror(left.left, right.right)
            && isMirror(left.right, right.left)
    }

    return isMirror(root, root)
};

// 构造函数
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//     A
//    /  \
//   B    B
//  / \  / \
// C   D D  C
const A = new TreeNode('A')
const B1 = new TreeNode('B')
const B2 = new TreeNode('B')
const C1 = new TreeNode('C')
const C2 = new TreeNode('C')
const D1 = new TreeNode('D')
const D2 = new TreeNode('D')


//     A
//    /  \
//   B    B
//  /
// C  
A.left = B1
A.right = B2
B1.left = C1
console.log(isSymmetric(A))
