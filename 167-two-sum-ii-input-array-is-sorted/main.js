/**
 * 使用二分法来搜索，总体时间复杂度 O(nlogn)
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const len = numbers.length
    let start = 0
    // 遍历目标值 O(n)
    while (start < len) {
        const goal = target - numbers[start]
        let left = start + 1, right = len - 1

        // 使用二分法搜索 O(logn)
        while (left <= right) {
            const mid = left + ((right - left) >> 1)
            if (numbers[mid] === goal) {
                return [start + 1, mid + 1]
            } else if (numbers[mid] < goal) {
                left = mid + 1
            } else if (numbers[mid] > goal) {
                right = mid - 1
            }
        }

        start++
    }

    return [-1, -1]
};


