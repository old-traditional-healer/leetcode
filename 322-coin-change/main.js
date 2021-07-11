var coinChange = function (coins, amount) {
    const cache = new Map;
    // 子问题：凑取 n 所用的最小硬币数目
    const dp = n => {
        // base case
        if (n === 0) return 0
        if (n < 0) return -1

        if (cache.has(n)) {
            return cache.get(n)
        }

        // 求最小值
        let res = Infinity
        for (const coin of coins) {
            // 子问题的划分：选择了一枚硬币后，减去该硬币的数目的最小值
            // subproblem(1) = 1    1 + dp(0)
            // subproblem(2) = 1    2 + dp(0)
            // subproblem(3) = 2    1 + dp(2)
            // subproblem(4) = 2    2 + dp(2)
            // subproblem(5) = 1    1 + dp(0)
            // subproblem(6) = 2    5 + dp(1)
            // subproblem(7) = 2    5 + dp(2)
            const subproblem = dp(n - coin)
            // 子问题无解时跳过
            if (subproblem === -1) continue
            // 最佳子问题的数目再加上1，就是当前问题的最优解？？
            res = Math.min(res, 1 + subproblem)
        }

        const ret = isFinite(res) ? res : -1
        console.log('subproblem(%s)=%s', n, isFinite(res) ? res : -1)
        cache.set(n, ret)
        return ret
    }

    return dp(amount)
};

const coins = [1, 2, 5]
// console.log(coinChange(coins, 1))
// console.log(coinChange(coins, 2))
// console.log(coinChange(coins, 3))
// console.log(coinChange(coins, 5))
// console.log(coinChange(coins, 63))

const coins2 = [1, 7, 10]
console.log(coinChange(coins2, 14))
