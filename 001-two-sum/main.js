var twoSum = function (nums, target) {
    let ans = -1
    const map = new Map()
    nums.forEach((v, index) => {
        const needed = target - v
        if (map.has(needed)) {
            ans = [index, map.get(needed)]
            return
        }

        map.set(v, index)
    })

    return ans
};


console.log(twoSum([2, 7, 11, 15], 9))
