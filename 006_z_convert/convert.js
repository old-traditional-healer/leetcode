/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * LEETCODEISHIRING
 */
var convert = function(s, numRows) {
  if(numRows === 1) return s
  const res = []
  let index = 0
  let isDown = -1
  for(let i=0; i< numRows; i++) res[i] = ''
  for (let item of s) {
    res[index] += item
    if (index === numRows - 1 || index  === 0) {
      isDown = -isDown
    }
    index += isDown

  }
  return res.join('')
};

convert('LEETCODEISHIRING', 3)