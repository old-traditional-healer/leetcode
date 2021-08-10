var maxA = function (N) {
    const dp = new Array(N + 1).fill(0)

    for (let i = 1; i <= N; i++) {
        // 这次按 A 键
        dp[i] = dp[i - 1] + 1
        // 这次按 CtrlV 键，然后比比谁大
        for (let j = 2; j < i; j++) {
            // 全选并复制 dp[j-2] 的内容，连续粘贴 i-j 次
            // 屏幕上 A 的总数是 dp[j-2]*(i-j+1)
            dp[i] = Math.max(dp[i], dp[j - 2] * (i - j + 1))
        }
    }

    return dp[N]
}

console.log(maxA(1))
console.log(maxA(3))
console.log(maxA(5))
console.log(maxA(7))
console.log(maxA(9))
