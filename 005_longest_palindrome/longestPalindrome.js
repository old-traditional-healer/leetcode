/**
 * @param {string} s
 * @return {string}
 * 
 * 输入: "babad"
  输出: "bab"
  注意: "aba" 也是一个有效答案。
  DP[i][j] = DP[i-1][j-1] + (s[i]=s[j]) 
 */
var longestPalindrome = function(s) {
  if(s.length<=1) return s
  var maxLength = 1
  var res = s[0]
  let dp = []
  for(let i = 0; i< s.length; i ++) {
    dp[i] = []
    for(let j = 0; j < s.length; j++) {
      dp[i][j] = 0
    }
  }
  for(let r = 1; r<s.length; r++) {
    for(let l = 0; l<r; l++) {
      if(s[r] === s[l] && ( r -l <= 2 || dp[l+1][r-1]) ) {
        dp[l][r] = 1
        if(r -l +1>maxLength) {
          maxLength = r -l +1
          res = s.slice(l, r+1)
        }
      }
    }
  }
  return res
}
