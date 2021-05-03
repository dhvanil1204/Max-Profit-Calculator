function calculateMaxProfit(prices) { 
   
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

    // If sell price is less than buy price, continue to next element.
    if (sellPrice < buyPrice) {
      console.log("Test - Entered sell less than buy loop.");
      timeToBuy = true;
    }          
    
    // If sell price is greater than buy price, check if profit is higher and adjust max profit accordingly.
    else { 
      console.log("Test - Entered buy less than sell loop.");
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) { maxProfit = tempProfit; }
      timeToBuy = false;
    }

  }
  return maxProfit;       
}

console.log(calculateMaxProfit([7, 5, 6, 10, 7, 4, 5, 8]));
console.log(calculateMaxProfit([10, 8, 5, 4, 3, 1]));
console.log("All in All - $GME to the moon!");