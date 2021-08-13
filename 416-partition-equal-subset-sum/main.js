// @see https://rovast.notion.site/05226bb472f4454b8afbae56f5c1043d
// @see https://leetcode-cn.com/problems/partition-equal-subset-sum/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = nums.reduce((a, b) => a + b, 0)
    if (sum % 2 !== 0) { // 和是奇数，不用分了
        return false
    }

    sum /= 2

    const n = nums.length
    const dp = new Array(n + 1).fill(false).map(() => new Array(sum + 1).fill(false))

    // j=0，表示背包没有容量，已经被装满了
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true
    }

    for (let i = 1; i <= n; i++) { // 数字
        for (let j = 1; j <= sum; j++) { // 容量
            if (nums[i - 1] > j) { // 要装进去的东西居然比背包容量还大，不装了
                dp[i][j] = dp[i - 1][j]
            } else {
                // 两种选择里，进行 OR 运算，看看有没有恰好能装满的
                dp[i][j] = dp[i - 1][j] // 容量够了，我选择不装
                    || dp[i - 1][j - nums[i - 1]] // 容量够了，我选择装 
            }
        }
    }


    return dp[n][sum]
};


console.log(canPartition([1, 5, 11, 5]))
console.log(canPartition([1, 2, 3, 5]))
