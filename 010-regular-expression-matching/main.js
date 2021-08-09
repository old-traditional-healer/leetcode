// @see https://rovast.notion.site/22dcfb831b2c4a1b96e094a38ac85f7b
// @see https://leetcode-cn.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const dp = (s, i, p, j) => {
        const m = s.length, n = p.length

        if (j === n) {
            return i === m
        }

        if (i === m) {
            if ((n - j) % 2 === 1) {
                return false
            }

            for (; j + 1 < n; j += 2) {
                if (p[j + 1] != '*') {
                    return false
                }
            }

            return true
        }

        const memo = new Map()
        const key = i + ',' + 'j'
        if (memo.has(key)) {
            return memo.get(key)
        }

        let res = false
        if (s[i] === p[j] || p[j] === '.') {
            if (j < n - 1 && p[j + 1] === '*') {
                res = dp(s, i + 1, p, j) // 0 匹配
                    || dp(s, i, p, j + 2) // 多个匹配
            } else {
                res = dp(s, i + 1, p, j + 1) // 没有 * 通配符，逐个往后匹配
            }
        } else {
            if (j < n - 1 && p[j + 1] === '*') {
                res = dp(s, i, p, j + 2)// 0 匹配
            } else {
                res = false
            }
        }

        memo.set(key, res)

        return res
    }

    return dp(s, 0, p, 0)
};

console.log(isMatch("aa", "a"))
console.log(isMatch("aa", "a*"))
console.log(isMatch("aab", "c*a*b"))
