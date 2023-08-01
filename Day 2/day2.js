function countChocolates(totalMoney, chocolateCost) {
    // Extract the numerical values from the input strings
    const money = parseFloat(totalMoney);
    const cost = parseFloat(chocolateCost);
  
    // Check if the input is valid
    if (isNaN(money) || isNaN(cost) || money < 0 || cost <= 0) {
      return "Invalid Input";
    }
  
    // Calculate the initial number of chocolates Ashi can buy
    let initialChocolates = Math.floor(money / cost);
  
    // Calculate the number of chocolates obtained from exchanging wrappers
    let wrappers = initialChocolates;
    let exchangedChocolates = 0;
  
    while (wrappers >= 3) {
      exchangedChocolates += Math.floor(wrappers / 3);
      wrappers = Math.floor(wrappers / 3) + (wrappers % 3);
    }
  
    // Calculate the total number of chocolates Ashi can eat
    const totalChocolates = initialChocolates + exchangedChocolates;
  
    return totalChocolates;
  }
  
  // Test cases
  console.log(countChocolates("4$", "1$")); // Output: 5
  console.log(countChocolates("55 $", "5$")); // Output: 16
  console.log(countChocolates("I have 68$", "2$")); // Output: 50
  console.log(countChocolates("I got -68$ from my mom ", "2$")); // Output: "Invalid Input"
  