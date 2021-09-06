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
    let str = ''
    const encode = (root) => {
        if (root === null) {
            str += '#|'
            // print(str)
            return
        }

        str += `${root.val}|`
        // print(str)

        encode(root.left)
        encode(root.right)
    }

    encode(root)


    // 1|2|#|#|3|4|#|#|5|#|#|
    return str
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const decode = nodes => {
        if (!nodes || !nodes.length) return null

        const first = nodes.shift()
        // print(nodes.join('|'), false)
        if (first === '#') {
            return null
        }
        const root = new TreeNode(first)

        root.left = decode(nodes)
        root.right = decode(nodes)

        return root
    }

    const nodes = data.split('|')
    return decode(nodes)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
