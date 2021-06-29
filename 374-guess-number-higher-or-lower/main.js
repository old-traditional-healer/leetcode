/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1, right = n
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        const guessMid = guess(mid)
        // console.log('guess=%s, mid=%s, [left=%s, right=%s]', guessMid, mid, left, right)
        if (guessMid === 0) {
            return mid
        } else if (guessMid === -1) {
            right = mid - 1
        } else if (guessMid === 1) {
            left = mid + 1
        }
    }

    return left - 1
};
