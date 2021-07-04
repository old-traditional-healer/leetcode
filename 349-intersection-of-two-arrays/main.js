var intersection = function (nums1, nums2) {
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
