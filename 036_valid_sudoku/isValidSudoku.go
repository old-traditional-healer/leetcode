// @link https://leetcode-cn.com/problems/valid-sudoku/
// 判断一个 9x9 的数独是否有效。

package main

import "fmt"

func main() {
	board := [][]byte{
		{'8', '3', '.', '.', '7', '.', '.', '.', '.'},
		{'6', '.', '.', '1', '9', '5', '.', '.', '.'},
		{'.', '9', '8', '.', '.', '.', '.', '6', '.'},
		{'.', '.', '.', '.', '6', '.', '.', '.', '3'},
		{'4', '.', '.', '8', '.', '3', '.', '.', '1'},
		{'7', '.', '.', '.', '2', '.', '.', '.', '6'},
		{'.', '6', '.', '.', '.', '.', '2', '8', '.'},
		{'.', '.', '.', '4', '1', '9', '.', '.', '5'},
		{'.', '.', '.', '.', '8', '.', '.', '7', '9'},
	}

	fmt.Printf("%v\n", isValidSudoku(board))
}

// 使用标记法解答此题
func isValidSudoku(board [][]byte) bool {
	const size = 9

	// 行标记，数组的初始化零值是 false
	var rowMark [9][9]bool

	// 列标记
	var colMark [9][9]bool

	// 块标记
	var gridMark [9][9]bool

	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			if board[i][j] == '.' {
				continue
			}

			// 当前检测的数字，减去 1 是为了方便放在数组里
			current := board[i][j] - '0' - 1

			// 逐行判断是否有重复的数字（i 表示的就是行信息）
			if rowMark[i][current] == true {
				// fmt.Printf("行检测发现有重复数字 坐标[%d][%d] 第 %d 行的数字 %d 重复\n", i, j, i+1, current+1)
				return false
			}
			rowMark[i][current] = true

			// 逐列判断是否有重复的数字（j 表示的就是列信息）
			if colMark[j][current] == true {
				// fmt.Printf("列检测发现有重复数字 坐标[%d][%d] 第 %d 列的数字 %d 重复\n", i, j, j+1, current+1)
				return false
			}
			colMark[j][current] = true

			// 小方格判断是否有重复的数字（i/3*3 + j/3 小格子信息，横向数，把整个区域化为九个格子，i/3*3 + j/3 表示格子的序号）
			if gridMark[i/3*3+j/3][current] == true {
				fmt.Printf("块检测发现有重复数字 坐标[%d][%d] 第 %d 块方格的数字 %d 重复\n", i, j, i/3*3+j/3+1, current+1)
				return false
			}
			gridMark[i/3*3+j/3][current] = true
		}
	}

	return true
}
