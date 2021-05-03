function calculateMaxProfitWithShortSell(prices) { 
   
    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;
        
    // Loop until lowest price found
    var timeToBuy = true;
        
    // Loop through once
    for (var i = 0; i < prices.length-1; i++) {
        
        // Sell price would be next element
        sellPrice = prices[i+1]; 

        // If lowest price has not been found, set to buy at current
        if (timeToBuy) {
            buyPrice = prices[i];
        }

        // If buy price is less than sell price, continue to next element to buy.
        if (buyPrice < sellPrice) {
            console.log("Test - Entered buy less than sell loop.");
            timeToBuy = true;
        }          

        // If buy price is greater than sell price, check if profit is higher and adjust max profit accordingly.
        else { 
            console.log("Test - Entered sell less than buy loop.");
            var tempProfit = buyPrice - sellPrice;
            if (tempProfit > maxProfit) { maxProfit = tempProfit; }
            timeToBuy = false;
        }

    }
    return maxProfit;       
}

console.log(calculateMaxProfitWithShortSell([4, 7, 5, 9, 6, 2]));
console.log(calculateMaxProfitWithShortSell([2, 6, 3, 8, 5, 3]));
console.log("All in All - $GME to the moon!");