/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1

    let cur = 1, prev = 1
    for (i = 3; i <= n; i++) {
        // https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/comments/
        // @abcuzi int(1e9+7)一下就好了，1e9+7是浮点型
        const sum = (cur + prev) % 1000000007
        prev = cur
        cur = sum
    }

    return cur
};

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(45))
