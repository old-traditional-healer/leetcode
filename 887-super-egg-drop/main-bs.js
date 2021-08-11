//@see https://rovast.notion.site/b8e7f9dedcc74cf09d19604a7956fd8b
//@see https://leetcode-cn.com/problems/super-egg-drop/

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
    const cache = new Map()

    // K鸡蛋数, N楼层数
    const dp = (K, N) => {
        if (K === 1) return N // 只有一个鸡蛋哎，要慢慢试了
        if (N === 0) return 0 // 没有楼层

        const key = `${K},${N}`
        if (cache.has(key)) {
            return cache.get(key)
        }

        let res = Infinity
        // for (let i = 1; i < N + 1; i++) {
        //     res = Math.min(res, 1 + Math.max(
        //         dp(K - 1, i - 1), // 鸡蛋碎了，那么剩余的楼层就是 1 ... i-1，楼层数就是 i-1
        //         dp(K, N - i) // 鸡蛋没碎，那么剩余的楼层就是 i ... N，楼层数就是 N-i
        //     ))
        // }
        let lo = 1, hi = N
        while (lo <= hi) {
            // 不再递增进行楼层的遍历，而是使用二分法选择合适的楼层
            const mid = lo + Math.floor((hi - lo) / 2)

            const broken = dp(K - 1, mid - 1) // 在 mid 层扔鸡蛋，碎了
            const not_broken = dp(K, N - mid) // 在 mid 层扔鸡蛋，没碎

            if (broken > not_broken) { // 我们取较坏的情况，所以二分查找要往低楼倾斜
                hi = mid - 1
                res = Math.min(res, broken + 1) // 最小操作数是当前操作数+1
            } else { // 因为取最坏情况嘛，所以 mid 往高楼层倾斜
                lo = mid + 1
                res = Math.min(res, not_broken + 1) // 最小操作数就是当前操作数+1
            }
        }

        cache.set(key, res)

        return res
    }

    return dp(k, n)
};

console.log(superEggDrop(2, 6))
console.log(superEggDrop(3, 14))
// console.log(superEggDrop(4, 1000)) 求解不出来，超时
