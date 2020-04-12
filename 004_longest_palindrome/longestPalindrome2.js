const longestPalindrome = function (s) {
  if (s == null || s.length < 1) return ""
  let longest = 0
  let res = s[0]
  for(let i =0; i< s.length; i++) {
    let oddStr = expandAroundCenter(s, i ,i)
    let evenStr = expandAroundCenter(s, i, i+1)
    let lenString = oddStr.length > evenStr.length ? oddStr : evenStr
    if(lenString.length > longest) {
      longest = lenString.length
      res = lenString
    }
  }
  return res
}

const expandAroundCenter = function (s, left, right) {
  let L =left
  let R = right
  while(s[L] === s[R] && L>=0 && R <s.length ) {
    L--
    R++
  }
  return s.substring(L + 1, R)
}