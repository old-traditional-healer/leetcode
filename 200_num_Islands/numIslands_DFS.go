// @link https://leetcode-cn.com/problems/number-of-islands/
// 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。
// 一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。
// 你可以假设网格的四个边均被水包围。

// example
//    11110
//    11010
//    11000
//    00000
//       ———————— 一个岛屿
//    11000
//    11000
//    00100
//    00011
//       ———————— 三个岛屿

package main

import "fmt"

func main() {
	grid := [][]byte{
		{'1', '1', '0', '0', '0'},
		{'1', '1', '0', '0', '0'},
		{'0', '0', '1', '0', '0'},
		{'0', '0', '0', '1', '1'},
	}

	// 使用切片传递
	fmt.Printf("numer of islands: %v\n", numIslands(grid[:]))
}

func numIslands(grid [][]byte) int {
	num := 0
	rowsNum := len(grid)

	if rowsNum == 0 {
		return 0
	}

	colsNum := len(grid[0])

	for row := 0; row < rowsNum; row++ {
		for col := 0; col < colsNum; col++ {
			// 逐个遍历元素
			// 如果发现为 '1'，以这个为起点，启动深度优先搜索。搜索的时候把元素置为 '0'
			if grid[row][col] == '1' {
				dfs(grid, row, col, rowsNum, colsNum)
				num++
			}
		}
	}

	return num
}

// 深度优先遍历
// 1. 当前遍历的元素设置为 '0'
// 2. 遇到 '1' 时，启动深度优先搜索，并且增加岛屿数量
// 上下左右遍历
func dfs(grid [][]byte, row int, col int, rowsNum int, colsNum int) {
	grid[row][col] = '0'

	// 上
	if (row-1) >= 0 && grid[row-1][col] == '1' {
		dfs(grid, row-1, col, rowsNum, colsNum)
	}

	// 下
	if (row+1) < rowsNum && grid[row+1][col] == '1' {
		dfs(grid, row+1, col, rowsNum, colsNum)
	}

	// 左
	if (col-1) >= 0 && grid[row][col-1] == '1' {
		dfs(grid, row, col-1, rowsNum, colsNum)
	}

	// 右
	if (col+1) < colsNum && grid[row][col+1] == '1' {
		dfs(grid, row, col+1, rowsNum, colsNum)
	}
}
