/**
 * @param {number} n
 * @return {string[]}
*/

const backTrack = function(res, ans, left, right, max) {
  if(ans.length === max * 2) {
    res.push(ans.join(''))
  }
  if(left < max) {
    ans.push('(')
    backTrack(res, ans, left + 1, right, max)
    ans.pop()
  }
  if(right < left) {
    ans.push(')')
    backTrack(res, ans, left, right + 1, max)
    ans.pop()
  }

}

const generateParenthesis = function(n) {
  const res =  []
  let ans = []
  backTrack(res, ans, 0, 0, n)
  console.log('res', res)
  return res
}


generateParenthesis(2)