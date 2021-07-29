/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const len = nums.length
    const dp = new Array(len).fill(1) // 全部设置为初始状态

    for (let i = 0; i < len; i++) {
        let preMax = 1 // 值小于 nums[i] 的最长子序列，把 nums[i] 拼在后面的最大递增子序列长度
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                preMax = Math.max(preMax, dp[j] + 1)
            }
        }
        dp[i] = Math.max(preMax, dp[i])
    }

    return Math.max(...dp)
};


// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]))
