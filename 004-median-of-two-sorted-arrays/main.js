var findMedianSortedArrays = function (nums1, nums2) {
    // 为了进一步缩小遍历范围，我们设定 nums1.length <= num2.length
    if (nums1.length > nums2.length) {
        const temp = nums2
        nums2 = nums1
        nums1 = temp
    }

    // 求出分割线左侧元素的个数
    const totalLeft = (nums1.length + nums2.length + 1) >> 1

    // 使用二分法来查找 nums1 中分割线的位置
    let left = 0, right = nums1.length
    while (left < right) {
        // !!!! 这里需要加1
        const i = left + ((right - left + 1) >> 1)
        const j = totalLeft - i
        // nums1 分割线左侧第一个元素 大于 nums2 分割线右侧第一个元素
        // 则 nums1 分割线需要左移
        if (nums1[i - 1] > nums2[j]) {
            // 下一轮 [left, i-1]
            right = i - 1
        } else {
            // 下一轮 [i, right]
            left = i
        }
    }

    // i表示分割线在nums1的下标， j表示分割线在nums2的下标
    // !!!! 这里是减去 left
    const [i, j] = [left, totalLeft - left]

    // 找出分割线左侧第一个元素 和 分割线右侧第一个元素
    const nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1]
    const nums1RightMin = i === nums1.length ? Infinity : nums1[i]
    const nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1]
    const nums2RightMin = j === nums2.length ? Infinity : nums2[j]

    if ((nums1.length + nums2.length) % 2 === 1) {
        // 如果两个数组的总元素个数是奇数，那么中位数就是分割线左侧最大值
        return Math.max(nums1LeftMax, nums2LeftMax)
    } else {
        // 如果两个数组的总元素个数是偶数，那么中位数就是分割线左侧最大值和右侧最小值的平均数
        return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2
    }
};

// console.log(findMedianSortedArrays([1, 3], [2]))
// console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([2, 3], [1]))
