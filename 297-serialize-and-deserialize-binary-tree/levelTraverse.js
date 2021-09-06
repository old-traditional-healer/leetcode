/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let count = 1
const print = (str, flag = true) => {
    flag ? count++ : count--
    let indent = '', i = count
    while (i--) {
        indent += flag ? '> ' : '< '
    }

    console.log(indent, str)
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root === null) {
        return
    }

    let str = '', q = [root]
    while (q.length) {
        const cur = q.shift()

        if (cur === null) {
            str += `#|`
            continue
        }

        str += `${cur.val}|`

        q.push(cur.left)
        q.push(cur.right)
    }

    return str.substr(0, str.length - 1)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data) return null

    const nodes = data.split('|')
    const root = new TreeNode(nodes[0])
    const q = [root]

    for (let i = 1; i < nodes.length;) {
        const parent = q.shift()
        const left = nodes[i++]
        if (left !== '#') {
            parent.left = new TreeNode(left)
            q.push(parent.left)
        } else {
            parent.left = null
        }

        const right = nodes[i++]
        if (right !== '#') {
            parent.right = new TreeNode(right)
            q.push(parent.right)
        } else {
            parent.right = null
        }
    }

    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
