// @link https://leetcode-cn.com/problems/valid-anagram/
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    if (s.length === 0) {
        return true;
    }

    // 自定义 Hash，其中的 key 值为 0 ~ 26，对应小写字母 a ~ z
    var counter = new Array(26).fill(0),
        len = s.length,
        indexS = 0,
        indexT = 0,
        i = 0,
        aCharCode = 'a'.charCodeAt(0);
    for (i = 0; i < len; i++) {
        indexS = s.charCodeAt(i) - aCharCode;
        indexT = t.charCodeAt(i) - aCharCode;

        counter[indexS]++;
        counter[indexT]--;
    }

    for (i = 0; i < len; i++) {
        indexS = s.charCodeAt(i) - aCharCode;
        if (counter[indexS] !== 0) {
            return false;
        }
    }

    return true;
};


var s = "anagram", t = "nagaram";
console.log('1 => ', isAnagram(s, t));

s = "rat", t = "car";
console.log('2 => ', isAnagram(s, t));

s = "", t = "";
console.log('3 => ', isAnagram(s, t));

s = "nl", t = "cx";
console.log('4 => ', isAnagram(s, t));
