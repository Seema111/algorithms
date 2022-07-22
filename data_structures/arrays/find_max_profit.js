/**
 * @param {number[]} prices
 * @return {number}
 */

//Brute Force
function maxProfit(prices) {
  let globalProfit = 0;
  // the reason prices.length - 1 is because we are using the second for loop to scan every element to the right of i
  for (let i = 0; i < prices.length - 1; i++) {
    // the reason j is i + 1 is because we are scanning all the combinations of the first for loop
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];

      if (currentProfit > globalProfit) {
        globalProfit = currentProfit;
      }
    }
  }

  return globalProfit;
}

//Greedy Algorithm
function maxProfit(prices) {
  let globalProfit = 0;
  // minBuyPrice is set to Infinity because we can guarantee the first element will be set to the buy price
  let minBuyPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (minBuyPrice > prices[i]) {
      minBuyPrice = prices[i];
    }

    const currentProfit = prices[i] - minBuyPrice;

    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
    }
  }

  return globalProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
