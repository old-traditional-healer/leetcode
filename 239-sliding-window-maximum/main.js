/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    var win = function () {
        this.q = []
    }
    win.prototype.push = function (n) {
        while (this.q.length && this.q[this.q.length - 1] < n) {
            this.q.pop() // 如果队列里存在比 即将要插入的元素 小的话，需要剔除
        }
        this.q.push(n)
    }
    win.prototype.max = function () {
        return this.q[0] || null
    }
    win.prototype.pop = function (n) {
        if (n === this.q[0]) {
            this.q.shift()
        }
    }


    const res = []
    const wind = new win()

    for (let i = 0; i < nums.length; i++) {
        if (i < k - 1) {
            wind.push(nums[i])
        } else {
            // 滑动窗口向右滑动，增加新的数字
            wind.push(nums[i])
            // 记录当前窗口的最大值
            res.push(wind.max())
            // 移除旧数字
            wind.pop(nums[i - k + 1])
        }
    }

    return res
};
