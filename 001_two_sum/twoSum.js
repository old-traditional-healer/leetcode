/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  for(let i =0; i< nums.length; i++) {
    const item = nums[i]
    if(map[item] == undefined) {
      map[target - item] = i
    } else {
      return [map[item], i ]
    }
  } 
}

let a = twoSum([2,7,11,15], 9)
console.log('a', a)