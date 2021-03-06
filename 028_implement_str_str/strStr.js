// @link https://leetcode-cn.com/problems/implement-strstr/
// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};

var haystack = "aaaaa",
    needle = "bba";

console.log(strStr(haystack, needle));


var haystack = "hello",
    needle = "ll";

console.log(strStr(haystack, needle));