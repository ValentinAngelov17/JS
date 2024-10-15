function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);
    let ship = 0;
    let currentSum = 0;

    if (season == "Spring") {
        ship = 3000;
    } else if (season == "Summer" || season == "Autumn") {
        ship = 4200;
    } else if (season == "Winter") {
        ship = 2600;
    }

    if (fishers <= 6) {
        ship = ship * 0.9;
    } else if (fishers > 6 && fishers <= 11) {
        ship = ship * 0.85;
    } else {
        ship = ship * 0.75;
    }

    if (fishers % 2 == 0 && season != "Autumn") {
        ship = ship * 0.95;
    }

    if (budget >= ship) {
        let leftMoney = budget - ship;
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    } else {
        let neededMoney = ship - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`)
    }
    
}
fishingBoat(["2000",
"Winter",
"13"])


