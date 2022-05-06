/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let len = nums1.length
    const map12 = new Map()
    const map34 = new Map()

    // 处理前 nums1 = [ 1, 2],     nums3 = [-1,2], 
    //       nums2 = [-2,-1],     nums4 = [ 0,2]
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            const sum12 = nums1[i] + nums2[j]
            const sum34 = nums3[i] + nums4[j]

            map12.set(sum12, (map12.get(sum12) || 0) + 1)
            map34.set(sum34, (map34.get(sum34) || 0) + 1)
        }
    }
    // console.log(map12, map34)
    // 处理后 Map(3) { -1 => 1, 0 => 2, 1 => 1 } 
    //       Map(4) { -1 => 1, 1 => 1, 2 => 1, 4 => 1 }
    let hit = 0
    map12.forEach((v, k) => {
        const target = -k

        if (map34.has(target)) {
            hit += map34.get(target) * v
        }
    })

    return hit
};


let nums1 = [1, 2], nums2 = [-2, -1], nums3 = [-1, 2], nums4 = [0, 2]
console.log(fourSumCount(nums1, nums2, nums3, nums4))

nums1 = [-1, -1], nums2 = [-1, 1], nums3 = [-1, 1], nums4 = [1, -1]
console.log(fourSumCount(nums1, nums2, nums3, nums4))
