// @link https://leetcode-cn.com/problems/string-to-integer-atoi/
// 请你来实现一个 atoi 函数，使其能将字符串转换成整数。

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    var len = str.length,
        start = false, // 是否已开始处理
        positive = true, // 正数
        result = 0; // 输出的值

    for (var i = 0; i < len; i++) {
        // 0 - 9
        if (str.charAt(i) <= '9' && str.charAt(i) >= '0') {
            start = true;
            result = 10 * result + +str.charAt(i);
            continue;
        }

        // 如果是空格，进行下一个检查
        if (str.charAt(i) == ' ' && start == false) {
            continue;
        }

        // 看看首个非空是不是 -
        if (str.charAt(i) == '-' && start == false) {
            positive = false;
            start = true;
            continue;
        }

        if (str.charAt(i) == '+' && start == false) {
            positive = true;
            start = true;
            continue;
        }

        // 其他情况立即结束
        break;
    }

    var MAX = 2147483647;
    var MIN = -2147483648;

    if (positive) {
        return result > MAX ? MAX : result;
    } else {
        result = 0 - result;
        return result < MIN ? MIN : result;
    }
};

var s = "4193 with words";
console.log(myAtoi(s));

var s = "   -42";
console.log(myAtoi(s));

var s = "words and 987";
console.log(myAtoi(s));

var s = "   +-42";
console.log(myAtoi(s));

var s = "2147483646";
console.log(myAtoi(s));