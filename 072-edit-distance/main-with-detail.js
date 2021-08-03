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

    console.log('要把 word1(%s) 变为 word2(%s)', word1, word2)

    const dp = (i, j) => {
        const key = cacheKey(i, j)

        if (cache.has(key)) {
            return cache.get(key)
        }

        if (i === -1) {
            // console.log('word1 遍历结束，挨个插入字符到 word1，最后变成 word2')
            return j + 1 // word1 遍历结束  base case
        }

        if (j === -1) {
            // console.log('word2 遍历结束，挨个删除 word1 的字符，最后变成 word2')
            return i + 1 // words 遍历结束  base case
        }

        let ret, op
        if (word1[i] === word2[j]) {
            ret = dp(i - 1, j - 1) // 跳过 skip
            op = `dp[${i - 1}][${j - 1}] skip ${word1[i]}`
        } else {
            const replace = dp(i - 1, j - 1)
            const insert = dp(i, j - 1)
            const del = dp(i - 1, j)

            ret = replace
            op = `dp[${i - 1}][${j - 1}] replace ${word1[i]} => ${word2[j]}`
            if (ret > insert) {
                ret = insert
                op = `dp[${i}][${j - 1}] insert ${word2[j]}`
            }

            if (ret > del) {
                ret = del
                op = `dp[${i - 1}][${j}] del ${word1[i]}`
            }

            ret++
        }

        console.log("dp[%s][%s]=%s, op=%s", i, j, ret, op)
        cache.set(key, ret)

        return ret
    }

    return dp(word1.length - 1, word2.length - 1)
};


console.log(minDistance("horse", "ros"))
