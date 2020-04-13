// @link https://leetcode-cn.com/problems/first-unique-character-in-a-string/
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

/**
 * 使用 map
 * 
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var len = s.length;
    var mark = new Map();
    for (var i = 0; i < len; i++) {
        if (mark.get(s.charAt(i))) {
            mark.set(s.charAt(i), mark.get(s.charAt(i)) + 1);
        } else {
            mark.set(s.charAt(i), 1);
        }
    }

    for (var i = 0; i < len; i++) {
        if (mark.get(s.charAt(i)) == 1) {
            return i;
        }
    }

    return -1;
};


var s = "leetcode";
console.log("leetcode => ", firstUniqChar(s));


var s = "loveleetcode";
console.log("loveleetcode => ", firstUniqChar(s));
