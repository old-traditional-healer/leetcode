/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // 在给定的左边界(left)和右边界(right)里搜索 target
    const binarySearch = (nums, target, left, right) => {
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2)
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return nums[left] === target ? left : -1
    }

    // 1. 对 nums 进行二分，在切分出的左右数组段里面，一定有一个是有序的数组
    // 2. 判断 target 是否落在有序的数组段里
    //        如果落在有序数组段里，直接查找
    //        如果落在无序数组段里，需要对剩下的无序数据段再次进行二分，即：再次执行第1步
    let left = 0, right = nums.length - 1
    // console.log('left=%s, right=%s', left, right)
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)

        if (nums[mid] === target) {
            return mid
        }
        // console.log('left=%s, right=%s, mid=%s', left, right, mid)

        if (nums[left] < nums[mid]) {  // 说明 左段 是有序的
            if (target <= nums[mid] && target >= nums[left]) { // 且 target 落在这个区域内
                return binarySearch(nums, target, left, right) // 返回 index
            }

            // 下一次切割数组的时候，需要更改左起点
            left = mid
        } else if (nums[mid] <= nums[right]) { // 说明右段是有序的
            if (target >= nums[mid] && target <= nums[right]) { // 且 target 落在这个区域内
                return binarySearch(nums, target, left, right) // 返回 index
            }

            // 下一次切割的时候，需要更改右起点
            right = mid - 1
        } else {
            left++
            right--
        }
    }

    return nums[left] === target ? left : -1
};


console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1
console.log(search([1], 0)) // -1
console.log(search([1], 1)) // 0
console.log(search([1, 3], 3)) // 1
console.log(search([3, 1], 0)) // -1
console.log(search([3, 5, 1], 0)) // -1
console.log(search([5, 1, 3], 0)) // -1
