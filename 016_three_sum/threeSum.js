/**
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = []
  nums.sort((a, b) => a - b)

  for(let i =0; i< nums.length - 2; i++) {
    let start = i + 1
    let end = nums.length - 1
    while(start < end) {
      if (nums[i] * nums[end] > 0) break
      const sum = nums[i] + nums[start] + nums[end]
      if(sum === 0) { 
        res.push([nums[i], nums[start], nums[end]]) 
        start ++
        end --
        while(nums[start] === nums[start - 1]) {
          start++
        }
        while(nums[end] === nums[end + 1]) {
          end--
        }
      }
      if(sum < 0) {
        start ++

      } else {
        end --
      }
    }
  }
  return res
};