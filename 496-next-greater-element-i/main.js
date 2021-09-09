/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    Array.prototype.top = function () {
        return this[this.length - 1]
    }

    const stack = []
    const map = new Map()

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && stack.top() < nums2[i]) {
            map.set(stack.pop(), nums2[i])
        }

        stack.push(nums2[i])
        // console.log('i=%s, and stack=', i, stack, stack.top())
    }

    const ret = []
    nums1.forEach(v => {
        ret.push(
            map.has(v) ? map.get(v) : -1
        )
    })

    return ret
};

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];

console.log(
    nextGreaterElement(nums1, nums2)
)
