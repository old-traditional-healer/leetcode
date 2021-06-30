var findMin = function (nums) {
    let left = 0, right = nums.length - 1
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (nums[mid] <= nums[right]) {
            right = mid
        } else if (nums[mid] >= nums[left]) {
            left = mid + 1
        }
    }

    return nums[right]
};


console.log(findMin([2, 1]))
console.log(findMin([3, 1, 2]))

