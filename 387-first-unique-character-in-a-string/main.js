/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const charMap = {}
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        charMap[char] = charMap[char] ? (charMap[char] + 1) : 1
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (charMap[char] === 1) {
            return i
        }
    }

    return -1
};

console.log(firstUniqChar('dddccdbba'))
