/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    Array.prototype.top = function () {
        return this[this.length - 1]
    }

    const stack = []
    const n = nums.length
    const ret = new Array(n).fill(-1)

    for (let i = 0; i < 2 * n - 1; i++) {
        while (stack.length && nums[stack.top()] < nums[i % n]) {
            ret[stack.pop()] = nums[i % n]
        }

        stack.push(i % n)
    }

    return ret
};

console.log(
    nextGreaterElements([1, 2, 1])
)
