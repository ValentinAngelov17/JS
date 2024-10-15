function godzillaKong(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let dressingPerPerson = Number(input[2]);

    let decoration = budget * 0.10;
    

    if (people >= 150) {
        dressingPerPerson = dressingPerPerson * 0.90;
    };
    let dreesingCost = dressingPerPerson * people;
    let totalSum = dreesingCost + decoration;
    let neededMoney = 0;
    if (totalSum > budget) {
        neededMoney = totalSum - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
    } else {
        neededMoney = budget - totalSum;
        console.log("Action!");
        console.log(`Wingard starts filming with ${neededMoney.toFixed(2)} leva left.`);
        
    }
}
godzillaKong(["15437.62",
"186",
"57.99"])

