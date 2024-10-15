function sumOfNumbers(input) {
    let target = Number(input[0]);
    let index = 1;
    let sum = 0;
    while(true) {
        if (sum >= target) {
            console.log(sum)
            break;
        }
        sum += Number(input[index]);
        index++;
    }
}
sumOfNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

