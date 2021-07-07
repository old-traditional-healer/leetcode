/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    // 数值的范围在 1~n 之间，而其中又存在重复数
    // 所以如果 [1, mid] 间存在重复数，那么其区间的数值数量，一定大于 mid
    let left = 1, right = nums.length - 1
    while (left < right) {
        const mid = left + ((right - left) >> 1)

        // 获取小于 mid 的数量
        let cnt = 0
        nums.forEach(v => {
            if (v <= mid) {
                cnt++
            }
        })

        // 重复数在 [left , mid] 区间内
        if (cnt > mid) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
};
