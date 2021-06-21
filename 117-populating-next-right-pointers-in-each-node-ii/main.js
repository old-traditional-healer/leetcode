// @see https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
// @see https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoo0ts/

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (root === null) return null

    const Q = [root]
    root.next = null

    while (Q.length) {
        const levelCount = Q.length
        let prevNode = null
        for (let i = 0; i < levelCount; i++) {
            const curNode = Q.shift()

            // 建立连接点
            curNode.next = null
            if (prevNode) prevNode.next = curNode

            prevNode = curNode

            if (curNode.left) Q.push(curNode.left)
            if (curNode.right) Q.push(curNode.right)
        }
    }

    return root
};



// Definition for a Node.
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

const Tree = require('../utils/NewBinaryTree')
const print = require('../utils/print')

const root = Tree(1, 2, 3, 4, 5, null, 7)
print(connect(root))
