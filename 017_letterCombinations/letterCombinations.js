var genObj = function() {
  let obj = {}
  let asc = 97
  for(let i=2; i< 10; i++) {
    if(i === 7 || i === 9 ) {
      obj[i+''] = [].concat([String.fromCharCode(asc), String.fromCharCode(++asc), String.fromCharCode(++asc),String.fromCharCode(++asc) ])
      asc++
      continue
    }
    obj[i+''] = [].concat([String.fromCharCode(asc), String.fromCharCode(++asc), String.fromCharCode(++asc)])
    asc++
  }
  return obj
}

const out = function(prev, digits, obj, out) {
  if(digits.length === 0) {
    out.push(prev)
  } else {
    let array = obj[digits[0]]
    for(let i=0; i< array.length; i++) {
        helper(prev + array[i], digits.substring(1), obj, out)
    }
  }
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const out = []
  const obj = genObj()
  if(digits.length) {
    helper('', digits, obj, out)
  }
  return out  
};

var letterCombinations2 = function(digits) {
  const out = []
  const obj = genObj()
  for(let item of digits) {
    let arr = obj[item]
    if(!out.length) {
      out = arr 
      continue
    }
    let result = []
    for(let x of out) {
      for(let y of arr) {
        result.push(x + y)
      }
    }
    out = result
  }
}

// letterCombinations()