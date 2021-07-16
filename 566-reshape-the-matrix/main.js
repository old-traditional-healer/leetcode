/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    if (mat.length * mat[0].length !== r * c) {
        return mat
    }

    // 获取下一个 mat 元素
    let _r = 0, _c = 0
    const getNextMatItem = () => {
        const ret = mat[_r][_c]

        // 逐行取
        _c++
        if (_c === mat[0].length) {
            _c = 0
            _r++
        }

        return ret
    }

    const ret = []

    for (let i = 0; i < r; i++) {
        const row = []
        for (let j = 0; j < c; j++) {
            row.push(getNextMatItem())
        }
        ret.push(row)
    }

    return ret
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4))
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4))
