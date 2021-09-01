/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.cap = capacity

    this.minFreq = 0 // 记录最小的 freq
    this.cache = new Map() // 记录 key => nodes
    this.keyToFreq = new Map() // 记录 key => freq
    this.freqToNodes = new Map() // 记录 freq 和 nodes 的映射关系。最终的 nodes 也是挂载在这个结构上
};

var Node = function (key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
}

var LinkedList = function () {
    const head = new Node(0, 0)
    const tail = new Node(0, 0)
    this.head = head
    this.tail = tail
    this.head.next = tail
    this.tail.prev = head
}

/**
 * 头部插入
 * @param {Node} node
 */
LinkedList.prototype.insertHead = function (node) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
}

LinkedList.prototype.remove = function (node) {
    if (this.head.next === this.tail) {
        return null
    }

    node.prev.next = node.next
    node.next.prev = node.prev

    return node
}

LinkedList.prototype.removeTail = function () {
    if (this.head.next === this.tail) {
        return null
    }

    return this.remove(this.tail.prev)
}

LinkedList.prototype.isEmpty = function () {
    return this.head.next === this.tail
}

LinkedList.prototype.print = function () {
    let str = '', node = this.head.next
    while (node.next !== null) {
        str += `${node.key}=${node.value},`
        node = node.next
    }
    return str
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    if (this.cap < 1) return -1
    if (!this.cache.has(key)) {
        console.log(`get(${key})=-1`)
        this.print()
        return -1
    }

    this.increaseFreq(key)
    const ret = this.cache.get(key).value
    console.log('get(%s)=%s', key, ret)
    if (ret === 11) {
        console.log('===')
    }
    this.print()
    return ret
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    if (this.cap < 1) return null

    console.log('put(%s,%s)', key, value)

    if (this.cache.has(key)) {
        this.cache.get(key).value = value
        this.increaseFreq(key)
        this.print()
        return
    }

    if (this.cache.size === this.cap) {
        this.removeMinFreqNode()
    }

    this.insertNewNode(key, value)
    this.print()
};


/**
 * 插入新的 Node
 * 
 * 1. 更新 cache
 * 2. 更新 minFreq
 * 3. 更新 freqToNodes
 */
LFUCache.prototype.insertNewNode = function (key, value) {
    const node = new Node(key, value)

    this.minFreq = 1
    this.keyToFreq.set(key, 1)
    this.cache.set(key, node)
    this.insertNodeToFreq(node, 1)
}

/**
 * 把指定的 node 追加到 freq 的链表里
 */
LFUCache.prototype.insertNodeToFreq = function (node, freq) {
    if (!this.freqToNodes.has(freq)) { // 如果该 freq 不存在
        this.freqToNodes.set(freq, new LinkedList())
    }

    this.freqToNodes.get(freq).insertHead(node)
}

/**
 * 该 key 对应的 freq+1
 * 
 * @param {*} key 
 */
LFUCache.prototype.increaseFreq = function (key) {
    const freq = this.keyToFreq.get(key)
    this.keyToFreq.set(key, freq + 1)

    // 需要把该 key 移动到下一个 freq 对应的 keys 里
    const node = this.cache.get(key)
    this.freqToNodes.get(freq).remove(node)
    this.insertNodeToFreq(node, freq + 1)

    if (this.freqToNodes.get(freq).isEmpty() && this.minFreq === freq) {
        console.warn('freq[%s] is empty, and minFreq update=', freq, this.minFreq + 1)
        this.minFreq = freq + 1
    }
}

/**
 * 淘汰最小的 freq 的最老的 node
 */
LFUCache.prototype.removeMinFreqNode = function () {
    const removedNode = this.freqToNodes.get(this.minFreq).removeTail()

    console.log('delete(%s,%s)', removedNode.key, removedNode.value)
    this.cache.delete(removedNode.key)
    this.keyToFreq.delete(removedNode.key)
}

