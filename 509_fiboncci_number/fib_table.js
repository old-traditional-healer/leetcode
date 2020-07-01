/**
 * @see https://leetcode-cn.com/problems/fibonacci-number/
 * @see also  https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/dong-tai-gui-hua-xiang-jie-jin-jie 
 */

/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    const dp = new Array(N + 1).fill(0)

    // base case
    dp[1] = dp[2] = 1
    if (N < 3) {
        return dp[N]
    }

    // all states
    for (let i = 3; i <= N; i++) {
        // states transfer
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[N]
};
