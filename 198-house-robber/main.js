// @see https://leetcode-cn.com/problems/house-robber/
// @see https://rovast.notion.site/b0249a29819f4e34bcb660e2ac490278

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length

    // 已经包含 base case 了 dp[len] = 0
    const dp = new Array(n + 2).fill(0) // 表示从第几间房间开始抢劫

    for (let i = n - 1; i >= 0; i--) { // 由于 dp[i] 依赖 dp[i+1] 和 dp[i+2]，所以需要反向遍历
        dp[i] = Math.max(
            dp[i + 1], // 选择1，不抢。所以最大值就是接下来房间里（包含紧邻的下一个房间）的最大所得
            dp[i + 2] + nums[i] // 选择2，抢。所以最大金额就是本次所得加上接下来（不包含紧邻的下一个房间）可以得到的最大值
        )
    }

    return dp[0]
};


console.log(rob([1, 2, 3, 1]))
