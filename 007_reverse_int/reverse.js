/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let out = 0
  while(x!==0) {
    const tail = x % 10
    out = 10 * out + tail
    x = parseInt(x / 10)
    console.log(x)
  }
}

reverse(-123)