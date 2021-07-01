/**

|    low            |    high      |
|                                    |
| ------------------ X --------------|
mid                                  mid+k
|                                    |

low  = x-nums[mid] 
high = nums[mid+k]-x

low>high时，需要收缩左侧查询条件，就是 left=mid+1

 */

/**
 * 
 * @param {Array} arr 
 * @param {Number} k 
 * @param {Number} x 
 */
var findClosestElements = function (arr, k, x) {
    let left = 0, right = arr.length - 1
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if ((x - arr[mid]) > (arr[mid + k] - x)) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return arr.slice(left, left + k)
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3))
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1))
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 6))
