// @see https://rovast.notion.site/f9de88de84f745518162ac2e06fcf9b1
// @see https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
    const len = s.length
    const dp = new Array(len).fill(0)

    let temp = 0
    for (let i = len - 2; i >= 0; i--) {
        // 记录 dp[i+1][j-1]
        let pre = 0
        for (let j = i + 1; j < len; j++) {
            temp = dp[j]

            if (s[i] === s[j]) {
                // dp[i][j] = dp[i + 1][j - 1]
                dp[j] = pre
            } else {
                // dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1
                dp[j] = Math.min(dp[j], dp[j - 1]) + 1
            }

            pre = temp
        }
    }

    return dp[len - 1]
};

console.log(minInsertions('mbadm'))
console.log(minInsertions("leetcode"))
