/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if(height < 2) return 0
  let max = 0
  let start = 0
  let end = height.length - 1
  while(start < end ) {
    const area = Math.min(height[start], height[end]) * (end - start)
    max = Math.max(area, max)
    if (height[start] > height[end]) {
      end --
    } else {
      start ++
    }
  }
  console.log(max)
  return max
}

maxArea([1,8,6,2,5,4,8,3,7])