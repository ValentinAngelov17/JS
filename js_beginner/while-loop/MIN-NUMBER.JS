function minNumber(input) {
    let counter = 0;
    let operation = input[counter];
    let bestNumber = Number.MAX_SAFE_INTEGER;
    while (true) {
        operation = input[counter];
        if (operation === "Stop") {
            break;
        }
        let currentNumber = Number(operation);
        if (currentNumber < bestNumber) {
            bestNumber = currentNumber;
        }
        counter++;
    }
    console.log(bestNumber)
}
minNumber(["-1",
"-2",
"Stop"])

