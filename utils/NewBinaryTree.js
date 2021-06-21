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

    const nextNode = () => {
        const val = array.shift()
        return val ? new TreeNode(val) : null
    }

    const root = nextNode()

    const qNode = [root]
    while (qNode.length && array.length) {
        const levelCount = qNode.length
        for (let j = 0; j < levelCount; j++) {
            const node = qNode.shift()

            // 挂载左节点
            let next = nextNode()
            // if (next === null) return root
            node.left = next
            qNode.push(node.left)

            // 挂载右节点
            next = nextNode()
            // if (next === null) return root
            node.right = next
            qNode.push(node.right)
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
// console.log(MakeTreeFromArray([1, 2, 3, 4, 5, 6, 7, 8]))


module.exports = MakeTreeFromArray
