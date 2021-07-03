var nextGreatestLetter = function (letters, target) {
    let left = 0, right = letters.length - 1
    while (left <= right) {
        const mid = left + ((right - left) >> 1)
        if (letters[mid] === target) {
            left = mid + 1
        } else if (letters[mid] < target) {
            left = mid + 1
        } else if (letters[mid] > target) {
            right = mid - 1
        }
    }

    if (left > letters.length - 1) left -= letters.length

    return letters[left]
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'))
