function vacationCalculation(input) {
    let neededMoney = Number(input[0]);
    let money = Number(input[1]);
    let counter = 2;
    let spendDays = 0;
    let days = 0;
    let command = input[counter];
    let currentMoney = Number(input[counter + 1]);
    while (true) {
        if (command === "spend") {
            spendDays++;
            money -= currentMoney
            if (money < 0) {
                money = 0
            }
        } else {
            money += currentMoney
        }
        days++;
        if (spendDays == 5 ) {
            console.log("You can't save the money.");
            console.log(days);
            break;
        } else if (counter == (input.length - 2)) {
            break;
        } else {
            counter+= 2;
            command = input[counter];
            currentMoney = Number(input[counter +1]);
        }
       
    }
    if (money >= neededMoney) {
        console.log(`You saved the money for ${days} days.`)
    }

}
vacationCalculation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])


