/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const rowLen = matrix.length
    const colLen = matrix[0].length
    const rowMap = new Map()
    const colMap = new Map()

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            const cur = matrix[i][j]
            if (cur === 0) {
                rowMap.set(i, true)
                colMap.set(j, true)
            }
        }
    }

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (rowMap.has(i) || colMap.has(j)) {
                matrix[i][j] = 0
            }
        }
    }

    return matrix
};


console.log([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])
console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))
