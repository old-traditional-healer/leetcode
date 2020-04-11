//  abcabcbb
var lengthOfLongestSubstring = function(s) {
  const map = {}
  let res = 0
  for (let start =0, end = 0; end <s.length; end++) {
    const char = s[end]
    if (!map[char]) {
      map[char] = end + 1
      res = Math.max(end - start + 1, res)
    } else {
      start = Math.max(start, map[char])
    }
  }
  return res
}