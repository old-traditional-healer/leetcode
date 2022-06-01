/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
 var removeDigit = function(number, digit) {
    let ans = '0'
    for (let i = 0; i < number.length; i ++) {
        if (number[i] === digit) {
            const sub = number.slice(0, i)  + number.slice(i + 1)
            if (sub > ans) {
                ans = sub
            }
        }
    }
    return ans
};
