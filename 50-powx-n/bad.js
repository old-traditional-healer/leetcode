// 在 myPow(1, -2147483648) 时出现
// RangeError: Maximum call stack size exceeded
var myPow = function (x, n) {
    const quickMul = (x, N) => {
        if (N === 0) return 1
        if (N === 1) return x

        const y = quickMul(x, N >> 1)

        return N % 2 === 0 ? y * y : y * y * x
    }

    return n >= 0 ? quickMul(x, n) : (1 / quickMul(x, - n))
};
