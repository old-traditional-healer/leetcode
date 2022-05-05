/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    const odd = []
    const even = []
    nums.forEach(i => {
        if(i%2===0) {
            even.push(i)
        } else {
            odd.push(i)
        }
    })

    return [...even, ...odd]
};
