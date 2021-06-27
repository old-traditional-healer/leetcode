/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const len = nums.length
    const starIndex = (nums, target) => {
        let left = 0, right = len - 1

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2)
            if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return nums[left] === target ? left : -1
    }
    const endIndex = (nums, target, leftStartIndex = 0) => {
        let left = leftStartIndex, right = len - 1

        // 找到第一个大于 target 的值
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2)
            // console.log('mid=%s,value=%s,target=%s', mid, nums[mid], target)
            if (nums[mid] > target) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        let end = -1
        if (nums[left] === target) {
            end = left
        } else if (nums[left - 1] === target) {
            end = left - 1
        }

        return end
    }

    const start = starIndex(nums, target)
    const end = endIndex(nums, target, start)

    return [start, end]
};


console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([], 0))
console.log(searchRange([1], 1))
