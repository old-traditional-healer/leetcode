/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 1. buyMin(i) 表示今天之前买入的最小值
    // 2. sellMax(i) 表示今天之前最小值买入且今天卖掉的获利
    // 3. 比较每次的获利，获利最大即可
    if (prices.length < 2) {
        return 0
    }

    let buyMin = prices[0], sellMax = 0
    prices.forEach(price => {
        // 两个顺序换一下也是可以的
        sellMax = Math.max(sellMax, price - buyMin)
        buyMin = Math.min(buyMin, price)
    })

    return sellMax
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]))
