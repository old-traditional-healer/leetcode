/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map = {}
    nums1.forEach(v => {
        map[v] = map[v] ? (map[v] + 1) : 1
    })

    const ret = []
    nums2.forEach(v => {
        if (map[v]) {
            map[v]--
            ret.push(v)
        }
    })

    return ret
};
