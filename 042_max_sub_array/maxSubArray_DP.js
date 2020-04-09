// DP 
var maxSubArray2 = function(nums) {
  const res = [nums[0]]
  let max = nums[0]
  for(let i=1; i< nums.length; i++) {
    res[i] = Math.max(res[i-1] + nums[i] , nums[i])
    max = Math.max(res[i], max)
  }
  return max
} 

maxSubArray2([2,-1,-3,4,-1,2,1,-5,4])