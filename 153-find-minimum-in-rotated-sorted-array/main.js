var findMin = function (nums) {
    // 1. 进行绘图，可视化分析。原来是一条单调递增的上升线段
    // 2. 在中间旋转后，其实就是中间切了一刀
    // 3. 最右侧的是 right, 最左侧的是 left
    // 4. 只要在右侧段的，需要缩减右侧搜索范围 right=mid
    // 5. 在左侧的，缩减左侧的范围 left=mid+1
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

