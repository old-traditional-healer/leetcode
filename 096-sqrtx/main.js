var mySqrt = function (x) {
    let left = 0, right = x
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        if (mid * mid === x) {
            return mid
        } else if (mid * mid < x) {
            left = mid + 1
        } else if (mid * mid > x) {
            right = mid - 1
        }
    }

    return left - 1
};
