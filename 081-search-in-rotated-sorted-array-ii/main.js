// @see https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/
// 81. 搜索旋转排序数组 II

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    const n = nums.length;
    if (n === 0) {
        return false;
    }
    if (n === 1) {
        return nums[0] === target;
    }

    let l = 0, r = n - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return true;
        }

        if (nums[l] === nums[mid] && nums[mid] === nums[r]) { // 分不出那段是有序的
            ++l;
            --r;
        } else if (nums[l] <= nums[mid]) { // 左侧有序
            if (nums[l] <= target && target < nums[mid]) { // target 落在左侧区域
                r = mid - 1; // 缩小右边距查询
            } else { // 不是落在左侧，那么需要扩大左侧查询
                l = mid + 1;
            }
        } else { // 右侧有序
            if (nums[mid] < target && target <= nums[n - 1]) { // 落在右侧
                l = mid + 1;
            } else { // 不落在右侧，需要缩小右侧查询
                r = mid - 1;
            }
        }
    }
    return false;
};

// console.log(search([2, 5, 6, 0, 0, 1, 2], 0)) // true
// console.log(search([2, 5, 6, 0, 0, 1, 2], 3)) // false
// console.log(search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2)) // true
console.log(search([1, 0, 1, 1, 1], 0)) // true
