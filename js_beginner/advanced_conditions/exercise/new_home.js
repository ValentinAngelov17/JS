function newHome(input) {
    let type = input[0];
    let number = Number(input[1]);
    let budget = Number(input[2]);
    let totalSum = 0;

    if (type == "Roses") {
        totalSum = number * 5;
        if (number > 80) {
            totalSum = totalSum * 0.9;
        }

    } else if (type == "Dahlias") {
        totalSum = number * 3.80;
        if (number > 80){
            totalSum = totalSum * 0.85;
        }

    } else if (type == "Tulips") {
        totalSum = number * 2.80;
        if (number > 80) {
            totalSum = totalSum * 0.85;
        }

    } else if (type == "Narcissus") {
        totalSum = number * 3;
        if (number < 120) {
            totalSum = totalSum * 1.15;
        }
    } else {
        totalSum = number * 2.50;
        if (number < 80) {
            totalSum = totalSum * 1.20;
        }
    }
    if (budget >= totalSum) {
        let leftMoney = budget - totalSum;
        console.log(`Hey, you have a great garden with ${number} ${type} and ${leftMoney.toFixed(2)} leva left.`)
    } else {
        let leftMoney = totalSum - budget;
        console.log(`Not enough money, you need ${leftMoney.toFixed(2)} leva more.`)
    }
}
newHome(["Narcissus",
"119",
"360"])
