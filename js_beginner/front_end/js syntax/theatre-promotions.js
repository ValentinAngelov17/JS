function solve(typeOfDay, age) {
    let money = 0;
    if (typeOfDay == 'Weekday') {
        if (age > 18 && age <= 64) {
            money = 18;
        } else if(age >= 0 && age <= 18 || age > 64 && age <= 122) {
            money = 12;
        }
    } else if (typeOfDay == 'Weekend') {
        if (age > 18 && age <= 64) {
            money = 20;
         } else if(age >= 0 && age <= 18 || age > 64 && age <= 122) {
            money = 15;
        }
    } else if (typeOfDay == 'Holiday') {
        if (age > 18 && age <= 64) {
            money = 12;
         } else if(age >= 0 && age <= 18) {
            money = 5;
         } else if(age > 64 && age <= 122) {
            money = 10;
        }
    }
    if (money == 0) {
        console.log('Error!')
    } else {
        console.log(`${money}$`)
    }

}
solve('Holiday', 15);