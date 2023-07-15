const calculateHandler = (userInput) => {
  const yearlyData = []; // per-year results

  let currentSavings = +userInput[0]; // feel free to change the shape of this input object!
  const yearlyContribution = +userInput[1]; // as mentioned: feel free to change the shape...
  const expectedReturn = +userInput[2] / 100;
  const duration = +userInput[3];
  let totalInvestment = currentSavings;
  let totalinterest = 0;

  // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    totalInvestment += yearlyContribution;
    totalinterest += yearlyInterest;

    // totalInvestment = Math.floor(totalInvestment);
    // currentSavings = Math.floor(currentSavings);
    // totalinterest = Math.floor(totalinterest);
    // totalinterest = Math.floor(totalinterest);

    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
      totalInvestment: totalInvestment,
      totalinterest: totalinterest,
    });
  }

  return yearlyData;

  // year :year
  // invested capital= yearly savings +
  // invested capital = yealrycontribution+ initial savings
  // total savings = currentsaving+yearlyinterest
  // interest = currentsavigns*interest
  // totalinterest= all prev interest sum
};

export default calculateHandler;
