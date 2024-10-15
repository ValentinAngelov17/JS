function bonusPoints(input) {
    let bonus = 0.0;
    number = Number(input[0]);

    if (number <= 100) {
        bonus = 5;
    } else if (number > 100 & number < 1000) {
        bonus = number * 0.2;
    } else {
        bonus = number * 0.1;
    }

    if (number % 2 == 0) {
        bonus += 1;
    } else if (number % 5 == 0) {
        bonus +=2;
    }
    console.log(bonus);
    let total = bonus + number;
    console.log(total);
}
bonusPoints(["15875"]);