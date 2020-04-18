/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  strs.sort()
  let i = 0 
  let str = ''
  while(strs[0][i] === strs[strs.length - 1][i] ) {
    str += strs[0][i] 
    i +=1

  }
  console.log('str', str)
  return str
}

var longestCommonPrefix = function(strs) {
  let res = ''
  if(!strs.length) return ''
  for(let i=0; i< strs[0].length; i++) {
    let char = strs[0][i]
    if(strs.every(item => item[i] === char)) {
      res += strs[0][i]
    } else {
      return res
    }
  }
  return res
} 

longestCommonPrefix(["flower","flow","flight"])