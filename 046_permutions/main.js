// @see https://leetcode-cn.com/problems/permutations/submissions/
// @see https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/hui-su-suan-fa-xiang-jie-xiu-ding-ban

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []
    const paths = []

    function backtrack(paths, selections) {
        if (paths.length === nums.length) {
            res.push(paths.slice())
            return
        }

        for (let selection of selections) {
            if (paths.includes(selection)) continue

            paths.push(selection)
            backtrack(paths, selections)
            paths.pop()
        }
    }

    backtrack(paths, nums)

    return res
};



console.log(
    permute([1, 2, 3])
)
