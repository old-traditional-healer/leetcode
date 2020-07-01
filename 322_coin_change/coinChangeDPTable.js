// @see https://leetcode-cn.com/problems/coin-change/
//
// @see https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/dong-tai-gui-hua-xiang-jie-jin-jie

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);

    // base case
    dp[0] = 0;

    // all states
    for (let i = 0; i < amount + 1; i++) {
        // all selections
        for (let coin of coins) {
            // no solution
            if ((i - coin) < 0) continue;
            // min value
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }

    return (dp[amount] === amount + 1) ? -1 : dp[amount]
};

console.log(
    coinChange([1, 2, 5], 11)
)
