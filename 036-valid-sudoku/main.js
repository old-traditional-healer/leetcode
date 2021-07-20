/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rowStore = []
    const colStore = []
    const boxStore = []
    for (let i = 0; i < 9; i++) {
        rowStore.push(new Map()) // 行
        colStore.push(new Map()) // 列
        boxStore.push(new Map()) // 九宫格
    }

    // 行
    for (let i = 0; i < 9; i++) {
        // 列
        for (let j = 0; j < 9; j++) {
            const cur = board[i][j]
            if (cur === '.') {
                continue
            }

            const rowMap = rowStore[i]
            const colMap = colStore[j]
            const boxMap = boxStore[Math.floor(i / 3) + 3 * Math.floor(j / 3)]

            // 如果存在重复的，那么就直接返回 false
            if (rowMap.has(cur) || colMap.has(cur) || boxMap.has(cur)) {
                return false
            }
            rowMap.set(cur, true)
            colMap.set(cur, true)
            boxMap.set(cur, true)
        }
    }

    return true
};


console.log(isValidSudoku(
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
))
