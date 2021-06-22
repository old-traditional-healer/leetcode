const print = require('./print')

// 构造二叉树


// 构造函数
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * 
 * @param {*} arr
 */
function MakeTreeFromArray(...arr) {
    // 避免产生副作用
    const array = [...arr]

    const buildNextNode = () => {
        const val = array.shift()
        return val ? new TreeNode(val) : null
    }

    const root = buildNextNode()

    const qNode = [root]
    while (qNode.length && array.length) {
        const levelCount = qNode.length
        for (let j = 0; j < levelCount; j++) {
            const node = qNode.shift()

            const leftNode = buildNextNode()
            qNode.push(leftNode)
            if (node) {
                node.left = leftNode
            }

            const rightNode = buildNextNode()
            qNode.push(rightNode)
            if (node) {
                node.right = rightNode
            }
        }
    }

    return root
}


//        1
//      /   \
//     2     3 
//    / \   / \
//   4   5 6   7
//  /
// 8
// console.log(MakeTreeFromArray(1, 2, 3, 4, 5, 6, 7, 8))
// print(MakeTreeFromArray(1, 2, null, 4, 5, 6, 7, 8))


module.exports = MakeTreeFromArray
