// 不转换string
var isPalindrome = function(x) {
  if (x < 0) return false
  let arr = []
  while (x !== 0) {
    const tail = x % 10
    arr.push(tail)
    x = parseInt(x / 10)
  }
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    if(arr[start] === arr[end]) {
      start ++ 
      end --
    } else {
      return false

    }
  }
  return true
}

let a = isPalindrome(12133321)
console.log('a', a)