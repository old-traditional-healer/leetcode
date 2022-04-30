/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    for(let i = nums.length-1; i > 0; i--) {
        if(nums[i-1] === nums[i]) {
            nums.splice(i,1)
        }
    } 

    return nums.length
};


let nums = [1,1,1,1]
console.log(removeDuplicates(nums),nums)
nums = [1,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums),nums)
