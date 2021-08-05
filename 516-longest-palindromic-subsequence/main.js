/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    const len = s.length

    // 定义 dp[i][j] 为 s[i...j] 的最长回文子序列
    const dp = new Array(len).fill(0).map(_ => new Array(len).fill(0))

    for (let i = 0; i < len; i++) {
        dp[i][i] = 1
    }

    /**
    [
        [ 1, 0, 0, 0, 0 ],
        [ 0, 1, 0, 0, 0 ],     ↑
        [ 0, 0, 1, 0, 0 ],     ↑
        [ 0, 0, 0, 1, 0 ],     ↑
        [ 0, 0, 0, 0, 1 ]      ↑ i
    ]        
               →→→→→→→→ j
     */

    for (let i = len - 2; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(
                    dp[i + 1][j],
                    dp[i][j - 1]
                )
            }
        }
    }

    return dp[0][len - 1]
};

console.log(longestPalindromeSubseq('bbbab'))
