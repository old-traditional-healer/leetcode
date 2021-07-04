var findMin = function (nums) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2);
        if (nums[pivot] < nums[high]) {
            high = pivot;
        } else if (nums[pivot] > nums[high]) {
            low = pivot + 1;
        } else {
            high -= 1;
        }
    }

    return nums[low];
};

// console.log(findMin([3, 1, 3]))
// console.log(findMin([3, 3, 1, 3]))
// console.log(findMin([2, 0, 1, 1, 1]))
console.log(findMin([1, 2, 3, 4, 5]))
