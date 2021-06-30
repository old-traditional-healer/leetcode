var findClosestElements = function (arr, k, x) {
    const sorted = arr.sort((a, b) => Math.abs(a - x) - Math.abs(b - x), -Infinity)
    const ret = sorted.slice(0, k)
    return ret.sort((a, b) => a - b, -Infinity)
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3))
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1))
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 6))
