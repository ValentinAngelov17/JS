function sumOfNumbers(number1, number2) {
    let num1 = Number(number1);
    let num2 = Number(number2);
    let result = 0;
    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    console.log(result);
}
sumOfNumbers("-8", "20");