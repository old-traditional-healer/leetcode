/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cap = capacity
    this.map = new Map()
    this.linkedList = new LinkedList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) {
        return -1
    }

    const node = this.map.get(key)
    this.linkedList.makeRecently(node)
    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        const node = this.map.get(key)
        node.val = value
        this.linkedList.makeRecently(node)
        return
    }

    if (this.linkedList.size === this.cap) { // 满了
        const first = this.linkedList.removeFirst()
        this.map.delete(first.key)
    }

    const node = new Node(key, value)
    this.map.set(key, node)
    this.linkedList.addRecently(node)
    this.size++
};

var Node = function (key, val) {
    this.key = key
    this.val = val
    this.prev = null
    this.next = null
}

var LinkedList = function () {
    this.head = new Node(0, 0)
    this.tail = new Node(0, 0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
}

// 把元素设置为最新的
LinkedList.prototype.makeRecently = function (node) {
    this.remove(node)
    this.addRecently(node)
}

// 删除节点
LinkedList.prototype.remove = function (node) {
    node.prev.next = node.next
    node.next.prev = node.prev
    this.size--
}

// 增加一个最新的节点，即加到链尾
LinkedList.prototype.addRecently = function (node) {
    node.prev = this.tail.prev
    node.next = this.tail
    this.tail.prev.next = node
    this.tail.prev = node
    this.size++
}

// 删除最老的节点
LinkedList.prototype.removeFirst = function () {
    if (this.head.next === this.tail) {
        return null
    }

    const first = this.head.next
    this.remove(first)
    return first
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const print = require('../utils/print')

// lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 返回 1 {2=2, 1=1}
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {3=3, 4=4}
// lRUCache.get(1);    // 返回 -1 (未找到)
// lRUCache.get(3);    // 返回 3 {4=4, 3=3}
// lRUCache.get(4);    // 返回 4 {3=3, 4=4}
// print(lRUCache)


lRUCache = new LRUCache(2);
lRUCache.put(2, 1); // 缓存是 {2=1}
lRUCache.put(2, 2); // 缓存是 {2=2}
lRUCache.get(2);    // 返回 2 {2=2}
lRUCache.put(1, 1); // {2=2, 1=1}
lRUCache.get(4, 1);    // 返回 -1 (未找到)
lRUCache.get(2);    // -1
print(lRUCache)
