// @see https://leetcode-cn.com/problems/coin-change-2/
// @see https://rovast.notion.site/d036b581d9a14281a080aae7bd747021

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const n = coins.length
    const dp = new Array(n + 1).fill(0).map(() => new Array(amount + 1).fill(0))

    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1 // 背包没有容量情况下，只有一种方式装满（就是不装）
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j < coins[i - 1]) { // 背包装不下这个物品了，就”不装“
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j] // 不装
                    + dp[i][j - coins[i - 1]] // ”装“ 物品，那么我们只需要知道 j-coins[i] 有多少种装法，就知道这个选择一共的装法
            }
        }
    }

    return dp[n][amount]
};


console.log(change(5, [1, 2, 5]))
