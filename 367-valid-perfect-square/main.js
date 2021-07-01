var isPerfectSquare = function (num) {
    let left = 1, right = num
    while (left <= right) {
        const mid = left + ((right - left) >> 1)
        const pow2 = mid * mid
        if (pow2 === num) {
            return true
        } else if (pow2 < num) {
            left = mid + 1
        } else if (pow2 > num) {
            right = mid - 1
        }
    }

    return false
};

console.log(isPerfectSquare(1))
console.log(isPerfectSquare(4))
console.log(isPerfectSquare(9))
console.log(isPerfectSquare(16))
console.log(isPerfectSquare(2))
console.log(isPerfectSquare(3))
console.log(isPerfectSquare(10))
