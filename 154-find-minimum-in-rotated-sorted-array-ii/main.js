var findMin = function (nums) {
    let left = 0, right = nums.length - 1
    while (left < right) {
        const mid = left + ((right - left) >> 1)
        if (nums[left] < nums[right]) {
            right = mid
        } else if (nums[left] > nums[right]) {
            if (nums[mid] <= nums[right]) {
                right = mid
            } else if (nums[mid] >= nums[left]) {
                left = mid + 1
            } else {
                left = mid + 1
            }
        } else if (nums[left] === nums[right]) {
            right--
        }
    }

    return nums[left]
};

// console.log(findMin([3, 1, 3]))
// console.log(findMin([3, 3, 1, 3]))
console.log(findMin([2, 0, 1, 1, 1]))
