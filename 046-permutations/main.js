// @see https://leetcode-cn.com/problems/permutations/solution/
// @see https://rovast.notion.site/38b5ab149ef644d1857c977986f68c3a

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []

    /**
     * 
     * @param {Array} path 路径  
     * @param {Arary} selections 选择 
     */
    const backtrack = (path, selections) => {
        if (path.length === selections.length) { // 3. 满足结束条件
            res.push(path.slice())
            return
        }

        for (let selection of selections) {
            if (path.includes(selection)) { // 不能做该选择
                continue
            }

            path.push(selection) // 1.做选择
            backtrack(path, selections)
            path.pop() // 1.撤销选择
        }
    }

    backtrack([], nums)

    return res
};

console.log(permute([1, 2, 3]))
