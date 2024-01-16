/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing 
 * a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5
 */

let prices = [3,11,5,3,6,22,2,9,31];
let profit = 0, currentProfit = 0;

let minPrice = 0, maxPrice=0;
let lowerPriceDate = 0, maxPriceDate = 0;

for(let i=0; i<prices.length; i++){
    let day = i+1, currentPrice=prices[i];

    if(day===1){
        minPrice=currentPrice;
        maxPrice=currentPrice;
    }

    if(currentPrice<minPrice){
        minPrice=currentPrice;
        lowerPriceDate=day;
        //reset
        maxPrice=currentPrice;
        
    }else if(currentPrice>maxPrice){
        maxPrice=currentPrice;
        maxPriceDate=day;
    }
    
    currentProfit=maxPrice-minPrice;

    if(currentProfit>profit){
        profit = currentProfit;
    }
}

console.log(profit)


/*

function maxProfit (prices)  {
    if (prices.length <= 1) return 0

    let min = prices[0]
    let max = 0

    for (let i = 1; i < prices.length; i++) {
        const curr = prices[i]

        if (curr < min) {
            min = curr
        }

        if (curr - min > max) {
            max = curr - min
        }
    }

    return max
}
*/