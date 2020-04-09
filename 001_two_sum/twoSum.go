package main

import "fmt"

func main() {
	a := twoSum([]int{2, 3, 3}, 6)

	fmt.Printf("%v\n", a)
}

func twoSum(nums []int, target int) []int {
	var m = make(map[int]int)

	for k, v := range nums {
		left := target - v

		if val, ok := m[left]; ok {
			return []int{val, k}
		}

		m[v] = k
	}

	return []int{0, 0}
}