LFUCache.prototype.print = function () {
    let str = ''
    this.freqToNodes.forEach((list, freq) => {
        str += `[${freq}]${list.print()}`
    })

    console.log('PRINT:', str)
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const print = require('../utils/print')

// lFUCache = new LFUCache(2);
// lFUCache.put(1, 1);   // {1=1(1)}
// lFUCache.put(2, 2);   // {1=1(1), 2=2(1)}
// console.log('get(1)=', lFUCache.get(1));      // {2=2(1), 1=1(2)}
// lFUCache.put(3, 3);   // {3=3(1), 1=1(2)} 删除键2，因为使用次数最小
// console.log('get(2)=', lFUCache.get(2));     // {3=3(1), 1=1(2)} 返回 -1（未找到）
// console.log('get(3)=', lFUCache.get(3));      // {1=1(2), 3=3(2)} 返回 3，使用
// lFUCache.put(4, 4);   // {4=4(1), 3=3(2)} 去除键 1 ，1 和 3 的 cnt 相同，但 1 最久未使用 cache=[4,3], cnt(4)=1, cnt(3)=2
// lFUCache.get(1);      // {4=4(1), 3=3(2)} 返回 -1（未找到）
// lFUCache.get(3);      // {4=4(1), 3=3(3)} 返回 3 cache=[3,4], cnt(4)=1, cnt(3)=3
// lFUCache.get(4);      // {4=4(2), 3=3(3)} 返回 4 cache=[3,4], cnt(4)=2, cnt(3)=3


// lFUCache = new LFUCache(2);
// lFUCache.put(3, 1); // 3=1
// lFUCache.put(2, 1); // 2=1, 3=1
// lFUCache.put(2, 2);
// lFUCache.put(4, 4);
// lFUCache.get(2);


// lFUCache = new LFUCache(0);
// lFUCache.put(0, 0);
// lFUCache.get(0);

const actions = ["LFUCache", "put", "put", "put", "put", "put", "get", "put", "get", "get", "put", "get", "put", "put", "put", "get", "put", "get", "get", "get", "get", "put", "put", "get", "get", "get", "put", "put", "get", "put", "get", "put", "get", "get", "get", "put", "put", "put", "get", "put", "get", "get", "put", "put", "get", "put", "put", "put", "put", "get", "put", "put", "get", "put", "put", "get", "put", "put", "put", "put", "put", "get", "put", "put", "get", "put", "get", "get", "get", "put", "get", "get", "put", "put", "put", "put", "get", "put", "put", "put", "put", "get", "get", "get", "put", "put", "put", "get", "put", "put", "put", "get", "put", "put", "put", "get", "get", "get", "put", "put", "put", "put", "get", "put", "put", "put", "put", "put", "put", "put"]
const params = [
    [10], [10, 13], [3, 17], [6, 11], [10, 5], [9, 10], [13], [2, 19], [2], [3], [5, 25],
    [8], [9, 22], [5, 5], [1, 30], [11], [9, 12], [7], [5], [8], [9], [4, 30],
    [9, 3], [9], [10], [10], [6, 14], [3, 1], [3], [10, 11], [8], [2, 14], [1],
    [5], [4], [11, 4], [12, 24], [5, 18], [13], [7, 23], [8], [12], [3, 27], [2, 12],
    [5], [2, 9], [13, 4], [8, 18], [1, 7], [6], [9, 29], [8, 21], [5], [6, 30], [1, 12],
    [10], [4, 15], [7, 22], [11, 26], [8, 17], [9, 29], [5], [3, 4], [11, 30], [12], [4, 29], // 出问题了
    [3], [9], [6], [3, 4], [1], [10], [3, 29], [10, 28], [1, 20], [11, 13], [3], [3, 12], [3, 8], [10, 9], [3, 26], [8], [7], [5], [13, 17], [2, 27], [11, 15], [12], [9, 19], [2, 15], [3, 16], [1], [12, 17], [9, 1], [6, 19], [4], [5], [5], [8, 1], [11, 7], [5, 2], [9, 28], [1], [2, 2], [7, 4], [4, 22], [7, 24], [9, 26], [13, 28], [11, 26]];

const output2 = [null, // new LFUCache(10)
    null, // put(10,13) [1]10=3,
    null, // put(3,17) [1]3=17, [1]10=3
    null, // put(6,11) [1]6=11, [1]3=17, [1]10=3
    null, // put(10,5) [1]10=5, [1]6=11, [1]3=17, [1]10=3
    null, // put(9,10) [1]9=10, [1]6=11, [1]3=17, [1]10=3
    -1,   // get(13) -1 
    null, // put(2,19) [1]2=19, [1]9=10, [1]6=11, [1]3=17, [1]10=3
    19,   // get(2),
    17,
    null, -1, null, null, null, -1, null, -1, 5, -1, 12, null,
    null, 3, 5, 5, null, null, 1, null, -1, null, 30,
    5, 30, null, null, null, -1, null, -1, 24, null, null,
    18, null, null, null, null, 14, null, null, 18, null, null,
    11, null, null, null, null, null, 18, null, null, -1,
    null, 4, 29, 30, null, 12, 11, null, null, null, null, 29,
    null, null, null, null, 17, -1, 18, null, null, null, -1,
    null, null, null, 20, null, null, null, 29, 18, 18, null,
    null, null, null, 20, null, null, null, null, null, null, null]






let lFUCache
let result = []
actions.forEach((op, i) => {
    let r
    if (op === 'LFUCache') {
        lFUCache = new LFUCache(...params[i]);
        r = null
    } else if (op === 'put') {
        r = lFUCache.put(...params[i])
    } else if (op === 'get') {
        r = lFUCache.get(...params[i])
    }

    result.push(r || null)
})

print(result)


const expected = [null, null, null, null, null, null, -1, null, 19, 17,
    null, -1, null, null, null, -1, null, -1, 5, -1, 12, null,
    null, 3, 5, 5, null, null, 1, null, -1, null, 30,
    5, 30, null, null, null, -1, null, -1, 24, null, null,
    18, null, null, null, null, 14, null, null, 18, null, null,
    -1, null, null, null, null, null, 18, null, null, 24, null, // 出问题了，第 6 排
    4, 29, -1, null, 12, -1, null, null, null, null, 29,
    null, null, null, null, 17, 22, -1, null, null, null, 24,
    null, null, null, 20, null, null, null, 29, -1, -1, null,
    null, null, null, 20, null, null, null, null, null, null, null];


const output = [null, null, null, null, null, null, -1, null, 19, 17,
    null, -1, null, null, null, -1, null, -1, 5, -1, 12, null,
    null, 3, 5, 5, null, null, 1, null, -1, null, 30,
    5, 30, null, null, null, -1, null, -1, 24, null, null,
    18, null, null, null, null, 14, null, null, 18, null, null,
    11, null, null, null, null, null, 18, null, null, -1, null, 
    4, 29, 30, null, 12, 11, null, null, null, null, 29,
    null, null, null, null, 17, -1, 18, null, null, null, -1,
    null, null, null, 20, null, null, null, 29, 18, 18, null,
    null, null, null, 20, null, null, null, null, null, null, null]
