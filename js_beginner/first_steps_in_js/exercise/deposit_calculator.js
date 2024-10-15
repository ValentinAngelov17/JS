function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositMonths = Number(input[1]);
    let yearlyInterestPercentage = Number(input[2]) /100;

    let totalSum = depositSum + depositMonths * ((depositSum * yearlyInterestPercentage) / 12);
    console.log(totalSum)
}
depositCalculator(["200", "3", "5.7"]);