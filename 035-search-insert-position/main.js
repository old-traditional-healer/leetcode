// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 如果目标元素大于输入数组中的最后一个元素，返回数组的最后一个元素的下标 + 1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const len = nums.length
    if (nums[len - 1] < target) {
        return len
    }

    // 核心
    // 1、两边都是闭合区间 左闭右闭 [left ... mid] [mid+1 ... right]
    // 2、把容易判断的写在 if 里，其他的写在 else 里
    let left = 0, right = len - 1
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        // console.log('mid=%s, left=%s, right=%s', mid, left, right)
        if (nums[mid] < target) { // 一定不在
            left = mid + 1
        } else { // 可能存在
            right = mid
        }
    }

    return left
};


console.log(searchInsert([1, 3, 5, 6], 5)) // 2
console.log(searchInsert([1, 3, 5, 6], 2)) // 1
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
console.log(searchInsert([1, 3, 5, 6], 0)) // 0

