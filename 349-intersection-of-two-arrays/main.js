var intersection = function (nums1, nums2) {
    // 大的定义一个 map，时间复杂度是 n
    const map = {}
    nums1.forEach(v => {
        map[v] = true
    })

    const ret = []
    const map2 = {}
    nums2.forEach(v => {
        if (map[v] && !map2[v]) {
            ret.push(v)
            map2[v] = true
        }
    })

    return ret
};
