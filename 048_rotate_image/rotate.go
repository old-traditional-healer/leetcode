package main

import "fmt"

func main() {
	matrix := [][]int{
		{5, 1, 9, 11},
		{2, 4, 8, 10},
		{13, 3, 6, 7},
		{15, 14, 12, 16},
	}

	printMatrix(matrix, "original matrix")

	rotate(matrix)
}

// 翻转90度的算法
// 1. 进行矩阵转置
// 2. 每一行进行反转
func rotate(matrix [][]int) {
	size := len(matrix)

	// 1. 转置矩阵
	//    算法就是按照对角线(0,0 到 size size)，交换横坐标和纵坐标
	for i := 0; i < size; i++ {
		for j := 0; j < i; j++ {
			matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
		}
	}
	// printMatrix(matrix, "after rotate")

	// 2. 每一行反转
	//    reverse
	for i := 0; i < size; i++ {
		left := 0
		right := size - 1
		for left < right {
			matrix[i][left], matrix[i][right] = matrix[i][right], matrix[i][left]
			left++
			right--
		}
	}
	// printMatrix(matrix, "after reverse")
}

func printMatrix(matrix [][]int, title string) {
	fmt.Printf("%s\n", title)

	size := len(matrix)
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			fmt.Printf("%v\t", matrix[i][j])
		}
		fmt.Printf("\n")
	}
}
