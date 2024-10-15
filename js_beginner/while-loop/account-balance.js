function accountBallance(input) {
    let counter = 0;
    let balance = 0;
    let invalid = false;
    while(true) {
        let money = input[counter];
        if (money < 0) {
            invalid = true
            console.log("Invalid operation!")
        }
        if (money === "NoMoreMoney" || invalid) {
            console.log(`Total: ${balance.toFixed(2)}`);
            break;
        }

        console.log(`Increase: ${Number(money).toFixed(2)}`);
        balance += Number(money);
        counter++;
    }
}
accountBallance(["120",
"45.55",
"-150"])

