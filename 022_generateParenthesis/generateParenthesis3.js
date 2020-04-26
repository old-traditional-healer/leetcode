/**
 * @param {number} n
 * @return {string[]}
 * DP 的思想，不是特别理解
 */

const generateParenthesis = function(n) {
  const dp = []
  for(let i=0; i< n; i++) {
    dp[i] = 0
  }
  dp[0] = ['']
  for (let i=0; i<= n; i++) {
    const cur = []
    for(let j =0; j <i; j++) {
      const left = dp[j]
      const right = dp [i -j -1]
      for(s1 of left) {
        for(s2 of right) {
          cur.push(`(${si})${s2}`)
        }
      }
    }
    dp[i] = cur

  }
  return dp[n]

}