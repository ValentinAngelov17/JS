function familyVacation(input) {
    let budget = Number(input[0]);
    let days = Number(input[1]);
    let pricePerDay = Number(input[2]);
    let percentageTax = Number(input[3]);
    let sum = 0;

    if (days > 7) {
        pricePerDay = pricePerDay * 0.95;
    }

    sum = days * pricePerDay;
    let tax = budget * percentageTax / 100;
    sum = sum + tax;
    let leftMoney = Math.abs(budget - sum);
    if (budget >= sum) {
        console.log(`Ivanovi will be left with ${leftMoney.toFixed(2)} leva after vacation.`)
    } else {
        console.log(`${leftMoney.toFixed(2)} leva needed.`)
    }

}
familyVacation([`500`, '7', '66', '15']);
