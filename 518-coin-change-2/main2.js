// @see https://leetcode-cn.com/problems/coin-change-2/
// @see https://rovast.notion.site/d036b581d9a14281a080aae7bd747021

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
};

console.log(change(5, [1, 2, 5]))
