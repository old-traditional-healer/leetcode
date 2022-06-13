/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false

    const map1 = new Map()
    const map2 = new Map()
    const len = s.length

    for (i=0; i < len; i++) {
        const charS = s[i]
        const charT = t[i]

        if (map1.has(charS) && map1.get(charS) != charT) {
            return false
        }

        if (map2.has(charT) && map2.get(charT) != charS) {
            return false
        }

        map1.set(charS, charT)
        map2.set(charT, charS)
    }

    return true
};
