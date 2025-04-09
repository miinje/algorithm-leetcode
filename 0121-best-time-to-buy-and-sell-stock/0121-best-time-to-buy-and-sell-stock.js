/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let result = 0;

    for (const price of prices) {
        if (buy > price) {
            buy = price;
        } else if (price - buy > result) {
            result = price - buy;
        }
    }

    return result;
};