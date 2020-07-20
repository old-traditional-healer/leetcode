/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    if (target == null || target == '0000') return -1

    if (deadends.includes(target) || deadends.includes('0000')) return -1

    var q = [],
        visited = new Set(deadends),
        cur,
        step

    q.push('0000')
    visited.add('0000')
    step = 0

    while (q.length > 0) {
        var sz = q.length
        // 当前队列像四周扩散
        for (var i = 0; i < sz; i++) {
            cur = q.shift()

            if (target === cur) {
                return step
            }

            for (var j = 0; j < 4; j++) {
                var up = plusOne(cur, j)
                if (!visited.has(up)) {
                    visited.add(up, true)
                    q.push(up)
                }


                var down = minusOne(cur, j)
                if (!visited.has(down)) {
                    visited.add(down, true)
                    q.push(down)
                }
            }
        }

        step++
    }

    return -1
};

/**
 * 
 * @param {String} str 
 * @param {Number} index 
 */
function plusOne(str, index) {
    var strArr = str.split('')
    if (strArr[index] == '9') {
        strArr[index] = '0'
    } else {
        strArr[index] = (+strArr[index] + 1).toString()
    }

    return strArr.join('')
}

function minusOne(str, index) {
    var strArr = str.split('')
    if (strArr[index] == '0') {
        strArr[index] = '9'
    } else {
        strArr[index] = (+strArr[index] - 1).toString()
    }

    return strArr.join('')
}

console.log(openLock(["0000"], "8888"))