/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.match(/[a-zA-Z0-9]+/g)

    if (!s) return true

    s = s.join('').toLowerCase()

    let i = 0, j = s.length - 1
    while (i < j) {
        if (s[i] !== s[j]) return false
        i++
        j--
    }

    return true
};

console.log(isPalindrome('a manaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpanamb'))
console.log(isPalindrome(' '))
