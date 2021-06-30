var findPeakElement = function (nums) {
    // 使用二分法进行查找，本题是寻找出其中一个峰值即可‘
    // 所以上坡时 前 < 后
    // 下拨时 前 > 后
    // 无限逼近波峰即可
    let left = 0, right = nums.length - 2
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1
        } else if (nums[mid] > nums[mid + 1]) {
            right = mid - 1
        }
    }

    return left
};
