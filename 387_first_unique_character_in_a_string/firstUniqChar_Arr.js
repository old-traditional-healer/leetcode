// @link https://leetcode-cn.com/problems/first-unique-character-in-a-string/
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

/**
 * 使用 string
 * 
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var len = s.length;
    var mark = new Array(26).fill(0);
    var aCharCode = 'a'.charCodeAt(0);
    for (var i = 0; i < len; i++) {
        var index = s.charCodeAt(i) - aCharCode;
        mark[index]++;
    }

    for (var i = 0; i < len; i++) {
        var index = s.charCodeAt(i) - aCharCode;
        if (mark[index] == 1) {
            return i;
        }
    }

    return -1;
};


var s = "leetcode";
console.log("leetcode => ", firstUniqChar(s));


var s = "loveleetcode";
console.log("loveleetcode => ", firstUniqChar(s));
