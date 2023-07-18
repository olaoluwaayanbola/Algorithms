var maxProfit = function (prices) {
    let min_index = 0
    let max_index = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[min_index]) {
            min_index = i
        } else {
            let profit = prices[i] - prices[min_index]
            if (profit > max_index) {
                max_index = profit
            }
        }
    }
    return max_index
