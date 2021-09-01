var connect = function (root) {
    if (root === null) return root

    const connectTwoNodes = (lNode, rNode) => {
        if (lNode === null || rNode === null) return null

        // 两个相邻节点相连
        lNode.next = rNode

        // 链接两个相同父节点的节点
        connectTwoNodes(lNode.left, lNode.right)
        connectTwoNodes(rNode.left, rNode.right)
        // 链接跨父节点的两个节点
        connectTwoNodes(lNode.right, rNode.left)
    }

    connectTwoNodes(root.left, root.right)

    return root
};
