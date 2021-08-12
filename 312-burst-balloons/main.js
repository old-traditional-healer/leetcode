//@see https://leetcode-cn.com/problems/burst-balloons/
//@see https://rovast.notion.site/08f90d81d83e48dd96ec1d39cfb1079e

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    const n = nums.length

    // 初始化 pts
    const pts = new Array(n + 2).fill(0)
    for (let i = 0; i < nums.length; i++) {
        pts[i + 1] = nums[i]
    }
    pts[0] = pts[n + 1] = 1 // 两个边界的分数是 1

    // 初始化 dp，其中 base case 通过 fill 函数已经被初始化为 0 了
    const dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0))
    // 开始遍历 i 和 j 的状态，采取反向遍历的方式
    for (let i = n; i >= 0; i--) { // 遍历 i
        for (let j = i + 1; j < n + 2; j++) { // 遍历 j
            for (let k = i + 1; k < j; k++) { // 在开区间 (i,j) 中最后一个戳破的气球是 k，我们遍历 k 所有情况，求分数最高的
                dp[i][j] = Math.max(
                    dp[i][j],
                    dp[i][k] + dp[k][j] + pts[i] * pts[k] * pts[j]
                )
            }
        }
    }

    return dp[0][n + 1]
};

console.log(maxCoins([3, 1, 5, 8]))
console.log(maxCoins([1, 5]))
