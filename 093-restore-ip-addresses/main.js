/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  // 给定一个字符串，切割成两部分，每部分长度在 minLen 到 maxLen 之间
  const split2Parts = (str, minLen, maxLen, valueCondtion = null) => {
    const ret = [];
    for (let i = 0; i < str.length; i++) {
      const left = str.substr(0, i);
      const right = str.substr(i);

      if (left.length < minLen || left.length > maxLen || right.length < minLen || right.length > maxLen) continue;

      // 对切分后的值进行判断，只有满足的情况下，才能加入到 ret
      if (valueCondtion) {
        if (!valueCondtion(left) || !valueCondtion(right)) continue;
      }

      ret.push([left, right]);
    }

    return ret;
  };

  const level1 = split2Parts(s, 2, 6);
  if (!level1) return []


  const ret = []
  // 值需要小于 256 并且不能是前导0
  const validValue = i => i < 256 && !(i.length > 1 && i[0] === '0')
  level1.forEach(item => {
    const [left, right] = item;

    const left2Parts = split2Parts(left, 1, 3, validValue);
    if (!left2Parts) return

    const right2Parts = split2Parts(right, 1, 3, validValue);
    if (!right2Parts) return

    left2Parts.forEach(ab => {
      const [a, b] = ab

      right2Parts.forEach(cd => {
        const [c, d] = cd
        ret.push(`${a}.${b}.${c}.${d}`)
      })
    })
  })

  return ret
};

console.log(
  restoreIpAddresses('25525511135')
);
console.log(restoreIpAddresses('101023'));
