// @see https://rovast.notion.site/f9de88de84f745518162ac2e06fcf9b1
// @see https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
    const len = s.length
    const dp = new Array(len).fill(0).map(_ => new Array(len).fill(0))

    for (let i = len - 2; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1
            }
        }
    }

    return dp[0][len - 1]
};

// console.log(minInsertions('mbadm'))
console.log(minInsertions("leetcode"))
