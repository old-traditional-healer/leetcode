/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    // 1. 按照宽度进行排序。如果宽度相同，则宽度降序排列
    envelopes.sort((a, b) => {
        return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]
    })

    // 2. 求宽度的最大递增子序列
    const heightArr = envelopes.map(i => i[1])

    const lengthOfLIS = nums => {
        const len = nums.length
        const dp = new Array(len).fill(1)

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1)
                }
            }
        }

        return Math.max(...dp)
    }

    return lengthOfLIS(heightArr)
};

console.log(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]]))
