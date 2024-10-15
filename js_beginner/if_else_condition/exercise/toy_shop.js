function toyShop (input) {
    let quantity = 0;
    let totalSum = 0;

    const puzzle = 2.60;
    const doll = 3;
    const teddyBear = 4.10;
    const minion = 8.20;
    const truck = 2;

    let trip = Number(input[0]);
    let numberOfPuzzles = Number(input[1]);
    let numberOfDolls = Number(input[2]);
    let numberofTeddy = Number(input[3]);
    let numberofMinions = Number(input[4]);
    let numberofTrucks = Number(input[5]);

    totalSum = (numberOfPuzzles * puzzle) + (numberOfDolls * doll) + (numberofTeddy * teddyBear) + (numberofMinions * minion) + (numberofTrucks * truck);
    quantity = numberOfPuzzles + numberOfDolls + numberofTeddy + numberofMinions + numberofTrucks;
     
    if (quantity >= 50) {
        totalSum = totalSum - (totalSum * 0.25);

    }
    totalSum = totalSum - (totalSum * 0.10);
    let leftMoney = 0;
    if (totalSum >= trip) {
        leftMoney = totalSum - trip;
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`)
    } else {
        leftMoney = trip - totalSum
        console.log(`Not enough money! ${leftMoney.toFixed(2)} lv needed.`)
    }
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

