// @see https://leetcode-cn.com/problems/n-queens/
// @see https://rovast.notion.site/N-ef7a7f33a327434fad02457b1619a9bf

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    /**
     * 回溯函数
     * @param {Array} board 路径，这里的路径就是棋盘
     * @param {Array} row 选择列表
     * @param {Array} res 用来回收结果（引用传递）
     */
    const backtrack = (board, row, res) => {
        if (row === board.length) { // 结束条件
            res.push(JSON.parse(JSON.stringify(board)))
            return
        }

        for (let col = 0; col < n; col++) { // 每一行，逐列来遍历
            if (!isValid(board, row, col)) {
                continue
            }

            board[row][col] = 'Q' // 做选择
            backtrack(board, row + 1, res) // 进行下一行决策
            board[row][col] = '.' // 撤销选择
        }
    }

    /**
     * 判断该点能不能放皇后
     * @param {Array} board 整个棋盘
     * @param {Number} row 行
     * @param {Number} col 列
     */
    const isValid = (board, row, col) => {
        // 需要判断以下几种情况
        // 1同一行 2同一列 3左上 4右上 5左下 6右下
        // 由于我们是逐行，从上至下放置的，所以同行的，以及下面的都不需要判断了
        // 优化后：检查列、检查左上、检查右上

        const n = board.length

        // 检查列
        for (let i = 0; i < n; i++) {
            if (board[i][col] === 'Q') return false
        }

        // 左上
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false
        }

        // 右上
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false
        }

        return true
    }

    // 初始化一个空棋盘，用来存放“路径”
    const board = new Array(n).fill('.').map(() => new Array(n).fill('.'))
    const res = []
    backtrack(board, 0, res)

    return res.map(board => {
        return board.map(row => {
            return row.join('')
        })
    })
};


console.log(solveNQueens(4))
