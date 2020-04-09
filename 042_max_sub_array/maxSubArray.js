var maxSubArray = function(nums) {
  let current = 0
  let out = nums[0]
  for(let i=0; i< nums.length; i++) {
    if (current <= 0) {
      current = nums[i]
    } else {
      current += nums[i]
    }

    if(current > out) {
      out = current
    }
  }
  return out
}
