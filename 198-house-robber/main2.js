// @see https://leetcode-cn.com/problems/house-robber/
// @see https://rovast.notion.site/b0249a29819f4e34bcb660e2ac490278

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const cache = new Map()
    const dp = n => {
        // 后面没有房子可以选了，所以抢不到钱了
        if (n >= nums.length) {
            return 0
        }

        if (cache.has(n)) {
            return cache.get(n)
        }

        const res = Math.max(
            dp(n + 1),
            dp(n + 2) + nums[n]
        )

        cache.set(n, res)
        return res
    }

    return dp(0) // 从第 0 个房子开始抢
};


console.log(rob([1, 2, 3, 1]))
