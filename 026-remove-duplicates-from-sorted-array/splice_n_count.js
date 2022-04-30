/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let delCount = 0
    for(let i = nums.length-1; i > 0; i--) {
        if(nums[i-1] === nums[i]) {
            delCount++
        } else if (delCount) {
            nums.splice(i, delCount)
            delCount=0
        }
    } 

    if(delCount) {
        nums.splice(1,delCount)
    }

    return nums.length
};


let nums = [1,1,1,1]
console.log(removeDuplicates(nums),nums)
nums = [1,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums),nums)
