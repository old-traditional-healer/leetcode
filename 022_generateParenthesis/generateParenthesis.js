/**
 * @param {number} n
 * @return {string[]}
 */

const isValid = function(current) {
  let balance = 0
  for(let c of current) {
    if (c == '(') balance++;
    else balance--;
    if (balance < 0) return false;
  }
  return balance === 0
}

const generateAll = function(arr, pos, n, res) {
  console.log(arr.length, pos)
  if(pos === n) {
    if(isValid(arr)) {
      res.push(arr.join(''))
    } 
  } else {
    arr[pos] =  '('
    generateAll(arr, pos+1, n, res)
    arr[pos] = ')'
    generateAll(arr, pos+1, n,  res)
  }
}

// 不用pos也可以
// const generateAll2 = function(arr, n, res) {
//   if(arr.length === n) {
//     // console.log('c', arr)
//     if(isValid(arr)) {
//       res.push(arr.join(''))
//     } 
//   } else {
//     arr.push('(')
//     generateAll(arr, n, res)
//     arr.pop()
//     arr.push(')')
//     generateAll(arr, n, res)
//     arr.pop()
//   }
// }



 
var generateParenthesis = function(n) {
  const res = []
  generateAll([], 0, n * 2, res)
  console.log('res', res)
  return res
}

generateParenthesis(3)