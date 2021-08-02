// @see https://rovast.notion.site/bef5e9dceb87439ea7b2a5884371f5e3
// @see https://leetcode-cn.com/problems/edit-distance

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const cache = new Map()
    const cacheKey = (i, j) => i + ',' + j

    const dp = (i, j) => {
        const key = cacheKey(i, j)

        if (cache.has(key)) {
            return cache.get(key)
        }

        if (i === -1) return j + 1 // word1 遍历结束  base case
        if (j === -1) return i + 1 // words 遍历结束  base case

        let ret
        if (word1[i] === word2[j]) {
            ret = dp(i - 1, j - 1) // 跳过 skip
        } else {
            ret = Math.min(
                dp(i, j - 1) + 1, // 插入
                dp(i - 1, j) + 1, // 删除
                dp(i - 1, j - 1) + 1 // 替换
            )
        }

        cache.set(key, ret)

        return ret
    }

    return dp(word1.length, word2.length)
};


console.log(minDistance("horse", "ros"))
