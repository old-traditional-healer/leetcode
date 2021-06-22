/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    // 使用层序遍历来构造
    if (root === null) {
        return null
    }

    const Q = [root]
    const arr = []
    while (Q.length) {
        // console.log('current level nodes=>', Q)
        const levelCount = Q.length
        for (let i = 0; i < levelCount; i++) {
            const curNode = Q.shift()
            let curStr = 'null'
            if (curNode !== null) {
                Q.push(curNode.left)
                Q.push(curNode.right)
                curStr = curNode.val
            }

            arr.push(curStr)
        }
    }

    // 剔除最后一个无用的点
    let pop = ''
    do {
        pop = arr.pop()
    } while (pop === 'null' || pop === undefined || pop === '')
    arr.push(pop) // 上面循环里多剔除一个，这里补上


    return arr.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data) {
        return null
    }

    const arr = data.split(',')

    // 获取到下一个 Node 点
    const getNextNode = () => {
        const v = arr.shift()
        return (v === null || v === 'null') ? null : new TreeNode(v)
    }

    const root = new TreeNode(getNextNode())

    const qNode = [root]
    while (qNode.length && arr.length) {
        const levelCount = qNode.length
        for (let j = 0; j < levelCount; j++) {
            const node = qNode.shift()

            const leftNode = getNextNode()
            qNode.push(leftNode)
            if (node) {
                node.left = leftNode
            }

            const rightNode = getNextNode()
            qNode.push(rightNode)
            if (node) {
                node.right = rightNode
            }
        }
    }

    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const buildTree = require('../utils/NewBinaryTree')
const print = require('../utils/print')

const root = buildTree(1, 2, 3, null, null, 4, 5)

const S = serialize(root)
print(S)

const D = deserialize(S)
print(D)
