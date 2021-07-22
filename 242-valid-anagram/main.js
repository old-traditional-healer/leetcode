/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    const map = {}
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        map[element] = map[element] ? map[element] + 1 : 1
    }

    for (let i = 0; i < t.length; i++) {
        const element = t[i];
        if (!map[element]) {
            return false
        }
        map[element]--
    }

    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (map[element]) {
            return false
        }
    }

    return true
};

console.log(isAnagram('anagram', 'nagaram'))
