// @link https://leetcode-cn.com/problems/valid-palindrome/
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length < 2) {
        return true;
    }

    // 只保留数字和字母，并且转为小写字母
    s = s.replace(/[^0-9a-zA-Z]/ig, "").toLocaleLowerCase();

    var len = s.length,
        left = 0,
        right = len - 1;

    // 设置一个左右指针，来回扫
    while (left < right) {
        if (s.charCodeAt(left++) != s.charCodeAt(right--)) {
            return false;
        }
    }

    return true;
};

var s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

s = "race a car";
console.log(isPalindrome(s));

s = "abb";
console.log(isPalindrome(s));
