/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const map = {}
    for (let i = 0; i < magazine.length; i++) {
        const element = magazine[i];
        map[element] = map[element] ? map[element] + 1 : 1
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const element = ransomNote[i]
        if (!map[element]) {
            return false
        }

        map[element]--
    }

    return true
};

console.log(canConstruct('aa', 'aab'))
