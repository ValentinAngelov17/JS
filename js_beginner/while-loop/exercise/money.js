function vendingMachine(input) {
    let money = Number(input[0]);
    money = Math.floor(money * 100)
    let counter = 0;
    while(money > 0) {
        if (money >= 200) {
            money -= 200;
            counter++;
        } else if ( money >= 100) {
            money -= 100;
            counter++;
        } else if ( money >= 50) {
            money -= 50;
            counter++;
        } else if ( money >= 20) {
            money -= 20;
            counter++;
        } else if ( money >= 10) {
            money -= 10;
            counter++;
        } else if ( money >= 5) {
            money -= 5;
            counter++;
        } else if ( money >= 2) {
            money -= 2;
            counter++;
        } else if ( money >= 1) {
            money -= 1;
            counter++;
        }
    }
    console.log(counter)
}
vendingMachine(["1.51"])