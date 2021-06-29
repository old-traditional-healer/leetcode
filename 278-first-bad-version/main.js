// 问题就是二分查找，然后求其左侧象限

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1, right = n
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)
            const midIsBad = isBadVersion(mid)
            if (midIsBad) {
                right = mid - 1
            } else if (!midIsBad) {
                left = mid + 1
            }
        }

        return right + 1
    };
};

