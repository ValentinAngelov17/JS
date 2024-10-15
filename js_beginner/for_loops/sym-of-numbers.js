function sumOfNumbers(input) {
    let digits = input[0];
    let sum = 0;

    for (index = 0; index < digits.length; index++) {
        sum += Number(digits[index]);

    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["1234"])