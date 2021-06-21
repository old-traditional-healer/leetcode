const util = require('util')

// 多层级打印，不然默认 console.log 打印 object 只能打印三层
function print(obj) {
    console.log(util.inspect(obj, false, null, true /* enable colors */))
}

module.exports = print
