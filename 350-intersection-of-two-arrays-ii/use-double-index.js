/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // 1. 两个数组排序
    nums1.sort((a, b) => a - b, -Infinity)
    nums2.sort((a, b) => a - b, -Infinity)

    // 2. 使用双指针
    const len1 = nums1.length, len2 = nums2.length
    let index1 = 0, index2 = 0, ret = []
    while (index1 < len1 && index2 < len2) {
        if (nums1[index1] < nums2[index2]) {
            index1++
        } else if (nums1[index1] > nums2[index2]) {
            index2++
        } else if (nums1[index1] === nums2[index2]) {
            ret.push(nums1[index1])
            index1++
            index2++
        }
    }

    return ret
};


console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
