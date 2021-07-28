/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const map = new Map()

    const state = n => {
        if (n === 0) return 0
        if (n < 0) return Infinity

        if (!map.has(n)) {
            // const res = Math.min(state(n - 1) + 1, state(n - 2) + 1, state(n - 5) + 1)
            let res = Infinity
            for (let coin of coins) {
                res = Math.min(state(n - coin) + 1, res)
            }
            map.set(n, res)
        }

        return map.get(n)
    }

    const res = state(amount)


    return isFinite(res) ? res : -1
};

// console.log(coinChange([1, 7, 10], 14))
// console.log(coinChange([7, 10], 2))
console.log(coinChange([2], 3))
