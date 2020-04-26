const isValid = function(s) {
  let map = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
let stack = []
  for(let i = 0; i < s.length ; i++) {
      if(map[s[i]]) {
          stack.push(s[i])
      } else if(s[i] !== map[stack.pop()]){
          return false
      }
  }
  return stack.length === 0

}

var str = "([)]"
let a = isValid(str)
console.log('a', a)