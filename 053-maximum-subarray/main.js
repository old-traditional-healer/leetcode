/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = 0, res = nums[0]
    nums.forEach(x => {
        // f(i) = max(f(i-1), nums[i])
        pre = Math.max(pre + x, x)
        // ret = max(f1, f2, f3....)
        res = Math.max(res, pre)
    })

    return res
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
