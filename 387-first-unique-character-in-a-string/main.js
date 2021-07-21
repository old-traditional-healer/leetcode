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

    const keys = Object.keys(charMap)
    for (let i = 0; i < keys.length; i++) {
        const element = keys[i]
        if (charMap[element] === 1) {
            return i
        }
    }

    return -1
};

console.log(firstUniqChar('loveleetcode'))
