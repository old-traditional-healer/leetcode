/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var values = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  var reps =  ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
  var num = 0
  let i = 0
  while(i < s.length) {
    let one = reps.indexOf(s.slice(i , i+1))
    let two =  reps.indexOf(s.slice(i , i+2))
    if(two !== -1) {
      i += 2
      num +=values[two]
    } else {
      num+= values[one]
      i++
    }
  }
  return num
}

var romanToInt2 = function(s) {
  const map = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
  }
  let n = 0
  let len = s.length
  for(let i=1; i<len -1; i++) {
    let tmp = o[s[i]]
    if(i < len - 1 && tmp < o[s[i + 1]]) {
      n -= temp
    } else {
      n += temp
    }
  }
}