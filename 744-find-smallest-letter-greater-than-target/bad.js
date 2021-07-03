var nextGreatestLetter = function (letters, target) {
    // 使用内置函数，时间复杂度 O(n)
    return letters.find(i => i > target)
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'))
