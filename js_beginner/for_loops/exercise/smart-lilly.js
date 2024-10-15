function smartLilly(input) {
    let totalAge = Number(input[0]);
    let laundry = Number(input[1]);
    let toyPrice = Number(input[2]);
    let birthdayMoney = 0;
    let toysCount = 0;
    let totalMoney = 0;

    for (age =1; age <= totalAge; age++) {
        if (age % 2 == 0) {
            birthdayMoney += (5 * age) - 1;
        } else {
            toysCount++;
        }
    }

    totalMoney = birthdayMoney + (toyPrice * toysCount);
    if (totalMoney >= laundry) {
        console.log(`Yes! ${(totalMoney - laundry).toFixed(2)}`);
    } else {
        console.log(`No! ${(laundry - totalMoney).toFixed(2)}`);
    }
}
smartLilly(["10",
"170.00",
"6"])

