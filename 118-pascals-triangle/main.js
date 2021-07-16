/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const ret = []

    for (let i = 1; i <= numRows; i++) {
        const row = new Array(i).fill(1)

        if (i > 2) {
            const mid = i >> 1
            for (let j = 1; j <= mid; j++) {
                row[j] = row[i - j - 1] = ret[i - 2][j - 1] + ret[i - 2][j]
            }
        }

        ret.push(row)
    }

    return ret
};

console.log(generate(5))
